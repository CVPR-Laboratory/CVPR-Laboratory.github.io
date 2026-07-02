(function () {
  window.CVPR_DATA = window.CVPR_DATA || {};

  window.CVPR_DATA.RESEARCH = [
    {
      id: "precision-agriculture",
      anchor: "precision-agriculture",
      icon: "leaf",
      title: { zh: "精准农业与植物病害检测", en: "Precision Agriculture and Plant Disease Detection" },
      subtitle: { zh: "面向复杂自然场景的细粒度病斑检测与农业智能感知", en: "Fine-grained lesion detection and intelligent agricultural perception in complex field scenarios" },
      description: { zh: "围绕智慧农业、植物病害识别、细粒度病斑检测和田间小目标检测等任务，探索多尺度特征、病害线索增强和复杂光照鲁棒感知方法。TODO: 请补充真实方向介绍。", en: "This direction studies smart agriculture, plant disease recognition, fine-grained lesion detection, and small-object detection in field scenarios, with an emphasis on multi-scale features, lesion cue enhancement, and robust perception under complex illumination. TODO: Please add the verified research description." },
      keyProblems: { zh: ["复杂自然场景中的光照变化、遮挡干扰与密集小目标", "病斑区域细粒度差异弱、尺度变化大、标注成本高", "TODO: 请补充关键科学问题"], en: ["Illumination changes, occlusion, and dense small objects in natural field scenes", "Fine-grained lesion differences, large scale variations, and high annotation cost", "TODO: Please add verified key scientific problems"] },
      topics: { zh: ["YOLO / Transformer 检测器优化", "多尺度特征融合与病害线索增强", "轻量化农业视觉模型部署", "TODO: 请补充主要研究内容"], en: ["YOLO / Transformer detector optimization", "Multi-scale feature fusion and lesion cue enhancement", "Lightweight agricultural vision model deployment", "TODO: Please add verified research topics"] },
      applications: { zh: ["农作物病害监测", "田间智能巡检", "农业智能感知平台", "TODO: 请补充应用场景"], en: ["Crop disease monitoring", "Intelligent field inspection", "Agricultural perception platforms", "TODO: Please add application scenarios"] },
      keywords: { zh: ["智慧农业", "植物病害", "小目标检测", "细粒度病斑", "多尺度特征"], en: ["Smart Agriculture", "Plant Disease", "Small Object Detection", "Fine-grained Lesions", "Multi-scale Features"] },
      image: "images/index/index_research_agriculture.png",
      imageFit: "cover",
      imagePosition: "center",
      imageAlt: { zh: "精准农业与植物病害检测方向示意图", en: "Illustration for precision agriculture and plant disease detection" }
    },
    {
      id: "remote-sensing",
      anchor: "remote-sensing",
      icon: "satellite",
      title: { zh: "遥感目标检测", en: "Remote Sensing Object Detection" },
      subtitle: { zh: "面向高分辨率遥感图像的多尺度、旋转与弱小目标识别", en: "Multi-scale, oriented, and small-object recognition in high-resolution remote-sensing images" },
      description: { zh: "面向高分辨率遥感图像解译，关注复杂背景下小目标、旋转目标和多尺度目标的精细定位与场景理解。TODO: 请补充真实方向介绍。", en: "This direction focuses on high-resolution remote-sensing image interpretation, including small objects, oriented targets, multi-scale localization, and scene understanding under complex backgrounds. TODO: Please add the verified research description." },
      keyProblems: { zh: ["遥感目标尺度跨度大、目标排列密集且方向任意", "复杂地物背景导致弱小目标识别困难", "TODO: 请补充关键科学问题"], en: ["Large scale variations, dense layouts, and arbitrary orientations", "Complex land-cover backgrounds make small targets difficult to recognize", "TODO: Please add verified key scientific problems"] },
      topics: { zh: ["旋转目标检测", "CNN / Transformer 特征建模", "注意力引导的特征融合", "TODO: 请补充主要研究内容"], en: ["Oriented object detection", "CNN / Transformer feature modeling", "Attention-guided feature fusion", "TODO: Please add verified research topics"] },
      applications: { zh: ["遥感影像解译", "场景理解", "地物目标监测", "TODO: 请补充应用场景"], en: ["Remote-sensing image interpretation", "Scene understanding", "Geospatial target monitoring", "TODO: Please add application scenarios"] },
      keywords: { zh: ["遥感影像", "旋转目标", "小目标检测", "复杂背景", "精细定位"], en: ["Remote Sensing", "Oriented Objects", "Small Object Detection", "Complex Backgrounds", "Precise Localization"] },
      image: "images/index/index_research_RS.png",
      imageFit: "cover",
      imagePosition: "center",
      imageAlt: { zh: "遥感目标检测方向示意图", en: "Illustration for remote sensing object detection" }
    },
    {
      id: "medical-image",
      anchor: "medical-image",
      icon: "scan",
      title: { zh: "医学图像分析", en: "Medical Image Analysis" },
      subtitle: { zh: "面向病灶检测、医学图像分割与辅助诊断的智能视觉分析", en: "Intelligent vision analysis for lesion detection, medical segmentation, and assisted diagnosis" },
      description: { zh: "围绕医学图像分割、病灶检测、区域定位与模型可解释性，探索多尺度特征建模和弱小病灶识别方法。TODO: 请补充真实方向介绍。", en: "This direction explores medical image segmentation, lesion detection, regional localization, model interpretability, multi-scale feature modeling, and weak lesion recognition. TODO: Please add the verified research description." },
      keyProblems: { zh: ["病灶边界模糊、形态差异大、类别不均衡", "医学图像数据隐私敏感且高质量标注稀缺", "TODO: 请补充关键科学问题"], en: ["Ambiguous lesion boundaries, diverse morphologies, and class imbalance", "Privacy-sensitive medical data and limited high-quality annotations", "TODO: Please add verified key scientific problems"] },
      topics: { zh: ["医学图像分割", "病灶区域检测", "可解释医学 AI", "TODO: 请补充主要研究内容"], en: ["Medical image segmentation", "Lesion region detection", "Explainable medical AI", "TODO: Please add verified research topics"] },
      applications: { zh: ["辅助诊断", "影像智能分析", "病灶区域定位", "TODO: 请补充应用场景"], en: ["Assisted diagnosis", "Intelligent image analysis", "Lesion localization", "TODO: Please add application scenarios"] },
      keywords: { zh: ["医学图像", "病灶检测", "图像分割", "辅助诊断", "模型可解释性"], en: ["Medical Imaging", "Lesion Detection", "Segmentation", "Assisted Diagnosis", "Interpretability"] },
      image: "images/index/index_research_medical.png",
      imageFit: "cover",
      imagePosition: "center",
      imageAlt: { zh: "医学图像分析方向示意图", en: "Illustration for medical image analysis" }
    },
    {
      id: "infrared-target",
      anchor: "infrared-target",
      icon: "thermal",
      title: { zh: "红外目标检测", en: "Infrared Target Detection" },
      subtitle: { zh: "面向低对比度、弱纹理与复杂环境的红外小目标鲁棒检测", en: "Robust infrared small-target detection under low contrast, weak texture, and complex environments" },
      description: { zh: "面向红外小目标检测、背景杂波抑制、目标增强和夜间复杂天气感知等问题，研究多尺度上下文与弱纹理目标建模。TODO: 请补充真实方向介绍。", en: "This direction studies infrared small-target detection, clutter suppression, target enhancement, night-time perception, and multi-scale contextual modeling for weak-texture targets. TODO: Please add the verified research description." },
      keyProblems: { zh: ["红外目标弱小、低对比度、背景杂波强", "复杂天气和夜间场景下目标纹理信息有限", "TODO: 请补充关键科学问题"], en: ["Small, low-contrast targets and strong background clutter", "Limited texture cues in night-time and adverse-weather scenarios", "TODO: Please add verified key scientific problems"] },
      topics: { zh: ["红外小目标增强", "背景杂波抑制", "多尺度上下文建模", "TODO: 请补充主要研究内容"], en: ["Infrared small-target enhancement", "Background clutter suppression", "Multi-scale context modeling", "TODO: Please add verified research topics"] },
      applications: { zh: ["夜间感知", "复杂天气目标检测", "低可见度智能监测", "TODO: 请补充应用场景"], en: ["Night-time perception", "Adverse-weather target detection", "Low-visibility intelligent monitoring", "TODO: Please add application scenarios"] },
      keywords: { zh: ["红外小目标", "低对比度", "背景抑制", "目标增强", "夜间感知"], en: ["Infrared Small Targets", "Low Contrast", "Clutter Suppression", "Target Enhancement", "Night Perception"] },
      image: "images/index/index_research_infrared.png",
      imageFit: "cover",
      imagePosition: "center",
      imageAlt: { zh: "红外目标检测方向示意图", en: "Illustration for infrared target detection" }
    }
  ];
})();
