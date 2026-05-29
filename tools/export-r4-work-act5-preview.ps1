Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$routeJsonPath = @(
  Get-ChildItem -Recurse -File -LiteralPath (Join-Path $projectRoot "docs") |
    Where-Object { $_.Name -like "*R4-WORK_v1.json" } |
    Select-Object -First 1
).FullName
$previewDataPath = Join-Path $projectRoot "playtest\r4-work-act5-preview-data.js"

if (-not $routeJsonPath) {
  throw "Could not find the R4-WORK route JSON under docs."
}

$route = Get-Content -Raw -Encoding UTF8 -LiteralPath $routeJsonPath | ConvertFrom-Json
$blocks = @($route.act5_detail_blocks)
if ($blocks.Count -eq 0) {
  throw "act5_detail_blocks is missing or empty."
}

function Convert-MicroGroup {
  param([Parameter(Mandatory = $true)] $Group)

  $options = @($Group.options | ForEach-Object {
    [ordered]@{
      key = $_.code
      action = $_.label
      feedback = $_.body
    }
  })

  [ordered]@{
    prompt = $Group.prompt
    guide = $Group.guide
    options = $options
  }
}

function Convert-Page {
  param(
    [Parameter(Mandatory = $true)] $Page,
    $MicroGroups = @()
  )

  [ordered]@{
    id = $Page.page_id
    title = $Page.page_title
    location = $Page.location
    paragraphs = @($Page.text)
    microGroups = @($MicroGroups)
  }
}

$sections = @($blocks | ForEach-Object {
  $block = $_
  $directions = @($block.choice_window.directions)

  [ordered]@{
    id = $block.block_id
    title = "$($block.block_id) $($block.block_name)"
    shortTitle = $block.block_name
    prePages = @($block.pages | ForEach-Object { Convert-Page -Page $_ })
    choice = [ordered]@{
      id = $block.choice_window.choice_window_id
      title = $block.choice_window.title
      guide = $block.choice_window.guide
      options = @($directions | ForEach-Object {
        [ordered]@{
          key = $_.direction
          label = $_.label
          detail = $_.description
        }
      })
    }
    directions = @($directions | ForEach-Object {
      $direction = $_
      $microGroupsByPage = @{}
      foreach ($group in @($direction.micro_groups)) {
        $sourcePageId = $group.source_page_id
        if (-not $microGroupsByPage.ContainsKey($sourcePageId)) {
          $microGroupsByPage[$sourcePageId] = New-Object System.Collections.Generic.List[object]
        }
        $microGroupsByPage[$sourcePageId].Add((Convert-MicroGroup -Group $group))
      }

      [ordered]@{
        key = $direction.direction
        title = $direction.label
        feedbackPages = @($direction.feedback_pages | ForEach-Object {
          $pageGroups = @()
          if ($microGroupsByPage.ContainsKey($_.page_id)) {
            $pageGroups = $microGroupsByPage[$_.page_id].ToArray()
          }
          Convert-Page -Page $_ -MicroGroups $pageGroups
        })
      }
    })
  }
})

$data = [ordered]@{
  route = "R4-WORK"
  pool = "POOL-R4-WORK"
  source = "formal-json:act5_detail_blocks"
  generatedAt = (Get-Date -Format "yyyy-MM-dd")
  sections = $sections
}

$counts = [ordered]@{
  sections = $data.sections.Count
  prePages = 0
  choices = 0
  directions = 0
  feedbackPages = 0
  microGroups = 0
  microOptions = 0
}

foreach ($section in $data.sections) {
  $counts.prePages += $section.prePages.Count
  $counts.choices += 1
  $counts.directions += $section.directions.Count
  foreach ($direction in $section.directions) {
    $counts.feedbackPages += $direction.feedbackPages.Count
    foreach ($page in $direction.feedbackPages) {
      $counts.microGroups += $page.microGroups.Count
      foreach ($group in $page.microGroups) {
        $counts.microOptions += $group.options.Count
      }
    }
  }
}

$expected = [ordered]@{
  sections = 5
  prePages = 20
  choices = 5
  directions = 15
  feedbackPages = 35
  microGroups = 20
  microOptions = 60
}

foreach ($key in $expected.Keys) {
  if ($counts[$key] -ne $expected[$key]) {
    throw "Unexpected $key count: $($counts[$key]) expected $($expected[$key])."
  }
}

$json = $data | ConvertTo-Json -Depth 100
$content = "window.R4WorkAct5PreviewData = $json;`r`n"
Set-Content -Encoding UTF8 -LiteralPath $previewDataPath -Value $content

$counts | ConvertTo-Json -Compress
