// src/pages/Services.tsx
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero, PageSection, CtaSection } from '@/components/PageTemplate';
import { NAV_LINKS } from '@/data/content';

const services = NAV_LINKS.find((l) => l.label === 'Services')?.children ?? [];

export default function Services() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Painting & Decorating Services"
        subtitle="A full range of specialist finishes for residential properties across Primrose Hill and North London."
        bgImage="https://images.pexels.com/photos/6764270/pexels-photo-6764270.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />
      <PageSection bg="cream">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              className="service-card bg-white p-8 block border border-cream-200"
            >
              <h3 className="font-serif text-xl text-charcoal-800 mb-2">{s.label}</h3>
              <span className="inline-flex items-center gap-2 text-rust-700 text-sm font-medium tracking-wide group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </PageSection>
      <CtaSection />
    </>
  );
}
