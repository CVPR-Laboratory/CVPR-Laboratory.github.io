# 曲阜师范大学计算机视觉与模式识别实验室网站

2026-10-20 根据 `Prompt.txt` 完成红色高校门户式重构。原生 HTML、CSS、JavaScript，纯静态 GitHub Pages 部署，不需要后端或生产环境 Node.js。

## 本地查看

直接打开 `index.html`。所有页面已经生成正文，关闭 JavaScript 仍可阅读；交互增强使用本地脚本，没有外部 CDN。

也可以在项目目录执行 `python -m http.server 8787 --bind 127.0.0.1`，访问 `http://127.0.0.1:8787/`。

## 维护与生成

```powershell
node scripts/build-site.mjs
node scripts/build-sitemap.mjs
node scripts/check-static.mjs
python scripts/check-dois.py
python scripts/optimize-images.py --register-only
```

日常只修改 `assets/js/data/` 中的数据、`assets/js/portal.js` 中的公共组件和页面模板、`assets/js/site.js` 中的交互、`assets/css/site.css` 中的样式。HTML 为生成结果，修改源文件后重新生成。`build-site.mjs` 仅依赖 Node 标准库。

论文、研究方向、成员、新闻、联系信息原始数据分别保存在原来的数据文件中。`editorial.js` 单独登记本次发现的内容冲突和公开规则。

## 页面与功能

- 首页、实验室概况、研究方向、科研团队、科研成果、新闻动态、联系我们、404。
- 9 个独立成员主页位于 `profiles/`，12 个独立文章页位于 `articles/`。
- `profile.html?id=...`、`article.html?id=...` 旧地址继续工作。
- `publications.html` 提供无脚本情况下的全部成果文字归档。
- 中英切换、二级菜单、移动菜单、轮播暂停、成果年份/类型/关键词/排序/分页、新闻筛选分页、复制邮箱和返回顶部。

## 浏览器回归

```powershell
node scripts/check-browser.cjs
node scripts/check-carousel.cjs
node scripts/check-sticky-navigation.cjs
node scripts/check-performance.cjs
```

回归脚本需要可用的 Playwright 和本机 Chrome；可通过 `CHROME_PATH` 指定浏览器，通过 `QA_OUTPUT` 指定截图目录。该依赖仅用于开发测试，不参与网站运行。Windows 的集成环境可通过 `NODE_PATH` 指向已安装的 Playwright。

## 部署

将完整项目放入现有 Git 仓库，保留原仓库 `.git`，在确认后正常提交和推送。GitHub Pages 选择 `main` 分支根目录发布；不用安装 npm 依赖或运行服务。本次只修改本地下载目录，没有创建提交或推送远程。

## 文档

- `docs/redesign-20261020.md`：设计规范、结构和交付说明。
- `docs/content-review.md`：冲突内容、公开规则及后续资料。
- `docs/content-maintenance.md`：数据维护和页面生成。
- `docs/media-register.md` / `.csv`：素材来源与替换。
- `docs/test-report.md`：实际测试结果。
- `docs/deployment.md`：部署与回滚。
- `docs/known-issues.md`：限制与后续事项。

原版已另存为本机工作目录 `outputs/cvpr-before-20261020.zip`；旧版历史页面及其根目录资源继续保存在 `legacy/`、`css/`、`js/`，不再被当前页面调用。
