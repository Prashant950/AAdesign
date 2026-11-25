import SectionHeading from './SectionHeading';
import { brands } from '../data/siteData';

function BrandMark({ brand }) {
  switch (brand.name) {
    case 'Tanishq':
      return (
        <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" aria-hidden="true">
          <circle cx="18" cy="18" r="16" fill="#8B1E3F" />
          <path d="M18 7l3.2 7.8L29 18l-7.8 3.2L18 29l-3.2-7.8L7 18l7.8-3.2L18 7z" fill="#D4AF37" />
        </svg>
      );
    case 'Fabindia':
      return (
        <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" aria-hidden="true">
          <rect width="36" height="36" rx="8" fill="#9B2C2C" />
          <path d="M11 26V10h14v3.5H15v3.2h8v3.3h-8V26h-4z" fill="#FAF6F0" />
        </svg>
      );
    case 'Reliance Trends':
      return (
        <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" aria-hidden="true">
          <rect width="36" height="36" rx="8" fill="#1D4ED8" />
          <path d="M9 12h18v3.5h-7v11h-4v-11H9V12z" fill="#FFFFFF" />
          <circle cx="26" cy="24" r="3" fill="#D4AF37" />
        </svg>
      );
    case 'Titan Eye+':
      return (
        <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" aria-hidden="true">
          <rect width="36" height="36" rx="8" fill="#0F766E" />
          <ellipse cx="18" cy="18" rx="11" ry="6.5" fill="none" stroke="#fff" strokeWidth="2.5" />
          <circle cx="18" cy="18" r="3" fill="#D4AF37" />
        </svg>
      );
    case 'Raymond':
      return (
        <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" aria-hidden="true">
          <rect width="36" height="36" rx="8" fill="#B91C1C" />
          <path d="M11 26V10h8a5 5 0 0 1 0 10h-4l6 6h-4.5l-5-6H15v6h-4z" fill="#FFFFFF" />
        </svg>
      );
    case 'Bata':
      return (
        <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" aria-hidden="true">
          <rect width="36" height="36" rx="8" fill="#DC2626" />
          <path d="M11 10h8.5a4.2 4.2 0 0 1 3 7.1A4.5 4.5 0 0 1 20 26H11V10zm4 6.3h3.8a1.8 1.8 0 0 0 0-3.5H15v3.5zm0 6.8h4.4a2 2 0 0 0 0-4H15v4z" fill="#fff" />
        </svg>
      );
    case 'Croma':
      return (
        <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" aria-hidden="true">
          <rect width="36" height="36" rx="8" fill="#064E3B" />
          <path d="M24.5 13.5a8 8 0 1 0 0 9" fill="none" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case 'Lenskart':
      return (
        <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" aria-hidden="true">
          <rect width="36" height="36" rx="8" fill="#1E3A8A" />
          <circle cx="12.5" cy="18" r="4.5" fill="none" stroke="#38BDF8" strokeWidth="2.4" />
          <circle cx="23.5" cy="18" r="4.5" fill="none" stroke="#38BDF8" strokeWidth="2.4" />
          <path d="M17 18h2" stroke="#fff" strokeWidth="2.2" />
        </svg>
      );
    case 'Nykaa':
      return (
        <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" aria-hidden="true">
          <rect width="36" height="36" rx="8" fill="#DB2777" />
          <path d="M11 26V10h3.6l7.4 10V10h3.5v16h-3.6L14.5 16v10H11z" fill="#fff" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" aria-hidden="true">
          <rect width="36" height="36" rx="8" fill="#B45309" />
          <path d="M11 26V10h3.8v6.2h6.4V10H25v16h-3.8v-6.5h-6.4V26H11z" fill="#FEF3C7" />
        </svg>
      );
  }
}

function ClientLogo({ brand }) {
  return (
    <div className="mx-3 flex h-20 w-64 shrink-0 items-center gap-3.5 rounded-xl border-2 border-stone-200 bg-white px-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg">
      <BrandMark brand={brand} />
      <div className="min-w-0">
        <span className="block truncate font-heading text-base font-extrabold tracking-tight text-choco">
          {brand.name}
        </span>
        <span className="block truncate text-[11px] font-medium text-stone-500">
          {brand.sector}
        </span>
      </div>
    </div>
  );
}

export default function ClientMarquee() {
  const list = [...brands, ...brands];
  return (
    <section className="section overflow-hidden bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Trusted Pan-India"
          title="Brands That Trust Us"
          text="Leading Indian retail chains, jewellery flagships, and corporate enterprises build with AA Design & Construction Pvt. Ltd."
        />
      </div>
      <div className="group flex w-max animate-marquee py-2 hover:[animation-play-state:paused]">
        {list.map((b, i) => (
          <ClientLogo key={`${b.name}-${i}`} brand={b} />
        ))}
      </div>
    </section>
  );
}
