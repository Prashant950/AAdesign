import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { aboutImg, aboutImg2, stats } from '../data/siteData';

const points = [
  'Single-window turnkey execution',
  'In-house Noida fixture factory',
  'Pan-India 28+ city roll-out capability',
  'Locked BOQs & milestone tracking',
];

export default function WhoWeAre() {
  return (
    <section className="section bg-white">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div className="relative pb-12 pr-4 sm:pr-12">
          <div className="group overflow-hidden rounded-2xl border-2 border-stone-200 shadow-lg transition duration-500 hover:border-gold">
            <img
              src={aboutImg}
              alt="AA Design & Construction architects reviewing blueprints and material swatches"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <div className="absolute bottom-0 right-0 w-[48%] overflow-hidden rounded-xl border-[6px] border-white shadow-2xl transition duration-500 hover:scale-[1.03] hover:border-gold/80">
            <img
              src={aboutImg2}
              alt="Luxury Indian retail storefront delivered by AA Design & Construction"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div className="absolute left-3 top-3 rounded-xl border border-gold/40 bg-choco px-4 py-3 text-center text-white shadow-xl sm:left-4 sm:top-4 sm:px-5 sm:py-3.5">
            <p className="font-heading text-2xl font-extrabold text-gold sm:text-3xl">{stats[0].value}</p>
            <p className="text-[11px] font-medium tracking-wide text-stone-200">Years of Excellence</p>
          </div>
        </div>

        <div>
          <SectionHeading
            center={false}
            eyebrow="About AA Design & Construction"
            title="Built on Trust, Precision & Indian Craftsmanship"
          />
          <p className="-mt-6 text-base font-semibold text-choco sm:text-lg">
            We build retail showrooms and corporate workplaces ready to open on the exact day promised.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base">
            Headquartered in Noida (Delhi NCR), <strong className="text-choco">AA Design &amp; Construction Pvt. Ltd.</strong> unites architectural coordination, civil construction, MEP services, and in-house millwork manufacturing—so you work with one accountable partner instead of managing six separate vendors.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2.5 rounded-lg border border-stone-200/80 bg-cream/60 px-3.5 py-2.5 text-sm font-medium text-choco transition hover:border-gold"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold-dark" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 grid grid-cols-2 gap-4 rounded-xl border border-gold/25 bg-choco p-4 text-white sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading text-xl font-extrabold text-gold sm:text-2xl">{s.value}</p>
                <p className="mt-0.5 text-[11px] text-stone-300">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link to="/about" className="btn-choco">
              Know More About Us <ArrowRight size={16} />
            </Link>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 sm:text-sm">
              <ShieldCheck size={18} className="text-gold-dark" /> ISO-Aligned QA/QC &amp; Mall Compliance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
