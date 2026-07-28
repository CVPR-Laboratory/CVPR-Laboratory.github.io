# Developer A Maintenance Guide

## Local Preview

Run the following command from the repository root, then open `http://127.0.0.1:8787/index.html` in a browser.

```powershell
python -m http.server 8787 --bind 127.0.0.1
```

Check the four Developer A pages at 360, 390, 768, 1024, and 1440 pixels in both Chinese/English and dark/light themes. Verify keyboard access to the skip link, navigation menu, filters, and back-to-top control.

## Pre-publish Check

```powershell
node scripts/check-static.mjs
```

The check validates root-page metadata, required page roots, local asset paths, exact file-name casing, and visible TODO markers in the research and achievement data.

For publication records, update only `assets/js/data/achievements.js`. Keep the official English title, DOI link, stable ID, source, and `publicationStatus`. Homepage figures are calculated from records marked `verified`.

## GitHub Pages Release

1. Create a tag for the known-good production revision before merging a release.
2. Push the reviewed static files to the branch configured as the GitHub Pages source.
3. Confirm the `Static Pages Check` workflow passes.
4. Open the production site and smoke-test the four Developer A pages immediately, after 24 hours, and after 72 hours.

## Rollback

If a release regresses, redeploy the most recent known-good tag or commit through the configured Pages source. Do not delete historical files as a rollback mechanism. Record the release tag, timestamp, operator, and reason in the release note.

## Troubleshooting

- Blank content: verify the page includes `data-page`, `page-root`, and its page-specific data script.
- Missing image: run the static check and verify filename capitalization against `images/`.
- Incorrect count: confirm the record type and `publicationStatus: "verified"` in `achievements.js`.
- High CPU: confirm reduced-motion mode, tab visibility pause, and canvas resizing still work after effects changes.
