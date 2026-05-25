import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import useAnimations from '../hooks/useAnimations';

export default function Contact() {
  const { lang, content } = useLanguage();
  const data = content.contact;
  const [formStatus, setFormStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  useAnimations();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormStatus(null);

    try {
      const formData = {
        access_key: 'c989f128-a600-47f3-841c-4a59e4cc30e8',
        subject: 'New Contact Message - ERTH Website',
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({ type: 'success', text: '✓ Message sent successfully! We\'ll get back to you soon.' });
        e.target.reset();
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      setFormStatus({ type: 'error', text: '✗ Oops! There was a problem sending your message. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="container">
          <div className="hero-content text-center fade-in">
            <h1>{data.pageTitle}</h1>
            <p className="lead">{data.pageSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem' }}>
            {/* Contact Info */}
            <div>
              <h2 className="fade-in">{data.infoTitle}</h2>
              <div className="contact-info-list">
                <div className="contact-info-item fade-in">
                  <div className="contact-icon">
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4>{data.email}</h4>
                    <a href="mailto:info@erth.dev">{data.emailValue}</a>
                  </div>
                </div>

                <div className="contact-info-item fade-in">
                  <div className="contact-icon">
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4>{data.location}</h4>
                    <p>{data.locationValue}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="fade-in">{data.formTitle}</h2>
              <form className="contact-form fade-in" id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{data.formName}</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{data.formEmail}</label>
                  <input type="email" id="email" name="email" placeholder="Your email address" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">{data.formMessage}</label>
                  <textarea id="message" name="message" rows="6" placeholder="Enter your message" required />
                </div>
                <div className="form-submit">
                  <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {submitting ? (lang === 'en' ? 'Sending...' : 'جاري الإرسال...') : data.formSubmit}
                  </button>
                </div>

                {formStatus && (
                  <div style={{
                    marginTop: '1rem', padding: '1rem', borderRadius: '0.5rem', fontWeight: 500,
                    background: formStatus.type === 'success' ? '#d1fae5' : '#fee2e2',
                    color: formStatus.type === 'success' ? '#065f46' : '#991b1b'
                  }}>
                    {formStatus.text}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
