// ========================================
// COLLAPSIBLE SECTIONS SCRIPT
// Handles toggle functionality for collapsible sections
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all collapsible sections
    initializeCollapsibleSections();
});

function initializeCollapsibleSections() {
    // Find all collapsible sections
    const sections = document.querySelectorAll('.collapsible-section');
    
    sections.forEach(section => {
        const header = section.querySelector('.collapsible-header');
        
        if (header) {
            // Add click event listener
            header.addEventListener('click', function() {
                toggleSection(section);
            });
            
            // Make sure the section starts collapsed
            if (!section.classList.contains('collapsed')) {
                section.classList.add('collapsed');
            }
        }
    });
}

function toggleSection(section) {
    // Toggle collapsed class
    section.classList.toggle('collapsed');
    
    // Get the content element
    const content = section.querySelector('.collapsible-content');
    
    if (content) {
        if (section.classList.contains('collapsed')) {
            // Collapsing
            content.style.maxHeight = '0';
        } else {
            // Expanding
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    }
}

// Optional: Function to expand all sections (can be called from console for debugging)
function expandAllSections() {
    const sections = document.querySelectorAll('.collapsible-section');
    sections.forEach(section => {
        section.classList.remove('collapsed');
        const content = section.querySelector('.collapsible-content');
        if (content) {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
}

// Optional: Function to collapse all sections
function collapseAllSections() {
    const sections = document.querySelectorAll('.collapsible-section');
    sections.forEach(section => {
        section.classList.add('collapsed');
        const content = section.querySelector('.collapsible-content');
        if (content) {
            content.style.maxHeight = '0';
        }
    });
}
