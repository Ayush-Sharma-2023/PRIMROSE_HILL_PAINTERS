import { Navigate, useParams } from 'react-router-dom';
import { PageSection, CtaSection } from '@/components/PageTemplate';
import ServiceHeroSlider from '@/components/ServiceHeroSlider';
import SERVICES from '@/data/services';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();

  const service = SERVICES.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      {/* Fixed service image slider */}
      <ServiceHeroSlider />

      {/* Service heading / introduction */}
      <section className="bg-[#d6cec2]">
        <div className="max-w-6xl px-5 py-12 mx-auto text-center md:px-10 md:py-14">
          <h1 className="font-serif text-2xl leading-tight text-white md:text-3xl lg:text-4xl">
            {service.hero?.title || service.title}
          </h1>

          {service.hero?.subtitle && (
            <p className="max-w-5xl mx-auto mt-5 text-sm leading-relaxed text-white md:text-base">
              {service.hero.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Service content */}
      {service.sections?.map((section, index) => {
        if (section.type === 'text') {
          return (
            <PageSection key={index} bg="white">
              <div className="max-w-5xl mx-auto">
                {section.title && (
                  <h2 className="mb-6 font-serif text-2xl md:text-3xl text-charcoal-800">
                    {section.title}
                  </h2>
                )}

                {section.subtitle && (
                  <p className="mb-6 text-lg text-charcoal-600">
                    {section.subtitle}
                  </p>
                )}

                {section.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="mb-5 leading-relaxed text-charcoal-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </PageSection>
          );
        }

        if (section.type === 'bullets') {
          return (
            <PageSection key={index} bg="cream">
              <div className="max-w-5xl mx-auto">
                {section.title && (
                  <h2 className="mb-6 font-serif text-2xl md:text-3xl text-charcoal-800">
                    {section.title}
                  </h2>
                )}

                <ul className="space-y-3">
                  {section.items?.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-charcoal-600"
                    >
                      <span className="w-1.5 h-1.5 mt-2.5 bg-rust-700 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </PageSection>
          );
        }

        if (section.type === 'image-text') {
          return (
            <PageSection key={index} bg="white">
              <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
                {section.image && (
                  <div>
                    <img
                      src={section.image}
                      alt={section.imageAlt || section.title || ''}
                      className="object-cover w-full h-auto"
                    />
                  </div>
                )}

                <div>
                  {section.title && (
                    <h2 className="mb-6 font-serif text-2xl md:text-3xl text-charcoal-800">
                      {section.title}
                    </h2>
                  )}

                  {section.paragraphs?.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="mb-5 leading-relaxed text-charcoal-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </PageSection>
          );
        }

        return null;
      })}

      <CtaSection />
    </>
  );
}