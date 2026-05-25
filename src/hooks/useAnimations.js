import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function useAnimations() {
  const observerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve once visible to prevent repeating unless desired
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.05,
        rootMargin: '0px 0px -60px 0px'
      }
    );

    const elements = document.querySelectorAll('.fade-in, .animate-on-scroll');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [location.pathname]);
}
