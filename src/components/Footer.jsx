import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Youtube, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { company, navLinks, services } from '../data/siteData';

const socialItems = [
  { name: 'Instagram', icon: Instagram, href: company.socials.instagram },
  { name: 'LinkedIn', icon: Linkedin, href: company.socials.linkedin },
  { name: 'Facebook', icon: Facebook, href: company.socials.facebook },
  { name: 'YouTube', icon: Youtube, href: company.socials.youtube },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    href: `https://wa.me/${company.whatsapp}`,
  },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-gold/30 bg-choco text-stone-300">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-stone-300/90">
            AA Design &amp; Construction Pvt. Ltd. delivers turnkey retail store fit-outs, corporate office interiors, and custom fixture manufacturing across India.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            {socialItems.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/35 bg-choco-light/60 text-gold transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-choco-dark hover:shadow-lg hover:shadow-gold/25"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-lg font-bold text-white">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="inline-block border-b border-transparent py-0.5 transition-all duration-200 hover:translate-x-1 hover:border-gold hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-lg font-bold text-white">Our Services</h4>
          <ul className="space-y-2.5 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="inline-block border-b border-transparent py-0.5 transition-all duration-200 hover:translate-x-1 hover:border-gold hover:text-gold"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-lg font-bold text-white">Contact Us</h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-gold" />
              <a
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                className="transition hover:text-gold"
              >
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 text-gold" />
              <a
                href={`mailto:${company.email}`}
                className="break-all transition hover:text-gold"
              >
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/15 bg-choco-dark/70 py-5">
        <div className="container-x flex flex-col items-center justify-between gap-2 text-center text-xs text-stone-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="text-stone-400">
            Powered By{' '}
            <a
              href="https://uniquedigitaltech.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Unique Digital Tech | Enterprise Software Engineering & Cloud Agency"
              className="font-semibold text-gold transition hover:text-gold-light hover:underline"
            >
              Unique Digital Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
