
# 🔬 CVPR Laboratory 实验室官网
**曲阜师范大学计算机学院 | 计算机视觉与模式识别实验室**

本仓库为**曲阜师范大学计算机学院 CVPR 实验室**官方网站前端实现，基于 **HTML5 + CSS3 + JavaScript + Bootstrap 5** 开发，已部署至 GitHub Pages，用于展示实验室研究方向、师资团队、科研成果、学术动态及招生信息。

---

## 📋 目录
- [网站预览](#网站预览)
- [核心功能](#核心功能)
- [技术栈](#技术栈)
- [项目目录结构](#项目目录结构)
- [部署指南](#部署指南)
- [网站维护说明](#网站维护说明)
- [团队与联系方式](#团队与联系方式)

---

## 🖥️ 网站预览
### 🏠 首页展示
![首页截图](https://github.com/user-attachments/assets/96819ccd-e09d-4b8c-addf-dd545e5c40a9)
*图1：CVPR 实验室官网首页（导航栏 + 轮播 Banner + 研究方向 + 团队简介 + 动态新闻）*

### 📑 核心页面预览
| 页面名称 | 截图预览 | 页面功能 |
|--------|----------|----------|
| **团队成员页** |![团队成员页](https://github.com/user-attachments/assets/703dfa0f-76cb-4323-9af5-065c7965114a) | 展示导师、硕博生、本科生信息 |
| **研究成果页** |![研究成果页](https://github.com/user-attachments/assets/3d4b8de2-061f-48fb-96a5-56ef844e67cd) | 展示论文、专利、科研项目 |
| **学术动态页** |![学术动态页](https://github.com/user-attachments/assets/10d0e8e2-654a-4f79-9f95-e3b61d3af657) | 发布会议、讲座、新闻、通知 |
| **联系方式页** |![联系方式页](https://github.com/user-attachments/assets/d52043cc-19ee-4eca-81ab-c923ea3b2745) | 实验室地址、邮箱、合作咨询 |

### 🌐 在线访问
https://cvpr-laboratory.github.io/

---

## ✨ 核心功能
| 功能模块 | 说明 |
|--------|------|
| 响应式布局 | 完美适配 PC、平板、手机等多终端设备 |
| 现代化 UI | 基于 Bootstrap 5 实现专业、简洁的学术风格界面 |
| 轮播展示 | 使用 Swiper.js 实现首页 Banner 轮播 |
| 模块化内容 | 研究方向、团队、成果、新闻独立模块，便于维护 |
| 成果分类展示 | 按年份/类型展示论文、专利、项目 |
| 静态网站 | 无后端依赖，加载快、部署简单、稳定性高 |
| GitHub Pages 自动部署 | 推送代码即可自动更新网站 |

---

## 🛠️ 技术栈（真实准确）
| 技术/工具 | 用途 |
|----------|------|
| **HTML5** | 页面结构、语义化标签 |
| **CSS3** | 样式、布局、动画、响应式适配 |
| **JavaScript (ES6+)** | 页面交互、轮播控制、菜单逻辑 |
| **Bootstrap 5** | 响应式栅格、UI 组件、导航、卡片 |
| **Swiper.js** | 首页轮播图 |
| **Font Awesome** | 图标库 |
| **GitHub Pages** | 网站部署与托管 |
| **Git** | 版本管理 |

---

## 📂 项目目录结构
```
cvpr-laboratory.github.io/
├── assets/
│   ├── css/          # 全局样式与页面样式
│   ├── js/           # 交互脚本、轮播、菜单
│   ├── images/       # 网站图片资源
│   └── screenshots/  # README 展示截图
├── pages/
│   ├── team.html     # 团队成员
│   ├── research.html # 研究成果
│   ├── news.html     # 学术动态
│   └── contact.html  # 联系我们
├── index.html        # 首页入口
├── .gitignore
└── README.md
```

---

## 🚀 部署指南
### 1. 克隆项目
```bash
git clone https://github.com/CVPR-Laboratory/cvpr-laboratory.github.io.git
cd cvpr-laboratory.github.io
```

### 2. 本地预览
- 直接打开 `index.html`
- 或使用 VS Code **Live Server** 插件运行

### 3. 部署到 GitHub Pages
本项目已自动配置 GitHub Pages，直接推送代码到 `main` 分支即可自动部署。

部署完成后访问：
https://cvpr-laboratory.github.io/

### 4. 自动部署配置（已内置）
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

---

## 📝 网站维护说明
| 维护内容 | 修改路径 | 注意事项 |
|---------|---------|----------|
| 首页轮播图 | `assets/images/` + `index.html` | 保持尺寸统一 |
| 团队成员信息 | `pages/team.html` | 按导师、博士生、本科生分类更新 |
| 研究成果（论文/专利） | `pages/research.html` | 按年份倒序排列 |
| 学术动态/新闻 | `pages/news.html` | 支持时间、标题、详情排版 |
| 联系方式 | `pages/contact.html` | 地址、邮箱、电话 |

---

## 👥 实验室信息
**机构**：曲阜师范大学 计算机学院
**实验室**：CVPR Laboratory（计算机视觉与模式识别实验室）
**研究方向**：计算机视觉、模式识别、深度学习、图像处理、人工智能
**网站部署**：GitHub Pages
**维护团队**：CVPR 实验室开发组

---

## 📄 版权说明
本网站仅供 **曲阜师范大学 CVPR 实验室** 内部使用，未经授权禁止商用。
