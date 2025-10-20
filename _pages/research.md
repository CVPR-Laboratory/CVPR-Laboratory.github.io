---
layout: default           <!-- 使用主题为 default 的通用布局模板，已包含 head、navbar、footer 等公共结构 -->
title: 研究方向          <!-- 浏览器标签页标题；也会被 jekyll-seo-tag 插件读入生成 <title> 与 OpenGraph 标题 -->
permalink: /research/     <!-- 本页固定网址：域名后跟 /research/，无论文件放在哪里都会映射到这个路径 -->
---

<!-- 页面顶部大标题区域，class="page-header" 用于统一样式（背景图、大字、居中） -->
<section class="page-header">
    <div class="container">
        <!-- 一级标题：给访客最直接的本页主题 -->
        <h1>研究方向</h1>
        <!-- 简短副标题，补充说明本页核心价值 -->
        <p>探索计算机视觉与模式识别的前沿领域</p>
    </div>
</section>

<!-- 主要内容区块：概述实验室的主要研究方向，使用网格布局便于后续扩展 -->
<section class="content-section">
    <div class="container">
        <!-- 二级标题：引导访客进入具体方向卡片 -->
        <h2>主要研究方向</h2>
        <!-- 研究方向网格容器，CSS 可通过 research-grid 设置响应式列 -->
        <div class="research-grid">
            <!-- 单个方向卡片：图标 + 标题 + 简介 -->
            <div class="research-item">
                <!-- Font Awesome 图标，fas fa-eye 表示“视觉/眼睛”主题 -->
                <i class="fas fa-eye"></i>
                <!-- 方向名称 -->
                <h3>计算机视觉</h3>
                <!-- 一句话说明具体细分任务，方便潜在学生或合作者快速匹配兴趣 -->
                <p>图像识别、目标检测、语义分割、三维视觉重建等前沿研究。</p>
            </div>
            <div class="research-item">
                <!-- Font Awesome 大脑图标，突出机器学习主题 -->
                <i class="fas fa-brain"></i>
                <h3>机器学习</h3>
                <p>深度学习、强化学习、迁移学习等先进机器学习方法。</p>
            </div>
        </div>
    </div>
</section>