import { PageHero, PageSection, CtaSection } from '@/components/PageTemplate';
import { PARALLAX_BG } from '@/data/content';

export default function About() {
  return (
    <>
      <PageHero
        label="About Us"
        title="About Primrose Hill Painters"
        subtitle="Specialist residential painters and decorators serving Primrose Hill and North London."
        bgImage={PARALLAX_BG}
      />
      <PageSection bg="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-charcoal-800 mb-6">Our Story</h2>
          <p className="text-charcoal-500 leading-relaxed mb-4">
            Primrose Hill Painters is a specialist painting and decorating company based in NW8, working across Primrose Hill and the surrounding London postcodes. We focus exclusively on high-end residential properties, from period townhouses and Victorian homes to modern apartments.
          </p>
          <p className="text-charcoal-500 leading-relaxed mb-4">
            Each project is planned to suit the building's structure and condition. We work with homeowners, property managers, architects and interior designers, focusing on protecting each property's character while delivering clean, precise finishes.
          </p>
          <p className="text-charcoal-500 leading-relaxed">
            Using traditional methods alongside clean working practices, we aim to keep disruption to a minimum, even in occupied homes. Our services include hand-painted joinery, interior decoration and detailed finishing, delivered with consistency and care.
          </p>
        </div>
      </PageSection>
      <CtaSection />
    </>
  );
}
