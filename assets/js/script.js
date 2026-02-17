// ============================================
// ERTH Corporate Website - Main JavaScript
// ============================================

// Language Management
let currentLang = localStorage.getItem('lang') || 'en';

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    initializeNavigation();
    initializeAnimations();
    initializeScrollToTop();
    initializeCounters();
    activePageHighlight();

    // Ensure page-specific content is loaded after DOM is ready
    // This fixes race conditions where content might not load on first visit
    const pageName = document.body.getAttribute('data-page');
    if (pageName) {
        updatePageContent(currentLang);
    }
});

// ============================================
// LANGUAGE SWITCHING
// ============================================

function initializeLanguage() {
    applyLanguage(currentLang);

    // Add language toggle listener
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
        updateLangToggleText();
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('lang', currentLang);
    applyLanguage(currentLang);
    updateLangToggleText();
}

function applyLanguage(lang) {
    const html = document.documentElement;

    // Set direction
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    html.setAttribute('lang', lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let value = content[lang];

        keys.forEach(key => {
            value = value[key];
        });

        if (value) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = value;
            } else {
                element.textContent = value;
            }
        }
    });

    // Update page-specific content
    updatePageContent(lang);

    // Ensure language button is updated
    updateLangToggleText();
}

function updateLangToggleText() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = currentLang === 'en' ? 'العربية' : 'English';
    }
}

function updatePageContent(lang) {
    const pageName = document.body.getAttribute('data-page');

    if (!pageName) return;

    switch (pageName) {
        case 'home':
            updateHomePage(lang);
            break;
        case 'about':
            updateAboutPage(lang);
            break;
        case 'departments':
            updateDepartmentsPage(lang);
            break;
        case 'projects':
            updateProjectsPage(lang);
            break;
        case 'leadership':
            updateLeadershipPage(lang);
            break;
        case 'join':
            updateJoinPage(lang);
            break;
        case 'contact':
            updateContactPage(lang);
            break;
    }
}

// ============================================
// PAGE-SPECIFIC CONTENT UPDATES
// ============================================

function updateHomePage(lang) {
    const data = content[lang].home;

    // Update metrics
    const metricsContainer = document.getElementById('metrics-container');
    if (metricsContainer && data.metrics) {
        const metricsHTML = data.metrics.map(metric => `
            <div class="metric fade-in">
                <span class="metric-value" data-count="${metric.value}">${metric.value}${metric.suffix}</span>
                <span class="metric-label">${metric.label}</span>
            </div>
        `).join('');
        metricsContainer.innerHTML = metricsHTML;
        // Store in sessionStorage for persistence
        sessionStorage.setItem('metrics_' + lang, metricsHTML);
    } else if (metricsContainer && !data.metrics) {
        // Try to restore from sessionStorage if data is missing
        const cached = sessionStorage.getItem('metrics_' + lang);
        if (cached) metricsContainer.innerHTML = cached;
    }

    // Update stages
    const stagesContainer = document.getElementById('stages-container');
    if (stagesContainer && data.stages) {
        const stagesHTML = data.stages.map((stage, index) => `
            <div class="card fade-in">
                <div class="badge badge-info">${stage.stage}</div>
                <h3>${stage.title}</h3>
                <p>${stage.description}</p>
            </div>
        `).join('');
        stagesContainer.innerHTML = stagesHTML;
        sessionStorage.setItem('stages_' + lang, stagesHTML);
    } else if (stagesContainer && !data.stages) {
        const cached = sessionStorage.getItem('stages_' + lang);
        if (cached) stagesContainer.innerHTML = cached;
    }

    // Update testimonials
    const testimonialsContainer = document.getElementById('testimonials-container');
    if (testimonialsContainer && data.testimonials && data.testimonials.items) {
        const testimonialsHTML = data.testimonials.items.map(testimonial => `
            <div class="card fade-in" style="text-align: center;">
                <div style="width: 80px; height: 80px; margin: 0 auto 1rem; background: linear-gradient(135deg, var(--color-emerald), var(--color-blue)); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; font-weight: 800;">
                    ${testimonial.name.charAt(0)}
                </div>
                <h4 style="margin-bottom: 0.25rem;">${testimonial.name}</h4>
                <p style="color: var(--color-emerald); font-weight: 600; margin-bottom: 0.5rem; font-size: 0.875rem;">${testimonial.role}</p>
                <p style="color: var(--color-gray-500); font-size: 0.875rem; margin-bottom: 1rem;">${testimonial.year}</p>
                <p style="font-style: italic; color: var(--color-gray-600); line-height: 1.6; text-align: ${lang === 'ar' ? 'right' : 'left'};">${testimonial.quote}"</p>
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 2px solid var(--color-gray-200);">
                    <span class="badge badge-success">${testimonial.achievement}</span>
                </div>
            </div>
        `).join('');
        testimonialsContainer.innerHTML = testimonialsHTML;
        sessionStorage.setItem('testimonials_' + lang, testimonialsHTML);
    } else if (testimonialsContainer && (!data.testimonials || !data.testimonials.items)) {
        const cached = sessionStorage.getItem('testimonials_' + lang);
        if (cached) testimonialsContainer.innerHTML = cached;
    }

    // Re-initialize animations for dynamically added content
    observeElements();
}

