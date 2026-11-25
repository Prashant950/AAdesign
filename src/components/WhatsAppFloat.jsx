import { company } from '../data/siteData';

export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    `Hello ${company.name}, I would like to discuss a design & construction / interior fit-out project.`
  );
  const href = `https://wa.me/${company.whatsapp}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-[65] flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#25D366] via-[#20BD5A] to-[#128C7E] text-white shadow-[0_10px_28px_rgba(37,211,102,0.48)] ring-2 ring-gold/75 transition-all duration-300 hover:-translate-y-1.5 hover:scale-110 hover:ring-gold hover:shadow-[0_16px_36px_rgba(37,211,102,0.65)] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      {/* Ambient pulsing glow ring */}
      <span className="pointer-events-none absolute -inset-1.5 -z-10 animate-ping rounded-full bg-[#25D366]/35" />

      {/* Glossy top highlight */}
      <span className="pointer-events-none absolute inset-x-2 top-1 h-4 rounded-full bg-white/25 blur-[1px]" />

      {/* Crisp official WhatsApp icon */}
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 fill-white drop-shadow-sm transition-transform duration-300 group-hover:rotate-6 sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <path d="M16.04 2.67C8.69 2.67 2.72 8.64 2.72 15.99c0 2.35.61 4.65 1.78 6.67L2.61 29.5l7.01-1.84a13.28 13.28 0 0 0 6.42 1.64h.01c7.35 0 13.32-5.97 13.32-13.32 0-3.56-1.39-6.91-3.9-9.42a13.25 13.25 0 0 0-9.43-3.89zm0 24.38h-.01a11.04 11.04 0 0 1-5.63-1.54l-.4-.24-4.16 1.09 1.11-4.05-.26-.42a11.03 11.03 0 0 1-1.7-5.9c0-6.11 4.97-11.08 11.09-11.08 2.96 0 5.74 1.15 7.83 3.25a11.02 11.02 0 0 1 3.24 7.83c0 6.12-4.97 11.06-11.07 11.06zm6.08-8.29c-.33-.17-1.97-.97-2.27-1.08-.31-.11-.53-.17-.75.17-.22.33-.86 1.08-1.06 1.3-.19.22-.39.25-.72.08-.33-.17-1.4-.52-2.67-1.65-.99-.88-1.65-1.97-1.85-2.3-.19-.33-.02-.51.15-.68.15-.15.33-.39.5-.58.17-.19.22-.33.33-.56.11-.22.06-.42-.03-.58-.08-.17-.75-1.81-1.03-2.48-.27-.65-.55-.56-.75-.57h-.64c-.22 0-.58.08-.89.42-.31.33-1.17 1.14-1.17 2.78 0 1.64 1.19 3.22 1.36 3.44.17.22 2.35 3.59 5.69 5.03.8.34 1.42.55 1.9.7.8.25 1.53.22 2.11.13.64-.1 1.97-.81 2.25-1.59.28-.78.28-1.45.19-1.59-.08-.14-.3-.22-.64-.39z" />
      </svg>

      {/* Live gold notification dot */}
      <span className="absolute right-0.5 top-0.5 flex h-3.5 w-3.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-85" />
        <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-gold" />
      </span>
    </a>
  );
}
