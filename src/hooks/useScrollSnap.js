import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * useScrollSnap — A "scroll brake" effect for the homepage.
 *
 * When the user scrolls to the boundary of a section, the page briefly
 * "catches" at that point, requiring an additional scroll gesture to
 * continue. This gives each section breathing room and prevents content
 * from being skipped over too quickly.
 *
 * How it works:
 *   1. We listen for 'wheel' events on the window.
 *   2. We find all snap-target sections (`.scroll-snap-section`).
 *   3. If the top of a section is near the current viewport top (within a
 *      tolerance zone), we temporarily prevent default scrolling for a
 *      short cooldown, then release.
 *   4. Only activates on the homepage ("/").
 */
export default function useScrollSnap() {
  const location = useLocation();

  useEffect(() => {
    // Only activate on the homepage
    if (location.pathname !== '/') return;

    let isLocked = false;       // Whether scroll is currently blocked
    let lockTimeout = null;     // Timer to release the lock
    let lastSnapY = -Infinity;  // Last Y we snapped at (avoid re-snapping same spot)

    const SNAP_TOLERANCE = 60;  // px — how close to a section top triggers the brake
    const LOCK_DURATION = 600;  // ms — how long the brake lasts before releasing

    function handleWheel(e) {
      if (isLocked) {
        e.preventDefault();
        return;
      }

      const sections = document.querySelectorAll('.scroll-snap-section');
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const sectionTop = scrollY + rect.top;

        // Check if we're scrolling DOWN and approaching this section's top edge
        if (e.deltaY > 0) {
          // Section top is just below viewport top (about to enter)
          const distanceToSnap = rect.top;
          if (
            distanceToSnap > -SNAP_TOLERANCE &&
            distanceToSnap < SNAP_TOLERANCE &&
            Math.abs(sectionTop - lastSnapY) > viewportH * 0.3
          ) {
            isLocked = true;
            lastSnapY = sectionTop;
            e.preventDefault();

            // Smooth-scroll precisely to the section top
            window.scrollTo({
              top: sectionTop - 80, // Account for fixed navbar height
              behavior: 'smooth'
            });

            lockTimeout = setTimeout(() => {
              isLocked = false;
            }, LOCK_DURATION);
            return;
          }
        }

        // Check if we're scrolling UP and approaching this section's bottom edge
        if (e.deltaY < 0) {
          const sectionBottom = scrollY + rect.bottom;
          const distToBottom = rect.bottom - viewportH;
          if (
            distToBottom > -SNAP_TOLERANCE &&
            distToBottom < SNAP_TOLERANCE &&
            Math.abs(sectionBottom - lastSnapY) > viewportH * 0.3
          ) {
            isLocked = true;
            lastSnapY = sectionBottom;
            e.preventDefault();

            window.scrollTo({
              top: sectionBottom - viewportH,
              behavior: 'smooth'
            });

            lockTimeout = setTimeout(() => {
              isLocked = false;
            }, LOCK_DURATION);
            return;
          }
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (lockTimeout) clearTimeout(lockTimeout);
    };
  }, [location.pathname]);
}
