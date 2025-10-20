---
layout: default        <!-- 使用主题为 default 的通用布局模板，已包含 head、navbar、footer 等公共结构 -->
title: 团队成员       <!-- 浏览器标签页标题；也会被 jekyll-seo-tag 插件读入生成 <title> 与 OpenGraph 标题 -->
permalink: /team/     <!-- 本页固定网址：域名后跟 /team/，无论文件放在哪里都会映射到这个路径 -->
---

<!-- 页面顶部大标题区域，class="page-header" 用于统一样式（背景图、大字、居中） -->
<section class="page-header">
    <div class="container">
        <h1>团队成员</h1>
        <p>认识我们优秀的研究团队</p>
    </div>
</section>

<!-- 导师团队区块 -->
<section class="content-section">
    <div class="container">
        <h2>导师团队</h2>
        <!-- 导师卡片网格，后续可通过 CSS 设置响应式列 -->
        <div class="team-grid">
            <!-- 单个导师卡片 -->
            <div class="team-member">
                <!-- 头像占位区，200×200 灰色圆角背景，Font Awesome 用户图标居中 -->
                <div class="member-image">
                    <div style="width:200px;height:200px;background:#e9ecef;display:flex;align-items:center;justify-content:center;border-radius:8px;">
                        <i class="fas fa-user" style="font-size:48px;color:#6c757d;"></i>
                    </div>
                </div>
                <!-- 导师信息区 -->
                <div class="member-info">
                    <h3>张教授</h3>
                    <p class="member-title">实验室主任、博士生导师</p>
                    <p class="member-research">研究方向: 计算机视觉、深度学习</p>
                    <p class="member-email">邮箱: prof.zhang@cvpr-lab.edu</p>
                </div>
            </div>
        </div>
    </div>
</section>