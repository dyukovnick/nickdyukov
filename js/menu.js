// ===== Menu =====
const MenuBtn = document.querySelector(".MenuBtn");
const menu = document.querySelector(".menu")

MenuBtn.addEventListener("click", ToggleMenu);

function ToggleMenu() {
  menu.classList.toggle("active")
}

// ===== Page navigation buttons =====
const MainPage = document.querySelector(".MainPage");
const EnPage = document.querySelector(".EnPage");
const RuPage = document.querySelector(".RuPage");

if (MainPage) {
  MainPage.addEventListener("click", () => {
    window.location.href = "/nickdyukov/index.html";
  });
}

if (EnPage) {
  EnPage.addEventListener("click", () => {
    window.location.href = "/nickdyukov/pages/en.html";
  });
}

if (RuPage) {
  RuPage.addEventListener("click", () => {
    window.location.href = "/nickdyukov/pages/ru.html";
  });
}