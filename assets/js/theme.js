(function () {
  window.CVPR = window.CVPR || {};

  function getTheme() {
    return document.documentElement.getAttribute("data-theme") || "dark";
  }

  function setTheme(theme) {
    var next = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateControls();
  }

  function toggleTheme() {
    setTheme(getTheme() === "dark" ? "light" : "dark");
  }

  function updateControls() {
    var theme = getTheme();
    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(theme === "light"));
      button.setAttribute("data-state", theme);
      var label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
      button.setAttribute("aria-label", label);
    });
  }

  function initControls() {
    updateControls();
    document.addEventListener("click", function (event) {
      var button = event.target.closest("[data-theme-toggle]");
      if (button) toggleTheme();
    });
  }

  window.CVPR.theme = {
    getTheme: getTheme,
    setTheme: setTheme,
    toggleTheme: toggleTheme,
    initControls: initControls,
    updateControls: updateControls
  };
})();
