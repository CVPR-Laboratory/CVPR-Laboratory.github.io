# Deployment And Rollback

## Preview and validate

```powershell
python scripts/optimize-images.py
node scripts/build-sitemap.mjs
node scripts/check-static.mjs
python -m http.server 8787 --bind 127.0.0.1
```

Open `http://127.0.0.1:8787/index.html`. Stop the server with `Ctrl+C`.

## Publish

Fetch first, integrate remote changes without force pushing, then push the reviewed commit to `main`. GitHub Pages should publish from the repository root. Confirm the commit's checks and open the deployed home, profile, article, sitemap and 404 pages.

## Roll back

Use `git revert <bad-commit>` and push the new revert commit. Do not rewrite shared history. If only content is wrong, correct the relevant data file and issue a normal follow-up commit. Preserve the failing workflow logs and commit ID for diagnosis.
