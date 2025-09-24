// زر تبديل الثيم
const themeBtn = document.createElement("button");
themeBtn.textContent = "تبديل الثيم";
themeBtn.classList.add("theme-btn");
document.body.appendChild(themeBtn);

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// عند تحميل الصفحة
window.addEventListener("load", () => {
  const container = document.querySelector(".form-container");
  setTimeout(() => {
    container.style.opacity = "1";
  }, 300);

  // استعادة الثيم المحفوظ
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});

// التحقق من الحقول قبل الإرسال
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    e.preventDefault();
    alert("الرجاء ملء جميع الحقول");
  }
});
