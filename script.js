// Simple smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Simple form submission feedback
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', function() {
        const btn = this.querySelector('.btn-submit');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    });
}

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Enhanced footer link animations
document.querySelectorAll('.footer-col a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
    });

    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});
