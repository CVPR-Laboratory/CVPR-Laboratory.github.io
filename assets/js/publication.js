// ========== 研究成果页面专用交互功能 ==========

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化研究成果页面功能
    initPublicationPage();
});

// 初始化研究成果页面
function initPublicationPage() {
    // 初始化筛选功能
    initFilters();
    
    // 初始化搜索功能
    initSearch();
    
    // 初始化排序功能
    initSorting();
    
    // 初始化加载更多功能
    initLoadMore();
    
    // 初始化统计数字动画
    initStatsAnimation();
}

// 筛选功能
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除其他按钮的active类
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // 为当前按钮添加active类
            this.classList.add('active');
            
            // 获取筛选类型
            const filterType = this.getAttribute('data-filter');
            
            // 执行筛选
            filterPublications(filterType);
        });
    });
}

// 根据筛选类型过滤论文
function filterPublications(filterType) {
    const publicationItems = document.querySelectorAll('.publication-item');
    
    publicationItems.forEach(item => {
        // 如果选择"全部"或项目匹配筛选类型，则显示
        if (filterType === 'all' || item.getAttribute('data-category') === filterType) {
            item.style.display = 'block';
            
            // 添加淡入动画
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 50);
        } else {
            // 隐藏不匹配的项目
            item.style.opacity = '0';
            item.style.transform = 'translateY(10px)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// 搜索功能
function initSearch() {
    const searchInput = document.querySelector('.search-box input');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            
            // 如果搜索词为空，显示所有项目
            if (searchTerm === '') {
                document.querySelectorAll('.publication-item').forEach(item => {
                    item.style.display = 'block';
                });
                return;
            }
            
            // 搜索论文标题和摘要
            document.querySelectorAll('.publication-item').forEach(item => {
                const title = item.querySelector('h4').textContent.toLowerCase();
                const abstract = item.querySelector('.publication-abstract').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || abstract.includes(searchTerm)) {
                    item.style.display = 'block';
                    
                    // 高亮搜索词
                    highlightText(item, searchTerm);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
}

// 高亮搜索词
function highlightText(element, searchTerm) {
    // 移除之前的高亮
    const highlightedElements = element.querySelectorAll('.highlight');
    highlightedElements.forEach(el => {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
        parent.normalize();
    });
    
    // 高亮匹配的文本
    if (searchTerm.length > 0) {
        highlightTextInNode(element, searchTerm);
    }
}

// 在节点中高亮文本
function highlightTextInNode(node, searchTerm) {
    if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        const newText = text.replace(regex, '<mark class="highlight">$1</mark>');
        
        if (newText !== text) {
            const newElement = document.createElement('span');
            newElement.innerHTML = newText;
            node.parentNode.replaceChild(newElement, node);
        }
    } else if (node.nodeType === Node.ELEMENT_NODE && node.childNodes) {
        node.childNodes.forEach(child => {
            highlightTextInNode(child, searchTerm);
        });
    }
}

// 排序功能
function initSorting() {
    const sortSelect = document.querySelector('.sort-select');
    
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortType = this.value;
            sortPublications(sortType);
        });
    }
}

// 根据排序类型排序论文
function sortPublications(sortType) {
    const publicationList = document.querySelector('.publication-list');
    const publicationItems = Array.from(document.querySelectorAll('.publication-item'));
    
    // 根据排序类型排序
    publicationItems.sort((a, b) => {
        if (sortType === 'date-desc') {
            // 按日期降序（最新在前）
            const dateA = a.getAttribute('data-date');
            const dateB = b.getAttribute('data-date');
            return new Date(dateB) - new Date(dateA);
        } else if (sortType === 'date-asc') {
            // 按日期升序（最旧在前）
            const dateA = a.getAttribute('data-date');
            const dateB = b.getAttribute('data-date');
            return new Date(dateA) - new Date(dateB);
        } else if (sortType === 'title') {
            // 按标题字母顺序
            const titleA = a.querySelector('h4').textContent.toLowerCase();
            const titleB = b.querySelector('h4').textContent.toLowerCase();
            return titleA.localeCompare(titleB);
        }
        
        return 0;
    });
    
    // 清空列表
    publicationList.innerHTML = '';
    
    // 添加排序后的项目
    publicationItems.forEach(item => {
        publicationList.appendChild(item);
    });
}

// 加载更多功能
function initLoadMore() {
    const loadMoreBtn = document.querySelector('.load-more-btn');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // 模拟加载更多数据
            simulateLoadMore();
            
            // 禁用按钮并显示加载状态
            this.disabled = true;
            this.textContent = '加载中...';
            
            // 3秒后恢复按钮
            setTimeout(() => {
                this.disabled = false;
                this.textContent = '加载更多';
            }, 3000);
        });
    }
}

// 模拟加载更多数据
function simulateLoadMore() {
    // 在实际应用中，这里应该从服务器获取更多数据
    // 这里只是模拟效果
    
    const publicationList = document.querySelector('.publication-list');
    const currentItems = document.querySelectorAll('.publication-item').length;
    
    // 创建新的论文项目
    for (let i = 0; i < 3; i++) {
        const newItem = document.createElement('div');
        newItem.className = 'publication-item';
        newItem.setAttribute('data-category', 'conference');
        newItem.setAttribute('data-date', '2024-0' + (i + 1) + '-01');
        
        newItem.innerHTML = `
            <h4>新增论文标题 ${currentItems + i + 1}: 计算机视觉领域的新方法</h4>
            <div class="publication-meta">
                <p><strong>CVPR 2024</strong></p>
                <p>作者: 张教授, 李研究员, 王博士</p>
            </div>
            <div class="publication-abstract">
                这是通过"加载更多"功能添加的新论文摘要。在实际应用中，这些数据应该从服务器动态获取。
            </div>
            <div class="publication-links">
                <a href="#" class="cta-button small">PDF</a>
                <a href="#" class="cta-button small secondary">代码</a>
            </div>
        `;
        
        // 添加淡入动画
        newItem.style.opacity = '0';
        newItem.style.transform = 'translateY(20px)';
        
        publicationList.appendChild(newItem);
        
        // 触发动画
        setTimeout(() => {
            newItem.style.opacity = '1';
            newItem.style.transform = 'translateY(0)';
            newItem.style.transition = 'all 0.5s ease';
        }, 100 * i);
    }
}

// 统计数字动画
function initStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    // 检查元素是否在视口中
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // 动画数字
    function animateNumber(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16); // 16ms per frame approx
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, 16);
    }
    
    // 检查并触发动画
    function checkStatsAnimation() {
        statNumbers.forEach(stat => {
            if (isElementInViewport(stat) && !stat.classList.contains('animated')) {
                const target = parseInt(stat.getAttribute('data-target'));
                animateNumber(stat, target);
                stat.classList.add('animated');
            }
        });
    }
    
    // 初始检查和滚动监听
    checkStatsAnimation();
    window.addEventListener('scroll', checkStatsAnimation);
}

// 导出函数供其他脚本使用（如果需要）
window.publicationModule = {
    initPublicationPage,
    filterPublications,
    sortPublications
};