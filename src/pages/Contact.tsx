
import { PageHero, PageSection } from '@/components/PageTemplate';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';

const AREAS = [
  {
    name: 'St John’s Wood',
    postcode: 'NW8',
    url: 'https://maps.app.goo.gl/DHFK5yfJ2azvwcbj8',
  },
  {
    name: 'Regent’s Park',
    postcode: 'NW1',
    url: 'https://maps.app.goo.gl/of35NxLm3rGDwy8j7',
  },
  {
    name: 'Hampstead',
    postcode: 'NW3',
    url: 'https://maps.app.goo.gl/5E4rvvZHMfxN1FxS6',
  },
  {
    name: 'Belsize Park',
    postcode: 'NW3',
    url: 'https://maps.app.goo.gl/yQPiy3mkbb9jAxSA6',
  },
  {
    name: 'Marylebone',
    postcode: 'W1',
    url: 'https://maps.app.goo.gl/iiDZAj79FZtxetBQ6',
  },
  {
    name: 'Mayfair',
    postcode: 'W1',
    url: 'https://maps.app.goo.gl/86ko4BcijdPAGVhL6',
  },
  {
    name: 'Westminster',
    postcode: '',
    url: 'https://maps.app.goo.gl/8gqy5LP3TUEvrqQT8',
  },
  {
    name: 'Kensington',
    postcode: 'W8',
    url: 'https://maps.app.goo.gl/w235gRHBoiYdhjEh6',
  },
  {
    name: 'Notting Hill',
    postcode: 'W11',
    url: 'https://maps.app.goo.gl/gPUR3qwU2NDe5aoe6',
  },
  {
    name: 'Holland Park',
    postcode: 'W11',
    url: 'https://maps.app.goo.gl/4a2LQMLLeLNzRc8Z7',
  },
];

const SERVICES = [
  'Interior painting (modern + traditional finishes)',
  'Woodwork and detailed trim finishes',
  'Wallpaper hanging and wallcoverings',
  'Spray finishes for cabinetry and joinery',
  'Decorative finishes and specialist effects',
  'Period property / heritage-sensitive work',
  'Exterior restoration and decoration (where suitable)',
];

const FAQS = [
  {
    question: 'What’s the best way to contact your painters in Primrose Hill (NW8)?',
    answer:
      'Call +44 7788 516436 or WhatsApp the same number for the fastest response.',
  },
  {
    question: 'Can I get a quote without a site visit?',
    answer:
      'Often yes. Send your postcode, a brief scope, and 3–6 clear photos via WhatsApp or email for an initial estimate.',
  },
  // {
  //   question: 'Do you cover Hampstead, St John’s Wood and Regent’s Park?',
  //   answer:
  //     'Yes, these areas are commonly within our working radius. Share your postcode and we’ll confirm coverage quickly.',
  // },
  {
    question:
      'Do you work on listed buildings or homes in conservation areas in London?',
    answer:
      'Yes. Tell us the property type and any restrictions so we can advise on suitable finishes and planning.',
  },
  {
    question: 'Can you paint while we’re living in the property?',
    answer:
      'Yes. Let us know which rooms are in use so we can plan protection, access and low-disruption scheduling.',
  },
  {
    question: 'Do you offer spray finishes for kitchen cabinets and joinery?',
    answer:
      'Yes. Share photos and the finish you want (matte, satin, etc.) so we can advise on prep and options.',
  },
  {
    question: 'How do I check availability for a specific week?',
    answer:
      'Message your preferred dates, your postcode and the scope. We’ll confirm available start windows and next steps.',
  },
  {
    question: 'What should I include to get an accurate estimate?',
    answer:
      'Postcode, property type, areas to be painted, surface condition, preferred finish, timing and photos if possible.',
  },
  {
    question: 'Do you work with interior designers and property managers?',
    answer:
      'Yes. If someone else coordinates access or specs, include their contact details so we can keep communication smooth.',
  },
  {
    question: 'Do you take on commercial properties too?',
    answer:
      'Yes, for suitable projects. Please provide the building type (office/retail/common areas), access hours and scope so we can advise accordingly.',
  },
];

