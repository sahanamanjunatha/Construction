/* ==========================================================================
   BUILDCRAFT CONSTRUCTIONS - NIA CONSTRUCTION CLONE JAVASCRIPT
   Handles: Hero Image Slider, Header Stickiness, Mobile Menu, Dropdowns,
   Quote Modal Popup & Form Submissions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------
       1. HERO IMAGE SLIDER CONTROLS
       ---------------------------------------------------- */
    const heroSlides = document.querySelectorAll('.hero-slide');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    let currentSlide = 0;
    let slideTimer;

    function showSlide(index) {
        if (!heroSlides.length) return;
        
        if (index < 0) {
            currentSlide = heroSlides.length - 1;
        } else if (index >= heroSlides.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        heroSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentSlide);
        });
    }

    function startSlideTimer() {
        if (!heroSlides.length) return;
        slideTimer = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    }

    function resetSlideTimer() {
        clearInterval(slideTimer);
        startSlideTimer();
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
            resetSlideTimer();
        });

        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
            resetSlideTimer();
        });

        startSlideTimer();
    }

    /* ----------------------------------------------------
       2. MOBILE HAMBURGER MENU & DROPDOWN TOGGLE
       ---------------------------------------------------- */
    const mobileToggle = document.getElementById('mobileToggle');
    const mainNav = document.getElementById('mainNav');

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });
    }

    // Dropdown toggle on mobile touch
    const navItemsWithDropdown = document.querySelectorAll('.nav-item.has-dropdown');
    navItemsWithDropdown.forEach(item => {
        const link = item.querySelector('.nav-link');
        if (link) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    item.classList.toggle('open');
                }
            });
        }
    });

    /* ----------------------------------------------------
       3. GET A QUOTE MODAL CONTROLS
       ---------------------------------------------------- */
    const quoteModal = document.getElementById('quoteModal');
    const quoteBtns = document.querySelectorAll('.open-quote-btn');
    const closeQuoteBtn = document.getElementById('closeQuoteModal');

    function openQuoteModal() {
        if (quoteModal) {
            quoteModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeQuoteModal() {
        if (quoteModal) {
            quoteModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    quoteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openQuoteModal();
        });
    });

    if (closeQuoteBtn) {
        closeQuoteBtn.addEventListener('click', closeQuoteModal);
    }

    if (quoteModal) {
        quoteModal.addEventListener('click', (e) => {
            if (e.target === quoteModal) {
                closeQuoteModal();
            }
        });
    }

    /* ----------------------------------------------------
       4. FORM VALIDATION & SUCCESS FEEDBACK
       ---------------------------------------------------- */
    // Quote Modal Form
    const quoteModalForm = document.getElementById('quoteModalForm');
    const quoteAlert = document.getElementById('quoteAlert');

    if (quoteModalForm && quoteAlert) {
        quoteModalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            quoteAlert.innerText = "Thank you! Your request has been submitted successfully.";
            quoteAlert.className = "form-alert success";
            quoteAlert.style.display = "block";

            setTimeout(() => {
                quoteModalForm.reset();
                quoteAlert.style.display = "none";
                closeQuoteModal();
            }, 3000);
        });
    }

    // Contact Page Form
    const contactPageForm = document.getElementById('contactPageForm');
    const contactAlert = document.getElementById('contactAlert');

    if (contactPageForm && contactAlert) {
        contactPageForm.addEventListener('submit', (e) => {
            e.preventDefault();
            contactAlert.innerText = "Thank you! Your request has been submitted successfully.";
            contactAlert.className = "form-alert success";
            contactAlert.style.display = "block";

            setTimeout(() => {
                contactPageForm.reset();
                contactAlert.style.display = "none";
            }, 4000);
        });
    }

});
