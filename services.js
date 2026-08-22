// Mobile Menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = `<i class="fas fa-${open ? 'times' : 'bars'}"></i>`;
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Premium Swiper Initialization
const servicesSwiper = new Swiper('.servicesSwiper', {
    loop: true,
    speed: 800,
    grabCursor: true,
    spaceBetween: 20,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 3,
        }
    }
});

// Smooth Scroll for "View Details" buttons in the slider
document.querySelectorAll('.service-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});