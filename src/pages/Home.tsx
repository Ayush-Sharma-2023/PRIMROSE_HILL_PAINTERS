import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import FaqAccordion from '@/components/FaqAccordion';
import { PARALLAX_BG, SERVICES_PHOTO, FAQ_PHOTO } from '@/data/content';

const WHY_CHOOSE = [
  { title: 'Experience with Period and Listed Properties', desc: 'We regularly work on listed buildings and homes in conservation areas across Central and North West London.' },
  { title: 'Careful Worksite Protection', desc: 'Floors, furniture and surfaces are protected using clean, low-dust methods to reduce disruption during works.' },
  { title: 'Easy Collaboration', desc: 'We work closely with homeowners, property managers, architects and interior designers throughout each project.' },
  { title: 'Consistent, High-Quality Finishes', desc: 'All work is carefully prepared and finished using brush, spray or specialist methods where appropriate.' },
];

const SERVICES = [
  { title: 'Interior Painting & Decorating', desc: 'Carefully executed finishes for walls, ceilings and woodwork, tailored to each interior\u2019s character.' },
  { title: 'Exterior Painting & Restoration', desc: 'Protection and enhancement of façades, render, timber and architectural details.' },
  { title: 'Hand-Painted Kitchens & Joinery', desc: 'Bespoke finishes for cabinetry, doors and fitted joinery, applied with traditional methods.' },
  { title: 'Wallpaper & Wallcoverings', desc: 'Precise installation of specialist papers, fabrics and contemporary wall finishes.' },
  { title: 'Spray Painting Applications', desc: 'Controlled spray systems for flawless, factory-quality surfaces where appropriate.' },
  { title: 'Decorative & Specialist Finishes', desc: 'From cornice restoration to fine detail work requiring advanced technical skill.' },
];

const FAQS = [
  { q: 'How much do painters and decorators cost in Primrose Hill?', a: 'Costs vary based on property size, level of preparation, required finishes and whether the home is period or listed.' },
  { q: 'Do painters and decorators work on listed or period properties?', a: 'Yes, experienced decorators use breathable paints and conservation-appropriate methods suitable for listed and heritage properties.' },
  { q: 'How long does interior painting usually take?', a: 'Most interior painting projects take several days to two weeks, depending on preparation, detailing and property size.' },
  { q: 'Do professional painters protect furniture and floors?', a: 'Yes, professional painters use dust-control systems and protective coverings to safeguard furniture, floors and fixtures.' },
  { q: 'What type of paint is best for period homes in London?', a: 'Breathable, mineral-based paints are recommended for period homes to prevent trapped moisture and long-term surface damage.' },
  { q: 'Is spray painting better than traditional brush painting?', a: 'Spray painting delivers ultra-smooth finishes on suitable surfaces, while brushwork remains essential for heritage detailing.' },
  { q: 'Can painting be done while the property is occupied?', a: 'Yes, with careful planning and dust-controlled methods, painting can be completed safely in occupied residential properties.' },
  { q: 'Do painters help with colour selection and finishes?', a: 'Yes, professional decorators advise on colour schemes, finishes and materials that suit architecture, lighting and usage.' },
];

