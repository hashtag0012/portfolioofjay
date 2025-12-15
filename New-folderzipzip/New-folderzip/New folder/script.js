// Enhanced Profile Card Interactions
function initProfileCard() {
    const profileCard = document.getElementById('profileCard');
    if (!profileCard) return;
    
    let isHovering = false;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    
    // Mouse move handler for enhanced tilt effect
    const handleMouseMove = (e) => {
        if (!isHovering) return;
        
        const rect = profileCard.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        mouseX = (e.clientX - centerX) / (rect.width / 2);
        mouseY = (e.clientY - centerY) / (rect.height / 2);
    };
    
    // Animation loop for smooth enhanced tilt
    const animate = () => {
        if (isHovering) {
            currentX += (mouseX - currentX) * 0.15;
            currentY += (mouseY - currentY) * 0.15;
            
            const rotateY = currentX * 25;
            const rotateX = -currentY * 25;
            
            profileCard.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(-8px)`;
        } else {
            currentX += (0 - currentX) * 0.1;
            currentY += (0 - currentY) * 0.1;
            profileCard.style.transform = `rotateY(${currentX}deg) rotateX(${currentY}deg) translateY(0)`;
        }
        
        requestAnimationFrame(animate);
    };
    
    // Event listeners
    profileCard.addEventListener('mouseenter', () => {
        isHovering = true;
    });
    
    profileCard.addEventListener('mouseleave', () => {
        isHovering = false;
    });
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Start animation loop
    animate();
}

// Counter Animation for Stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Start animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Smooth Scroll Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initProfileCard();
    animateCounters();
});

// Portfolio Filter Functionality
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            portfolioCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Counting Animation for Hero Stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const suffix = counter.getAttribute('data-suffix') || '';
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + suffix;
            }
        };
        
        // Start animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
}

// View Project Function
function viewProject(projectId) {
    // In a real implementation, this would open a modal or navigate to project details
    console.log('Viewing project:', projectId);
    // For now, we'll just show an alert
    alert(`Opening project details for: ${projectId}`);
}

// Smooth Scroll Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize everything on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize portfolio filter
    initPortfolioFilter();
    
    // Initialize counting animations
    animateCounters();
    
    // Add entrance animations for portfolio cards
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
    
    // Add hover effects to portfolio cards
    portfolioCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const cardImage = card.querySelector('.card-image img');
            if (cardImage) {
                cardImage.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const cardImage = card.querySelector('.card-image img');
            if (cardImage) {
                cardImage.style.transform = 'scale(1)';
            }
        });
    });
    
    // Add scroll animations for skill chips
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe skill chips
    const skillChips = document.querySelectorAll('.skill-chip');
    skillChips.forEach((chip, index) => {
        chip.style.opacity = '0';
        chip.style.transform = 'translateY(20px)';
        chip.style.transition = `all 0.5s ease ${index * 0.1}s`;
        observer.observe(chip);
    });
});

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navbar = document.querySelector('.navbar');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Add magnetic effect to buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
    });
});

// Add active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active navigation link
const activeNavCSS = `
    .nav-link.active {
        color: #ffffff !important;
        text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;

const activeNavStyleSheet = document.createElement('style');
activeNavStyleSheet.textContent = activeNavCSS;
document.head.appendChild(activeNavStyleSheet);
