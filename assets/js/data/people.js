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
      avatar: "images/team/team_core_wanghanxiang.png",
      avatarFit: "cover",
      avatarPosition: "center top",
      research: { zh: ["计算机视觉", "深度学习", "智慧农业"], en: ["Computer Vision", "Deep Learning", "Smart Agriculture"] },
      bio: {
        zh: "王瀚祥，曲阜师范大学副教授、硕士生导师、院长助理。韩国世宗大学计算机科学与工程博士，主要研究方向为计算机视觉、深度学习、智慧农业等。主持国家自然科学基金青年项目、山东省自然科学基金等多项科研项目，在中科院一区TOP期刊发表论文30余篇，总引用量超过3500次，H-index 21。",
        en: "Hanxiang Wang, Associate Professor, Master's Supervisor, and Assistant Dean at Qufu Normal University. PhD in Computer Science and Engineering from Sejong University, South Korea. His research interests include computer vision, deep learning, and smart agriculture. He has published over 30 papers in Q1/Q2 journals, with total citations exceeding 3500 and an H-index of 21."
      },
      education: {
        zh: ["韩国世宗大学 | 计算机科学与工程 博士 | 2018.09 - 2023.06", "临沂大学 | 软件工程 学士 | 2014.09 - 2018.06"],
        en: ["Sejong University | PhD in Computer Science and Engineering | 2018.09 - 2023.06", "Linyi University | BS in Software Engineering | 2014.09 - 2018.06"]
      },
      experience: {
        zh: ["曲阜师范大学 副教授 | 2026.01 - 至今", "曲阜师范大学 院长助理 / 硕导 | 2024.09 - 至今", "曲阜师范大学 讲师 | 2023.08 - 2025.12", "曲阜师范大学 博士后（在站） | 2025.03 - 至今", "世宗大学 助理研究员 | 2023.06 - 2023.08"],
        en: ["Qufu Normal University | Associate Professor | 2026.01 - Present", "Qufu Normal University | Assistant Dean / Master's Supervisor | 2024.09 - Present", "Qufu Normal University | Lecturer | 2023.08 - 2025.12", "Qufu Normal University | Postdoctoral Fellow | 2025.03 - Present", "Sejong University | Research Assistant | 2023.06 - 2023.08"]
      },
      publications: {
        zh: ["Residual-like Multi-Kernel Block and Dynamic Attention for Deep Neural Networks | EAAI 2025 (中科院一区TOP, IF=8.0)", "PD-TR: End-to-end plant diseases detection using a transformer | Computers and Electronics in Agriculture 2024 (中科院一区TOP, IF=8.9)", "Pixel-level tunnel crack segmentation using a weakly supervised annotation approach | Computers in Industry 2021 (中科院一区TOP, IF=9.1)", "An efficient attention module for instance segmentation network in pest monitoring | Computers and Electronics in Agriculture 2022 (中科院一区TOP, IF=8.9)", "Drone-Based High-Precision Object Detection in Remote Sensing with Attention-Guided Feature Fusion | Tsinghua Science and Technology 2026 (中科院一区TOP)"],
        en: ["Residual-like Multi-Kernel Block and Dynamic Attention for Deep Neural Networks | EAAI 2025 (Q1, IF=8.0)", "PD-TR: End-to-end plant diseases detection using a transformer | Computers and Electronics in Agriculture 2024 (Q1, IF=8.9)", "Pixel-level tunnel crack segmentation using a weakly supervised annotation approach | Computers in Industry 2021 (Q1, IF=9.1)", "An efficient attention module for instance segmentation network in pest monitoring | Computers and Electronics in Agriculture 2022 (Q1, IF=8.9)", "Drone-Based High-Precision Object Detection in Remote Sensing with Attention-Guided Feature Fusion | Tsinghua Science and Technology 2026 (Q1)"]
      },
      email: "hanxiang@qfnu.edu.cn",
      phone: "137-9157-1602",
      homepage: "https://scholar.google.com/citations?user=w5epAMEAAAAJ&hl=en",
      cv: "assets/files/cv/王瀚祥简历.pdf"
    },
    {
      id: "li-yanfen",
      name: { zh: "厉彦芬", en: "Yanfen Li" },
      role: { zh: "副教授 / 硕士生导师", en: "Associate Professor / Master's Supervisor" },
      category: "teacher",
      avatar: "images/team/team_core_liyanfen.png",
      avatarFit: "cover",
      avatarPosition: "center top",
      research: { zh: ["计算机视觉", "深度学习", "智慧农业"], en: ["Computer Vision", "Deep Learning", "Smart Agriculture"] },
      bio: {
        zh: "厉彦芬，曲阜师范大学副教授、硕士生导师，主要研究方向为计算机视觉、深度学习、智慧农业等。",
        en: "Yanfen Li, Associate Professor and Master's Supervisor at Qufu Normal University, with research interests in computer vision, deep learning, and smart agriculture."
      },
      education: {
        zh: ["相关教育经历待补充"],
        en: ["Education background pending verification."]
      },
      experience: {
        zh: ["曲阜师范大学 教师 | 待补充具体时间"],
        en: ["Faculty at Qufu Normal University | Dates pending verification."]
      },
      publications: {
        zh: ["代表成果待补充"],
        en: ["Selected publications pending verification."]
      },
      email: "liyanfen@qfnu.edu.cn",
      phone: "132-8715-4589",
      homepage: "",
      cv: ""
    },
    {
      id: "cao-jipei",
      name: { zh: "曹继培", en: "Jipei Cao" },
      role: { zh: "2023级硕士研究生", en: "Master's Student, Class of 2023" },
      category: "postgraduate",
      avatar: "images/team/team_core_caojipei.png",
      avatarFit: "cover",
      avatarPosition: "center top",
      research: { zh: ["目标检测", "图像分割"], en: ["Object Detection", "Image Segmentation"] },
      bio: {
        zh: "曹继培，2023级硕士研究生，研究方向为目标检测、图像分割。",
        en: "Jipei Cao, Master's student (2023 cohort), research interests in object detection and image segmentation."
      },
      education: {
        zh: ["曲阜师范大学 | 计算机相关专业 硕士在读 | 2023.09 - 至今"],
        en: ["Qufu Normal University | Master's in Computer Science | 2023.09 - Present"]
      },
      experience: {
        zh: ["实验室科研训练 | 参与多项计算机视觉相关课题"],
        en: ["Lab research training | Participated in multiple computer vision projects"]
      },
      publications: {
        zh: ["成果待补充"],
        en: ["Publications pending."]
      },
      email: "TODO",
      homepage: "",
      cv: ""
    },
    {
      id: "ma-mengyao",
      name: { zh: "马梦瑶", en: "Mengyao Ma" },
      role: { zh: "2023级硕士研究生", en: "Master's Student, Class of 2023" },
      category: "postgraduate",
      avatar: "images/team/team_core_mamengyao.png",
      avatarFit: "cover",
      avatarPosition: "center top",
      research: { zh: ["图像分割", "智慧农业"], en: ["Image Segmentation", "Smart Agriculture"] },
      bio: {
        zh: "马梦瑶，2023级硕士研究生，研究方向为图像分割、智慧农业。",
        en: "Mengyao Ma, Master's student (2023 cohort), research interests in image segmentation and smart agriculture."
      },
      education: {
        zh: ["曲阜师范大学 | 计算机相关专业 硕士在读 | 2023.09 - 至今"],
        en: ["Qufu Normal University | Master's in Computer Science | 2023.09 - Present"]
      },
      experience: {
        zh: ["实验室科研训练 | 参与智慧农业相关课题"],
        en: ["Lab research training | Participated in smart agriculture projects"]
      },
      publications: {
        zh: ["成果待补充"],
        en: ["Publications pending."]
      },
      email: "TODO",
      homepage: "",
      cv: ""
    },
    {
      id: "wang-naiben",
      name: { zh: "王乃奔", en: "Naiben Wang" },
      role: { zh: "2023级硕士研究生", en: "Master's Student, Class of 2023" },
      category: "postgraduate",
      avatar: "images/team/team_core_wangnaiben.png",
      avatarFit: "cover",
      avatarPosition: "center top",
      research: { zh: ["多模态学习", "模型压缩"], en: ["Multimodal Learning", "Model Compression"] },
      bio: {
        zh: "王乃奔，2023级硕士研究生，研究方向为多模态学习、模型压缩。",
        en: "Naiben Wang, Master's student (2023 cohort), research interests in multimodal learning and model compression."
      },
      education: {
        zh: ["曲阜师范大学 | 计算机相关专业 硕士在读 | 2023.09 - 至今"],
        en: ["Qufu Normal University | Master's in Computer Science | 2023.09 - Present"]
      },
      experience: {
        zh: ["实验室科研训练 | 参与多模态学习相关课题"],
        en: ["Lab research training | Participated in multimodal learning projects"]
      },
      publications: {
        zh: ["成果待补充"],
        en: ["Publications pending."]
      },
      email: "TODO",
      homepage: "",
      cv: "assets/files/cv/王乃奔简历.pdf"
    },
    {
      id: "jia-zhonghao",
      name: { zh: "贾中豪", en: "Zhonghao Jia" },
      role: { zh: "2024级硕士研究生", en: "Master's Student, Class of 2024" },
      category: "postgraduate",
      avatar: "images/team/team_core_jiazhonghao.png",
      avatarFit: "cover",
      avatarPosition: "center top",
      research: { zh: ["弱监督学习", "遥感图像分析"], en: ["Weakly Supervised Learning", "Remote Sensing Image Analysis"] },
      bio: {
        zh: "贾中豪，2024级硕士研究生，研究方向为弱监督学习、遥感图像分析。",
        en: "Zhonghao Jia, Master's student (2024 cohort), research interests in weakly supervised learning and remote sensing image analysis."
      },
      education: {
        zh: ["曲阜师范大学 | 计算机相关专业 硕士在读 | 2024.09 - 至今"],
        en: ["Qufu Normal University | Master's in Computer Science | 2024.09 - Present"]
      },
      experience: {
        zh: ["实验室科研训练 | 参与遥感图像分析相关课题"],
        en: ["Lab research training | Participated in remote sensing projects"]
      },
      publications: {
        zh: ["成果待补充"],
        en: ["Publications pending."]
      },
      email: "TODO",
      homepage: "",
      cv: ""
    },
    {
      id: "wan-huanhuan",
      name: { zh: "万换换", en: "Huanhuan Wan" },
      role: { zh: "2024级硕士研究生", en: "Master's Student, Class of 2024" },
      category: "postgraduate",
      avatar: "images/team/team_core_wanhuanhuan.png",
      avatarFit: "cover",
      avatarPosition: "center top",
      research: { zh: ["深度学习", "无人机图像分析"], en: ["Deep Learning", "UAV Image Analysis"] },
      bio: {
        zh: "万换换，2024级硕士研究生，研究方向为深度学习、无人机图像分析。",
        en: "Huanhuan Wan, Master's student (2024 cohort), research interests in deep learning and UAV image analysis."
      },
      education: {
        zh: ["曲阜师范大学 | 计算机相关专业 硕士在读 | 2024.09 - 至今"],
        en: ["Qufu Normal University | Master's in Computer Science | 2024.09 - Present"]
      },
      experience: {
        zh: ["实验室科研训练 | 参与无人机图像分析相关课题"],
        en: ["Lab research training | Participated in UAV image analysis projects"]
      },
      publications: {
        zh: ["成果待补充"],
        en: ["Publications pending."]
      },
      email: "TODO",
      homepage: "",
      cv: ""
    },
    {
      id: "xu-yang",
      name: { zh: "许洋", en: "Yang Xu" },
      role: { zh: "2025届毕业生", en: "Class of 2025" },
      category: "alumni",
      avatar: "images/team/team_core_xuyang.png",
      avatarFit: "cover",
      avatarPosition: "center top",
      research: { zh: ["计算机视觉"], en: ["Computer Vision"] },
      bio: {
        zh: "许洋，2025届硕士毕业生，研究方向为计算机视觉。",
        en: "Yang Xu, Master's graduate (Class of 2025), research interest in computer vision."
      },
      education: {
        zh: ["曲阜师范大学 | 计算机相关专业 硕士 | 2022.09 - 2025.06"],
        en: ["Qufu Normal University | Master's in Computer Science | 2022.09 - 2025.06"]
      },
      experience: {
        zh: ["实验室科研训练 | 计算机视觉方向"],
        en: ["Lab research training | Computer Vision"]
      },
      publications: {
        zh: ["成果待补充"],
        en: ["Publications pending."]
      },
      email: "TODO",
      homepage: "",
      cv: ""
    },
    {
      id: "li-zhen",
      name: { zh: "李珍", en: "Zhen Li" },
      role: { zh: "2025届毕业生", en: "Class of 2025" },
      category: "alumni",
      avatar: "images/team/team_core_lizhen.png",
      avatarFit: "cover",
      avatarPosition: "center top",
      research: { zh: ["计算机视觉"], en: ["Computer Vision"] },
      bio: {
        zh: "李珍，2025届硕士毕业生，研究方向为计算机视觉。",
        en: "Zhen Li, Master's graduate (Class of 2025), research interest in computer vision."
      },
      education: {
        zh: ["曲阜师范大学 | 计算机相关专业 硕士 | 2022.09 - 2025.06"],
        en: ["Qufu Normal University | Master's in Computer Science | 2022.09 - 2025.06"]
      },
      experience: {
        zh: ["实验室科研训练 | 计算机视觉方向"],
        en: ["Lab research training | Computer Vision"]
      },
      publications: {
        zh: ["成果待补充"],
        en: ["Publications pending."]
      },
      email: "TODO",
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
