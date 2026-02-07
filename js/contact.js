// ========================================
// CONTACT FORM HANDLER
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

async function handleFormSubmit(e) {
    e.preventDefault();

    const formMessage = document.getElementById('formMessage');
    const submitBtn = e.target.querySelector('.submit-btn');

    // Get form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value.trim(),
        category: document.getElementById('category').value,
        message: document.getElementById('message').value.trim()
    };

    // Validate
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showMessage('error', 'Please fill in all required fields.');
        return;
    }

    if (!isValidEmail(formData.email)) {
        showMessage('error', 'Please enter a valid email address.');
        return;
    }

    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Sending...</span>';

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Success
        showMessage('success', 'Thank you for your message! We\'ll get back to you within 24-48 hours.');

        // Reset form
        document.getElementById('contactForm').reset();

        // Re-enable button
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
            <span>Send Message</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
        `;

        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 1500);

    // In production, replace above with actual API call:
    /*
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            showMessage('success', 'Thank you for your message! We\'ll get back to you within 24-48 hours.');
            document.getElementById('contactForm').reset();
        } else {
            showMessage('error', 'Something went wrong. Please try again or email us directly.');
        }
    } catch (error) {
        showMessage('error', 'Network error. Please check your connection and try again.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
            <span>Send Message</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
        `;
    }
    */
}

function showMessage(type, text) {
    const formMessage = document.getElementById('formMessage');
    formMessage.className = `form-message ${type}`;
    formMessage.textContent = text;
    formMessage.style.display = 'block';

    // Auto-hide after 5 seconds for success messages
    if (type === 'success') {
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}