// Mobile Menu Toggle (Black Theme)
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = `<i class="fas fa-${open ? 'times' : 'bars'}"></i>`;
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Sticky Navbar Background on Scroll (CSS handles the design, JS just toggles the class)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Newsletter form submission (Clean Validation, no alerts)
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    const newsletterInput = newsletterForm.querySelector('input[type="email"]');
    const newsletterBtn = newsletterForm.querySelector('.btn');
    
    newsletterBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (newsletterInput.value.trim() === '') {
            newsletterInput.style.borderColor = '#e74c3c';
            newsletterInput.placeholder = 'Please enter your email';
        } else if (!isValidEmail(newsletterInput.value)) {
            newsletterInput.style.borderColor = '#e74c3c';
            newsletterInput.value = '';
            newsletterInput.placeholder = 'Please enter a valid email';
        } else {
            newsletterInput.style.borderColor = 'var(--lime)';
            newsletterInput.value = '';
            newsletterInput.placeholder = 'Thank you for subscribing!';
            newsletterBtn.textContent = 'Subscribed!';
            newsletterBtn.style.backgroundColor = 'var(--lime)';
            
            setTimeout(() => {
                newsletterBtn.textContent = 'Subscribe';
                newsletterBtn.style.backgroundColor = '';
                newsletterInput.placeholder = 'Your email address';
                newsletterInput.style.borderColor = 'var(--border)';
            }, 3000);
        }
    });
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Search functionality (Clean validation, no alerts)
const searchInput = document.querySelector('input[type="text"]');
const searchBtn = document.querySelector('.sidebar-widget .btn');

if (searchBtn) {
    searchBtn.addEventListener('click', function() {
        if (searchInput.value.trim() !== '') {
            // In a real implementation, this would search the blog articles.
            // For now, we just clear the input and focus it.
            searchInput.value = '';
            searchInput.focus();
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
}