import { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { videos } from '../data/siteData';

export default function VideoPortfolio() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Site Walkthroughs"
          title="Video Portfolio"
          text="Watch how our execution crews and workshop craftsmen bring Indian commercial spaces to life."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {videos.map((v) => (
            <article key={v.title} className="group">
              <button
                type="button"
                onClick={() => setActive(v)}
                className="relative block aspect-video w-full overflow-hidden rounded-xl border-2 border-stone-200 shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-gold group-hover:shadow-xl"
                aria-label={`Play ${v.title}`}
              >
                <img
                  src={v.poster}
                  alt={v.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />
                <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-dark text-choco-dark shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <Play fill="currentColor" size={24} className="ml-0.5" />
                </span>
              </button>
              <h3 className="mt-4 text-lg font-bold text-choco transition-colors group-hover:text-gold-dark">
                {v.title}
              </h3>
              <p className="mt-1 text-sm text-stone-600">{v.desc}</p>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute -top-12 right-0 rounded-full border border-gold/40 bg-choco p-2 text-gold transition hover:bg-gold hover:text-choco-dark"
              aria-label="Close video"
            >
              <X size={24} />
            </button>
            <video src={active.src} controls autoPlay className="aspect-video w-full rounded-xl bg-black shadow-2xl" />
          </div>
        </div>
      )}
    </section>
  );
}
