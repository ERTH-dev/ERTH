import { useLanguage } from '../context/LanguageContext';
import useAnimations from '../hooks/useAnimations';

export default function Departments() {
  const { lang, content } = useLanguage();
  const data = content.departments;
  useAnimations();

  // Distinct premium SVG icons for each department
  const deptIcons = [
    // 0: Executive Office (Shield/Governance)
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" key="0">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>,
    // 1: Human Resources (Users)
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" key="1">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>,
    // 2: Marketing & Comms (Megaphone)
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" key="2">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>,
    // 3: Technical Team (Code Bracket)
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" key="3">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>,
    // 4: Business Development (Growth Chart)
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" key="4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>,
    // 5: Project Management (Clipboard checklist)
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" key="5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ];

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

      {/* Departments Grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="radial-glow-blue" style={{ bottom: '-15%', right: '15%' }}></div>
        <div className="container">
          <div className="grid grid-3">
            {data.depts.map((dept, i) => (
              <div className="glass-card fade-in" key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="card-icon">
                  {deptIcons[i]}
                </div>
                <h3 style={{ color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>{dept.name}</h3>
                <p style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>
                  {dept.description}
                </p>
                
                <h4 style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)', marginTop: '0.5rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                  {lang === 'en' ? 'Key Responsibilities:' : 'المسؤوليات الرئيسية:'}
                </h4>
                <ul style={{ 
                  margin: '0 0 1.5rem', 
                  paddingLeft: lang === 'ar' ? undefined : '1rem', 
                  paddingRight: lang === 'ar' ? '1rem' : undefined, 
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.85rem',
                  flexGrow: 1,
                  lineHeight: '1.7'
                }}>
                  {dept.responsibilities.map((resp, j) => (
                    <li key={j} style={{ marginBottom: '0.4rem', listStyleType: 'disc' }}>{resp}</li>
                  ))}
                </ul>
                
                <p style={{ marginTop: 'auto', fontSize: '0.825rem', color: 'var(--color-accent-blue)', borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem', marginBottom: 0 }}>
                  <strong>{lang === 'en' ? 'Skills:' : 'المهارات:'}</strong> {dept.skills}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
