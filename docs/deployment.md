# 本地运行与部署

静态页面可直接打开 `index.html`；可选 HTTP 预览：`python -m http.server 8787 --bind 127.0.0.1`。

源数据修改后执行：

```powershell
node scripts/build-site.mjs
node scripts/build-sitemap.mjs
node scripts/check-static.mjs
```

发布前运行 `python scripts/check-dois.py` 及 `node scripts/check-browser.cjs`。在线 DOI 检查可按本机情况传入 `--proxy`；浏览器检查需 Playwright、Chrome，仅是开发依赖。

GitHub Pages 使用现有仓库 `main` 分支根目录，完整上传根 HTML、profiles、articles、assets、images、sitemap、robots 等文件。不要把外部备份 ZIP、原始论文表或测试截图上传到公开网站。

当前桌面目录没有 `.git`，本次保留这种状态，没有擅自初始化仓库、创建提交或推送。合并到现有仓库时保留它原有的 Git 历史，并先处理远程后续变化。

CI 会重新生成页面和站点地图，再运行静态完整性检查。网站本身不需要安装 Node 或部署服务。上线后核对首页、成员、文章、筛选、无脚本内容及部署检查结果。

回滚在共享仓库中使用 `git revert <commit>`，不强制覆盖历史。本地原版快照保存于本任务工作目录 `outputs/cvpr-before-20261020.zip`。