function updateAboutPage(lang) {
    const data = content[lang].about;

    // Update evolution stages
    const evolutionContainer = document.getElementById('evolution-container');
    if (evolutionContainer && content[lang].home.stages) {
        evolutionContainer.innerHTML = content[lang].home.stages.map((stage, index) => `
            <div class="timeline-item fade-in">
                <div class="timeline-marker">${stage.stage}</div>
                <div class="timeline-content">
                    <h3>${stage.title}</h3>
                    <p>${stage.description}</p>
                </div>
            </div>
        `).join('');
    }

    observeElements();
}

function updateDepartmentsPage(lang) {
    const data = content[lang].departments;

    const deptsContainer = document.getElementById('departments-container');
    if (deptsContainer && data.depts) {
        deptsContainer.innerHTML = data.depts.map(dept => `
            <div class="card fade-in">
                <div class="card-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                </div>
                <h3>${dept.name}</h3>
                <p><strong>${dept.description}</strong></p>
                <h4 style="font-size: 1rem; margin-top: 1rem;">${lang === 'en' ? 'Key Responsibilities:' : 'المسؤوليات الرئيسية:'}</h4>
                <ul style="margin: 0.5rem 0; padding-${lang === 'ar' ? 'right' : 'left'}: 1.5rem; color: var(--color-gray-600);">
                    ${dept.responsibilities.map(resp => `<li style="margin-bottom: 0.25rem;">${resp}</li>`).join('')}
                </ul>
                <p style="margin-top: 1rem; font-size: 0.875rem; color: var(--color-emerald); font-weight: 600;">
                    <strong>${lang === 'en' ? 'Skills:' : 'المهارات:'}</strong> ${dept.skills}
                </p>
            </div>
        `).join('');
    }

    observeElements();
}

function updateProjectsPage(lang) {
    const data = content[lang].projects;

    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer && data.items) {
        projectsContainer.innerHTML = data.items.map(project => {
            const badgeClass = project.status === 'Simulation' || project.status === 'محاكاة' ? 'badge-info' : 'badge-success';
            return `
                <div class="card fade-in">
                    <div class="badge ${badgeClass}">${project.status}</div>
                    <h3 style="margin-top: 0.5rem;">${project.name}</h3>
                    <p>${project.description}</p>
                    <p style="margin-top: 1rem;"><strong>${lang === 'en' ? 'Results:' : 'النتائج:'}</strong> ${project.results}</p>
                    <p style="margin-top: 0.5rem; color: var(--color-emerald); font-weight: 600;">
                        <strong>${lang === 'en' ? 'Timeline:' : 'الجدول الزمني:'}</strong> ${project.timeline}
                    </p>
                </div>
            `;
        }).join('');
    }

    observeElements();
}

function updateLeadershipPage(lang) {
    const data = content[lang].leadership;

    const leadershipContainer = document.getElementById('leadership-container');
    if (leadershipContainer && data.team) {
        leadershipContainer.innerHTML = data.team.map(member => `
            <div class="card fade-in" style="text-align: center;">
                <h3 style="margin-bottom: 0.25rem;">${member.name}</h3>
                <p style="color: var(--color-emerald); font-weight: 600; margin-bottom: 1rem;">${member.title}</p>
                <p style="text-align: ${lang === 'ar' ? 'right' : 'left'};">${member.bio}</p>
            </div>
        `).join('');
    }

    observeElements();
}

