import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_IMAGES } from '@/data/content';

export default function ServiceHeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((current) =>
      HERO_IMAGES.length > 0
        ? (current + 1) % HERO_IMAGES.length
        : 0
    );
  }, []);

  const previousSlide = useCallback(() => {
    setCurrentIndex((current) =>
      HERO_IMAGES.length > 0
        ? (current - 1 + HERO_IMAGES.length) % HERO_IMAGES.length
        : 0
    );
  }, []);

  useEffect(() => {
    if (isPaused || HERO_IMAGES.length <= 1) return;

    const interval = window.setInterval(nextSlide, 5000);

    return () => window.clearInterval(interval);
  }, [nextSlide, isPaused]);

  if (!HERO_IMAGES.length) {
    return null;
  }

  return (
    <section
      className="relative w-full h-[55vh] min-h-[590px] max-h-[650px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Images */}
      {HERO_IMAGES.map((image, index) => (
        <div
          key={image.url}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentIndex
              ? 'opacity-100'
              : 'opacity-0'
          }`}
          aria-hidden={index !== currentIndex}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="object-cover w-full h-full"
          />
        </div>
      ))}

      {/* Subtle overlay */}
      <div className="absolute inset-0 pointer-events-none bg-black/10" />

      {/* Previous */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous image"
        className="absolute z-10 flex items-center justify-center w-10 h-10 text-white transition-all -translate-y-1/2 left-4 md:left-6 top-1/2 md:w-12 md:h-12 hover:bg-black/20"
      >
        <ChevronLeft className="w-7 h-7 md:w-8 md:h-8" />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next image"
        className="absolute z-10 flex items-center justify-center w-10 h-10 text-white transition-all -translate-y-1/2 right-4 md:right-6 top-1/2 md:w-12 md:h-12 hover:bg-black/20"
      >
        <ChevronRight className="w-7 h-7 md:w-8 md:h-8" />
      </button>

      {/* Dots */}
      {HERO_IMAGES.length > 1 && (
        <div className="absolute z-10 flex items-center gap-2 -translate-x-1/2 bottom-5 left-1/2">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`h-1.5 transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/60'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}