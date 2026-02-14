// ===== Language switch =====
const EnBtn = document.querySelector(".EnBtn");
const RuBtn = document.querySelector(".RuBtn");

if (EnBtn) {
  EnBtn.addEventListener("click", () => {
    window.location.href = "pages/en.html";
  });
}

if (RuBtn) {
  RuBtn.addEventListener("click", () => {
    window.location.href = "pages/ru.html";
  });
}