import { useLanguage } from '../context/LanguageContext';
import useAnimations from '../hooks/useAnimations';

export default function Departments() {
  const { lang, content } = useLanguage();
  const data = content.departments;
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

      {/* Departments Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {data.depts.map((dept, i) => (
              <div className="card fade-in" key={i}>
                <div className="card-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3>{dept.name}</h3>
                <p><strong>{dept.description}</strong></p>
                <h4 style={{ fontSize: '1rem', marginTop: '1rem' }}>
                  {lang === 'en' ? 'Key Responsibilities:' : 'المسؤوليات الرئيسية:'}
                </h4>
                <ul style={{ margin: '0.5rem 0', paddingLeft: lang === 'ar' ? undefined : '1.5rem', paddingRight: lang === 'ar' ? '1.5rem' : undefined, color: 'var(--color-gray-600)' }}>
                  {dept.responsibilities.map((resp, j) => (
                    <li key={j} style={{ marginBottom: '0.25rem' }}>{resp}</li>
                  ))}
                </ul>
                <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--color-emerald)', fontWeight: 600 }}>
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
