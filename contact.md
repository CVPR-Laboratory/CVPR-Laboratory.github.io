---
layout: default
title: 联系我们
lang: zh
permalink: /contact/
---

<section class="page-header">
    <div class="container">
        <h1 data-zh="联系我们" data-en="Contact Us">联系我们</h1>
        <p data-zh="欢迎与我们取得联系" data-en="Feel free to reach out to us">欢迎与我们取得联系</p>
    </div>
</section>

<section class="content-section">
    <div class="container">
        <div class="contact-content">
            <div class="contact-info">
                <h2 data-zh="联系信息" data-en="Contact Information">联系信息</h2>              
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <h3 data-zh="地址" data-en="Address">地址</h3>
                        <p data-zh="北京市海淀区XX路XX号" data-en="No. XX, XX Road, Haidian District, Beijing">北京市海淀区XX路XX号</p>
                        <p data-zh="XX大学计算机学院科研楼A座301室" data-en="Room 301, Building A, School of Computer Science, XX University">XX大学计算机学院科研楼A座301室</p>
                        <p data-zh="邮编: 100190" data-en="Zip: 100190">邮编: 100190</p>
                    </div>
                </div>                
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <div>
                        <h3 data-zh="邮箱" data-en="Email">邮箱</h3>
                        <p data-zh="实验室邮箱: " data-en="Lab Email: ">实验室邮箱: <a href="mailto:contact@cvpr-lab.edu">contact@cvpr-lab.edu</a></p>
                        <p data-zh="张教授邮箱: " data-en="Prof. Zhang: ">张教授邮箱: <a href="mailto:prof.zhang@cvpr-lab.edu">prof.zhang@cvpr-lab.edu</a></p>
                        <p data-zh="李副教授邮箱: " data-en="Associate Prof. Li: ">李副教授邮箱: <a href="mailto:associate.li@cvpr-lab.edu">associate.li@cvpr-lab.edu</a></p>
                    </div>
                </div>                
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <div>
                        <h3 data-zh="电话" data-en="Phone">电话</h3>
                        <p data-zh="实验室办公室: +86-10-6278XXXX" data-en="Lab Office: +86-10-6278XXXX">实验室办公室: +86-10-6278XXXX</p>
                        <p data-zh="张教授: +86-10-6278XXXX" data-en="Prof. Zhang: +86-10-6278XXXX">张教授: +86-10-6278XXXX</p>
                    </div>
                </div>                
                <div class="contact-item">
                    <i class="fas fa-clock"></i>
                    <div>
                        <h3 data-zh="办公时间" data-en="Office Hours">办公时间</h3>
                        <p data-zh="周一至周五: 9:00 - 17:00" data-en="Mon-Fri: 9:00 - 17:00">周一至周五: 9:00 - 17:00</p>
                        <p data-zh="周末: 预约访问" data-en="Weekend: by appointment">周末: 预约访问</p>
                    </div>
                </div>
            </div>            
            <div class="contact-form">
                <h2 data-zh="发送消息" data-en="Send a Message">发送消息</h2>
                <form id="contactForm">
                    <div class="form-group">
                        <label for="name" data-zh="姓名 *" data-en="Name *">姓名 *</label>
                        <input type="text" id="name" name="name" required>
                    </div>                    
                    <div class="form-group">
                        <label for="email" data-zh="邮箱 *" data-en="Email *">邮箱 *</label>
                        <input type="email" id="email" name="email" required>
                    </div>                    
                    <div class="form-group">
                        <label for="subject" data-zh="主题 *" data-en="Subject *">主题 *</label>
                        <input type="text" id="subject" name="subject" required>
                    </div>                    
                    <div class="form-group">
                        <label for="message" data-zh="消息内容 *" data-en="Message *">消息内容 *</label>
                        <textarea id="message" name="message" rows="6" required></textarea>
                    </div>                    
                    <div class="form-group">
                        <label for="purpose" data-zh="联系目的" data-en="Purpose">联系目的</label>
                        <select id="purpose" name="purpose">
                            <option value="" data-zh="请选择..." data-en="Please select...">请选择...</option>
                            <option value="collaboration" data-zh="科研合作" data-en="Research Collaboration">科研合作</option>
                            <option value="admission" data-zh="招生咨询" data-en="Admission Inquiry">招生咨询</option>
                            <option value="visit" data-zh="访问交流" data-en="Academic Visit">访问交流</option>
                            <option value="other" data-zh="其他" data-en="Other">其他</option>
                        </select>
                    </div>                    
                    <button type="submit" class="cta-button" data-zh="发送消息" data-en="Send Message">发送消息</button>
                </form>
            </div>
        </div>
    </div>
