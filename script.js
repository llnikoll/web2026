// Modern Political Campaign Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script cargado');
});

// Menu hamburguesa
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger && navigation) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navigation.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navigation.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
}
