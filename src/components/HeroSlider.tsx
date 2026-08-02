import { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_IMAGES } from '@/data/content';

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % HERO_IMAGES.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + HERO_IMAGES.length) % HERO_IMAGES.length), []);

  useEffect(() => {
    if (isHovered) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, isHovered]);

  return (
    <section
      className="relative w-full h-[80vh] min-h-[500px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      {HERO_IMAGES.map((img, i) => (
        <div
          key={i}
          className={`hero-slide absolute inset-0 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden={i !== index}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

      {/* Prev / Next */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/25 transition-all duration-300"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/25 transition-all duration-300"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 transition-all duration-300 ${
              i === index ? 'w-8 bg-white' : 'w-1.5 bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
