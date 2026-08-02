import { PageHero, PageSection, CtaSection } from '@/components/PageTemplate';

const POSTS = [
  { title: 'Choosing the Right Paint for Period Homes', excerpt: 'Breathable, mineral-based paints help protect heritage properties from trapped moisture.', date: 'August 2026' },
  { title: 'Hand-Painted Kitchens: A Timeless Finish', excerpt: 'Why traditional brush-applied finishes remain the gold standard for cabinetry.', date: 'July 2026' },
  { title: 'Protecting Your Home During Decoration Works', excerpt: 'How professional painters keep dust and disruption to a minimum in occupied homes.', date: 'June 2026' },
];

export default function Blog() {
  return (
    <>
      <PageHero
        label="Blog"
        title="Insights & Articles"
        subtitle="Guidance on painting, decorating and caring for period London homes."
        bgImage="https://images.pexels.com/photos/7896649/pexels-photo-7896649.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />
      <PageSection bg="cream">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((p) => (
            <article key={p.title} className="bg-white border border-cream-200 overflow-hidden service-card">
              <div className="h-48 bg-cream-200" />
              <div className="p-6">
                <p className="text-xs text-charcoal-400 tracking-wide mb-2">{p.date}</p>
                <h3 className="font-serif text-xl text-charcoal-800 mb-2">{p.title}</h3>
                <p className="text-sm text-charcoal-500 leading-relaxed">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </PageSection>
      <CtaSection />
    </>
  );
}
