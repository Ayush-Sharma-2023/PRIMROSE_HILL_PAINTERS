// src/components/SidePanel.tsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus } from 'lucide-react';
import SERVICES from '@/data/services';

export default function SidePanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
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
        <div className="flex items-center justify-between h-20 px-6 border-b border-cream-200">
          <span className="font-serif text-lg text-charcoal-800">
            Menu
          </span>

          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 transition-all duration-300 border border-charcoal-300 hover:border-rust-700 hover:bg-rust-700 hover:text-white"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 px-6 py-8 overflow-y-auto">
          <ul className="space-y-1">

            {/* Home */}
            <li>
              <Link
                to="/"
                onClick={onClose}
                className="block py-3 font-serif text-xl transition-colors text-charcoal-800 hover:text-rust-700"
              >
                Home
              </Link>
            </li>

            {/* About */}
            <li>
              <Link
                to="/about-us"
                onClick={onClose}
                className="block py-3 font-serif text-xl transition-colors text-charcoal-800 hover:text-rust-700"
              >
                About Us
              </Link>
            </li>

            {/* Services */}
            <li>
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className="flex items-center justify-between w-full py-3 font-serif text-xl text-left transition-colors text-charcoal-800 hover:text-rust-700"
              >
                Services

                <Plus
                  className={`w-4 h-4 transition-transform duration-300 ${
                    servicesOpen ? 'rotate-45' : ''
                  }`}
                />
              </button>

              <ul
                className={`overflow-hidden transition-all duration-400 ${
                  servicesOpen
                    ? 'max-h-[2000px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                {SERVICES.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/services/${service.slug}`}
                      onClick={onClose}
                      className="block py-2.5 pl-5 text-sm text-charcoal-500 hover:text-rust-700 hover:pl-7 transition-all duration-200 border-l border-cream-300 ml-2"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Blog */}
            <li>
              <Link
                to="/blog"
                onClick={onClose}
                className="block py-3 font-serif text-xl transition-colors text-charcoal-800 hover:text-rust-700"
              >
                Blog
              </Link>
            </li>

            {/* Contact */}
            <li>
              <Link
                to="/contact"
                onClick={onClose}
                className="block py-3 font-serif text-xl transition-colors text-charcoal-800 hover:text-rust-700"
              >
                Contact Us
              </Link>
            </li>

          </ul>
        </nav>

        <div className="px-6 py-6 border-t border-cream-200">
          <a
            href="https://api.whatsapp.com/send?phone=447788516436&text=Chat%20to%20us%20now%20on%20WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center btn-primary"
          >
            Get a Quote
          </a>

          <p className="mt-4 text-xs tracking-wide text-center text-charcoal-400">
            Primrose Hill, NW8 · +44 7788 516436
          </p>
        </div>
      </aside>
    </>
  );
}