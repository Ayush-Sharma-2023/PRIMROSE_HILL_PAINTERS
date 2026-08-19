import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/HeroSlider";
// import Footer from "@/components/Footer";
import siteData from "@/data/data";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();

  const site = siteData.find((item) => item.slug === slug);

  if (!site) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <Header />

      <main className="w-full overflow-hidden bg-white font-sans text-[#222]">
        {/* HERO */}
        <section className="w-full">
          <div className="relative overflow-hidden">
            {/* <img
              src={site.heroImage || "/public/image.png"}
              alt={site.heroImageAlt}
              className="h-full w-full object-cover"
            /> */}

            <button
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl font-light text-white drop-shadow"
            >
              ‹
            </button>
            <button
              aria-label="Next slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl font-light text-white drop-shadow"
            >
              ›
            </button>
          </div>

          <div className="bg-[#d8d0c4] px-6 py-12 text-center sm:px-12 lg:px-20">
            <h1 className="mx-auto max-w-5xl text-2xl font-bold leading-tight text-black sm:text-3xl">
              {site.heroTitle}
            </h1>
            <p className="mx-auto mt-5 max-w-5xl text-sm leading-7 text-[#555]">
              {site.heroDescription}
            </p>
          </div>
        </section>

        {/* TRUST */}
        <section className="relative min-h-[300px] overflow-hidden bg-[#222] text-white">
          <img
            src={site.trustBackgroundImage || "/image.png"}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-black/45" />

          <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-12 text-center sm:px-10">
            <h2 className="text-2xl font-bold sm:text-3xl">{site.trustTitle}</h2>

            <ul className="mt-6 max-w-4xl list-disc space-y-1 pl-5 text-left text-sm leading-6 sm:text-center sm:list-none sm:pl-0">
              {site.trustPoints.map((point: string) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <a
              href={site.trustButtonHref}
              className="mt-7 bg-[#df5955] px-7 py-3 text-sm font-semibold uppercase tracking-wide transition hover:bg-[#c94743]"
            >
              {site.trustButtonLabel}
            </a>
          </div>
        </section>

        {/* CRAFTSMANSHIP */}
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <img
              src={site.craftsmanshipImage || "/public/image.png"}
              alt={site.craftsmanshipImageAlt}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="bg-[#4a303e] px-8 py-10 text-white sm:px-12 lg:px-10">
            <h2 className="text-2xl font-bold">{site.craftsmanshipTitle}</h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-white/90">
              {site.craftsmanshipParagraphs.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* PROPERTIES */}
        <section className="px-6 py-12 sm:px-12 lg:px-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_390px]">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-black">
                {site.propertiesTitle}
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-6 text-[#555]">
                {site.propertiesParagraphs.map((paragraph: string) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mx-auto h-[440px] w-full max-w-[390px] overflow-hidden rounded-t-[50%] rounded-b-[2px]">
              <img
                src={site.propertiesImage || "/public/image.png"}
                alt={site.propertiesImageAlt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* CASE STUDY */}
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <div className="min-h-[460px]">
            <img
              src={site.caseStudyImage || "/public/image.png"}
              alt={site.caseStudyImageAlt}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="bg-[#4a303e] px-8 py-10 text-white sm:px-12 lg:px-10">
            <h2 className="text-2xl font-bold">{site.caseStudyTitle}</h2>

            <div className="mt-6 space-y-5 text-sm leading-6">
              <div>
                <h3 className="font-bold">{site.caseStudyClientDetailsTitle}</h3>
                <div className="mt-2 space-y-1 text-white/90">
                  {site.caseStudyClientDetailsItems.map((item: string) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold">{site.caseStudyChallengeTitle}</h3>
                <p className="mt-2 text-white/90">{site.caseStudyChallengeText}</p>
              </div>

              <div>
                <h3 className="font-bold">{site.caseStudySolutionTitle}</h3>
                <div className="mt-2 space-y-2 text-white/90">
                  {site.caseStudySolutionSteps.map((step: string) => (
                    <p key={step}>{step}</p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold">{site.caseStudyResultTitle}</h3>
                <p className="mt-2 text-white/90">{site.caseStudyResultText}</p>
              </div>

              <blockquote className="border-l-2 border-white/40 pl-4 italic text-white/85">
                “{site.caseStudyQuote}”
              </blockquote>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="relative px-6 py-12 sm:px-12 lg:px-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1fr_470px]">
            <div>
              <h2 className="text-2xl font-bold text-black">{site.servicesTitle}</h2>

              <div className="mt-5 space-y-4 text-sm leading-5 text-[#555]">
                {site.servicesItems.map(
                  (service: { title: string; description: string }) => (
                    <div key={service.title}>
                      <h3 className="font-bold text-[#333]">{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="h-[500px] overflow-hidden rounded-t-[50%]">
              <img
                src={site.servicesImage || "/public/image.png"}
                alt={site.servicesImageAlt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <div className="min-h-[500px]">
            <img
              src={site.faqImage || "/public/image.png"}
              alt={site.faqImageAlt}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="bg-[#4a303e] px-8 py-10 text-white sm:px-12 lg:px-10">
            <h2 className="text-2xl font-bold">{site.faqTitle}</h2>

            <div className="mt-6 space-y-5">
              {site.faqItems.map((item: { question: string; answer: string }) => (
                <div key={item.question}>
                  <h3 className="text-sm font-bold">{item.question}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/85">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-[#d8d0c4] px-6 py-12 sm:px-12">
          <h2 className="text-center text-2xl font-bold text-black">
            {site.testimonialsTitle}
          </h2>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
            {site.testimonialsItems.map(
              (testimonial: { name: string; rating: number; text: string }) => (
                <article key={testimonial.name} className="text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl text-[#aaa]">
                    ●
                  </div>

                  <div className="text-lg tracking-[2px] text-[#f1e83c]">
                    {"★".repeat(testimonial.rating)}
                  </div>

                  <h3 className="mt-2 font-medium text-[#333]">
                    {testimonial.name}
                  </h3>

                  <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-[#555]">
                    “{testimonial.text}”
                  </p>
                </article>
              ),
            )}
          </div>

          <div className="mx-auto mt-8 h-2 w-2 rounded-full bg-white" />
        </section>

        {/* CTA */}
        <section className="bg-[#f2efea] px-6 py-16 text-center sm:px-12 lg:py-20">
          <h2 className="text-2xl font-bold text-black sm:text-3xl">
            {site.ctaTitle}
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-sm leading-7 text-[#555]">
            {site.ctaDescription}
          </p>

          <a
            href={site.ctaButtonHref}
            className="mt-7 inline-block bg-[#df5955] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#c94743]"
        >
            {site.ctaButtonLabel}
          </a>
        </section>
      </main>

      {/* <Footer /> */}
{/* <a
      
        href={site.whatsappHref}
        aria-label="Contact Primrose Hill Painters on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#06165f] text-white shadow-lg transition hover:scale-105"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-none stroke-current"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M20 11.5a8.2 8.2 0 0 1-12.5 7L4 20l1.5-3.3A8.2 8.2 0 1 1 20 11.5Z" />
          <path d="M9 8.2c.3-.3.6-.3.9-.1l1 .8c.3.2.3.5.2.8l-.5.8c.6 1.1 1.4 1.9 2.5 2.5l.8-.5c.3-.2.6-.1.8.2l.8 1c.2.3.2.6-.1.9-.5.5-1.1.7-1.7.5-3.2-.8-5.6-3.2-6.4-6.4-.2-.6 0-1.2.5-1.7Z" />
        </svg>
      </a> */}
    </>
  );
}