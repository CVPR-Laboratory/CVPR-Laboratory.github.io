// 新闻页面专用JavaScript功能

// 新闻数据
const newsData = [
  {
    id: 1,
    year: 2025,
    day: 15,
    month: '03月',
    title: '实验室最新论文被CVPR 2025接收',
    category: 'research',
    author: '张教授',
    summary: '我们关于深度学习的论文《RegFormer: Real-time Registration Transformer for Large-scale LiDAR Scenes》被CVPR 2025接收。该论文提出了一种新的实时配准变换器，在大规模LiDAR场景中表现出色。',
    image: 'assets/img/news/news_01.jpg',
    links: [
      { label: '论文PDF', icon: 'fas fa-file-pdf', href: '#' },
      { label: '代码仓库', icon: 'fab fa-github', href: '#' },
      { label: '项目主页', icon: 'fas fa-external-link-alt', href: '#' }
    ]
  },
  {
    id: 2,
    year: 2025,
    day: 28,
    month: '02月',
    title: '张教授荣获国家自然科学二等奖',
    category: 'award',
    author: '实验室办公室',
    summary: '实验室主任张教授因其在计算机视觉领域的突出贡献，荣获2025年度国家自然科学二等奖。这是对张教授多年来在深度学习与计算机视觉交叉领域研究的肯定。',
    image: 'assets/img/news/news_02.jpg',
    links: [
      { label: '获奖详情', icon: 'fas fa-trophy', href: '#' }
    ]
  },
  {
    id: 3,
    year: 2025,
    day: 10,
    month: '01月',
    title: '成功举办2025年度学术研讨会',
    category: 'event',
    author: '学术委员会',
    summary: '实验室成功举办了2025年度学术研讨会，邀请了来自斯坦福大学、MIT、清华大学等国内外知名高校的专家学者进行学术交流。会议涵盖了计算机视觉、深度学习、医学影像分析等多个前沿领域。',
    image: 'assets/img/news/news_03.jpg',
    links: [
      { label: '活动照片', icon: 'fas fa-images', href: '#' },
      { label: '演讲幻灯片', icon: 'fas fa-file-powerpoint', href: '#' },
      { label: '会议日程', icon: 'fas fa-calendar-alt', href: '#' }
    ]
  },
  {
    id: 4,
    year: 2024,
    day: 15,
    month: '12月',
    title: '欢迎新成员加入实验室',
    category: 'team',
    author: '人力资源部',
    summary: '热烈欢迎三位新研究生加入我们的研究团队：李明（博士研究生）、王静（硕士研究生）、张伟（硕士研究生）。他们将分别从事计算机视觉、深度学习和医学影像分析方向的研究。',
    image: 'assets/img/news/news_04.jpg',
    links: [
      { label: '团队介绍', icon: 'fas fa-users', href: 'team.html' }
    ]
  },
  {
    id: 5,
    year: 2024,
    day: 30,
    month: '10月',
    title: 'Med-SAM 3D论文在Nature Medicine发表',
    category: 'research',
    author: '李副教授',
    summary: '实验室在医学影像分析领域取得重大突破，论文《Med-SAM 3D: Segment Anything in 3D Medical Images》在Nature Medicine上发表。这项工作为3D医学图像分割提供了新的解决方案。',
    image: 'assets/img/news/news_05.jpg',
    links: [
      { label: '论文链接', icon: 'fas fa-file-pdf', href: '#' },
      { label: '数据集下载', icon: 'fas fa-database', href: '#' },
      { label: '在线演示', icon: 'fas fa-play-circle', href: '#' }
    ]
  },
  {
    id: 6,
    year: 2024,
    day: 18,
    month: '09月',
    title: '实验室与华为达成战略合作',
    category: 'event',
    author: '合作发展部',
    summary: '实验室与华为技术有限公司达成战略合作，双方将在计算机视觉、人工智能等领域开展深度合作，共同推动技术创新和产业应用。',
    image: 'assets/img/news/news_06.jpg',
    links: [
      { label: '合作详情', icon: 'fas fa-handshake', href: 'collaboration.html' }
    ]
  },
  {
    id: 7,
    year: 2024,
    day: 5,
    month: '07月',
    title: '实验室研究成果荣获最佳论文奖',
    category: 'award',
    author: '学术委员会',
    summary: '在ICCV 2024会议上，实验室的研究成果《Efficient Vision Transformer for Real-time Applications》荣获最佳论文奖，这是对实验室在视觉Transformer领域研究的认可。',
    image: 'assets/img/news/news_07.jpg',
    links: [
      { label: '论文详情', icon: 'fas fa-file-pdf', href: '#' },
      { label: '奖项介绍', icon: 'fas fa-award', href: '#' }
    ]
  },
  {
    id: 8,
    year: 2024,
    day: 22,
    month: '05月',
    title: '实验室举办开放日活动',
    category: 'event',
    author: '公共关系部',
    summary: '实验室成功举办年度开放日活动，吸引了来自全国各地的学生和研究人员参观交流。活动展示了实验室最新的研究成果和技术应用。',
    image: 'assets/img/news/news_08jpg',
    links: [
      { label: '活动回顾', icon: 'fas fa-images', href: '#' },
      { label: '媒体报道', icon: 'fas fa-newspaper', href: '#' }
    ]
  }
];