export default function Contact() {
  return (
    <>
      <PageHero
        label="Contact Us"
        title="Contact Primrose Hill Painters"
        subtitle="Painting and decorating services across Primrose Hill, Central and North London."
        bgImage="https://images.pexels.com/photos/18729245/pexels-photo-18729245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />

      <PageSection bg="cream">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal-800 mb-5">
            Contact Primrose Hill Painters (NW8)
          </h2>

          <p className="text-charcoal-600 leading-relaxed">
            If you’re planning painting or decorating in{' '}
            <strong>Primrose Hill (NW8)</strong> or nearby Central and North
            London areas, this is the fastest way to reach us.
          </p>

          <p className="text-charcoal-600 leading-relaxed mt-3">
            Send your postcode and a few details and we’ll guide you on the
            next steps for an estimate or a site visit.
          </p>
        </div>

        {/* Image */}
        <div className="max-w-5xl mx-auto mb-20">
          <img
            src="https://primrosehillpainters.co.uk/wp-content/uploads/2024/11/bifold-cabinets-by-christopher-howard_orig.jpg"
            alt="Professional painting and decorating work"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Areas We Cover */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-800 mb-3">
              Areas We Cover
            </h2>

            <p className="text-charcoal-500">
              We’re based in <strong>Primrose Hill (NW8)</strong> and regularly
              work across Central and North London.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AREAS.map((area) => (
              <a
                key={area.name}
                href={area.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-5 border border-cream-200 hover:border-rust-700 transition-colors"
              >
                <h3 className="font-serif text-lg text-rust-700">
                  {area.name}
                </h3>

                {area.postcode && (
                  <p className="text-sm text-charcoal-500 mt-1">
                    {area.postcode}
                  </p>
                )}
              </a>
            ))}
          </div>

          <p className="text-center text-charcoal-600 mt-8">
            If you’re unsure, send your <strong>postcode</strong> and we’ll
            confirm coverage.
          </p>
        </div>

        {/* Services */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-800">
              What We Help With
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {SERVICES.map((service) => (
              <div
                key={service}
                className="bg-white p-5 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-rust-700 shrink-0 mt-0.5" />
                <p className="text-sm text-charcoal-600">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Period Properties */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal-800 mb-5">
                Listed, Period and High-Value Homes
              </h2>

              <p className="text-charcoal-600 leading-relaxed">
                Many NW and Central London homes need a careful approach,
                especially <strong>period properties, conservation areas</strong>{' '}
                and high-end interiors.
              </p>

              <p className="text-charcoal-600 leading-relaxed mt-4">
                If your project requires discreet working, clean protection
                and a finish that suits the building’s character, please
                include this in your enquiry so we can plan accordingly.
              </p>
            </div>

            <img
              src="https://primrosehillpainters.co.uk/wp-content/uploads/2024/11/72330400_187398308965736_1390763547093007432_n.jpg"
              alt="Period property painting and decorating"
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>

        {/* Quote / Planning */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-800 mb-3">
              Accurate Quotes, Clear Advice, Reliable Planning
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-lg text-rust-700 mb-1">
                Response time
              </h3>
              <p className="text-charcoal-600">
                We reply as quickly as possible on regular working days and
                we’ll confirm the next step (estimate, photos or site visit)
                based on your postcode and scope.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg text-rust-700 mb-1">
                Why a site visit matters
              </h3>
              <p className="text-charcoal-600">
                For larger or detail-heavy jobs, a short visit helps us check
                surface condition, prep needs, access and finish choices, so
                the quote is accurate and the schedule is realistic.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg text-rust-700 mb-1">
                What you’ll receive
              </h3>
              <p className="text-charcoal-600">
                You’ll get clear guidance on recommended paint systems/finishes,
                likely preparation work and a practical timeline, before
                anything is booked in.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg text-rust-700 mb-1">
                How we keep it reliable
              </h3>
              <p className="text-charcoal-600">
                We avoid “guess quotes.” When details are unclear, we verify
                them on-site to reduce surprises, protect your home and keep
                the work running smoothly.
              </p>
            </div>
          </div>
        </div>

        {/* Second Image */}
        <div className="max-w-5xl mx-auto mb-20">
          <img
            src="https://primrosehillpainters.co.uk/wp-content/uploads/2024/11/7ee2569fb6fe306ecaad1d18c78ea362.jpg"
            alt="Professional interior decorating project"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-800">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div
                key={faq.question}
                className="bg-white p-6 border border-cream-200"
              >
                <h3 className="font-serif text-lg text-charcoal-800 mb-2">
                  {faq.question}
                </h3>

                <p className="text-sm text-charcoal-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-800 mb-3">
              Request a Quote or Check Availability
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <a
              href="tel:+447788516436"
              className="bg-white p-7 text-center hover:shadow-md transition-shadow"
            >
              <Phone className="w-6 h-6 text-rust-700 mx-auto mb-4" />
              <h3 className="font-serif text-lg text-charcoal-800 mb-2">
                Call Us
              </h3>
              <p className="text-sm text-rust-700">+44 7788 516436</p>
            </a>

            <a
              href="https://wa.me/447788516436"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-7 text-center hover:shadow-md transition-shadow"
            >
              <MessageCircle className="w-6 h-6 text-rust-700 mx-auto mb-4" />
              <h3 className="font-serif text-lg text-charcoal-800 mb-2">
                WhatsApp Us
              </h3>
              <p className="text-sm text-rust-700">+44 7788 516436</p>
            </a>

            <div className="bg-white p-7 text-center">
              <MapPin className="w-6 h-6 text-rust-700 mx-auto mb-4" />
              <h3 className="font-serif text-lg text-charcoal-800 mb-2">
                Office Open
              </h3>
              <p className="text-sm text-charcoal-600">Primrose Hill, NW8</p>
            </div>

            <a
              href="mailto:info@primrosehillpainters.co.uk"
              className="bg-white p-7 text-center hover:shadow-md transition-shadow"
            >
              <Mail className="w-6 h-6 text-rust-700 mx-auto mb-4" />
              <h3 className="font-serif text-lg text-charcoal-800 mb-2">
                Email Us
              </h3>
              <p className="text-sm text-rust-700 break-all">
                info@primrosehillpainters.co.uk
              </p>
            </a>
          </div>
        </div>
      </PageSection>

      {/* Contact Form + Map */}
      <PageSection bg="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-800 mb-3">
              Get In Touch
            </h2>
          </div>

          {/* Replace this with your Contact Form 7 / React form */}
          <div className="mb-12">
            <p className="text-center text-charcoal-500">
              Contact form goes here.
            </p>
          </div>

          <div className="w-full h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9926.272857958831!2d-0.16880538047718413!3d51.5394789953296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761aeecce35ee9%3A0xb3d32253f6c81899!2sPrimrose%20Hill%2C%20London%2C%20UK!5e0!3m2!1sen!2sin!4v1699613693048!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Primrose Hill London map"
            />
          </div>
        </div>
      </PageSection>
    </>
  );
}

