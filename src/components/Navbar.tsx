// src/components/Navbar.tsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Logo from './Logo';
import SidePanel from './SidePanel';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 border-b bg-cream-50/95 backdrop-blur-sm border-cream-200">
        <div className="flex items-center justify-between h-20 px-5 md:px-20">
          <Logo />
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 group"
            aria-label="Open menu"
          >
            <span className="hidden sm:block text-xs font-medium tracking-[0.25em] uppercase text-charcoal-600 group-hover:text-rust-700 transition-colors">
              Menu
            </span>
            <span className="flex items-center justify-center transition-all duration-300 border rounded-none w-11 h-11 border-charcoal-300 group-hover:border-rust-700 group-hover:bg-rust-700">
              <Menu className="w-5 h-5 transition-colors text-charcoal-800 group-hover:text-white" />
            </span>
          </button>
        </div>
      </header>
      <SidePanel open={open} onClose={() => setOpen(false)} />
    </>
  );
}
