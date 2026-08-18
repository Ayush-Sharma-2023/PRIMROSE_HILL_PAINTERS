// src/components/FaqAccordion.tsx
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-cream-200">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="py-5">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex items-start justify-between w-full gap-4 text-left"
            >
              <span className={`font-serif text-lg transition-colors ${isOpen ? 'text-rust-700' : 'text-charcoal-800'}`}>
                {item.q}
              </span>
              <span className="mt-1 shrink-0">
                {isOpen ? (
                  <Minus className="w-4 h-4 text-rust-700" />
                ) : (
                  <Plus className="w-4 h-4 text-charcoal-500" />
                )}
              </span>
            </button>
            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
              <p className="pt-3 pr-8 text-sm leading-relaxed text-charcoal-500">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
