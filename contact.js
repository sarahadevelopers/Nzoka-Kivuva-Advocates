// Mobile Menu Toggle
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

// Sticky Navbar Background on Scroll (Updated to Black theme)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(17, 17, 17, 0.95)'; // Black with slight transparency
        navbar.style.backdropFilter = 'blur(5px)';
    } else {
        navbar.style.backgroundColor = 'var(--black)'; // Solid #111111
        navbar.style.backdropFilter = 'none';
    }
});

// FAQ Accordion (Kept the same)
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
    });
});

// Contact Form Submission (FIXED: Removed preventDefault and alert so FormSubmit works)
// The form now submits directly to your FormSubmit endpoint (Nzokagwadv@gmail.com)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Do NOT use e.preventDefault(); This allows the action to process the form!
        // Optional: You can add a simple loading state here if desired
        // e.g., document.querySelector('.btn-primary').innerText = 'Sending...';
    });
}

// Form validation (Updated colors to match theme)
const formControls = document.querySelectorAll('.form-control');
formControls.forEach(control => {
    control.addEventListener('blur', function() {
        if (this.value.trim() === '' && this.hasAttribute('required')) {
            this.style.borderColor = '#e74c3c'; // Error red
        } else {
            this.style.borderColor = 'rgba(0,0,0,0.08)'; // var(--border)
        }
    });
    
    control.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            this.style.borderColor = 'rgba(0,0,0,0.08)'; // var(--border)
        }
    });
});

// Dynamic Year (Safety net if not already in HTML)
document.getElementById("y").textContent = new Date().getFullYear();