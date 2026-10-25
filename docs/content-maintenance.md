# 内容维护

保留原始数据的单一入口：`assets/js/data/research.js`、`people.js`、`achievements.js`、`news.js`、`contact.js` 和 `images.js`。公开审查与轮播在 `editorial.js`。

新增成员：保持稳定 ID，填写中英姓名、身份、研究方向和真实头像；教育、经历、联系方式、简历仅填写已确认字段。新增文章：保留 ID、日期、分类、双语正文、来源和状态，检查同一科研项目在成果页和新闻页是否一致。

新增成果：不改原始标题、作者排序、年份，DOI 先运行在线检查。研究方向通过 representativeAchievements 引用现有成果 ID，不自动匹配无关论文。网页不展示内部审核说明。

编辑后运行 `node scripts/build-site.mjs`、`node scripts/build-sitemap.mjs`、`node scripts/check-static.mjs`。生成结果和源文件一起提交。HTML 不作为手工维护入口。

资料照片替换后可运行 `python scripts/optimize-images.py --register-only` 刷新清单，不重新压缩原图。仅新增或替换位图需要 WebP 时运行完整优化脚本，原始图片仍会保留。
