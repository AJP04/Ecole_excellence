// ===== NAVIGATION MOBILE =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');

// Toggle menu mobile
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// ===== NAVBAR SCROLL EFFECT =====
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Effet de transparence sur la navbar
    if (currentScrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
    
    lastScrollY = currentScrollY;
});

// ===== SMOOTH SCROLLING POUR LES ANCRES =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Compensation pour la navbar fixe
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== ANIMATIONS AU SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.value-card, .program-card, .news-card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// ===== NAVIGATION ACTIVE LINK =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// ===== LOADING ANIMATION =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== PERFORMANCE ET ACCESSIBILITÉ =====

// Lazy loading pour les images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Gestion des erreurs d'images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmaWxsPSIjOTk5Ij5JbWFnZSBub24gZGlzcG9uaWJsZTwvdGV4dD48L3N2Zz4=';
        this.alt = 'Image non disponible';
    });
});

// ===== UTILITAIRES =====

// Debounce function pour optimiser les performances
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Gestion du redimensionnement de la fenêtre
const handleResize = debounce(() => {
    // Fermer le menu mobile si la fenêtre devient plus grande
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}, 250);

window.addEventListener('resize', handleResize);

// ===== INTERACTIONS CLAVIER =====
document.addEventListener('keydown', (e) => {
    // Fermer le menu mobile avec Escape
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ===== ANALYTICS ET TRACKING =====
// Fonction pour tracker les interactions utilisateur
function trackEvent(category, action, label = '') {
    // Placeholder pour Google Analytics ou autre système de tracking
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Tracker les clics sur les boutons CTA
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const buttonText = e.target.textContent.trim();
        trackEvent('Button', 'Click', buttonText);
    });
});

// ===== FORMULAIRES (pour les pages futures) =====
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===== NOTIFICATIONS =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#059669';
            break;
        case 'error':
            notification.style.backgroundColor = '#dc2626';
            break;
        case 'warning':
            notification.style.backgroundColor = '#d97706';
            break;
        default:
            notification.style.backgroundColor = '#2563eb';
    }
    
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animation de sortie
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ===== PRÉCHARGEMENT DES PAGES =====
function preloadPage(url) {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
}

// Précharger les pages importantes au hover
document.querySelectorAll('a[href$=".html"]').forEach(link => {
    let preloaded = false;
    link.addEventListener('mouseenter', () => {
        if (!preloaded) {
            preloadPage(link.href);
            preloaded = true;
        }
    });
});

// ===== INITIALISATIONS =====
document.addEventListener('DOMContentLoaded', () => {
    // Ajouter des classes pour les animations CSS
    document.body.classList.add('js-enabled');
    
    // Initialiser les tooltips si nécessaire
    const elementsWithTooltip = document.querySelectorAll('[data-tooltip]');
    elementsWithTooltip.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
    
    // ===== GESTION DES ONGLETS PROGRAMMES =====
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                
                // Retirer la classe active de tous les boutons et panneaux
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanels.forEach(panel => panel.classList.remove('active'));
                
                // Ajouter la classe active au bouton cliqué et au panneau correspondant
                button.classList.add('active');
                const targetPanel = document.getElementById(targetTab);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
                
                // Animation d'entrée douce
                if (targetPanel) {
                    targetPanel.style.opacity = '0';
                    targetPanel.style.transform = 'translateY(10px)';
                    
                    setTimeout(() => {
                        targetPanel.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        targetPanel.style.opacity = '1';
                        targetPanel.style.transform = 'translateY(0)';
                    }, 50);
                }
            });
        });
    }

    console.log('Site École Excellence initialisé avec succès !');
});

// ===== FONCTIONS TOOLTIP =====
function showTooltip(e) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = e.target.dataset.tooltip;
    tooltip.style.cssText = `
        position: absolute;
        background: #1f2937;
        color: white;
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.875rem;
        z-index: 10000;
        pointer-events: none;
        white-space: nowrap;
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}