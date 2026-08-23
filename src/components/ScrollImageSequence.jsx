import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 295; // Plays 3D animation smoothly through frame 295
const FRAME_PATH = (idx) => `/frames/ezgif-frame-${String(idx).padStart(3, '0')}.webp`;

export default function ScrollImageSequence() {
  const { lang, content } = useLanguage();
  const data = content.home;

  const outerWrapperRef = useRef(null);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const canvasWrapperRef = useRef(null);
  const actualHeroRef = useRef(null);
  const scrollHintRef = useRef(null);
  const loaderRef = useRef(null);

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const imagesRef = useRef([]);
  const loadedFlagsRef = useRef(new Array(TOTAL_FRAMES).fill(false));
  const currentFrameRef = useRef(0);
  const renderPendingRef = useRef(false);

  // Fallback to closest loaded frame
  const findClosestLoadedImage = useCallback((targetIdx) => {
    const images = imagesRef.current;
    const flags = loadedFlagsRef.current;
    if (flags[targetIdx] && images[targetIdx]) {
      return images[targetIdx];
    }
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = targetIdx - offset;
      if (prev >= 0 && flags[prev] && images[prev]) {
        return images[prev];
      }
      const next = targetIdx + offset;
      if (next < TOTAL_FRAMES && flags[next] && images[next]) {
        return images[next];
      }
    }
    return images[0] || null;
  }, []);

  // High-performance canvas frame draw
  const renderFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const img = findClosestLoadedImage(index);
    if (!img || !img.complete || img.naturalWidth === 0) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const hRatio = cw / iw;
    const vRatio = ch / ih;
    const ratio = Math.max(hRatio, vRatio);

    const renderW = Math.round(iw * ratio);
    const renderH = Math.round(ih * ratio);
    const offsetX = Math.round((cw - renderW) / 2);
    const offsetY = Math.round((ch - renderH) / 2);

    ctx.fillStyle = '#050608';
    ctx.fillRect(0, 0, cw, ch);
    ctx.drawImage(img, 0, 0, iw, ih, offsetX, offsetY, renderW, renderH);
  }, [findClosestLoadedImage]);

  // High-DPI canvas resize
  const updateCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    renderFrame(currentFrameRef.current);
  }, [renderFrame]);

  // Lock page scrolling while loading screen is active
  useEffect(() => {
    if (!isLoaded) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    } else {
      document.body.style.overflow = '';
      ScrollTrigger.refresh();
    }
  }, [isLoaded]);

  // Complete preloader that keeps loading screen active until every frame is ready
  useEffect(() => {
    let isCancelled = false;
    const images = new Array(TOTAL_FRAMES);
    imagesRef.current = images;
    loadedFlagsRef.current = new Array(TOTAL_FRAMES).fill(false);

    let loadedCount = 0;

    const handleFrameComplete = (idx, img, success) => {
      if (isCancelled) return;
      if (success && img) {
        images[idx] = img;
        loadedFlagsRef.current[idx] = true;
      }
      loadedCount++;

      const progress = Math.min(100, Math.round((loadedCount / TOTAL_FRAMES) * 100));
      setLoadingProgress(progress);

      // Render initial frame to canvas immediately once frame 0 is ready
      if (idx === 0 && success && img) {
        updateCanvasSize();
        renderFrame(0);
      }

      // Keep loading screen active until every single frame is loaded and rendered
      if (loadedCount >= TOTAL_FRAMES) {
        setLoadingProgress(100);
        renderFrame(currentFrameRef.current || 0);
        setIsLoaded(true);
      }
    };

    const loadSingleFrame = (idx) => {
      const img = new Image();
      img.src = FRAME_PATH(idx + 1);

      if (img.decode) {
        img.decode()
          .then(() => {
            handleFrameComplete(idx, img, true);
          })
          .catch(() => {
            if (img.complete && img.naturalWidth > 0) {
              handleFrameComplete(idx, img, true);
            } else {
              img.onload = () => handleFrameComplete(idx, img, true);
              img.onerror = () => handleFrameComplete(idx, null, false);
            }
          });
      } else {
        img.onload = () => handleFrameComplete(idx, img, true);
        img.onerror = () => handleFrameComplete(idx, null, false);
      }
    };

    // Load Frame 1 immediately
    loadSingleFrame(0);

    // Preload all remaining frames concurrently
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      loadSingleFrame(i);
    }

    return () => {
      isCancelled = true;
    };
  }, [updateCanvasSize, renderFrame]);

  // Window resize
  useEffect(() => {
    const handleResize = () => {
      updateCanvasSize();
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateCanvasSize]);

  // GSAP ScrollTrigger Sequence
  useEffect(() => {
    const outer = outerWrapperRef.current;
    const container = containerRef.current;
    const canvasWrapper = canvasWrapperRef.current;
    const actualHero = actualHeroRef.current;
    const scrollHint = scrollHintRef.current;

    if (!outer || !container) return;

    const ctx = gsap.context(() => {
      const frameTracker = { frame: 0 };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outer,
          start: 'top top',
          end: '+=280%',
          pin: container,
          scrub: 0.35,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Signal navbar that it should only appear when scrolled past the hero (progress >= 1.0)
            window.dispatchEvent(
              new CustomEvent('sequence-progress', { 
                detail: { 
                  progress: self.progress,
                  isPastHero: self.progress >= 1.0
                } 
              })
            );

            // Ensure actualHero pointer-events are enabled as soon as the hero is revealed
            if (actualHero) {
              actualHero.style.pointerEvents = self.progress >= 0.80 ? 'auto' : 'none';
            }

            // Update canvas frame
            const frameIndex = Math.min(
              TOTAL_FRAMES - 1,
              Math.max(0, Math.round(frameTracker.frame))
            );

            if (frameIndex !== currentFrameRef.current) {
              currentFrameRef.current = frameIndex;
              if (!renderPendingRef.current) {
                renderPendingRef.current = true;
                requestAnimationFrame(() => {
                  renderFrame(frameIndex);
                  renderPendingRef.current = false;
                });
              }
            }
          },
          onLeave: () => {
            if (actualHero) actualHero.style.pointerEvents = 'auto';
            window.dispatchEvent(
              new CustomEvent('sequence-progress', { detail: { progress: 1, isPastHero: true } })
            );
          },
          onEnterBack: () => {
            if (actualHero) actualHero.style.pointerEvents = 'auto';
            window.dispatchEvent(
              new CustomEvent('sequence-progress', { detail: { progress: 0.99, isPastHero: false } })
            );
          },
          onLeaveBack: () => {
            if (actualHero) actualHero.style.pointerEvents = 'none';
            window.dispatchEvent(
              new CustomEvent('sequence-progress', { detail: { progress: 0, isPastHero: false } })
            );
          }
        }
      });

      // 1. Scrub frames across 0.0 -> 0.82
      tl.to(frameTracker, {
        frame: TOTAL_FRAMES - 1,
        ease: 'none',
        duration: 0.82
      }, 0);

      // 2. Scroll hint fades out early (0 to 0.08)
      if (scrollHint) {
        tl.to(scrollHint, {
          opacity: 0,
          y: -25,
          ease: 'power1.out',
          duration: 0.08
        }, 0);
      }

      // 3. Fast, punchy Zoom-in and transition to the ACTUAL real landing page hero
      if (canvasWrapper && actualHero) {
        // Initial state of actual hero with zoom-in & depth blur setup
        gsap.set(actualHero, { 
          opacity: 0, 
          scale: 0.88,
          filter: 'blur(6px)',
          pointerEvents: 'none' 
        });

        // Fast Zoom-in on the 3D Canvas towards the end of sequence (0.76 -> 0.84)
        tl.to(canvasWrapper, {
          scale: 1.24,
          ease: 'power3.in',
          duration: 0.08
        }, 0.76);

        // Quick fade out of canvas underneath
        tl.to(canvasWrapper, {
          opacity: 0,
          ease: 'power2.inOut',
          duration: 0.06
        }, 0.80);

        // Fast Zoom-in, unblur, and reveal live landing page hero (0.80 -> 0.87)
        tl.to(actualHero, {
          opacity: 1,
          scale: 1.0,
          filter: 'blur(0px)',
          pointerEvents: 'auto',
          ease: 'power3.out',
          duration: 0.07
        }, 0.80);

        // Rapid staggered element zoom-in & elevation inside the hero
        const heroTitle = actualHero.querySelector('h1');
        const heroLead = actualHero.querySelector('.lead');
        const heroCta = actualHero.querySelector('.hero-cta');

        if (heroTitle) {
          gsap.set(heroTitle, { y: 18, scale: 0.94 });
          tl.to(heroTitle, { y: 0, scale: 1, ease: 'power3.out', duration: 0.06 }, 0.81);
        }
        if (heroLead) {
          gsap.set(heroLead, { y: 14, scale: 0.96 });
          tl.to(heroLead, { y: 0, scale: 1, ease: 'power3.out', duration: 0.06 }, 0.82);
        }
        if (heroCta) {
          gsap.set(heroCta, { y: 14, scale: 0.92 });
          tl.to(heroCta, { y: 0, scale: 1, ease: 'back.out(1.3)', duration: 0.06 }, 0.83);
        }
      }
    }, outer);

    return () => {
      ctx.revert();
    };
  }, [renderFrame]);

  // Fade out loader once ready
  useEffect(() => {
    if (isLoaded && loaderRef.current) {
      gsap.to(loaderRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.4,
        ease: 'power2.out'
      });
    }
  }, [isLoaded]);

  return (
    <div className="sequence-scroll-section" ref={outerWrapperRef}>
      <div className="sequence-container" ref={containerRef}>
        {/* Loading Indicator */}
        <div 
          className={`sequence-loader ${isLoaded ? 'loaded' : ''}`} 
          ref={loaderRef}
        >
          <div className="loader-inner">
            <div className="loader-logo-wrap">
              <img src="/new-erth-logo.png" alt="ERTH Logo" className="loader-logo" />
              <div className="loader-glow-ring"></div>
            </div>
            <div className="loader-progress-wrap">
              <div 
                className="loader-progress-bar" 
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <div className="loader-text">
              <span className="loader-label">
                {lang === 'en' ? 'INITIALIZING EXPERIENCE' : 'جاري التحميل'}
              </span>
              <span className="loader-pct">{loadingProgress}%</span>
            </div>
          </div>
        </div>

        {/* Main 3D Canvas Layer */}
        <div className="sequence-canvas-wrapper" ref={canvasWrapperRef}>
          <canvas ref={canvasRef} className="sequence-canvas" />
        </div>

        {/* Initial Scroll Prompt */}
        <div className="sequence-scroll-hint" ref={scrollHintRef}>
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span className="scroll-hint-text">
            {lang === 'en' ? 'Scroll to explore' : 'مرر للاستكشاف'}
          </span>
        </div>

        {/* The Actual Real Landing Page Hero Section */}
        <div className="sequence-actual-hero" ref={actualHeroRef}>
          <section className="hero actual-landing-hero">
            <div className="radial-glow" style={{ top: '-10%', left: '20%' }}></div>
            <div className="radial-glow-blue" style={{ bottom: '-10%', right: '10%' }}></div>
            <div className="container text-center">
              <div className="hero-content">
                <h1>{data.heroTitle}</h1>
                <p className="lead">{data.heroSubtitle}</p>
                <div className="hero-cta">
                  <Link to="/join" className="btn btn-primary btn-lg">
                    {data.ctaJoin}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
