// Navigation functionality
let activeSection = 'home';

// CCS Image carousel
const ccsImages = [
    "https://edevhindi.com/media/images/ccs/ccs (1).png",
    "https://edevhindi.com/media/images/ccs/ccs (2).png",
    "https://edevhindi.com/media/images/ccs/ccs (3).png",
    "https://edevhindi.com/media/images/ccs/ccs (4).png",
    "https://edevhindi.com/media/images/ccs/ccs (5).png",
    "https://edevhindi.com/media/images/ccs/ccs (6).png",
    "https://edevhindi.com/media/images/ccs/ccs (7).png"
];

let currentCCSImage = 0;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeMobileMenu();
    initializeScrollToTop();
    initializeContactForm();
    initializeCCSCarousel();
    updateActiveNavigation();
});

// Navigation functions
function initializeNavigation() {
    // Handle scroll events for active section highlighting
    window.addEventListener('scroll', handleScroll);
    
    // Set initial active section
    updateActiveNavigation();
}

function handleScroll() {
    const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
    const scrollPosition = window.pageYOffset + 100;

    for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                if (activeSection !== section) {
                    activeSection = section;
                    updateActiveNavigation();
                }
                break;
            }
        }
    }

    // Handle scroll to top button visibility
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.remove('opacity-0', 'invisible');
        scrollToTopBtn.classList.add('opacity-100', 'visible');
    } else {
        scrollToTopBtn.classList.add('opacity-0', 'invisible');
        scrollToTopBtn.classList.remove('opacity-100', 'visible');
    }
}

function updateActiveNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const section = link.getAttribute('data-section');
        if (section === activeSection) {
            link.classList.remove('text-white', 'hover:text-accent', 'hover:bg-accent/5');
            link.classList.add('text-accent', 'bg-accent/10', 'border', 'border-accent/30');
        } else {
            link.classList.add('text-white', 'hover:text-accent', 'hover:bg-accent/5');
            link.classList.remove('text-accent', 'bg-accent/10', 'border', 'border-accent/30');
        }
    });
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.add('hidden');
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
}

// Scroll to top functionality
function initializeScrollToTop() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Create mailto link
        const mailtoLink = `mailto:heera9331@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Open email client
        window.location.href = mailtoLink;
    });
}

// CCS Image carousel functionality
function initializeCCSCarousel() {
    // Auto-rotate images every 3 seconds
    setInterval(() => {
        currentCCSImage = (currentCCSImage + 1) % ccsImages.length;
        updateCCSImage();
        updateCCSDots();
    }, 3000);
}

function setCCSImage(index) {
    currentCCSImage = index;
    updateCCSImage();
    updateCCSDots();
}

function updateCCSImage() {
    const imageElement = document.getElementById('ccs-image');
    if (imageElement) {
        imageElement.src = ccsImages[currentCCSImage];
    }
}

function updateCCSDots() {
    const dots = document.querySelectorAll('.ccs-dot');
    dots.forEach((dot, index) => {
        if (index === currentCCSImage) {
            dot.classList.remove('bg-gray-600', 'hover:bg-gray-500');
            dot.classList.add('bg-accent');
        } else {
            dot.classList.add('bg-gray-600', 'hover:bg-gray-500');
            dot.classList.remove('bg-accent');
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    img.addEventListener('error', function() {
        console.log('Image failed to load:', this.src);
    });
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

// Observe sections for animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add smooth hover effects for service cards
document.querySelectorAll('.group').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Performance optimization: Debounce scroll events
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

// Apply debouncing to scroll handler
window.addEventListener('scroll', debounce(handleScroll, 10));
