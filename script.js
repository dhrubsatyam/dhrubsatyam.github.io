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

// Typing effect
const text = ["Lead Data Scientist", "AI & ML Expert", "Mentor"];
let i = 0, j = 0;
const speed = 120;
const typingEl = document.querySelector(".typing span");

function type() {
  if (j < text[i].length) {
    typingEl.textContent += text[i][j];
    j++;
    setTimeout(type, speed);
  } else {
    setTimeout(erase, 1500);
  }
}
function erase() {
  if (j > 0) {
    typingEl.textContent = text[i].substring(0, j-1);
    j--;
    setTimeout(erase, speed/2);
  } else {
    i = (i+1) % text.length;
    setTimeout(type, speed);
  }
}
type();
