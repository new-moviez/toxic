/* ================================================
   TOXIC - Premium Cinematic Movie Website
   JavaScript Functionality
   ================================================ */

/* ================================================
   CONFIGURATION
   ================================================ */

// Site Configuration
const SITE_CONFIG = {
    siteUrl: "https://USERNAME.github.io/REPOSITORY/"
};

// Movie Links Configuration - EDIT THESE URLs
const MOVIE_LINKS = {
    watchNow: "OFFICIAL_WATCH_URL",
    watch1080: "OFFICIAL_1080P_URL",
    watch720: "OFFICIAL_720P_URL",
    download: "OFFICIAL_DOWNLOAD_URL",
    newReleases: "OFFICIAL_NEW_RELEASES_URL"
};

/* ================================================
   DOM ELEMENTS
   ================================================ */

const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const scrollProgress = document.getElementById('scrollProgress');
const backToTop = document.getElementById('backToTop');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

/* ================================================
   GALLERY DATA
   ================================================ */

const galleryImages = [
    {
        src: "https://image.tmdb.org/t/p/original/gldXlcAUrTneLYNxeus94VhNBHs.jpg",
        alt: "Toxic movie cinematic promotional image",
        caption: "Cinematic Promotional Image"
    },
    {
        src: "https://image.tmdb.org/t/p/original/18ppEbuTLceBS81OPvASHa0uZdz.jpg",
        alt: "Toxic movie promotional poster",
        caption: "Promotional Poster"
    },
    {
        src: "https://image.tmdb.org/t/p/original/rbredqy4Ha2BPLvIWWRNveAWvtp.jpg",
        alt: "Toxic movie poster",
        caption: "Official Poster"
    },
    {
        src: "https://image.tmdb.org/t/p/original/4lYJXDBMfF79qZj9JCdUPj03OZ0.jpg",
        alt: "Toxic dark cinematic poster",
        caption: "Dark Cinematic Poster"
    },
    {
        src: "https://image.tmdb.org/t/p/original/oKsnKOU3P0HyUWLS7xJfNmPzDUD.jpg",
        alt: "Toxic additional promotional poster",
        caption: "Additional Promotional Poster"
    }
];

let currentImageIndex = 0;

/* ================================================
   INITIALIZE
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {
    initializeButtonLinks();
    initializeNavigation();
    initializeScrollEffects();
    initializeGallery();
    initializeFAQ();
    initializeShare();
    initializeScrollReveal();
    initializeBackToTop();
});

/* ================================================
   BUTTON LINKS INITIALIZATION
   ================================================ */

function initializeButtonLinks() {
    const linkButtons = document.querySelectorAll('[data-link]');
    
    linkButtons.forEach(button => {
        const linkKey = button.getAttribute('data-link');
        const url = MOVIE_LINKS[linkKey];
        
        if (url && url !== 'OFFICIAL_WATCH_URL' && url !== 'OFFICIAL_1080P_URL' && 
            url !== 'OFFICIAL_720P_URL' && url !== 'OFFICIAL_DOWNLOAD_URL' && 
            url !== 'OFFICIAL_NEW_RELEASES_URL') {
            
            // Convert button to link if it has a valid URL
            if (button.tagName === 'BUTTON') {
                button.onclick = () => {
                    window.open(url, '_blank', 'noopener,noreferrer');
                };
            } else {
                button.href = url;
                button.target = '_blank';
                button.rel = 'noopener noreferrer';
            }
        } else {
            // Placeholder behavior
            button.onclick = (e) => {
                e.preventDefault();
                alert('Movie links will be updated soon. Please check back later!');
            };
        }
    });
}

/* ================================================
   NAVIGATION
   ================================================ */

function initializeNavigation() {
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ================================================
   SCROLL EFFECTS
   ================================================ */

function initializeScrollEffects() {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Header background on scroll
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Scroll progress bar
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (currentScroll / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
        
        lastScroll = currentScroll;
    });
}

/* ================================================
   GALLERY & LIGHTBOX
   ================================================ */

