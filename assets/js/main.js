// 折叠菜单
const hamburger = document.querySelector('.hamburger');
const navMenu  = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => navMenu.classList.toggle('open'));

// 返回顶部
const topBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  topBtn.classList.toggle('show', window.scrollY > 300);
});
topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));




/* =========================================================中英文切效果实现========================================================= */

// 滑动开关语言切换
const langCheck = document.getElementById('lang-check');
langCheck.addEventListener('change', e => {
  const next = e.target.checked ? 'en' : 'zh';
  document.documentElement.lang = next;
  localStorage.setItem('lang', next);
  translatePage(next);   // 沿用之前的翻译函数
});

// 页面加载时恢复开关位置
langCheck.checked = (localStorage.getItem('lang') === 'en');

function translatePage(lang){
  document.querySelectorAll('[data-zh][data-en]').forEach(el=>{
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}