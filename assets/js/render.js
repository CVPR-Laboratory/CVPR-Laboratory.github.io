(function () {
  window.CVPR = window.CVPR || {};

  var fallbackImage = "assets/images/common/placeholder-tech.svg";
  var fallbackAvatar = "assets/images/common/default-avatar.svg";

  function data() {
    return window.CVPR_DATA || {};
  }

  function lang() {
    return window.CVPR.i18n ? window.CVPR.i18n.getLang() : "zh";
  }

  function t(path, fallback) {
    return window.CVPR.i18n ? window.CVPR.i18n.get(path, fallback) : fallback || path;
  }

  function L(value, fallback) {
    var localized = window.CVPR.i18n ? window.CVPR.i18n.localize(value, fallback) : fallback || "";
    return cleanDisplayValue(localized);
  }

  function pendingText() {
    return "";
  }

  function cleanDisplayValue(value) {
    if (Array.isArray(value)) {
      return value.map(cleanDisplayValue).filter(Boolean);
    }
    if (value && typeof value === "object") {
      return value;
    }
    var text = String(value == null ? "" : value);
    if (/^\s*TODO\b/i.test(text)) return pendingText();
    return text
      .replace(/\s*TODO[:：][^。.!?]*(。|\.|!|\?)?/gi, "")
      .trim();
  }

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function list(items) {
    return (items || []).map(function (item) {
      return "<li>" + esc(cleanDisplayValue(item)) + "</li>";
    }).join("");
  }

  function chips(items) {
    return '<div class="chip-row">' + (items || []).map(function (item) {
      return '<span class="neon-chip">' + esc(cleanDisplayValue(item)) + "</span>";
    }).join("") + "</div>";
  }

  function achievementTitles(ids) {
    var records = data().ACHIEVEMENTS || [];
    return (ids || []).map(function (id) {
      var record = records.find(function (item) { return item.id === id; });
      return record ? L(record.title) : id;
    });
  }

  function imageTag(options) {
    var src = options.src || fallbackImage;
    var fallback = options.avatar ? fallbackAvatar : fallbackImage;
    var imageMeta = (data().IMAGES || []).find(function (item) { return item.src === src; });
    var width = options.width || (imageMeta && imageMeta.width);
    var height = options.height || (imageMeta && imageMeta.height);
    var size = width && height ? ' width="' + esc(width) + '" height="' + esc(height) + '"' : "";
    var priority = options.priority ? ' fetchpriority="high"' : "";
    var webp = /^(?:images|assets\/images)\/.+\.(?:png|jpe?g)$/i.test(src)
      ? "assets/images/optimized/" + src.replace(/\.(?:png|jpe?g)$/i, ".webp")
      : "";
    var img = '<img class="' + esc(options.className || "") + '" src="' + esc(src) + '" alt="' + esc(options.alt || "") + '"' + size + priority + ' loading="' + (options.eager ? "eager" : "lazy") + '" decoding="async" style="--fit:' + esc(options.fit || "cover") + ';--pos:' + esc(options.position || "center") + ';" onerror="this.onerror=null;this.src=\'' + fallback + '\';">';
    return webp ? '<picture><source srcset="' + esc(webp) + '" type="image/webp">' + img + '</picture>' : img;
  }

  function pageHero(config) {
    return [
      '<section class="page-hero page-hero-' + esc(config.key) + '">',
      '  <canvas class="particle-canvas" data-particle-canvas></canvas>',
      '  <div class="tech-grid-bg" aria-hidden="true"></div>',
      '  <div class="page-orb page-orb-a" aria-hidden="true"></div>',
      '  <div class="page-orb page-orb-b" aria-hidden="true"></div>',
      '  <div class="container page-hero-inner">',
      '    <div class="hero-copy reveal">',
      '      <span class="eyebrow">' + esc(config.eyebrow) + '</span>',
      '      <h1 class="page-title gradient-text">' + esc(config.title) + '</h1>',
      '      <p class="page-subtitle">' + esc(config.subtitle) + '</p>',
      '    </div>',
      '    <div class="holo-mark reveal" data-tilt aria-hidden="true">',
      '      <span></span><span></span><span></span>',
      '      <b>' + esc(config.code || "AI") + '</b>',
      '    </div>',
      '  </div>',
      '</section>'
    ].join("");
  }

  function sectionTitle(kicker, title, text) {
    return [
      '<div class="section-heading reveal">',
      '  <span class="eyebrow">' + esc(kicker) + '</span>',
      '  <h2 class="gradient-text">' + esc(title) + '</h2>',
      text ? '  <p>' + esc(text) + '</p>' : "",
      '</div>'
    ].join("");
  }

  function statCards() {
    var stats = data().ACHIEVEMENT_STATS || [];
    var achievements = (data().ACHIEVEMENTS || []).filter(function (record) {
      return record.publicationStatus === "verified";
    });
    return stats.filter(function (item) {
      return !item.type || achievements.some(function (record) { return record.type === item.type; });
    }).map(function (item) {
      var value = item.value || (item.type ? String(achievements.filter(function (record) { return record.type === item.type; }).length) : "0");
      var numeric = /^\d+$/.test(value);
      return [
        '<article class="stat-card glass-card reveal" data-tilt>',
        '  <span class="stat-beam"></span>',
        '  <strong class="stat-number" ' + (numeric ? 'data-countup="' + esc(value) + '"' : "") + '>' + esc(value) + '</strong>',
        '  <p>' + esc(L(item.label)) + '</p>',
        '</article>'
      ].join("");
    }).join("");
  }

  function researchMiniCard(item, index) {
    return [
      '<article class="research-card glass-card reveal" data-tilt style="--delay:' + (index * 70) + 'ms">',
      '  <a href="research.html#' + esc(item.anchor) + '">',
      '    <div class="card-media detection-frame">',
      imageTag({ src: item.image, alt: L(item.imageAlt), fit: item.imageFit, position: item.imagePosition }),
      '      <span class="detect-box detect-box-a"></span><span class="detect-box detect-box-b"></span>',
      '    </div>',
      '    <div class="card-body">',
      '      <span class="tech-icon tech-icon-' + esc(item.icon) + '"></span>',
      '      <h3>' + esc(L(item.title)) + '</h3>',
      '      <p>' + esc(L(item.subtitle)) + '</p>',
      chips(L(item.keywords).slice(0, 3)),
      '    </div>',
      '  </a>',
      '</article>'
    ].join("");
  }

  function memberCard(person, index) {
    return [
      '<a class="member-card glass-card reveal filter-item" href="profile.html?id=' + esc(person.id) + '" data-category="' + esc(person.category) + '" data-tilt style="--delay:' + (index * 55) + 'ms">',
      '  <div class="avatar-ring">',
      imageTag({ src: person.avatar, alt: L(person.name) + " " + L(person.role), fit: person.avatarFit, position: person.avatarPosition, avatar: true }),
      '  </div>',
      '  <div class="member-meta">',
      '    <span class="category-code">' + esc(t("common." + person.category, person.category)) + '</span>',
      '    <h3>' + esc(L(person.name)) + '</h3>',
      '    <p>' + esc(L(person.role)) + '</p>',
      chips(L(person.research).slice(0, 2)),
      '  </div>',
      '</a>'
    ].join("");
  }

  function achievementItem(item, index) {
    var link = item.link ? '<a class="achievement-link" href="' + esc(item.link) + '" target="_blank" rel="noopener">' + esc(lang() === "zh" ? "查看 DOI / 官方链接" : "View DOI / Official Link") + '</a>' : "";
    var description = L(item.description);
    var doi = item.doi ? '<span>DOI: ' + esc(item.doi) + '</span>' : "";
    return [
      '<article class="achievement-item glass-card reveal filter-item" data-category="' + esc(item.type) + '" data-tilt style="--delay:' + (index * 50) + 'ms">',
      '  <div class="achievement-year">' + esc(item.year || "—") + '</div>',
      '  <div class="achievement-body">',
      '    <span class="category-code">' + esc(t("common." + (item.type === "paper" ? "publications" : item.type + "s"), item.type)) + '</span>',
      '    <h3>' + esc(L(item.title)) + '</h3>',
      description ? '    <p>' + esc(description) + '</p>' : "",
      '    <div class="achievement-meta"><span>' + esc(item.authors || "—") + '</span><span>' + esc(item.venue || "—") + '</span>' + doi + '<span>' + esc(L(item.status)) + '</span></div>',
      link,
      '  </div>',
      '</article>'
    ].join("");
  }

  function newsCard(item, index) {
    return [
      '<article class="news-card glass-card reveal filter-item" data-category="' + esc(item.categoryKey) + '" data-tilt style="--delay:' + (index * 55) + 'ms">',
      '  <a href="article.html?id=' + esc(item.id) + '">',
      '    <div class="news-media detection-frame">',
      imageTag({ src: item.image, alt: L(item.imageAlt), fit: item.imageFit, position: item.imagePosition }),
      '    </div>',
      '    <div class="news-body">',
      '      <div class="news-meta"><span>' + esc(L(item.category)) + '</span><time>' + esc(item.date) + '</time></div>',
      '      <h3>' + esc(L(item.title)) + '</h3>',
      '      <p>' + esc(L(item.summary)) + '</p>',
      chips(L(item.tags)),
      '    </div>',
      '  </a>',
      '</article>'
    ].join("");
  }

  function renderHome(root) {
    var research = data().RESEARCH || [];
    var people = (data().PEOPLE || []).slice(0, 6);
    var news = data().NEWS || [];
    root.innerHTML = [
      '<section class="home-hero">',
      '  <canvas class="particle-canvas" data-particle-canvas></canvas>',
      '  <div class="tech-grid-bg" aria-hidden="true"></div>',
      '  <div class="hero-glow hero-glow-a" aria-hidden="true"></div>',
      '  <div class="hero-glow hero-glow-b" aria-hidden="true"></div>',
      '  <div class="container hero-inner">',
      '    <div class="hero-copy reveal">',
      '      <span class="eyebrow">AI VISION / CYBER LAB / DIGITAL INTELLIGENCE</span>',
      '      <h1 class="hero-title gradient-text"><span>Computer Vision</span><span>&amp; Pattern</span><span>Recognition</span><span>Laboratory</span></h1>',
      '      <h2>计算机视觉与模式识别实验室</h2>',
      '      <p class="type-line"><span data-typewriter="Object Detection|Intelligent Perception|AI Vision|Smart Agriculture|Remote Sensing|Medical Image Analysis"></span></p>',
      '      <p class="hero-desc">' + esc(lang() === "zh" ? "面向智能视觉、深度学习、目标检测与跨场景感知的未来科研空间。" : "A future-facing research space for intelligent vision, deep learning, object detection, and cross-scene perception.") + '</p>',
      '      <div class="hero-actions"><a class="btn btn-primary" href="research.html">' + esc(t("common.exploreResearch")) + '</a><a class="btn btn-ghost" href="people.html">' + esc(t("common.viewPeople")) + '</a></div>',
      '    </div>',
      '    <div class="hero-lab-panel reveal" data-tilt>',
      '      <div class="vision-window detection-frame">',
      imageTag({ src: "images/index/index_slideshow_01.png", alt: lang() === "zh" ? "首页人工智能视觉横幅" : "AI vision homepage banner", fit: "cover", position: "center", width: 2730, height: 1535, eager: true, priority: true }),
      '        <span class="detect-box main-box"><b>vision-core 0.98</b></span>',
      '        <span class="detect-box sub-box"><b>feature-map</b></span>',
      '      </div>',
      '      <div class="ai-chip"><span></span><b>CVPR-LAB</b><small>Neural Perception Engine</small></div>',
      '      <div class="feature-grid">' + Array.from({ length: 36 }, function (_, i) { return '<span style="--i:' + i + '"></span>'; }).join("") + '</div>',
      '      <div class="signal-panel"><b>DETECTION STREAM</b><i></i><i></i><i></i></div>',
      '    </div>',
      '  </div>',
      '  <a class="scroll-cue" href="#home-overview" aria-label="Scroll"><span></span></a>',
      '</section>',
      '<section id="home-overview" class="section section-overview">',
      '  <div class="container two-column">',
      '    <div class="glass-card large-copy reveal" data-tilt>',
      '      <span class="eyebrow">LAB PROFILE</span>',
      '      <h2 class="gradient-text">' + esc(lang() === "zh" ? "面向未来智能感知的视觉实验室" : "A Vision Lab for Future Intelligent Perception") + '</h2>',
      '      <p>' + esc(lang() === "zh" ? "CVPR实验室聚焦计算机视觉、模式识别、深度学习及智慧农业等方向，依托曲阜师范大学计算机学院开展科研创新与人才培养。" : "CVPR-Lab is affiliated with the School of Computer Science at Qufu Normal University and focuses on computer vision, pattern recognition, deep learning, and smart agriculture.") + '</p>',
      '    </div>',
      '    <div class="metric-grid">' + statCards() + '</div>',
      '  </div>',
      '</section>',
      '<section class="section">',
      '  <div class="container">',
      sectionTitle("RESEARCH MATRIX", lang() === "zh" ? "四大智能视觉研究方向" : "Four Intelligent Vision Directions", lang() === "zh" ? "聚焦精准农业、遥感、医学图像与红外感知中的关键视觉问题。" : "Key vision problems in precision agriculture, remote sensing, medical imaging, and infrared perception."),
      '    <div class="research-grid">' + research.map(researchMiniCard).join("") + '</div>',
      '  </div>',
      '</section>',
      '<section class="section section-dashboard">',
      '  <div class="container">',
      sectionTitle("ACHIEVEMENT DATA CENTER", lang() === "zh" ? "科研成果" : "Research Achievements", lang() === "zh" ? "汇集实验室论文、科研项目、知识产权与获奖荣誉。" : "Laboratory papers, research projects, intellectual property, and awards."),
      '    <div class="dashboard-grid">' + statCards() + '</div>',
      '    <div class="achievement-preview">' + (data().ACHIEVEMENTS || []).map(achievementItem).join("") + '</div>',
      '  </div>',
      '</section>',
      '<section class="section">',
      '  <div class="container">',
      sectionTitle("MEMBER GALAXY", lang() === "zh" ? "团队成员" : "Lab Members", lang() === "zh" ? "汇聚实验室教师、研究生与毕业成员。" : "Faculty, postgraduate students, and alumni of the laboratory."),
      '    <div class="people-grid compact">' + people.map(memberCard).join("") + '</div>',
      '    <div class="section-actions reveal"><a class="btn btn-ghost" href="people.html">' + esc(t("common.viewAll")) + '</a></div>',
      '  </div>',
      '</section>',
      '<section class="section">',
      '  <div class="container">',
      sectionTitle("RESEARCH FEED", lang() === "zh" ? "新闻动态信息流" : "Research Feed", lang() === "zh" ? "汇集实验室动态、学术前沿与科研进展。" : "Laboratory updates, research frontiers, and scientific progress."),
      '    <div class="news-grid">' + news.map(newsCard).join("") + '</div>',
      '  </div>',
      '</section>',
      '<section class="section final-cta">',
      '  <div class="container">',
      '    <div class="glass-card cta-panel reveal" data-tilt>',
      '      <span class="eyebrow">JOIN / COLLABORATE</span>',
      '      <h2 class="gradient-text">' + esc(lang() === "zh" ? "招生与合作交流" : "Admissions and Collaboration") + '</h2>',
      '      <p>' + esc(lang() === "zh" ? "实验室面向计算机视觉、深度学习、智慧农业、医学影像分析与遥感目标检测等方向开展招生和合作交流。" : "The lab welcomes admissions and collaboration in computer vision, deep learning, smart agriculture, medical image analysis, and remote sensing object detection.") + '</p>',
      '      <a class="btn btn-primary" href="contact.html">' + esc(t("nav.contact")) + '</a>',
      '    </div>',
      '  </div>',
      '</section>'
    ].join("");
  }

  function renderAbout(root) {
    var gallery = [
      ["images/index/lab_environment.png", lang() === "zh" ? "实验室环境照片" : "Laboratory environment photo", "contain", "center"],
      ["images/index/index_news_recommend_01.png", lang() === "zh" ? "实验室活动图片" : "Laboratory activity image", "cover", "center"],
      ["images/index/index_quick_entrance_01.png", lang() === "zh" ? "实验室活动图片" : "Laboratory activity image", "cover", "center"],
      ["images/index/index_quick_entrance_04.png", lang() === "zh" ? "团队活动图片" : "Team activity image", "cover", "center"],
      ["images/index/index_slideshow_04.png", lang() === "zh" ? "实验室相册图片" : "Laboratory gallery image", "cover", "center"],
      ["images/index/index_slideshow_05.png", lang() === "zh" ? "实验室相册图片" : "Laboratory gallery image", "cover", "center"]
    ];
    var timeline = lang() === "zh" ? [
      ["2020", "旧站资料显示：实验室正式成立，首批研究生入学。"]
    ] : [
      ["2020", "Existing site data indicates the lab was established and the first postgraduate cohort joined."]
    ];
    root.innerHTML = [
      pageHero({ key: "about", eyebrow: "ABOUT THE LAB", title: lang() === "zh" ? "实验室概况" : "About the Laboratory", subtitle: lang() === "zh" ? "了解实验室的发展定位、研究特色、团队文化与学术活动。" : "Mission, research strengths, team culture, and academic activities.", code: "ABOUT" }),
      '<section class="section"><div class="container archive-grid">',
      '  <article class="glass-card archive-copy reveal" data-tilt><span class="eyebrow">PROFILE</span><h2>' + esc(lang() === "zh" ? "实验室简介" : "Lab Profile") + '</h2><p>' + esc(lang() === "zh" ? "CVPR实验室（Computer Vision and Pattern Recognition Laboratory）依托曲阜师范大学计算机学院，旧站资料显示成立于2020年。实验室致力于计算机视觉、模式识别、深度学习及智慧农业等领域的前沿研究，旨在培养具有创新能力和国际视野的高层次人才。" : "CVPR-Lab is affiliated with the School of Computer Science at Qufu Normal University according to existing site data, and the old page states that it was established in 2020. The lab focuses on computer vision, pattern recognition, deep learning, and smart agriculture.") + '</p></article>',
      '  <article class="glass-card archive-copy reveal" data-tilt><span class="eyebrow">POSITIONING</span><h2>' + esc(lang() === "zh" ? "发展定位" : "Mission") + '</h2><p>' + esc(lang() === "zh" ? "面向智能视觉、数字农业、遥感解译、医学影像和红外感知等交叉场景，建设具有科研创新、人才培养和技术转化能力的实验室。" : "The lab aims to address intelligent vision, digital agriculture, remote-sensing interpretation, medical imaging, and infrared perception through research innovation, talent development, and technology transfer.") + '</p></article>',
      '  <article class="glass-card archive-copy reveal" data-tilt><span class="eyebrow">FEATURES</span><h2>' + esc(lang() === "zh" ? "研究特色" : "Research Features") + '</h2><p>' + esc(lang() === "zh" ? "围绕小目标、细粒度、复杂背景、多尺度和跨模态等关键视觉问题，构建从算法设计到场景应用的研究链路。" : "The research frame connects algorithm design with scenario applications around small objects, fine-grained cues, complex backgrounds, multi-scale features, and multimodal perception.") + '</p></article>',
      '</div></section>',
      '<section class="section"><div class="container">',
      sectionTitle("TIMELINE", lang() === "zh" ? "发展历程" : "Development Timeline", lang() === "zh" ? "记录现有资料中可追溯的发展节点。" : "Traceable milestones from the available laboratory records."),
      '  <div class="timeline">' + timeline.map(function (item) { return '<article class="timeline-item reveal"><span>' + esc(item[0]) + '</span><p>' + esc(item[1]) + '</p></article>'; }).join("") + '</div>',
      '</div></section>',
      '<section class="section"><div class="container">',
      sectionTitle("CULTURE", lang() === "zh" ? "实验室文化" : "Lab Culture", ""),
      '  <div class="culture-grid">',
      ["创新|Innovation|鼓励探索未知，勇于挑战前沿难题，以创新驱动科研发展。|Explore unknowns and challenge frontier problems through innovation.", "协作|Collaboration|倡导团队合作，跨学科交流，实现协同效应。|Promote teamwork and interdisciplinary collaboration.", "求真|Rigor|崇尚科学精神，严谨治学，追求真理与卓越。|Pursue scientific rigor, truth, and excellence.", "奉献|Contribution|服务社会，推动技术落地，践行科技报国使命。|Serve society and translate technology responsibly."].map(function (raw) {
        var parts = raw.split("|");
        return '<article class="culture-card glass-card reveal" data-tilt><span class="tech-icon tech-icon-node"></span><h3>' + esc(lang() === "zh" ? parts[0] : parts[1]) + '</h3><p>' + esc(lang() === "zh" ? parts[2] : parts[3]) + '</p></article>';
      }).join(""),
      '  </div></div></section>',
      '<section class="section"><div class="container">',
      sectionTitle("GALLERY", lang() === "zh" ? "学术活动与实验室相册" : "Activities and Gallery", lang() === "zh" ? "记录实验室学术交流、团队活动与科研环境。" : "Academic exchanges, team activities, and the laboratory environment."),
      '  <div class="gallery-grid">' + gallery.map(function (item, index) {
        return '<figure class="gallery-item glass-card reveal" data-tilt style="--delay:' + (index * 60) + 'ms">' + imageTag({ src: item[0], alt: item[1], fit: item[2], position: item[3] }) + '<figcaption>' + esc(item[1]) + '</figcaption></figure>';
      }).join("") + '</div>',
      '</div></section>'
    ].join("");
  }

  function renderResearch(root) {
    var research = data().RESEARCH || [];
    root.innerHTML = [
      pageHero({ key: "research", eyebrow: "RESEARCH DIRECTIONS", title: lang() === "zh" ? "研究方向" : "Research Directions", subtitle: lang() === "zh" ? "面向农业、遥感、医学与红外场景开展计算机视觉研究。" : "Computer vision research for agriculture, remote sensing, medicine, and infrared sensing.", code: "RESEARCH" }),
      '<section class="section research-tabs-section"><div class="container">',
      '  <div class="anchor-tabs reveal">' + research.map(function (item) { return '<a href="#' + esc(item.anchor) + '">' + esc(L(item.title)) + '</a>'; }).join("") + '</div>',
      '  <div class="research-matrix">' + research.map(function (item, index) {
        return [
          '<article id="' + esc(item.anchor) + '" class="research-block glass-card reveal" data-tilt style="--delay:' + (index * 80) + 'ms">',
          '  <div class="research-visual detection-frame">',
          imageTag({ src: item.image, alt: L(item.imageAlt), fit: item.imageFit, position: item.imagePosition }),
          '    <span class="detect-box detect-box-a"></span><span class="detect-box detect-box-b"></span><span class="scan-beam"></span>',
          '  </div>',
          '  <div class="research-info">',
          '    <span class="tech-icon tech-icon-' + esc(item.icon) + '"></span>',
          '    <h2>' + esc(L(item.title)) + '</h2>',
          '    <p>' + esc(L(item.description)) + '</p>',
          chips(L(item.keywords)),
          '    <div class="research-columns">',
          '      <div><h3>' + esc(lang() === "zh" ? "问题" : "Problems") + '</h3><ul>' + list(L(item.keyProblems)) + '</ul></div>',
          '      <div><h3>' + esc(lang() === "zh" ? "方法" : "Methods") + '</h3><ul>' + list(L(item.topics)) + '</ul></div>',
          '      <div><h3>' + esc(lang() === "zh" ? "应用" : "Applications") + '</h3><ul>' + list(L(item.applications)) + '</ul></div>',
          '    </div>',
          '    <div class="research-records">' + ((item.members || []).length ? '<p><b>' + esc(lang() === "zh" ? "成员：" : "Members: ") + '</b>' + esc(item.members.join(", ")) + '</p>' : "") + (achievementTitles(item.representativeAchievements).length ? '<p><b>' + esc(lang() === "zh" ? "代表成果：" : "Representative achievements: ") + '</b>' + esc(achievementTitles(item.representativeAchievements).join("; ")) + '</p>' : "") + (item.updatedAt ? '<p><b>' + esc(lang() === "zh" ? "更新：" : "Updated: ") + '</b>' + esc(item.updatedAt) + '</p>' : "") + '</div>',
          '    <p class="research-caption">' + esc(L(item.caption)) + '</p>',
          '  </div>',
          '</article>'
        ].join("");
      }).join("") + '</div>',
      '</div></section>'
    ].join("");
  }

  function renderPeople(root) {
    var people = data().PEOPLE || [];
    var filters = ["all", "teacher", "postgraduate", "undergraduate", "alumni"];
    root.innerHTML = [
      pageHero({ key: "people", eyebrow: "LAB MEMBERS", title: lang() === "zh" ? "团队成员" : "Lab Members", subtitle: lang() === "zh" ? "实验室教师、研究生、本科生与毕业成员。" : "Faculty, postgraduate students, undergraduates, and alumni.", code: "PEOPLE" }),
      '<section class="section"><div class="container">',
      '  <div class="filter-bar reveal" data-filter-scope="people-grid">' + filters.map(function (filter, index) {
        return '<button class="filter-chip' + (index === 0 ? " is-active" : "") + '" type="button" data-filter="' + esc(filter) + '">' + esc(filter === "all" ? t("common.all") : t("common." + filter)) + '</button>';
      }).join("") + '</div>',
      '  <div id="people-grid" class="people-grid">' + people.map(memberCard).join("") + '</div>',
      '</div></section>'
    ].join("");
  }

  function renderProfile(root) {
    var id = new URLSearchParams(window.location.search).get("id");
    var people = data().PEOPLE || [];
    var person = id ? people.find(function (item) { return item.id === id; }) : null;
    if (!person) {
      root.innerHTML = [
        pageHero({ key: "profile", eyebrow: "404", title: lang() === "zh" ? "未找到成员" : "Member Not Found", subtitle: lang() === "zh" ? "该成员不存在或已下线" : "This member does not exist or has been removed", code: "404" }),
        '<section class="section"><div class="container" style="text-align:center">',
        '<p>' + esc(lang() === "zh" ? "您访问的成员页面不存在。" : "The member page you are looking for does not exist.") + '</p>',
        '<div class="section-actions reveal"><a class="btn btn-primary" href="people.html">' + esc(t("common.backPeople")) + '</a></div>',
        '</div></section>'
      ].join("");
      document.title = "404 | CVPR-Lab";
      return;
    }
    document.title = L(person.name) + " | CVPR-Lab";
    var profileDesc = lang() === "zh"
      ? (L(person.name) + "，" + L(person.role) + "。" + L(person.bio).slice(0, 80))
      : (L(person.name) + ", " + L(person.role) + ". " + L(person.bio).slice(0, 120));
    var jsonLdProfile = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: L(person.name),
      jobTitle: L(person.role),
      url: window.location.href,
      image: person.avatar,
      email: person.email && person.email !== "TODO" ? "mailto:" + person.email : undefined,
      sameAs: person.homepage ? [person.homepage] : [],
      affiliation: { "@type": "CollegeOrUniversity", name: "Qufu Normal University" },
      description: profileDesc
    };
    injectPageMeta({
      title: document.title,
      description: profileDesc,
      image: person.avatar,
      type: "profile",
      jsonLd: jsonLdProfile
    });
    root.innerHTML = [
      pageHero({ key: "profile", eyebrow: "RESEARCHER DIGITAL PROFILE", title: L(person.name), subtitle: L(person.role), code: "PROFILE" }),
      '<section class="section"><div class="container profile-layout">',
      '  <aside class="profile-side glass-card reveal" data-tilt>',
      '    <div class="avatar-ring large">' + imageTag({ src: person.avatar, alt: L(person.name), fit: person.avatarFit, position: person.avatarPosition, avatar: true }) + '</div>',
      '    <h2>' + esc(L(person.name)) + '</h2>',
      '    <p>' + esc(L(person.role)) + '</p>',
      chips(L(person.research)),
      '    <div class="profile-actions">',
      person.email && person.email !== "TODO" ? '<a class="btn btn-ghost" href="mailto:' + esc(person.email) + '">' + esc(person.email) + '</a>' : "",
      person.cv ? '<a class="btn btn-primary" href="' + esc(person.cv) + '" target="_blank" rel="noopener">' + esc(lang() === "zh" ? "查看简历" : "View CV") + '</a>' : "",
      person.homepage ? '<a class="btn btn-ghost" href="' + esc(person.homepage) + '" target="_blank" rel="noopener">' + esc(lang() === "zh" ? "学术主页" : "Academic Profile") + '</a>' : "",
      '    </div>',
      '  </aside>',
      '  <div class="profile-main">',
      profileSection(lang() === "zh" ? "个人简介" : "Biography", L(person.bio)),
      profileListSection(lang() === "zh" ? "教育经历" : "Education", L(person.education)),
      profileListSection(lang() === "zh" ? "科研经历" : "Research Experience", L(person.experience)),
      profileListSection(lang() === "zh" ? "代表成果" : "Selected Publications", L(person.publications)),
      '    <div class="section-actions reveal"><a class="btn btn-ghost" href="people.html">' + esc(t("common.backPeople")) + '</a></div>',
      '  </div>',
      '</div></section>'
    ].join("");
  }

  function profileSection(title, content) {
    return '<article class="profile-section glass-card reveal"><h2>' + esc(title) + '</h2><p>' + esc(content) + '</p></article>';
  }

  function profileListSection(title, items) {
    var confirmed = (items || []).map(sanitizeText).filter(function (item) {
      return item && !/(待补充|待核验|pending(?: verification)?)/i.test(item);
    });
    if (!confirmed.length) return "";
    return '<article class="profile-section glass-card reveal"><h2>' + esc(title) + '</h2><ul class="signal-list">' + list(confirmed) + '</ul></article>';
  }

  function renderAchievements(root) {
    var items = (data().ACHIEVEMENTS || []).filter(function (item) { return item.publicationStatus === "verified"; });
    var filters = [["all", t("common.all")]].concat(["paper", "project", "patent", "award"].filter(function (type) {
      return items.some(function (item) { return item.type === type; });
    }).map(function (type) { return [type, t("common." + (type === "paper" ? "publications" : type + "s"))]; }));
    root.innerHTML = [
      pageHero({ key: "achievements", eyebrow: "RESEARCH ACHIEVEMENTS", title: lang() === "zh" ? "科研成果" : "Research Achievements", subtitle: lang() === "zh" ? "实验室论文、科研项目、知识产权与获奖荣誉。" : "Laboratory papers, research projects, intellectual property, and awards.", code: "RESULTS" }),
      '<section class="section"><div class="container">',
      '  <div class="dashboard-grid">' + statCards() + '</div>',
      '  <div class="filter-bar reveal" data-filter-scope="achievement-list">' + filters.map(function (filter, index) {
        return '<button class="filter-chip' + (index === 0 ? " is-active" : "") + '" type="button" data-filter="' + esc(filter[0]) + '">' + esc(filter[1]) + '</button>';
      }).join("") + '</div>',
      '  <div id="achievement-list" class="achievement-list">' + items.map(achievementItem).join("") + '</div>',
      '</div></section>'
    ].join("");
  }

  function renderNews(root) {
    var items = data().NEWS || [];
    var filters = [["all", t("common.all")], ["lab-news", t("common.labNews")], ["frontiers", t("common.frontiers")], ["notice", t("common.notice")]];
    root.innerHTML = [
      pageHero({ key: "news", eyebrow: "LAB NEWS", title: lang() === "zh" ? "新闻动态" : "News", subtitle: lang() === "zh" ? "实验室动态、学术前沿、通知公告与常见问题。" : "Laboratory updates, research frontiers, notices, and frequently asked questions.", code: "NEWS" }),
      '<section class="section"><div class="container">',
      '  <div class="filter-bar reveal" data-filter-scope="news-grid">' + filters.map(function (filter, index) {
        return '<button class="filter-chip' + (index === 0 ? " is-active" : "") + '" type="button" data-filter="' + esc(filter[0]) + '">' + esc(filter[1]) + '</button>';
      }).join("") + '</div>',
      '  <div id="news-grid" class="news-grid">' + items.map(newsCard).join("") + '</div>',
      '</div></section>',
      '<section class="section"><div class="container">',
      sectionTitle("FAQ", lang() === "zh" ? "常见问题" : "Frequently Asked Questions", ""),
      '  <div class="faq-list">' + (data().FAQ || []).map(function (item, index) {
        return '<article class="faq-item glass-card reveal"><button type="button" class="faq-question" aria-expanded="false"><span>' + esc(L(item.question)) + '</span><b>+</b></button><div class="faq-answer"><p>' + esc(L(item.answer)) + '</p></div></article>';
      }).join("") + '</div>',
      '</div></section>'
    ].join("");
  }

  function renderArticle(root) {
    var id = new URLSearchParams(window.location.search).get("id");
    var items = data().NEWS || [];
    var item = id ? items.find(function (entry) { return entry.id === id; }) : null;
    if (!item) {
      root.innerHTML = [
        pageHero({ key: "article", eyebrow: "404", title: lang() === "zh" ? "未找到文章" : "Article Not Found", subtitle: lang() === "zh" ? "该文章不存在或已下线" : "This article does not exist or has been removed", code: "404" }),
        '<section class="section"><div class="container" style="text-align:center">',
        '<p>' + esc(lang() === "zh" ? "您访问的文章不存在。" : "The article you are looking for does not exist.") + '</p>',
        '<div class="section-actions reveal"><a class="btn btn-primary" href="news.html">' + esc(t("common.backNews")) + '</a></div>',
        '</div></section>'
      ].join("");
      document.title = "404 | CVPR-Lab";
      return;
    }
    document.title = L(item.title) + " | CVPR-Lab";
    var articleDesc = L(item.summary);
    var jsonLdArticle = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: L(item.title),
      description: articleDesc,
      datePublished: item.date,
      url: window.location.href,
      image: item.image,
      keywords: (item.tags && item.tags[lang()]) ? item.tags[lang()].join(", ") : "",
      publisher: { "@type": "Organization", name: "CVPR-Lab", url: window.location.origin },
      mainEntityOfPage: { "@type": "WebPage", url: window.location.href }
    };
    injectPageMeta({
      title: document.title,
      description: articleDesc,
      image: item.image,
      type: "article",
      jsonLd: jsonLdArticle
    });
    root.innerHTML = [
      pageHero({ key: "article", eyebrow: L(item.category), title: L(item.title), subtitle: item.date, code: "READ" }),
      '<section class="section"><div class="container article-layout">',
      '  <article class="article-panel glass-card reveal">',
      '    <div class="article-cover detection-frame">' + imageTag({ src: item.image, alt: L(item.imageAlt), fit: item.imageFit, position: item.imagePosition }) + '</div>',
      '    <div class="article-meta">' + chips(L(item.tags)) + '</div>',
      '    <p>' + esc(L(item.content)) + '</p>',
      '    <div class="section-actions"><a class="btn btn-ghost" href="news.html">' + esc(t("common.backNews")) + '</a></div>',
      '  </article>',
      '</div></section>'
    ].join("");
  }

  function renderContact(root) {
    var contact = data().CONTACT || {};
    var contactEmail = contact.email || "";
    var contactPhone = contact.phone || "";
    var contactAddress = L(contact.address);
    var admissionsDesc = L(contact.admissions);
    var collabDesc = L(contact.collaboration);
    var wechat = contact.wechat || {};
    root.innerHTML = [
      pageHero({ key: "contact", eyebrow: "CONTACT CONSOLE", title: lang() === "zh" ? "通信控制台" : "Contact Console", subtitle: lang() === "zh" ? "招生、合作与学术交流入口。" : "Entry point for admissions, collaboration, and academic exchange.", code: "COMMS" }),
      '<section class="section"><div class="container contact-grid">',
      '  <article class="contact-card glass-card reveal" data-tilt><span class="tech-icon tech-icon-node"></span><h2>' + esc(lang() === "zh" ? "联系信息" : "Contact Information") + '</h2><p>' + esc(contactEmail) + '</p><button class="btn btn-ghost" type="button" data-copy-value="' + esc(contactEmail) + '">' + esc(t("common.copy")) + '</button><p class="muted">' + esc(lang() === "zh" ? "电话：" : "Phone: ") + esc(contactPhone) + '</p><p class="muted">' + esc(lang() === "zh" ? "地址：" : "Address: ") + esc(contactAddress) + '</p></article>',
      '  <article class="contact-card glass-card reveal" data-tilt><span class="tech-icon tech-icon-satellite"></span><h2>' + esc(lang() === "zh" ? "招生方向" : "Admissions") + '</h2><p>' + esc(admissionsDesc) + '</p><div class="signal-bars"><i></i><i></i><i></i><i></i></div></article>',
      '  <article class="contact-card glass-card reveal" data-tilt><span class="tech-icon tech-icon-scan"></span><h2>' + esc(lang() === "zh" ? "合作交流" : "Collaboration") + '</h2><p>' + esc(collabDesc) + '</p><div class="signal-bars"><i></i><i></i><i></i><i></i></div></article>',
      '  <article class="map-console glass-card reveal" data-tilt><div class="radar"><span></span><span></span><span></span><b></b></div><h2>' + esc(lang() === "zh" ? "坐标网格" : "Coordinate Grid") + '</h2><p>' + esc(lang() === "zh" ? '曲阜师范大学日照校区 · 山东省日照市烟台北路 80 号' : 'Qufu Normal University Rizhao Campus · 80 North Yantai Road, Rizhao, Shandong') + '</p></article>',
      '  <article class="qr-console glass-card reveal" data-tilt><div class="qr-frame">' + imageTag({ src: wechat.image, alt: lang() === "zh" ? "CVPR 实验室微信公众号二维码" : "CVPR Lab WeChat QR", fit: "contain", position: "center" }) + '</div><h2>' + esc(lang() === "zh" ? "二维码通道" : "QR Channel") + '</h2><p>' + esc(L(wechat.label)) + '</p></article>',
      '</div></section>'
    ].join("");
  }

  function injectPageMeta(opts) {
    var canonicalUrl = new URL(window.location.href);
    canonicalUrl.searchParams.delete("lang");
    canonicalUrl.hash = "";
    var url = canonicalUrl.href;
    var title = opts.title || document.title;
    var description = opts.description || "";
    var image = new URL(opts.image || "images/index/index_slideshow_01.png", window.location.href).href;
    var type = opts.type || "website";
    var removeSelector = 'meta[name="description"],meta[property^="og:"],meta[name^="twitter:"]';
    document.querySelectorAll(removeSelector).forEach(function (el) { el.parentNode.removeChild(el); });
    var setMeta = function (attr, key, value) {
      if (!value) return;
      var meta = document.createElement("meta");
      meta.setAttribute(attr, key);
      meta.setAttribute("content", value);
      document.head.appendChild(meta);
    };
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", "CVPR-Lab");
    setMeta("property", "og:locale", lang() === "zh" ? "zh_CN" : "en_US");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    var canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
    if (opts.jsonLd) {
      var ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.text = JSON.stringify(opts.jsonLd);
      ld.id = "ld-json-page";
      var existing = document.getElementById("ld-json-page");
      if (existing) existing.parentNode.removeChild(existing);
      document.head.appendChild(ld);
    }
  }

  var META_MAP = {
    people: {
      title: "团队成员 | CVPR-Lab",
      description: lang() === "zh" ? "CVPR 计算机视觉与模式识别实验室团队成员，包括教师、研究生、毕业生。" : "CVPR Lab members — faculty, graduate students, and alumni."
    },
    news: {
      title: "新闻动态 | CVPR-Lab",
      description: lang() === "zh" ? "CVPR 实验室新闻动态、学术前沿与常见问题。" : "CVPR Lab news, research frontiers, and FAQ."
    },
    contact: {
      title: "联系我们 | CVPR-Lab",
      description: lang() === "zh" ? "CVPR 实验室联系信息、招生方向与合作交流。" : "CVPR Lab contact, admissions, and collaboration."
    }
  };

  function applyStaticMeta(page) {
    var cfg = META_MAP[page];
    if (!cfg) return;
    document.title = cfg.title;
    injectPageMeta({ title: cfg.title, description: cfg.description, type: "website" });
  }

  function init() {
    var root = document.getElementById("page-root");
    if (!root) return;
    var page = root.getAttribute("data-page") || document.body.getAttribute("data-page") || "home";
    var renderers = {
      home: renderHome,
      about: renderAbout,
      research: renderResearch,
      people: renderPeople,
      profile: renderProfile,
      achievements: renderAchievements,
      news: renderNews,
      article: renderArticle,
      contact: renderContact
    };
    applyStaticMeta(page);
    (renderers[page] || renderHome)(root);
  }

  window.CVPR.render = {
    init: init
  };
})();
