// تأثير Fade-In عند تحميل الصفحة
window.addEventListener("load", () => {
  const box = document.querySelector(".content-box");
  setTimeout(() => {
    box.classList.add("fade-in");
  }, 300);

  // استعادة الثيم من LocalStorage
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});

// زر تبديل الثيم
const themeBtn = document.createElement("button");
themeBtn.textContent = "تبديل الثيم";
themeBtn.classList.add("theme-btn");
document.body.appendChild(themeBtn);

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // حفظ الاختيار في LocalStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
