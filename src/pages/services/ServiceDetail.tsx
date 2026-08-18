// src/pages/services/ServiceDetail.tsx

import { Navigate, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import ServiceHeroSlider from '@/components/ServiceHeroSlider';
import SERVICES from '@/data/services';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();

  const service = SERVICES.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-white">
      {/* =====================================================
          FIXED HERO SLIDER
      ===================================================== */}
      <ServiceHeroSlider />

      {/* =====================================================
          SERVICE INTRO
      ===================================================== */}
      <section className="bg-[#d6cec2]">
        <div className="max-w-6xl px-5 py-12 mx-auto text-center md:px-10 md:py-14">
          <h1 className="text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
            {service.intro.title}
          </h1>

          <div className="max-w-6xl mx-auto mt-8 space-y-3">
            {service.intro.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-white md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE SECTIONS
      ===================================================== */}
      {service.sections.map((section, index) => {
        /* -----------------------------------------------------
           TEXT SECTION
        ----------------------------------------------------- */
        if (section.type === 'text') {
          return (
            <section
              key={index}
              className="px-5 py-16 bg-white md:px-10 md:py-24"
            >
              <div className="max-w-6xl mx-auto">
                {section.title && (
                  <h2 className="mb-6 text-2xl font-bold text-charcoal-800 md:text-3xl">
                    {section.title}
                  </h2>
                )}

                {section.subtitle && (
                  <p className="mb-6 text-lg text-charcoal-700">
                    {section.subtitle}
                  </p>
                )}

                <div className="space-y-5">
                  {section.paragraphs?.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="text-base leading-relaxed text-charcoal-800 md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        /* -----------------------------------------------------
           BULLET SECTION
        ----------------------------------------------------- */
        if (section.type === 'bullets') {
          return (
            <section
              key={index}
              className="px-5 py-16 bg-[#f3f0ec] md:px-10 md:py-24"
            >
              <div className="max-w-6xl mx-auto">
                {section.title && (
                  <h2 className="mb-6 text-2xl font-bold text-charcoal-800 md:text-3xl">
                    {section.title}
                  </h2>
                )}

                {section.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="mb-5 text-base leading-relaxed text-charcoal-800 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.items && (
                  <ul className="mt-8 space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-4 text-base text-charcoal-800 md:text-lg"
                      >
                        <span className="mt-2.5 block w-2 h-2 shrink-0 bg-charcoal-800" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          );
        }

        /* -----------------------------------------------------
           IMAGE + TEXT / DARK IMAGE + TEXT
        ----------------------------------------------------- */
        if (
          section.type === 'image-text' ||
          section.type === 'image-text-dark'
        ) {
          const imageLeft = section.imagePosition === 'left';

          const textContent = (
            <div
              className={`flex flex-col justify-center ${
                section.type === 'image-text-dark'
                  ? 'bg-[#482d3d] text-white'
                  : 'bg-white text-charcoal-800'
              }`}
            >
              <div className="p-8 md:p-12 lg:p-14">
                {section.title && (
                  <h2
                    className={`mb-6 text-2xl font-bold leading-tight md:text-3xl ${
                      section.type === 'image-text-dark'
                        ? 'text-white'
                        : 'text-charcoal-800'
                    }`}
                  >
                    {section.title}
                  </h2>
                )}

                {section.subtitle && (
                  <p
                    className={`mb-6 text-lg ${
                      section.type === 'image-text-dark'
                        ? 'text-white'
                        : 'text-charcoal-700'
                    }`}
                  >
                    {section.subtitle}
                  </p>
                )}

                <div className="space-y-5">
                  {section.paragraphs?.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className={`text-base leading-relaxed md:text-lg ${
                        section.type === 'image-text-dark'
                          ? 'text-white'
                          : 'text-charcoal-800'
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.button && (
                  <a
                    href={section.button.href}
                    className="inline-flex items-center gap-3 px-7 py-4 mt-8 text-sm font-bold tracking-wide text-white bg-[#07145c] transition-colors hover:bg-[#0d1d78]"
                  >
                    {section.button.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          );

          const imageContent = section.image ? (
            <div className="h-full min-h-[350px]">
              <img
                src={section.image}
                alt={section.imageAlt || section.title || ''}
                className={`w-full h-full object-cover ${
                  section.type === 'image-text'
                    ? 'md:rounded-[140px_140px_0_0]'
                    : ''
                }`}
              />
            </div>
          ) : (
            <div className="bg-[#eeeae5] min-h-[350px]" />
          );

          return (
            <section key={index} className="bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {imageLeft ? (
                  <>
                    {imageContent}
                    {textContent}
                  </>
                ) : (
                  <>
                    {textContent}
                    {imageContent}
                  </>
                )}
              </div>
            </section>
          );
        }

        return null;
      })}

      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}
      {service.testimonials && service.testimonials.length > 0 && (
        <section className="px-5 py-20 bg-[#482d3d] text-white md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {service.testimonials.map((testimonial, index) => (
                <div key={index} className="text-center">
                  {/* Placeholder avatar for now */}
                  <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gray-200 rounded-full">
                    <span className="text-3xl text-gray-500">●</span>
                  </div>

                  {testimonial.rating && (
                    <div className="mb-4 text-xl tracking-[0.2em] text-yellow-300">
                      {'★'.repeat(testimonial.rating)}
                    </div>
                  )}

                  <h3 className="mb-5 text-lg font-semibold">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm leading-relaxed text-white md:text-base">
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-12">
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 border border-white rounded-full" />
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          TEMPORARY CTA
          We can remove/replace this once Contact section is built.
      ===================================================== */}
      <section className="px-5 py-16 text-center bg-white md:py-24">
        <h2 className="text-3xl font-semibold text-charcoal-800">
          Contact Us
        </h2>
      </section>
    </div>
  );
}