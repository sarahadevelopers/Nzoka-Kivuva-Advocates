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

// Navbar Scroll
window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 30);
});

// Swiper
const servicesSwiper = new Swiper('.services-swiper', {
    loop: true,
    speed: 800,
    grabCursor: true,
    spaceBetween: 24, /* Adds clean breathing room between cards */
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1.1,
        },
        768: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 3, /* Perfect premium 3-column layout */
        }
    }
});

// Animated Counters
const counters = document.querySelectorAll(".stat-number");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = Number(counter.dataset.target) || 0;
            const suffix = counter.dataset.suffix || "";
            const duration = 2000;
            const startTime = performance.now();

            const update = (time) => {
                const progress = Math.min((time - startTime) / duration, 1);
                counter.textContent = Math.floor(progress * target) + suffix;
                if (progress < 1) requestAnimationFrame(update);
                else counter.textContent = target + suffix;
            };
            requestAnimationFrame(update);
            observer.unobserve(counter);
        }
    });
}, { threshold: 0.3 });

counters.forEach(counter => observer.observe(counter));

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        
        // Close all other open items for a clean, single-open accordion
        document.querySelectorAll('.faq-item').forEach(faq => {
            if (faq !== parent) {
                faq.classList.remove('active');
            }
        });

        parent.classList.toggle('active');
    });
});