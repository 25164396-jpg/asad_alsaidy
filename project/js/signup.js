// إضافة زر تبديل الوضع الداكن
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

// استعادة الثيم عند تحميل الصفحة
window.addEventListener("load", () => {
  const container = document.querySelector(".form-container");
  setTimeout(() => container.classList.add("fade-in"), 300);

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});

// التحقق من الحقول قبل إرسال النموذج
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", (e) => {
  const password = signupForm.querySelector("input[name='password']").value.trim();
  const confirmPassword = signupForm.querySelector("input[name='confirm_password']").value.trim();

  if (password !== confirmPassword) {
    e.preventDefault();
    alert("كلمة المرور غير متطابقة");
  }
});
