/* 本页独有交互
   1. 表单校验 + 提交
   2. 地图点击全屏（高德/谷歌均可）
   3. 与原 main.js 无冲突
----------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {

    /* ---- 联系表单 ---- */
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', e => {
        e.preventDefault();

        // 简单校验
        const data = Object.fromEntries(new FormData(form).entries());
        if (!data.name || !data.email || !data.subject || !data.message) {
            alert(window.htmlLang === 'en' ? 'Please complete all required fields.' : '请完整填写必填项。');
            return;
        }

        // 模拟提交
        const btn = form.querySelector('.btn-submit');
        const original = btn.textContent;
        btn.disabled = true;
        btn.textContent = window.htmlLang === 'en' ? 'Sending…' : '发送中…';

        setTimeout(() => {
            alert(window.htmlLang === 'en' ? 'Sent successfully! We will reply within 3 workdays.' : '发送成功！我们将在3个工作日内回复。');
            form.reset();
            btn.disabled = false;
            btn.textContent = original;
        }, 1200);
    });

    /* ---- 地图全屏 ---- */
    const mapBox = document.getElementById('map');
    mapBox.addEventListener('click', () => {
        // 如果有真实地图实例，可调用完整 API
        // 这里仅演示占位图全屏
        if (mapBox.requestFullscreen) mapBox.requestFullscreen();
    });

    /* ---- 保存当前语言到全局，方便表单提示 ---- */
    window.htmlLang = document.documentElement.lang;
});