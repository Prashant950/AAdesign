import { Link } from 'react-router-dom';

export default function Logo({ compact = false }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-2.5 sm:gap-3"
      aria-label="AA Design & Construction Pvt. Ltd. home"
    >
      <svg
        viewBox="0 0 64 58"
        className="h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="aaGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F2D77D" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B38D1F" />
          </linearGradient>
        </defs>
        {/* Outer architectural A-frame matching the brand sheet */}
        <path
          d="M32 3L4 54h11l17-32 17 32h11L32 3z"
          fill="url(#aaGoldGrad)"
        />
        {/* Inner nested A-chevron */}
        <path
          d="M32 25L18 54h8.2l5.8-12.5L37.8 54H46L32 25z"
          fill="#FAF6F0"
        />
        {/* Structural tie-bar */}
        <rect x="24.5" y="45" width="15" height="3.2" rx="1" fill="url(#aaGoldGrad)" />
      </svg>

      <span className="leading-none">
        <span className="block font-heading text-sm font-extrabold tracking-wider text-white transition-colors duration-300 group-hover:text-gold-light sm:text-base">
          AA DESIGN <span className="text-gold">&amp;</span> CONSTRUCTION
        </span>
        {!compact && (
          <span className="mt-1 flex items-center gap-2">
            <span className="h-[1px] w-4 bg-gold/70 sm:w-6" />
            <span className="text-[9px] font-bold tracking-[0.32em] text-gold sm:text-[10px]">
              PVT. LTD.
            </span>
            <span className="h-[1px] w-4 bg-gold/70 sm:w-6" />
          </span>
        )}
      </span>
    </Link>
  );
}
