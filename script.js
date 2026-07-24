(function () {
  "use strict";

  var CONTACT_EMAIL = "keshavkumar64581@gmail.com";

  // Formspree endpoint for in-page submissions (no email app popup).
  // Get your own free endpoint at https://formspree.io (sign up with
  // keshavkumar64581@gmail.com, create a form, paste its URL below).
  // Until you replace this placeholder, the form automatically falls
  // back to opening the visitor's email app instead — it never breaks.
  var FORMSPREE_ENDPOINT = "https://formspree.io/f/meeyrgbg";

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Logo: scroll to top ----------
     Note: this is deliberately handled in JS rather than an in-page
     anchor link. Anchoring to an element that uses position: sticky
     (our header) causes browsers to miscalculate the scroll target
     during a smooth scroll, since the sticky element's position keeps
     changing as the page scrolls. Driving it with scrollTo() avoids
     that bug entirely. */
  var brandLink = document.getElementById("brandLink");
  if (brandLink) {
    brandLink.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");

  function closeNav() {
    nav.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
  }

  /* ---------- Active link highlighting on scroll ---------- */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink() {
    var scrollPos = window.scrollY + 120;
    var currentId = "";

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        currentId = section.id;
      }
    });

    navLinks.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + currentId;
      link.style.color = isActive ? "var(--navy)" : "";
    });
  }

  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();

  /* ---------- Back to top ---------- */
  var backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener(
      "scroll",
      function () {
        backToTop.classList.toggle("visible", window.scrollY > 600);
      },
      { passive: true }
    );

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Copy email button ---------- */
  var copyBtn = document.getElementById("copyEmailBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var restoreLabel = "Copy";

      function showCopied() {
        copyBtn.textContent = "Copied!";
        copyBtn.classList.add("copied");
        setTimeout(function () {
          copyBtn.textContent = restoreLabel;
          copyBtn.classList.remove("copied");
        }, 2000);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(CONTACT_EMAIL).then(showCopied).catch(function () {
          fallbackCopy();
        });
      } else {
        fallbackCopy();
      }

      function fallbackCopy() {
        var temp = document.createElement("textarea");
        temp.value = CONTACT_EMAIL;
        temp.style.position = "fixed";
        temp.style.opacity = "0";
        document.body.appendChild(temp);
        temp.select();
        try {
          document.execCommand("copy");
          showCopied();
        } catch (err) {
          /* clipboard unsupported; user can still select the email text manually */
        }
        document.body.removeChild(temp);
      }
    });
  }

  /* ---------- Contact form ----------
     Primary path: submit in-page to Formspree (visitor never leaves
     the site, no email app popup). If the endpoint hasn't been set up
     yet, or the request fails for any reason (offline, ad-blocker,
     etc.), it falls back to opening the visitor's email app so a
     message is never lost. */
  var form = document.getElementById("contactForm");
  var formNote = document.getElementById("formNote");
  var submitBtn = form ? form.querySelector(".form-submit") : null;

  function isFormspreeConfigured() {
    return FORMSPREE_ENDPOINT.indexOf("YOUR_FORM_ID") === -1;
  }

  function openMailClient(name, email, subject, message) {
    var mailSubject = subject ? subject : "Portfolio message from " + name;
    var mailBody = "Name: " + name + "\n" + "Email: " + email + "\n\n" + message;
    var mailtoLink =
      "mailto:" + CONTACT_EMAIL +
      "?subject=" + encodeURIComponent(mailSubject) +
      "&body=" + encodeURIComponent(mailBody);
    window.location.href = mailtoLink;
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var subject = document.getElementById("subject").value.trim();
      var message = document.getElementById("message").value.trim();

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message) {
        showNote("Please fill in your name, email, and message.", "error");
        return;
      }
      if (!emailPattern.test(email)) {
        showNote("Please enter a valid email address.", "error");
        return;
      }

      // Formspree isn't set up yet: use the reliable mailto fallback.
      if (!isFormspreeConfigured()) {
        openMailClient(name, email, subject, message);
        showNote(
          "Opening your email app with the message ready to send. If nothing opens, email me directly at " + CONTACT_EMAIL + ".",
          "success"
        );
        form.reset();
        return;
      }

      // Formspree can't be reached from a page opened directly as a
      // local file (file:// — e.g. double-clicking index.html). Browsers
      // don't send a referer header from file://, and Formspree rejects
      // the request. This only affects local testing — once the site is
      // hosted (GitHub Pages, Netlify, etc.) this check is skipped and
      // in-page sending works normally.
      if (window.location.protocol === "file:") {
        openMailClient(name, email, subject, message);
        showNote(
          "In-page sending only works once this site is hosted on a real web address (opening the file directly blocks it). I've opened your email app instead so this message isn't lost.",
          "error"
        );
        form.reset();
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }
      showNote("Sending your message…", "");

      // Guard against the request hanging indefinitely (slow network,
      // an ad-blocker silently dropping it, etc.) so the button never
      // gets stuck on "Sending…".
      var controller = typeof AbortController !== "undefined" ? new AbortController() : null;
      var timeoutId = setTimeout(function () {
        if (controller) controller.abort();
      }, 10000);

      fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
        signal: controller ? controller.signal : undefined,
      })
        .then(function (response) {
          clearTimeout(timeoutId);
          if (response.ok) {
            showNote("Thanks! Your message has been sent — I'll get back to you soon.", "success");
            form.reset();
          } else {
            return response.json().then(function (data) {
              var msg =
                data && data.errors && data.errors.length
                  ? data.errors.map(function (er) { return er.message; }).join(", ")
                  : "Something went wrong sending your message.";
              throw new Error(msg);
            });
          }
        })
        .catch(function (err) {
          clearTimeout(timeoutId);
          // Network/service issue, timeout, or an ad-blocker: fall back
          // to the email app so the message still reaches the inbox.
          // Full error is logged to the console so it can be diagnosed
          // (open browser DevTools → Console to see it).
          console.error("Formspree submission failed:", err);
          openMailClient(name, email, subject, message);

          var reason =
            err && err.name === "AbortError"
              ? "The request took too long"
              : "Couldn't send that in-page";
          showNote(
            reason + ", so I've opened your email app instead. If nothing opens, email me directly at " + CONTACT_EMAIL + ".",
            "error"
          );
          form.reset();
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Send message";
          }
        });
    });
  }

  function showNote(text, type) {
    if (!formNote) return;
    formNote.textContent = text;
    formNote.classList.remove("success", "error");
    if (type) formNote.classList.add(type);
  }
})();
