(function () {
  window.CVPR_DATA = window.CVPR_DATA || {};

  var commonResearch = {
    zh: ["计算机视觉", "深度学习", "目标检测"],
    en: ["Computer Vision", "Deep Learning", "Object Detection"]
  };

  window.CVPR_DATA.PEOPLE = [
    {
      id: "wang-hanxiang",
      name: { zh: "王瀚祥", en: "Hanxiang Wang" },
      role: { zh: "副教授 / 硕士生导师 / 院长助理", en: "Associate Professor / Master's Supervisor / Assistant Dean" },
      category: "teacher",
      avatar: "images/team/team_core_wanghanxiang_new.jpg",
      avatarFit: "cover",
      avatarPosition: "center top",
      research: { zh: ["计算机视觉", "深度学习", "智慧农业", "医学图像处理"], en: ["Computer Vision", "Deep Learning", "Smart Agriculture", "Medical Image Processing"] },
      bio: {
        zh: "王瀚祥，曲阜师范大学副教授、硕士生导师、院长助理。韩国世宗大学计算机科学与工程博士，主要研究方向为计算机视觉、深度学习、智慧农业等。于 2024 年获批国家级人才项目，荣获国家级青年储备人才称号。累计发表 SCI 论文 30 余篇，其中 17 篇发表于中科院一区 TOP 期刊，总引用量超过 3500 次，H-index 21。",
        en: "Hanxiang Wang, Associate Professor, Master's Supervisor, and Assistant Dean at Qufu Normal University. PhD in Computer Science and Engineering from Sejong University, South Korea. His research interests include computer vision, deep learning, and smart agriculture. He was recognized as a National-level Youth Reserve Talent in 2024, has published over 30 SCI papers (17 in CAS Q1 TOP journals), with total citations exceeding 3500 and an H-index of 21."
      },
      education: {
        zh: ["韩国世宗大学 | 计算机科学与工程 博士 | 2018.09 - 2023.06", "临沂大学 | 软件工程 学士 | 2014.09 - 2018.06"],
        en: ["Sejong University | PhD in Computer Science and Engineering | 2018.09 - 2023.06", "Linyi University | BS in Software Engineering | 2014.09 - 2018.06"]
      },
      experience: {
        zh: ["曲阜师范大学 副教授 | 2026.01 - 至今", "曲阜师范大学 院长助理 / 硕导 | 2024.09 - 至今", "曲阜师范大学 讲师 | 2023.08 - 2025.12", "曲阜师范大学 博士后（在站） | 2025.03 - 至今", "世宗大学 助理研究员 | 2023.06 - 2023.08"],
        en: ["Qufu Normal University | Associate Professor | 2026.01 - Present", "Qufu Normal University | Assistant Dean / Master's Supervisor | 2024.09 - Present", "Qufu Normal University | Lecturer | 2023.08 - 2025.12", "Qufu Normal University | Postdoctoral Fellow | 2025.03 - Present", "Sejong University | Research Assistant | 2023.06 - 2023.08"]
      },
      projects: {
        zh: [
          "国家自然科学基金青年项目：基于仿生物视觉动态感知的农作物病害检测方法研究与应用（30 万元，2026-2028，主持）",
          "山东省自然科学基金 C 类：仿生感知驱动的果蔬类作物病害早期识别关键技术研究（13 万元，2025-2028，主持）",
          "国家建设高水平大学公派研究生项目（2021-2023）",
          "韩国国家研究基金会重点研发项目：基于大数据的育种预测模型技术开发（65 万元，2022-2023，参与）",
          "韩国国家研究基金会重点研发项目：下一代人工智能无人飞行器核心技术开发（170 万元，2021-2023，参与）"
        ],
        en: [
          "NSFC Young Scientists Fund: Biomimetic vision-based crop disease detection (300k RMB, 2026-2028, PI)",
          "Shandong Provincial Natural Science Foundation Class C: Biomimetic perception for early fruit/vegetable disease recognition (130k RMB, 2025-2028, PI)",
          "CSC Postgraduate Program (2021-2023)",
          "Korean NRF R&D Project: Big-data-based breeding prediction model (650k RMB, 2022-2023, participant)",
          "Korean NRF R&D Project: Next-gen AI UAV core technology (1.7M RMB, 2021-2023, participant)"
        ]
      },
      patents: {
        zh: [
          "基于感知损失函数与轻量化自适应的农作物病害检测方法（中国发明专利，2025）",
          "基于细粒度线索的田间小规模作物病害检测方法（中国发明专利，2025）",
          "基于深度学习的下水道缺陷检测方法及其装置（韩国发明专利，2023）"
        ],
        en: [
          "Crop disease detection method based on perceptual loss and lightweight adaptability (CN invention patent, 2025)",
          "Field small-scale crop disease detection based on fine-grained cues (CN invention patent, 2025)",
          "Sewer defect detection method and device based on deep learning (KR invention patent, 2023)"
        ]
      },
      honors: {
        zh: [
          "国家级青年储备人才（2024）",
          "国家建设高水平大学公派研究生项目资助（2021）"
        ],
        en: [
          "National-level Youth Reserve Talent (2024)",
          "CSC Postgraduate Program scholarship (2021)"
        ]
      },
      skills: {
        zh: [
          "审稿人：Computers and Electronics in Agriculture、Engineering Applications of Artificial Intelligence、Computers in Industry、Construction and Building Materials 等国际期刊",
          "中国计算机学会（CCF）会员、IEEE 会员、中国人工智能学会会员、山东省青年科学家委员会会员"
        ],
        en: [
          "Reviewer for Computers and Electronics in Agriculture, Engineering Applications of Artificial Intelligence, Computers in Industry, Construction and Building Materials and other international journals",
          "Member of CCF, IEEE, CAAI, and Shandong Youth Scientists Committee"
        ]
      },
      publications: {
        zh: ["Residual-like Multi-Kernel Block and Dynamic Attention for Deep Neural Networks | EAAI 2025 (中科院一区TOP, IF=8.0)", "PD-TR: End-to-end plant diseases detection using a transformer | Computers and Electronics in Agriculture 2024 (中科院一区TOP, IF=8.9)", "Pixel-level tunnel crack segmentation using a weakly supervised annotation approach | Computers in Industry 2021 (中科院一区TOP, IF=9.1)", "An efficient attention module for instance segmentation network in pest monitoring | Computers and Electronics in Agriculture 2022 (中科院一区TOP, IF=8.9)", "Drone-Based High-Precision Object Detection in Remote Sensing with Attention-Guided Feature Fusion | Tsinghua Science and Technology 2026 (中科院一区TOP)"],
        en: ["Residual-like Multi-Kernel Block and Dynamic Attention for Deep Neural Networks | EAAI 2025 (Q1, IF=8.0)", "PD-TR: End-to-end plant diseases detection using a transformer | Computers and Electronics in Agriculture 2024 (Q1, IF=8.9)", "Pixel-level tunnel crack segmentation using a weakly supervised annotation approach | Computers in Industry 2021 (Q1, IF=9.1)", "An efficient attention module for instance segmentation network in pest monitoring | Computers and Electronics in Agriculture 2022 (Q1, IF=8.9)", "Drone-Based High-Precision Object Detection in Remote Sensing with Attention-Guided Feature Fusion | Tsinghua Science and Technology 2026 (Q1)"]
      },
      email: "hanxiang@qfnu.edu.cn",
      phone: "137-9157-1602",
      homepage: "https://scholar.google.com/citations?user=w5epAMEAAAAJ&hl=en",
      cv: ""
    },
    {
      id: "li-yanfen",
      name: { zh: "厉彦芬", en: "Yanfen Li" },
      role: { zh: "讲师 / 硕士生导师", en: "Lecturer / Master's Supervisor" },
      category: "teacher",
      avatar: "images/team/team_core_liyanfen.png",
      avatarFit: "cover",
      avatarPosition: "center top",
      research: { zh: ["计算机视觉", "深度学习", "智慧农业", "工业缺陷检测"], en: ["Computer Vision", "Deep Learning", "Smart Agriculture", "Industrial Defect Detection"] },
      bio: {
        zh: "厉彦芬，曲阜师范大学讲师、硕士生导师，主要研究方向为计算机视觉、深度学习、智慧农业、工业缺陷检测等。",
        en: "Yanfen Li, Lecturer and Master's Supervisor at Qufu Normal University, with research interests in computer vision, deep learning, smart agriculture, and industrial defect detection."
      },
      education: {
        zh: ["相关教育经历待补充"],
        en: ["Education background pending verification."]
      },
      experience: {
        zh: ["曲阜师范大学 教师 | 待补充具体时间"],
        en: ["Faculty at Qufu Normal University | Dates pending verification."]
      },
      patents: {
        zh: [
          "基于注意力引导特征融合的无人机遥感旋转目标检测方法及系统（中国发明专利，2026）",
          "低光环境下的光照感知轻量级缺陷检测方法、系统及设备（中国发明专利，2026）"
        ],
        en: [
          "Drone-based remote sensing rotated object detection method and system using attention-guided feature fusion (CN invention patent, 2026)",
          "Illumination-aware lightweight defect detection method, system and device in low-light environments (CN invention patent, 2026)"
        ]
      },
      publications: {
        zh: [
          "Drone-Based High-Precision Object Detection in Remote Sensing with Attention-Guided Feature Fusion | Tsinghua Science and Technology 2026 (中科院一区TOP)",
          "Boosting Low-Light Sewer Defect Detection via Illumination-Aware Lightweight YOLO Framework (在投/2026)"
        ],
        en: [
          "Drone-Based High-Precision Object Detection in Remote Sensing with Attention-Guided Feature Fusion | Tsinghua Science and Technology 2026 (Q1)",
          "Boosting Low-Light Sewer Defect Detection via Illumination-Aware Lightweight YOLO Framework (2026)"
        ]
      },
      email: "liyanfen@qfnu.edu.cn",
      phone: "132-8715-4589",
      homepage: "",
      cv: ""
    },
    {
      id: "cao-jipei",
      name: { zh: "曹继培", en: "Jipei Cao" },
      role: { zh: "2024级硕士研究生", en: "Master's Student, Class of 2024" },
      category: "postgraduate",
      avatar: "images/team/team_core_caojipei_new.jpg",
      avatarFit: "cover",
      avatarPosition: "center top",
      research: { zh: ["目标检测", "红外小目标检测"], en: ["Object Detection", "Infrared Small Target Detection"] },
      bio: {
        zh: "曹继培，曲阜师范大学2024级硕士研究生，研究方向为目标检测、红外小目标检测。参与国家自然科学基金青年项目、山东省自然科学基金等多项科研项目，在Applied Intelligence、Expert Systems with Applications等期刊发表论文多篇。",
        en: "Jipei Cao, Master's student (2024 cohort) at Qufu Normal University, research interests in object detection and infrared small target detection. Participated in NSFC青年项目 and multiple provincial fund projects, with publications in Applied Intelligence, Expert Systems with Applications and other journals."
      },
      education: {
        zh: [
          "曲阜师范大学 | 计算机技术 硕士 | 2024.09 - 至今",
          "曲阜师范大学 | 信息与计算科学 学士 | 2020.09 - 2024.06"
        ],
        en: [
          "Qufu Normal University | M.Eng. Computer Technology | 2024.09 - Present",
          "Qufu Normal University | B.Sc. Information and Computational Science | 2020.09 - 2024.06"
        ]
      },
      experience: {
        zh: [
          "国家自然科学基金青年项目 | 科研骨干 | 2026.01 - 2028.12",
          "山东省自然科学基金青年项目（C类） | 科研骨干 | 2025.10 - 2028.10",
          "山东省自然科学基金青年项目（C类） | 项目申报助理 | 2026.10 - 2029.10",
          "日照市自然科学基金青年项目 | 科研骨干 | 2025.07 - 2028.07",
          "日照市自然科学基金青年项目 | 项目申报助理 | 2025.07 - 2028.07"
        ],
        en: [
          "NSFC Youth Project | Researcher | 2026.01 - 2028.12",
          "Shandong Provincial NSFC Youth Project (Cat. C) | Researcher | 2025.10 - 2028.10",
          "Shandong Provincial NSFC Youth Project (Cat. C) | Project Application Assistant | 2026.10 - 2029.10",
          "Rizhao Municipal NSFC Youth Project | Researcher | 2025.07 - 2028.07",
          "Rizhao Municipal NSFC Youth Project | Project Application Assistant | 2025.07 - 2028.07"
        ]
      },
      publications: {
        zh: [
          "AgriEyeNet: Seeing Smarter in Agriculture with Medium-Difficulty Aware Loss and Lightweight Adaptive Detection | Applied Intelligence 2026 (中科院三区, CCF-C, IF=3.5, 已发表)"
          "LSCDNet: leveraging fine-grained contextual cues for precise detection of small target crop disease spots in complex field environments | Computers and Electronics in Agriculture 2026 (中科院一区Top, IF=10.3, 已发表)"
        ],
        en: [
          "AgriEyeNet: Seeing Smarter in Agriculture with Medium-Difficulty Aware Loss and Lightweight Adaptive Detection | Computers and Electronics in Agriculture 2026 (Q1, IF=10.3, Published)",

        ]
      },
      honors: {
        zh: [
          "第二十二届中国研究生数学建模竞赛 国家二等奖",
          "\"华为杯\"第八届中国研究生人工智能创新大赛 国家三等奖",
          "二等奖学金（2022）、优秀团员（2022）、三等学业奖学金（2024、2026）"
        ],
        en: [
          "China Graduate Mathematical Contest in Modeling, National Second Prize",
          "8th Huawei Cup China Graduate AI Innovation Contest, National Third Prize",
          "Second-class Scholarship (2022), Third-class Academic Scholarship (2024, 2026)"
        ]
      },
      skills: {
        zh: [
          "熟悉CNN、Transformer、Mamba架构下目标检测与语义分割；熟练Linux开发环境",
          "熟练Python、OpenCV、PyTorch；掌握MATLAB、Visio、LaTeX科研工具",
          "英语CET-6，可独立完成英文学术论文写作",
          "多次受邀担任IEEE TII、TGRS、TAES、GRSL等期刊审稿人"
        ],
        en: [
          "Proficient in object detection and semantic segmentation with CNN/Transformer/Mamba; Linux development environment",
          "Proficient in Python, OpenCV, PyTorch; MATLAB, Visio, LaTeX research tools",
          "CET-6 English; independent English academic paper writing",
          "Invited reviewer for IEEE TII, TGRS, TAES, GRSL"
        ]
      },
      email: "jipeicv@qfnu.edu.cn",
      phone: "176-6320-8598",
      homepage: "https://cvpr-laboratory.github.io",
      cv: ""
    },
    {
      id: "ma-mengyao",
      name: { zh: "马梦瑶", en: "Mengyao Ma" },
      role: { zh: "2024级硕士研究生", en: "Master's Student, Class of 2024" },
      category: "postgraduate",
      avatar: "images/team/team_core_mamengyao_new.jpg",
      avatarFit: "cover",
      avatarPosition: "center top",
      research: { zh: ["目标检测", "智慧农业"], en: ["Object Detection", "Smart Agriculture"] },
      bio: {
        zh: "马梦瑶，2024级硕士研究生，研究方向为目标检测、智慧农业。",
        en: "Mengyao Ma, Master's student (2024 cohort), research interests in object detection and smart agriculture."
      },
      education: {
        zh: [
          "曲阜师范大学 | 计算机技术 硕士 | 2024.09 - 至今",
          "山东财经大学燕山学院 | 计算机科学与技术 学士 | 2021.09 - 2023.06"
        ],
        en: [
          "Qufu Normal University | M.Eng. Computer Technology | 2024.09 - Present",
          "YanShan College Shandong University of Finance and Economics | B.Sc. Computer Science and Technology | 2021.09 - 2023.06"
        ]
      },
      experience: {
        zh: ["实验室科研训练 | 参与智慧农业相关课题"],
        en: ["Lab research training | Participated in smart agriculture projects"]
      },
      publications: {
        zh: [
          "LSCDNet: leveraging fine-grained contextual cues for precise detection of small target crop disease spots in complex field environments | Computers and Electronics in Agriculture 2026 (中科院一区Top, IF=10.3, 已发表)"
          "AgriEyeNet: Seeing Smarter in Agriculture with Medium-Difficulty Aware Loss and Lightweight Adaptive Detection | Applied Intelligence 2026 (中科院三区, CCF-C, IF=3.5, 已发表)"
        ],
        en: [
          "LSCDNet: leveraging fine-grained contextual cues for precise detection of small target crop disease spots in complex field environments | Computers and Electronics in Agriculture 2026 (Q1, IF=10.3, Published)",
          "AgriEyeNet: Seeing Smarter in Agriculture with Medium-Difficulty Aware Loss and Lightweight Adaptive Detection | Applied Intelligence 2026 (Q3, CCF-C, IF=3.5, Published)"
        ]
      },
      honors: {
        zh: [
          "研究生国家奖学金（2026）、二等奖学金（2022、2024、2025、2026）",
        ],
        en: [
          "Graduate National Scholarship (2026), Second Class Scholarship (2022, 2024, 2025, 2026),",
        ]
      },

      email: "Mmy15610723764@qfnu.edu.cn",
      homepage: "",
      cv: ""
    },
    {
      id: "wang-naiben",
      name: { zh: "王乃奔", en: "Naiben Wang" },
      role: { zh: "2025级硕士研究生", en: "Master's Student, Class of 2025" },
      category: "postgraduate",
      avatar: "images/team/team_core_wangnaiben.png",
      avatarFit: "cover",
      avatarPosition: "center top",
      research: { zh: ["目标检测", "智慧农业"], en: ["Multimodal Learning", "Model Compression"] },
      bio: {
        zh: "王乃奔，2025级硕士研究生，研究方向为目标检测、智慧农业。",
        en: "Naiben Wang, Master's student (2025 cohort), research interests in multimodal learning and model compression."
      },
      education: {
        zh: ["曲阜师范大学 | 计算机相关专业 硕士在读 | 2025.09 - 至今"],
        en: ["Qufu Normal University | Master's in Computer Science | 2025.09 - Present"]
      },
      experience: {
        zh: ["实验室科研训练 | 参与多模态学习相关课题"],
        en: ["Lab research training | Participated in multimodal learning projects"]
      },
      publications: {
        zh: ["成果待补充"],
        en: ["Publications pending."]
      },
      honors: {
        zh: [
          "\"华为杯\"第八届中国研究生人工智能创新大赛 国家三等奖",
        ],
        en: [
          "8th Huawei Cup China Graduate AI Innovation Contest, National Third Prize",
        ]
      },
      email: "rigcv@qfnu.edu.cn",
      homepage: "",
      cv: ""
    },
    {
      id: "jia-zhonghao",
      name: { zh: "贾中豪", en: "Zhonghao Jia" },
      role: { zh: "2025级硕士研究生", en: "Master's Student, Class of 2025" },
      category: "postgraduate",
      avatar: "images/team/team_core_jiazhonghao.png",
      avatarFit: "cover",
      avatarPosition: "center top",
      research: { zh: ["实例分割", "红外小目标检测"], en: ["Weakly Supervised Learning", "Remote Sensing Image Analysis"] },
      bio: {
        zh: "贾中豪，2025级硕士研究生，研究方向为实例分割、红外小目标检测。",
        en: "Zhonghao Jia, Master's student (2024 cohort), research interests in weakly supervised learning and remote sensing image analysis."
      },
      education: {
        zh: [
          "曲阜师范大学 | 计算机技术 硕士 | 2025.09 - 至今",
          "曲阜师范大学 | 信息与计算科学 学士 | 2020.09 - 2024.06"
        ],
        en: [
          "Qufu Normal University | M.Eng. Computer Technology | 2025.09 - Present",
          "Qufu Normal University | B.Sc. Information and Computational Science | 2020.09 - 2024.06"
        ]
      },
      experience: {
        zh: ["实验室科研训练 | 参与遥感图像分析相关课题"],
        en: ["Lab research training | Participated in remote sensing projects"]
      },
      publications: {
        zh: ["成果待补充"],
        en: ["Publications pending."]
      },
      email: "jzh@qfnu.edu.cn",
      homepage: "",
      cv: ""
    },
    {
      id: "wan-huanhuan",
      name: { zh: "万换换", en: "Huanhuan Wan" },
      role: { zh: "2025级硕士研究生", en: "Master's Student, Class of 2025" },
      category: "postgraduate",
      avatar: "images/team/team_core_wanhuanhuan.png",
      avatarFit: "cover",
      avatarPosition: "center top",
      research: { zh: ["深度学习", "医学图像分割"], en: ["Deep Learning", "Medical Image Segmentation"] },
      bio: {
        zh: "万换换，2025级硕士研究生，研究方向为深度学习、医学图像分割。",
        en: "Huanhuan Wan, Master's student (2025 cohort), research interests in deep learning and medical image segmentation."
      },
      education: {
        zh: [
          "曲阜师范大学 | 计算机技术 硕士 | 2025.09 - 至今",
          "临沂大学 | 计算机科学与技术 学士 | 2021.09 - 2025.06"
        ],
        en: [
          "Qufu Normal University | M.Eng. Computer Technology | 2025.09 - Present",
          "Linyi University | B.Sc. Computer Science and Technology | 2021.09 - 2025.06"
        ]
      },
      // experience: {
      //   zh: ["实验室科研训练 | 参与无人机图像分析相关课题"],
      //   en: ["Lab research training | Participated in UAV image analysis projects"]
      // },
      publications: {
        zh: ["成果待补充"],
        en: ["Publications pending."]
      },
      honors: {
        zh: [
          "第二十二届中国研究生数学建模竞赛 国家二等奖",
          "\"华为杯\"第八届中国研究生人工智能创新大赛 国家三等奖",
          "一等奖学金（2022、2023）、二等奖学金（2024、2025、2026）二等创新创业奖学金（2022）"
        ],
        en: [
          "China Graduate Mathematical Contest in Modeling, National Second Prize",
          "8th Huawei Cup China Graduate AI Innovation Contest, National Third Prize",
          "First-Class Scholarship (2022, 2023), Second-class Scholarship (2024, 2025, 2026), Second Class Innovation and Entrepreneurship Scholarship (2022)"
        ]
      },
      email: "huanhuan@qfnu.edu.cn",
      homepage: "",
      cv: ""
    },
    // 26级研一学术型研究生（原占位 1，已实名）
    {
      id: "qiu-haoyu",
      name: { zh: "邱浩宇", en: "Haoyu Qiu" },
      role: { zh: "2026级硕士研究生", en: "Master's Student, Class of 2026" },
      category: "postgraduate",
      avatar: "images/team/team_core_qiuhaoyu.png",
      avatarFit: "cover",
      avatarPosition: "center top",
      research: { zh: ["目标检测", "深度学习"], en: ["Object Detection", "Deep Learning"] },
      bio: {
        zh: "邱浩宇，2026级硕士研究生，研究方向为目标检测、深度学习。",
        en: "Haoyu Qiu, Master's student (2026 cohort), research interests in object detection and deep learning."
      },
      education: {
        zh: [
          "曲阜师范大学 | 计算机科学与技术 硕士在读 | 2026.09 - 至今"
          "宿迁学院 | 信息与计算科学 学士 | 2022.09 - 2026.06"
        ],
        en: [
          "Qufu Normal University | Master's in Computer Science | 2026.09 - Present"
          "Suqian University | B.Sc. Information and Computational Science | 2022.09 - 2026.06"
        ]
      },
      experience: {
        zh: ["实验室科研训练 | 信息待补充"],
        en: ["Lab research training | Details pending"]
      },
      publications: {
        zh: ["成果待补充"],
        en: ["Publications pending."]
      },
      honors: {
        zh: [
          "第二十三届中国研究生数学建模竞赛 国家二等奖",
        ],
        en: [
          "The 23nd China Graduate Mathematical Modeling Competition National Second Prize",
        ]
      },
      email: "",
      homepage: "",
      cv: ""
    },
    // 26级研一学术型研究生（原占位 2，已实名）
    {
      id: "li-tongqing",
      name: { zh: "李同庆", en: "Tongqing Li" },
      role: { zh: "2026级硕士研究生", en: "Master's Student, Class of 2026" },
      category: "postgraduate",
      avatar: "images/team/team_core_litongqing.png",
      avatarFit: "cover",
      avatarPosition: "center top",
      research: { zh: ["目标检测", "城市基础设施缺陷检测"], en: ["Object Detection", "Defect detection of Urban Infrastructure"] },
      bio: {
        zh: "李同庆，2026级硕士研究生，研究方向为目标检测、深度学习。",
        en: "Tongqing Li, Master's student (2026 cohort), research interests in object detection and defect detection of urban infrastructure."
      },
      education: {
        zh: [
          "曲阜师范大学 | 计算机相关专业 硕士在读 | 2026.09 - 至今"
          "山东农业工程学院 | 人工智能 学士 | 2022.09 - 2026.06"
        ],
        en: [
          "Qufu Normal University | Master's in Computer Science | 2026.09 - Present"
          "Shandong Agriculture And Engineering University | B.Sc. Artificial Intelligence | 2022.09 - 2026.06"
        ]
      },
      experience: {
        zh: ["实验室科研训练 | 信息待补充"],
        en: ["Lab research training | Details pending"]
      },
      publications: {
        zh: ["成果待补充"],
        en: ["Publications pending."]
      },
      honors: {
        zh: [
          "第二十三届中国研究生数学建模竞赛 国家二等奖",
          "第十八届全国大学生智能汽车竞赛 二等奖"
          "山东省大学生智能技术应用设计大赛 二等奖",
          "第十届全国大学生统计建模大赛 三等奖",
          "全国大学生人工智能算法设计与应用大赛 三等奖"，
          "全国大学生英语词汇能力大赛 三等奖"，
          "山东省大学生人工智能大赛 三等奖"，
        ],
        en: [
          "The 23nd China Graduate Mathematical Modeling Competition National Second Prize",
          "Second Prize in the 18th National College Student Intelligent Vehicle Competition",
          "Second Prize in Shandong Province College Students' Intelligent Technology Application Design Competition",
          "Third Prize in the 10th National College Student Statistical Modeling Competition",
          "Third Prize in the National College Student Artificial Intelligence Algorithm Design and Application Competition",
          "Third Prize in the National College English Vocabulary Ability Competition",
          "Third Prize in Shandong Province College Student Artificial Intelligence Competition,
        ]
      },
      email: "",
      homepage: "",
      cv: ""
    },
    // 26级研一学术型研究生（原占位 3，已实名；素材待补充，暂复用统一占位头像）
    {
      id: "jiao-fangyu",
      name: { zh: "焦方玉", en: "Fangyu Jiao" },
      role: { zh: "2026级硕士研究生", en: "Master's Student, Class of 2026" },
      category: "postgraduate",
      avatar: "images/team/team_core_jiaofangyu.jpg",
      avatarFit: "cover",
      avatarPosition: "center top",
      research: { zh: ["目标检测", "视觉语言模型"], en: ["Object Detection", "Visual Language Model"] },
      bio: {
        zh: "焦方玉，2026级硕士研究生，研究方向为目标检测、大语言模型。",
        en: "Fangyu Jiao, Master's student (2026 cohort), research interests in object detection and visual language model."
      },
      education: {
        zh: [
          "曲阜师范大学 | 计算机相关专业 硕士在读 | 2026.09 - 至今"
          "菏泽学院 | 数据科学与大数据技术 学士 | 2022.09 - 2026.06"
        ],
        en: [
          "Qufu Normal University | Master's in Computer Science | 2026.09 - Present"
          "Heze University | B.Sc. Data Science and Big Data Technology | 2022.09 - 2026.06"
        ]
      },
      experience: {
        zh: ["实验室科研训练 | 信息待补充"],
        en: ["Lab research training | Details pending"]
      },
      publications: {
        zh: ["成果待补充"],
        en: ["Publications pending."]
      },
      email: "",
      homepage: "",
      cv: ""
    }
  ];

  window.CVPR_DATA.PEOPLE.forEach(function (person) {
    var pending = JSON.stringify(person).indexOf("TODO") !== -1 || JSON.stringify(person).indexOf("待补充") !== -1;
    person.source = person.source || (person.id === "wang-hanxiang"
      ? "Resources/王瀚祥简历.pdf and legacy/team_teacher_wanghanxiang.html"
      : "Legacy member page and current Developer B reviewed content");
    person.status = pending ? "verified-partial" : "verified";
    person.verification = {
      reviewedBy: "Developer B",
      reviewedAt: "2026-08-16",
      publicationRule: pending ? "Confirmed fields are public; missing fields remain withheld" : "Approved for the current public profile"
    };
  });
})();
