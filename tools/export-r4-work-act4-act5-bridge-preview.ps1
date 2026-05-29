Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$routeJsonPath = @(
  Get-ChildItem -Recurse -File -LiteralPath (Join-Path $projectRoot "docs") |
    Where-Object { $_.Name -like "*R4-WORK_v1.json" } |
    Select-Object -First 1
).FullName
$previewDataPath = Join-Path $projectRoot "playtest\r4-work-act4-act5-bridge-preview-data.js"

if (-not $routeJsonPath) {
  throw "Could not find the R4-WORK route JSON under docs."
}

$route = Get-Content -Raw -Encoding UTF8 -LiteralPath $routeJsonPath | ConvertFrom-Json
$act4L06 = @($route.act4_detail_blocks | Where-Object { $_.block_id -eq "ACT4-WORK-L06" })[0]
$act5B01 = @($route.act5_detail_blocks | Where-Object { $_.block_id -eq "ACT5-WORK-B01" })[0]

if (-not $act4L06 -or -not $act5B01) {
  throw "Missing ACT4-WORK-L06 or ACT5-WORK-B01."
}
if ($act4L06.next_block -ne "ACT5-WORK-B01") {
  throw "ACT4-WORK-L06.next_block should be ACT5-WORK-B01."
}
if ($act5B01.previous_block -ne "ACT4-WORK-L06") {
  throw "ACT5-WORK-B01.previous_block should be ACT4-WORK-L06."
}

function Convert-MicroGroup {
  param([Parameter(Mandatory = $true)] $Group)

  [ordered]@{
    prompt = $Group.prompt
    guide = $Group.guide
    options = @($Group.options | ForEach-Object {
      [ordered]@{
        key = $_.code
        action = $_.label
        feedback = $_.body
      }
    })
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

function Convert-Block {
  param([Parameter(Mandatory = $true)] $Block)

  $directions = @($Block.choice_window.directions)

  [ordered]@{
    id = $Block.block_id
    title = "$($Block.block_id) $($Block.block_name)"
    shortTitle = $Block.block_name
    prePages = @($Block.pages | ForEach-Object { Convert-Page -Page $_ })
    choice = [ordered]@{
      id = $Block.choice_window.choice_window_id
      title = $Block.choice_window.title
      guide = $Block.choice_window.guide
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
      $fallbackIndex = 0
      foreach ($group in @($direction.micro_groups)) {
        $sourcePageId = $null
        if ($group.PSObject.Properties.Name -contains "source_page_id") {
          $sourcePageId = $group.source_page_id
        }
        if (-not $sourcePageId) {
          $feedbackPages = @($direction.feedback_pages)
          $targetIndex = [Math]::Min($fallbackIndex, [Math]::Max(0, $feedbackPages.Count - 1))
          $sourcePageId = $feedbackPages[$targetIndex].page_id
          $fallbackIndex += 1
        }
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
}

$sections = @(
  (Convert-Block -Block $act4L06),
  (Convert-Block -Block $act5B01)
)

$data = [ordered]@{
  route = "R4-WORK"
  pool = "POOL-R4-WORK"
  source = "formal-json:act4_detail_blocks.ACT4-WORK-L06 + act5_detail_blocks.ACT5-WORK-B01"
  generatedAt = (Get-Date -Format "yyyy-MM-dd")
  exportFileName = "r4-work-act4-act5-bridge-run.json"
  end = [ordered]@{
    title = "R4-WORK Act4 -> Act5 bridge preview complete"
    location = "ACT4-WORK-L06 -> ACT5-WORK-B01"
    progress = "Bridge check complete"
    paragraphs = @(
      "This bridge preview reads only ACT4-WORK-L06 and ACT5-WORK-B01 from the formal JSON.",
      "The exporter verified ACT4-WORK-L06.next_block = ACT5-WORK-B01 and ACT5-WORK-B01.previous_block = ACT4-WORK-L06."
    )
  }
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
  sections = 2
  prePages = 8
  choices = 2
  directions = 6
  feedbackPages = 12
  microGroups = 8
  microOptions = 24
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
