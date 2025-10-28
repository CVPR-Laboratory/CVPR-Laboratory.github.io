// ========== 首页专用交互效果 ==========

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 初始化轮播图
  initCarousel();
  
  // 初始化动画效果
  initAnimations();
  
  // 初始化统计数据动画
  initStatsCounter();
});

// 轮播图初始化
function initCarousel() {
  const items = document.querySelectorAll('.carousel .item');
  let idx = 0;
  
  // 设置轮播间隔
  setInterval(() => {
    items[idx].classList.remove('active');
    idx = (idx + 1) % items.length;
    items[idx].classList.add('active');
  }, 4000); // 每4秒切换一次
}

// 初始化动画效果
function initAnimations() {
  // 创建Intersection Observer来检测元素是否进入视口
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // 观察需要动画的元素
  const animateElements = document.querySelectorAll(
    '.highlight-card, .advantage-item, .news-item, .stat-item'
  );
  
  animateElements.forEach(el => {
    observer.observe(el);
  });
}

// 统计数据计数器动画
function initStatsCounter() {
  const statItems = document.querySelectorAll('.stat-item');
  
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statNumber = entry.target.querySelector('.stat-number');
        const targetValue = parseInt(statNumber.textContent);
        animateCounter(statNumber, 0, targetValue, 1500);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  statItems.forEach(item => {
    statObserver.observe(item);
  });
}

// 数字计数器动画
function animateCounter(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    element.textContent = value + (element.textContent.includes('+') ? '+' : '');
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// 平滑滚动到指定区域
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// 添加CSS动画类
const style = document.createElement('style');
style.textContent = `
  .highlight-card, .advantage-item, .news-item {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .highlight-card.animate-in, 
  .advantage-item.animate-in, 
  .news-item.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  .stat-item {
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .stat-item.animate-in {
    opacity: 1;
    transform: scale(1);
  }
`;
document.head.appendChild(style);