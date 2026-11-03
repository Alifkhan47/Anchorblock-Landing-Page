document.documentElement.classList.replace("no-js", "js");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(
  ".section-heading, .product-card, .client-story, .capability-card, .sector-point, .studio-top, .studio-details, .team-heading, .team-list > div, .contact-form",
);

if (!prefersReducedMotion && "IntersectionObserver" in window && revealItems.length) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });

  document.documentElement.classList.add("motion-ready");
  revealItems.forEach((item) => {
    item.classList.add("reveal-on-scroll");
    revealObserver.observe(item);
  });
}

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");

if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuButton.focus();
    }
  });
}

document.querySelectorAll("[data-inactive-link]").forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const subject = `Website enquiry — ${formData.get("focus")}`;
  const body = [
    `Name: ${formData.get("name")}`,
    `Business email: ${formData.get("email")}`,
    `Focus area: ${formData.get("focus")}`,
    "",
    "Project brief:",
    formData.get("brief"),
  ].join("\n");
  const mailto = `mailto:faruk@anchorblock.vc?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  if (formStatus) formStatus.textContent = "Your email app is opening with your message ready to send.";
  window.location.href = mailto;
});

const copyrightYear = document.querySelector("#copyright-year");
if (copyrightYear) copyrightYear.textContent = String(new Date().getFullYear());
