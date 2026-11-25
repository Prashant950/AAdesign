import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { company, navLinks } from '../data/siteData';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `relative py-2 text-sm font-semibold tracking-wide transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 ${
      isActive
        ? 'text-gold after:w-full'
        : 'text-stone-100 hover:text-gold-light after:w-0 hover:after:w-full'
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gold/20 bg-choco/95 shadow-lg shadow-black/25 backdrop-blur-md">
        <div className="container-x flex h-20 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-gold">
              Get a Quote <ArrowRight size={16} />
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-choco-light/60 text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-choco-dark lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-slide-nav"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Right-to-Left Slide Drawer */}
      <div
        className={`fixed inset-0 z-[70] lg:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Slide Panel (Right to Left) */}
        <aside
          id="mobile-slide-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className={`fixed right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col border-l border-gold/25 bg-choco shadow-2xl transition-transform duration-300 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-20 items-center justify-between border-b border-gold/20 px-5">
            <Logo compact />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gold/30 text-gold transition hover:bg-gold hover:text-choco-dark"
              aria-label="Close navigation menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1.5 overflow-y-auto px-5 py-6" aria-label="Mobile">
            {navLinks.map((l, idx) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                style={{ transitionDelay: open ? `${idx * 40}ms` : '0ms' }}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-lg border-l-4 px-4 py-3.5 text-base font-semibold transition-all duration-200 ${
                    isActive
                      ? 'border-gold bg-choco-light text-gold'
                      : 'border-transparent text-stone-100 hover:border-gold/70 hover:bg-choco-light/50 hover:text-gold-light'
                  }`
                }
              >
                <span>{l.label}</span>
                <ArrowRight size={16} className="opacity-70" />
              </NavLink>
            ))}

            <div className="mt-5 border-t border-gold/15 pt-5">
              <Link to="/contact" className="btn-gold w-full justify-center">
                Get a Free Quote <ArrowRight size={16} />
              </Link>
            </div>
          </nav>

          <div className="border-t border-gold/20 bg-choco-dark/60 px-5 py-5 text-xs text-stone-300">
            <p className="mb-2.5 font-heading font-bold uppercase tracking-wider text-gold">
              Quick Contact
            </p>
            <a
              href={`tel:${company.phone.replace(/\s/g, '')}`}
              className="mb-2 flex items-center gap-2.5 transition hover:text-gold"
            >
              <Phone size={15} className="text-gold" />
              <span>{company.phone}</span>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2.5 break-all transition hover:text-gold"
            >
              <Mail size={15} className="text-gold" />
              <span>{company.email}</span>
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
