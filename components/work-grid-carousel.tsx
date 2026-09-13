'use client';

import Image from 'next/image';

export const workImages = [
  {
    src: '/images/website-image.jpg',
    alt: 'Website photograph',
    position: 'object-[50%_18%]',
    title: 'Website',
    description: 'Drive and sustain growth with platforms that mean business.',
  },
  {
    src: '/images/ai-image.jpg',
    alt: 'ai photograph',
    position: 'object-[45%_45%]',
    title: 'AI system',
    description: 'Mobile experiences that make every essential interaction feel effortless.',
  },
  {
    src: '/images/ui-image.jpg',
    alt: 'UI/UX photograph',
    position: 'object-[24%_42%]',
    title: 'UI/UX Design',
    description: 'Deliver immediate impact and keep scaling from there.',
  },
  {
    src: '/images/design-image.jpg',
    alt: 'Abstract portfolio artwork',
    position: 'object-[72%_55%]',
    title: 'Design System',
    description: 'Memorable digital moments with a clear point of view.',
  },
];

type WorkGridCarouselProps = {
  activeIndex: number | null;
  onActiveChange: (index: number | null) => void;
};

export function WorkGridCarousel({ activeIndex, onActiveChange }: WorkGridCarouselProps) {
  return (
    <div
      className="grid h-[min(47vw,500px)] w-[min(58vw,520px)] grid-cols-2 grid-rows-2 gap-1 sm:h-[min(43vw,560px)] sm:w-[min(48vw,620px)]"
      aria-label="Selected imagery"
      onMouseLeave={() => onActiveChange(null)}
    >
      {workImages.map((image, index) => {
        const isActive = activeIndex === index;
        const isInactive = activeIndex !== null && !isActive;
        return (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onMouseEnter={() => onActiveChange(index)}
            onFocus={() => onActiveChange(index)}
            onBlur={() => onActiveChange(null)}
            className={`relative overflow-hidden text-left outline-none transition-transform duration-500 ease-out focus-visible:ring-2 focus-visible:ring-black ${isActive ? 'z-10 scale-[1.09]' : isInactive ? 'scale-[.9] opacity-70' : 'scale-100'}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 30vw, 20vw"
              className={`object-cover transition-transform duration-700 ${image.position} ${isActive ? 'scale-110' : 'scale-100'}`}
            />
          </button>
        );
      })}
    </div>
  );
}