const SERVE_AREAS = [
  { borough: 'Royal Borough of Kensington', areas: ['Chelsea SW3, SW10', 'Knightsbridge SW3, SW7', 'Notting Hill Gate W11', 'Holland Park W11', 'South Kensington SW7', 'Kensington W8', 'West Brompton SW5'] },
  { borough: 'Borough of the City of Westminster', areas: ['Knightsbridge SW1', 'Marylebone W1, NW1', 'Mayfair W1', 'St Johns Wood NW8', 'Belgravia SW1', 'St James SW1', 'Maida Vale W9', 'Little Venice W9'] },
  { borough: 'The London Borough of Camden', areas: ['Primrose Hill NW1', 'Regents Park NW1', 'Belsize Park NW3', 'Hampstead NW3'] },
  { borough: 'The London Borough of Barnet', areas: ['Hampstead Garden Suburb NW11', 'Golders Green NW11', 'East Finchley N2', 'Finchley Central N3'] },
  { borough: 'The London Borough of Haringey', areas: ['Highgate N6', 'Muswell Hill N10'] },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <HeroSlider />
        <div className="bg-cream-50 px-5 md:px-10 py-16 md:py-20 max-w-5xl mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal-800 leading-tight mb-6">
            Professional Residential Painters Serving Primrose Hill and North London
          </h1>
          <p className="text-charcoal-500 leading-relaxed max-w-3xl mx-auto">
            At Primrose Hill Painters, we carry out careful painting and decorating work for residential properties across Primrose Hill, NW8 and surrounding London areas. Our experience includes period townhouses, Victorian homes and modern apartments, with each project planned to suit the building's structure and condition. We work with homeowners, property managers and interior designers, focusing on protecting each property's character. Our work covers high-end residential painting and decorating, from sensitive restoration projects to clean, precise finishes for modern interiors. Using traditional methods alongside clean working practices, we aim to keep disruption to a minimum, even in occupied homes. Our services include hand-painted joinery, interior decoration and detailed finishing, delivered with consistency and care.
          </p>
        </div>
      </section>

      {/* Why Choose — parallax */}
      <section
        className="relative py-24 md:py-32 parallax-bg"
        style={{ backgroundImage: `url(${PARALLAX_BG})` }}
      >
        <div className="absolute inset-0 bg-charcoal-900/80" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-10 text-center">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-rust-400 mb-3">Why Choose Us</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-12">Why Choose Primrose Hill Painters?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} className="border-l-2 border-rust-500 pl-6">
                <h3 className="font-serif text-xl text-white mb-2">{item.title}</h3>
                <p className="text-cream-100/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-cream-100/70 text-sm">
            Based in NW8, we work across Primrose Hill and the surrounding London postcodes.
          </p>
          <Link to="/about-us" className="mt-6 inline-flex items-center gap-2 text-rust-400 hover:text-white text-sm font-medium tracking-widest uppercase transition-colors">
            Learn More About Our Approach <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Services — text left, photo right */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">What We Do</p>
            <h2 className="section-heading mb-8">Our Services</h2>
            <div className="space-y-6">
              {SERVICES.map((s) => (
                <div key={s.title} className="service-card border-b border-cream-200 pb-5">
                  <h3 className="font-serif text-xl text-charcoal-800 mb-1">{s.title}</h3>
                  <p className="text-sm text-charcoal-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <Link to="/services" className="mt-8 inline-flex items-center gap-2 text-rust-700 hover:text-charcoal-800 text-sm font-medium tracking-widest uppercase transition-colors">
              Explore all our painting and decorating services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
            <img
              src={SERVICES_PHOTO}
              alt="Painter decorating a wall"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ — photo left, text right */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative h-[400px] lg:h-[600px] lg:sticky lg:top-24 overflow-hidden">
            <img
              src={FAQ_PHOTO}
              alt="Elegant painted interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="section-label">Questions & Answers</p>
            <h2 className="section-heading mb-8">Frequently Asked Questions</h2>
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </section>

      {/* Insured — centered */}
      <section className="bg-charcoal-900 py-20 md:py-28 text-center">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-rust-400 mb-3">Peace of Mind</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">All Works Fully Insured &amp; Guaranteed</h2>
          <p className="text-cream-100/80 leading-relaxed mb-4">
            Primrose Hill Painters carry full public liability insurance and all work is completed to agreed specifications and standards. We operate in line with UK data protection requirements and handle personal information responsibly when you contact us by phone, email, website or WhatsApp.
          </p>
          <p className="text-cream-100/80 leading-relaxed mb-8">
            We only collect details necessary to respond to enquiries and manage projects. Your information is never shared without consent and is protected using secure systems. For full details, please refer to our Privacy Policy.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=447788516436&text=Chat%20to%20us%20now%20on%20WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Get an Online Quote Now
          </a>
        </div>
      </section>

      {/* Contact + Areas Served */}
      <section className="bg-cream-100 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-heading">Contact Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20 text-center">
            <div className="bg-white p-8">
              <h3 className="font-serif text-lg text-charcoal-800 mb-3">Call Us</h3>
              <a href="tel:+447788516436" className="text-rust-700 hover:text-charcoal-800 transition-colors text-lg">
                +44 7788 516436
              </a>
            </div>
            <div className="bg-white p-8">
              <h3 className="font-serif text-lg text-charcoal-800 mb-3">WhatsApp Us</h3>
              <a
                href="https://api.whatsapp.com/send?phone=447788516436&text=Chat%20to%20us%20now%20on%20WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rust-700 hover:text-charcoal-800 transition-colors text-lg"
              >
                +44 7788 516436
              </a>
            </div>
            <div className="bg-white p-8">
              <h3 className="font-serif text-lg text-charcoal-800 mb-3">Office</h3>
              <p className="text-charcoal-600 text-lg">Primrose Hill, NW8</p>
            </div>
            <div className="bg-white p-8 md:col-span-3">
              <h3 className="font-serif text-lg text-charcoal-800 mb-3">Email Us</h3>
              <a href="mailto:info@primrosehillpainters.co.uk" className="text-rust-700 hover:text-charcoal-800 transition-colors text-lg break-all">
                info@primrosehillpainters.co.uk
              </a>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl text-charcoal-800 mb-2">Areas We Serve</h3>
            <p className="text-charcoal-500 text-sm">Covering Primrose Hill and North &amp; Central London</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {SERVE_AREAS.map((group) => (
              <div key={group.borough}>
                <h4 className="font-serif text-base text-rust-700 mb-3 pb-2 border-b border-cream-200">
                  {group.borough}
                </h4>
                <ul className="space-y-1.5">
                  {group.areas.map((a) => (
                    <li key={a} className="text-sm text-charcoal-500">{a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
