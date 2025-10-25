---
layout: default
title: 新闻动态
permalink: /news/
---

<section class="page-header">
  <div class="container">
    <h1 data-zh="新闻动态" data-en="News">新闻动态</h1>
    <p data-zh="关注实验室的最新进展和活动信息" data-en="Stay updated with our latest progress and events">关注实验室的最新进展和活动信息</p>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="news-filters">
      <button class="filter-btn active" data-filter="all" data-zh="全部" data-en="All">全部</button>
      <button class="filter-btn" data-filter="research" data-zh="科研进展" data-en="Research">科研进展</button>
      <button class="filter-btn" data-filter="award" data-zh="获奖荣誉" data-en="Awards">获奖荣誉</button>
      <button class="filter-btn" data-filter="event" data-zh="学术活动" data-en="Events">学术活动</button>
      <button class="filter-btn" data-filter="team" data-zh="团队动态" data-en="Team">团队动态</button>
    </div>
    <div class="news-timeline" id="news-timeline"></div>
    <div class="news-archive">
      <h3 data-zh="历史档案" data-en="Archives">历史档案</h3>
      <div class="archive-years">
        <a href="#" class="archive-year" data-zh="2023年" data-en="2023">2023年</a>
        <a href="#" class="archive-year" data-zh="2022年" data-en="2022">2022年</a>
        <a href="#" class="archive-year" data-zh="2021年" data-en="2021">2021年</a>
        <a href="#" class="archive-year" data-zh="2020年" data-en="2020">2020年</a>
        <a href="#" class="archive-year" data-zh="更早" data-en="Earlier">更早</a>
      </div>
    </div>
  </div>
</section>


