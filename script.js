/* ========================================
   TOXIC MOVIE WEBSITE — JAVASCRIPT
   ========================================
   
   CONFIGURATION:
   Edit the URLs below to set your button destinations.
   Edit SITE_CONFIG to set your GitHub Pages URL.
   ======================================== */

// ── SITE CONFIGURATION ──
const SITE_CONFIG = {
    siteUrl: "https://new-moviez.github.io/toxic/"
};

// ── MOVIE LINK CONFIGURATION ──
// Replace placeholder URLs with your actual destinations.
const MOVIE_LINKS = {
    watchNow:     "http://tiny.cc/imgame",
    watch1080:    "http://tiny.cc/imgame-1080p",
    watch720:     "http://tiny.cc/imgame-720p",
    download:     "http://tiny.cc/imgame-download",
    newReleases:  "https://f1moviez.blogspot.com/"
};

/* ── Initialize ── */
document.addEventListener('DOMContentLoaded', function () {
    initButtonLinks();
    initHeader();
    initMobileMenu();
    initScrollProgress();
    initBackToTop();
    initRevealAnimations();
    initFAQ();
    initGalleryLightbox();
    initSocialShare();
});

/* ========== BUTTON LINK ASSIGNMENT ========== */
function initButtonLinks() {
    const linkButtons = document.querySelectorAll('[data-link]');

    linkButtons.forEach(function (el) {
        const key = el.getAttribute('data-link');
        const url = MOVIE_LINKS[key];

        if (url && !url.startsWith('OFFICIAL_')) {
            el.setAttribute('href', url);
            el.setAttribute('target', '_blank');
            el.setAttribute('rel', 'noopener noreferrer');
        } else {
            // Placeholder — keep href as # and scroll to action section
            el.setAttribute('href', '#action-buttons');
        }
    });
}

/* ========== HEADER SCROLL ========== */
function initHeader() {
    const header = document.getElementById('siteHeader');
    let lastScroll = 0;

    function onScroll() {
        const scrollY = window.scrollY || window.pageYOffset;

        if (scrollY > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = scrollY;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* ========== MOBILE MENU ========== */
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', function () {
        const isOpen = mobileMenu.classList.contains('open');

        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', !isOpen);
        mobileMenu.setAttribute('aria-hidden', isOpen);

        document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    mobileLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        });
    });
}

/* ========== SCROLL PROGRESS BAR ========== */
function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;

    function updateProgress() {
        const scrollTop = window.scrollY || window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = progress + '%';
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
}

/* ========== BACK TO TOP ========== */
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    function toggleVisibility() {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    toggleVisibility();
}

/* ========== REVEAL ON SCROLL ========== */
function initRevealAnimations() {
    const reveals = document.querySelectorAll('.reveal');

    if (!reveals.length) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        reveals.forEach(function (el) {
            el.classList.add('revealed');
        });
        return;
    }

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        reveals.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback for old browsers
        reveals.forEach(function (el) {
            el.classList.add('revealed');
        });
    }
}

/* ========== FAQ ACCORDION ========== */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (!question || !answer) return;

        question.addEventListener('click', function () {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(function (otherItem) {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                    otherItem.querySelector('.faq-answer').setAttribute('aria-hidden', 'true');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
            question.setAttribute('aria-expanded', !isActive);
            answer.setAttribute('aria-hidden', isActive);
        });
    });
}

/* ========== GALLERY LIGHTBOX ========== */
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    if (!galleryItems.length || !lightbox) return;

    const images = [];
    galleryItems.forEach(function (item) {
        const img = item.querySelector('img');
        if (img) {
            images.push({
                src: img.src,
                alt: img.alt
            });
        }
    });

    let currentIndex = 0;

    function openLightbox(index) {
        currentIndex = index;
        if (images[currentIndex]) {
            lightboxImg.src = images[currentIndex].src;
            lightboxImg.alt = images[currentIndex].alt;
        }
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
        lightboxImg.alt = images[currentIndex].alt;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
        lightboxImg.alt = images[currentIndex].alt;
    }

    galleryItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const index = parseInt(item.getAttribute('data-index'), 10);
            openLightbox(index);
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);
    if (nextBtn) nextBtn.addEventListener('click', showNext);

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });
}

/* ========== SOCIAL SHARE ========== */
function initSocialShare() {
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);
    const shareText = encodeURIComponent('Check out Toxic – A Fairy Tale for Grown-Ups!');

    // Facebook
    const fbBtn = document.getElementById('shareFacebook');
    if (fbBtn) {
        fbBtn.addEventListener('click', function () {
            window.open(
                'https://www.facebook.com/sharer/sharer.php?u=' + pageUrl,
                '_blank',
                'width=600,height=400,noopener,noreferrer'
            );
        });
    }

    // Twitter / X
    const xBtn = document.getElementById('shareTwitter');
    if (xBtn) {
        xBtn.addEventListener('click', function () {
            window.open(
                'https://twitter.com/intent/tweet?url=' + pageUrl + '&text=' + shareText,
                '_blank',
                'width=600,height=400,noopener,noreferrer'
            );
        });
    }

    // WhatsApp
    const waBtn = document.getElementById('shareWhatsApp');
    if (waBtn) {
        waBtn.addEventListener('click', function () {
            // Check for mobile Web Share API first
            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    text: 'Check out Toxic – A Fairy Tale for Grown-Ups!',
                    url: window.location.href
                }).catch(function () {
                    // User cancelled or error — fall back to WhatsApp URL
                    window.open(
                        'https://wa.me/?text=' + shareText + '%20' + pageUrl,
                        '_blank',
                        'noopener,noreferrer'
                    );
                });
            } else {
                window.open(
                    'https://wa.me/?text=' + shareText + '%20' + pageUrl,
                    '_blank',
                    'noopener,noreferrer'
                );
            }
        });
    }

    // Copy Link
    const copyBtn = document.getElementById('shareCopy');
    if (copyBtn) {
        copyBtn.addEventListener('click', function () {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(window.location.href).then(function () {
                    showCopyFeedback(copyBtn);
                }).catch(function () {
                    fallbackCopy();
                });
            } else {
                fallbackCopy();
            }
        });
    }

    function fallbackCopy() {
        var textArea = document.createElement('textarea');
        textArea.value = window.location.href;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            showCopyFeedback(copyBtn);
        } catch (err) {
            // Silent fail
        }
        document.body.removeChild(textArea);
    }

    function showCopyFeedback(btn) {
        if (!btn) return;
        var original = btn.innerHTML;
        btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
        btn.style.borderColor = 'rgba(201, 168, 76, 0.5)';
        setTimeout(function () {
            btn.innerHTML = original;
            btn.style.borderColor = '';
        }, 2000);
    }
}