// 分页设置
let currentPage = 1;
const itemsPerPage = 6;
let currentFilter = 'all';
let currentSort = 'newest';

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
  renderNews();
  setupEventListeners();
});

// 设置事件监听器
function setupEventListeners() {
  // 筛选按钮事件
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      currentPage = 1;
      renderNews();
    });
  });

  // 排序选择事件
  document.querySelector('.sort-select').addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderNews();
  });

  // 分页按钮事件
  document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderNews();
    }
  });

  document.getElementById('next-page').addEventListener('click', () => {
    const totalPages = Math.ceil(getFilteredNews().length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderNews();
    }
  });
}

// 获取筛选后的新闻
function getFilteredNews() {
  let filtered = [...newsData];
  
  // 应用筛选
  if (currentFilter !== 'all') {
    filtered = filtered.filter(item => item.category === currentFilter);
  }
  
  // 应用排序
  filtered.sort((a, b) => {
    if (currentSort === 'newest') {
      return new Date(`${b.year}-${b.month.replace('月', '')}-${b.day}`) - 
             new Date(`${a.year}-${a.month.replace('月', '')}-${a.day}`);
    } else {
      return new Date(`${a.year}-${a.month.replace('月', '')}-${a.day}`) - 
             new Date(`${b.year}-${b.month.replace('月', '')}-${b.day}`);
    }
  });
  
  return filtered;
}

// 渲染新闻
function renderNews() {
  const container = document.getElementById('news-grid');
  const pagination = document.querySelector('.pagination-pages');
  const prevBtn = document.getElementById('prev-page');
  const nextBtn = document.getElementById('next-page');
  
  // 获取筛选和排序后的新闻
  const filteredNews = getFilteredNews();
  
  // 计算分页
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNews = filteredNews.slice(startIndex, startIndex + itemsPerPage);
  
  // 清空容器
  container.innerHTML = '';
  
  // 渲染新闻卡片
  paginatedNews.forEach(item => {
    const card = createNewsCard(item);
    container.appendChild(card);
  });
  
  // 更新分页
  updatePagination(pagination, totalPages);
  
  // 更新分页按钮状态
  prevBtn.classList.toggle('disabled', currentPage === 1);
  nextBtn.classList.toggle('disabled', currentPage === totalPages);
  
  // 如果没有新闻，显示提示信息
  if (filteredNews.length === 0) {
    container.innerHTML = `
      <div class="no-news" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
        <i class="fas fa-newspaper" style="font-size: 4rem; color: #ccc; margin-bottom: 1rem;"></i>
        <h3>暂无相关新闻</h3>
        <p>请尝试选择其他筛选条件</p>
      </div>
    `;
  }
}

// 创建新闻卡片
function createNewsCard(item) {
  const card = document.createElement('div');
  card.className = 'news-card';
  
  card.innerHTML = `
    <div class="news-image">
      <img src="${item.image || 'assets/img/news/news_09.jpg'}" alt="${item.title}" onerror="this.src='assets/img/news/news_09.jpg'">
    </div>
    <div class="news-content">
      <div class="news-meta">
        <div class="news-date">
          <i class="far fa-calendar-alt"></i>
          <span>${item.year}年${item.month}${item.day}日</span>
        </div>
        <span class="category ${item.category}">${getCategoryText(item.category)}</span>
      </div>
      <h3 class="news-title">${item.title}</h3>
      <p class="news-summary">${item.summary}</p>
      <div class="news-footer">
        <div class="news-author">${item.author}</div>
        <div class="news-links">
          ${item.links ? item.links.map(link => `
            <a href="${link.href}" class="news-link" target="_blank">
              <i class="${link.icon}"></i>
              <span>${link.label}</span>
            </a>
          `).join('') : ''}
        </div>
      </div>
    </div>
  `;
  
  return card;
}

// 获取分类文本
function getCategoryText(category) {
  const categoryMap = {
    research: '科研进展',
    award: '获奖荣誉',
    event: '学术活动',
    team: '团队动态'
  };
  return categoryMap[category] || category;
}

// 更新分页
function updatePagination(pagination, totalPages) {
  pagination.innerHTML = '';
  
  // 显示最多5个页码
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + 4);
  
  // 调整起始页，确保显示5个页码
  if (endPage - startPage < 4) {
    startPage = Math.max(1, endPage - 4);
  }
  
  // 添加页码
  for (let i = startPage; i <= endPage; i++) {
    const page = document.createElement('div');
    page.className = `page-number ${i === currentPage ? 'active' : ''}`;
    page.textContent = i;
    page.addEventListener('click', () => {
      currentPage = i;
      renderNews();
    });
    pagination.appendChild(page);
  }
}