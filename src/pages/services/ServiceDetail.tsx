// src/pages/services/ServiceDetail.tsx
import { useParams, Navigate } from 'react-router-dom';
import { PageHero, PageSection, CtaSection } from '@/components/PageTemplate';
import { NAV_LINKS } from '@/data/content';

const SERVICE_DETAILS: Record<string, { description: string; points: string[]; bgImage: string }> = {
  'worksite-protection': {
    description:
      'Before any work begins, we carefully protect floors, furniture, fixtures and surfaces throughout your home. Using dust-control systems, protective coverings and clean working practices, we minimise disruption and keep your property in pristine condition throughout the decoration process.',
    points: [
      'Dust-control systems and sealed work zones',
      'Protection of floors, furniture and fixtures',
      'Clean, low-dust methods throughout',
      'Careful removal and repositioning of coverings',
    ],
    bgImage: 'https://images.pexels.com/photos/6474347/pexels-photo-6474347.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  'paint-finishes': {
    description:
      'We apply both modern and traditional paint finishes, selecting the right products and methods for each surface. From flat matt emulsions to durable eggshell and gloss trims, every finish is carefully prepared and applied for a consistent, lasting result.',
    points: [
      'Modern and traditional paint systems',
      'Surface-specific product selection',
      'Meticulous preparation and priming',
      'Consistent, high-quality brush and roller finishes',
    ],
    bgImage: 'https://images.pexels.com/photos/8481711/pexels-photo-8481711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  'french-polishing': {
    description:
      'French polishing is a traditional technique that produces a deep, rich finish on fine woodwork. We restore and refinish antique furniture, doors and joinery using shellac and hand-applied methods that bring out the natural beauty of the timber.',
    points: [
      'Traditional shellac French polishing',
      'Furniture and antique restoration',
      'Wood colour matching and blending',
      'Repair of scratches, water marks and wear',
    ],
    bgImage: 'https://images.pexels.com/photos/6587899/pexels-photo-6587899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  'decorative-effects': {
    description:
      'From hand-mixed glazes to gilding and trompe l\u2019oeil, our decorative effects add character and depth to interiors. We work with specialist finishes that require advanced technical skill and a deep understanding of materials.',
    points: [
      'Hand-mixed glazes and decorative paints',
      'Gilding, verre \u00e9glomis\u00e9 and specialist effects',
      'Cornice and mouldings detailing',
      'Bespoke finishes tailored to your interior',
    ],
    bgImage: 'https://images.pexels.com/photos/13130038/pexels-photo-13130038.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  'woodwork-cornice': {
    description:
      'Period homes often feature intricate cornicing, architraves and woodwork that require careful restoration. We repair, prepare and redecorate these details to preserve the architectural character of your property.',
    points: [
      'Cornice, architrave and moulding restoration',
      'Repair of damaged or missing details',
      'Careful preparation of aged woodwork',
      'Finishes that preserve period character',
    ],
    bgImage: 'https://images.pexels.com/photos/12905339/pexels-photo-12905339.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  'spray-painting': {
    description:
      'For surfaces that demand a flawless, factory-quality finish, we use controlled spray systems. Spray painting is ideal for kitchens, joinery and large surfaces where a perfectly smooth result is required.',
    points: [
      'Controlled spray application systems',
      'Factory-quality smooth finishes',
      'Ideal for cabinetry and joinery',
      'Dust-controlled, professional environment',
    ],
    bgImage: 'https://images.pexels.com/photos/6474200/pexels-photo-6474200.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  'wallcoverings': {
    description:
      'We install a wide range of wallcoverings, from traditional papers to contemporary fabrics and specialist finishes. Precise pattern matching and careful handling ensure a seamless result.',
    points: [
      'Specialist papers and fabric wallcoverings',
      'Precise pattern matching and alignment',
      'Surface preparation and lining paper',
      'Contemporary and traditional installations',
    ],
    bgImage: 'https://images.pexels.com/photos/8092437/pexels-photo-8092437.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  'hand-painted-kitchens': {
    description:
      'Transform your kitchen with a hand-painted finish. We prepare and paint cabinetry, doors and fitted joinery using durable, furniture-grade paints applied by hand for a bespoke, lasting finish.',
    points: [
      'Hand-applied furniture-grade paints',
      'Full preparation of cabinetry and doors',
      'Bespoke colour matching',
      'Durable, wipeable finishes',
    ],
    bgImage: 'https://images.pexels.com/photos/38311100/pexels-photo-38311100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  'exterior-restoration': {
    description:
      'We protect and enhance the exterior of your property, from façades and render to timber and architectural details. Our exterior work is built to withstand London weather while preserving the character of the building.',
    points: [
      'Façade, render and masonry painting',
      'Timber restoration and protection',
      'Architectural detail preservation',
      'Weather-resistant coating systems',
    ],
    bgImage: 'https://images.pexels.com/photos/18729245/pexels-photo-18729245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const services = NAV_LINKS.find((l) => l.label === 'Services')?.children ?? [];
  const service = services.find((s) => s.href === `/services/${slug}`);
  const detail = slug ? SERVICE_DETAILS[slug] : undefined;

  if (!service || !detail) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <PageHero
        label="Service"
        title={service.label}
        bgImage={detail.bgImage}
      />
      <PageSection bg="white">
        <div className="max-w-3xl mx-auto">
          <p className="text-charcoal-500 leading-relaxed text-lg mb-8">{detail.description}</p>
          <h2 className="font-serif text-2xl text-charcoal-800 mb-6">What We Offer</h2>
          <ul className="space-y-3">
            {detail.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-charcoal-600">
                <span className="w-1.5 h-1.5 bg-rust-700 mt-2.5 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </PageSection>
      <CtaSection />
    </>
  );
}
