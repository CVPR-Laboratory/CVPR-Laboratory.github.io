(function () {
  window.CVPR = window.CVPR || {};

  var currentLang = "zh";

  var I18N = {
    zh: {
      meta: {
        home: { title: "CVPR-Lab | 计算机视觉与模式识别实验室", description: "CVPR实验室专注于计算机视觉、模式识别、深度学习与智能感知研究。" },
        about: { title: "实验室概况 | CVPR-Lab", description: "了解CVPR实验室简介、发展定位、研究特色、发展历程、实验室文化与团队活动。" },
        research: { title: "研究方向 | CVPR-Lab", description: "CVPR实验室研究方向：精准农业与植物病害检测、遥感目标检测、医学图像分析、红外目标检测。" },
        people: { title: "团队成员 | CVPR-Lab", description: "CVPR实验室团队成员，包括教师团队、研究生、本科生与毕业成员。" },
        profile: { title: "成员详情 | CVPR-Lab", description: "CVPR实验室成员数字档案。" },
        achievements: { title: "科研成果 | CVPR-Lab", description: "CVPR实验室科研成果数据中心，展示论文、项目、专利与获奖信息。" },
        news: { title: "新闻动态 | CVPR-Lab", description: "CVPR实验室新闻动态、学术前沿、通知公告与常见问题。" },
        article: { title: "新闻详情 | CVPR-Lab", description: "CVPR实验室新闻详情阅读面板。" },
        contact: { title: "联系我们 | CVPR-Lab", description: "CVPR实验室联系信息、招生方向与合作交流入口。" }
      },
      nav: {
        home: "首页",
        about: "实验室概况",
        research: "研究方向",
        people: "团队成员",
        achievements: "科研成果",
        news: "新闻动态",
        contact: "联系我们"
      },
      common: {
        language: "EN",
        menu: "菜单",
        close: "关闭",
        exploreResearch: "进入研究矩阵",
        viewPeople: "查看团队星图",
        learnMore: "了解更多",
        viewAll: "查看全部",
        readMore: "阅读详情",
        backPeople: "返回团队页面",
        backNews: "返回新闻列表",
        copy: "复制",
        copied: "已复制",
        todo: "TODO: 请补充真实信息",
        noData: "TODO: 请补充真实内容",
        all: "全部",
        filterAll: "全部",
        publications: "论文",
        projects: "项目",
        patents: "专利",
        awards: "获奖",
        labNews: "实验室新闻",
        frontiers: "学术前沿",
        notice: "通知公告",
        faq: "常见问题",
        teacher: "教师",
        postgraduate: "研究生",
        undergraduate: "本科生",
        alumni: "已毕业成员"
      },
      footer: {
        motto: "慧眼识界，智算万物",
        intro: "面向智能感知、计算机视觉与模式识别前沿问题的科研实验室网站。",
        contact: "联系信息",
        address: "TODO: 请补充真实地址",
        email: "TODO: 请补充真实邮箱",
        phone: "TODO: 请补充真实电话",
        copyright: "CVPR-Laboratory. 静态网站可部署于 GitHub Pages。"
      }
    },
    en: {
      meta: {
        home: { title: "CVPR-Lab | Computer Vision and Pattern Recognition Laboratory", description: "CVPR-Lab focuses on computer vision, pattern recognition, deep learning, and intelligent perception." },
        about: { title: "About | CVPR-Lab", description: "Learn about the lab profile, mission, research features, timeline, culture, and activities." },
        research: { title: "Research | CVPR-Lab", description: "Research directions: precision agriculture, remote sensing detection, medical image analysis, and infrared target detection." },
        people: { title: "People | CVPR-Lab", description: "CVPR-Lab members, including faculty, postgraduates, undergraduates, and alumni." },
        profile: { title: "Profile | CVPR-Lab", description: "Digital profile for a CVPR-Lab member." },
        achievements: { title: "Achievements | CVPR-Lab", description: "Research achievement data center for papers, projects, patents, and awards." },
        news: { title: "News | CVPR-Lab", description: "Lab news, research frontiers, notices, and FAQ." },
        article: { title: "Article | CVPR-Lab", description: "News article reading panel for CVPR-Lab." },
        contact: { title: "Contact | CVPR-Lab", description: "Contact information, admissions, and collaboration channels for CVPR-Lab." }
      },
      nav: {
        home: "Home",
        about: "About",
        research: "Research",
        people: "People",
        achievements: "Achievements",
        news: "News",
        contact: "Contact"
      },
      common: {
        language: "中",
        menu: "Menu",
        close: "Close",
        exploreResearch: "Explore Research",
        viewPeople: "View People",
        learnMore: "Learn More",
        viewAll: "View All",
        readMore: "Read More",
        backPeople: "Back to People",
        backNews: "Back to News",
        copy: "Copy",
        copied: "Copied",
        todo: "TODO: Please add verified information.",
        noData: "TODO: Please add verified content.",
        all: "All",
        filterAll: "All",
        publications: "Publications",
        projects: "Projects",
        patents: "Patents",
        awards: "Awards",
        labNews: "Lab News",
        frontiers: "Frontiers",
        notice: "Notice",
        faq: "FAQ",
        teacher: "Faculty",
        postgraduate: "Postgraduates",
        undergraduate: "Undergraduates",
        alumni: "Alumni"
      },
      footer: {
        motto: "Vision Intelligence for a Connected World",
        intro: "A static research laboratory website for intelligent perception, computer vision, and pattern recognition.",
        contact: "Contact",
        address: "TODO: Please add verified address.",
        email: "TODO: Please add verified email.",
        phone: "TODO: Please add verified phone number.",
        copyright: "CVPR-Laboratory. Static website ready for GitHub Pages."
      }
    }
  };

  function resolveLang() {
    var params = new URLSearchParams(window.location.search);
    var fromUrl = params.get("lang");
    if (fromUrl === "zh" || fromUrl === "en") return fromUrl;
    var saved = localStorage.getItem("lang");
    return saved === "en" ? "en" : "zh";
  }

  function get(path, fallback) {
    var cursor = I18N[currentLang];
    path.split(".").forEach(function (part) {
      cursor = cursor && cursor[part];
    });
    return cursor == null ? fallback || path : cursor;
  }

  function localize(value, fallback) {
    if (value && typeof value === "object") return value[currentLang] || value.zh || value.en || fallback || "";
    return value == null ? fallback || "" : String(value);
  }

  function apply() {
    document.documentElement.lang = currentLang === "en" ? "en" : "zh-CN";
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      node.textContent = get(node.getAttribute("data-i18n"), node.textContent);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (node) {
      node.innerHTML = get(node.getAttribute("data-i18n-html"), node.innerHTML);
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (node) {
      document.title = get(node.getAttribute("data-i18n-title"), document.title);
    });
    document.querySelectorAll("[data-i18n-meta]").forEach(function (node) {
      node.setAttribute("content", get(node.getAttribute("data-i18n-meta"), node.getAttribute("content")));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (node) {
      node.setAttribute("aria-label", get(node.getAttribute("data-i18n-aria"), node.getAttribute("aria-label")));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (node) {
      node.setAttribute("alt", get(node.getAttribute("data-i18n-alt"), node.getAttribute("alt")));
    });
    document.querySelectorAll("[data-lang-switch]").forEach(function (node) {
      node.textContent = get("common.language");
      node.setAttribute("aria-label", currentLang === "zh" ? "Switch to English" : "切换到中文");
    });
  }

  function setLang(lang, silent) {
    currentLang = lang === "en" ? "en" : "zh";
    localStorage.setItem("lang", currentLang);
    apply();
    if (!silent) window.dispatchEvent(new CustomEvent("cvpr:languagechange", { detail: { lang: currentLang } }));
  }

  function toggleLang() {
    setLang(currentLang === "zh" ? "en" : "zh");
  }

  function init() {
    setLang(resolveLang(), true);
  }

  window.CVPR.i18n = {
    dictionary: I18N,
    init: init,
    get: get,
    localize: localize,
    getLang: function () { return currentLang; },
    setLang: setLang,
    toggleLang: toggleLang,
    apply: apply
  };
})();
