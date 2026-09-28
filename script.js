/* ==========================================================================
   BUILDCRAFT CONSTRUCTIONS - INTERACTIVE JAVASCRIPT ENGINE
   Features: ScrollSpy, Counter Ticker, Filter Grid, Testimonial Carousel,
   Accordion FAQ, Lightbox Modal, Quote Modal, Form Validation & Toasts
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    /* ----------------------------------------------------
       1. STICKY NAVBAR & SCROLLSPY
       ---------------------------------------------------- */
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // ScrollSpy Active Link Update
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Initial check

    /* ----------------------------------------------------
       2. MOBILE HAMBURGER DRAWER MENU
       ---------------------------------------------------- */
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll', navMenu.classList.contains('active'));
        });

        // Close mobile drawer when clicking any link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    /* ----------------------------------------------------
       3. INTERSECTION OBSERVER - SCROLL REVEAL ANIMATIONS
       ---------------------------------------------------- */
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('reveal-active');
                }, parseInt(delay));
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    /* ----------------------------------------------------
       4. ANIMATED STATISTICS COUNTER TICKER
       ---------------------------------------------------- */
    const statCards = document.querySelectorAll('.stat-number');
    let countersStarted = false;

    function animateCounters() {
        statCards.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const startTime = performance.now();

            function updateCount(currentTime) {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                
                // Ease out quad formula
                const easeOutQuad = progress * (2 - progress);
                const currentVal = Math.floor(easeOutQuad * target);

                counter.innerText = currentVal;

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target;
                }
            }

            requestAnimationFrame(updateCount);
        });
    }

    const statsSection = document.getElementById('stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !countersStarted) {
                countersStarted = true;
                animateCounters();
            }
        }, { threshold: 0.3 });

        statsObserver.observe(statsSection);
    }

    /* ----------------------------------------------------
       5. FEATURED PROJECTS FILTERING
       ---------------------------------------------------- */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.filter-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.classList.contains(filterValue)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    /* ----------------------------------------------------
       6. TESTIMONIALS AUTO-SLIDING CAROUSEL
       ---------------------------------------------------- */
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        if (index < 0) index = testimonialCards.length - 1;
        if (index >= testimonialCards.length) index = 0;

        currentSlide = index;

        testimonialCards.forEach((card, i) => {
            card.classList.toggle('active', i === currentSlide);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }

    function startAutoSlide() {
        slideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            stopAutoSlide();
            showSlide(currentSlide - 1);
            startAutoSlide();
        });

        nextBtn.addEventListener('click', () => {
            stopAutoSlide();
            showSlide(currentSlide + 1);
            startAutoSlide();
        });

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                stopAutoSlide();
                showSlide(i);
                startAutoSlide();
            });
        });

        const carouselContainer = document.getElementById('testimonialCarousel');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', stopAutoSlide);
            carouselContainer.addEventListener('mouseleave', startAutoSlide);
        }

        startAutoSlide();
    }

    /* ----------------------------------------------------
       7. FAQ ACCORDION LOGIC (SINGLE OPEN ITEM)
       ---------------------------------------------------- */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other accordion items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-header').setAttribute('aria-expanded', 'false');
            });

            // Toggle clicked item
            if (!isActive) {
                item.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
            }
        });
    });

    /* ----------------------------------------------------
       8. MODAL DIALOG CONTROLS (QUOTE & PROJECT DETAILS)
       ---------------------------------------------------- */
    // Get Quote Modal
    const quoteModal = document.getElementById('quoteModal');
    const openQuoteBtn = document.getElementById('openQuoteBtn');
    const closeQuoteModal = document.getElementById('closeQuoteModal');

    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (openQuoteBtn && quoteModal && closeQuoteModal) {
        openQuoteBtn.addEventListener('click', () => openModal(quoteModal));
        closeQuoteModal.addEventListener('click', () => closeModal(quoteModal));
        
        quoteModal.addEventListener('click', (e) => {
            if (e.target === quoteModal) closeModal(quoteModal);
        });
    }

    // Project Details Modal
    const projectModal = document.getElementById('projectModal');
    const closeProjectModal = document.getElementById('closeProjectModal');
    const openProjectBtns = document.querySelectorAll('.open-project-modal');

    if (projectModal && closeProjectModal) {
        openProjectBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const dataset = btn.dataset;

                document.getElementById('modalProjectImg').src = dataset.img;
                document.getElementById('modalProjectTitle').innerText = dataset.title;
                document.getElementById('modalProjectCategory').innerText = dataset.category;
                document.getElementById('modalProjectLocation').innerText = dataset.location;
                document.getElementById('modalProjectArea').innerText = dataset.area;
                document.getElementById('modalProjectCompletion').innerText = dataset.completion;
                document.getElementById('modalProjectDesc').innerText = dataset.desc;

                openModal(projectModal);
            });
        });

        closeProjectModal.addEventListener('click', () => closeModal(projectModal));
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) closeModal(projectModal);
        });
    }

    /* ----------------------------------------------------
       9. FORM VALIDATION & TOAST NOTIFICATION SYSTEM
       ---------------------------------------------------- */
    const toastContainer = document.getElementById('toastContainer');

    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <i class="${type === 'success' ? 'fa-solid fa-circle-check' : 'fa-solid fa-triangle-exclamation'}"></i>
            <div>
                <strong>${type === 'success' ? 'Success!' : 'Notice'}</strong>
                <p style="margin: 0; font-size: 0.85rem;">${message}</p>
            </div>
        `;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'toastIn 0.4s ease reverse forwards';
            setTimeout(() => toast.remove(), 400);
        }, 4000);
    }

    // Main Contact Form
    const mainContactForm = document.getElementById('mainContactForm');

    if (mainContactForm) {
        mainContactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const name = document.getElementById('contactName');
            const email = document.getElementById('contactEmail');
            const phone = document.getElementById('contactPhone');
            const service = document.getElementById('contactService');
            const message = document.getElementById('contactMessage');

            // Reset error states
            document.querySelectorAll('.form-group').forEach(fg => fg.classList.remove('invalid'));

            if (!name.value.trim()) {
                name.closest('.form-group').classList.add('invalid');
                isValid = false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
                email.closest('.form-group').classList.add('invalid');
                isValid = false;
            }

            if (!phone.value.trim()) {
                phone.closest('.form-group').classList.add('invalid');
                isValid = false;
            }

            if (!service.value) {
                service.closest('.form-group').classList.add('invalid');
                isValid = false;
            }

            if (!message.value.trim()) {
                message.closest('.form-group').classList.add('invalid');
                isValid = false;
            }

            if (isValid) {
                showToast('Thank you! Your project inquiry has been received. Our team will contact you within 24 hours.', 'success');
                mainContactForm.reset();
            } else {
                showToast('Please fill out all required fields accurately.', 'error');
            }
        });
    }

    // Modal Quote Form
    const quoteModalForm = document.getElementById('quoteModalForm');
    if (quoteModalForm) {
        quoteModalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Your quote request has been submitted! Our estimating desk will reach out shortly.', 'success');
            quoteModalForm.reset();
            closeModal(quoteModal);
        });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Subscribed! Thank you for joining our architectural newsletter.', 'success');
            newsletterForm.reset();
        });
    }

    /* ----------------------------------------------------
       10. BUTTON RIPPLE EFFECT
       ---------------------------------------------------- */
    const rippleButtons = document.querySelectorAll('.btn-ripple');

    rippleButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            const circle = document.createElement('span');
            circle.classList.add('ripple');

            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            circle.style.width = circle.style.height = `${size}px`;
            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;

            const existingRipple = button.querySelector('.ripple');
            if (existingRipple) existingRipple.remove();

            button.appendChild(circle);
        });
    });

});
