import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  bgImage?: string;
}

export function PageHero({ label, title, subtitle, bgImage }: PageHeroProps) {
  return (
    <section
      className="relative h-[45vh] min-h-[300px] flex items-center justify-center text-center overflow-hidden"
      style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
    >
      {bgImage && <div className="absolute inset-0 bg-charcoal-900/70" />}
      <div className="relative z-10 max-w-3xl mx-auto px-5">
        {label && <p className="text-xs font-medium tracking-[0.25em] uppercase text-rust-400 mb-3">{label}</p>}
        <h1 className="font-serif text-3xl md:text-5xl text-white leading-tight">{title}</h1>
        {subtitle && <p className="mt-4 text-cream-100/80 text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}

interface PageSectionProps {
  children: ReactNode;
  className?: string;
  bg?: 'cream' | 'white' | 'dark';
}

export function PageSection({ children, className = '', bg = 'cream' }: PageSectionProps) {
  const bgClass = bg === 'white' ? 'bg-white' : bg === 'dark' ? 'bg-charcoal-900' : 'bg-cream-50';
  return (
    <section className={`${bgClass} py-20 md:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">{children}</div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="bg-rust-700 py-16 text-center">
      <div className="max-w-2xl mx-auto px-5">
        <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">Ready to Start Your Project?</h2>
        <p className="text-cream-100/90 mb-6">Get in touch today for a consultation and quote.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-rust-700 px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-charcoal-800 hover:text-white transition-all duration-300">
          Contact Us <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
