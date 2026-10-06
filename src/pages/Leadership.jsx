import { useLanguage } from '../context/LanguageContext';
import useAnimations from '../hooks/useAnimations';

export default function Leadership() {
  const { lang, content } = useLanguage();
  const data = content.leadership;
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

      {/* Team Grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="radial-glow-blue" style={{ bottom: '-15%', right: '15%' }}></div>
        <div className="container">
          <div className="grid grid-3">
            {data.team.map((member, i) => (
              <div className="glass-card fade-in" key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div className="card-icon" style={{ borderRadius: '50%', width: '64px', height: '64px', marginBottom: '1.25rem' }}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '28px', height: '28px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>
                  {member.name}
                </h3>
                
                <p style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                  {member.title}
                </p>
                
                <p style={{ 
                  textAlign: lang === 'ar' ? 'right' : 'left', 
                  fontSize: '0.9rem', 
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.7',
                  margin: 0
                }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
