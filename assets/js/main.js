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

// 语言切换
const langToggle = document.getElementById('lang-toggle');
const html = document.documentElement; // <html lang="zh-CN">

// 初始化：从 localStorage 恢复语言
const savedLang = localStorage.getItem('lang') || 'zh';
html.lang = savedLang;
langToggle.textContent = savedLang === 'zh' ? 'EN' : '中';

// 点击切换
langToggle.addEventListener('click', () => {
  const current = html.lang;
  const next = current === 'zh' ? 'en' : 'zh';
  html.lang = next;
  langToggle.textContent = next === 'zh' ? 'EN' : '中';
  localStorage.setItem('lang', next);
  translatePage(next);
});

// 翻译函数：遍历所有[data-zh][data-en]元素
function translatePage(lang) {
  document.querySelectorAll('[data-zh][data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}