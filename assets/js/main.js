// 折叠菜单
const hamburger = document.querySelector('.hamburger');
const navMenu  = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => navMenu.classList.toggle('open'));

// 返回顶部
const topBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  topBtn.classList.toggle('show', window.scrollY > 300);
});
topBtn.addEventListener('click', () => window.scrollTo({ top: 1000, behavior: 'smooth' }));