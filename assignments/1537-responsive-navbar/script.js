document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');
  menuIcon.addEventListener('click', function () {
    const open = navLinks.classList.toggle('active');
    menuIcon.setAttribute('aria-expanded', String(open));
    menuIcon.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
  });
});
