import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Target,
  Phone,
  MessageCircle,
  Layers,
  MapPin,
  ChevronDown,
  Award,
} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import CountUp from '../components/CountUp';
import { services, company } from '../data/siteData';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug) || services[0];
  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const [openFaq, setOpenFaq] = useState(0);

  const whatsappText = encodeURIComponent(
    `Hello ${company.name}, I would like to inquire about "${service.title}" (${service.sub}). Please share a quote and timeline.`
  );
  const serviceWhatsappHref = `https://wa.me/${company.whatsapp}?text=${whatsappText}`;

  return (
    <>
      <PageBanner
        title={service.title}
        subtitle={service.sub}
        img={service.img}
        parentLabel="Services"
        parentTo="/services"
      />

      {/* Quick Highlight Strip */}
      <section className="border-b border-gold/20 bg-choco py-6 text-white">
        <div className="container-x grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl border border-gold/20 bg-choco-light/50 px-4 py-3">
            <Clock size={22} className="shrink-0 text-gold" />
            <div>
              <p className="text-[11px] uppercase tracking-wider text-stone-300">Turnaround</p>
              <p className="font-heading text-sm font-bold text-white">{service.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-gold/20 bg-choco-light/50 px-4 py-3">
            <ShieldCheck size={22} className="shrink-0 text-gold" />
            <div>
              <p className="text-[11px] uppercase tracking-wider text-stone-300">Warranty</p>
              <p className="font-heading text-sm font-bold text-white">{service.warranty}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-gold/20 bg-choco-light/50 px-4 py-3">
            <MapPin size={22} className="shrink-0 text-gold" />
            <div>
              <p className="text-[11px] uppercase tracking-wider text-stone-300">Coverage</p>
              <p className="font-heading text-sm font-bold text-white"><CountUp value="28+" startOnMount /> Cities Pan-India</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-gold/20 bg-choco-light/50 px-4 py-3">
            <Award size={22} className="shrink-0 text-gold" />
            <div>
              <p className="text-[11px] uppercase tracking-wider text-stone-300">Execution</p>
              <p className="font-heading text-sm font-bold text-white">In-House QA &amp; Plant</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <Link
            to="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-choco transition hover:text-gold-dark"
          >
            <ArrowLeft size={16} /> Back to All Services
          </Link>

          <div className="grid gap-10 lg:grid-cols-3">
            {/* Main Content */}
            <div className="space-y-10 lg:col-span-2">
              <div className="overflow-hidden rounded-2xl border-2 border-stone-200 shadow-lg">
                <img
                  src={service.img}
                  alt={service.title}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-choco text-gold">
                    <Icon size={22} />
                  </span>
                  <span className="rounded-full border border-gold/40 bg-cream px-3.5 py-1 text-xs font-bold text-choco">
                    {service.category}
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-extrabold text-choco sm:text-3xl">
                  Service Overview
                </h2>
                <p className="mt-3 text-base leading-relaxed text-stone-600">
                  {service.overview}
                </p>
              </div>

              {/* Deliverables */}
              <div className="rounded-2xl border-2 border-stone-200 bg-cream/65 p-6 sm:p-8">
                <h3 className="text-xl font-extrabold text-choco">Key Deliverables Included</h3>
                <p className="mt-1 text-sm text-stone-500">
                  Every milestone is tracked with transparent BOQs and site photo logs.
                </p>
                <ul className="mt-5 grid gap-3.5">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-stone-200/80 bg-white px-4 py-3 text-sm text-stone-700 transition hover:border-gold sm:text-base"
                    >
                      <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-gold-dark" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials & Specs */}
              {service.materials && (
                <div>
                  <h3 className="text-xl font-extrabold text-choco">Materials &amp; Technical Standards</h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {service.materials.map((mat) => (
                      <div key={mat} className="card-hover flex items-start gap-3 p-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold-dark">
                          <Layers size={18} />
                        </span>
                        <span className="text-sm font-semibold text-choco">{mat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Execution Workflow */}
              <div>
                <h3 className="text-xl font-extrabold text-choco">Execution Workflow</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {service.process.map((step, idx) => (
                    <div key={step} className="card-hover flex items-center gap-3.5 p-5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-dark font-heading text-sm font-extrabold text-choco-dark shadow">
                        0{idx + 1}
                      </span>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">
                          Stage {idx + 1}
                        </p>
                        <p className="text-sm font-bold text-choco">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Sectors */}
              {service.sectors && (
                <div className="rounded-2xl border border-stone-200 bg-cream/50 p-6">
                  <h3 className="text-lg font-extrabold text-choco">Sectors &amp; Spaces We Serve</h3>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {service.sectors.map((sec) => (
                      <span
                        key={sec}
                        className="rounded-full border border-gold/40 bg-white px-4 py-1.5 text-xs font-bold text-choco shadow-sm transition hover:border-gold hover:bg-gold/15 sm:text-sm"
                      >
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Service FAQs */}
              {service.faqs && (
                <div>
                  <h3 className="text-xl font-extrabold text-choco">Frequently Asked Questions</h3>
                  <div className="mt-4 space-y-3">
                    {service.faqs.map((faq, idx) => {
                      const isOpen = openFaq === idx;
                      return (
                        <div
                          key={faq.q}
                          className={`overflow-hidden rounded-xl border-2 transition ${
                            isOpen ? 'border-gold bg-cream/50' : 'border-stone-200 bg-white'
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-sm font-bold text-choco sm:text-base"
                            aria-expanded={isOpen}
                          >
                            <span>{faq.q}</span>
                            <ChevronDown
                              size={18}
                              className={`shrink-0 text-gold-dark transition-transform duration-300 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div className="border-t border-gold/20 px-5 py-4 text-sm leading-relaxed text-stone-600">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Specs & Service-Specific WhatsApp CTA */}
            <aside className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border-2 border-gold/30 bg-choco p-6 text-white shadow-xl sm:p-7">
                  <h3 className="text-xl font-extrabold text-gold">Project Specifications</h3>
                  <div className="mt-6 space-y-5 text-sm">
                    <div className="flex items-start gap-3 border-b border-gold/15 pb-4">
                      <Clock size={20} className="mt-0.5 shrink-0 text-gold" />
                      <div>
                        <p className="text-xs uppercase tracking-wider text-stone-400">Typical Timeline</p>
                        <p className="mt-0.5 font-bold text-white">{service.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 border-b border-gold/15 pb-4">
                      <ShieldCheck size={20} className="mt-0.5 shrink-0 text-gold" />
                      <div>
                        <p className="text-xs uppercase tracking-wider text-stone-400">Quality Assurance</p>
                        <p className="mt-0.5 font-bold text-white">{service.warranty}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target size={20} className="mt-0.5 shrink-0 text-gold" />
                      <div>
                        <p className="text-xs uppercase tracking-wider text-stone-400">Ideal For</p>
                        <p className="mt-0.5 font-bold text-white">{service.idealFor}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 space-y-3">
                    <a
                      href={serviceWhatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-[#25D366] bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1EBE5D]"
                    >
                      <MessageCircle size={18} /> WhatsApp About This Service
                    </a>
                    <Link
                      to="/contact"
                      state={{ service: service.title }}
                      className="btn-gold w-full justify-center"
                    >
                      Request Formal Quote <ArrowRight size={16} />
                    </Link>
                    <a
                      href={`tel:${company.phone.replace(/\s/g, '')}`}
                      className="btn-outline w-full justify-center"
                    >
                      <Phone size={16} /> Call {company.phone}
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border-2 border-stone-200 bg-cream p-6">
                  <h4 className="text-base font-extrabold text-choco">Related Services</h4>
                  <ul className="mt-4 space-y-3">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          to={`/services/${r.slug}`}
                          className="group flex items-center justify-between rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-choco transition hover:border-gold hover:text-gold-dark"
                        >
                          <span className="truncate pr-2">{r.title}</span>
                          <ArrowRight size={15} className="shrink-0 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom Service CTA Banner */}
      <section className="bg-choco py-14">
        <div className="container-x flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gold">Ready to Execute?</p>
            <h2 className="mt-1 max-w-xl text-2xl font-extrabold !text-white md:text-3xl">
              Book a free site survey for {service.title}
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={serviceWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#25D366] bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1EBE5D]"
            >
              <MessageCircle size={18} /> WhatsApp Now
            </a>
            <Link to="/contact" state={{ service: service.title }} className="btn-gold">
              Get a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
