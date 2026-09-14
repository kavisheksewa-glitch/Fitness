import React, { useRef, useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

export default function VideoPlayer({ 
  videoUrl, 
  posterUrl, 
  title = "Bodyweight Execution Protocol", 
  category = "Home Workout"
}) {
  const videoRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect device type once, on mount (mouse+hover = desktop, everything else = touch/mobile)
  useEffect(() => {
    const desktopQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsDesktop(desktopQuery.matches);
  }, []);

  // MOBILE: auto-play when scrolled into view, pause when scrolled out
  useEffect(() => {
    if (isDesktop) return; // desktop uses hover instead, skip scroll-autoplay

    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoEl.play().catch(() => {});
          } else {
            videoEl.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, [isDesktop]);

  // DESKTOP: play on mouse hover, pause on mouse leave
  const handleMouseEnter = () => {
    if (isDesktop && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop && videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Release the orientation lock once fullscreen closes, so the rest of the site isn't affected
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && screen.orientation && screen.orientation.unlock) {
        screen.orientation.unlock();
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // MOBILE: tap video to go fullscreen, locked to portrait
  const handleTap = () => {
    if (isDesktop) return; // desktop doesn't need tap-to-fullscreen
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (videoEl.requestFullscreen) {
      videoEl.requestFullscreen()
        .then(() => {
          if (screen.orientation && screen.orientation.lock) {
            // Locks fullscreen to portrait on Android/Chrome-based browsers
            screen.orientation.lock('portrait').catch(() => {});
          }
        })
        .catch(() => {});
    } else if (videoEl.webkitEnterFullscreen) {
      // iOS Safari's native video fullscreen — see note below, orientation lock isn't supported here
      videoEl.webkitEnterFullscreen();
    } else if (videoEl.webkitRequestFullscreen) {
      videoEl.webkitRequestFullscreen();
    }
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-video bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-black/80"
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterUrl}
        onClick={handleTap}
        className="w-full h-full object-contain cursor-pointer"
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Top Gradient Overlay & Category Badge (visual only, no controls) */}
      <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              {category}
            </span>
            <h3 className="text-white text-base md:text-lg font-serif font-bold mt-2 tracking-wide">
              {title}
            </h3>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-zinc-400 text-xs font-mono">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span>Form Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
}