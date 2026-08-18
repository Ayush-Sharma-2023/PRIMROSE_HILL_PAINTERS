// src/components/Footer.tsx

import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import SERVICES from '@/data/services';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-100">
      <div className="px-5 py-16 mx-auto max-w-7xl md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* Services */}
          <div>
            <h3 className="mb-6 font-serif text-lg text-white">Services</h3>

            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm transition-colors text-cream-100/70 hover:text-rust-400"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 font-serif text-lg text-white">Contact</h3>

            <ul className="space-y-4 text-sm text-cream-100/70">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-rust-400 shrink-0" />
                <a
                  href="tel:+447788516436"
                  className="transition-colors hover:text-white"
                >
                  +44 7788 516436
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-rust-400 shrink-0" />
                <a
                  href="mailto:info@primrosehillpainters.co.uk"
                  className="break-all transition-colors hover:text-white"
                >
                  info@primrosehillpainters.co.uk
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-rust-400 shrink-0" />
                <span>Primrose Hill, NW8</span>
              </li>
            </ul>
          </div>

          {/* Social + Logo */}
          <div>
            <h3 className="mb-6 font-serif text-lg text-white">
              Social Media
            </h3>

            <div className="flex gap-3 mb-8">
              <a
                href="#"
                aria-label="Instagram"
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 border border-cream-100/20 hover:border-rust-400 hover:bg-rust-700"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 border border-cream-100/20 hover:border-rust-400 hover:bg-rust-700"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-6 border-t border-cream-100/10">
              <Logo className="[&_span]:text-cream-100 [&_.text-charcoal-400]:text-cream-100/50 [&_.text-charcoal-800]:text-white" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-8 mt-16 text-xs border-t border-cream-100/10 md:flex-row text-cream-100/40">
          <p>
            © {new Date().getFullYear()} Primrose Hill Painters. All rights
            reserved.
          </p>

          <p>
            Professional Painters & Decorators · Primrose Hill, NW8 · North
            London
          </p>
        </div>
      </div>
    </footer>
  );
}