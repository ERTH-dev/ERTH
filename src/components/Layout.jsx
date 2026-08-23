import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function PageLoader() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: '36px',
        height: '36px',
        border: '3px solid rgba(0, 245, 212, 0.15)',
        borderTopColor: '#00F5D4',
        borderRadius: '50%',
        animation: 'spinRing 0.8s linear infinite'
      }} />
    </div>
  );
}

export default function Layout() {
  // Navbar scroll effect with RAF throttling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const navbar = document.querySelector('.navbar');
          if (navbar) {
            if (window.scrollY > 50) {
              navbar.classList.add('scrolled');
            } else {
              navbar.classList.remove('scrolled');
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Background Visual Effects */}
      <div className="ambient-glow-wrapper">
        <div className="ambient-orb orb-cyan"></div>
        <div className="ambient-orb orb-blue"></div>
        <div className="ambient-orb orb-purple"></div>
      </div>

      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
      <Footer />
      <ScrollToTop />
    </>
  );
}
