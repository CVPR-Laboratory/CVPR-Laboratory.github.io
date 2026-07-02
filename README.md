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

## Maintenance

Update content in the data files:

```text
assets/js/data/research.js       Research directions
assets/js/data/people.js         Members and profile data
assets/js/data/achievements.js   Papers, projects, patents, awards
assets/js/data/news.js           News, article content, FAQ
assets/js/data/images.js         Image path, size, fit, position, alt mapping
```

Use real verified information only. If a fact is not yet confirmed, keep:

```text
TODO: 请补充真实信息
```

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