</section>

<section class="content-section" style="background-color: var(--light-gray);">
    <div class="container">
        <h2 data-zh="实验室位置" data-en="Lab Location">实验室位置</h2>
        <div class="map-container">
            <div class="map-placeholder">
                <i class="fas fa-map" style="font-size: 48px; color: var(--secondary-color); margin-bottom: 1rem;"></i>
                <h3 data-zh="地图位置" data-en="Map Location">地图位置</h3>
                <p data-zh="XX大学计算机学院科研楼A座" data-en="Building A, School of Computer Science, XX University">XX大学计算机学院科研楼A座</p>
                <p data-zh="北京市海淀区XX路XX号" data-en="No. XX, XX Road, Haidian District, Beijing">北京市海淀区XX路XX号</p>
                <a href="https://maps.google.com/?q=XX 大学计算机学院" class="cta-button small" target="_blank" data-zh="查看Google地图" data-en="View on Google Maps">查看Google地图</a>
            </div>
        </div>
    </div>
</section>

<section class="content-section">
    <div class="container">
        <h2 data-zh="招生信息" data-en="Admission Information">招生信息</h2>
        <div class="admission-info">
            <div class="admission-item">
                <h3 data-zh="博士研究生" data-en="PhD Candidates">博士研究生</h3>
                <p data-zh="欢迎对计算机视觉、机器学习有浓厚兴趣的同学申请博士研究生。" data-en="PhD applications are welcome from those passionate about computer vision and machine learning.">欢迎对计算机视觉、机器学习有浓厚兴趣的同学申请博士研究生。</p>
                <ul>
                    <li data-zh="申请时间: 每年9月-12月" data-en="Application: Sep-Dec each year">申请时间: 每年9月-12月</li>
                    <li data-zh="要求: 相关专业硕士学位" data-en="Requirement: Master's degree in related fields">要求: 相关专业硕士学位</li>
                    <li data-zh="联系方式: prof.zhang@cvpr-lab.edu" data-en="Contact: prof.zhang@cvpr-lab.edu">联系方式: prof.zhang@cvpr-lab.edu</li>
                </ul>
            </div>            
            <div class="admission-item">
                <h3 data-zh="硕士研究生" data-en="Master Candidates">硕士研究生</h3>
                <p data-zh="招收计算机科学、电子信息等相关专业的硕士研究生。" data-en="We recruit master's students from Computer Science, Electronic Engineering, etc.">招收计算机科学、电子信息等相关专业的硕士研究生。</p>
                <ul>
                    <li data-zh="申请时间: 每年3月-5月" data-en="Application: Mar-May each year">申请时间: 每年3月-5月</li>
                    <li data-zh="要求: 相关专业本科学位" data-en="Requirement: Bachelor's degree in related fields">要求: 相关专业本科学位</li>
                    <li data-zh="联系方式: associate.li@cvpr-lab.edu" data-en="Contact: associate.li@cvpr-lab.edu">联系方式: associate.li@cvpr-lab.edu</li>
                </ul>
            </div>            
            <div class="admission-item">
                <h3 data-zh="访问学生/学者" data-en="Visiting Students/Scholars">访问学生/学者</h3>
                <p data-zh="欢迎国内外访问学者和交换学生来实验室交流学习。" data-en="Visiting scholars and exchange students from around the world are welcome.">欢迎国内外访问学者和交换学生来实验室交流学习。</p>
                <ul>
                    <li data-zh="申请: 全年接受申请" data-en="Application: accepted year-round">申请: 全年接受申请</li>
                    <li data-zh="期限: 3个月至1年" data-en="Duration: 3 months to 1 year">期限: 3个月至1年</li>
                    <li data-zh="联系方式: contact@cvpr-lab.edu" data-en="Contact: contact@cvpr-lab.edu">联系方式: contact@cvpr-lab.edu</li>
                </ul>
            </div>
        </div>
    </div>
</section>
