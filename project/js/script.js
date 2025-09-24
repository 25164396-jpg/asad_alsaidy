// -------------------------
// تأثير تكبير الصور وعرض اسم القسم
// -------------------------
const images = document.querySelectorAll('.nav-img');
images.forEach(img => {
  img.addEventListener('click', () => {
    alert(`تم فتح القسم: ${img.alt}`);
  });
});

// -------------------------
// تأثير Fade-In عند تحميل الصفحة
// -------------------------
window.addEventListener('load', () => {
  const boxes = document.querySelectorAll('.content-box');
  boxes.forEach((box, index) => {
    setTimeout(() => {
      box.classList.add('fade-in');
    }, index * 300);
  });

  // استعادة وضع الثيم من LocalStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

// -------------------------
// زر تبديل الثيم (الوضع الليلي)
// -------------------------
const themeToggle = document.createElement('button');
themeToggle.textContent = "تبديل الثيم";
themeToggle.classList.add('theme-btn');
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // حفظ اختيار الثيم في LocalStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
