// src/pages/services/ServiceDetail.tsx

import { useParams, Navigate } from 'react-router-dom';
import {
  PageHero,
  PageSection,
  CtaSection,
} from '@/components/PageTemplate';
import SERVICES from '@/data/services';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();

  const service = SERVICES.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      {/* Hero */}
      <PageHero
        label="Service"
        title={service.hero?.title || service.title}
        subtitle={service.hero?.subtitle}
        bgImage={service.hero?.image}
      />

      {/* Service Content */}
      {service.sections?.map((section, index) => {
        switch (section.type) {
          case 'text':
            return (
              <PageSection key={index} bg="white">
                <div className="max-w-3xl mx-auto">
                  {section.title && (
                    <h2 className="mb-6 font-serif text-2xl text-charcoal-800">
                      {section.title}
                    </h2>
                  )}

                  {section.subtitle && (
                    <p className="mb-6 text-lg text-charcoal-500">
                      {section.subtitle}
                    </p>
                  )}

                  {section.paragraphs?.map((paragraph, i) => (
                    <p
                      key={i}
                      className="mb-5 leading-relaxed text-charcoal-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </PageSection>
            );

          case 'bullets':
            return (
              <PageSection key={index} bg="white">
                <div className="max-w-3xl mx-auto">
                  {section.title && (
                    <h2 className="mb-6 font-serif text-2xl text-charcoal-800">
                      {section.title}
                    </h2>
                  )}

                  <ul className="space-y-3">
                    {section.items?.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-charcoal-600"
                      >
                        <span className="w-1.5 h-1.5 mt-2.5 bg-rust-700 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </PageSection>
            );

          case 'image-text':
            return (
              <PageSection key={index} bg="cream">
                <div className="grid items-center gap-10 md:grid-cols-2">
                  {section.image && (
                    <img
                      src={section.image}
                      alt={section.imageAlt || section.title || ''}
                      className="object-cover w-full h-full min-h-[300px]"
                    />
                  )}

                  <div>
                    {section.title && (
                      <h2 className="mb-6 font-serif text-2xl text-charcoal-800">
                        {section.title}
                      </h2>
                    )}

                    {section.subtitle && (
                      <p className="mb-5 text-lg text-charcoal-500">
                        {section.subtitle}
                      </p>
                    )}

                    {section.paragraphs?.map((paragraph, i) => (
                      <p
                        key={i}
                        className="mb-5 leading-relaxed text-charcoal-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </PageSection>
            );

          case 'image':
            return (
              <PageSection key={index} bg="white">
                {section.image && (
                  <img
                    src={section.image}
                    alt={section.imageAlt || section.title || ''}
                    className="object-cover w-full max-h-[600px]"
                  />
                )}

                {section.title && (
                  <h2 className="mt-6 font-serif text-2xl text-charcoal-800">
                    {section.title}
                  </h2>
                )}
              </PageSection>
            );

          case 'faq':
            return (
              <PageSection key={index} bg="cream">
                <div className="max-w-3xl mx-auto">
                  {section.title && (
                    <h2 className="mb-8 font-serif text-2xl text-charcoal-800">
                      {section.title}
                    </h2>
                  )}

                  <div className="space-y-6">
                    {section.faqs?.map((faq, i) => (
                      <div key={i}>
                        <h3 className="mb-2 font-medium text-charcoal-800">
                          {faq.question}
                        </h3>

                        <p className="leading-relaxed text-charcoal-600">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </PageSection>
            );

          case 'testimonials':
            return (
              <PageSection key={index} bg="white">
                <div className="grid gap-6 md:grid-cols-3">
                  {section.testimonials?.map((testimonial, i) => (
                    <div
                      key={i}
                      className="p-6 border border-cream-200 bg-cream-50"
                    >
                      <p className="mb-4 leading-relaxed text-charcoal-600">
                        "{testimonial.text}"
                      </p>

                      <p className="font-medium text-charcoal-800">
                        {testimonial.name}
                      </p>

                      {testimonial.rating && (
                        <p className="mt-1 text-sm text-rust-700">
                          {'★'.repeat(testimonial.rating)}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </PageSection>
            );

          case 'case-study':
            return (
              <PageSection key={index} bg="cream">
                <div className="max-w-4xl mx-auto">
                  {section.title && (
                    <h2 className="mb-8 font-serif text-2xl text-charcoal-800">
                      {section.title}
                    </h2>
                  )}

                  {section.caseStudy?.clientDetails && (
                    <div className="mb-8">
                      <h3 className="mb-3 font-medium text-charcoal-800">
                        Client Details
                      </h3>

                      <ul className="space-y-2 text-charcoal-600">
                        {section.caseStudy.clientDetails.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.caseStudy?.challenge && (
                    <div className="mb-8">
                      <h3 className="mb-3 font-medium text-charcoal-800">
                        The Challenge
                      </h3>

                      <p className="leading-relaxed text-charcoal-600">
                        {section.caseStudy.challenge}
                      </p>
                    </div>
                  )}

                  {section.caseStudy?.solution && (
                    <div className="mb-8">
                      <h3 className="mb-3 font-medium text-charcoal-800">
                        The Solution
                      </h3>

                      <ul className="space-y-2 text-charcoal-600">
                        {section.caseStudy.solution.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.caseStudy?.result && (
                    <div className="mb-8">
                      <h3 className="mb-3 font-medium text-charcoal-800">
                        The Result
                      </h3>

                      <p className="leading-relaxed text-charcoal-600">
                        {section.caseStudy.result}
                      </p>
                    </div>
                  )}

                  {section.caseStudy?.quote && (
                    <blockquote className="p-6 italic bg-white border-l-4 border-rust-700 text-charcoal-600">
                      "{section.caseStudy.quote}"
                    </blockquote>
                  )}
                </div>
              </PageSection>
            );

          case 'services-list':
            return (
              <PageSection key={index} bg="cream">
                <div className="max-w-5xl mx-auto">
                  {section.title && (
                    <h2 className="mb-8 font-serif text-2xl text-charcoal-800">
                      {section.title}
                    </h2>
                  )}

                  <div className="grid gap-6 md:grid-cols-2">
                    {section.services?.map((item, i) => (
                      <div
                        key={i}
                        className="p-6 bg-white border border-cream-200"
                      >
                        <h3 className="mb-2 font-serif text-xl text-charcoal-800">
                          {item.title}
                        </h3>

                        <p className="leading-relaxed text-charcoal-600">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </PageSection>
            );

          default:
            return null;
        }
      })}

      {/* CTA */}
      {service.cta ? <CtaSection /> : null}
    </>
  );
}