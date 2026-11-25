import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { services, serviceCategories, banners } from '../data/siteData';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered =
    selectedCategory === 'All'
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Integrated design, manufacturing, MEP engineering, and turnkey construction services across India."
        img={banners.services}
      />

      <section className="section bg-cream">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Deliver"
            title="Specialized Commercial & Retail Services"
            text="Filter by discipline or click any service card to view full scope, deliverables, and execution timelines."
          />

          {/* Interactive Category Filter */}
          <div
            className="mb-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
            role="tablist"
            aria-label="Filter services by category"
          >
            {serviceCategories.map((cat) => {
              const count =
                cat === 'All'
                  ? services.length
                  : services.filter((s) => s.category === cat).length;
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-2 rounded-full border-2 px-4 py-2 text-xs font-bold transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-sm ${
                    active
                      ? 'border-gold bg-choco text-gold shadow-lg shadow-choco/20'
                      : 'border-stone-200 bg-white text-choco hover:-translate-y-0.5 hover:border-gold hover:text-gold-dark'
                  }`}
                >
                  <Layers size={14} className={active ? 'text-gold' : 'text-stone-400'} />
                  <span>{cat}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] ${
                      active ? 'bg-gold text-choco-dark' : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div key={selectedCategory} className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s, idx) => (
              <ServiceCard key={s.slug} s={s} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-choco py-14">
        <div className="container-x flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gold">Custom Turnkey Scope</p>
            <h2 className="mt-1 max-w-xl text-2xl font-extrabold !text-white md:text-3xl">
              Not sure which combination fits your site?
            </h2>
          </div>
          <Link to="/contact" className="btn-gold">
            Talk to Our Engineers <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
