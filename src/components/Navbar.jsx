import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/many-miracles-logo.png';
import { navLinks } from '../data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/10 bg-midnight/78 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3" aria-label="Many Miracles Ministries home">
          <img src={logo} alt="" className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/40" />
          <div className="leading-tight">
            <p className="font-display text-xl font-bold text-ivory">Many Miracles</p>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-gold">Ministries</p>
          </div>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-ivory/72 transition hover:text-gold">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#partnership"
          className="hidden rounded-full border border-gold/35 px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.18em] text-gold transition hover:bg-gold hover:text-midnight lg:inline-flex"
        >
          Partner
        </a>

        <button className="icon-button lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gold/10 bg-midnight/96 px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-ivory/78 transition hover:bg-white/5 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
