import React, { useRef, useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

export default function VideoPlayer({
  videoUrl,
  title = "Bodyweight Execution Protocol",
  category = "Home Workout"
}) {
  const videoRef = useRef(null);

  // Pehle render me hi sahi value, taaki galti se scroll-autoplay na chale
  const [isDesktop] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches
  );

  // MOBILE: scroll me aane par play, bahar jaane par pause
  useEffect(() => {
    if (isDesktop) return;

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

  // DESKTOP: hover par play, leave par pause + pehle frame par wapas
  const handleMouseEnter = () => {
    if (isDesktop && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0.1;
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && screen.orientation && screen.orientation.unlock) {
        screen.orientation.unlock();
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleTap = () => {
    if (isDesktop) return;
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (videoEl.requestFullscreen) {
      videoEl.requestFullscreen()
        .then(() => {
          if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock('portrait').catch(() => {});
          }
        })
        .catch(() => {});
    } else if (videoEl.webkitEnterFullscreen) {
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
      <video
        ref={videoRef}
        src={`${videoUrl}#t=0.1`}   // poster ki jagah pehla frame
        onClick={handleTap}
        className="w-full h-full object-contain cursor-pointer"
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Top overlay same as before */}
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