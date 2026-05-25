import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <NavLink to="/" className="navbar-logo">
          <img src="/logo.jpeg" alt="ERTH Logo" className="logo-img" />
          <span>{t('nav.logo')}</span>
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

          <button className="lang-toggle" onClick={toggleLanguage}>
            {lang === 'en' ? 'العربية' : 'English'}
          </button>

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
