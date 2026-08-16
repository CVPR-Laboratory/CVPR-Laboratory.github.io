# URL Migration

The public canonical base is `https://cvpr-laboratory.github.io/`. Current root pages replace the former nested pages now retained under `legacy/`.

| Legacy area | Current URL |
| --- | --- |
| `legacy/about_*.html` | `/about.html` |
| `legacy/team_*.html` | `/people.html` or `/profile.html?id=...` |
| `legacy/achievement_*.html` | `/achievements.html` |
| `legacy/news_*.html` | `/news.html` or `/article.html?id=...` |
| `legacy/contact_main.html` | `/contact.html` |

GitHub Pages cannot configure server redirects for these static files, so legacy pages remain available during migration and are excluded from search indexing through `robots.txt`. Do not reuse an existing profile or article ID for a different record. Update canonical tags and `scripts/build-sitemap.mjs` whenever a public root URL changes.
