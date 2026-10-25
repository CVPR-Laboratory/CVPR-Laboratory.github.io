(function () {
  "use strict";
  var page = document.body.dataset.page;
  var prefix = document.body.dataset.prefix || "";
  var timer,
    carouselIndex = 0,
    paused = false,
    hovering = false,
    focused = false;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var siteHeader = document.getElementById("site-header");
  function updateStickyNavigation() {
    var nav = document.getElementById("main-navigation");
    if (!siteHeader || !nav) return;
    var mastheadHeight =
      siteHeader.querySelector(".utility").offsetHeight +
      siteHeader.querySelector(".identity").offsetHeight;
    var mobile = window.matchMedia("(max-width: 767px)").matches;
    var style = document.documentElement.style;
    // Let the desktop masthead scroll away while the navigation stays visible.
    style.setProperty("--header-offset", (mobile ? 0 : -mastheadHeight) + "px");
    style.setProperty(
      "--header-visible-height",
      (mobile ? mastheadHeight : nav.offsetHeight) + "px",
    );
  }
  function savedLanguage() {
    try {
      return localStorage.getItem("lang");
    } catch (_) {
      return null;
    }
  }
  function language() {
    return (
      new URLSearchParams(location.search).get("lang") ||
      savedLanguage() ||
      "zh"
    );
  }
  function applyMetadata(meta) {
    document.title = meta.title;
    document.querySelector('meta[name="description"]').content =
      meta.description;
    document.querySelector('link[rel="canonical"]').href = meta.canonical;
    [
      ["og:title", meta.title],
      ["og:description", meta.description],
      ["og:url", meta.canonical],
      ["og:image", meta.image],
    ].forEach(function (pair) {
      document.querySelector('meta[property="' + pair[0] + '"]').content =
        pair[1];
    });
  }
  function render() {
    clearInterval(timer);
    var result = window.CVPR_VIEW.render(page, {
      prefix: prefix,
      lang: language(),
      search: location.search,
      id: document.body.dataset.id,
    });
    document.getElementById("site-header").innerHTML = result.header;
    document.getElementById("page-root").innerHTML = result.body;
    document.getElementById("site-footer").innerHTML = result.footer;
    document.documentElement.lang = language() === "en" ? "en" : "zh-CN";
    applyMetadata(result.meta);
    carouselIndex = 0;
    hovering = false;
    focused = false;
    setupCarousel();
    updateStickyNavigation();
  }
  async function moveSlide(index, automatic) {
    var slides = [].slice.call(document.querySelectorAll("[data-slide]"));
    if (!slides.length) return;
    var nextIndex = (index + slides.length) % slides.length;
    var nextImage = slides[nextIndex].querySelector("img");
    nextImage.loading = "eager";
    if (!nextImage.complete) {
      try { await nextImage.decode(); } catch (_) {}
    }
    if (!slides[nextIndex].isConnected || (automatic && !canAnimate())) return;
    carouselIndex = nextIndex;
    slides.forEach(function (s, i) {
      s.hidden = i !== carouselIndex;
    });
    document.querySelectorAll("[data-carousel-index]").forEach(function (b, i) {
      b.setAttribute("aria-pressed", String(i === carouselIndex));
    });
  }
  function canAnimate() {
    return !paused && !hovering && !focused && !document.hidden && !reducedMotion.matches;
  }
  function schedule() {
    clearInterval(timer);
    if (!document.querySelector(".hero")) return;
    if (canAnimate())
      timer = setInterval(function () {
        if (canAnimate()) moveSlide(carouselIndex + 1, true);
      }, 6000);
  }
  function setupCarousel() {
    var hero = document.querySelector(".hero");
    if (!hero) return;
    hero.addEventListener("mouseenter", function () {
      hovering = true;
      schedule();
    });
    hero.addEventListener("mouseleave", function () {
      hovering = false;
      schedule();
    });
    hero.addEventListener("focusin", function () {
      focused = true;
      schedule();
    });
    hero.addEventListener("focusout", function (e) {
      if (!hero.contains(e.relatedTarget)) {
        focused = false;
        schedule();
      }
    });
    schedule();
  }
  document.addEventListener("visibilitychange", schedule);
  reducedMotion.addEventListener("change", schedule);
  document.addEventListener("click", function (event) {
    var target = event.target.closest("button,a");
    if (!target) return;
    if (target.hasAttribute("data-language")) {
      var next = language() === "en" ? "zh" : "en",
        u = new URL(location.href);
      u.searchParams.set("lang", next);
      try {
        localStorage.setItem("lang", next);
      } catch (_) {}
      history.replaceState(null, "", u);
      render();
      return;
    }
    if (target.hasAttribute("data-menu")) {
      var nav = document.getElementById("main-navigation"),
        open = nav.classList.toggle("is-open");
      target.setAttribute("aria-expanded", String(open));
      return;
    }
    if (target.classList.contains("submenu-toggle")) {
      var item = target.closest(".nav-item"),
        opening = !item.classList.contains("is-open");
      document.querySelectorAll(".nav-item.is-open").forEach(function (n) {
        n.classList.remove("is-open");
        n.querySelector(".submenu-toggle").setAttribute(
          "aria-expanded",
          "false",
        );
      });
      item.classList.toggle("is-open", opening);
      target.setAttribute("aria-expanded", String(opening));
      return;
    }
    if (target.hasAttribute("data-carousel-index")) {
      moveSlide(Number(target.dataset.carouselIndex));
      schedule();
      return;
    }
    if (target.hasAttribute("data-carousel")) {
      if (target.dataset.carousel === "pause") {
        paused = !paused;
        target.setAttribute(
          "aria-label",
          language() === "en"
            ? paused
              ? "Play carousel"
              : "Pause carousel"
            : paused
              ? "播放轮播"
              : "暂停轮播",
        );
        target.title = target.getAttribute("aria-label");
        target.innerHTML = window.CVPR_VIEW.icon(paused ? "play" : "pause");
      } else
        moveSlide(
          carouselIndex + (target.dataset.carousel === "next" ? 1 : -1),
        );
      schedule();
      return;
    }
    if (target.hasAttribute("data-copy")) {
      var value = target.dataset.copy,
        status = document.querySelector("[data-copy-status]");
      var done = function () {
        status.textContent =
          language() === "en" ? "Email copied." : "邮箱已复制。";
      };
      if (navigator.clipboard)
        navigator.clipboard
          .writeText(value)
          .then(done)
          .catch(function () {
            status.textContent = value;
          });
      else {
        var area = document.createElement("textarea");
        area.value = value;
        document.body.appendChild(area);
        area.select();
        var ok = document.execCommand("copy");
        area.remove();
        status.textContent = ok
          ? language() === "en"
            ? "Email copied."
            : "邮箱已复制。"
          : value;
      }
      return;
    }
    if (target.hasAttribute("data-top"))
      window.scrollTo({
        top: 0,
        behavior: reducedMotion.matches ? "instant" : "smooth",
      });
  });
  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    document.querySelectorAll(".nav-item.is-open").forEach(function (n) {
      n.classList.remove("is-open");
      n.querySelector(".submenu-toggle").setAttribute("aria-expanded", "false");
    });
    var nav = document.getElementById("main-navigation");
    if (nav) nav.classList.remove("is-open");
    var menu = document.querySelector("[data-menu]");
    if (menu) menu.setAttribute("aria-expanded", "false");
  });
  document.addEventListener("submit", function (event) {
    var form = event.target.closest("[data-filters]");
    if (!form) return;
    event.preventDefault();
    var values = new URLSearchParams(new FormData(form));
    var u = new URL(location.href);
    u.search = values.toString();
    history.pushState(null, "", u);
    render();
    document.getElementById("results").focus({ preventScroll: true });
  });
  window.addEventListener("popstate", render);
  document.addEventListener(
    "error",
    function (event) {
      var image = event.target;
      if (image.tagName !== "IMG" || image.dataset.fallback) return;
      image.dataset.fallback = "true";
      var picture = image.closest("picture");
      if (picture)
        picture.querySelectorAll("source").forEach(function (s) {
          s.remove();
        });
      image.src = prefix + "assets/images/placeholders/media.svg";
    },
    true,
  );
  try {
    if (location.search || language() === "en") render();
    else setupCarousel();
  } catch (error) {
    console.error("CVPR page initialization failed", error);
    // Pre-rendered content remains readable if an optional enhancement fails.
  }
  updateStickyNavigation();
  window.addEventListener("resize", updateStickyNavigation);
  if (siteHeader && window.ResizeObserver)
    new ResizeObserver(updateStickyNavigation).observe(siteHeader);
})();
