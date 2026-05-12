"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useRef, useState } from "react";

interface VideoShowcaseProps {
  dict: any;
}

export function VideoShowcase({ dict }: VideoShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
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
    <AnimatedSection delay={0.15}>
      <section className="video-showcase-section">
        <div className="video-showcase-header">
          <span className="video-showcase-badge">
            {dict.videoShowcase?.badge || "🎬 Demo"}
          </span>
          <h2 className="video-showcase-title">
            {dict.videoShowcase?.title || "Veja a PDW em ação"}
          </h2>
          <p className="video-showcase-subtitle">
            {dict.videoShowcase?.subtitle || "Descubra como funciona a carteira digital portuguesa em menos de 2 minutos."}
          </p>
        </div>

        <div className="video-showcase-wrapper">
          <div className="video-showcase-glow" />
          <div className="video-showcase-container" onClick={handlePlay}>
            <video
              ref={videoRef}
              playsInline
              muted
              loop
              preload="metadata"
              className="video-showcase-player"
              poster="/Imagem-home.png"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/concept_video.mp4" type="video/mp4" />
            </video>

            {/* Play/Pause overlay */}
            <div className={`video-showcase-overlay ${isPlaying ? 'video-playing' : ''}`}>
              <button
                className="video-play-btn"
                aria-label={isPlaying ? "Pause" : "Play"}
                onClick={(e) => { e.stopPropagation(); handlePlay(); }}
              >
                {isPlaying ? (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <polygon points="6,3 20,12 6,21" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
