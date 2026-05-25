import { useLanguage } from '../context/LanguageContext';
import useAnimations from '../hooks/useAnimations';

export default function Products() {
  const { content } = useLanguage();
  const data = content.products;
  useAnimations();

  return (
    <>
      {/* Page Header */}
      <section className="hero" style={{ minHeight: '52vh' }}>
        <div className="container">
          <div className="hero-content text-center fade-in">
            <h1>{data.pageTitle}</h1>
            <p className="lead">{data.pageSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Products Cards */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <article className="card fade-in">
              <div className="badge badge-info">{data.matching.badge}</div>
              <h2 style={{ marginTop: '0.75rem' }}>{data.matching.title}</h2>
              <p>{data.matching.description}</p>
              <p><strong>{data.keyFeatures}</strong></p>
              <ul className="products-list">
                <li>{data.matching.f1}</li>
                <li>{data.matching.f2}</li>
                <li>{data.matching.f3}</li>
                <li>{data.matching.f4}</li>
              </ul>
              <p className="products-fit"><strong>{data.bestFor}</strong> <span>{data.matching.bestFor}</span></p>
              <a href="https://matching.erth.dev" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {data.matching.cta}
              </a>
            </article>

            <article className="card fade-in">
              <div className="badge badge-success">{data.lms.badge}</div>
              <h2 style={{ marginTop: '0.75rem' }}>{data.lms.title}</h2>
              <p>{data.lms.description}</p>
              <p><strong>{data.keyFeatures}</strong></p>
              <ul className="products-list">
                <li>{data.lms.f1}</li>
                <li>{data.lms.f2}</li>
                <li>{data.lms.f3}</li>
                <li>{data.lms.f4}</li>
              </ul>
              <p className="products-fit"><strong>{data.bestFor}</strong> <span>{data.lms.bestFor}</span></p>
              <a href="https://lms.erth.dev" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {data.lms.cta}
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Unified Value */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '920px', margin: '0 auto' }}>
            <h2 className="fade-in">{data.unifiedTitle}</h2>
            <p className="lead fade-in" style={{ fontSize: '0.95rem' }}>{data.unifiedText}</p>
          </div>

          <div className="grid grid-3" style={{ marginTop: '2rem' }}>
            <div className="card fade-in">
              <h3>{data.flow1Title}</h3>
              <p>{data.flow1Text}</p>
            </div>
            <div className="card fade-in">
              <h3>{data.flow2Title}</h3>
              <p>{data.flow2Text}</p>
            </div>
            <div className="card fade-in">
              <h3>{data.flow3Title}</h3>
              <p>{data.flow3Text}</p>
            </div>
          </div>

          {/* Auth Card */}
          <div className="card fade-in" style={{ marginTop: '2.5rem', textAlign: 'center', padding: '2rem', border: '1px solid var(--color-primary)', background: 'rgba(99, 102, 241, 0.05)' }}>
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{data.authTitle}</h3>
            <p style={{ maxWidth: '680px', margin: '0 auto' }}>{data.authText}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="text-center fade-in" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2>{data.finalTitle}</h2>
            <p className="lead" style={{ fontSize: '0.95rem' }}>{data.finalText}</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
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
