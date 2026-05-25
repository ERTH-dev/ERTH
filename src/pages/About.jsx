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
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="container">
          <div className="hero-content text-center fade-in">
            <h1>{data.pageTitle}</h1>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="card fade-in">
              <h2>{data.visionTitle}</h2>
              <p>{data.visionText}</p>
            </div>
            <div className="card fade-in">
              <h2>{data.missionTitle}</h2>
              <p>{data.missionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="fade-in">{data.problemTitle}</h2>
            <p className="lead fade-in">{data.problemText}</p>
          </div>
        </div>
      </section>

      {/* Evolution Model */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="fade-in">{data.evolutionTitle}</h2>
            <p className="lead fade-in">{data.evolutionSubtitle}</p>
          </div>
          <div className="timeline">
            {stages.map((stage, i) => (
              <div className="timeline-item fade-in" key={i}>
                <div className="timeline-marker">{stage.stage}</div>
                <div className="timeline-content">
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Vision */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="fade-in">{data.expansionTitle}</h2>
            <p className="lead fade-in">{data.expansionText}</p>
          </div>
        </div>
      </section>
    </>
  );
}
