"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: "Ella Odyssey",
    description: "Experience the lush green hills and misty mountains on the most scenic train journey.",
    imageUrl: "/assets/ella.jpg",
  },
  {
    id: 2,
    title: "Seaside Adventure",
    description: "Enjoy breathtaking views of the Indian Ocean along the picturesque coastal line.",
    imageUrl: "/assets/seaside.jpg",
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden" ref={emblaRef}>
      <div className="flex h-full Touch-pan-y">
        {slides.map((slide) => (
          <div className="relative flex-none w-full h-full min-w-0 bg-slate-800" key={slide.id}>
            <Image 
              src={slide.imageUrl} 
              alt={slide.title}
              fill
              className="object-cover"
              priority={slide.id === 1}
            />
            
            {/* Modern gradient fade for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10" /> 
            
            <div className="absolute inset-0 flex items-end justify-start z-20 pb-16 px-12 md:px-24">
              <div className="text-left text-white max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">{slide.title}</h1>
                <p className="text-lg md:text-xl drop-shadow-sm text-gray-100">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-colors"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-colors"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
