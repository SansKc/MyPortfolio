'use client';

import { useEffect, useState } from 'react';

export function SitePreloader() {
  const [progress, setProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const finish = () => {
      setProgress(100);
      window.setTimeout(() => setIsLeaving(true), 220);
      window.setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = previousOverflow;
      }, 920);
    };
    const progressTimer = window.setInterval(() => {
      setProgress((current) => Math.min(current + 8, 82));
    }, 90);
    const minimumDisplay = window.setTimeout(finish, 850);

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(minimumDisplay);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col justify-between bg-[#f6f6f5] px-6 py-6 text-[#161616] transition-all duration-700 ease-[cubic-bezier(.77,0,.18,1)] sm:px-10 sm:py-8 ${
        isLeaving ? 'pointer-events-none -translate-y-3 opacity-0' : 'opacity-100'
      }`}
      role="status"
      aria-label="Loading Sanskar Kc portfolio"
    >
      <div className="flex items-center justify-between border-b border-black/10 pb-4 font-[family-name:var(--font-anon-pro)] text-[10px] uppercase tracking-[0.12em] sm:pb-5">
        <span>Loading</span>
        <span>Please wait</span>
      </div>

      <div className="mx-auto w-full max-w-md">
        <div className="flex items-end justify-between">
          <p className="font-[family-name:var(--font-roboto)] text-[clamp(2.5rem,7vw,5rem)] font-light leading-none tracking-[-0.08em]">
            Loading
          </p>
          <span className="mb-1 font-[family-name:var(--font-anon-pro)] text-xs tracking-[-0.04em]">
            {String(progress).padStart(2, '0')}%
          </span>
        </div>
        <div className="mt-6 h-px w-full overflow-hidden bg-black/15">
          <div
            className="h-full bg-black transition-[width] duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-end justify-between font-[family-name:var(--font-anon-pro)] text-[10px] uppercase tracking-[0.12em]">
        <span>Preparing the experience</span>
        <span>01 / 01</span>
      </div>
    </div>
  );
}
