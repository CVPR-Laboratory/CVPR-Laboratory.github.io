# 测试记录

测试日期：2026-10-20。本地 Chrome + Playwright，开发服务器仅在回归脚本执行期间启动并自动关闭。

| 检查 | 实际结果 |
| --- | --- |
| `node scripts/build-site.mjs` | 生成 11 个根页面、9 个成员独立页、12 个文章独立页。 |
| `node scripts/build-sitemap.mjs` | 生成 29 个 canonical 地址，含成员和文章。 |
| `node scripts/check-static.mjs` | 32 个 HTML 的路径、大小写、元数据、标题、成员/文章渲染检查通过。 |
| 全部活动 JS `node --check` | 通过。 |
| `python scripts/check-dois.py` | 41 个 DOI/标题匹配通过；3 条记录无 DOI。 |
| `python scripts/optimize-images.py --register-only` | 登记 80 个素材，关联 66 份现有 WebP，不改原图；另新增 4 份轮播响应式副本。 |
| 浏览器回归 | 121 个路由/尺寸组合（含英文）通过，未发现横向溢出、空白正文或控制台错误；最终修正后的机器结果见 results.json。 |
| 原始数据 SHA-256 比对 | achievements / people / research / news / contact / images 六个源数据文件均与重构前 ZIP 一致。 |
| `node scripts/check-carousel.cjs` | file:// 直接打开、左右切换、指示器、持续可见 H1、悬停暂停、自动切换、减少动态偏好检查通过。 |

尺寸覆盖：1920、1440、1366、1024、768、390、375、320px；在 1440 和 375px 逐一覆盖所有公开成员/文章。检查了年份/类别/关键词筛选、排序入口、分页、语言切换保留检索、手机二级菜单与 Escape、轮播箭头/指示器，以及禁用 JavaScript 的首页/成员/文章/全部成果。

截图检查后修正了导航对齐、本地 file:// 图标使用方式和 picture 容器导致的成员摘要错列；图片截图等待 decode 完成，检查增加头像与文字同排断言。轮播标题在切换时保持可见。最终回归及截图原件存放在本机工作目录 `outputs/portal-qa/`，以其中 `results.json` 为最终机器结果。

## 本地性能采样

Chrome、390×844、DPR 1、CPU 4 倍降速、下载 1.6Mbps、延迟 150ms、禁用缓存：初测 LCP 1496ms，使用交付脚本 `scripts/check-performance.cjs` 复测为 1668ms，均 CLS 0。首屏轮播选择 960px / 43,908 字节的 WebP。最终原始结果在 `docs/performance-sample.json`。INP 未测量；本地采样不代表线上用户分布或保证全网达标。

没有执行线上发布或 Git push，没有将本机 HTTP 测试结果冒充线上性能报告。
