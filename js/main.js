/* The Hayes House — small site script. Works when opened straight from disk. */

// ===== EDIT SITE-WIDE SETTINGS HERE =====
// Changing SITE_NAME updates every element marked data-site="name".
var SITE = {
  name: "The Hayes House",           // PLACEHOLDER name
  // Optional platform links — leave "" to keep those buttons hidden.
  airbnbUrl: "",                      // PLACEHOLDER e.g. "https://www.airbnb.com/rooms/..."
  vrboUrl: ""                         // PLACEHOLDER
};

document.addEventListener("DOMContentLoaded", function () {
  // Site name
  document.querySelectorAll('[data-site="name"]').forEach(function (el) { el.textContent = SITE.name; });

  // Footer year
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Optional Airbnb / VRBO links
  [["airbnb", SITE.airbnbUrl], ["vrbo", SITE.vrboUrl]].forEach(function (p) {
    document.querySelectorAll('[data-platform="' + p[0] + '"]').forEach(function (el) {
      if (p[1]) { el.href = p[1]; el.hidden = false; } else { el.hidden = true; }
    });
  });

  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Mark current page in nav (works for file:// and hosted URLs)
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach(function (a) {
    if (a.getAttribute("href") === here) a.setAttribute("aria-current", "page");
  });

  // Inquiry form — NOT CONNECTED to any service. Shows a notice only; nothing is sent.
  var form = document.getElementById("inquiry-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("form-status");
      status.textContent = "Online requests are not open just yet, so nothing was sent. Please call us at 518-832-9174.";
      status.focus();
    });
  }
});
