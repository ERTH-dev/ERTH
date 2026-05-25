import { useLanguage } from '../context/LanguageContext';
import useAnimations from '../hooks/useAnimations';

export default function Products() {
  const { lang, content } = useLanguage();
  const data = content.products;
  useAnimations();

  return (
    <>
      {/* Page Header */}
      <section className="hero" style={{ minHeight: '40vh' }}>
        <div className="radial-glow" style={{ top: '-10%', left: '20%' }}></div>
        <div className="container">
          <div className="hero-content text-center fade-in">
            <h1>{data.pageTitle}</h1>
            <p className="lead" style={{ maxWidth: '700px', margin: '0 auto' }}>{data.pageSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="radial-glow-blue" style={{ bottom: '-10%', right: '10%' }}></div>
        <div className="container">
          <div className="grid grid-2">
            <article className="glass-card fade-in" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <span className="badge badge-info">{data.matching.badge}</span>
              </div>
              <h2 style={{ fontSize: '1.75rem', color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
                {data.matching.title}
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.25rem' }}>
                {data.matching.description}
              </p>
              
              <div style={{ flexGrow: 1 }}>
                <p style={{ color: 'var(--color-text-primary)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  {data.keyFeatures}
                </p>
                <ul className="products-list">
                  <li>{data.matching.f1}</li>
                  <li>{data.matching.f2}</li>
                  <li>{data.matching.f3}</li>
                  <li>{data.matching.f4}</li>
                </ul>
              </div>
              
              <p className="products-fit" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                <strong>{data.bestFor}</strong> <span>{data.matching.bestFor}</span>
              </p>
              
              <a href="https://matching.erth.dev" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ alignSelf: 'stretch' }}>
                {data.matching.cta}
              </a>
            </article>

            <article className="glass-card fade-in" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <span className="badge badge-success">{data.lms.badge}</span>
              </div>
              <h2 style={{ fontSize: '1.75rem', color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
                {data.lms.title}
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.25rem' }}>
                {data.lms.description}
              </p>
              
              <div style={{ flexGrow: 1 }}>
                <p style={{ color: 'var(--color-text-primary)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  {data.keyFeatures}
                </p>
                <ul className="products-list">
                  <li>{data.lms.f1}</li>
                  <li>{data.lms.f2}</li>
                  <li>{data.lms.f3}</li>
                  <li>{data.lms.f4}</li>
                </ul>
              </div>
              
              <p className="products-fit" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                <strong>{data.bestFor}</strong> <span>{data.lms.bestFor}</span>
              </p>
              
              <a href="https://lms.erth.dev" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ alignSelf: 'stretch' }}>
                {data.lms.cta}
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Unified Value */}
      <section className="section" style={{ borderTop: '1px solid var(--color-border)', background: 'rgba(11, 15, 25, 0.2)' }}>
        <div className="radial-glow" style={{ top: '15%', left: '20%' }}></div>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '920px', margin: '0 auto 3rem' }}>
            <h2 className="fade-in">{data.unifiedTitle}</h2>
            <p className="lead fade-in" style={{ fontSize: '1rem', color: 'var(--color-text-secondary)' }}>{data.unifiedText}</p>
          </div>

          <div className="grid grid-3">
            <div className="glass-card fade-in">
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>{data.flow1Title}</h3>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>{data.flow1Text}</p>
            </div>
            <div className="glass-card fade-in">
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>{data.flow2Title}</h3>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>{data.flow2Text}</p>
            </div>
            <div className="glass-card fade-in">
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>{data.flow3Title}</h3>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>{data.flow3Text}</p>
            </div>
          </div>

          {/* Auth notice card */}
          <div className="glass-card fade-in" style={{ 
            marginTop: '3rem', 
            textAlign: 'center', 
            border: '1px solid rgba(0, 245, 212, 0.2)', 
            boxShadow: '0 0 15px rgba(0, 245, 212, 0.05)', 
            background: 'rgba(0, 245, 212, 0.02)',
            padding: '2rem'
          }}>
            <h3 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem', fontSize: '1.3rem' }}>{data.authTitle}</h3>
            <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>
              {data.authText}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="radial-glow-blue" style={{ bottom: '-20%', left: '20%' }}></div>
        <div className="container">
          <div className="text-center fade-in" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="text-gradient" style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>{data.finalTitle}</h2>
            <p className="lead" style={{ marginBottom: '2rem' }}>{data.finalText}</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://matching.erth.dev" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {data.matchingShortCta}
              </a>
              <a href="https://lms.erth.dev" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                {data.lmsShortCta}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
