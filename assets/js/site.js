(function () {
  window.CVPR = window.CVPR || {};

  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    var panel = document.getElementById("mobile-panel");
    if (panel) panel.setAttribute("aria-hidden", String(!open));
  }

  function bindInteractions() {
    var header = document.getElementById("site-header");
    var backTop = document.getElementById("back-to-top");

    function onScroll() {
      var active = window.scrollY > 24;
      if (header) header.classList.toggle("is-scrolled", active);
      if (backTop) backTop.classList.toggle("is-visible", window.scrollY > 640);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    document.addEventListener("click", function (event) {
      var langButton = event.target.closest("[data-lang-switch]");
      if (langButton) {
        window.CVPR.i18n.toggleLang();
        return;
      }

      if (event.target.closest("[data-menu-toggle]")) {
        setMenu(true);
        return;
      }

      if (event.target.closest("[data-menu-close]") || event.target.matches(".mobile-panel")) {
        setMenu(false);
        return;
      }

      if (event.target.closest(".mobile-nav a")) {
        setMenu(false);
        return;
      }

      var filterButton = event.target.closest(".filter-chip[data-filter]");
      if (filterButton) {
        applyFilter(filterButton);
        return;
      }

      var faqButton = event.target.closest(".faq-question");
      if (faqButton) {
        var item = faqButton.closest(".faq-item");
        var expanded = faqButton.getAttribute("aria-expanded") === "true";
        faqButton.setAttribute("aria-expanded", String(!expanded));
        if (item) item.classList.toggle("is-open", !expanded);
        return;
      }

      var copyButton = event.target.closest("[data-copy-value]");
      if (copyButton) {
        copyText(copyButton);
        return;
      }

      if (event.target.closest("#back-to-top")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setMenu(false);
    });
  }

  function applyFilter(button) {
    var bar = button.closest(".filter-bar");
    if (!bar) return;
    var scopeId = bar.getAttribute("data-filter-scope");
    var scope = document.getElementById(scopeId);
    var filter = button.getAttribute("data-filter");
    bar.querySelectorAll(".filter-chip").forEach(function (item) {
      item.classList.toggle("is-active", item === button);
    });
    if (!scope) return;
    scope.querySelectorAll(".filter-item").forEach(function (item) {
      var show = filter === "all" || item.getAttribute("data-category") === filter;
      item.classList.toggle("is-filtered-out", !show);
      item.toggleAttribute("hidden", !show);
    });
  }

  function copyText(button) {
    var value = button.getAttribute("data-copy-value") || "";
    var done = function () {
      var original = button.textContent;
      button.textContent = window.CVPR.i18n.get("common.copied");
      button.classList.add("is-copied");
      setTimeout(function () {
        button.textContent = original;
        button.classList.remove("is-copied");
      }, 1200);
    };
    if (navigator.clipboard && value) {
      navigator.clipboard.writeText(value).then(done).catch(done);
    } else {
      var input = document.createElement("textarea");
      input.value = value;
      document.body.appendChild(input);
      input.select();
      try { document.execCommand("copy"); } catch (error) {}
      input.remove();
      done();
    }
  }

  function removeLoader() {
    var loader = document.getElementById("site-loader");
    if (!loader) return;
    setTimeout(function () {
      loader.classList.add("is-hidden");
      setTimeout(function () { loader.remove(); }, 420);
    }, 700);
  }

  function boot() {
    window.CVPR.components.renderChrome();
    window.CVPR.i18n.init();
    window.CVPR.render.init();
    window.CVPR.i18n.apply();
    window.CVPR.theme.initControls();
    bindInteractions();
    window.CVPR.effects.init();
    removeLoader();

    window.addEventListener("cvpr:languagechange", function () {
      window.CVPR.render.init();
      window.CVPR.i18n.apply();
      window.CVPR.theme.updateControls();
      window.CVPR.effects.refresh();
    });

    if (window.location.hash) {
      setTimeout(function () {
        var target = document.querySelector(window.location.hash);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 250);
    }
  }

  document.addEventListener("DOMContentLoaded", boot);

  window.CVPR.site = {
    boot: boot
  };
})();
