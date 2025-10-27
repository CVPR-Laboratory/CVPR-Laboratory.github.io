// team.js - 团队页面交互功能

// 将teamMembers移到全局作用域，方便导出函数访问
let teamMembers = {};

document.addEventListener('DOMContentLoaded', function () {
    // 团队成员数据
    teamMembers = {
        faculty: [
            {
                id: 1,
                name: '王瀚祥老师',
                nameEn: 'Prof. Wang',
                title: '海外归国博士、硕士生导师',
                titleEn: 'Overseas PhD & M.S. Supervisor',
                research: '计算机视觉、深度学习、图像处理、智慧城市、人工智能',
                researchEn: 'Computer Vision, Deep Learning, Image Processing, Smart City, Artificial Intelligence',
                email: 'hanxiang@qfnu.edu.cn',
                image: 'assets/img/team/team_faculty_wanghanxiang.jpg',
                bio: '王老师作为CVPR实验室创始人，深耕计算机视觉与农业科学交叉研究，2023年8月于韩国世宗大学获工学博士学位，次年即入选国家博士后人才支持计划并摘得“国家青年储备人才”称号；此前曾获批“国家建设高水平大学公派研究生项目”。他迄今已在顶刊/顶会累计发表SCI论文25篇（其中中科院一区TOP 13篇），总引用逾2300次。',
                bioEn: 'Founder of the CVPR Laboratory, Prof. Wang has long focused on the intersection of computer vision and agricultural science. He earned his Ph.D. in engineering from Sejong University, South Korea, in August 2023, and in 2024 was selected for the National Postdoctoral Talent Support Program while receiving the title of “National Young Reserve Talent.” Earlier, he was granted funding under the “National Construction of High-Level University Public-Sent Graduate Student Program.” To date, he has published 25 SCI papers in top journals and conferences—13 of them in CAS Zone-1 TOP journals—with total citations exceeding 2,300.',
                education: '2020年 韩国世宗大学 计算机视觉 博士 <br> 2017年 韩国世宗大学 人工智能 硕士<br>2014年 临沂大学 计算机科学与技术 学士',
                educationEn: 'Ph.D. in Computer Vision, Sejong University, South Korea, 2020<br>M.S. in Artificial Intelligence, Sejong University, South Korea, 2017<br>B.S. in Computer Science and Technology, Linyi University, China, 2014',
                researchInterests: [
                    '计算机视觉：图像理解与分析',
                    '深度学习：模型优化与应用',
                    '图像处理：去噪、增强与重建',
                    '智慧城市：智能监控与管理',
                    '人工智能：赋予机器感知、推理与决策能力'
                ],
                researchInterestsEn: [
                    'Computer Vision: image understanding and analysis',
                    'Deep Learning: model optimization and applications',
                    'Image Processing: denoising, enhancement and reconstruction',
                    'Smart City: intelligent surveillance and management',
                    'Artificial Intelligence: endowing machines with perception, reasoning and decision-making',
                ],
                publications: [
                    {
                        title: '老师的代表性论文',
                        titleEn: '老师的代表性论文',
                        authors: '王瀚祥老师, 二作, 三作',
                        authorsEn: 'Prof. Wang, 二作, 三作',
                        venue: '计算机学报, 2023'
                    },
                    {
                        title: '老师的代表性论文',
                        titleEn: '老师的代表性论文',
                        authors: '王瀚祥老师, 二作, 三作',
                        authorsEn: 'Prof. Wang, 二作, 三作',
                        venue: '计算机学报, 2023'
                    },
                    {
                        title: '老师的代表性论文',
                        titleEn: '老师的代表性论文',
                        authors: '王瀚祥老师, 二作, 三作',
                        authorsEn: 'Prof. Wang, 二作, 三作',
                        venue: '计算机学报, 2023'
                    },
                    {
                        title: '老师的代表性论文',
                        titleEn: '老师的代表性论文',
                        authors: '王瀚祥老师, 二作, 三作',
                        authorsEn: 'Prof. Wang, 二作, 三作',
                        venue: '计算机学报, 2023'
                    },
                    {
                        title: '老师的代表性论文',
                        titleEn: '老师的代表性论文',
                        authors: '王瀚祥老师, 二作, 三作',
                        authorsEn: 'Prof. Wang, 二作, 三作',
                        venue: '计算机学报, 2023'
                    }
                ],
                links: [
                    { icon: 'fas fa-graduation-cap', url: '#', label: '个人主页' },
                    { icon: 'fas fa-envelope', url: 'mailto:hanxiang@qfnu.edu.cn', label: '发送邮件' },
                    { icon: 'fab fa-google-scholar', url: '#', label: 'Google Scholar' }
                ]
            },
            {
                id: 2,
                name: '厉彦芬老师',
                nameEn: 'Prof. Li',
                title: '海外归国博士、博士生导师',
                titleEn: 'Associate Professor & Master Supervisor',
                research: '图像处理、模式识别、机器学习',
                researchEn: 'Image Processing, Pattern Recognition, Machine Learning',
                email: 'prof.li@cvpr-lab.edu',
                image: 'assets/img/team/team_faculty_liyanfen.jpg',
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
                name: '曹继培',
                nameEn: 'Jipei Cao',
                title: '硕士研究生',
                titleEn: 'Master Student',
                research: '图像分类、迁移学习、小样本学习',
                researchEn: 'Image Classification, Transfer Learning, Few-shot Learning',
                email: 'chen.hua@cvpr-lab.edu',
                image: 'assets/img/team/team_master_caojipei.jpg',
                bio: '曹继培硕士研究生研究图像分类与迁移学习，致力于提高模型在小样本场景下的性能。已在国际会议发表论文2篇，参与国家自然科学基金项目1项。',
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
                name: '马梦瑶',
                nameEn: 'Mengyao Ma',
                title: '硕士研究生',
                titleEn: 'Master Student',
                research: '三维重建、点云处理、自动驾驶',
                researchEn: '3D Reconstruction, Point Cloud Processing, Autonomous Driving',
                email: 'zhao.qiang@cvpr-lab.edu',
                image: 'assets/img/team/team_master_mamengyao.jpg',
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
            },
            {
                id: 5,
                name: '贾中豪',
                nameEn: 'Zhonghao Jia',
                title: '硕士研究生',
                titleEn: 'Master Student',
                research: '三维重建、点云处理、自动驾驶',
                researchEn: '3D Reconstruction, Point Cloud Processing, Autonomous Driving',
                email: 'zhao.qiang@cvpr-lab.edu',
                image: 'assets/img/team/team_master_jiazhonghao.jpg',
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
            },
            {
                id: 6,
                name: '王乃奔',
                nameEn: 'Naiben Wang',
                title: '硕士研究生',
                titleEn: 'Master Student',
                research: '三维重建、点云处理、自动驾驶',
                researchEn: '3D Reconstruction, Point Cloud Processing, Autonomous Driving',
                email: 'zhao.qiang@cvpr-lab.edu',
                image: 'assets/img/team/team_master_wangnaiben.jpg',
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
            },
            {
                id: 7,
                name: '万换换',
                nameEn: 'Huanhuan Wan',
                title: '硕士研究生',
                titleEn: 'Master Student',
                research: '三维重建、点云处理、自动驾驶',
                researchEn: '3D Reconstruction, Point Cloud Processing, Autonomous Driving',
                email: 'zhao.qiang@cvpr-lab.edu',
                image: 'assets/img/team/team_master_wanhuanhuan.jpg',
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
                id: 8,
                name: '毕业生',
                nameEn: 'Wu Wei',
                title: '博士毕业生',
                titleEn: 'PhD Graduate',
                research: '计算机视觉、机器学习、目标检测',
                researchEn: 'Computer Vision, Machine Learning, Object Detection',
                email: 'wu.wei@alumni.cvpr-lab.edu',
                image: 'assets/img/team/team_alumni_liuhaocun.jpg',
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

    // 创建成员卡片 - 移除导出按钮
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

        searchInput.addEventListener('input', function () {
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
            button.addEventListener('click', function () {
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
                <button class="pdf-btn" onclick="exportMemberToPDF(${member.id}, event)">
                    <i class="fas fa-file-pdf"></i> ${isChinese ? '导出为PDF' : 'Export to PDF'}
                </button>
                <button class="pdf-btn screenshot-btn" onclick="exportToPDFWithScreenshot(event)">
                    <i class="fas fa-camera"></i> ${isChinese ? '截图导出' : 'Screenshot Export'}
                </button>
            </div>
        `;

        modal.style.display = 'block';
    }

    // 设置语言切换监听
    function setupLanguageListener() {
        // 监听语言切换事件
        document.addEventListener('languageChanged', () => {
            updatePageLanguage();
        });
    }

    // 更新页面语言
    function updatePageLanguage() {
        const isChinese = document.documentElement.lang === 'zh';

        // 更新搜索框占位符
        updateSearchPlaceholder();

        // 更新过滤按钮文本
        document.querySelectorAll('.filter-btn').forEach(btn => {
            const text = isChinese ?
                btn.getAttribute('data-zh') :
                btn.getAttribute('data-en');
            btn.textContent = text;
        });

        // 更新成员卡片内容
        document.querySelectorAll('.team-member').forEach(card => {
            const nameElement = card.querySelector('h3');
            const titleElement = card.querySelector('.member-title');
            const researchElement = card.querySelector('.member-research');

            if (nameElement) {
                nameElement.textContent = isChinese ?
                    nameElement.getAttribute('data-zh') :
                    nameElement.getAttribute('data-en');
            }

            if (titleElement) {
                titleElement.textContent = isChinese ?
                    titleElement.getAttribute('data-zh') :
                    titleElement.getAttribute('data-en');
            }

            if (researchElement) {
                researchElement.textContent = isChinese ?
                    researchElement.getAttribute('data-zh') :
                    researchElement.getAttribute('data-en');
            }
        });
    }
});

// 根据ID获取成员数据
function getMemberById(id) {
    const allMembers = [...teamMembers.faculty, ...teamMembers.master, ...teamMembers.alumni];
    return allMembers.find(member => member.id === id);
}

// 导出成员信息为PDF - 使用更简单可靠的方法
async function exportMemberToPDF(memberId, event) {
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }

    console.log('开始导出PDF，成员ID:', memberId);

    const member = getMemberById(memberId);
    if (!member) {
        alert('无法找到成员信息');
        return;
    }

    // 检查jsPDF是否加载
    if (typeof jspdf === 'undefined') {
        alert('PDF导出库未正确加载，请刷新页面重试');
        return;
    }

    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const isChinese = document.documentElement.lang === 'zh';

        const pageWidth = doc.internal.pageSize.getWidth();
        const margin = 20;
        let yPosition = margin;

        // 使用简单的字体设置
        doc.setFont('helvetica');

        // 标题
        doc.setFontSize(18);
        doc.setFont(undefined, 'bold');
        const title = isChinese ? `${member.name} - 个人信息` : `${member.nameEn} - Profile`;
        doc.text(title, pageWidth / 2, yPosition, { align: 'center' });
        yPosition += 15;

        // 基本信息 - 使用英文标签避免中文问题
        doc.setFontSize(11);
        doc.setFont(undefined, 'normal');

        // Position
        doc.text('Position:', margin, yPosition);
        const positionText = isChinese ? member.title : member.titleEn;
        doc.text(positionText, margin + 25, yPosition);
        yPosition += 8;

        // Email
        doc.text('Email:', margin, yPosition);
        doc.text(member.email, margin + 20, yPosition);
        yPosition += 15;

        // 分隔线
        doc.setDrawColor(200, 200, 200);
        doc.line(margin, yPosition, pageWidth - margin, yPosition);
        yPosition += 15;

        // Education - 使用英文标签
        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.text('Education', margin, yPosition);
        yPosition += 10;

        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        const educationText = isChinese ? member.education : member.educationEn;

        // 处理教育背景文本，避免中文问题
        const educationLines = educationText.split('\n');
        educationLines.forEach(line => {
            if (yPosition > doc.internal.pageSize.getHeight() - 20) {
                doc.addPage();
                yPosition = 20;
            }
            doc.text(line, margin, yPosition);
            yPosition += 6;
        });

        yPosition += 8;

        // Research Interests - 使用英文标签
        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.text('Research Interests', margin, yPosition);
        yPosition += 10;

        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        const researchList = isChinese ? member.researchInterests : member.researchInterestsEn;

        researchList.forEach(item => {
            if (yPosition > doc.internal.pageSize.getHeight() - 20) {
                doc.addPage();
                yPosition = 20;
            }
            doc.text('• ' + item, margin, yPosition);
            yPosition += 6;
        });

        yPosition += 8;

        // Publications - 使用英文标签
        if (member.publications && member.publications.length > 0) {
            doc.setFontSize(12);
            doc.setFont(undefined, 'bold');
            doc.text('Publications', margin, yPosition);
            yPosition += 10;

            doc.setFontSize(10);
            doc.setFont(undefined, 'normal');

            member.publications.forEach((pub, index) => {
                if (yPosition > doc.internal.pageSize.getHeight() - 30) {
                    doc.addPage();
                    yPosition = 20;
                }

                // 论文标题
                doc.setFont(undefined, 'bold');
                const title = isChinese ? pub.title : pub.titleEn;
                const titleText = `${index + 1}. ${title}`;

                // 处理长标题
                const titleLines = doc.splitTextToSize(titleText, pageWidth - 2 * margin);
                titleLines.forEach(line => {
                    if (yPosition > doc.internal.pageSize.getHeight() - 20) {
                        doc.addPage();
                        yPosition = 20;
                    }
                    doc.text(line, margin, yPosition);
                    yPosition += 5;
                });

                // 作者
                doc.setFont(undefined, 'italic');
                const authors = isChinese ? pub.authors : pub.authorsEn;
                const authorLines = doc.splitTextToSize(authors, pageWidth - 2 * margin - 5);

                authorLines.forEach(line => {
                    if (yPosition > doc.internal.pageSize.getHeight() - 20) {
                        doc.addPage();
                        yPosition = 20;
                    }
                    doc.text(line, margin + 5, yPosition);
                    yPosition += 5;
                });

                // 期刊/会议
                doc.setFont(undefined, 'normal');
                const venueLines = doc.splitTextToSize(pub.venue, pageWidth - 2 * margin - 5);

                venueLines.forEach(line => {
                    if (yPosition > doc.internal.pageSize.getHeight() - 20) {
                        doc.addPage();
                        yPosition = 20;
                    }
                    doc.text(line, margin + 5, yPosition);
                    yPosition += 5;
                });

                yPosition += 5;
            });
        }

        // Biography - 使用英文标签
        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        if (yPosition > doc.internal.pageSize.getHeight() - 30) {
            doc.addPage();
            yPosition = 20;
        }

        doc.text('Biography', margin, yPosition);
        yPosition += 10;

        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        const bioText = isChinese ? member.bio : member.bioEn;
        const bioLines = doc.splitTextToSize(bioText, pageWidth - 2 * margin);

        bioLines.forEach(line => {
            if (yPosition > doc.internal.pageSize.getHeight() - 20) {
                doc.addPage();
                yPosition = 20;
            }
            doc.text(line, margin, yPosition);
            yPosition += 5;
        });

        // 页脚 - 使用英文
        const totalPages = doc.internal.getNumberOfPages();
        const dateStr = new Date().toLocaleDateString();

        for (let i = 1; i <= totalPages; i++) {
            doc.setPage(i);
            doc.setFontSize(8);
            doc.setTextColor(128);

            // 左侧信息
            doc.text(`CVPR Laboratory - ${dateStr}`, margin, doc.internal.pageSize.getHeight() - 10);

            // 右侧页码
            doc.text(
                `Page ${i} / ${totalPages}`,
                pageWidth - margin,
                doc.internal.pageSize.getHeight() - 10,
                { align: 'right' }
            );
        }

        // 保存PDF
        const fileName = isChinese ?
            `${member.name}_profile.pdf` :
            `${member.nameEn}_profile.pdf`;

        doc.save(fileName);
        console.log('PDF导出成功');

    } catch (error) {
        console.error('PDF导出失败:', error);
        alert('PDF导出失败: ' + error.message);
    }
}

// 截图导出功能
function exportToPDFWithScreenshot(event) {
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }

    console.log('开始截图导出');

    const modalContent = document.querySelector('.modal-content');

    // 检查html2canvas是否加载
    if (typeof html2canvas === 'undefined') {
        alert('截图库未正确加载，请刷新页面重试');
        return;
    }

    // 显示加载提示
    const originalText = event.target.innerHTML;
    const isChinese = document.documentElement.lang === 'zh';
    event.target.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (isChinese ? '生成中...' : 'Generating...');
    event.target.disabled = true;

    // 临时调整模态框样式以获得更好的截图效果
    const originalBackground = modalContent.style.backgroundColor;
    modalContent.style.backgroundColor = '#ffffff';

    // 使用html2canvas捕获模态框内容
    html2canvas(modalContent, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
    }).then(canvas => {
        // 恢复原始样式
        modalContent.style.backgroundColor = originalBackground;

        const imgData = canvas.toDataURL('image/jpeg', 0.9);

        // 检查jsPDF是否加载
        if (typeof jspdf === 'undefined') {
            alert('PDF导出库未正确加载，请刷新页面重试');
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();

        // 计算图片尺寸以适应PDF页面
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = imgWidth / imgHeight;

        // 设置图片在PDF中的尺寸，保留边距
        const margin = 10;
        let pdfWidth = pageWidth - 2 * margin;
        let pdfHeight = pdfWidth / ratio;

        // 如果图片高度超过页面，调整宽度
        if (pdfHeight > pageHeight - 2 * margin) {
            pdfHeight = pageHeight - 2 * margin;
            pdfWidth = pdfHeight * ratio;
        }

        const x = (pageWidth - pdfWidth) / 2;
        const y = (pageHeight - pdfHeight) / 2;

        // 添加图片到PDF
        doc.addImage(imgData, 'JPEG', x, y, pdfWidth, pdfHeight);

        // 添加页脚信息
        doc.setFontSize(10);
        doc.setTextColor(128);
        doc.text(
            `CVPR Laboratory - ${new Date().toLocaleDateString()}`,
            pageWidth / 2,
            pageHeight - 5,
            { align: 'center' }
        );

        const fileName = isChinese ?
            'member_info_screenshot.pdf' :
            'Member_Info_Screenshot.pdf';

        doc.save(fileName);
        console.log('截图导出成功');

    }).catch(error => {
        console.error('截图导出失败:', error);
        alert('截图导出失败: ' + error.message);
    }).finally(() => {
        // 恢复按钮状态和原始样式
        modalContent.style.backgroundColor = originalBackground;
        event.target.innerHTML = originalText;
        event.target.disabled = false;
    });
}