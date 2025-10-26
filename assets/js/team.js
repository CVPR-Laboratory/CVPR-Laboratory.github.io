// team.js - 团队页面交互功能

document.addEventListener('DOMContentLoaded', function() {
    // 团队成员数据
    const teamMembers = {
        faculty: [
            {
                id: 1,
                name: '张教授',
                nameEn: 'Prof. Zhang',
                title: '实验室主任、博士生导师',
                titleEn: 'Lab Director & Ph.D. Supervisor',
                research: '计算机视觉、深度学习、图像处理',
                researchEn: 'Computer Vision, Deep Learning, Image Processing',
                email: 'prof.zhang@cvpr-lab.edu',
                image: 'assets/img/b1.jpg',
                bio: '张教授是CVPR实验室的创始人，在计算机视觉领域有超过15年的研究经验。他在顶级期刊和会议上发表了80多篇论文，并担任多个国际期刊的编委。主持国家自然科学基金重点项目3项，获得省部级科技进步奖2项。',
                bioEn: 'Prof. Zhang is the founder of CVPR Laboratory with over 15 years of research experience in computer vision. He has published more than 80 papers in top-tier journals and conferences, and serves as an editorial board member for several international journals. He has led 3 key projects of the National Natural Science Foundation of China and won 2 provincial and ministerial science and technology progress awards.',
                education: '2005年 清华大学 计算机科学与技术 博士\n2002年 北京大学 计算机科学与技术 硕士\n1999年 南京大学 计算机科学与技术 学士',
                educationEn: '2005 Ph.D. in Computer Science and Technology, Tsinghua University\n2002 M.S. in Computer Science and Technology, Peking University\n1999 B.S. in Computer Science and Technology, Nanjing University',
                researchInterests: [
                    '深度学习模型优化',
                    '图像语义分割',
                    '目标检测与跟踪',
                    '三维视觉重建'
                ],
                researchInterestsEn: [
                    'Deep Learning Model Optimization',
                    'Image Semantic Segmentation',
                    'Object Detection and Tracking',
                    '3D Visual Reconstruction'
                ],
                publications: [
                    {
                        title: '基于深度学习的多尺度目标检测算法研究',
                        titleEn: 'Research on Multi-scale Object Detection Algorithm Based on Deep Learning',
                        authors: '张教授, 李研究员, 王明',
                        authorsEn: 'Prof. Zhang, Researcher Li, Wang Ming',
                        venue: '计算机学报, 2023'
                    },
                    {
                        title: '面向复杂场景的图像语义分割方法',
                        titleEn: 'Image Semantic Segmentation Method for Complex Scenes',
                        authors: '张教授, 刘芳',
                        authorsEn: 'Prof. Zhang, Liu Fang',
                        venue: 'CVPR 2022'
                    }
                ],
                links: [
                    { icon: 'fas fa-graduation-cap', url: '#', label: '个人主页' },
                    { icon: 'fas fa-envelope', url: 'mailto:prof.zhang@cvpr-lab.edu', label: '发送邮件' },
                    { icon: 'fab fa-google-scholar', url: '#', label: 'Google Scholar' }
                ]
            },
            {
                id: 2,
                name: '李教授',
                nameEn: 'Prof. Li',
                title: '副教授、硕士生导师',
                titleEn: 'Associate Professor & Master Supervisor',
                research: '图像处理、模式识别、机器学习',
                researchEn: 'Image Processing, Pattern Recognition, Machine Learning',
                email: 'prof.li@cvpr-lab.edu',
                image: 'assets/img/b2.jpg',
                bio: '李教授专注于图像处理与模式识别研究，主持多项国家级科研项目，在相关领域取得了重要研究成果。在国际知名期刊发表论文40余篇，获得国家发明专利5项。',
                bioEn: 'Prof. Li focuses on image processing and pattern recognition research, leading several national-level research projects and achieving significant research results in related fields. He has published more than 40 papers in internationally renowned journals and obtained 5 national invention patents.',
                education: '2008年 上海交通大学 计算机应用技术 博士\n2005年 浙江大学 计算机科学与技术 硕士\n2002年 武汉大学 计算机科学与技术 学士',
                educationEn: '2008 Ph.D. in Computer Application Technology, Shanghai Jiao Tong University\n2005 M.S. in Computer Science and Technology, Zhejiang University\n2002 B.S. in Computer Science and Technology, Wuhan University',
                researchInterests: [
                    '图像增强与去噪',
                    '特征提取与选择',
                    '模式分类算法',
                    '医学图像分析'
                ],
                researchInterestsEn: [
                    'Image Enhancement and Denoising',
                    'Feature Extraction and Selection',
                    'Pattern Classification Algorithms',
                    'Medical Image Analysis'
                ],
                publications: [
                    {
                        title: '基于深度特征学习的图像分类方法',
                        titleEn: 'Image Classification Method Based on Deep Feature Learning',
                        authors: '李教授, 陈华, 赵强',
                        authorsEn: 'Prof. Li, Chen Hua, Zhao Qiang',
                        venue: '自动化学报, 2023'
                    }
                ],
                links: [
                    { icon: 'fas fa-graduation-cap', url: '#', label: '个人主页' },
                    { icon: 'fas fa-envelope', url: 'mailto:prof.li@cvpr-lab.edu', label: '发送邮件' }
                ]
            }
        ],
        master: [
            {
                id: 3,
                name: '陈华',
                nameEn: 'Chen Hua',
                title: '硕士研究生',
                titleEn: 'Master Student',
                research: '图像分类、迁移学习、小样本学习',
                researchEn: 'Image Classification, Transfer Learning, Few-shot Learning',
                email: 'chen.hua@cvpr-lab.edu',
                image: 'assets/img/b3.jpg',
                bio: '陈华硕士研究生研究图像分类与迁移学习，致力于提高模型在小样本场景下的性能。已在国际会议发表论文2篇，参与国家自然科学基金项目1项。',
                bioEn: 'Chen Hua researches image classification and transfer learning, focusing on improving model performance in few-shot scenarios. He has published 2 papers in international conferences and participated in 1 National Natural Science Foundation project.',
                education: '2021年 曲阜师范大学 计算机科学与技术 学士',
                educationEn: '2021 B.S. in Computer Science and Technology, Qufu Normal University',
                researchInterests: [
                    '小样本图像分类',
                    '跨域迁移学习',
                    '元学习算法',
                    '数据增强技术'
                ],
                researchInterestsEn: [
                    'Few-shot Image Classification',
                    'Cross-domain Transfer Learning',
                    'Meta-learning Algorithms',
                    'Data Augmentation Techniques'
                ],
                publications: [
                    {
                        title: '基于元学习的小样本图像分类方法',
                        titleEn: 'Few-shot Image Classification Method Based on Meta-learning',
                        authors: '陈华, 李教授',
                        authorsEn: 'Chen Hua, Prof. Li',
                        venue: 'ICIP 2023'
                    }
                ],
                links: [
                    { icon: 'fas fa-envelope', url: 'mailto:chen.hua@cvpr-lab.edu', label: '发送邮件' },
                    { icon: 'fab fa-github', url: '#', label: 'GitHub' }
                ]
            },
            {
                id: 4,
                name: '赵强',
                nameEn: 'Zhao Qiang',
                title: '硕士研究生',
                titleEn: 'Master Student',
                research: '三维重建、点云处理、自动驾驶',
                researchEn: '3D Reconstruction, Point Cloud Processing, Autonomous Driving',
                email: 'zhao.qiang@cvpr-lab.edu',
                image: 'assets/img/b8.jpg',
                bio: '赵强硕士研究生专注于三维重建与点云处理技术，探索其在自动驾驶等领域的应用。已发表国际会议论文1篇，申请发明专利1项。',
                bioEn: 'Zhao Qiang focuses on 3D reconstruction and point cloud processing technologies, exploring their applications in fields such as autonomous driving. He has published 1 paper in an international conference and applied for 1 invention patent.',
                education: '2021年 山东大学 计算机科学与技术 学士',
                educationEn: '2021 B.S. in Computer Science and Technology, Shandong University',
                researchInterests: [
                    '点云语义分割',
                    '三维目标检测',
                    'SLAM技术',
                    '自动驾驶感知'
                ],
                researchInterestsEn: [
                    'Point Cloud Semantic Segmentation',
                    '3D Object Detection',
                    'SLAM Technology',
                    'Autonomous Driving Perception'
                ],
                publications: [],
                links: [
                    { icon: 'fas fa-envelope', url: 'mailto:zhao.qiang@cvpr-lab.edu', label: '发送邮件' },
                    { icon: 'fab fa-github', url: '#', label: 'GitHub' }
                ]
            }
        ],
        alumni: [
            {
                id: 5,
                name: '吴伟',
                nameEn: 'Wu Wei',
                title: '博士毕业生',
                titleEn: 'PhD Graduate',
                research: '计算机视觉、机器学习、目标检测',
                researchEn: 'Computer Vision, Machine Learning, Object Detection',
                email: 'wu.wei@alumni.cvpr-lab.edu',
                image: 'assets/img/b5.jpg',
                bio: '吴伟博士毕业后加入某知名科技公司，担任高级研究员，继续从事计算机视觉相关研究。在学期间发表高水平论文10余篇，获得国家奖学金2次。',
                bioEn: 'After graduating with a PhD, Wu Wei joined a well-known technology company as a senior researcher, continuing to work on computer vision-related research. During his studies, he published more than 10 high-level papers and won the National Scholarship twice.',
                education: '2022年 曲阜师范大学 计算机科学与技术 博士\n2017年 曲阜师范大学 计算机科学与技术 硕士\n2014年 曲阜师范大学 计算机科学与技术 学士',
                educationEn: '2022 Ph.D. in Computer Science and Technology, Qufu Normal University\n2017 M.S. in Computer Science and Technology, Qufu Normal University\n2014 B.S. in Computer Science and Technology, Qufu Normal University',
                researchInterests: [
                    '实时目标检测',
                    '模型轻量化',
                    '边缘计算',
                    '工业视觉检测'
                ],
                researchInterestsEn: [
                    'Real-time Object Detection',
                    'Model Lightweight',
                    'Edge Computing',
                    'Industrial Visual Inspection'
                ],
                publications: [
                    {
                        title: '高效实时目标检测算法在移动端的应用',
                        titleEn: 'Application of Efficient Real-time Object Detection Algorithm on Mobile Devices',
                        authors: '吴伟, 张教授',
                        authorsEn: 'Wu Wei, Prof. Zhang',
                        venue: 'IEEE Transactions on Image Processing, 2022'
                    }
                ],
                links: [
                    { icon: 'fas fa-envelope', url: 'mailto:wu.wei@alumni.cvpr-lab.edu', label: '发送邮件' },
                    { icon: 'fab fa-linkedin', url: '#', label: 'LinkedIn' }
                ]
            }
        ]
    };

    // 初始化页面
    initTeamPage();

    // 初始化团队页面
    function initTeamPage() {
        // 渲染团队成员
        renderTeamMembers();
        
        // 设置搜索功能
        setupSearch();
        
        // 设置过滤功能
        setupFilter();
        
        // 设置模态框
        setupModal();
        
        // 设置语言切换监听
        setupLanguageListener();
    }

    // 渲染团队成员
    function renderTeamMembers() {
        const sections = ['faculty', 'master', 'alumni'];
        
        sections.forEach(section => {
            const container = document.getElementById(`${section}-section`).querySelector('.team-grid');
            container.innerHTML = '';
            
            teamMembers[section].forEach(member => {
                const memberElement = createMemberCard(member);
                container.appendChild(memberElement);
            });
        });
    }

    // 创建成员卡片
    function createMemberCard(member) {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'team-member';
        memberDiv.setAttribute('data-category', getMemberCategory(member.id));
        memberDiv.setAttribute('data-name', member.name.toLowerCase());
        memberDiv.setAttribute('data-name-en', member.nameEn.toLowerCase());
        
        const isChinese = document.documentElement.lang === 'zh';
        
        let imageHTML = '';
        if (member.image) {
            imageHTML = `<img src="${member.image}" alt="${isChinese ? member.name : member.nameEn}">`;
        } else {
            imageHTML = `
                <div class="placeholder-icon">
                    <i class="fas fa-user" style="font-size: 48px;"></i>
                </div>
            `;
        }
        
        memberDiv.innerHTML = `
            <div class="member-image">
                ${imageHTML}
            </div>
            <div class="member-info">
                <h3 data-zh="${member.name}" data-en="${member.nameEn}">${isChinese ? member.name : member.nameEn}</h3>
                <p class="member-title" data-zh="${member.title}" data-en="${member.titleEn}">${isChinese ? member.title : member.titleEn}</p>
                <p class="member-research" data-zh="${member.research}" data-en="${member.researchEn}">${isChinese ? member.research : member.researchEn}</p>
                <p class="member-email">${member.email}</p>
                <div class="member-links">
                    ${member.links.map(link => `
                        <a href="${link.url}" class="member-link" title="${link.label}">
                            <i class="${link.icon}"></i>
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
        
        // 添加点击事件打开模态框
        memberDiv.addEventListener('click', () => {
            openMemberModal(member);
        });
        
        return memberDiv;
    }

    // 获取成员类别
    function getMemberCategory(id) {
        for (const category in teamMembers) {
            if (teamMembers[category].some(member => member.id === id)) {
                return category;
            }
        }
        return 'other';
    }

    // 设置搜索功能
    function setupSearch() {
        const searchInput = document.getElementById('member-search');
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            filterMembers(searchTerm);
        });
        
        // 设置占位符文本
        updateSearchPlaceholder();
    }

    // 更新搜索框占位符
    function updateSearchPlaceholder() {
        const searchInput = document.getElementById('member-search');
        const isChinese = document.documentElement.lang === 'zh';
        searchInput.placeholder = isChinese ? 
            searchInput.getAttribute('data-zh-placeholder') : 
            searchInput.getAttribute('data-en-placeholder');
    }

    // 过滤成员
    function filterMembers(searchTerm) {
        const members = document.querySelectorAll('.team-member');
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        
        members.forEach(member => {
            const name = member.getAttribute('data-name');
            const nameEn = member.getAttribute('data-name-en');
            const category = member.getAttribute('data-category');
            
            const nameMatch = name.includes(searchTerm) || nameEn.includes(searchTerm);
            const categoryMatch = activeFilter === 'all' || category === activeFilter;
            
            if (nameMatch && categoryMatch) {
                member.style.display = 'block';
            } else {
                member.style.display = 'none';
            }
        });
    }

    // 设置过滤功能
    function setupFilter() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有按钮的active类
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // 为当前按钮添加active类
                this.classList.add('active');
                
                // 应用过滤
                const filter = this.getAttribute('data-filter');
                applyFilter(filter);
                
                // 同时应用当前搜索词
                const searchTerm = document.getElementById('member-search').value.toLowerCase().trim();
                filterMembers(searchTerm);
            });
        });
    }

    // 应用过滤
    function applyFilter(filter) {
        const sections = document.querySelectorAll('.team-section');
        
        if (filter === 'all') {
            sections.forEach(section => {
                section.style.display = 'block';
            });
        } else {
            sections.forEach(section => {
                if (section.id === `${filter}-section`) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        }
    }

    // 设置模态框
    function setupModal() {
        const modal = document.getElementById('member-modal');
        const closeBtn = document.querySelector('.close-modal');
        
        // 点击关闭按钮关闭模态框
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        // 点击模态框外部关闭
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // ESC键关闭模态框
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
    }

    // 打开成员详情模态框
    function openMemberModal(member) {
        const modal = document.getElementById('member-modal');
        const modalBody = document.querySelector('.modal-body');
        const isChinese = document.documentElement.lang === 'zh';
        
        let imageHTML = '';
        if (member.image) {
            imageHTML = `<img src="${member.image}" alt="${isChinese ? member.name : member.nameEn}">`;
        } else {
            imageHTML = `
                <div class="placeholder-icon">
                    <i class="fas fa-user" style="font-size: 72px;"></i>
                </div>
            `;
        }
        
        // 生成研究方向列表
        const researchList = isChinese ? member.researchInterests : member.researchInterestsEn;
        const researchListHTML = researchList.map(item => `
            <li><i class="fas fa-chevron-right"></i> ${item}</li>
        `).join('');
        
        // 生成发表论文列表
        let publicationsHTML = '';
        if (member.publications && member.publications.length > 0) {
            publicationsHTML = member.publications.map(pub => `
                <div class="publication-item">
                    <div class="publication-title">${isChinese ? pub.title : pub.titleEn}</div>
                    <div class="publication-authors">${isChinese ? pub.authors : pub.authorsEn}</div>
                    <div class="publication-venue">${pub.venue}</div>
                </div>
            `).join('');
        } else {
            publicationsHTML = `<p>${isChinese ? '暂无发表论文' : 'No publications yet'}</p>`;
        }
        
        modalBody.innerHTML = `
            <div class="modal-header">
                <div class="modal-image">
                    ${imageHTML}
                </div>
                <div class="modal-basic-info">
                    <h2 data-zh="${member.name}" data-en="${member.nameEn}">${isChinese ? member.name : member.nameEn}</h2>
                    <p class="modal-title" data-zh="${member.title}" data-en="${member.titleEn}">${isChinese ? member.title : member.titleEn}</p>
                    <p class="modal-email">${member.email}</p>
                    <div class="modal-links">
                        ${member.links.map(link => `
                            <a href="${link.url}" class="member-link" title="${link.label}">
                                <i class="${link.icon}"></i>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
            <div class="modal-section">
                <h3><i class="fas fa-user-graduate"></i> ${isChinese ? '教育背景' : 'Education'}</h3>
                <p>${isChinese ? member.education : member.educationEn}</p>
            </div>
            <div class="modal-section">
                <h3><i class="fas fa-flask"></i> ${isChinese ? '研究方向' : 'Research Interests'}</h3>
                <ul class="research-list">
                    ${researchListHTML}
                </ul>
            </div>
            <div class="modal-section">
                <h3><i class="fas fa-file-alt"></i> ${isChinese ? '代表性论文' : 'Representative Publications'}</h3>
                ${publicationsHTML}
            </div>
            <div class="modal-section">
                <h3><i class="fas fa-info-circle"></i> ${isChinese ? '个人简介' : 'Biography'}</h3>
                <p>${isChinese ? member.bio : member.bioEn}</p>
            </div>
            <div class="modal-actions">
                <button class="pdf-btn" onclick="exportToPDF(${member.id})">
                    <i class="fas fa-file-pdf"></i> ${isChinese ? '导出信息为PDF' : 'Export to PDF'}
                </button>
            </div>
        `;
        
        modal.style.display = 'block';
    }

    // 设置语言切换监听
    function setupLanguageListener() {
        // 监听语言切换事件
        document.addEventListener('languageChanged', function() {
            // 更新搜索框占位符
            updateSearchPlaceholder();
            
            // 更新过滤按钮文本
            updateFilterButtons();
            
            // 重新渲染团队成员卡片
            renderTeamMembers();
        });
    }

    // 更新过滤按钮文本
    function updateFilterButtons() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const isChinese = document.documentElement.lang === 'zh';
        
        filterButtons.forEach(button => {
            const filter = button.getAttribute('data-filter');
            const zhText = button.getAttribute('data-zh');
            const enText = button.getAttribute('data-en');
            
            button.textContent = isChinese ? zhText : enText;
        });
    }
});

// 导出为PDF功能
function exportToPDF(memberId) {
    // 这里应该调用PDF生成库，这里仅作示例
    alert('PDF导出功能需要集成PDF生成库（如jsPDF）来实现。在实际项目中，这里会生成包含成员详细信息的PDF文件。');
    
    // 实际实现示例（需要引入jsPDF库）：
    /*
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // 获取成员数据
    const member = getMemberById(memberId);
    const isChinese = document.documentElement.lang === 'zh';
    
    // 设置PDF内容
    doc.setFontSize(20);
    doc.text(isChinese ? member.name : member.nameEn, 20, 20);
    doc.setFontSize(12);
    doc.text(isChinese ? member.title : member.titleEn, 20, 30);
    doc.text(`Email: ${member.email}`, 20, 40);
    
    // 添加更多内容...
    
    // 保存PDF
    doc.save(`${isChinese ? member.name : member.nameEn}_CV.pdf`);
    */
}

// 根据ID获取成员数据（辅助函数）
function getMemberById(id) {
    // 在实际项目中，这里应该从数据源中查找成员
    // 这里仅作示例，返回第一个成员
    const allMembers = [...teamMembers.faculty, ...teamMembers.master, ...teamMembers.alumni];
    return allMembers.find(member => member.id === id) || allMembers[0];
}