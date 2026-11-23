"""Build self-contained copies of lessons for publishing as claude.ai Artifacts.
Inlines assets/course.css and assets/quiz.js, strips the document skeleton (added at publish time),
and rewrites links between lessons to their artifact URLs from tools/artifacts.json.
Usage: python3 -I tools/build_artifacts.py <workspace> <outdir>"""
import json, pathlib, re, sys
src, out = map(pathlib.Path, sys.argv[1:3])
urls = json.loads((src / "tools/artifacts.json").read_text())
css = (src / "assets/course.css").read_text(); js = (src / "assets/quiz.js").read_text()
def inline(t):
    t = t.replace('<link rel="stylesheet" href="../assets/course.css">', "<style>\n" + css + "</style>")
    return t.replace('<script src="../assets/quiz.js"></script>', "<script>\n" + js + "</script>")
def link(t, prefix):
    for name, url in urls.items():
        t = t.replace(f'href="{prefix}{name}"', f'href="{url}"')
    return t
(out / "reference").mkdir(parents=True, exist_ok=True)
for lesson in sorted((src / "lessons").glob("*.html")):
    t = link(inline(lesson.read_text()), "").replace("../reference/", "reference/")
    t = re.sub(r'<!doctype html>\s*<html[^>]*>\s*<head>\s*<meta charset="utf-8">\s*<meta name="viewport"[^>]*>\s*', "", t)
    t = re.sub(r"</head>\s*<body>\s*", "", t); t = re.sub(r"</body>\s*</html>\s*$", "", t)
    (out / lesson.name).write_text(t)
for ref in (src / "reference").glob("*.html"):
    (out / "reference" / ref.name).write_text(link(inline(ref.read_text()), "../lessons/"))
