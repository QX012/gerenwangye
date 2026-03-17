// 平滑滚动
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = '#fff';
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
});

// 技能条动画
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
}

// 监听滚动，当技能部分进入视口时触发动画
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// 表单提交处理
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // 模拟表单提交
        console.log('表单提交数据:', { name, email, message });
        
        // 显示成功消息
        alert('消息已发送！我们会尽快回复您。');
        
        // 重置表单
        this.reset();
    });
}

// 项目卡片悬停效果
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// 社交链接悬停效果
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// 按钮悬停效果
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// 关于信息项悬停效果
const infoItems = document.querySelectorAll('.info-item');
infoItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// 页面加载完成后的动画
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 响应式导航栏
const nav = document.querySelector('nav ul');
const menuToggle = document.createElement('button');
menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
menuToggle.classList.add('menu-toggle');
document.querySelector('header').appendChild(menuToggle);

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
});

// 为响应式导航栏添加样式
const style = document.createElement('style');
style.textContent = `
    .menu-toggle {
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #333;
        cursor: pointer;
        padding: 10px;
        position: absolute;
        right: 20px;
        top: 15px;
    }
    
    @media (max-width: 768px) {
        .menu-toggle {
            display: block;
        }
        
        nav ul {
            flex-direction: column;
            align-items: center;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
        }
        
        nav ul.active {
            max-height: 300px;
        }
        
        nav ul li {
            margin: 10px 0;
        }
    }
`;
document.head.appendChild(style);