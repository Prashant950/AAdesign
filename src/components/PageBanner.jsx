import { Link } from 'react-router-dom';

export default function PageBanner({ title, subtitle, img, parentLabel, parentTo }) {
  return (
    <section className="relative overflow-hidden bg-stone-900 py-14 sm:py-20 md:py-28">
      <img
        src={img}
        alt=""
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />

      <div className="container-x relative z-10">
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/95 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] sm:mt-4 sm:max-w-2xl sm:text-base">
            {subtitle}
          </p>
        )}
        <p className="mt-5 flex flex-wrap items-center gap-2 text-xs text-white/90 drop-shadow sm:mt-6 sm:text-sm">
          <Link to="/" className="transition hover:text-gold">Home</Link>
          <span>/</span>
          {parentLabel && parentTo && (
            <>
              <Link to={parentTo} className="transition hover:text-gold">{parentLabel}</Link>
              <span>/</span>
            </>
          )}
          <span className="font-semibold text-gold-light">{title}</span>
        </p>
      </div>
    </section>
  );
}