function updateJoinPage(lang) {
    const data = content[lang].join;

    // Update why join points
    const whyJoinContainer = document.getElementById('why-join-container');
    if (whyJoinContainer && data.whyPoints) {
        const whyJoinHTML = data.whyPoints.map(point => `
            <div class="card fade-in">
                <p>${point}</p>
            </div>
        `).join('');
        whyJoinContainer.innerHTML = whyJoinHTML;
        // Cache in sessionStorage for persistence
        sessionStorage.setItem('whyJoin_' + lang, whyJoinHTML);
    } else if (whyJoinContainer && !data.whyPoints) {
        // Try to restore from sessionStorage if data is missing
        const cached = sessionStorage.getItem('whyJoin_' + lang);
        if (cached) whyJoinContainer.innerHTML = cached;
    }

    // Update process steps
    const processContainer = document.getElementById('process-container');
    if (processContainer && data.processSteps) {
        const processHTML = data.processSteps.map(step => `
            <div class="card fade-in" style="text-align: center;">
                <div style="width: 60px; height: 60px; margin: 0 auto 1rem; background: linear-gradient(135deg, var(--color-emerald), var(--color-blue)); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; font-weight: 800;">
                    ${step.step}
                </div>
                <h3>${step.title}</h3>
                <p>${step.description}</p>
            </div>
        `).join('');
        processContainer.innerHTML = processHTML;
        sessionStorage.setItem('process_' + lang, processHTML);
    } else if (processContainer && !data.processSteps) {
        const cached = sessionStorage.getItem('process_' + lang);
        if (cached) processContainer.innerHTML = cached;
    }

    observeElements();
}

function updateContactPage(lang) {
    // Contact page uses data-i18n attributes, handled by applyLanguage
}

// ============================================
// NAVIGATION
// ============================================

function initializeNavigation() {
    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navbarLinks = document.getElementById('navbar-links');

    if (mobileToggle && navbarLinks) {
        mobileToggle.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navbarLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navbarLinks.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

function activePageHighlight() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Check for home page
        if (currentPath === '/' && (href === '/' || href === '/index.html')) {
            link.classList.add('active');
        }
        // Check for other pages - handle both clean and .html extensions
        else if (href === currentPath || href === currentPath + '.html' || currentPath === href + '.html') {
            link.classList.add('active');
        }
    });
}

// ============================================
// ANIMATIONS
// ============================================

function initializeAnimations() {
    observeElements();
}

function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// SCROLL TO TOP
// ============================================

function initializeScrollToTop() {
    const scrollBtn = document.getElementById('scroll-to-top');

    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// ANIMATED COUNTERS
// ============================================

function initializeCounters() {
    const counters = document.querySelectorAll('.metric-value[data-count]');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const suffix = counter.textContent.replace(/[0-9]/g, '');
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const stepTime = duration / 50;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && current === 0) {
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            counter.textContent = target + suffix;
                            clearInterval(timer);
                        } else {
                            counter.textContent = Math.floor(current) + suffix;
                        }
                    }, stepTime);
                    observer.unobserve(counter);
                }
            });
        });

        observer.observe(counter);
    });
}

// ============================================
// FORM VALIDATION (Front-end only)
// ============================================

function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });

    return isValid;
}

// Attach form validation to forms (excluding contact form which has its own handler)
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        // Skip contact and join forms - they have their own handlers
        const formId = form.getAttribute('id');
        if (formId === 'contact-form' || formId === 'join-form') {
            return;
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formId = form.getAttribute('id');
            if (validateForm(formId)) {
                alert(currentLang === 'en' ?
                    'Form submitted successfully! (This is a demo - no backend connected)' :
                    'تم إرسال النموذج بنجاح! (هذا عرض توضيحي - لم يتم توصيل الخادم)');
                form.reset();
            } else {
                alert(currentLang === 'en' ?
                    'Please fill in all required fields.' :
                    'يرجى ملء جميع الحقول المطلوبة.');
            }
        });
    });
});
