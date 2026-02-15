// ===== Derives the current age from the birth date =====
// ===== Ensures automatic yearly updates without manual intervention =====
const birthYear = 2011;
const birthMonth = 4;

const now = new Date();

let years = now.getFullYear() - birthYear;
let months = now.getMonth() - birthMonth;

if (months < 0) {
  years--;
  months += 12;
}

const enAge = document.querySelector(".en-age");
  if (enAge) {
  enAge.textContent = "Age: " + years + " years " + months + " months";
  }

const ruAge = document.querySelector(".ru-age");
  if (ruAge) {
    ruAge.textContent = "Возраст: " + years + " лет " + months + " месяцев";
  }