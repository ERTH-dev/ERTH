import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 291;
const LIVE_HERO_START = 0.96;
const FRAME_PATH = (idx) => `/frames/ezgif-frame-${String(idx).padStart(3, '0')}.webp`;

export default function ScrollImageSequence() {
  const { lang, content } = useLanguage();
  const data = content.home;

  const outerWrapperRef = useRef(null);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
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

  // Fast preloader
  useEffect(() => {
    let isCancelled = false;
    const images = new Array(TOTAL_FRAMES);
    imagesRef.current = images;
    loadedFlagsRef.current = new Array(TOTAL_FRAMES).fill(false);

    let loadedCount = 0;

    const onFrameLoad = (idx, img) => {
      if (isCancelled) return;
      images[idx] = img;
      loadedFlagsRef.current[idx] = true;
      loadedCount++;

      const progress = Math.min(100, Math.round((loadedCount / TOTAL_FRAMES) * 100));
      setLoadingProgress(progress);

      if (loadedCount >= Math.min(15, TOTAL_FRAMES)) {
        setIsLoaded(true);
      }

      if (idx === currentFrameRef.current) {
        renderFrame(idx);
      }
    };

    // Load Frame 1 immediately
    const firstImg = new Image();
    firstImg.src = FRAME_PATH(1);
    firstImg.onload = () => {
      if (isCancelled) return;
      images[0] = firstImg;
      loadedFlagsRef.current[0] = true;
      onFrameLoad(0, firstImg);
      updateCanvasSize();
      renderFrame(0);
    };

    // Preload remaining frames in batches
    const loadBatch = (startIdx, batchSize) => {
      for (let i = startIdx; i < Math.min(TOTAL_FRAMES + 1, startIdx + batchSize); i++) {
        const idx = i - 1;
        const img = new Image();
        img.src = FRAME_PATH(i);
        if (img.decode) {
          img.decode()
            .then(() => onFrameLoad(idx, img))
            .catch(() => {
              img.onload = () => onFrameLoad(idx, img);
              img.onerror = () => {
                if (!isCancelled) loadedCount++;
              };
            });
        } else {
          img.onload = () => onFrameLoad(idx, img);
          img.onerror = () => {
            if (!isCancelled) loadedCount++;
          };
        }
      }
    };

    loadBatch(2, 30);
    const timer = setTimeout(() => {
      if (!isCancelled) {
        loadBatch(32, TOTAL_FRAMES);
      }
    }, 100);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
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
    const actualHero = actualHeroRef.current;
    const scrollHint = scrollHintRef.current;

    if (!outer || !container) return;

    const ctx = gsap.context(() => {
      const frameTracker = { frame: 0 };

      const updateFrame = () => {
        const frameIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.round(frameTracker.frame))
        );

        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          if (!renderPendingRef.current) {
            renderPendingRef.current = true;
            requestAnimationFrame(() => {
              renderFrame(currentFrameRef.current);
              renderPendingRef.current = false;
            });
          }
        }
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outer,
          start: 'top top',
          end: '+=230%',
          pin: container,
          scrub: 0.35,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Bring in the real navigation with the real hero.
            window.dispatchEvent(
              new CustomEvent('sequence-progress', { 
                detail: { 
                  progress: self.progress,
                  isPastHero: self.progress >= LIVE_HERO_START
                } 
              })
            );

          },
          onLeave: () => {
            if (actualHero) {
              actualHero.inert = false;
              actualHero.style.pointerEvents = 'auto';
            }
            window.dispatchEvent(
              new CustomEvent('sequence-progress', { detail: { progress: 1, isPastHero: true } })
            );
          },
          onEnterBack: () => {
            if (actualHero) {
              actualHero.inert = false;
              actualHero.style.pointerEvents = 'auto';
            }
            window.dispatchEvent(
              new CustomEvent('sequence-progress', { detail: { progress: 0.99, isPastHero: true } })
            );
          },
          onLeaveBack: () => {
            if (actualHero) {
              actualHero.inert = true;
              actualHero.style.pointerEvents = 'none';
            }
            window.dispatchEvent(
              new CustomEvent('sequence-progress', { detail: { progress: 0, isPastHero: false } })
            );
          }
        }
      });

      // Use the whole pinned distance for the animation, with no frozen tail.
      tl.to(frameTracker, {
        frame: TOTAL_FRAMES - 1,
        ease: 'none',
        duration: 1,
        onUpdate: updateFrame
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

      // Hand off to the crisp, interactive React hero as the image fills the screen.
      if (actualHero) {
        gsap.set(actualHero, { opacity: 0, pointerEvents: 'none' });
        actualHero.inert = true;

        const syncHeroInteractivity = () => {
          const isVisible = Number(gsap.getProperty(actualHero, 'opacity')) > 0.99;
          actualHero.inert = !isVisible;
          actualHero.style.pointerEvents = isVisible ? 'auto' : 'none';
        };

        tl.to(actualHero, {
          opacity: 1,
          ease: 'none',
          duration: 0.01,
          onUpdate: syncHeroInteractivity,
          onComplete: syncHeroInteractivity,
          onReverseComplete: syncHeroInteractivity
        }, LIVE_HERO_START);
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
        <div className="sequence-canvas-wrapper">
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

        <div className="sequence-actual-hero" ref={actualHeroRef} inert>
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
