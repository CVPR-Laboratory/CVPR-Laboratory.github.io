/* ========== 合作交流页面专用交互功能 ========== */

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 初始化合作机构卡片动画
  initPartnerCards();
  
  // 初始化项目展示交互
  initProjectCards();
  
  // 初始化合作形式卡片动画
  initCollabTypes();
  
  // 初始化联系表单验证
  initContactForm();
});

// 合作机构卡片动画
function initPartnerCards() {
  const partnerCards = document.querySelectorAll('.partner-card');
  
  // 使用Intersection Observer实现滚动动画
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  // 设置初始状态并开始观察
  partnerCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(card);
  });
}

// 项目卡片交互
function initProjectCards() {
  const projectCards = document.querySelectorAll('.project-card');
  
  // 为每个项目卡片添加点击事件
  projectCards.forEach(card => {
    card.addEventListener('click', function() {
      // 获取项目标题
      const title = this.querySelector('h3').textContent;
      
      // 在实际应用中，这里可以打开项目详情模态框
      console.log(`查看项目详情: ${title}`);
      
      // 添加点击反馈
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });
  
  // 使用Intersection Observer实现滚动动画
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  // 设置初始状态并开始观察
  projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(card);
  });
}

// 合作形式卡片动画
function initCollabTypes() {
  const typeCards = document.querySelectorAll('.type-card');
  
  // 使用Intersection Observer实现滚动动画
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // 添加延迟效果，使卡片依次出现
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, { threshold: 0.1 });
  
  // 设置初始状态并开始观察
  typeCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(card);
  });
}

// 联系表单验证
function initContactForm() {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // 获取表单数据
      const formData = new FormData(this);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      // 简单验证
      if (!name || !email || !message) {
        alert('请填写所有必填字段');
        return;
      }
      
      // 在实际应用中，这里应该发送表单数据到服务器
      console.log('表单提交:', { name, email, message });
      
      // 显示成功消息
      alert('感谢您的联系，我们会尽快回复您！');
      this.reset();
    });
  }
}

// 导出函数供其他模块使用（如果需要）
export { initPartnerCards, initProjectCards, initCollabTypes, initContactForm };