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
        setFormStatus({ 
          type: 'success', 
          text: lang === 'en' ? '✓ Message sent successfully! We\'ll get back to you soon.' : '✓ تم إرسال رسالتك بنجاح! سنقوم بالرد عليك قريباً.' 
        });
        e.target.reset();
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        text: lang === 'en' ? 'Oops! There was a problem sending your message.' : 'عذراً! حدث خطأ أثناء إرسال رسالتك.' 
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="hero" style={{ minHeight: '35vh', paddingTop: '120px' }}>
        <div className="radial-glow" style={{ top: '-10%', left: '20%' }}></div>
        <div className="container">
          <div className="hero-content text-center fade-in">
            <h1 style={{ fontWeight: 300, fontSize: '3rem', marginBottom: '0.5rem' }}>{data.pageTitle}</h1>
            <p className="lead" style={{ fontSize: '1.1rem', fontWeight: 300, opacity: 0.85 }}>{data.pageSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '5rem' }}>
        <div className="radial-glow-blue" style={{ bottom: '-15%', right: '15%' }}></div>
        <div className="container">
          
          <div className="contact-unified-container fade-in">
            {/* Left Panel: Get In Touch */}
            <div className="contact-info-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 400, marginBottom: '2.5rem', color: '#fff' }}>{data.infoTitle}</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                {/* Email Item */}
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <div style={{ 
                    width: '46px', 
                    height: '46px', 
                    background: 'rgba(0, 245, 212, 0.05)', 
                    border: '1.5px solid rgba(0, 245, 212, 0.25)', 
                    boxShadow: '0 0 15px rgba(0, 245, 212, 0.15)',
                    borderRadius: '12px', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-accent)',
                    flexShrink: 0
                  }}>
                    <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 0 4px var(--color-accent))' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.2rem' }}>
                      {data.email}
                    </span>
                    <a href={`mailto:${data.emailValue}`} style={{ color: '#fff', fontSize: '1.15rem', fontWeight: '500' }}>
                      {data.emailValue}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <div style={{ 
                    width: '46px', 
                    height: '46px', 
                    background: 'rgba(0, 245, 212, 0.05)', 
                    border: '1.5px solid rgba(0, 245, 212, 0.25)', 
                    boxShadow: '0 0 15px rgba(0, 245, 212, 0.15)',
                    borderRadius: '12px', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-accent)',
                    flexShrink: 0
                  }}>
                    <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 0 4px var(--color-accent))' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.2rem' }}>
                      {data.location}
                    </span>
                    <span style={{ color: '#fff', fontSize: '1.15rem', fontWeight: '500' }}>
                      {data.locationValue}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Panel: Send Us a Message Form */}
            <div className="contact-form-panel">
              <h2 style={{ fontSize: '1.8rem', fontWeight: 400, marginBottom: '2.5rem', color: '#fff' }}>{data.formTitle}</h2>
              <form id="contact-form" onSubmit={handleSubmit}>
                
                <div className="form-group" style={{ marginBottom: '2rem' }}>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input-line" 
                    placeholder={data.formName} 
                    required 
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '2rem' }}>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input-line" 
                    placeholder={data.formEmail} 
                    required 
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '2.5rem' }}>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    className="form-textarea-glow" 
                    placeholder={data.formMessage} 
                    required 
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button type="submit" className="btn-gradient-glow" disabled={submitting}>
                    {submitting ? (lang === 'en' ? 'Sending...' : 'جاري الإرسال...') : data.formSubmit}
                  </button>
                </div>

                {formStatus && (
                  <div style={{
                    marginTop: '1.5rem', 
                    padding: '0.85rem 1.25rem', 
                    borderRadius: '8px', 
                    fontWeight: 500,
                    background: formStatus.type === 'success' ? 'rgba(0, 245, 212, 0.08)' : 'rgba(239, 68, 68, 0.08)',
                    color: formStatus.type === 'success' ? 'var(--color-accent)' : '#ef4444',
                    border: `1.5px solid ${formStatus.type === 'success' ? 'rgba(0, 245, 212, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`,
                    fontSize: '0.9rem',
                    textAlign: 'center'
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
