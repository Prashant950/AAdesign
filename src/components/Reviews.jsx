import SectionHeading from './SectionHeading';
import { reviews } from '../data/siteData';

export default function Reviews() {
  const list = [...reviews, ...reviews];

  return (
    <section className="section overflow-hidden bg-choco">
      <div className="container-x">
        <SectionHeading
          light
          eyebrow="Client Testimonials"
          title="What Our Clients Say"
          text="Real feedback from retail founders, operations heads, and corporate leaders across India."
        />
      </div>

      {/* Continuous auto-scrolling marquee, without stars or comma/quote icons */}
      <div className="group flex w-max animate-marqueeSlow py-2 hover:[animation-play-state:paused]">
        {list.map((r, idx) => (
          <figure
            key={`${r.name}-${idx}`}
            className="mx-3 flex w-[320px] shrink-0 flex-col justify-between rounded-2xl border-2 border-gold/20 bg-choco-light/65 p-7 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:bg-choco-light sm:w-[390px]"
          >
            <blockquote className="text-sm leading-relaxed text-stone-100 sm:text-base">
              {r.text}
            </blockquote>

            <figcaption className="mt-6 flex items-center gap-3.5 border-t border-gold/15 pt-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-dark font-heading text-sm font-extrabold text-choco-dark shadow-md">
                {r.name
                  .split(' ')
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join('')}
              </span>
              <span className="min-w-0">
                <span className="block truncate font-heading text-sm font-bold text-white">
                  {r.name}
                </span>
                <span className="block truncate text-xs text-gold-light">
                  {r.role} • {r.city}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
