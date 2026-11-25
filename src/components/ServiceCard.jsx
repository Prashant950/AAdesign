import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ s, index = 0 }) {
  const Icon = s.icon;
  return (
    <Link
      to={`/services/${s.slug}`}
      style={{ animationDelay: `${index * 60}ms` }}
      className="group flex flex-col overflow-hidden rounded-xl border-2 border-stone-200/80 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-2xl hover:shadow-choco/15 animate-rise"
    >
      <div className="relative h-56 overflow-hidden bg-choco-dark">
        <img
          src={s.img}
          alt={s.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <span className="absolute right-4 top-4 rounded-full border border-gold/40 bg-choco/85 px-3 py-1 text-[11px] font-semibold text-gold backdrop-blur-sm">
          {s.category}
        </span>
        <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-gold-dark text-choco-dark shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Icon size={24} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-choco transition-colors duration-200 group-hover:text-gold-dark">
          {s.title}
        </h3>
        <p className="mt-1 text-xs font-bold uppercase tracking-wider text-gold-dark">{s.sub}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">{s.desc}</p>

        <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4 text-xs font-bold text-choco">
          <span className="text-stone-500">Timeline: {s.duration}</span>
          <span className="inline-flex items-center gap-1.5 text-gold-dark transition-transform duration-300 group-hover:translate-x-1">
            View Details <ArrowRight size={15} />
          </span>
        </div>
      </div>
    </Link>
  );
}
