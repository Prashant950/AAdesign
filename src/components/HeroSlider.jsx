import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { heroSlides } from '../data/siteData';

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [prev, setPrev] = useState(null);
  const prevRef = useRef(0);

  const goTo = (nextIdx) => {
    if (nextIdx === prevRef.current) return;
    setPrev(prevRef.current);
    prevRef.current = nextIdx;
    setI(nextIdx);
  };

  useEffect(() => {
    const t = setInterval(() => {
      const next = (prevRef.current + 1) % heroSlides.length;
      goTo(next);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative h-[calc(100svh-5rem)] min-h-[540px] max-h-[820px] overflow-hidden bg-stone-900"
      aria-roledescription="carousel"
    >
      {heroSlides.map((s, idx) => {
        const isCurrent = idx === i;
        const isPrev = idx === prev;
        return (
          <div
            key={s.img}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
              isCurrent ? 'z-10 opacity-100' : isPrev ? 'z-[5] opacity-0' : 'z-0 opacity-0'
            }`}
            aria-hidden={!isCurrent}
          >
            <img
              src={s.img}
              alt={s.title}
              loading="eager"
              className={`h-full w-full object-cover transition-transform duration-[7000ms] ease-out ${
                isCurrent || isPrev ? 'scale-105' : 'scale-100'
              }`}
            />
          </div>
        );
      })}

      {/* Light neutral readability scrim on left only—keeps background image crystal clear */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-black/45 to-transparent" />

      <div className="container-x relative z-30 flex h-full items-center pb-12 pt-6">
        <div key={i} className="max-w-2xl animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-black/45 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-gold-light backdrop-blur-md sm:text-sm">
            <Sparkles size={14} className="text-gold" />
            {heroSlides[i].badge}
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-[1.15] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl">
            {heroSlides[i].title}
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/95 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] sm:mt-5 sm:text-lg">
            {heroSlides[i].text}
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-wrap sm:gap-4">
            <Link
              to="/contact"
              className="btn-gold w-full justify-center whitespace-nowrap px-3.5 py-3 text-xs sm:w-auto sm:px-6 sm:text-sm"
            >
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="btn-outline w-full justify-center whitespace-nowrap bg-black/35 px-3.5 py-3 text-xs sm:w-auto sm:px-6 sm:text-sm"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2.5">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === i ? 'w-9 bg-gold shadow-sm shadow-gold/50' : 'w-2.5 bg-white/60 hover:bg-gold/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
