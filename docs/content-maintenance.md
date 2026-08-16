# Content Maintenance

## Single sources of truth

| Content | File |
| --- | --- |
| Research directions | `assets/js/data/research.js` |
| Members and profiles | `assets/js/data/people.js` |
| Papers, projects, patents and awards | `assets/js/data/achievements.js` |
| News, articles and FAQ | `assets/js/data/news.js` |
| Contact, admissions and collaboration | `assets/js/data/contact.js` |
| Image display metadata | `assets/js/data/images.js` |

Do not duplicate contact details or publication records in render code. Use stable lowercase IDs, provide both `zh` and `en` text, and retain `source`, `status` and update/review metadata. Confirmed fields may be public while unknown profile fields remain blank or `TODO` internally; render code must not expose internal markers.

The 44 faculty paper records were consolidated by LTQ from `Hanxiang Wang.xlsx` and `Yanfen Li.xlsx`. The current Developer B member, news, admissions and collaboration delivery is accepted as reviewed input per the repository owner's instruction on 2026-08-17.

Before release, run `python scripts/optimize-images.py`, `node scripts/build-sitemap.mjs`, and `node scripts/check-static.mjs`, then complete the browser matrix in `test-report.md`.
