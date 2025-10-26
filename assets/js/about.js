/**
 * 关于我们页面专用JavaScript
 * 包含时间线动画、数字计数动画等交互效果
 */

document.addEventListener('DOMContentLoaded', function() {
    // 数字计数动画
    function animateNumbers() {
        const counters = document.querySelectorAll('.achievement-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000; // 动画持续时间(毫秒)
            const step = target / (duration / 16); // 每16ms增加的值
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current);
            }, 16);
        });
    }
    
    // 滚动触发动画
    function setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('achievements-section')) {
                        animateNumbers();
                    }
                    
                    if (entry.target.classList.contains('timeline-item')) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                    
                    if (entry.target.classList.contains('value-card')) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                }
            });
        }, observerOptions);
        
        // 观察时间线项目
        document.querySelectorAll('.timeline-item').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(item);
        });
        
        // 观察价值观卡片
        document.querySelectorAll('.value-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });
        
        // 观察成就区域
        const achievementsSection = document.querySelector('.achievements-section');
        if (achievementsSection) {
            observer.observe(achievementsSection);
        }
    }
    
    // 初始化页面效果
    function initPageEffects() {
        setupScrollAnimations();
        
        // 为图片占位符添加点击效果（实际项目中可替换为真实图片）
        document.querySelectorAll('.image-placeholder').forEach(placeholder => {
            placeholder.addEventListener('click', function() {
                alert('在实际项目中，这里会显示真实的实验室照片');
            });
        });
    }
    
    // 页面加载完成后初始化
    initPageEffects();
});