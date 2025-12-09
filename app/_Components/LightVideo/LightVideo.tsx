"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  webmSrc?: string;
  mp4Src?: string;
  poster?: string;
  className?: string;
  muted?: boolean;
  playsInline?: boolean;
  loop?: boolean;
  autoPlay?: boolean;
};

export default function LightVideo({
  mp4Src = "/video/lightpillar-720.mp4",
  poster = "/images/lightpillar-poster.jpg",
  className = "",
  muted = true,
  playsInline = true,
  loop = true,
  autoPlay = true,
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;
    const el = videoRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            if (!el.paused) el.pause();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (inView && autoPlay) {
      el.play().catch(() => {});
    }
  }, [inView, autoPlay]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-[125vh] object-cover"
        poster={poster}
        muted={muted}
        playsInline={playsInline}
        loop={loop}
        preload={inView ? "auto" : "metadata"}
        aria-label="Decorative animated background"
      >
        {inView && (
          <>
            <source src={mp4Src} type="video/mp4" />
          </>
        )}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
