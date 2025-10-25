/* =========================================================
 * 高德地图 + 表单交互（github.io 无阻塞）
 * =========================================================*/
document.addEventListener('DOMContentLoaded', () => {

    /* 1. 等高德脚本加载完会自动回调 window.initAMap ------------- */
    window.initAMap = () => {
        // 实验室经纬度（示例：北京)，换成自己的
        const center = [119.53763, 35.44084];
        const map = new AMap.Map('map', {
            zoom: 16,
            center: center,
            scrollWheel: false, // 禁滚轮缩放，更简洁
        });
        // 标记
        new AMap.Marker({
            position: center,
            title: 'CVPR-Laboratory'
        }).setMap(map);

        // 保存实例，供全屏或其他交互
        window.amapInstance = map;
    };

    /* 2. 点击地图容器 → 原生全屏 ------------------------------------ */
    document.getElementById('map').addEventListener('click', function () {
        const el = this;
        if (el.requestFullscreen) el.requestFullscreen();
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
        else if (el.msRequestFullscreen) el.msRequestFullscreen();
    });

    /* 3. 联系表单提交（与原逻辑一致）-------------------------------- */
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());
        if (!data.name || !data.email || !data.subject || !data.message) {
            alert(window.htmlLang === 'en' ? 'Please complete all required fields.' : '请完整填写必填项。');
            return;
        }
        const btn = form.querySelector('.btn-submit');
        const origText = btn.textContent;
        btn.disabled = true;
        btn.textContent = window.htmlLang === 'en' ? 'Sending…' : '发送中…';
        setTimeout(() => {
            alert(window.htmlLang === 'en' ? 'Sent successfully! We will reply within 3 workdays.' : '发送成功！我们将在3个工作日内回复。');
            form.reset();
            btn.disabled = false;
            btn.textContent = origText;
        }, 1200);
    });

    /* 4. 保存当前语言到全局 ---------------------------------------- */
    window.htmlLang = document.documentElement.lang;
});