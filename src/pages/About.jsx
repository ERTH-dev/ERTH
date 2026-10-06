import { useLanguage } from '../context/LanguageContext';
import useAnimations from '../hooks/useAnimations';

export default function About() {
  const { lang, content } = useLanguage();
  const data = content.about;
  const stages = content.home.stages;
  useAnimations();

  return (
    <>
      {/* Page Header */}
      <section className="hero" style={{ minHeight: '40vh' }}>
        <div className="radial-glow" style={{ top: '-10%', left: '25%' }}></div>
        <div className="container">
          <div className="hero-content text-center fade-in">
            <h1>{data.pageTitle}</h1>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-2">
            <div className="glass-card fade-in">
              <div className="card-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{data.visionTitle}</h2>
              <p style={{ margin: 0 }}>{data.visionText}</p>
            </div>
            
            <div className="glass-card fade-in">
              <div className="card-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{data.missionTitle}</h2>
              <p style={{ margin: 0 }}>{data.missionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', background: 'rgba(11, 15, 25, 0.2)' }}>
        <div className="radial-glow-blue" style={{ bottom: '-20%', right: '20%' }}></div>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="fade-in text-gradient" style={{ marginBottom: '1.5rem' }}>{data.problemTitle}</h2>
            <p className="lead fade-in" style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)' }}>{data.problemText}</p>
          </div>
        </div>
      </section>

      {/* Evolution Model */}
      <section className="section">
        <div className="radial-glow" style={{ top: '10%', left: '10%' }}></div>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="fade-in">{data.evolutionTitle}</h2>
            <p className="lead fade-in">{data.evolutionSubtitle}</p>
          </div>
          
          <div className="timeline">
            {stages.map((stage, i) => (
              <div className="timeline-item fade-in" key={i}>
                <div className="timeline-marker">
                  {stage.stage.replace('Stage', '').replace('المرحلة', '').trim()}
                </div>
                <div className="timeline-content">
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-primary)' }}>{stage.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Vision */}
      <section className="section" style={{ borderTop: '1px solid var(--color-border)', background: 'rgba(11, 15, 25, 0.2)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="fade-in text-gradient" style={{ marginBottom: '1.5rem' }}>{data.expansionTitle}</h2>
            <p className="lead fade-in" style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)' }}>{data.expansionText}</p>
          </div>
        </div>
      </section>
    </>
  );
}
