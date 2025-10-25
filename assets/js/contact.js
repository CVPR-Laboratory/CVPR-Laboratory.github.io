/* =========================================================
 * 百度地图 + 表单交互（contact.html 专用）
 * =========================================================*/
document.addEventListener('DOMContentLoaded', () => {

    /* 1. 加载百度地图 2.0（无 document.write）------------- */
    const AK = 'afOVminbVEtBMP7pkHnYa3ZxgNC1fPlb';   // 你的 AK
    const script = document.createElement('script');
    script.src = `https://api.map.baidu.com/api?v=2.0&ak=${AK}&callback=initBmap`;
    document.head.appendChild(script);

    /* 2. 初始化地图 ------------------------------------------------------ */
    window.initBmap = () => {
        // 实验室坐标（示例：s楼)，换成自己的
        const point = new BMap.Point(119.53763, 35.44084);
        const map = new BMap.Map('map');
        map.centerAndZoom(point, 16);
        map.addOverlay(new BMap.Marker(point));

        // 保存实例，供全屏或其他交互使用
        window.bmapInstance = map;
    };

    /* 3. 点击地图容器 → 原生全屏 ----------------------------------------- */
    document.getElementById('map').addEventListener('click', function () {
        const el = this;
        if (el.requestFullscreen) el.requestFullscreen();
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
        else if (el.msRequestFullscreen) el.msRequestFullscreen();
    });

    /* 4. 联系表单提交 ----------------------------------------------------- */
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

        // 模拟异步提交
        setTimeout(() => {
            alert(window.htmlLang === 'en' ? 'Sent successfully! We will reply within 3 workdays.' : '发送成功！我们将在3个工作日内回复。');
            form.reset();
            btn.disabled = false;
            btn.textContent = origText;
        }, 1200);
    });

    /* 5. 保存当前语言到全局，供表单提示使用 -------------------------------- */
    window.htmlLang = document.documentElement.lang;
});