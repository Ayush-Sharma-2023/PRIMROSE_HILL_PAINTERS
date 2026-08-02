import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, Plus } from 'lucide-react';
import { NAV_LINKS } from '@/data/content';

export default function SidePanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal-900/50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-cream-50 shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-cream-200">
          <span className="font-serif text-lg text-charcoal-800">Menu</span>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center border border-charcoal-300 hover:border-rust-700 hover:bg-rust-700 hover:text-white transition-all duration-300"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {link.children ? (
                  <>
                    <button
                      onClick={() => setServicesOpen((v) => !v)}
                      className="w-full flex items-center justify-between py-3 text-left font-serif text-xl text-charcoal-800 hover:text-rust-700 transition-colors"
                    >
                      {link.label}
                      <Plus
                        className={`w-4 h-4 transition-transform duration-300 ${
                          servicesOpen ? 'rotate-45' : ''
                        }`}
                      />
                    </button>
                    <ul
                      className={`overflow-hidden transition-all duration-400 ${
                        servicesOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            to={child.href}
                            className="block py-2.5 pl-5 text-sm text-charcoal-500 hover:text-rust-700 hover:pl-7 transition-all duration-200 border-l border-cream-300 ml-2"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className="block py-3 font-serif text-xl text-charcoal-800 hover:text-rust-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-6 py-6 border-t border-cream-200">
          <a
            href="https://api.whatsapp.com/send?phone=447788516436&text=Chat%20to%20us%20now%20on%20WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center btn-primary w-full"
          >
            Get a Quote
          </a>
          <p className="mt-4 text-xs text-charcoal-400 text-center tracking-wide">
            Primrose Hill, NW8 · +44 7788 516436
          </p>
        </div>
      </aside>
    </>
  );
}
