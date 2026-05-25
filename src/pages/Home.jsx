import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import useAnimations from '../hooks/useAnimations';

export default function Home() {
  const { lang, content } = useLanguage();
  const data = content.home;
  useAnimations();

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <h1>{data.heroTitle}</h1>
            <p className="lead">{data.heroSubtitle}</p>
            <div className="hero-cta">
              <Link to="/join#application-form" className="btn btn-primary btn-lg">{data.ctaJoin}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="metrics">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="fade-in">{data.metricsTitle}</h2>
          </div>
          <div className="metrics-grid">
            {data.metrics.map((metric, i) => (
              <MetricCounter key={i} value={parseInt(metric.value)} suffix={metric.suffix} label={metric.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Why ERTH Section */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="fade-in">{data.whyErthTitle}</h2>
            <p className="lead fade-in">{data.whyErthText}</p>
          </div>
        </div>
      </section>

      {/* ERTH Evolution Model */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="fade-in">{data.stagesTitle}</h2>
            <p className="lead fade-in">{data.stagesSubtitle}</p>
          </div>
          <div className="grid grid-3">
            {data.stages.map((stage, i) => (
              <div className="card fade-in" key={i}>
                <div className="badge badge-info">{stage.stage}</div>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 className="fade-in text-gradient">{data.finalCtaTitle}</h2>
            <p className="lead fade-in">{data.finalCtaText}</p>
            <Link to="/join" className="btn btn-primary btn-lg" style={{ marginTop: '2rem' }}>
              {data.finalCtaButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function MetricCounter({ value, suffix, label }) {
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
    <div className="metric fade-in">
      <span className="metric-value" ref={ref}>{value}{suffix}</span>
      <span className="metric-label">{label}</span>
    </div>
  );
}
