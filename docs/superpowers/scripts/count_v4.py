from pathlib import Path

root = next(Path("docs").glob("*v4.0"))
total = 0
body = 0
chapters = 0

for path in sorted(root.glob("*.md")):
    text = path.read_text(encoding="utf-8")
    total += len(text)
    if path.name.startswith("正文_"):
        count = sum(1 for line in text.splitlines() if line.startswith("## "))
        body += len(text)
        chapters += count
        print(f"{path.name}\t{len(text)}\t{count}")

print(f"BODY_TOTAL\t{body}")
print(f"MD_TOTAL\t{total}")
print(f"CHAPTERS\t{chapters}")
