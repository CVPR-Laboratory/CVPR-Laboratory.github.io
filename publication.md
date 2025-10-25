---
layout: default
title: 研究成果
permalink: /publication/
---


<!-- 页面顶部大标题区域，class="page-header" 用于统一样式（背景图、大字、居中） -->
<section class="page-header">
    <div class="container">
        <!-- 一级标题：给访客最直接的本页主题 -->
        <h1>研究成果</h1>
        <!-- 简短副标题，补充说明本页核心价值 -->
        <p>展示实验室的学术产出和科研成就</p>
    </div>
</section>

<!-- 第一内容区块：已发表论文，按年份分组，方便访客快速定位最新工作 -->
<section class="content-section">
    <div class="container">
        <h2>发表论文</h2>
        <!-- 2025 年论文组 -->
        <div class="publication-year">
            <h3>2025 年</h3>
            <div class="publication-list">
                <!-- 每一篇论文用 publication-item 包裹，统一卡片阴影、间距、按钮样式 -->
                <div class="publication-item">
                    <h4>RegFormer: Real-time Registration Transformer for Large-scale LiDAR Scenes</h4>
                    <p><strong>CVPR 2025</strong></p>
                    <p>作者: 张教授, 王明, 陈静</p>
                    <!-- 按钮组：primary 按钮跳转到 PDF，secondary 按钮跳转到代码/数据集 -->
                    <div class="publication-links">
                        <a href="https://openaccess.thecvf.com/content/CVPR2025/papers/RegFormer.pdf" class="cta-button small">PDF</a>
                        <a href="https://github.com/cvprlab/RegFormer" class="cta-button small secondary">代码</a>
                    </div>
                </div>
<!-- 占位，无实际用处，但是没有就不行 -->
                <div class="publication-item">
                    <h4>Med-SAM 3D: Segment Anything in 3D Medical Images</h4>
                    <p><strong>Nature Medicine, 2025</strong></p>
                    <p>作者: 李副教授, 刘洋, 张伟</p>
                    <div class="publication-links">
                        <a href="https://www.nature.com/articles/s41591-025-00001" class="cta-button small">PDF</a>
                        <a href="https://medsam3d.github.io" class="cta-button small secondary">数据集</a>
                    </div>
                </div>
            </div>
        </div>
<!-- 占位，无实际用处，但是没有就不行 -->
        <!-- 2024 年论文组 -->
        <div class="publication-year">
            <h3>2024 年</h3>
            <div class="publication-list">
                <div class="publication-item">
                    <h4>XXX-Net: Advanced Deep Learning for Visual Recognition</h4>
                    <p><strong>TPAMI, 2024</strong></p>
                    <p>作者: 张教授, 陈静</p>
                    <div class="publication-links">
                        <a href="#" class="cta-button small">PDF</a>
                        <a href="#" class="cta-button small secondary">代码</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 第二内容区块：专利信息，采用浅灰背景区分视觉层次 -->
<section class="content-section" style="background-color: var(--light-gray);">
    <div class="container">
        <h2>专利</h2>
        <div class="patent-list">
            <!-- 每条专利用 patent-item 包裹，方便后续添加“已授权/实审”标签 -->
            <div class="patent-item">
                <h4>一种基于 Transformer 的点云配准方法</h4>
                <p>专利号: ZL202510123456.7</p>
                <p>授权日期: 2025-06-15</p>
                <p>发明人: 张教授, 王明, 李副教授</p>
            </div>
            <div class="patent-item">
                <h4>医疗影像多器官分割系统</h4>
                <p>专利号: ZL202410654321.0</p>
                <p>授权日期: 2024-12-20</p>
                <p>发明人: 李副教授, 刘洋, 张教授</p>
            </div>
        </div>
    </div>
</section>

<!-- 第三内容区块：学术奖励，提升实验室公信力 -->
<section class="content-section">
    <div class="container">
        <h2>学术奖励</h2>
        <div class="awards-list">
            <div class="award-item">
                <h4>2025 年国家自然科学二等奖</h4>
                <p>第二完成人: 张教授</p>
            </div>
            <div class="award-item">
                <h4>2024 CVPR Best Paper Award</h4>
                <p>获奖论文: RegFormer</p>
            </div>
            <div class="award-item">
                <h4>2023 教育部技术发明一等奖</h4>
                <p>项目: 智能视觉分析系统</p>
            </div>
        </div>
    </div>
</section>

<!-- 第四内容区块：开源工具，促进社区影响力；再次使用浅灰背景形成视觉交替 -->
<section class="content-section" style="background-color: var(--light-gray);">
    <div class="container">
        <h2>开源工具</h2>
        <!-- 使用 CSS Grid 或 Flex 的 tools-grid 布局，方便后续添加更多工具卡片 -->
        <div class="tools-grid">
            <div class="tool-item">
                <h4>RegToolbox</h4>
                <p>点云配准一站式工具包，支持多种配准算法和评估指标。</p>
                <a href="https://github.com/cvprlab/RegToolbox" class="cta-button small">GitHub</a>
            </div>
            <div class="tool-item">
                <h4>Med-SAM 3D</h4>
                <p>3D 医疗影像分割模型，支持多种医学图像模态。</p>
                <a href="https://huggingface.co/cvprlab/med-sam-3d" class="cta-button small">Hugging Face</a>
            </div>
        </div>
    </div>
</section>