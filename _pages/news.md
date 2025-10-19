---
title: 新闻动态
permalink: /news/
layout: page
---

> 实验室最新进展、学术活动、招生信息将第一时间在此发布。

<div class="news-list">
{% for post in site.categories.news %}
  <div class="news-item">
    <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </div>
{% endfor %}
</div>

<style>
.news-list { margin-top:2rem; }
.news-item { display:flex; align-items:center; gap:1rem; padding:.6rem 0; border-bottom:1px solid #eee; }
.news-item .date { color:#999; min-width:100px; }
</style>