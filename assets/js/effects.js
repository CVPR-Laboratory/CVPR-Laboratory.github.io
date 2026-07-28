(function () {
  window.CVPR = window.CVPR || {};

  var particleStops = [];
  var revealObserver = null;
  var countObserver = null;
  var typeTimers = [];
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var coarsePointer = window.matchMedia("(pointer: coarse)").matches;

  function clearTimers() {
    typeTimers.forEach(function (timer) { clearTimeout(timer); });
    typeTimers = [];
  }

  function stopParticles() {
    particleStops.forEach(function (stop) { stop(); });
    particleStops = [];
  }

  function initParticles() {
    stopParticles();
    if (reduceMotion) return;
    document.querySelectorAll("[data-particle-canvas]").forEach(function (canvas) {
      var ctx = canvas.getContext("2d");
      if (!ctx) return;
      var parent = canvas.parentElement;
      var width = 0;
      var height = 0;
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      var frame = 0;
      var stopped = false;
      var isVisible = true;
      var resizeFrame = 0;
      var particles = [];
      var mouse = { x: -9999, y: -9999 };
      var count = coarsePointer ? 44 : 86;

      function resize() {
        var rect = parent.getBoundingClientRect();
        width = Math.max(rect.width, window.innerWidth);
        height = Math.max(rect.height, 420);
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        particles = Array.from({ length: count }, function (_, i) {
          return {
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * (coarsePointer ? 0.28 : 0.48),
            vy: (Math.random() - 0.5) * (coarsePointer ? 0.28 : 0.48),
            r: 1 + Math.random() * 2.4,
            phase: i * 0.31
          };
        });
      }

      function draw() {
        if (stopped) return;
        if (document.hidden || !isVisible) {
          frame = 0;
          return;
        }
        frame = requestAnimationFrame(draw);
        ctx.clearRect(0, 0, width, height);
        var gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 420);
        gradient.addColorStop(0, "rgba(0, 213, 255, 0.18)");
        gradient.addColorStop(1, "rgba(0, 213, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        for (var i = 0; i < particles.length; i += 1) {
          var p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.x += Math.sin(performance.now() * 0.0004 + p.phase) * 0.04;
          p.y += Math.cos(performance.now() * 0.0004 + p.phase) * 0.04;
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;

          for (var j = i + 1; j < particles.length; j += 1) {
            var q = particles[j];
            var dx = p.x - q.x;
            var dy = p.y - q.y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 128) {
              ctx.strokeStyle = "rgba(0, 213, 255," + (0.18 * (1 - dist / 128)) + ")";
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.stroke();
            }
          }

          var mouseDist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (mouseDist < 170) {
            ctx.strokeStyle = "rgba(34, 255, 200," + (0.35 * (1 - mouseDist / 170)) + ")";
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }

          ctx.fillStyle = "rgba(230, 241, 255, 0.82)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      function move(event) {
        var rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
      }

      function leave() {
        mouse.x = -9999;
        mouse.y = -9999;
      }

      function scheduleResize() {
        if (resizeFrame) return;
        resizeFrame = requestAnimationFrame(function () {
          resizeFrame = 0;
          resize();
        });
      }

      function resume() {
        if (!stopped && !document.hidden && isVisible && !frame) draw();
      }

      function onVisibilityChange() {
        resume();
      }

      var visibilityObserver = new IntersectionObserver(function (entries) {
        isVisible = entries[0].isIntersecting;
        resume();
      }, { threshold: 0.01 });

      resize();
      visibilityObserver.observe(canvas);
      draw();
      window.addEventListener("resize", scheduleResize, { passive: true });
      document.addEventListener("visibilitychange", onVisibilityChange);
      canvas.addEventListener("pointermove", move);
      canvas.addEventListener("pointerleave", leave);
      particleStops.push(function () {
        stopped = true;
        cancelAnimationFrame(frame);
        cancelAnimationFrame(resizeFrame);
        visibilityObserver.disconnect();
        window.removeEventListener("resize", scheduleResize);
        document.removeEventListener("visibilitychange", onVisibilityChange);
        canvas.removeEventListener("pointermove", move);
        canvas.removeEventListener("pointerleave", leave);
      });
    });
  }

  function initReveal() {
    if (revealObserver) revealObserver.disconnect();
    var nodes = document.querySelectorAll(".reveal");
    if (!nodes.length) return;
    if (reduceMotion) {
      nodes.forEach(function (node) { node.classList.add("is-visible"); });
      return;
    }
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -6% 0px" });
    nodes.forEach(function (node) { revealObserver.observe(node); });
  }

  function initTilt() {
    if (reduceMotion || coarsePointer) return;
    document.querySelectorAll("[data-tilt]").forEach(function (card) {
      if (card.dataset.tiltReady === "true") return;
      card.dataset.tiltReady = "true";
      card.addEventListener("pointermove", function (event) {
        var rect = card.getBoundingClientRect();
        var x = (event.clientX - rect.left) / rect.width - 0.5;
        var y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty("--tilt-x", (-y * 8).toFixed(2) + "deg");
        card.style.setProperty("--tilt-y", (x * 10).toFixed(2) + "deg");
        card.style.setProperty("--spot-x", ((event.clientX - rect.left) / rect.width * 100).toFixed(1) + "%");
        card.style.setProperty("--spot-y", ((event.clientY - rect.top) / rect.height * 100).toFixed(1) + "%");
      });
      card.addEventListener("pointerleave", function () {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        card.style.setProperty("--spot-x", "50%");
        card.style.setProperty("--spot-y", "0%");
      });
    });
  }

  function initCursorGlow() {
    var glow = document.querySelector(".cursor-glow");
    if (!glow || coarsePointer || reduceMotion) return;
    var x = -200;
    var y = -200;
    var tx = x;
    var ty = y;
    var raf = 0;
    function animate() {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      glow.style.transform = "translate3d(" + x + "px," + y + "px,0)";
      raf = requestAnimationFrame(animate);
    }
    function move(event) {
      tx = event.clientX - 160;
      ty = event.clientY - 160;
    }
    window.addEventListener("pointermove", move);
    cancelAnimationFrame(raf);
    animate();
  }

  function initTypewriter() {
    clearTimers();
    if (reduceMotion) {
      document.querySelectorAll("[data-typewriter]").forEach(function (node) {
        node.textContent = node.dataset.typewriter.split("|")[0] || "";
      });
      return;
    }
    document.querySelectorAll("[data-typewriter]").forEach(function (node) {
      var words = node.dataset.typewriter.split("|");
      var wordIndex = 0;
      var charIndex = 0;
      var deleting = false;
      function tick() {
        var word = words[wordIndex] || "";
        node.textContent = deleting ? word.slice(0, charIndex--) : word.slice(0, charIndex++);
        if (!deleting && charIndex > word.length + 8) deleting = true;
        if (deleting && charIndex < 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          charIndex = 0;
        }
        typeTimers.push(setTimeout(tick, deleting ? 38 : 62));
      }
      tick();
    });
  }

  function initSplitTitle() {
    if (reduceMotion) return;
    document.querySelectorAll("[data-split-title]").forEach(function (node) {
      if (node.dataset.splitReady === "true") return;
      var text = node.textContent;
      node.dataset.splitReady = "true";
      node.innerHTML = text.split("").map(function (char, index) {
        return '<span style="--i:' + index + '">' + (char === " " ? "&nbsp;" : char) + '</span>';
      }).join("");
    });
  }

  function initCountUp() {
    if (countObserver) countObserver.disconnect();
    var nodes = document.querySelectorAll("[data-countup]");
    if (!nodes.length) return;
    countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting || entry.target.dataset.counted === "true") return;
        entry.target.dataset.counted = "true";
        var target = Number(entry.target.dataset.countup);
        var start = performance.now();
        function step(now) {
          var progress = Math.min((now - start) / 1200, 1);
          entry.target.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3))).toString();
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.3 });
    nodes.forEach(function (node) { countObserver.observe(node); });
  }

  function refresh() {
    initParticles();
    initReveal();
    initTilt();
    initTypewriter();
    initSplitTitle();
    initCountUp();
  }

  function init() {
    initCursorGlow();
    refresh();
  }

  window.CVPR.effects = {
    init: init,
    refresh: refresh
  };
})();
