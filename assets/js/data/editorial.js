(function () {
  var data = window.CVPR_DATA;
  // Original records remain in their source files. This register controls publication.
  data.EDITORIAL = {
    reviewedAt: "2026-10-20",
    source:
      "Prompt.txt and comparison of existing faculty/publication/news records",
    heldNews: {
      "news-001":
        "Project title/year differs from the faculty CV project record; faculty rank also differs.",
      "news-002":
        "The complete supplied paper lists do not identify these three CVPR papers.",
      "news-008":
        "The complete supplied paper lists do not identify the claimed T-PAMI paper.",
      "news-009":
        "ICCV 2024 is an inconsistent conference edition; requires original event evidence.",
      "news-010":
        "No corresponding Shandong Key R&D project record in the supplied achievement data.",
      "frontier-002":
        "The February 2025 review describes CVPR 2025 as already concluded; date needs correction.",
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
