(function () {
  window.CVPR_DATA = window.CVPR_DATA || {};

  var facultyPublicationStatus = {
    zh: "已核验：两位老师提供的完整论文清单",
    en: "Verified against the complete publication lists provided by the two faculty members"
  };

  // The official publication title is retained in English. DOI corrections were checked
  // against Crossref title records on 2026-07-28; rows without a DOI remain linkless.
  var publicationRows = [
    ["scfnsa-single-cell-multi-omics-2026", "2026", "scFNSA: A Factorized Node-Set Attentive Framework for Single-Cell Multi-Omics Integration", "Shoujia Jiang, Junliang Shang, Defu Qiu, Hanxiang Wang, Jin-Xing Liu", "Journal of Chemical Information and Modeling, 66, 5558-5572", "10.1021/acs.jcim.6c00189"],
    ["tumornet-brain-tumor-2026", "2026", "TumorNet: A hybrid lightweight framework for brain tumor classification and reasoning", "Hanxiang Wang, Muhammad Zaqeem, Muhammad Fayaz, Defu Qiu, Sajjad Ahadzadeh, Tan N. Nguyen, L. Minh Dang", "Information Sciences, 746, 123423", "10.1016/j.ins.2026.123423"],
    ["spavgmc-spatial-transcriptomics-2026", "2026", "SpaVGMC: A Unified Representation Learning Framework via Structural and Semantic Alignment in Spatial Transcriptomics", "Aitian Fan, Junliang Shang, Xiaohan Zhang, Wenjing Su, Defu Qiu, Hanxiang Wang, Jin-Xing Liu", "Journal of Chemical Information and Modeling, 66, 7320-7335", "10.1021/acs.jcim.6c00327"],
    ["mirna-disease-hypergraph-2026", "2026", "Prediction of multicategory miRNA-disease associations based on bidirectional hypergraph attention network and gated convolutional strategy", "Yan Sun, Xiaoqi Tang, Junliang Shang, Hanxiang Wang, Defu Qiu, Yuanke Zhang, Jin-Xing Liu", "Journal of Computer-Aided Molecular Design, 40, 131", "10.1007/s10822-026-00502-y"],
    ["msdgcn-drug-disease-2026", "2026", "MsDGCN: multi-scale diffusion graph convolutional network for the prediction of drug-disease association", "Xiaotong Kong, Yan Sun, Junliang Shang, Xiaohan Zhang, Xiaoqi Tang, Hanxiang Wang, Defu Qiu, Yuanke Zhang, Jin-Xing Liu", "Journal of Computer-Aided Molecular Design, 40, 98", "10.1007/s10822-026-00498-5"],
    ["drone-remote-sensing-2026", "2026", "Drone-Based High-Precision Object Detection in Remote Sensing with Attention-Guided Feature Fusion", "Hanxiang Wang, Yanfen Li, Yuanke Zhang, Junliang Shang, Guangshun Li, Liem Dinh-Tien, L. Minh Dang, Hyoung-Kyu Song, Hyeonjoon Moon", "Tsinghua Science and Technology, 31, 1263-1281", "10.26599/TST.2025.9010142"],
    ["dhgcmda-mirna-2026", "2026", "DHGCMDA: a dual-view heterogeneous graph contrastive learning framework for miRNA-disease association type prediction", "Yan Sun, Fanyu Zhang, Shijia Yan, Xiaotong Kong, Hanxiang Wang, Junliang Shang, Jin-Xing Liu", "BMC Bioinformatics, 27, 100", "10.1186/s12859-026-06436-w"],
    ["community-detection-2026", "2026", "Community detection based on community structure enhancement and multi-objective particle swarm optimization", "Yan Sun, Fanyu Zhang, Mingyuan Bi, Junliang Shang, Defu Qiu, Hanxiang Wang, Jin-Xing Liu", "International Journal of Data Science and Analytics, 22, 145", "10.1007/s41060-026-00561-3"],
    ["low-light-sewer-yolo-2026", "2026", "Boosting Low-Light sewer defect detection via Illumination-Aware lightweight YOLO framework", "Yanfen Li, Hanxiang Wang, Yuanke Zhang, Junliang Shang, Guangshun Li, L. Minh Dang", "Measurement, 120548", "10.1016/j.measurement.2026.120548"],
    ["rice-growth-multispectral-2025", "2025", "Transformer-based detection of abnormal rice growth using drone-based multispectral imaging", "Yanfen Li, L. Minh Dang, Hanxiang Wang, Muhammad Fayaz, Sufyan Danish, Junliang Shang, Hyoung-Kyu Song, Hyeonjoon Moon", "Computers and Electronics in Agriculture, 239, 111055", "10.1016/j.compag.2025.111055"],
    ["dynamic-attention-2025", "2025", "Residual-like multi-kernel block and dynamic attention for deep neural networks", "Hanxiang Wang, Yanfen Li, Tan N. Nguyen, L. Minh Dang", "Engineering Applications of Artificial Intelligence, 148, 110456", "10.1016/j.engappai.2025.110456"],
    ["masked-autoencoder-fire-2025", "2025", "Masked autoencoder-based vision framework for robust fire detection in complex environments", "Hanxiang Wang, Muhammad Fayaz, Awais Ahmad, Yanfen Li, Tan N. Nguyen, L. Minh Dang", "Process Safety and Environmental Protection, 203, 108019", "10.1016/j.psep.2025.108019"],
    ["plant-disease-collaborative-transformer-2025", "2025", "End-to-end plant disease detection using transformers with collaborative hybrid assignment trainings", "Yanfen Li, Muhammad Fayaz, Sufyan Danish, Lilia Tightiz, Hanxiang Wang, Tan N. Nguyen, L. Minh Dang", "Applied Soft Computing, 186, 114137", "10.1016/j.asoc.2025.114137"],
    ["dscn-low-dose-ct-2025", "2025", "DSCN-Net: domain-specific contrastive network for unsupervised low-dose CT denoising", "Rui Zhang, Yuanke Zhang, Yanfei Guo, Hanxiang Wang, Bingbing Wei, Fei Ma, Jing Meng, Jianlei Liu, Hongbing Lu, Yang Chen", "Neurocomputing, 651, 130919", "10.1016/j.neucom.2025.130919"],
    ["ct-denoimer-2025", "2025", "CT-Denoimer: efficient contextual transformer network for low-dose CT denoising", "Yuanke Zhang, Fan Xu, Rui Zhang, Yanfei Guo, Hanxiang Wang, Bingbing Wei, Fei Ma, Jing Meng, Jianlei Liu, Hongbing Lu, Yang Chen", "Physics in Medicine & Biology, 70, 115024", "10.1088/1361-6560/adf76c"],
    ["pd-tr-plant-disease-2024", "2024", "PD-TR: End-to-end plant diseases detection using a transformer", "Hanxiang Wang, Tri-Hai Nguyen, Tan N. Nguyen, L. Minh Dang", "Computers and Electronics in Agriculture, 224, 109123", "10.1016/j.compag.2024.109123"],
    ["plant-disease-review-2024", "2024", "Computer vision for plant disease recognition: a comprehensive review", "Minh Dang, Hanxiang Wang, Yanfen Li, Tri-Hai Nguyen, Lilia Tightiz, Nguyen Xuan-Mung, Tan N. Nguyen", "The Botanical Review, 90, 251-311", "10.1007/s12229-024-09687-8"],
    ["pest-instance-segmentation-2024", "2024", "An efficient attention module for instance segmentation network in pest monitoring", "Hanxiang Wang, Yanfen Li, L. Minh Dang, Hyeonjoon Moon", "Computers and Electronics in Agriculture, 195, 106853", "10.1016/j.compag.2022.106853"],
    ["orcnn-x-remote-sensing-2023", "2023", "ORCNN-X: Attention-driven multiscale network for detecting small objects in complex aerial scenes", "Yanfen Li, Hanxiang Wang, L. Minh Dang, Hyoung-Kyu Song, Hyeonjoon Moon", "Remote Sensing, 15, 3497", "10.3390/rs15143497"],
    ["lightweight-sewer-segmentation-2023", "2023", "Lightweight pixel-level semantic segmentation and analysis for sewer defects using deep learning", "L. Minh Dang, Hanxiang Wang, Yanfen Li, Le Quan Nguyen, Tan N. Nguyen, Hyoung-Kyu Song, Hyeonjoon Moon", "Construction and Building Materials, 371, 130792", "10.1016/j.conbuildmat.2023.130792"],
    ["solo-radish-2023", "2023", "Enhanced solo-based instance segmentation algorithm for efficient plant growth assessment: A radish case study", "Wenqi Zhang, L. Minh Dang, Yanfen Li, Hanxiang Wang, Sujin Lee, Hyeonjoon Moon", "Korean Society of Broadcast Engineers Conference, 274-277", ""],
    ["regnet-sewer-defect-2023", "2023", "Deep learning based underground sewer defect classification using a modified RegNet", "Yu Chen, ASMS Sagar, Hanxiang Wang, Yanfen Li, L. Dang, Hyoung-Kyu Song, Hyeonjoon Moon", "Computers, Materials, & Continua, 75, 5455", "10.32604/cmc.2023.038244"],
    ["cdd-tr-concrete-defect-2023", "2023", "CDD-TR: Automated concrete defect investigation using an improved deformable transformers", "Minh Dang, Hanxiang Wang, Tri-Hai Nguyen, Lilia Tightiz, Liem Dinh Tien, Tan N. Nguyen, Ngoc Phi Nguyen", "Journal of Building Engineering, 75, 106976", "10.1016/j.jobe.2023.106976"],
    ["attention-sewer-pipeline-2023", "2023", "Attention-guided multiscale neural network for defect detection in sewer pipelines", "Yanfen Li, Hanxiang Wang, L. Minh Dang, Hyoung-Kyu Song, Hyeonjoon Moon", "Computer-Aided Civil and Infrastructure Engineering, 38, 2163-2179", "10.1111/mice.12987"],
    ["tunnel-crack-korea-2022", "2022", "Deep-learning-based tunnel crack measurement and diagnosis robust to environmental change", "L. Minh Dang, Chanmi Oh, Yanfen Li, Hanxiang Wang, Chang-Jae Chun, Hyeonjoon Moon", "Korean Conference on Next-generation Computing, 387-390", ""],
    ["sewer-pipe-survey-2022", "2022", "Vision-based defect inspection and condition assessment for sewer pipes: A comprehensive survey", "Yanfen Li, Hanxiang Wang, L. Minh Dang, Hyoung-Kyu Song, Hyeonjoon Moon", "Sensors, 22, 2722", "10.3390/s22072722"],
    ["facial-landmark-gcn-2022", "2022", "Facial landmark detection with learnable connectivity graph convolutional network", "Le Quan Nguyen, Yanfen Li, Hanxiang Wang, L. Minh Dang, Hyoung-Kyu Song, Hyeonjoon Moon", "IEEE Access, 10, 94354-94362", "10.1109/access.2022.3200037"],
    ["explainable-ai-review-2022", "2022", "Explainable artificial intelligence: a comprehensive review", "Minh Dang, Hanxiang Wang, Yanfen Li, Tan N. Nguyen", "Artificial Intelligence Review, 55, 3503-3568", "10.1007/s10462-021-10088-y"],
    ["defecttr-sewage-2022", "2022", "DefectTR: End-to-end defect detection for sewage networks using a transformer", "L. Minh Dang, Hanxiang Wang, Yanfen Li, Tan N. Nguyen, Hyeonjoon Moon", "Construction and Building Materials, 325, 126584", "10.1016/j.conbuildmat.2022.126584"],
    ["masonry-crack-segmentation-2022", "2022", "Deep learning-based masonry crack segmentation and real-life crack length measurement", "L. Minh Dang, Hanxiang Wang, Yanfen Li, Le Quan Nguyen, Tan N. Nguyen, Hyoung-Kyu Song, Hyeonjoon Moon", "Construction and Building Materials, 359, 129438", "10.1016/j.conbuildmat.2022.129438"],
    ["heat-network-usage-2022", "2022", "Daily and seasonal heat usage patterns analysis in heat networks", "L. Minh Dang, Sujin Lee, Yanfen Li, Chanmi Oh, Tan N. Nguyen, Hyoung-Kyu Song, Hyeonjoon Moon", "Scientific Reports, 12, 9165", "10.1038/s41598-022-13063-0"],
    ["tunnel-lining-crack-2022", "2022", "Automatic tunnel lining crack evaluation and measurement using deep learning", "L. Minh Dang, Hanxiang Wang, Yanfen Li, Yesul Park, Chanmi Oh, Tan N. Nguyen, Hyeonjoon Moon", "Tunnelling and Underground Space Technology, 124, 104472", "10.1016/j.tust.2022.104472"],
    ["sewer-instance-segmentation-2022", "2022", "A robust instance segmentation framework for underground sewer defect detection", "Yanfen Li, Hanxiang Wang, L. Minh Dang, Md. Jalil Piran, Hyeonjoon Moon", "Measurement, 190, 110727", "10.1016/j.measurement.2022.110727"],
    ["korean-license-plate-2021", "2021", "Robust Korean license plate recognition based on deep neural networks", "Hanxiang Wang, Yanfen Li, L. Minh Dang, Hyeonjoon Moon", "Sensors, 21, 4140", "10.3390/s21124140"],
    ["tunnel-crack-weak-supervision-2021", "2021", "Pixel-level tunnel crack segmentation using a weakly supervised annotation approach", "Hanxiang Wang, Yanfen Li, L. Minh Dang, Sujin Lee, Hyeonjoon Moon", "Computers in Industry, 133, 103545", "10.1016/j.compind.2021.103545"],
    ["intra-ctu-hevc-2021", "2021", "Intra CTU depth decision for HEVC by using neural networks", "Yanfen Li, Hanxiang Wang, L. Minh Dang, Khawar Islam, Hae Kwang Kim", "International Workshop on Advanced Imaging Technology (IWAIT) 2021, 11766, 605-609", "10.1117/12.2589191"],
    ["sewer-defect-imbalance-2021", "2021", "Deep learning-based sewer defect classification for highly imbalanced dataset", "L. Minh Dang, SeonJae Kyeong, Yanfen Li, Hanxiang Wang, Tan N. Nguyen, Hyeonjoon Moon", "Computers & Industrial Engineering, 161, 107630", "10.1016/j.cie.2021.107630"],
    ["bulky-waste-2020", "2020", "Smartphone-based bulky waste classification using convolutional neural networks", "Hanxiang Wang, Yanfen Li, L. Minh Dang, Jaesung Ko, Dongil Han, Hyeonjoon Moon", "Multimedia Tools and Applications, 79, 29411-29431", "10.1007/s11042-020-09571-5"],
    ["human-activity-survey-2020", "2020", "Sensor-based and vision-based human activity recognition: A comprehensive survey", "L. Minh Dang, Kyungbok Min, Hanxiang Wang, Md. Jalil Piran, Cheol Hee Lee, Hyeonjoon Moon", "Pattern Recognition, 108, 107561", "10.1016/j.patcog.2020.107561"],
    ["hevc-mode-classification-2020", "2020", "HEVC intra prediction mode classification by deep learning", "Hanxiang Wang, Yanfen Li, L. Minh Dang, Hae Kwang Kim", "International Workshop on Advanced Imaging Technology (IWAIT) 2020, 11515, 246-250", "10.1117/12.2566252"],
    ["radish-fusarium-uav-2020", "2020", "Fusarium wilt of radish detection using RGB and near infrared images from Unmanned Aerial Vehicles", "L. Minh Dang, Hanxiang Wang, Yanfen Li, Kyungbok Min, Jin Tae Kwak, O. Lee, Hanyong Park, Hyeonjoon Moon", "Remote Sensing, 12, 2863", "10.3390/rs12172863"],
    ["crop-pest-natural-scenes-2020", "2020", "Crop pest recognition in natural scenes using convolutional neural networks", "Yanfen Li, Hanxiang Wang, L. Minh Dang, Abolghasem Sadeghi-Niaraki, Hyeonjoon Moon", "Computers and Electronics in Agriculture, 169, 105174", "10.1016/j.compag.2019.105174"],
    ["autonomous-driving-hybrid-2020", "2020", "A Deep Learning-Based Hybrid Framework for Object Detection and Recognition in Autonomous Driving", "Yanfen Li, Hanxiang Wang, L. Minh Dang, Tan N. Nguyen, Dongil Han, Ahyun Lee, Insung Jang, Hyeonjoon Moon", "IEEE Access, 8, 194228-194239", "10.1109/access.2020.3033289"],
    ["domestic-waste-classification-2019", "2019", "Object classification for domestic waste based on Convolutional neural networks", "Junyoung Nam, Christine Lee, Asif Ashraf Patankar, Hanxiang Wang, Yanfen Li, Hyeonjoon Moon", "Proceedings of the Korean Society of Broadcast Engineers Conference, 83-86", ""]
  ];

  window.CVPR_DATA.ACHIEVEMENTS = publicationRows.map(function (row) {
    return {
      id: row[0],
      type: "paper",
      year: row[1],
      title: { zh: row[2], en: row[2] },
      authors: row[3],
      venue: row[4],
      link: row[5] ? "https://doi.org/" + row[5] : "",
      doi: row[5],
      source: "Hanxiang Wang.xlsx / Yanfen Li.xlsx",
      publicationStatus: "verified",
      status: facultyPublicationStatus
    };
  }).concat([
    {
      id: "nsfc-young-crop-disease-2026",
      type: "project",
      year: "2026",
      title: { zh: "基于仿生视觉动态感知的农作物病害检测方法研究与应用", en: "Crop Disease Detection Based on Bio-inspired Dynamic Visual Perception" },
      authors: "王瀚祥",
      venue: "国家自然科学基金青年项目，2502271",
      link: "",
      source: "教师简历",
      publicationStatus: "verified",
      status: { zh: "来源已核验：教师简历", en: "Verified against the faculty CV" }
    },
    {
      id: "patent-crop-disease-2025",
      type: "patent",
      year: "2025",
      title: { zh: "基于感知损失函数与轻量化自适应的农作物病害检测方法", en: "Crop Disease Detection Based on Perceptual Loss and Lightweight Adaptation" },
      authors: "王瀚祥等",
      venue: "中国发明专利，202511559089.X",
      link: "",
      source: "王瀚祥个人信息总表",
      publicationStatus: "verified",
      status: { zh: "来源已核验：王瀚祥个人信息总表", en: "Verified against Hanxiang Wang's information sheet" }
    },
    {
      id: "csc-scholarship-2021",
      type: "award",
      year: "2021",
      title: { zh: "国家建设高水平大学公派研究生项目资助", en: "China Scholarship Council High-level University Postgraduate Program" },
      authors: "王瀚祥",
      venue: "国家留学基金委",
      link: "",
      source: "教师简历",
      publicationStatus: "verified",
      status: { zh: "来源已核验：教师简历", en: "Verified against the faculty CV" }
    }
  ]);

  window.CVPR_DATA.ACHIEVEMENT_STATS = [
    { key: "publications", type: "paper", label: { zh: "已核验论文", en: "Verified Papers" } },
    { key: "projects", type: "project", label: { zh: "已核验项目", en: "Verified Projects" } },
    { key: "patents", type: "patent", label: { zh: "已核验专利", en: "Verified Patents" } },
    { key: "awards", type: "award", label: { zh: "已核验荣誉", en: "Verified Awards" } }
  ];
})();
