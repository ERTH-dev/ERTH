// Contact Form Handler - Web3Forms
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;

            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            formStatus.innerHTML = '';

            try {
                const formData = {
                    access_key: 'c989f128-a600-47f3-841c-4a59e4cc30e8',
                    subject: 'New Contact Message - ERTH Website',
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    message: document.getElementById('message').value
                };

                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                const data = await response.json();

                if (data.success) {
                    formStatus.innerHTML = `
                        <div style="padding: 1rem; background: #d1fae5; color: #065f46; border-radius: 0.5rem; font-weight: 500;">
                            ✓ Message sent successfully! We'll get back to you soon.
                        </div>
                    `;
                    form.reset();
                } else {
                    throw new Error(data.message || 'Submission failed');
                }
            } catch (error) {
                console.error('Error:', error);
                formStatus.innerHTML = `
                    <div style="padding: 1rem; background: #fee2e2; color: #991b1b; border-radius: 0.5rem; font-weight: 500;">
                        ✗ Oops! There was a problem sending your message. Please try again.
                    </div>
                `;
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    }
});