function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });
    
    // Lightbox controls
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    lightboxNext.addEventListener('click', () => navigateLightbox(1));
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });
}

function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateLightbox(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }
    
    updateLightboxImage();
}

function updateLightboxImage() {
    const image = galleryImages[currentImageIndex];
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = image.caption;
}

/* ================================================
   FAQ ACCORDION
   ================================================ */

function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

/* ================================================
   SOCIAL SHARE
   ================================================ */

function initializeShare() {
    const shareButtons = document.querySelectorAll('[data-share]');
    const shareMessage = document.getElementById('shareMessage');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', () => {
            const shareType = button.getAttribute('data-share');
            handleShare(shareType, shareMessage);
        });
    });
}

function handleShare(type, messageElement) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    const text = encodeURIComponent('Check out TOXIC - A Fairy Tale for Grown-Ups');
    
    let shareUrl = '';
    
    switch(type) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            window.open(shareUrl, '_blank', 'width=600,height=400');
            showShareMessage(messageElement, 'Shared to Facebook!');
            break;
            
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
            window.open(shareUrl, '_blank', 'width=600,height=400');
            showShareMessage(messageElement, 'Shared to X!');
            break;
            
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${text}%20${url}`;
            window.open(shareUrl, '_blank');
            showShareMessage(messageElement, 'Shared to WhatsApp!');
            break;
            
        case 'copy':
            copyToClipboard(window.location.href, messageElement);
            break;
    }
}

function copyToClipboard(text, messageElement) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showShareMessage(messageElement, 'Link copied to clipboard!');
        }).catch(() => {
            fallbackCopy(text, messageElement);
        });
    } else {
        fallbackCopy(text, messageElement);
    }
}

function fallbackCopy(text, messageElement) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showShareMessage(messageElement, 'Link copied to clipboard!');
    } catch (err) {
        showShareMessage(messageElement, 'Failed to copy link');
    }
    
    document.body.removeChild(textArea);
}

function showShareMessage(element, message) {
    element.textContent = message;
    setTimeout(() => {
        element.textContent = '';
    }, 3000);
}

// Web Share API (for supported mobile devices)
if (navigator.share) {
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
            const shareType = button.getAttribute('data-share');
            
            if (shareType === 'copy') return; // Skip for copy button
            
            try {
                await navigator.share({
                    title: 'TOXIC - A Fairy Tale for Grown-Ups',
                    text: 'Check out TOXIC movie - A cinematic masterpiece',
                    url: window.location.href
                });
            } catch (err) {
                // Fallback to default sharing behavior
            }
        });
    });
}

/* ================================================
   SCROLL REVEAL ANIMATION
   ================================================ */

function initializeScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('revealed');
            }
        });
    };
    
    // Initial check
    revealOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);
}

/* ================================================
   BACK TO TOP BUTTON
   ================================================ */

function initializeBackToTop() {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ================================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ================================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* ================================================
   PERFORMANCE OPTIMIZATIONS
   ================================================ */

// Lazy loading for images (native)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support native lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(() => {
    // Scroll-dependent operations
}));

/* ================================================
   ACCESSIBILITY ENHANCEMENTS
   ================================================ */

// Focus management for modal/lightbox
lightbox.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        const focusableElements = lightbox.querySelectorAll('button');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
});

// Skip to main content link (optional enhancement)
const skipLink = document.createElement('a');
skipLink.href = '#main-content';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--color-gold);
    color: var(--color-black);
    padding: 8px;
    text-decoration: none;
    z-index: 10001;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

/* ================================================
   ERROR HANDLING
   ================================================ */

window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});

// Handle image loading errors
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
        console.warn('Failed to load image:', this.src);
    });
});

/* ================================================
   CONSOLE MESSAGE
   ================================================ */

console.log('%cTOXIC - A Fairy Tale for Grown-Ups', 'font-size: 24px; font-weight: bold; color: #d4af37;');
console.log('%cWebsite loaded successfully', 'font-size: 14px; color: #9ca3af;');
console.log('%cTo update movie links, edit the MOVIE_LINKS object in script.js', 'font-size: 12px; color: #9ca3af;');