(function (global) {
  "use strict";
  var lang = "zh",
    base = "",
    query = new URLSearchParams();
  var labels = {
    home: ["首页", "Home"],
    about: ["实验室概况", "About"],
    research: ["研究方向", "Research"],
    people: ["科研团队", "People"],
    achievements: ["科研成果", "Publications"],
    publications: ["全部科研成果", "All Research Outputs"],
    news: ["新闻动态", "News"],
    contact: ["联系我们", "Contact"],
    profile: ["成员主页", "Profile"],
    article: ["新闻详情", "Article"],
    teacher: ["教师队伍", "Faculty"],
    postgraduate: ["在读研究生", "Postgraduates"],
    undergraduate: ["本科生", "Undergraduates"],
    alumni: ["毕业生", "Alumni"],
    paper: ["学术论文", "Papers"],
    project: ["科研项目", "Projects"],
    patent: ["知识产权", "Patents"],
    award: ["荣誉奖励", "Awards"],
    "lab-news": ["实验室动态", "Laboratory News"],
    frontiers: ["学术前沿", "Research Frontiers"],
  };
  function D() {
    return global.CVPR_DATA;
  }
  function C(zh, en) {
    return lang === "en" ? en : zh;
  }
  function L(v) {
    return v && typeof v === "object" ? v[lang] || v.zh || v.en || "" : v || "";
  }
  function name(k) {
    return labels[k] ? C.apply(null, labels[k]) : k;
  }
  function E(v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c];
    });
  }
  function clean(v) {
    return typeof v === "string" && !/TODO|待补充|待核验|pending/i.test(v)
      ? v.trim()
      : "";
  }
  function url(h) {
    if (/^(https?:|mailto:|tel:|#)/.test(h)) return E(h);
    var a = h.split("#"),
      s = base + a[0];
    if (lang === "en" && /\.html(?:\?|$)/.test(s) && !/[?&]lang=/.test(s))
      s += (s.includes("?") ? "&" : "?") + "lang=en";
    return E(s + (a[1] ? "#" + a[1] : ""));
  }
  function a(h, t, cls) {
    return (
      "<a" +
      (cls ? ' class="' + cls + '"' : "") +
      ' href="' +
      url(h) +
      '">' +
      E(t) +
      "</a>"
    );
  }
  function icon(n) {
    return (
      '<svg class="icon" aria-hidden="true"><use href="#' + n + '"></use></svg>'
    );
  }
  function img(src, alt, opts) {
    opts = opts || {};
    src = src || "assets/images/placeholders/media.svg";
    var m = (D().IMAGES || []).find(function (i) {
      return i.src === src;
    });
    var tag =
      '<img src="' +
      url(src) +
      '" alt="' +
      E(alt) +
      '"' +
      (m ? ' width="' + m.width + '" height="' + m.height + '"' : "") +
      ' loading="' +
      (opts.eager ? "eager" : "lazy") +
      '" decoding="async"' +
      (opts.eager ? ' fetchpriority="high"' : "") +
      (opts.position
        ? ' style="object-position:' + E(opts.position) + '"'
        : "") +
      ">";
    if (opts.hero) {
      var slide =
        D().EDITORIAL.slides.findIndex(function (item) {
          return item.image === src;
        }) + 1;
      return (
        '<picture><source srcset="' +
        url("assets/images/hero/discussion-" + slide + "-960.webp") +
        " 960w, " +
        url("assets/images/hero/discussion-" + slide + "-1920.webp") +
        ' 1920w" sizes="100vw" type="image/webp">' +
        tag +
        "</picture>"
      );
    }
    // Only registered legacy images have pre-generated WebP variants.
    return m && /^images\/.+\.(png|jpe?g)$/i.test(src)
      ? '<picture><source srcset="' +
          url(
            "assets/images/optimized/" +
              src.replace(/\.(png|jpe?g)$/i, ".webp"),
          ) +
          '" type="image/webp">' +
          tag +
          "</picture>"
      : tag;
  }
  function p(t) {
    return "<p>" + E(t) + "</p>";
  }
  function paragraphs(text) {
    var blocks = text.split(/\n+/).filter(Boolean);
    if (blocks.length === 1 && typeof Intl.Segmenter === "function") {
      var sentences = Array.from(
        new Intl.Segmenter(lang === "en" ? "en" : "zh-CN", {
          granularity: "sentence",
        }).segment(text),
        function (part) {
          return part.segment;
        },
      );
      blocks = [];
      for (var i = 0; i < sentences.length; i += 2)
        blocks.push(sentences.slice(i, i + 2).join(""));
    }
    return blocks.map(p).join("");
  }
  function ul(items) {
    return (
      "<ul>" +
      (items || [])
        .map(function (t) {
          return "<li>" + E(t) + "</li>";
        })
        .join("") +
      "</ul>"
    );
  }
  function publicNews() {
    return D()
      .NEWS.filter(function (n) {
        return !D().EDITORIAL.heldNews[n.id];
      })
      .sort(function (a, b) {
        return b.date.localeCompare(a.date) || a.id.localeCompare(b.id);
      });
  }
  function records() {
    return D().ACHIEVEMENTS.filter(function (a) {
      return a.publicationStatus === "verified";
    });
  }
  function groups() {
    // alumni 始终保留板块容器（方便后续扩展），其余按数据动态生成
    var all = ["teacher", "postgraduate", "undergraduate", "alumni"].filter(
      function (k) {
        return k === "alumni" || D().PEOPLE.some(function (p) {
          return p.category === k;
        });
      },
    );
    return all;
  }
  function types() {
    return ["paper", "project", "patent", "award"].filter(function (k) {
      return records().some(function (p) {
        return p.type === k;
      });
    });
  }
  function memberUrl(p) {
    return "profiles/" + p.id + ".html";
  }
  function articleUrl(n) {
    return "articles/" + n.id + ".html";
  }
  function navItems() {
    return [
      { key: "home", path: "index.html", children: [] },
      {
        key: "about",
        path: "about.html",
        children: [
          ["about.html#introduction", C("实验室简介", "Introduction")],
          ["about.html#features", C("研究特色", "Research Strengths")],
          ["about.html#environment", C("实验室环境", "Environment")],
          ["about.html#history", C("发展历程", "History")],
        ],
      },
      {
        key: "research",
        path: "research.html",
        children: D().RESEARCH.map(function (r) {
          return ["research.html#" + r.id, L(r.title)];
        }),
      },
      {
        key: "people",
        path: "people.html",
        children: groups().map(function (k) {
          return ["people.html?category=" + k, name(k)];
        }),
      },
      {
        key: "achievements",
        path: "achievements.html",
        children: types().map(function (k) {
          return ["achievements.html?type=" + k, name(k)];
        }),
      },
      {
        key: "news",
        path: "news.html",
        children: [
          ["news.html?category=lab-news", name("lab-news")],
          ["news.html?category=frontiers", name("frontiers")],
          ["news.html#faq", C("常见问题", "FAQ")],
        ],
      },
      {
        key: "contact",
        path: "contact.html",
        children: [
          ["contact.html#admissions", C("招生信息", "Admissions")],
          ["contact.html#collaboration", C("合作交流", "Collaboration")],
        ],
      },
    ];
  }
  function header(page) {
    var active =
      page === "profile" ? "people" : page === "article" ? "news" : page;
    if (page === "publications") active = "achievements";
    return (
      '<a class="skip-link" href="#page-root">' +
      C("跳至正文", "Skip to content") +
      '</a><div class="utility"><div class="container"><span>' +
      C(
        "曲阜师范大学 · 计算机学院",
        "Qufu Normal University · Computer Science",
      ) +
      '</span><div class="utility-links">' +
      a("https://www.qfnu.edu.cn/", C("学校首页", "University")) +
      a("https://jsj.qfnu.edu.cn/", C("学院首页", "School"), "college-link") +
      '<button type="button" class="language-button" data-language aria-label="' +
      C("Switch to English", "切换到中文") +
      '">' +
      C("English", "中文") +
      '</button></div></div></div><div class="identity"><div class="container identity-inner"><a class="university-brand" href="https://www.qfnu.edu.cn/" aria-label="' +
      C("曲阜师范大学", "Qufu Normal University") +
      '"><img src="' +
      url("assets/images/brand/qfnu-logo.png") +
      '" width="298" height="87" alt="' +
      C("曲阜师范大学校名与标识", "Qufu Normal University identity") +
      '"></a><a class="lab-brand" href="' +
      url("index.html") +
      '"><span class="lab-name">' +
      C(
        "计算机视觉与模式识别实验室",
        "Computer Vision and Pattern Recognition",
      ) +
      '</span><span class="lab-name-en">' +
      C(
        "Computer Vision and Pattern Recognition Laboratory",
        "Laboratory · Qufu Normal University",
      ) +
      '</span></a><button type="button" class="menu-toggle" data-menu aria-controls="main-navigation" aria-expanded="false" aria-label="' +
      C("导航菜单", "Navigation menu") +
      '" title="' +
      C("导航菜单", "Navigation menu") +
      '">' +
      icon("menu") +
      '</button></div></div><nav class="main-nav" id="main-navigation" aria-label="' +
      C("主导航", "Main navigation") +
      '"><ul class="nav-list container">' +
      navItems()
        .map(function (n) {
          return (
            '<li class="nav-item' +
            (active === n.key ? " is-active" : "") +
            '"><div class="nav-main"><a class="nav-link" href="' +
            url(n.path) +
            '"' +
            (active === n.key ? ' aria-current="page"' : "") +
            ">" +
            name(n.key) +
            "</a>" +
            (n.children.length
              ? '<button class="submenu-toggle" type="button" aria-expanded="false" aria-controls="sub-' +
                n.key +
                '" aria-label="' +
                E(C("展开", "Expand ") + name(n.key)) +
                '">' +
                icon("chevron-down") +
                "</button>"
              : "") +
            "</div>" +
            (n.children.length
              ? '<ul class="submenu" id="sub-' +
                n.key +
                '">' +
                n.children
                  .map(function (c) {
                    return "<li>" + a(c[0], c[1]) + "</li>";
                  })
                  .join("") +
                "</ul>"
              : "") +
            "</li>"
          );
        })
        .join("") +
      "</ul></nav>"
    );
  }
  function footer() {
    var c = D().CONTACT;
    return (
      '<div class="container footer-main"><div><h2>' +
      C(
        "计算机视觉与模式识别实验室",
        "Computer Vision and Pattern Recognition Laboratory",
      ) +
      "</h2>" +
      p(
        C(
          "曲阜师范大学 · 计算机学院",
          "School of Computer Science, Qufu Normal University",
        ),
      ) +
      "</div><div><h2>" +
      C("联系信息", "Contact") +
      "</h2><p>" +
      C("邮箱：", "Email: ") +
      a("mailto:" + c.email, c.email) +
      "</p><p>" +
      C("电话：", "Phone: ") +
      a("tel:+86" + c.phone.replace(/\D/g, ""), c.phone) +
      "</p>" +
      p(L(c.address)) +
      '</div><div class="footer-links">' +
      a("https://www.qfnu.edu.cn/", C("曲阜师范大学", "University Website")) +
      a(
        "https://jsj.qfnu.edu.cn/",
        C("计算机学院", "School of Computer Science"),
      ) +
      a("https://yjs.qfnu.edu.cn/", C("研究生招生", "Graduate Admissions")) +
      a("contact.html", name("contact")) +
      '</div></div><div class="footer-bottom">© ' +
      new Date().getFullYear() +
      " " +
      C(
        "计算机视觉与模式识别实验室 · 曲阜师范大学",
        "CVPR Laboratory · Qufu Normal University",
      ) +
      "</div>"
    );
  }
  function heading(t, h) {
    return (
      '<div class="section-heading"><h2>' +
      E(t) +
      "</h2>" +
      (h ? a(h, C("更多 +", "More +"), "more-link") : "") +
      "</div>"
    );
  }
  function section(id, t, body) {
    return (
      '<section id="' +
      id +
      '"><h2 class="content-heading">' +
      E(t) +
      "</h2>" +
      body +
      "</section>"
    );
  }
  function banner(t, page) {
    return (
      '<div class="page-banner"><div class="container"><h1>' +
      E(t) +
      '</h1><nav class="breadcrumb" aria-label="' +
      C("当前位置", "Breadcrumb") +
      '">' +
      a("index.html", name("home")) +
      '<span aria-hidden="true">/</span>' +
      (page && name(page) !== t
        ? a(page + ".html", name(page)) + '<span aria-hidden="true">/</span>'
        : "") +
      '<span aria-current="page">' +
      E(t) +
      "</span></nav></div></div>"
    );
  }
  function layout(page, body, links, title) {
    links =
      links ||
      (
        navItems().find(function (n) {
          return n.key === page;
        }) || {}
      ).children ||
      [];
    return (
      banner(title || name(page), page) +
      '<div class="container page-layout"><aside class="sidebar"><h2 class="sidebar-title">' +
      name(page) +
      "</h2><ul>" +
      links
        .map(function (c) {
          var target = new URLSearchParams(
            (c[0].split("?")[1] || "").split("#")[0],
          );
          var selected = ["category", "type"].some(function (key) {
            return target.has(key) && target.get(key) === query.get(key);
          });
          var anchor = a(c[0], c[1]);
          if (selected)
            anchor = anchor.replace("<a ", '<a aria-current="page" ');
          return "<li>" + anchor + "</li>";
        })
        .join("") +
      '</ul></aside><div class="content-column">' +
      body +
      "</div></div>"
    );
  }
  function publication(r) {
    var links = "";
    if (r.doi)
      links +=
        '<a href="https://doi.org/' +
        E(r.doi) +
        '" target="_blank" rel="noopener noreferrer">DOI: ' +
        E(r.doi) +
        "</a>";
    [
      ["pdf", "PDF"],
      ["code", C("代码", "Code")],
      ["link", C("官方链接", "Official Link")],
    ].forEach(function (c) {
      if (r[c[0]] && !(c[0] === "link" && r.doi))
        links +=
          '<a href="' +
          url(r[c[0]]) +
          '" target="_blank" rel="noopener noreferrer">' +
          c[1] +
          "</a>";
    });
    return (
      '<li class="publication" data-record-id="' +
      E(r.id) +
      '"><h3>' +
      E(L(r.title)) +
      '</h3><p class="publication-venue">' +
      E(r.venue) +
      '</p><p class="publication-authors">' +
      E(r.authors) +
      " · " +
      E(r.year) +
      "</p>" +
      (links ? '<div class="publication-links">' + links + "</div>" : "") +
      "</li>"
    );
  }
  function publications(rs) {
    return (
      '<ul class="publication-list">' + rs.map(publication).join("") + "</ul>"
    );
  }
  function member(m) {
    return (
      '<article class="member"><a href="' +
      url(memberUrl(m)) +
      '">' +
      img(m.avatar, L(m.name), { position: m.avatarPosition }) +
      "<h3>" +
      E(L(m.name)) +
      "</h3></a>" +
      p(L(m.role)) +
      '<p class="member-research">' +
      E((L(m.research) || []).join(C("、", ", "))) +
      "</p>" +
      a(memberUrl(m), C("个人主页", "Profile"), "text-link") +
      "</article>"
    );
  }
  function newsRows(rs, summaries) {
    return (
      '<ul class="news-list">' +
      rs
        .map(function (n) {
          return (
            '<li class="news-row">' +
            (summaries
              ? '<span class="news-tag">' + E(L(n.category)) + "</span>"
              : "") +
            '<a href="' +
            url(articleUrl(n)) +
            '"><h3>' +
            E(L(n.title)) +
            '</h3><time datetime="' +
            n.date +
            '">' +
            n.date +
            "</time></a>" +
            (summaries ? p(L(n.summary)) : "") +
            "</li>"
          );
        })
        .join("") +
      "</ul>"
    );
  }
  function intro() {
    return C(
      "计算机视觉与模式识别实验室依托曲阜师范大学计算机学院，围绕计算机视觉、模式识别、深度学习与智能感知开展研究。实验室重点关注精准农业与植物病害检测、遥感目标检测、医学图像分析和红外目标检测，结合算法研究与场景应用开展研究生培养与学术交流。",
      "The Computer Vision and Pattern Recognition Laboratory at the School of Computer Science, Qufu Normal University conducts research in computer vision, pattern recognition, deep learning, and intelligent perception. Its research covers precision agriculture, remote sensing, medical imaging, and infrared target detection, connecting algorithm development with applications and postgraduate education.",
    );
  }
  function home() {
    var stories = publicNews(),
      primary =
        stories.find(function (n) {
          return n.categoryKey === "lab-news";
        }) || stories[0],
      papers = records().filter(function (r) {
        return r.type === "paper";
      });
    return (
      '<section class="hero" aria-roledescription="' +
      C("轮播图", "carousel") +
      '" aria-label="' +
      C("实验室影像", "Laboratory photographs") +
      '">' +
      D()
        .EDITORIAL.slides.map(function (s, i) {
          return (
            '<div class="hero-slide" data-slide="' +
            i +
            '"' +
            (i ? " hidden" : "") +
            ">" +
            img(s.image, L(s.alt), {
              eager: !i,
              position: s.position,
              hero: true,
            }) +
            "</div>"
          );
        })
        .join("") +
      '<div class="hero-caption"><h1>' +
      C(
        "计算机视觉与模式识别实验室",
        "Computer Vision and Pattern Recognition Laboratory",
      ) +
      "</h1>" +
      p(C("学术交流 · 科研育人", "Academic Exchange and Research Education")) +
      "</div>" +
      '<button class="hero-arrow hero-prev" data-carousel="prev" aria-label="' +
      C("上一张", "Previous slide") +
      '" title="' +
      C("上一张", "Previous slide") +
      '">' +
      icon("chevron-left") +
      '</button><button class="hero-arrow hero-next" data-carousel="next" aria-label="' +
      C("下一张", "Next slide") +
      '" title="' +
      C("下一张", "Next slide") +
      '">' +
      icon("chevron-right") +
      '</button><div class="hero-controls">' +
      D()
        .EDITORIAL.slides.map(function (s, i) {
          return (
            '<button class="hero-dot" data-carousel-index="' +
            i +
            '" aria-label="' +
            C("第 ", "Slide ") +
            (i + 1) +
            '" aria-pressed="' +
            !i +
            '"></button>'
          );
        })
        .join("") +
      '<button class="hero-pause" data-carousel="pause" aria-label="' +
      C("暂停轮播", "Pause carousel") +
      '" title="' +
      C("暂停轮播", "Pause carousel") +
      '">' +
      icon("pause") +
      "</button></div></section>" +
      '<section class="section"><div class="container intro-layout"><div class="intro-copy">' +
      heading(name("about"), "about.html") +
      p(intro()) +
      a("about.html", C("了解实验室", "About the Laboratory"), "text-link") +
      '</div><div class="stats"><div class="stat"><strong>' +
      papers.length +
      "</strong><span>" +
      C("学术论文", "Publications") +
      '</span></div><div class="stat"><strong>' +
      D().RESEARCH.length +
      "</strong><span>" +
      C("研究方向", "Research Areas") +
      "</span></div></div></div></section>" +
      '<section class="section section-gray"><div class="container">' +
      heading(
        C("新闻动态与学术活动", "News and Academic Activities"),
        "news.html",
      ) +
      '<div class="news-columns"><article class="feature-news"><a href="' +
      url(articleUrl(primary)) +
      '">' +
      img(
        "images/index/index_news_recommend_01.png",
        C(
          "实验室资料图片，非本次事件现场",
          "Laboratory archive photograph; not the event described",
        ),
      ) +
      '</a><span class="aux">' +
      C(
        "实验室资料图片（非本次事件现场）",
        "Laboratory archive photograph; not the event described",
      ) +
      "</span><h3>" +
      a(articleUrl(primary), L(primary.title)) +
      "</h3><time>" +
      primary.date +
      "</time>" +
      p(L(primary.summary)) +
      "</article><div>" +
      newsRows(
        stories
          .filter(function (n) {
            return n.id !== primary.id;
          })
          .slice(0, 6),
        false,
      ) +
      "</div></div></div></section>" +
      '<section class="section"><div class="container">' +
      heading(
        C("代表性科研成果", "Selected Publications"),
        "achievements.html",
      ) +
      publications(
        [
          "pd-tr-plant-disease-2024",
          "drone-remote-sensing-2026",
          "ct-denoimer-2025",
          "rice-growth-multispectral-2025",
        ]
          .map(function (id) {
            return papers.find(function (r) {
              return r.id === id;
            });
          })
          .filter(Boolean),
      ) +
      "</div></section>" +
      '<section class="section section-gray"><div class="container">' +
      heading(name("research"), "research.html") +
      '<div class="research-grid">' +
      D()
        .RESEARCH.map(function (r) {
          return (
            '<article class="research-item">' +
            img(r.image, L(r.imageAlt)) +
            "<h3>" +
            E(L(r.title)) +
            '</h3><small lang="en">' +
            E(r.title.en) +
            "</small>" +
            p(L(r.description)) +
            a(
              "research.html#" + r.id,
              C("查看详情", "Learn More"),
              "text-link",
            ) +
            "</article>"
          );
        })
        .join("") +
      "</div></div></section>" +
      '<section class="section"><div class="container">' +
      heading(C("团队风采与人才培养", "People and Education"), "people.html") +
      '<div class="member-grid">' +
      D().PEOPLE.slice(0, 4).map(member).join("") +
      "</div></div></section>"
    );
  }
  function about() {
    return layout(
      "about",
      section(
        "introduction",
        C("实验室简介", "Introduction"),
        '<div class="prose">' + p(intro()) + "</div>",
      ) +
        section(
          "features",
          C("研究特色", "Research Strengths"),
          p(
            C(
              "面向真实场景中的小目标、细粒度差异、多尺度变化和复杂背景，研究注意力引导特征融合、Transformer 检测、实例分割与领域对比学习等方法。",
              "The laboratory studies small objects, fine-grained differences, multi-scale variation, and complex backgrounds, using attention-guided feature fusion, Transformer detectors, instance segmentation, and domain-specific contrastive learning.",
            ),
          ) +
            ul(
              D().RESEARCH.map(function (r) {
                return L(r.title) + C("：", ": ") + L(r.subtitle);
              }),
            ),
        ) +
        section(
          "environment",
          C("实验室环境与学术交流", "Environment and Academic Exchange"),
          '<div class="gallery">' +
            [
              [
                "images/index/lab_environment.png",
                C("实验室环境（资料图片）", "Laboratory environment (archive)"),
              ],
              [
                "images/index/index_news_recommend_01.png",
                C("团队研讨（资料图片）", "Team discussion (archive)"),
              ],
              [
                "images/index/index_quick_entrance_02.png",
                C("学术交流（资料图片）", "Academic discussion (archive)"),
              ],
            ]
              .map(function (c) {
                return (
                  "<figure>" +
                  img(c[0], c[1]) +
                  "<figcaption>" +
                  c[1] +
                  "</figcaption></figure>"
                );
              })
              .join("") +
            "</div>",
        ) +
        section(
          "history",
          C("发展历程", "History"),
          p(
            C(
              "2020 年，实验室正式成立，首批研究生入学。",
              "In 2020, the laboratory was established and welcomed its first postgraduate cohort.",
            ),
          ),
        ),
    );
  }
  function research() {
    return layout(
      "research",
      D()
        .RESEARCH.map(function (r) {
          var related = (r.representativeAchievements || [])
              .map(function (id) {
                return records().find(function (a) {
                  return a.id === id;
                });
              })
              .filter(Boolean),
            members = (r.members || [])
              .map(function (n) {
                return D().PEOPLE.find(function (p) {
                  return p.name.en === n;
                });
              })
              .filter(Boolean);
          return section(
            r.id,
            L(r.title),
            '<div class="research-detail"><p class="english-title" lang="en">' +
              E(r.title.en) +
              "</p>" +
              img(r.image, L(r.imageAlt)) +
              p(L(r.description)) +
              '<div class="research-points"><div><h3>' +
              C("关键研究问题", "Key Problems") +
              "</h3>" +
              ul(L(r.keyProblems)) +
              "</div><div><h3>" +
              C("主要研究内容与技术路线", "Topics and Methods") +
              "</h3>" +
              ul(L(r.topics)) +
              "</div></div><h3>" +
              C("应用场景", "Applications") +
              "</h3>" +
              ul(L(r.applications)) +
              (members.length
                ? "<h3>" +
                  C("相关研究人员", "Researchers") +
                  "</h3><p>" +
                  members
                    .map(function (m) {
                      return a(memberUrl(m), L(m.name));
                    })
                    .join(" · ") +
                  "</p>"
                : "") +
              (related.length
                ? "<h3>" +
                  C("代表性成果", "Selected Publications") +
                  "</h3>" +
                  publications(related)
                : "") +
              '<p class="aux">' +
              E(L(r.caption)) +
              "</p></div>",
          );
        })
        .join(""),
    );
  }
  function people() {
    var chosen = query.get("category") || "all";
    // 侧边栏始终保留全部入口（含空板块），但内容区只渲染有成员的板块
    var sections = groups()
      .filter(function (k) {
        return chosen === "all" || chosen === k;
      })
      .map(function (k) {
        var ms = D()
          .PEOPLE.filter(function (m) {
            return m.category === k;
          })
          .map(member)
          .join("");
        // 空板块不渲染内容容器，但侧边栏入口保留（方便后续扩展）
        if (!ms) return "";
        return section(k, name(k), '<div class="member-grid">' + ms + "</div>");
      })
      .join("");
    if (!sections)
      sections =
        '<div class="empty-state"><p>' +
        C("该类别暂无成员，后续补充。", "No members in this category yet.") +
        "</p></div>";
    return layout(
      "people",
      sections,
      [["people.html", C("全部成员", "All Members")]].concat(
        groups().map(function (k) {
          return ["people.html?category=" + k, name(k)];
        }),
      ),
    );
  }
  function profile(id) {
    var m = D().PEOPLE.find(function (p) {
      return p.id === id;
    });
    if (!m)
      return layout("people", empty(C("未找到该成员", "Member Not Found")));
    var b =
      '<div class="profile-summary">' +
      img(m.avatar, L(m.name), { position: m.avatarPosition }) +
      "<div><h2>" +
      E(L(m.name)) +
      "</h2>" +
      p(L(m.role)) +
      p(
        C(
          "曲阜师范大学计算机学院",
          "School of Computer Science, Qufu Normal University",
        ),
      ) +
      p((L(m.research) || []).join(C("、", ", "))) +
      '</div><div class="profile-contact">' +
      (clean(m.email)
        ? "<p>" +
          C("邮箱：", "Email: ") +
          a("mailto:" + m.email, m.email) +
          "</p>"
        : "") +
      (m.homepage
        ? "<p>" +
          a(m.homepage, C("学术主页", "Academic Profile"), "text-link") +
          "</p>"
        : "") +
      (m.cv
        ? "<p>" +
          a(m.cv, C("个人简历 PDF", "Curriculum Vitae (PDF)"), "text-link") +
          "</p>"
        : "") +
      "</div></div>" +
      section("biography", C("个人简介", "Biography"), p(L(m.bio)));
    [
      ["education", C("教育经历", "Education")],
      ["experience", C("工作与科研经历", "Research Experience")],
      ["publications", C("代表性成果", "Selected Publications")],
      ["honors", C("荣誉奖项", "Honors and Awards")],
      ["skills", C("专业技能", "Skills")],
    ].forEach(function (c) {
      var items = (L(m[c[0]]) || []).map(clean).filter(Boolean);
      if (items.length) b += section(c[0], c[1], ul(items));
    });
    var matched =
      m.category === "teacher"
        ? records()
            .filter(function (r) {
              return (
                r.type === "paper" &&
                r.authors.toLowerCase().includes(m.name.en.toLowerCase())
              );
            })
            .slice(0, 6)
        : [];
    if (matched.length)
      b += section(
        "related",
        C("相关论文", "Related Publications"),
        publications(matched),
      );
    b +=
      "<p>" +
      a("people.html", C("返回科研团队", "Back to People"), "text-link") +
      "</p>";
    return layout(
      "people",
      b,
      [
        ["profiles/" + m.id + ".html#biography", C("个人简介", "Biography")],
        ["people.html", C("全部成员", "All Members")],
      ],
      L(m.name),
    );
  }
  function empty(t) {
    return (
      '<div class="empty-state">' +
      p(
        t ||
          C(
            "暂无匹配内容，请调整筛选条件。",
            "No results. Please adjust the filters.",
          ),
      ) +
      a("index.html", C("返回首页", "Return Home"), "text-link") +
      "</div>"
    );
  }
  function resultUrl(page, changes) {
    var q = new URLSearchParams(query);
    Object.keys(changes).forEach(function (k) {
      if (changes[k]) q.set(k, changes[k]);
      else q.delete(k);
    });
    return page + ".html" + (q.toString() ? "?" + q : "");
  }
  function pagination(page, total, current, size) {
    var pages = Math.ceil(total / size);
    if (pages < 2) return "";
    var b =
      '<nav class="pagination" aria-label="' + C("分页", "Pagination") + '">';
    for (var i = 1; i <= pages; i++)
      b +=
        i === current
          ? '<span aria-current="page">' + i + "</span>"
          : a(resultUrl(page, { page: String(i) }), String(i));
    return b + "</nav>";
  }
  function field(k, title, options, value) {
    return (
      '<div class="field"><label for="filter-' +
      k +
      '">' +
      title +
      '</label><select id="filter-' +
      k +
      '" name="' +
      k +
      '">' +
      options
        .map(function (c) {
          return (
            '<option value="' +
            E(c[0]) +
            '"' +
            (c[0] === value ? " selected" : "") +
            ">" +
            E(c[1]) +
            "</option>"
          );
        })
        .join("") +
      "</select></div>"
    );
  }
  function results(isNews) {
    var page = isNews ? "news" : "achievements",
      key = isNews ? "category" : "type",
      type = query.get(key) || "all",
      year = query.get("year") || "all",
      q = query.get("q") || "",
      sort = query.get("sort") || "desc",
      all = isNews ? publicNews() : records();
    var years = [
      ...new Set(
        all.map(function (r) {
          return isNews ? r.date.slice(0, 4) : r.year;
        }),
      ),
    ]
      .sort()
      .reverse();
    var rs = all
      .filter(function (r) {
        return (
          (type === "all" || (isNews ? r.categoryKey : r.type) === type) &&
          (year === "all" || (isNews ? r.date.slice(0, 4) : r.year) === year) &&
          (!q ||
            [L(r.title), r.authors, r.venue, L(r.summary), r.doi]
              .join(" ")
              .toLowerCase()
              .includes(q.toLowerCase().trim()))
        );
      })
      .sort(function (a, b) {
        var d = (isNews ? b.date : b.year).localeCompare(
          isNews ? a.date : a.year,
        );
        return (sort === "asc" ? -d : d) || a.id.localeCompare(b.id);
      });
    var size = isNews ? 8 : 10,
      current = Math.min(
        Math.max(1, Math.ceil(rs.length / size)),
        Math.max(1, parseInt(query.get("page"), 10) || 1),
      );
    var form =
      '<form class="filter-form" data-filters action="' +
      url(page + ".html") +
      '">' +
      (lang === "en" ? '<input type="hidden" name="lang" value="en">' : "") +
      field(
        key,
        C("类别", "Category"),
        [["all", C("全部", "All")]].concat(
          (isNews ? ["lab-news", "frontiers"] : types()).map(function (k) {
            return [k, name(k)];
          }),
        ),
        type,
      ) +
      field(
        "year",
        C("年份", "Year"),
        [["all", C("全部年份", "All Years")]].concat(
          years.map(function (y) {
            return [y, y];
          }),
        ),
        year,
      ) +
      '<div class="field field-search"><label for="filter-q">' +
      C("关键词搜索", "Keyword Search") +
      '</label><input id="filter-q" type="search" name="q" value="' +
      E(q) +
      '" placeholder="' +
      C("标题、作者、期刊", "Title, author, venue") +
      '"></div>' +
      field(
        "sort",
        C("排序", "Order"),
        [
          ["desc", C("最新优先", "Newest First")],
          ["asc", C("最早优先", "Oldest First")],
        ],
        sort,
      ) +
      '<button type="submit" class="button">' +
      icon("search") +
      C("检索", "Search") +
      "</button></form>";
    var b =
      '<div id="results" tabindex="-1"><div class="result-summary" role="status"><span>' +
      C("共 ", "Results: ") +
      rs.length +
      C(" 条", "") +
      "</span>" +
      a(page + ".html", C("重置筛选", "Reset Filters")) +
      (isNews
        ? ""
        : a("publications.html", C("全部成果目录", "All Research Outputs"))) +
      "</div>" +
      (rs.length
        ? isNews
          ? newsRows(rs.slice((current - 1) * size, current * size), true)
          : publications(rs.slice((current - 1) * size, current * size))
        : empty()) +
      pagination(page, rs.length, current, size) +
      "</div>";
    if (isNews)
      b += section(
        "faq",
        C("常见问题", "Frequently Asked Questions"),
        D()
          .FAQ.filter(function (f) {
            return !D().EDITORIAL.heldFaq.includes(f.id);
          })
          .map(function (f) {
            return (
              '<details class="faq-item"><summary>' +
              E(L(f.question)) +
              "</summary>" +
              p(L(f.answer)) +
              "</details>"
            );
          })
          .join(""),
      );
    return layout(page, form + b);
  }
  function article(id) {
    var ns = publicNews(),
      n = ns.find(function (n) {
        return n.id === id;
      });
    if (!n)
      return layout(
        "news",
        empty(C("该文章暂不可访问", "This Article Is Currently Unavailable")),
      );
    var i = ns.indexOf(n),
      prev = ns[i - 1],
      next = ns[i + 1];
    return (
      '<div class="page-banner"><div class="container"><nav class="breadcrumb" aria-label="' +
      C("当前位置", "Breadcrumb") +
      '">' +
      a("index.html", name("home")) +
      "<span>/</span>" +
      a("news.html", name("news")) +
      "<span>/</span><span>" +
      E(L(n.category)) +
      '</span></nav></div></div><div class="container"><article class="article"><header class="article-header"><h1>' +
      E(L(n.title)) +
      '</h1><div class="article-meta"><time datetime="' +
      n.date +
      '">' +
      n.date +
      "</time><span>" +
      C("来源：实验室资料", "Source: Laboratory Archive") +
      "</span><span>" +
      E(L(n.author)) +
      '</span></div></header><div class="article-body">' +
      paragraphs(L(n.content)) +
      '</div><nav class="article-nav" aria-label="' +
      C("文章导航", "Article navigation") +
      '"><div class="article-nav-row">' +
      (prev
        ? '<span class="article-nav-prev">' + a(articleUrl(prev), C("上一篇：", "Previous: ") + L(prev.title)) + "</span>"
        : '<span class="article-nav-prev"></span>') +
      (next
        ? '<span class="article-nav-next">' + a(articleUrl(next), C("下一篇：", "Next: ") + L(next.title)) + "</span>"
        : '<span class="article-nav-next"></span>') +
      '</div><div class="article-nav-back">' +
      a("news.html", C("返回新闻列表", "Back to News"), "text-link") +
      "</div></nav></article></div>"
    );
  }
  function contact() {
    var c = D().CONTACT;
    return layout(
      "contact",
      section(
        "contact-details",
        C("联系信息", "Contact Information"),
        '<dl class="contact-details"><dt>' +
          C("所属单位", "Affiliation") +
          "</dt><dd>" +
          C(
            "曲阜师范大学计算机学院",
            "School of Computer Science, Qufu Normal University",
          ) +
          "</dd><dt>" +
          C("通信地址", "Postal Address") +
          "</dt><dd>" +
          E(L(c.address)) +
          "</dd><dt>" +
          C("联系邮箱", "Email") +
          "</dt><dd>" +
          a("mailto:" + c.email, c.email) +
          "</dd><dt>" +
          C("联系电话", "Telephone") +
          "</dt><dd>" +
          a("tel:+86" + c.phone.replace(/\D/g, ""), c.phone) +
          "</dd><dt>" +
          C("相关链接", "Related Links") +
          "</dt><dd>" +
          a("https://www.qfnu.edu.cn/", C("学校官网", "University Website")) +
          " · " +
          a(
            "https://jsj.qfnu.edu.cn/",
            C("计算机学院", "School of Computer Science"),
          ) +
          '</dd></dl><button class="button button-secondary" data-copy="' +
          E(c.email) +
          '">' +
          icon("copy") +
          C("复制邮箱", "Copy Email") +
          '</button><p class="aux" data-copy-status role="status"></p>',
      ) +
        section(
          "admissions",
          C("招生信息", "Admissions"),
          p(
            C(
              "实验室围绕计算机视觉、深度学习、智慧农业、遥感与医学图像分析开展研究生培养。报考条件、招生计划与时间安排请以学校研究生招生部门发布的信息为准。",
              "The laboratory supports postgraduate research in computer vision, deep learning, smart agriculture, remote sensing, and medical imaging. Application requirements, places, and schedules are subject to the university's published graduate admissions information.",
            ),
          ) +
            a(
              "https://yjs.qfnu.edu.cn/",
              C("研究生招生信息", "Graduate Admissions"),
              "text-link",
            ),
        ) +
        section(
          "collaboration",
          C("合作交流", "Collaboration"),
          p(
            C(
              "欢迎围绕实验室研究方向开展学术交流、联合研究与人才培养合作。请通过实验室邮箱联系，并简要说明研究背景、合作方向与联系方式。",
              "Academic exchange, joint research, and educational collaboration related to the laboratory research areas are welcome. Please email the laboratory with your research background, proposed topic, and contact details.",
            ),
          ),
        ),
    );
  }
  function meta(page, id) {
    var title = name(page),
      description = C(
        "曲阜师范大学计算机视觉与模式识别实验室。",
        "Computer Vision and Pattern Recognition Laboratory, Qufu Normal University.",
      ),
      canonical =
        "https://cvpr-laboratory.github.io/" +
        (page === "home" ? "" : page + ".html"),
      record;
    if (page === "profile") {
      record = D().PEOPLE.find(function (m) {
        return m.id === id;
      });
      if (record) {
        title = L(record.name);
        description = L(record.bio);
        canonical = "https://cvpr-laboratory.github.io/" + memberUrl(record);
      }
    }
    if (page === "article") {
      record = publicNews().find(function (m) {
        return m.id === id;
      });
      if (record) {
        title = L(record.title);
        description = L(record.summary);
        canonical = "https://cvpr-laboratory.github.io/" + articleUrl(record);
      }
    }
    if (page === "home")
      title = C(
        "计算机视觉与模式识别实验室",
        "Computer Vision and Pattern Recognition Laboratory",
      );
    return {
      title: title + " | " + C("曲阜师范大学", "Qufu Normal University"),
      description: description,
      canonical: canonical,
      image:
        "https://cvpr-laboratory.github.io/images/index/index_news_recommend_01.png",
      record: record,
    };
  }
  function render(page, opts) {
    opts = opts || {};
    lang = opts.lang === "en" ? "en" : "zh";
    base = opts.prefix || "";
    query = new URLSearchParams(opts.search || "");
    if (lang === "en") query.set("lang", "en");
    var id = opts.id || query.get("id"),
      body;
    if (page === "home") body = home();
    else if (page === "about") body = about();
    else if (page === "research") body = research();
    else if (page === "people") body = people();
    else if (page === "profile") body = profile(id);
    else if (page === "achievements") body = results(false);
    else if (page === "publications")
      body = layout(
        "achievements",
        publications(records()),
        [["achievements.html", C("检索科研成果", "Search Outputs")]],
        name("publications"),
      );
    else if (page === "news") body = results(true);
    else if (page === "article") body = article(id);
    else if (page === "contact") body = contact();
    else
      body =
        '<div class="container error-page"><p class="error-code">404</p><h1>' +
        C("页面未找到", "Page Not Found") +
        "</h1>" +
        p(
          C(
            "您访问的页面可能已移动或不存在。",
            "The page may have moved or is unavailable.",
          ),
        ) +
        a("index.html", C("返回首页", "Return Home"), "button") +
        "</div>";
    return {
      body: body,
      header: header(page),
      footer: footer(),
      meta: meta(page, id),
    };
  }
  global.CVPR_VIEW = { render: render, publicNews: publicNews, icon: icon };
})(window);
