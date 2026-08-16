# CVPR Laboratory Website

This repository contains the static GitHub Pages website for CVPR-Laboratory.

The current version is a pure static, data-driven laboratory website built with native HTML, CSS, SVG, Canvas, and JavaScript. It does not use React, Vue, Next.js, Vite, Webpack, backend services, build steps, external CDN assets, Bootstrap, Swiper, or Font Awesome.

## Core Pages

```text
index.html          Home
about.html          About
research.html       Research
people.html         People
achievements.html   Achievements
news.html           News
contact.html        Contact
profile.html        Member profile template, e.g. profile.html?id=wang-hanxiang
article.html        News article template, e.g. article.html?id=news-001
```

Legacy HTML pages from the previous site have been moved to `legacy/`.

## Structure

```text
assets/
  css/
    base.css          variables, reset, base typography
    layout.css        containers, sections, grids, page heroes
    components.css    header, footer, cards, buttons, filters, FAQ
    effects.css       particles, glow, scanlines, reveal animations
    pages.css         page-specific visual systems
    responsive.css    tablet and mobile rules
  js/
    theme.js          dark/light theme
    i18n.js           zh/en language system
    components.js     header and footer
    render.js         data-driven page rendering
    effects.js        Canvas particles, tilt, scroll reveal, typewriter
    site.js           bootstrapping and interactions
    data/
      images.js
      research.js
      people.js
      achievements.js
      news.js
      contact.js
  images/common/
    placeholder-tech.svg
    default-avatar.svg
  files/cv/
```

Existing image assets remain in `images/` and are referenced directly by the data files. This avoids duplicating or overwriting original images.

## Local Preview

Open `index.html` directly, or run a tiny static server:

```bash
python -m http.server 8787 --bind 127.0.0.1
```

Then visit:

```text
http://127.0.0.1:8787/index.html
```

## GitHub Pages Deployment

The site is fully static. Deploy the repository root with GitHub Pages. No build command is required.

## Release Checks

Run the static validation before publishing:

```powershell
python scripts/optimize-images.py
node scripts/build-sitemap.mjs
node scripts/check-static.mjs
python scripts/check-dois.py --proxy http://127.0.0.1:7897
```

Release, rollback, content, media, privacy, URL migration, testing and known limitations are documented in `docs/`.

## Maintenance

Update content in the data files:

```text
assets/js/data/research.js       Research directions
assets/js/data/people.js         Members and profile data
assets/js/data/achievements.js   Papers, projects, patents, awards
assets/js/data/news.js           News, article content, FAQ
assets/js/data/contact.js        Contact, admissions, collaboration
assets/js/data/images.js         Image path, size, fit, position, alt mapping
```

Use real verified information only. If a fact is not yet confirmed, keep the public page conservative instead of inventing content. Internal data may still carry a review status, but user-facing copy should use wording such as:

```text
真实信息待核验后公开
Verified information will be published after review.
```

## 2026-07-21 Developer A Update - LTQ

- LTQ updated `assets/js/data/achievements.js` with five traceable achievement records from the provided faculty CV / information sheet instead of public TODO placeholders.
- LTQ changed achievement statistics to be generated from structured achievement types, avoiding manual `--` numbers.
- LTQ added DOI / official-link rendering for achievement records that provide a link.
- LTQ replaced visible TODO wording in Developer A pages with conservative review-pending copy.
- LTQ added static fallback content to `index.html`, `about.html`, `research.html`, and `achievements.html` so the pages are not empty when scripts are unavailable.

## 2026-07-28 Developer A Update - LTQ

- LTQ consolidated the two faculty publication lists into 44 de-duplicated, source-backed paper records; corrected seven inconsistent DOI entries against public Crossref title records.
- LTQ completed the four research-direction data records with bilingual content, stable anchors, research fields, members, representative publications, captions, update dates, and source notes.
- LTQ made homepage and achievement statistics count only verified records, added DOI rendering, image dimensions, a high-priority hero preload, and page-specific data loading for the four Developer A pages.
- LTQ added keyboard skip navigation, visible focus states, mobile-menu ARIA state, Canvas visibility pause and resize throttling, `404.html`, editor attributes, static CI checks, and the Developer A maintenance guide.

## 2026-08-17 Integrated Release - LTQ

- LTQ integrated Developer Jia and Developer Yi deliveries while retaining the 44 faculty publications sourced from the two supplied paper lists.
- LTQ repaired news media paths, centralized contact data, added source/review status to people, news and FAQ records, and kept unconfirmed profile fields unpublished.
- LTQ completed canonical/Open Graph metadata, sitemap and robots configuration, full media inventory with WebP delivery, release checks, and the maintenance documentation set.

## Image Rules

Images should be configured with:

```javascript
image: "images/index/index_research_RS.png",
imageFit: "cover",
imagePosition: "center",
imageAlt: {
  zh: "遥感目标检测方向示意图",
  en: "Illustration for remote sensing object detection"
}
```

Portraits use square/circular containers with `object-fit: cover` and `object-position: center top`. Gallery images keep natural proportions where possible. Missing images fall back to `assets/images/common/placeholder-tech.svg` or `assets/images/common/default-avatar.svg`.

## Theme And Language

Theme:

```text
dark  default high-tech theme
light ice-blue glass theme
```

Language:

```text
zh default
en English
```

Language priority:

```text
URL ?lang=zh/en > localStorage > zh
```

Examples:

```text
index.html?lang=en
research.html#remote-sensing
profile.html?id=wang-hanxiang
article.html?id=news-001
```
