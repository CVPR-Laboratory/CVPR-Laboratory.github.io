(function () {
  var data = window.CVPR_DATA;
  // Original records remain in their source files. This register controls publication.
  data.EDITORIAL = {
    reviewedAt: "2026-10-20",
    source:
      "Prompt.txt and comparison of existing faculty/publication/news records",
    // 导师指示：新闻动态保留入口、清空旧内容（供以后发布项目获批/学生论文接收等消息）
    heldNews: {
      "frontier-001": true,
      "frontier-002": true,
      "frontier-003": true,
      "news-013": true,
      "news-014": true,
      "news-015": true,
      "news-016": true,
      "news-017": true
    },
    heldFaq: [
      "faq-join",
      "faq-culture",
      "faq-career",
      "faq-collab",
      "faq-visitor",
      "faq-project",
    ],
    contactNotes:
      "Original quotas and named cooperation partners retained internally; public contact uses neutral application and collaboration guidance.",
    slides: [
      {
        image: "images/index/index_news_recommend_01.png",
        position: "center 52%",
        title: { zh: "学术交流 · 共同研讨", en: "Academic Exchange" },
        text: {
          zh: "学术交流 · 科研育人",
          en: "Academic Exchange and Research Education",
        },
        alt: {
          zh: "仓库已有的团队研讨照片",
          en: "Team discussion photograph from the laboratory archive",
        },
      },
      {
        image: "images/index/index_quick_entrance_03.png",
        position: "center 48%",
        title: { zh: "开放协作 · 科研育人", en: "Research and Collaboration" },
        text: {
          zh: "曲阜师范大学计算机学院",
          en: "School of Computer Science, Qufu Normal University",
        },
        alt: {
          zh: "仓库已有的学术交流照片",
          en: "Academic discussion photograph from the laboratory archive",
        },
      },
    ],
  };
})();
