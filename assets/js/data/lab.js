// 实验室名称集中定义（单一数据源）
// 修改此文件即可同步全局所有 JS 渲染位置；
// 预渲染 HTML 中的名称需通过 build 脚本或手动同步。
// 字段均为 {zh, en} 对象，portal.js 的 lab(key) 按当前语言取对应值。
(function () {
  window.CVPR_DATA = window.CVPR_DATA || {};

  window.CVPR_DATA.LAB = {
    name: {
      zh: "计算机视觉与图像理解实验室",
      en: "Computer Vision and Image Understanding Laboratory",
    },
    short: {
      zh: "CVIU 实验室",
      en: "CVIU Lab",
    },
    university: {
      zh: "曲阜师范大学",
      en: "Qufu Normal University",
    },
    department: {
      zh: "计算机学院",
      en: "School of Computer Science",
    },
    slogan: {
      zh: "学术交流 · 科研育人",
      en: "Academic Exchange and Research Education",
    },
    // 描述（meta description / about 页首句）
    desc: {
      zh: "曲阜师范大学计算机视觉与图像理解实验室。",
      en: "Computer Vision and Image Understanding Laboratory, Qufu Normal University.",
    },
    // 版权行
    copyright: {
      zh: "计算机视觉与图像理解实验室 · 曲阜师范大学",
      en: "CVIU Lab · Qufu Normal University",
    },
  };
})();
