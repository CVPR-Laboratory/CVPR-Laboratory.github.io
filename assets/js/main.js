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

// 语言切换：高级版
const langBtn = document.getElementById('lang-toggle');
const html = document.documentElement;

const langMap = { zh: { txt: 'EN',  aria: 'Switch to English' },
                  en: { txt: '中',  aria: '切换到中文' } };

function applyLang(lang) {
  html.lang = lang;
  localStorage.setItem('lang', lang);
  // 按钮文字 & 无障碍标签
  langBtn.textContent = langMap[lang].txt;
  langBtn.setAttribute('aria-label', langMap[lang].aria);
  // 高亮当前语言
  langBtn.classList.toggle('on', lang === 'en');
  // 执行翻译
  translatePage(lang);
}

// 初始加载
applyLang(localStorage.getItem('lang') || 'zh');

langBtn.addEventListener('click', () => {
  const next = html.lang === 'zh' ? 'en' : 'zh';
  applyLang(next);
});
// 双语翻译
function translatePage(lang) {
  document.querySelectorAll('[data-zh][data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}


/* 新增：切换语言后整页跳转 */
const base = '{{ site.baseurl }}';
const target = (lang === 'en') ? base + '/en/' : base + '/';
if (location.pathname !== target) location.href = target;