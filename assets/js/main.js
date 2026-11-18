(function () {
  "use strict";

  const CONTACT_EMAIL = "rajaaljabbar1@gmail.com";
  const WEB3FORMS_ACCESS_KEY = atob("ZGU4ZTdhMmYtNWRjYi00MTMyLTg2ZDgtYTliNTA4YWQ5ZDE1");

  const t = (text) => (window.PRA_I18N ? window.PRA_I18N.tr(text) : text);
  const isEnglish = () => !!window.PRA_I18N && window.PRA_I18N.lang === "en";

  let toastTimer;
  function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
  }

  const phrases = [
    "ping -c 4 enterprise-core.net ... 0% loss",
    "docker compose up -d ... containers healthy",
    "mikrotik-cli: /tool netwatch print",
    "systemctl status freeradius ... active (running)"
  ];
  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function typeLoop() {
    const el = document.getElementById("typewriter-text");
    if (!el) return;
    const current = phrases[phraseIdx];

    if (deleting) {
      charIdx--;
    } else {
      charIdx++;
    }
    el.textContent = current.substring(0, charIdx);

    let speed = deleting ? 35 : 75;
    if (!deleting && charIdx === current.length) {
      speed = 1800;
      deleting = true;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      speed = 400;
    }
    setTimeout(typeLoop, speed);
  }

  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {  }
    document.body.removeChild(ta);
  }

  function setupCopyEmail() {
    const btn = document.getElementById("btn-copy-email");
    if (!btn) return;
    btn.addEventListener("click", async () => {
      const email = document.getElementById("target-email").innerText.trim();
      try {
        await navigator.clipboard.writeText(email);
      } catch (e) {
        fallbackCopy(email);
      }
      const original = btn.innerText;
      btn.innerText = t("Tersalin!");
      btn.classList.add("text-cyan-700", "font-bold");
      setTimeout(() => {
        btn.innerText = original;
        btn.classList.remove("text-cyan-700", "font-bold");
      }, 2000);
    });
  }

  let lastFocused = null;

  function openProjectModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    lastFocused = document.activeElement;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
    const closeBtn = modal.querySelector("[data-close-modal]");
    if (closeBtn) closeBtn.focus();
  }

  function closeProjectModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  function setupModals() {
    document.querySelectorAll("[data-open-modal]").forEach((btn) => {
      btn.addEventListener("click", () => openProjectModal(btn.dataset.openModal));
    });
    document.querySelectorAll("[data-close-modal]").forEach((btn) => {
      btn.addEventListener("click", () => closeProjectModal(btn.dataset.closeModal));
    });

    document.querySelectorAll("[data-modal]").forEach((modal) => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeProjectModal(modal.id);
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.querySelectorAll("[data-modal]:not(.hidden)").forEach((m) => closeProjectModal(m.id));
        return;
      }
      if (e.key !== "Tab") return;
      const open = document.querySelector("[data-modal]:not(.hidden)");
      if (!open) return;
      const focusable = open.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      } else if (!open.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  function setupMobileMenu() {
    const toggle = document.getElementById("mobile-menu-toggle");
    const menu = document.getElementById("mobile-menu");
    if (!toggle || !menu) return;
    const icon = toggle.querySelector(".material-symbols-outlined");

    function setOpen(open) {
      menu.classList.toggle("hidden", !open);
      toggle.setAttribute("aria-expanded", String(open));
      if (icon) icon.textContent = open ? "close" : "menu";
    }

    toggle.addEventListener("click", () => setOpen(menu.classList.contains("hidden")));
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1280) setOpen(false);
    });
  }

  function setupScrollSpy() {
    const links = Array.from(document.querySelectorAll("[data-nav-link]"));
    const sections = links
      .map((l) => document.querySelector(l.getAttribute("href")))
      .filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const activeCls = ["text-cyan-700", "font-semibold"];
    const idleCls = ["text-slate-600", "hover:text-slate-900", "font-medium"];

    function setActive(id) {
      links.forEach((l) => {
        const isActive = l.getAttribute("href") === "#" + id;
        l.classList.remove(...(isActive ? idleCls : activeCls));
        l.classList.add(...(isActive ? activeCls : idleCls));
        if (isActive) l.setAttribute("aria-current", "page");
        else l.removeAttribute("aria-current");
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
  }

  function setupContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    function openMailtoFallback(name, email, subject, message) {
      const body = message + "\n\n--\n" + (isEnglish() ? "Name: " : "Nama: ") + name + "\nEmail: " + email;
      window.location.href =
        "mailto:" + CONTACT_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    }

    function showFeedback(text, isError) {
      const feedback = document.getElementById("form-feedback");
      if (!feedback) return;
      feedback.textContent = text;
      feedback.classList.toggle("text-red-600", !!isError);
      feedback.classList.toggle("text-emerald-700", !isError);
      feedback.classList.remove("hidden");
      setTimeout(() => feedback.classList.add("hidden"), 6000);
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (form.elements["botcheck"] && form.elements["botcheck"].checked) return;

      const name = form.elements["name"].value.trim();
      const email = form.elements["email"].value.trim();
      const subjectSelect = form.elements["subject"];
      const subjectLabel = subjectSelect.options[subjectSelect.selectedIndex].text;
      const message = form.elements["message"].value.trim();
      const subject = "[Portfolio] " + subjectLabel;

      const submitBtn = document.getElementById("contact-submit");
      const submitLabel = document.getElementById("contact-submit-label");

      if (WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY.trim() !== "" && !WEB3FORMS_ACCESS_KEY.includes("__WEB3FORMS_KEY__")) {
        if (submitBtn) submitBtn.disabled = true;
        if (submitLabel) submitLabel.textContent = t("Sending...");
        try {
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              access_key: WEB3FORMS_ACCESS_KEY.trim(),
              subject,
              from_name: "Portfolio — " + name,
              name,
              email,
              category: subjectLabel,
              message
            })
          });
          const data = await res.json();
          if (res.ok && data.success) {
            showFeedback(t("✓ Message transmitted successfully! I will reply to your email shortly."), false);
            form.reset();
          } else {
            throw new Error((data && data.message) || "Submission failed");
          }
        } catch (err) {
          openMailtoFallback(name, email, subject, message);
          showFeedback(t("✓ Opening your email app to send the message…"), false);
          form.reset();
        } finally {
          if (submitBtn) submitBtn.disabled = false;
          if (submitLabel) submitLabel.textContent = t("Send via Terminal");
        }
        return;
      }

      openMailtoFallback(name, email, subject, message);
      showFeedback(t("✓ Opening your email app to send the message…"), false);
      form.reset();
    });
  }

  function setupFooter() {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
    const ts = document.getElementById("timestamp");
    if (ts) {
      const now = new Date();
      const wib = new Date(now.getTime() + 7 * 60 * 60 * 1000);
      ts.textContent = wib.toISOString().slice(0, 19) + "+07:00";
    }
    const ver = document.getElementById("kernel-version");
    if (ver) {
      fetch("https://api.github.com/repos/rajaaljabbar/rajaaljabbar.github.io/actions/runs?per_page=1")
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => {
          if (d && d.workflow_runs && d.workflow_runs[0] && d.workflow_runs[0].run_number) {
            ver.textContent = "v2.1." + d.workflow_runs[0].run_number;
          }
        })
        .catch(() => {});
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeLoop, 800);
    setupCopyEmail();
    setupModals();
    setupMobileMenu();
    setupScrollSpy();
    setupContactForm();
    setupFooter();
  });
})();
