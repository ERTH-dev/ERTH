// Contact Form Handler for Flask Backend
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;

            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            formStatus.innerHTML = '';

            try {
                // Get form data
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    message: document.getElementById('message').value
                };

                // Send to Flask backend
                const response = await fetch('https://erth.fly.dev/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                const data = await response.json();

                if (response.ok && data.success) {
                    // Success
                    formStatus.innerHTML = `
                        <div style="padding: 1rem; background: #d1fae5; color: #065f46; border-radius: 0.5rem; font-weight: 500;">
                            ✓ ${data.message}
                        </div>
                    `;
                    form.reset();
                } else {
                    // Error from backend
                    formStatus.innerHTML = `
                        <div style="padding: 1rem; background: #fee2e2; color: #991b1b; border-radius: 0.5rem; font-weight: 500;">
                            ✗ ${data.message || 'There was a problem sending your message.'}
                        </div>
                    `;
                }
            } catch (error) {
                // Network or other error
                console.error('Error:', error);
                formStatus.innerHTML = `
                    <div style="padding: 1rem; background: #fee2e2; color: #991b1b; border-radius: 0.5rem; font-weight: 500;">
                        ✗ Oops! There was a problem sending your message. Please make sure the backend server is running.
                    </div>
                `;
            } finally {
                // Re-enable button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    }
});
