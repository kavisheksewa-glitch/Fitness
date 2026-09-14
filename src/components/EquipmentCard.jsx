import React, { useState, useRef } from 'react';
import { Sparkles, Layers, ShieldCheck, Eye, Play, Pause } from 'lucide-react';

export default function EquipmentCard({
  title = "Precision Machined Dumbbells",
  category = "Free Weights",
  material = "Urethane & Matte Stainless Steel",
  description = "Calibrated weight distribution engineered for superior ergonomics, balance, and high-impact resistance.",
  videoUrl = "https://assets.mixkit.co/videos/preview/mixkit-gym-equipment-for-weight-training-40263-large.mp4",
  imageUrl,
  specs = [
    { label: "Weight Range", value: "5kg - 60kg" },
    { label: "Tolerance", value: "±0.5%" },
    { label: "Finish", value: "Custom Anodized" }
  ]
}) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-zinc-900/40 border border-zinc-800/80 rounded-xl overflow-hidden hover:border-amber-500/40 transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(245,158,11,0.08)] flex flex-col justify-between"
    >
      {/* Background Ambient Glow on Hover */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all duration-500" />

      {/* Media Container (3D Loop Video or Image) */}
      <div className="relative aspect-[16/10] bg-zinc-950 overflow-hidden">
        {videoUrl ? (
          <video
            ref={videoRef}
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
          />
        ) : (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
          />
        )}

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-amber-400 bg-zinc-950/80 border border-amber-500/30 px-3 py-1 rounded-full backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-amber-400" />
            3D Loop Render
          </span>

          {videoUrl && (
            <button
              onClick={toggleVideoPlay}
              className="p-2 rounded-full bg-zinc-950/80 border border-zinc-800 text-zinc-300 hover:text-amber-400 hover:border-amber-500/50 transition-all duration-300 backdrop-blur-md"
              aria-label={isPlaying ? "Pause video loop" : "Play video loop"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            </button>
          )}
        </div>

        {/* Category Label overlay at bottom of media */}
        <div className="absolute bottom-3 left-6 z-10">
          <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-amber-500" />
            {category}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 pt-4 flex-grow flex flex-col justify-between space-y-6">
        <div>
          <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-[11px] uppercase tracking-widest text-amber-500/90 font-medium mt-1 mb-3">
            {material}
          </p>

          <p className="text-zinc-400 text-xs leading-relaxed font-light">
            {description}
          </p>
        </div>

        {/* Specifications Grid */}
        {specs && specs.length > 0 && (
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-zinc-800/60 bg-zinc-950/40 p-3 rounded-lg border">
            {specs.map((spec, index) => (
              <div key={index} className="text-center">
                <span className="block text-[9px] font-mono uppercase tracking-wider text-zinc-500">
                  {spec.label}
                </span>
                <span className="block text-xs font-bold text-zinc-200 mt-0.5">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Footer Action */}
        <div className="pt-2 flex items-center justify-between text-xs border-t border-zinc-800/40">
          <span className="flex items-center gap-1.5 text-zinc-500 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
            Commercial Grade
          </span>

          <button className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-[11px] uppercase tracking-widest group/btn transition-colors">
            <span>Inspect Specs</span>
            <Eye className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}