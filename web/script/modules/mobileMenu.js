export default function InitmobileMenu() {
    if (window.location.pathname.endsWith('/dashboard.html')) {
        document.addEventListener('DOMContentLoaded', function () {
            const hamburger = document.getElementById('hamburger');
            const mobileMenu = document.getElementById('mobile-menu');
    
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('closed');
                mobileMenu.classList.toggle('active');
            });
        });
    }
}