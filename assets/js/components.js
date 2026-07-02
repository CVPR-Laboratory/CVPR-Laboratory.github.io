(function () {
  window.CVPR = window.CVPR || {};

  var navItems = [
    ["home", "index.html"],
    ["about", "about.html"],
    ["research", "research.html"],
    ["people", "people.html"],
    ["achievements", "achievements.html"],
    ["news", "news.html"],
    ["contact", "contact.html"]
  ];

  function navHtml(location) {
    return navItems.map(function (item) {
      var active = item[0] === location ? " is-active" : "";
      return '<a class="nav-link' + active + '" href="' + item[1] + '" data-nav="' + item[0] + '" data-i18n="nav.' + item[0] + '"></a>';
    }).join("");
  }

  function renderHeader() {
    var page = document.body.getAttribute("data-page") || "home";
    var active = page === "profile" ? "people" : page === "article" ? "news" : page;
    var header = document.getElementById("site-header");
    if (!header) return;
    header.innerHTML = [
      '<div class="header-shell">',
      '  <a class="brand" href="index.html" aria-label="CVPR-Lab home">',
      '    <img src="images/logo.png" alt="CVPR-Laboratory 实验室标识" loading="eager">',
      '    <span class="brand-orbit" aria-hidden="true"></span>',
      '  </a>',
      '  <nav class="desktop-nav" aria-label="Primary navigation">' + navHtml(active) + '</nav>',
      '  <div class="header-controls">',
      '    <button class="control-pill lang-pill" type="button" data-lang-switch aria-label="Switch language">EN</button>',
      '    <button class="theme-switch" type="button" data-theme-toggle aria-label="Switch theme"><span></span></button>',
      '    <button class="menu-toggle" type="button" data-menu-toggle aria-label="Open menu"><span></span><span></span><span></span></button>',
      '  </div>',
      '</div>',
      '<div class="mobile-panel" id="mobile-panel" aria-hidden="true">',
      '  <div class="mobile-panel-inner">',
      '    <button class="mobile-close" type="button" data-menu-close data-i18n="common.close">关闭</button>',
      '    <nav class="mobile-nav" aria-label="Mobile navigation">' + navHtml(active) + '</nav>',
      '    <div class="mobile-controls">',
      '      <button class="control-pill" type="button" data-lang-switch>EN</button>',
      '      <button class="theme-switch" type="button" data-theme-toggle aria-label="Switch theme"><span></span></button>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join("");
  }

  function renderFooter() {
    var footer = document.getElementById("site-footer");
    if (!footer) return;
    footer.innerHTML = [
      '<div class="footer-data-stream" aria-hidden="true"></div>',
      '<div class="footer-shell">',
      '  <div class="footer-brand reveal">',
      '    <img src="images/logo.png" alt="CVPR-Laboratory 实验室标识" loading="lazy">',
      '    <p data-i18n="footer.motto"></p>',
      '    <span data-i18n="footer.intro"></span>',
      '  </div>',
      '  <div class="footer-nav reveal">',
      navHtml(""),
      '  </div>',
      '  <div class="footer-contact reveal">',
      '    <h2 data-i18n="footer.contact"></h2>',
      '    <p data-i18n="footer.email"></p>',
      '    <p data-i18n="footer.phone"></p>',
      '    <p data-i18n="footer.address"></p>',
      '  </div>',
      '</div>',
      '<div class="footer-bottom"><span data-i18n="footer.copyright"></span></div>'
    ].join("");
  }

  function renderChrome() {
    renderHeader();
    renderFooter();
  }

  window.CVPR.components = {
    renderChrome: renderChrome,
    renderHeader: renderHeader,
    renderFooter: renderFooter
  };
})();
