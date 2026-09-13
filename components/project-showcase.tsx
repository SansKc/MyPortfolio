'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type ShowcaseImages = Partial<Record<'overview' | 'interface' | 'system', string>>;
type ShowcaseLabels = Partial<Record<'overview' | 'interface' | 'system', string>>;

type ProjectShowcaseProps = {
  projectName: string;
  accent: string;
  images?: ShowcaseImages;
  labels?: ShowcaseLabels;
};

const screens = [
  { key: 'overview', label: 'Overview' },
  { key: 'interface', label: 'Interface' },
  { key: 'system', label: 'System' },
] as const;

export function ProjectShowcase({ projectName, accent, images = {}, labels = {} }: ProjectShowcaseProps) {
  const [active, setActive] = useState(0);
  const changeSlide = (direction: number) =>
    setActive((current) => (current + direction + screens.length) % screens.length);

  useEffect(() => {
    const timer = window.setInterval(() => changeSlide(1), 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[58dvh] items-center justify-center overflow-hidden bg-[#f6f6f5] py-12 lg:min-h-dvh lg:py-0">
      <div className="absolute left-1/2 top-1/2 h-[78%] w-[min(78%,610px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <div className="flex h-full flex-col transition-transform duration-700 ease-[cubic-bezier(.77,0,.18,1)]" style={{ transform: `translateY(-${active * 100}%)` }}>
          {screens.map((screen, index) => {
            const label = labels[screen.key] ?? screen.label;
            const image = images[screen.key];

            return (
            <div key={screen.key} className="flex h-full shrink-0 items-center justify-center">
              <article className="relative aspect-[1.06] w-full overflow-hidden rounded-[2rem] p-7 shadow-[0_25px_60px_rgb(0_0_0_/_10%)] sm:p-10" style={{ backgroundColor: accent }}>
                {image ? (
                  <div className="absolute inset-x-[6%] top-[15%] aspect-video">
                    <Image
                      src={image}
                      alt={`${projectName} ${label}`}
                      fill
                      className="rounded-sm object-contain"
                      sizes="(min-width: 1024px) 32vw, 62vw"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-x-[11%] top-[23%] rounded-sm bg-white/90 p-3 shadow-[0_14px_30px_rgb(0_0_0_/_13%)] sm:p-5">
                    <div className="flex items-center justify-between border-b border-black/10 pb-3 text-[7px] font-bold sm:text-[9px]"><span>{projectName.toUpperCase()}</span><span>Menu&nbsp;&nbsp; Search</span></div>
                    <div className="mt-5 grid grid-cols-[1.2fr_.8fr] gap-4"><div><div className="h-2 w-4/5 rounded bg-black/75" /><div className="mt-2 h-2 w-3/5 rounded bg-black/20" /><div className="mt-5 h-14 rounded bg-black/10" /></div><div className="h-24 rounded bg-black/15" /></div>
                    <div className="mt-4 grid grid-cols-3 gap-2"><div className="h-7 rounded bg-black/10" /><div className="h-7 rounded bg-black/10" /><div className="h-7 rounded bg-black/10" /></div>
                  </div>
                )}
                <div className="absolute bottom-7 left-7 sm:bottom-10 sm:left-10"><p className="text-xs text-black/55">0{index + 1} / 0{screens.length}</p><p className="mt-1 font-[family-name:var(--font-roboto)] text-xl tracking-[-0.05em] sm:text-2xl">{label}</p></div>
              </article>
            </div>
            );
          })}
        </div>
      </div>
      <div className="absolute right-4 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-3 lg:right-10">
        <button onClick={() => changeSlide(-1)} aria-label="Previous project screen" className="flex h-10 w-10 items-center justify-center rounded bg-black/[0.06] text-lg transition-colors hover:bg-black/10">↑</button>
        <div className="flex flex-col items-center gap-2">{screens.map((screen, index) => <button key={screen.key} onClick={() => setActive(index)} aria-label={`Show ${labels[screen.key] ?? screen.label}`} className={`h-1.5 w-1.5 rounded-full transition-all ${index === active ? 'scale-125 bg-black' : 'bg-black/20'}`} />)}</div>
        <button onClick={() => changeSlide(1)} aria-label="Next project screen" className="flex h-10 w-10 items-center justify-center rounded bg-black/[0.06] text-lg transition-colors hover:bg-black/10">↓</button>
      </div>
    </section>
  );
}
