'use client';

import { useState } from 'react';
import { WorkGridCarousel, workImages } from '@/components/work-grid-carousel';

export function WorkSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const cornerPositions = [
    'left-4 top-[38%] sm:left-6 lg:left-10',
    'right-4 top-[38%] text-right sm:right-6 lg:right-10',
    'bottom-10 left-4 sm:bottom-14 sm:left-6 lg:left-10',
    'bottom-10 right-4 text-right sm:bottom-14 sm:right-6 lg:right-10',
  ];

  return (
    <section
      id="workflows"
      className="relative flex min-h-[100dvh] snap-start items-center justify-center overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-10"
      aria-labelledby="workflows-heading"
    >
      <p className="absolute left-4 top-10 font-[family-name:var(--font-anon-pro)] text-xs uppercase sm:left-6 sm:top-14 lg:left-10"></p>
      <div className="absolute right-4 top-10 max-w-[min(48vw,520px)] sm:right-6 sm:top-14 lg:right-10">
        <h2
          id="workflows-heading"
          className="font-[family-name:var(--font-roboto)] text-[clamp(1.5rem,2.7vw,3rem)] font-light leading-[.92] tracking-[-.06em]"
        >
          Driven by{' '}
          <em className="font-[family-name:var(--font-editorial)] tracking-[-0.08em]">
            Curiousity
          </em>{' '}
          . Powered by Work.
        </h2>
        <a
          href="#projects"
          className="mt-5 inline-flex rounded bg-black/[0.06] px-3 py-2 font-[family-name:var(--font-roboto)] text-sm transition-colors hover:bg-black/10"
        >
          See my work
        </a>
      </div>
      <WorkGridCarousel activeIndex={activeIndex} onActiveChange={setActiveIndex} />
      {workImages.map((image, index) => (
        <div key={image.title} className={`absolute max-w-[220px] ${cornerPositions[index]}`}>
          <p className="font-[family-name:var(--font-roboto)] text-[clamp(1rem,2vw,2rem)] tracking-[-.05em]">
            {image.title}
          </p>
          <p
            className={`mt-3 font-[family-name:var(--font-anon-pro)] text-[12px] uppercase leading-[1.3] transition-opacity duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
          >
            {image.description}
          </p>
        </div>
      ))}
    </section>
  );
}
