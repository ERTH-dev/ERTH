import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import useAnimations from '../hooks/useAnimations';

export default function Home() {
  const { lang, content } = useLanguage();
  const data = content.home;
  useAnimations();

  // Custom stage icons for premium visual impact
  const stageIcons = [
    // Stage 1: Corporate Simulation (Briefcase)
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" key="1">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>,
    // Stage 2: Consulting (Trending Up / Users)
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" key="2">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>,
    // Stage 3: Incubator (Lightbulb / Gear)
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" key="3">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>,
    // Stage 4: Accelerator (Rocket)
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" key="4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ];

  // Custom metric icons for premium visual impact
  const metricIcons = [
    // Users icon for Active Members
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" key="m1">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>,
    // Briefcase/Checklist icon for Completed Projects
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" key="m2">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>,
    // Layers/Grid icon for Departments
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" key="m3">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>,
    // Staircase/Growth icon for Growth Stages
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" key="m4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ];

  // Custom department icons for homepage grid
  const deptIcons = [
    // Executive Office (Shield / Crown)
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" key="d1" style={{ width: '32px', height: '32px' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>,
    // HR (Users)
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" key="d2" style={{ width: '32px', height: '32px' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>,
    // Marketing & Comms (Megaphone)
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" key="d3" style={{ width: '32px', height: '32px' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>,
    // Technical Team (Code)
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" key="d4" style={{ width: '32px', height: '32px' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>,
    // Business Development (Partnership)
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" key="d5" style={{ width: '32px', height: '32px' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>,
    // Project Management (Clipboard check)
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" key="d6" style={{ width: '32px', height: '32px' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="radial-glow" style={{ top: '-10%', left: '20%' }}></div>
        <div className="radial-glow-blue" style={{ bottom: '-10%', right: '10%' }}></div>
        <div className="container text-center">
          <div className="hero-content fade-in">
            <h1>{data.heroTitle}</h1>
            <p className="lead">{data.heroSubtitle}</p>
            <div className="hero-cta">
              <Link to="/join" className="btn btn-primary btn-lg">{data.ctaJoin}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="metrics stacking-section stack-1 scroll-snap-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="animate-on-scroll slide-up">{data.metricsTitle}</h2>
          </div>
          <div className="metrics-grid">
            {data.metrics.map((metric, i) => (
              <MetricCounter 
                key={i} 
                value={parseInt(metric.value)} 
                suffix={metric.suffix} 
                label={metric.label} 
                icon={metricIcons[i]} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why ERTH Section */}
      <section className="section stacking-section stack-2 scroll-snap-section">
        <div className="radial-glow" style={{ top: '20%', right: '25%' }}></div>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="animate-on-scroll slide-up">{data.whyErthTitle}</h2>
            <p className="lead animate-on-scroll slide-up" style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)' }}>
              {data.whyErthText}
            </p>
          </div>
        </div>
      </section>

      {/* ERTH Evolution Model */}
      <section className="section stacking-section stack-3 scroll-snap-section">
        <div className="radial-glow-blue" style={{ top: '10%', left: '10%' }}></div>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <h2 className="animate-on-scroll slide-up">{data.stagesTitle}</h2>
            <p className="lead animate-on-scroll slide-up">{data.stagesSubtitle}</p>
          </div>
          <div className="grid grid-4">
            {data.stages.map((stage, i) => (
              <div className="stage-card animate-on-scroll slide-up" key={i}>
                <div className="stage-icon-wrap">
                  {stageIcons[i]}
                </div>
                <div className="stage-card-label">
                  {stage.stage}
                </div>
                <h3 className="stage-card-title">
                  {stage.title}
                </h3>
                <p className="stage-card-desc">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Departments Section */}
      <section className="section stacking-section stack-4 scroll-snap-section">
        <div className="radial-glow" style={{ top: '20%', left: '30%' }}></div>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-accent)', fontWeight: 600, display: 'block', marginBottom: '0.75rem' }}>
              {lang === 'en' ? 'OUR STRUCTURE' : 'هيكل الشركة'}
            </span>
            <h2 className="animate-on-scroll slide-up">{lang === 'en' ? 'Core Corporate Departments' : 'الأقسام المؤسسية الرئيسية'}</h2>
            <p className="lead animate-on-scroll slide-up" style={{ maxWidth: '700px', margin: '0 auto' }}>
              {lang === 'en' 
                ? 'We simulate real-world enterprise operations through six specialized functional departments.' 
                : 'نحن نحاكي عمليات المؤسسات الحقيقية من خلال ستة أقسام وظيفية متخصصة.'}
            </p>
          </div>
          <div className="grid grid-3">
            {content.departments.depts.map((dept, i) => (
              <div className="glass-card animate-on-scroll slide-up" key={i} style={{ padding: '1.5rem 1.75rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>
                  {deptIcons[i]}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#fff' }}>{dept.name}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', lineHeight: '1.5', flexGrow: 1 }}>{dept.description}</p>
                <Link to="/departments" style={{ color: 'var(--color-accent)', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem' }}>
                  {lang === 'en' ? 'Learn More' : 'معرفة المزيد'} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="section stacking-section stack-5 scroll-snap-section">
        <div className="radial-glow-blue" style={{ bottom: '10%', right: '15%' }}></div>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-accent)', fontWeight: 600, display: 'block', marginBottom: '0.75rem' }}>
              {lang === 'en' ? 'DIGITAL SOLUTIONS' : 'الحلول الرقمية'}
            </span>
            <h2 className="animate-on-scroll slide-up">{lang === 'en' ? 'Our Digital Products' : 'منتجاتنا الرقمية'}</h2>
            <p className="lead animate-on-scroll slide-up" style={{ maxWidth: '700px', margin: '0 auto' }}>
              {lang === 'en' 
                ? 'We build and maintain enterprise-grade platforms to support student growth and opportunities.' 
                : 'نحن نقوم ببناء وصيانة منصات على مستوى المؤسسات لدعم نمو الطلاب وفرصهم.'}
            </p>
          </div>
          <div className="grid grid-2">
            {/* Matching Card */}
            <div className="glass-card animate-on-scroll slide-left" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
                <span className="badge badge-info" style={{ marginBottom: '1.25rem' }}>{content.products.matching.badge}</span>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#fff' }}>{content.products.matching.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>{content.products.matching.description}</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <a href="https://matching.erth.dev" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ flex: 1, textAlign: 'center' }}>
                  {content.products.matching.cta}
                </a>
                <Link to="/products" className="btn btn-outline" style={{ flex: 1, textAlign: 'center', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {lang === 'en' ? 'Details' : 'التفاصيل'}
                </Link>
              </div>
            </div>

            {/* Study Hub Card */}
            <div className="glass-card animate-on-scroll slide-right" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
                <span className="badge badge-success" style={{ marginBottom: '1.25rem' }}>{content.products.lms.badge}</span>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#fff' }}>{content.products.lms.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>{content.products.lms.description}</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <a href="https://lms.erth.dev" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ flex: 1, textAlign: 'center' }}>
                  {content.products.lms.cta}
                </a>
                <Link to="/products" className="btn btn-outline" style={{ flex: 1, textAlign: 'center', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {lang === 'en' ? 'Details' : 'التفاصيل'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Partnership Section */}
      <section className="section stacking-section stack-6 scroll-snap-section" style={{ paddingTop: '4rem', paddingBottom: '5rem', overflow: 'visible' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="animate-on-scroll slide-left">
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-accent)', fontWeight: 600, display: 'block', marginBottom: '0.75rem' }}>
                {lang === 'en' ? 'TRUST & SECURITY' : 'الثقة والأمان'}
              </span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#fff' }}>
                {lang === 'en' ? 'Secured by Industry Experts' : 'محمي بواسطة خبراء الصناعة'}
              </h2>
              <p className="lead" style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                {lang === 'en' 
                  ? 'We prioritize the security of our platform, members, and data. Through our partnership with RootX, we ensure regular auditing and top-tier offensive security compliance.'
                  : 'نحن نضع أمن منصتنا وأعضائنا وبياناتنا في مقدمة أولوياتنا. من خلال شراكتنا مع RootX، نضمن التدقيق الدوري والامتثال لأعلى مستويات الأمن الهجومي.'}
              </p>
            </div>
            
            {/* The Partner Card */}
            <div className="animate-on-scroll slide-right">
              <div style={{
                background: 'rgba(15, 18, 28, 0.4)',
                border: '1.5px solid rgba(255, 62, 62, 0.15)',
                borderRadius: '16px',
                padding: '2.5rem',
                boxShadow: '0 0 30px rgba(255, 62, 62, 0.05)',
                position: 'relative'
              }}
              className="partner-card-hover"
              >
                {/* Red glow highlight */}
                <div style={{
                  position: 'absolute',
                  top: '-10%',
                  right: '-10%',
                  width: '40%',
                  height: '40%',
                  background: 'radial-gradient(circle, rgba(255, 62, 62, 0.08) 0%, rgba(255, 62, 62, 0) 70%)',
                  filter: 'blur(30px)',
                  pointerEvents: 'none'
                }}></div>

                <span style={{ 
                  fontSize: '0.7rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.2em', 
                  color: '#ff3e3e', 
                  fontWeight: 700,
                  display: 'block',
                  marginBottom: '1rem'
                }}>
                  {lang === 'en' ? 'PARTNERSHIP' : 'شراكة'}
                </span>

                <h3 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 600, 
                  color: '#fff', 
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  RootX <span style={{ color: '#ff3e3e' }}>•</span> <span style={{ opacity: 0.8, fontWeight: 400, fontSize: '1.4rem' }}>rootx.solutions</span>
                </h3>

                <p style={{ 
                  fontSize: '0.95rem', 
                  color: 'var(--color-text-secondary)', 
                  lineHeight: '1.6', 
                  marginBottom: '2rem' 
                }}>
                  {lang === 'en'
                    ? 'RootX conducted a comprehensive security assessment of the ERTH platform. Their specialized team executed deep manual penetration testing to identify and secure critical vulnerabilities, hardening our ecosystem against sophisticated threats.'
                    : 'أجرت RootX تقييماً أمنياً شاملاً لمنصة ERTH. نفذ فريقهم المتخصص اختبار اختراق يدوي عميق لتحديد وتأمين الثغرات الحرجة، مما يعزز حماية بيئتنا ضد التهديدات المتقدمة.'}
                </p>

                <a href="https://rootx.solutions/" target="_blank" rel="noopener noreferrer" style={{
                  color: '#ff3e3e',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  letterSpacing: '0.1em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                className="partner-link-hover"
                >
                  {lang === 'en' ? 'VISIT PARTNER' : 'زيارة الشريك'} &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section non-stacking-cover scroll-snap-section">
        <div className="radial-glow" style={{ bottom: '-20%', left: '30%' }}></div>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 className="animate-on-scroll slide-up text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
              {data.finalCtaTitle}
            </h2>
            <p className="lead animate-on-scroll slide-up" style={{ marginBottom: '2rem' }}>{data.finalCtaText}</p>
            <Link to="/join" className="btn btn-primary btn-lg">
              {data.finalCtaButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function MetricCounter({ value, suffix, label, icon }) {
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let current = 0;
          const increment = value / 50;
          const stepTime = 2000 / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              el.textContent = value + suffix;
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(current) + suffix;
            }
          }, stepTime);
          observer.unobserve(el);
        }
      });
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);

  return (
    <div className="metric-card animate-on-scroll slide-up">
      <div className="metric-card-icon">
        {icon}
      </div>
      <span className="metric-card-value" ref={ref}>{value}{suffix}</span>
      <span className="metric-card-label">{label}</span>
    </div>
  );
}
