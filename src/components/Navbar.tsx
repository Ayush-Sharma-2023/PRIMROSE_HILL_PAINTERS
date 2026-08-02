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
      <header className="fixed top-0 left-0 right-0 z-40 bg-cream-50/95 backdrop-blur-sm border-b border-cream-200">
        <div className="flex items-center justify-between px-5 md:px-10 h-20">
          <Logo />
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 group"
            aria-label="Open menu"
          >
            <span className="hidden sm:block text-xs font-medium tracking-[0.25em] uppercase text-charcoal-600 group-hover:text-rust-700 transition-colors">
              Menu
            </span>
            <span className="w-11 h-11 flex items-center justify-center border border-charcoal-300 group-hover:border-rust-700 group-hover:bg-rust-700 transition-all duration-300 rounded-none">
              <Menu className="w-5 h-5 text-charcoal-800 group-hover:text-white transition-colors" />
            </span>
          </button>
        </div>
      </header>
      <SidePanel open={open} onClose={() => setOpen(false)} />
    </>
  );
}
