from __future__ import annotations

import argparse
import difflib
import json
import re
import sys
import time
from pathlib import Path
from urllib.parse import quote
from urllib.request import ProxyHandler, Request, build_opener


def normalize(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", " ", value.lower()).strip()


parser = argparse.ArgumentParser(description="Validate publication DOIs against Crossref titles.")
parser.add_argument("--proxy", help="Optional HTTP(S) proxy, for example http://127.0.0.1:7897")
args = parser.parse_args()

root = Path(__file__).resolve().parents[1]
source = root / "assets" / "js" / "data" / "achievements.js"
rows = []
for raw_line in source.read_text(encoding="utf-8").splitlines():
    line = raw_line.strip().rstrip(",")
    if not line.startswith('["') or not line.endswith("]"):
        continue
    try:
        row = json.loads(line)
    except json.JSONDecodeError:
        continue
    if len(row) == 6:
        rows.append(row)

handlers = [ProxyHandler({"http": args.proxy, "https": args.proxy})] if args.proxy else []
opener = build_opener(*handlers)
failures = []
linkless = []
for record_id, _year, expected_title, _authors, _venue, doi in rows:
    if not doi:
        linkless.append(record_id)
        continue
    request = Request(
        "https://api.crossref.org/works/" + quote(doi, safe=""),
        headers={"User-Agent": "CVPR-Lab-maintenance/1.0 (mailto:1993786963@qq.com)"},
    )
    item = None
    last_error = None
    for attempt in range(3):
        try:
            with opener.open(request, timeout=30) as response:
                item = json.load(response)["message"]
            break
        except Exception as error:
            last_error = error
            time.sleep(0.5 * (attempt + 1))
    if item is None:
        failures.append(f"{record_id}: {doi} did not resolve via Crossref after 3 attempts ({last_error})")
        continue
    actual_title = (item.get("title") or [""])[0]
    score = difflib.SequenceMatcher(None, normalize(expected_title), normalize(actual_title)).ratio()
    if score < 0.9:
        failures.append(f"{record_id}: {doi} resolves to a different title: {actual_title}")
    time.sleep(0.1)

if failures:
    print("\n".join(failures), file=sys.stderr)
    raise SystemExit(1)

print(f"Validated {len(rows) - len(linkless)} DOI/title pairs; {len(linkless)} records intentionally have no DOI link.")
