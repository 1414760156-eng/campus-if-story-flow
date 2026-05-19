from __future__ import annotations

import html
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "docs" / "剧情小说母版_v4.0"
OUT_DIR = SOURCE_DIR / "阅读版"
BASE_NAME = "武生院沉浸版_小说阅读版_截至第三卷第十五章"

SOURCE_FILES = [
    SOURCE_DIR / "正文_第一卷_行李落在青枫居.md",
    SOURCE_DIR / "正文_第二卷_把手机交出去.md",
    SOURCE_DIR / "正文_第三卷_热闹把人带走.md",
]


def normalize_volume_text(text: str) -> str:
    lines = text.strip().splitlines()
    if lines and lines[0].startswith("# 正文 "):
        lines[0] = "# " + lines[0][len("# 正文 ") :]
    return "\n".join(lines).strip()


def collect_headings(texts: list[str]) -> list[tuple[int, str]]:
    headings: list[tuple[int, str]] = []
    for text in texts:
        for line in text.splitlines():
            if line.startswith("# "):
                headings.append((1, line[2:].strip()))
            elif line.startswith("## "):
                headings.append((2, line[3:].strip()))
    return headings


def make_toc(headings: list[tuple[int, str]]) -> str:
    lines = ["## 目录", ""]
    for level, title in headings:
        if level == 1:
            lines.append(f"- {title}")
        elif level == 2:
            lines.append(f"  - {title}")
    return "\n".join(lines)


def strip_markdown_for_txt(markdown: str) -> str:
    text = markdown
    text = re.sub(r"^#\s+", "", text, flags=re.MULTILINE)
    text = re.sub(r"^##\s+", "", text, flags=re.MULTILINE)
    text = re.sub(r"^>\s?", "", text, flags=re.MULTILINE)
    text = re.sub(r"^\s*-\s+", "· ", text, flags=re.MULTILINE)
    text = text.replace("`", "")
    text = text.replace("---", "\n")
    return text


def markdown_to_simple_html(markdown: str) -> str:
    body: list[str] = []
    in_ul = False

    def close_ul() -> None:
        nonlocal in_ul
        if in_ul:
            body.append("</ul>")
            in_ul = False

    for raw_line in markdown.splitlines():
        line = raw_line.rstrip()
        if not line:
            close_ul()
            continue
        if line == "---":
            close_ul()
            body.append("<hr>")
            continue
        if line.startswith("# "):
            close_ul()
            body.append(f"<h1>{html.escape(line[2:].strip())}</h1>")
            continue
        if line.startswith("## "):
            close_ul()
            body.append(f"<h2>{html.escape(line[3:].strip())}</h2>")
            continue
        if line.startswith("> "):
            close_ul()
            body.append(f"<blockquote>{html.escape(line[2:].strip())}</blockquote>")
            continue
        stripped = line.lstrip()
        if stripped.startswith("- "):
            if not in_ul:
                body.append("<ul>")
                in_ul = True
            body.append(f"<li>{html.escape(stripped[2:].strip())}</li>")
            continue
        close_ul()
        body.append(f"<p>{html.escape(line)}</p>")
    close_ul()

    css = """
    :root { color-scheme: light; }
    body {
      margin: 0;
      background: #f6f3ee;
      color: #221f1b;
      font-family: "Microsoft YaHei", "PingFang SC", "Noto Sans CJK SC", sans-serif;
      line-height: 1.85;
    }
    main {
      max-width: 860px;
      margin: 0 auto;
      padding: 56px 28px 96px;
      background: #fffdf9;
      box-shadow: 0 20px 60px rgba(42, 34, 25, .08);
      min-height: 100vh;
    }
    h1 {
      font-size: 2rem;
      margin: 2.4em 0 .8em;
      padding-top: .2em;
      letter-spacing: 0;
      color: #2b2925;
    }
    h1:first-child { margin-top: 0; }
    h2 {
      font-size: 1.35rem;
      margin: 2em 0 .7em;
      color: #5c4431;
      letter-spacing: 0;
    }
    p {
      font-size: 1.03rem;
      margin: .55em 0;
      text-indent: 2em;
    }
    blockquote {
      margin: 1em 0;
      padding: .8em 1em;
      border-left: 4px solid #b68556;
      background: #fbf2e8;
      color: #4d4036;
    }
    ul {
      padding-left: 1.5em;
      margin: .7em 0 1em;
    }
    li { margin: .25em 0; }
    hr {
      border: none;
      border-top: 1px solid #e4d8cc;
      margin: 2.2em 0;
    }
    @media (max-width: 720px) {
      main { padding: 32px 18px 72px; }
      h1 { font-size: 1.65rem; }
      h2 { font-size: 1.2rem; }
      p { font-size: 1rem; }
    }
    """
    return (
        "<!doctype html>\n<html lang=\"zh-CN\">\n<head>\n"
        "<meta charset=\"utf-8\">\n"
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n"
        f"<title>{html.escape(BASE_NAME)}</title>\n"
        f"<style>{css}</style>\n"
        "</head>\n<body>\n<main>\n"
        + "\n".join(body)
        + "\n</main>\n</body>\n</html>\n"
    )


def build_reading_markdown() -> tuple[str, int]:
    bodies = [normalize_volume_text(path.read_text(encoding="utf-8")) for path in SOURCE_FILES]
    headings = collect_headings(bodies)
    chapter_count = sum(1 for level, title in headings if level == 2 and title.startswith("第"))
    toc = make_toc(headings)

    front_matter = "\n".join(
        [
            "# 武生院沉浸版",
            "",
            "## 小说阅读版（截至第三卷第十五章）",
            "",
            "> 这是给试读朋友看的未完稿阅读版，只保留小说正文和必要阅读说明，不夹杂制作说明或过程记录。",
            "",
            "当前包含：",
            "",
            "- 第一卷《行李落在青枫居》",
            "- 第二卷《把手机交出去》",
            "- 第三卷《热闹把人带走》截至第十五章《不是花絮》",
            "",
            "读完后可以重点反馈：人物是否像真实大学生，宿舍四人的关系是否有张力，校园地点和生活细节是否可信，冲突是否足够让人往下看，配角出场是否自然。",
            "",
            "---",
            "",
            toc,
            "",
            "---",
            "",
        ]
    )

    return front_matter + "\n\n---\n\n".join(bodies) + "\n", chapter_count


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    markdown, chapter_count = build_reading_markdown()

    md_path = OUT_DIR / f"{BASE_NAME}.md"
    html_path = OUT_DIR / f"{BASE_NAME}.html"
    txt_path = OUT_DIR / f"{BASE_NAME}.txt"

    md_path.write_text(markdown, encoding="utf-8", newline="\n")
    html_path.write_text(markdown_to_simple_html(markdown), encoding="utf-8", newline="\n")
    txt_path.write_text(strip_markdown_for_txt(markdown), encoding="utf-8", newline="\n")

    print(f"markdown={md_path}")
    print(f"html={html_path}")
    print(f"txt={txt_path}")
    print(f"chapters={chapter_count}")


if __name__ == "__main__":
    main()
