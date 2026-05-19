from __future__ import annotations

import argparse
import json
import re
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}


def clean_text(value: str) -> str:
    value = value.replace("\u3000", " ")
    value = re.sub(r"[ \t]+", " ", value)
    return value.strip()


def paragraph_text(paragraph: ET.Element) -> str:
    parts: list[str] = []
    for node in paragraph.iter():
        if node.tag == f"{{{NS['w']}}}t" and node.text:
            parts.append(node.text)
        elif node.tag == f"{{{NS['w']}}}tab":
            parts.append("\t")
        elif node.tag == f"{{{NS['w']}}}br":
            parts.append("\n")
    return clean_text("".join(parts))


def table_text(table: ET.Element) -> list[list[str]]:
    rows: list[list[str]] = []
    for row in table.findall("w:tr", NS):
        cells: list[str] = []
        for cell in row.findall("w:tc", NS):
            cell_parts = [paragraph_text(p) for p in cell.findall(".//w:p", NS)]
            cells.append(clean_text(" | ".join(part for part in cell_parts if part)))
        if any(cells):
            rows.append(cells)
    return rows


def extract_docx(path: Path) -> dict[str, object]:
    with zipfile.ZipFile(path) as docx:
        xml = docx.read("word/document.xml")
    root = ET.fromstring(xml)
    body = root.find("w:body", NS)
    blocks: list[dict[str, object]] = []
    if body is None:
        return {"path": str(path), "blocks": blocks, "text": ""}

    for child in body:
        if child.tag == f"{{{NS['w']}}}p":
            text = paragraph_text(child)
            if text:
                blocks.append({"type": "paragraph", "text": text})
        elif child.tag == f"{{{NS['w']}}}tbl":
            rows = table_text(child)
            if rows:
                blocks.append({"type": "table", "rows": rows})

    text_parts: list[str] = []
    for block in blocks:
        if block["type"] == "paragraph":
            text_parts.append(str(block["text"]))
        else:
            rows = block["rows"]
            for row in rows:  # type: ignore[assignment]
                text_parts.append(" | ".join(row))

    return {"path": str(path), "blocks": blocks, "text": "\n".join(text_parts)}


def write_text_output(output_dir: Path, source_path: Path, text: str) -> Path:
    safe_name = source_path.stem + ".txt"
    target = output_dir / safe_name
    target.write_text(text, encoding="utf-8")
    return target


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source-dir", required=True)
    parser.add_argument("--output-dir", required=True)
    args = parser.parse_args()

    source_dir = Path(args.source_dir)
    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    manifest: list[dict[str, object]] = []
    for path in sorted(source_dir.iterdir(), key=lambda item: item.name):
        if path.suffix.lower() == ".docx":
            extracted = extract_docx(path)
            text_path = write_text_output(output_dir, path, str(extracted["text"]))
            json_path = output_dir / f"{path.stem}.json"
            json_path.write_text(json.dumps(extracted, ensure_ascii=False, indent=2), encoding="utf-8")
            manifest.append({"source": str(path), "text": str(text_path), "json": str(json_path)})
        elif path.suffix.lower() in {".md", ".txt", ".json"}:
            text = path.read_text(encoding="utf-8")
            text_path = write_text_output(output_dir, path, text)
            manifest.append({"source": str(path), "text": str(text_path)})

    (output_dir / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
