document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
        this.classList.toggle('fa-times');
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.navbar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
            menuToggle.classList.remove('fa-times');
        });
    });
    
    // Header Scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.padding = '15px 0';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.padding = '20px 0';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
    
    // Scroll Suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 90,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Botão WhatsApp Float
    setTimeout(function() {
        document.querySelector('.whatsapp-float').classList.add('active');
    }, 3000);
    
    // Slider Hero
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto slide
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pausar slider quando hover
    const heroSlider = document.querySelector('.hero-slider');
    heroSlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    heroSlider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Tabs Produtos
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            tabPanes.forEach(pane => pane.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Contador Estatísticas
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.sobre');
    
    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const speed = 200;
            const count = parseInt(stat.innerText);
            const increment = target / speed;
            
            if (count < target) {
                stat.innerText = Math.ceil(count + increment);
                setTimeout(animateStats, 1);
            } else {
                stat.innerText = target;
            }
        });
    }
    
    // Ativar animações ao scroll
    function checkScroll() {
        const animateElements = document.querySelectorAll('.animate-left, .animate-right, .animate-top');
        const windowHeight = window.innerHeight;
        
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('show');
                
                // Animar estatísticas quando a seção sobre estiver visível
                if (element.closest('.sobre') && !statsAnimated) {
                    animateStats();
                    statsAnimated = true;
                }
            }
        });
    }
    
    let statsAnimated = false;
    
    // Verificar na carga inicial
    checkScroll();
    
    // Verificar durante o scroll
    window.addEventListener('scroll', checkScroll);
    
// Lightbox Galeria
const galeriaItems = document.querySelectorAll('.galeria-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

// Abrir lightbox ao clicar na imagem
galeriaItems.forEach(item => {
    item.addEventListener('click', function () {
        const imgSrc = this.querySelector('img').getAttribute('src');
        lightboxImg.setAttribute('src', imgSrc);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Fechar ao clicar no botão X
closeLightbox.addEventListener('click', function () {
    closeLightboxFunc();
});

// Fechar ao clicar fora da imagem
lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
        closeLightboxFunc();
    }
});

// Fechar ao pressionar ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightboxFunc();
    }
});

// Função para fechar o lightbox
function closeLightboxFunc() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}











    
    // Zoom em imagens
    const zoomImages = document.querySelectorAll('.img-zoom');
    zoomImages.forEach(img => {
        img.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width * 100;
            const y = (e.clientY - rect.top) / rect.height * 100;
            this.style.transformOrigin = `${x}% ${y}%`;
        });
    });
});

