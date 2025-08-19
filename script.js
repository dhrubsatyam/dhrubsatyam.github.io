// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Dark mode toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
