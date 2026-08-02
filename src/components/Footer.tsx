import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { FOOTER_SERVICES } from '@/data/content';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-100">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Services */}
          <div>
            <h3 className="font-serif text-lg text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    className="text-sm text-cream-100/70 hover:text-rust-400 transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg text-white mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-cream-100/70">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-rust-400 shrink-0" />
                <a href="tel:+447788516436" className="hover:text-white transition-colors">
                  +44 7788 516436
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-rust-400 shrink-0" />
                <a href="mailto:info@primrosehillpainters.co.uk" className="hover:text-white transition-colors break-all">
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
            <h3 className="font-serif text-lg text-white mb-6">Social Media</h3>
            <div className="flex gap-3 mb-8">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center border border-cream-100/20 hover:border-rust-400 hover:bg-rust-700 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center border border-cream-100/20 hover:border-rust-400 hover:bg-rust-700 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-6 border-t border-cream-100/10">
              <Logo className="[&_span]:text-cream-100 [&_.text-charcoal-400]:text-cream-100/50 [&_.text-charcoal-800]:text-white" />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream-100/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream-100/40">
          <p>© {new Date().getFullYear()} Primrose Hill Painters. All rights reserved.</p>
          <p>Professional Painters & Decorators · Primrose Hill, NW8 · North London</p>
        </div>
      </div>
    </footer>
  );
}
