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

// 语言切换：修复版
const langBtn = document.getElementById('lang-toggle');
const html = document.documentElement;

const langMap = { 
  zh: { txt: '中', aria: '切换到中文' },
  en: { txt: 'EN', aria: 'Switch to English' } 
};

function applyLang(lang) {
  html.lang = lang;
  localStorage.setItem('lang', lang);

  // 更新按钮的无障碍标签
  langBtn.setAttribute('aria-label', langMap[lang].aria);

  // 更新按钮内部文本（保留 <span> 结构）
  const zhSpan = langBtn.querySelector('.txt.zh');
  const enSpan = langBtn.querySelector('.txt.en');
  if (lang === 'zh') {
    zhSpan.style.display = 'inline';
    enSpan.style.display = 'none';
    langBtn.classList.remove('on');
  } else {
    zhSpan.style.display = 'none';
    enSpan.style.display = 'inline';
    langBtn.classList.add('on');
  }

  // 执行翻译
  translatePage(lang);
}

// ===== 放在 main.js 末尾 =====
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'zh';
  applyLang(savedLang);
});