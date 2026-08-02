import { PageHero, PageSection } from '@/components/PageTemplate';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const SERVE_AREAS = [
  { borough: 'Royal Borough of Kensington', areas: ['Chelsea SW3, SW10', 'Knightsbridge SW3, SW7', 'Notting Hill Gate W11', 'Holland Park W11', 'South Kensington SW7', 'Kensington W8', 'West Brompton SW5'] },
  { borough: 'Borough of the City of Westminster', areas: ['Knightsbridge SW1', 'Marylebone W1, NW1', 'Mayfair W1', 'St Johns Wood NW8', 'Belgravia SW1', 'St James SW1', 'Maida Vale W9', 'Little Venice W9'] },
  { borough: 'The London Borough of Camden', areas: ['Primrose Hill NW1', 'Regents Park NW1', 'Belsize Park NW3', 'Hampstead NW3'] },
  { borough: 'The London Borough of Barnet', areas: ['Hampstead Garden Suburb NW11', 'Golders Green NW11', 'East Finchley N2', 'Finchley Central N3'] },
  { borough: 'The London Borough of Haringey', areas: ['Highgate N6', 'Muswell Hill N10'] },
];

export default function Contact() {
  return (
    <>
      <PageHero
        label="Contact Us"
        title="Get In Touch"
        subtitle="We'd love to hear about your project. Reach out by phone, WhatsApp or email."
        bgImage="https://images.pexels.com/photos/18729245/pexels-photo-18729245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />
      <PageSection bg="cream">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          <div className="bg-white p-8 text-center">
            <Phone className="w-6 h-6 text-rust-700 mx-auto mb-3" />
            <h3 className="font-serif text-lg text-charcoal-800 mb-2">Call Us</h3>
            <a href="tel:+447788516436" className="text-rust-700 hover:text-charcoal-800 transition-colors">+44 7788 516436</a>
          </div>
          <div className="bg-white p-8 text-center">
            <MessageCircle className="w-6 h-6 text-rust-700 mx-auto mb-3" />
            <h3 className="font-serif text-lg text-charcoal-800 mb-2">WhatsApp Us</h3>
            <a
              href="https://api.whatsapp.com/send?phone=447788516436&text=Chat%20to%20us%20now%20on%20WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rust-700 hover:text-charcoal-800 transition-colors"
            >
              +44 7788 516436
            </a>
          </div>
          <div className="bg-white p-8 text-center">
            <MapPin className="w-6 h-6 text-rust-700 mx-auto mb-3" />
            <h3 className="font-serif text-lg text-charcoal-800 mb-2">Office</h3>
            <p className="text-charcoal-600">Primrose Hill, NW8</p>
          </div>
          <div className="bg-white p-8 text-center">
            <Mail className="w-6 h-6 text-rust-700 mx-auto mb-3" />
            <h3 className="font-serif text-lg text-charcoal-800 mb-2">Email Us</h3>
            <a href="mailto:info@primrosehillpainters.co.uk" className="text-rust-700 hover:text-charcoal-800 transition-colors break-all">
              info@primrosehillpainters.co.uk
            </a>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal-800 mb-2">Areas We Serve</h2>
          <p className="text-charcoal-500 text-sm">Covering Primrose Hill and North &amp; Central London</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {SERVE_AREAS.map((group) => (
            <div key={group.borough}>
              <h3 className="font-serif text-base text-rust-700 mb-3 pb-2 border-b border-cream-200">
                {group.borough}
              </h3>
              <ul className="space-y-1.5">
                {group.areas.map((a) => (
                  <li key={a} className="text-sm text-charcoal-500">{a}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageSection>
    </>
  );
}
