"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: "Discover Sri Lanka by Rail",
    description: "Experience the most scenic train journeys in the world.",
    imageUrl: "/assets/hero-1.jpg", // Replace with your actual image paths
  },
  {
    id: 2,
    title: "Journey Through the Hills",
    description: "Travel through tea plantations and misty mountains.",
    imageUrl: "/assets/hero-2.jpg",
  },
  {
    id: 3,
    title: "Coastal Train Rides",
    description: "Enjoy breathtaking views of the Indian Ocean along the coast.",
    imageUrl: "/assets/hero-3.jpg",
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
          <div className="relative flex-none w-full h-full min-w-0" key={slide.id}>
            {/* Fallback styling in case images are missing */}
            <div className="absolute inset-0 bg-slate-800" /> 
            
            <div className="absolute inset-0 flex items-center justify-center z-10 px-12">
              <div className="text-center text-white bg-black/40 p-8 rounded-xl backdrop-blur-sm">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl">{slide.description}</p>
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
