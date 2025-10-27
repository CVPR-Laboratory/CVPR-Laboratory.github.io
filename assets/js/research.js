/**
 * 研究方向页面专用交互功能
 */

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 研究项目卡片交互效果
    initProjectCards();
    
    // 研究设施卡片交互效果
    initFacilityCards();
    
    // 统计数据动画效果
    initStatsAnimation();
    
    // 研究领域卡片展开/收起功能
    initResearchDetails();
});

/**
 * 初始化研究项目卡片交互效果
 */
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // 添加鼠标悬停效果
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
        
        // 点击卡片显示更多信息（示例功能）
        card.addEventListener('click', function() {
            // 在实际应用中，这里可以打开项目详情模态框
            console.log('点击了项目卡片:', this.querySelector('h3').textContent);
        });
    });
}

/**
 * 初始化研究设施卡片交互效果
 */
function initFacilityCards() {
    const facilityItems = document.querySelectorAll('.facility-item');
    
    facilityItems.forEach(item => {
        // 添加点击效果
        item.addEventListener('click', function() {
            // 在实际应用中，这里可以打开设施详情页面
            console.log('点击了设施:', this.querySelector('h3').textContent);
        });
    });
}

/**
 * 初始化统计数据动画效果
 */
function initStatsAnimation() {
    const statItems = document.querySelectorAll('.stat-item');
    
    // 创建Intersection Observer来检测元素是否进入视口
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 元素进入视口，开始动画
                animateCounter(entry.target);
                observer.unobserve(entry.target); // 动画执行一次后停止观察
            }
        });
    }, { threshold: 0.5 }); // 当元素50%进入视口时触发
    
    // 观察所有统计项
    statItems.forEach(item => {
        observer.observe(item);
    });
}

/**
 * 数字计数动画
 */
function animateCounter(statItem) {
    const numberElement = statItem.querySelector('.stat-number');
    const targetNumber = parseInt(numberElement.textContent);
    const duration = 2000; // 动画持续时间(毫秒)
    const step = targetNumber / (duration / 16); // 每16ms增加的值
    
    let currentNumber = 0;
    
    const timer = setInterval(() => {
        currentNumber += step;
        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(timer);
        }
        numberElement.textContent = Math.floor(currentNumber) + (numberElement.textContent.includes('+') ? '+' : '');
    }, 16);
}

/**
 * 初始化研究领域详情展开/收起功能
 */
function initResearchDetails() {
    const researchItems = document.querySelectorAll('.research-item');
    
    researchItems.forEach(item => {
        const detailsSection = item.querySelector('.research-details');
        
        // 初始状态收起详情
        detailsSection.style.maxHeight = '0';
        detailsSection.style.overflow = 'hidden';
        detailsSection.style.transition = 'max-height 0.3s ease';
        
        // 点击研究领域卡片切换详情显示
        item.addEventListener('click', function(e) {
            // 防止点击链接或按钮时触发
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
                return;
            }
            
            // 切换详情显示
            if (detailsSection.style.maxHeight === '0px' || !detailsSection.style.maxHeight) {
                detailsSection.style.maxHeight = detailsSection.scrollHeight + 'px';
            } else {
                detailsSection.style.maxHeight = '0';
            }
        });
    });
}

/**
 * 过滤研究项目功能（示例）
 */
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

/**
 * 搜索研究项目功能（示例）
 */
function searchProjects(query) {
    const projectCards = document.querySelectorAll('.project-card');
    const lowerQuery = query.toLowerCase();
    
    projectCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(lowerQuery) || description.includes(lowerQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 导出函数供其他脚本使用（如果需要在其他文件中使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initProjectCards,
        initFacilityCards,
        initStatsAnimation,
        initResearchDetails,
        filterProjects,
        searchProjects
    };
}