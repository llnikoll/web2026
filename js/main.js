// Main UI Logic (Navigation, Hamburger Menu)
document.addEventListener('DOMContentLoaded', function() {
    // 1. Navigation scroll active state
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .hero');
    let isScrolling = false;

    function updateActiveNav() {
        const scrollPosition = window.scrollY;
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 80;
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop - headerHeight - 50 && 
                scrollPosition < sectionTop + sectionHeight - headerHeight - 50) {
                current = section.getAttribute('id') || 'inicio';
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }

    // Handle click events on navigation links for smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 80;
                const targetPosition = targetElement.offsetTop - headerHeight + 1;
                
                // Update active nav link immediately
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle scroll events with requestAnimationFrame for better performance
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                updateActiveNav();
                isScrolling = false;
            });
            isScrolling = true;
        }
    }, { passive: true });

    // Initial update
    updateActiveNav();
    window.addEventListener('load', updateActiveNav);

    // 2. Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // A11y setup for hamburger
    if (hamburger) {
        hamburger.setAttribute('role', 'button');
        hamburger.setAttribute('aria-label', 'Abrir menú de navegación');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('tabindex', '0');

        function toggleMenu() {
            const isExpanded = hamburger.classList.contains('active');
            hamburger.classList.toggle('active');
            if (navMenu) navMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
            
            // A11y update
            hamburger.setAttribute('aria-expanded', !isExpanded);
            hamburger.setAttribute('aria-label', !isExpanded ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
        }

        hamburger.addEventListener('click', toggleMenu);
        hamburger.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
            }
        });
    }

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.setAttribute('aria-label', 'Abrir menú de navegación');
            }
            if (navMenu) navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navigation') && !event.target.closest('.hamburger')) {
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.setAttribute('aria-label', 'Abrir menú de navegación');
            }
            if (navMenu) navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });

    if (navMenu) {
        navMenu.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
});
