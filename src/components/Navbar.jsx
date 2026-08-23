import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [sequenceNavVisible, setSequenceNavVisible] = useState(false);

  useEffect(() => {
    // If not homepage, navbar is always visible
    if (!isHomePage) {
      setSequenceNavVisible(true);
      return;
    }

    // On homepage, navbar starts hidden
    setSequenceNavVisible(false);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const metricsSection = document.getElementById('metrics');
          if (metricsSection) {
            const rect = metricsSection.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.85) {
              setSequenceNavVisible(true);
              ticking = false;
              return;
            }
          }

          const sequenceContainer = document.querySelector('.sequence-container');
          if (sequenceContainer) {
            const rect = sequenceContainer.getBoundingClientRect();
            if (rect.bottom <= window.innerHeight * 0.3) {
              setSequenceNavVisible(true);
              ticking = false;
              return;
            }
          }

          setSequenceNavVisible(false);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleProgress = (e) => {
      const { isPastHero } = e.detail || {};
      if (isPastHero !== undefined) {
        setSequenceNavVisible(isPastHero);
      }
    };

    window.addEventListener('sequence-progress', handleProgress);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('sequence-progress', handleProgress);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage, location.pathname]);

  const navClass = `navbar ${isHomePage ? (sequenceNavVisible ? 'visible' : 'hidden-sequence') : 'visible'}`;

  return (
    <nav className={navClass}>
      <div className="container navbar-container">
        <NavLink to="/" className="navbar-logo">
          <img src="/new-erth-logo.png" alt="ERTH Logo" className="logo-img" style={{ height: '36px', marginRight: '0.65rem' }} />
          <span className="logo-text">ERTH</span>
        </NavLink>

        <div className="navbar-menu">
          <div className={`navbar-links${menuOpen ? ' active' : ''}`} id="navbar-links">
            <NavLink to="/" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={() => setMenuOpen(false)} end>
              {t('nav.home')}
            </NavLink>
            <NavLink to="/departments" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>
              {t('nav.departments')}
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>
              {t('nav.products')}
            </NavLink>
            <NavLink to="/leadership" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>
              {t('nav.leadership')}
            </NavLink>
            <NavLink to="/join" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>
              {t('nav.join')}
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>
              {t('nav.contact')}
            </NavLink>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button className="lang-toggle" onClick={toggleLanguage}>
              {lang === 'en' ? 'العربية' : 'English'}
            </button>
          </div>

          <div className="mobile-menu-toggle" onClick={() => setMenuOpen(prev => !prev)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
