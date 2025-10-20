---
title: 新闻动态        <!-- 浏览器标签页标题；也会被 jekyll-seo-tag 插件读入生成 <title> 与 OpenGraph 标题 -->
permalink: /news/      <!-- 本页固定网址：域名后跟 /news/，无论文件放在哪里都会映射到这个路径 -->
layout: page           <!-- 使用主题为 "page" 的通用布局模板，已包含 header/navbar、main 容器、footer 等结构 -->
---

<!-- 用 blockquote 显示一段提示性引言，让访客知道本栏目用途 -->
> 实验室最新进展、学术活动、招生信息将第一时间在此发布。

<!-- 新闻列表容器，后续 CSS 通过类名 news-list 控制整体间距 -->
<div class="news-list">
  <!-- Jekyll 遍历站点中所有分类为 news 的文章（即 _posts 目录下 category: news 的帖子） -->
  {% for post in site.categories.news %}
    <!-- 每一条新闻条目，flex 布局，左侧日期右侧标题 -->
    <div class="news-item">
      <!-- 日期格式化：2025-06-20 形式；min-width 保证日期列对齐 -->
      <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
      <!-- 新闻标题可点击，relative_url 会根据站点 baseurl 自动补全路径 -->
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </div>
  {% endfor %}
</div>

<!-- 内联样式：简单控制列表顶部间距、条目分隔线、日期颜色与宽度 -->
<style>
.news-list { margin-top:2rem; }
.news-item { display:flex; align-items:center; gap:1rem; padding:.6rem 0; border-bottom:1px solid #eee; }
.news-item .date { color:#999; min-width:100px; }
</style>