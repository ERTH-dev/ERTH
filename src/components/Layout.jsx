import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
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
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
}