<style>
:root {
  --primary-color: #003366;
  --secondary-color: #0099cc;
  --white: #fff;
  --medium-gray: #ccc;
  --dark-gray: #666;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
}
.news-filters { text-align: center; margin-bottom: 3rem; }
.filter-btn {
  background: var(--white);
  border: 2px solid var(--medium-gray);
  padding: 0.5rem 1.5rem;
  margin: 0.25rem;
  border-radius: 25px;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 500;
}
.filter-btn.active, .filter-btn:hover {
  background: var(--secondary-color);
  color: var(--white);
  border-color: var(--secondary-color);
}
.news-timeline { max-width: 800px; margin: 0 auto; }
.timeline-year { margin-bottom: 3rem; }
.timeline-year h2 {
  color: var(--primary-color);
  border-bottom: 3px solid var(--secondary-color);
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.news-item {
  display: flex;
  margin-bottom: 2rem;
  background: var(--white);
  border-radius: 8px;
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: var(--transition);
}
.news-item:hover { transform: translateY(-3px); box-shadow: 0 5px 20px rgba(0,0,0,0.15); }
.news-date {
  background: var(--secondary-color);
  color: var(--white);
  padding: 1.5rem;
  min-width: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.date-day { font-size: 2rem; font-weight: bold; }
.date-month { font-size: 1rem; margin-top: 0.25rem; }
.news-content { padding: 1.5rem; flex: 1; }
.news-meta { display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.9rem; color: var(--dark-gray); }
.category {
  padding: 0.2rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.category.research { background: #e3f2fd; color: #1976d2; }
.category.award { background: #f3e5f5; color: #7b1fa2; }
.category.event { background: #e8f5e8; color: #388e3c; }
.category.team { background: #fff3e0; color: #f57c00; }
.news-links { margin-top: 1rem; display: flex; gap: 1rem; flex-wrap: wrap; }
.news-link { color: var(--secondary-color); text-decoration: none; font-size: 0.9rem; }
.news-link:hover { color: var(--primary-color); }
.news-images img { max-width: 100%; border-radius: 8px; margin-top: 1rem; }
.news-archive { text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--medium-gray); }
.archive-years { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-top: 1rem; }
.archive-year {
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  border: 2px solid var(--medium-gray);
  text-decoration: none;
  color: inherit;
  transition: var(--transition);
}
.archive-year:hover { border-color: var(--secondary-color); color: var(--secondary-color); }
@media (max-width: 768px) {
  .news-item { flex-direction: column; }
  .news-date { flex-direction: row; gap: 0.5rem; min-width: auto; }
  .filter-btn { padding: 0.4rem 1rem; font-size: 0.9rem; }
}
</style>

<script>
const newsData = [
  {
    year: 2025, day: 15, month: '03月', title: '实验室最新论文被CVPR 2025接收', category: 'research', author: '张教授',
    summary: '我们关于深度学习的论文《RegFormer: Real-time Registration Transformer for Large-scale LiDAR Scenes》被CVPR 2025接收。',
    links: [{ label: '论文PDF', icon: 'fas fa-file-pdf', href: '#' }, { label: '代码仓库', icon: 'fab fa-github', href: '#' }]
  },
  {
    year: 2025, day: 28, month: '02月', title: '张教授荣获国家自然科学二等奖', category: 'award', author: '实验室办公室',
    summary: '实验室主任张教授因其在计算机视觉领域的突出贡献，荣获2025年度国家自然科学二等奖。',
    image: '/assets/img/b3.jpg'
  },
  {
    year: 2025, day: 10, month: '01月', title: '成功举办2025年度学术研讨会', category: 'event', author: '学术委员会',
    summary: '实验室成功举办了2025年度学术研讨会，邀请了来自斯坦福大学、MIT、清华大学等国内外知名高校的专家学者进行学术交流。',
    links: [{ label: '活动照片', icon: 'fas fa-images', href: '#' }, { label: '演讲幻灯片', icon: 'fas fa-file-powerpoint', href: '#' }]
  },
  {
    year: 2024, day: 15, month: '12月', title: '欢迎新成员加入实验室', category: 'team', author: '人力资源部',
    summary: '热烈欢迎三位新研究生加入我们的研究团队：李明（博士研究生）、王静（硕士研究生）、张伟（硕士研究生）。'
  },
  {
    year: 2024, day: 30, month: '10月', title: 'Med-SAM 3D论文在Nature Medicine发表', category: 'research', author: '李副教授',
    summary: '实验室在医学影像分析领域取得重大突破，论文《Med-SAM 3D: Segment Anything in 3D Medical Images》在Nature Medicine上发表。',
    links: [{ label: '论文链接', icon: 'fas fa-file-pdf', href: '#' }, { label: '数据集下载', icon: 'fas fa-database', href: '#' }]
  }
];

function renderNews(filter = 'all') {
  const container = document.getElementById('news-timeline');
  container.innerHTML = '';
  const grouped = {};
  newsData.forEach(item => {
    if (filter !== 'all' && item.category !== filter) return;
    if (!grouped[item.year]) grouped[item.year] = [];
    grouped[item.year].push(item);
  });
  Object.entries(grouped).forEach(([year, items]) => {
    const section = document.createElement('div');
    section.className = 'timeline-year';
    section.innerHTML = `<h2>${year}年</h2>`;
    items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'news-item';
      div.setAttribute('data-category', item.category);
      div.innerHTML = `
        <div class="news-date">
          <span class="date-day">${item.day}</span>
          <span class="date-month">${item.month}</span>
        </div>
        <div class="news-content">
          <h3>${item.title}</h3>
          <div class="news-meta">
            <span class="category ${item.category}">${({research:'科研进展',award:'获奖荣誉',event:'学术活动',team:'团队动态'}[item.category])}</span>
            <span class="author">作者: ${item.author}</span>
          </div>
          <p>${item.summary}</p>
          ${item.image ? `<div class="news-images"><img src="${item.image}" alt="新闻图片" /></div>` : ''}
          ${item.links ? `<div class="news-links">${item.links.map(l=>`<a href="${l.href}" class="news-link"><i class="${l.icon}"></i> ${l.label}</a>`).join('')}</div>` : ''}
        </div>
      `;
      section.appendChild(div);
    });
    container.appendChild(section);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderNews();
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderNews(btn.dataset.filter);
    });
  });
});
</script>
