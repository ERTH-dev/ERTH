import { useLanguage } from '../context/LanguageContext';
import useAnimations from '../hooks/useAnimations';

export default function Leadership() {
  const { lang, content } = useLanguage();
  const data = content.leadership;
  useAnimations();

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

      {/* Team Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {data.team.map((member, i) => (
              <div className="card fade-in" key={i} style={{ textAlign: 'center' }}>
                <h3 style={{ marginBottom: '0.25rem' }}>{member.name}</h3>
                <p style={{ color: 'var(--color-emerald)', fontWeight: 600, marginBottom: '1rem' }}>{member.title}</p>
                <p style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
