// Modern Political Campaign Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Modal functionality
    const modalBtns = document.querySelectorAll('.card-btn');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close');
    
    // Open modal
    modalBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const modalId = this.closest('.card').getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                
                // Add click outside to close
                modal.addEventListener('click', function(e) {

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id') || 'inicio';
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    }
    
    updateActiveNavOnScroll();
    
    // Card hover effects
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Parallax effect for hero section
    function parallaxEffect() {
        const hero = document.querySelector('.hero');
        if (hero) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallax = scrolled * 0.5;
                hero.style.transform = `translateY(${parallax}px)`;
            });
        }
    }
    
    parallaxEffect();
    
    // Typing animation for hero text (optional enhancement)
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        element.style.opacity = '1';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Intersection Observer for animations
    function observeElements() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe cards and sections
        const elementsToObserve = document.querySelectorAll('.card, .solution-category, .section-header');
        elementsToObserve.forEach(el => observer.observe(el));
    }
    
    observeElements();
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Mobile menu toggle (if needed in future)
    function initMobileMenu() {
        const nav = document.querySelector('.navigation');
        const navMenu = document.querySelector('.nav-menu');
        
        // Add mobile menu button if screen is small
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-btn')) {
                const mobileBtn = document.createElement('button');
                mobileBtn.className = 'mobile-menu-btn';
                mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
                mobileBtn.addEventListener('click', () => {
                    navMenu.classList.toggle('mobile-open');
                });
                nav.insertBefore(mobileBtn, navMenu);
            }
        }
    }
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Resize event listener
    window.addEventListener('resize', function() {
        initMobileMenu();
    });
    
    // Add some Easter eggs for interactivity
    console.log('🏛️ Capiatá 2026 - Un Nuevo Horizonte');
    console.log('✨ Transparencia, Desarrollo y Bienestar para Todos');
    
    // Performance optimization - debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Support Counter Functionality
    const likeButton = document.getElementById('likeButton');
    const likeCountElement = document.getElementById('likeCount');
    const supportMessage = document.getElementById('supportMessage');
    const STORAGE_KEY = 'hasLiked';
    const LIKES_KEY = 'supportLikes';

    // Initialize like count
    let likeCount = parseInt(localStorage.getItem(LIKES_KEY)) || 0;
    likeCountElement.textContent = likeCount.toLocaleString();

    // Check if user has already liked
    if (localStorage.getItem(STORAGE_KEY)) {
        likeButton.disabled = true;
        likeButton.innerHTML = '<i class="fas fa-check"></i> ¡Gracias por tu apoyo!';
    }

    // Handle like button click
    likeButton.addEventListener('click', function() {
        // Add click effect
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 500);

        if (localStorage.getItem(STORAGE_KEY)) {
            showThankYouMessage('¡Ya has mostrado tu apoyo! Gracias por tu confianza.');
            return;
        }

        // Create confetti effect
        createConfetti();

        // Increment like count
        likeCount++;
        likeCountElement.textContent = likeCount.toLocaleString();
        
        // Save to localStorage
        localStorage.setItem(STORAGE_KEY, 'true');
        localStorage.setItem(LIKES_KEY, likeCount.toString());
        
        // Update UI
        likeButton.disabled = true;
        likeButton.innerHTML = '<i class="fas fa-check"></i> ¡Gracias por tu apoyo!';
        
        // Show thank you message
        showThankYouMessage('¡Gracias por tu apoyo! <i class="fas fa-heart"></i> Juntos construiremos un mejor Capiatá.');
        
        // Optional: Send data to server in a real implementation
        // sendLikeToServer();
    });

    // Show thank you message with animation
    function showThankYouMessage(message) {
        supportMessage.innerHTML = message;
        supportMessage.classList.add('visible');
        
        // Hide message after 5 seconds
        setTimeout(() => {
            supportMessage.classList.remove('visible');
        }, 5000);
    }
    
    // Create confetti effect
    function createConfetti() {
        const colors = ['#f59e0b', '#ef4444', '#10b981', '#3b82f6', '#8b5cf6'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            
            // Random position
            const posX = Math.random() * window.innerWidth;
            const size = Math.random() * 10 + 5;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const animationDuration = Math.random() * 3 + 2;
            const delay = Math.random() * 2;
            
            // Random shape (circle or square)
            const isCircle = Math.random() > 0.5;
            
            // Apply styles
            Object.assign(confetti.style, {
                left: `${posX}px`,
                top: '-20px',
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                borderRadius: isCircle ? '50%' : '2px',
                animationDuration: `${animationDuration}s`,
                animationDelay: `${delay}s`,
                transform: `rotate(${Math.random() * 360}deg)`
            });
            
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, (animationDuration + delay) * 1000);
        }
    }

    // Apply debounce to scroll events
    const debouncedScrollHandler = debounce(() => {
        updateActiveNavOnScroll();
        parallaxEffect();
    }, 10);
    
    window.addEventListener('scroll', debouncedScrollHandler);
});

// Add CSS for animations
const animationCSS = `
    <style>
    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .loaded .hero-content h2,
    .loaded .hero-text,
    .loaded .stat {
        animation-play-state: running;
    }
    
    .mobile-open {
        display: flex !important;
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--white);
            box-shadow: var(--shadow);
        }
        
        .mobile-menu-btn {
            display: block;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--dark-color);
            cursor: pointer;
            padding: 1rem;
        }
    }
    </style>
`;

// Inject animation CSS
document.head.insertAdjacentHTML('beforeend', animationCSS);

// Funcionalidad del menú hamburguesa
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger && navigation) {
    hamburger.addEventListener('click', () => {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.classList.toggle('active');
        navigation.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
        hamburger.setAttribute('aria-expanded', (!expanded).toString());
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navigation.classList.remove('active');
            document.body.classList.remove('no-scroll');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // Cerrar menú al cambiar el tamaño de la ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            hamburger.classList.remove('active');
            navigation.classList.remove('active');
            document.body.classList.remove('no-scroll');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
// ...existing code...
