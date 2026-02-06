// ========================================
// THEME.JS - Theme Toggle & Navigation
// ========================================

// Theme Toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Default to dark mode
    body.classList.remove('light-mode');
    if (themeToggle) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            const isLight = body.classList.contains('light-mode');
            themeToggle.innerHTML = isLight ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }

    // FIXED: Smooth Scroll Navigation - ONLY for same-page anchors
    document.querySelectorAll('.nav-menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // ONLY prevent default for same-page anchor links (starting with # or /#)
            if (href.startsWith('#') || (href.startsWith('/') && href.includes('#'))) {
                e.preventDefault();

                // Remove active class from all
                document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));

                // Add active class to clicked
                this.classList.add('active');

                // Extract the anchor part
                const anchorPart = href.includes('#') ? href.split('#')[1] : '';
                const target = document.getElementById(anchorPart) || document.querySelector(`[id="${anchorPart}"]`);

                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
            // For all other links (/converter, /physics, etc.), let them navigate normally
            // DO NOT call e.preventDefault()
        });
    });

    // Set active nav item based on current page
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath || (currentPath.includes(linkPath) && linkPath !== '/')) {
            link.classList.add('active');
        }
    });
});