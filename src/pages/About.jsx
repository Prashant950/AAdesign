import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  ShieldCheck,
  Clock,
  Users,
  Wrench,
  Award,
  Building,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import SectionHeading from '../components/SectionHeading';
import ClientMarquee from '../components/ClientMarquee';
import { banners, aboutImg, aboutImg2, stats, leadership } from '../data/siteData';

const why = [
  { icon: Clock, t: 'On-Time Handover', d: 'Daily site logs and weekly milestone reviews keep every mall and corporate deadline locked.' },
  { icon: ShieldCheck, t: 'Zero-Compromise QA', d: 'Multi-stage checks from raw timber and wiring to final lighting lux calibration.' },
  { icon: Wrench, t: 'In-House Noida Factory', d: 'Dedicated CNC woodworking, metal fabrication, and PU polish unit for tighter cost and finish control.' },
  { icon: Users, t: 'Seasoned Site Crews', d: 'In-house civil engineers, MEP supervisors, and master craftsmen across 28+ Indian cities.' },
];

const steps = [
  { t: 'Site Survey & Brief', d: 'Laser measurement, mall NOC review, budget alignment, and conceptual layout study.' },
  { t: 'BOQ & 3D Engineering', d: 'Detailed working drawings, material sample sign-off, and fixed-milestone cost schedule.' },
  { t: 'Parallel Build & Millwork', d: 'Civil & MEP execution on site while custom fixtures are precision-built at our Noida plant.' },
  { t: 'Snag-Free Handover', d: 'Testing, deep cleaning, as-built documentation, and post-launch warranty support.' },
];

const values = [
  { title: 'Transparent Costing', desc: 'Itemized BOQs with zero hidden variations or surprise mid-project escalations.' },
  { title: 'Safety & Mall Compliance', desc: 'Full adherence to NBC fire norms, night-shift mall rules, and site PPE protocols.' },
  { title: 'Pan-India Scalability', desc: 'Consistent brand experience whether launching 1 flagship in Delhi or 20 stores across Tier-1 & Tier-2 cities.' },
];

export default function About() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="AA Design & Construction Pvt. Ltd. — Turning bare commercial shells into high-performing Indian retail and office spaces."
        img={banners.about}
      />

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="relative pb-10 pr-4 sm:pr-10">
            <div className="overflow-hidden rounded-2xl border-2 border-stone-200 shadow-xl transition hover:border-gold">
              <img
                src={aboutImg}
                alt="AA Design & Construction leadership and design studio"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="mt-4 overflow-hidden rounded-xl border-2 border-gold/40 shadow-lg sm:absolute sm:bottom-0 sm:right-0 sm:mt-0 sm:w-56">
              <img
                src={aboutImg2}
                alt="Completed luxury retail showroom"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          <div>
            <SectionHeading center={false} eyebrow="Our Story" title="One Roof. Total Accountability." />
            <p className="-mt-5 text-base font-semibold text-choco sm:text-lg">
              Founded by Ramesh Sharma &amp; Amit Verma with a clear promise: never keep a client chasing multiple contractors.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base">
              AA Design &amp; Construction Pvt. Ltd. began in Delhi NCR as a specialized retail fit-out team. Today, we execute flagship EBOs, corporate offices, civil-MEP builds, and custom fixture roll-outs across 28+ Indian cities from our Noida Sector 62 headquarters and manufacturing facility.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base">
              Every square foot we hand over balances architectural aesthetics with durable Indian engineering—built to handle heavy daily footfall and look sharp for years.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="rounded-xl border border-stone-200 bg-cream/70 p-4 transition hover:border-gold">
                  <CheckCircle2 size={18} className="text-gold-dark" />
                  <h4 className="mt-2 text-sm font-bold text-choco">{v.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-stone-600">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-cream py-16">
        <div className="container-x grid gap-8 md:grid-cols-2">
          {[
            {
              icon: Target,
              t: 'Our Mission',
              d: 'To deliver retail showrooms, corporate offices, and turnkey construction projects that open on time, honor every rupee of the approved budget, and elevate brand pride.',
            },
            {
              icon: Eye,
              t: 'Our Vision',
              d: 'To be India’s most trusted single-window design, manufacturing, and fit-out partner for ambitious retail chains and modern enterprises.',
            },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="card-hover p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-choco text-gold shadow-md">
                <Icon size={28} />
              </span>
              <h3 className="mt-5 text-2xl font-extrabold text-choco">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-choco py-14">
        <div className="container-x grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-gold/20 bg-choco-light/40 px-4 py-6 transition hover:border-gold">
              <p className="font-heading text-4xl font-extrabold text-gold md:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-stone-300 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Leadership"
            title="Meet Our Directors"
            text="Hands-on leadership driving engineering quality, manufacturing precision, and client trust."
          />
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {leadership.map((l) => (
              <div key={l.name} className="card-hover flex flex-col justify-between p-7">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-dark font-heading text-lg font-extrabold text-choco-dark shadow-md">
                      {l.initials}
                    </span>
                    <div>
                      <h3 className="text-xl font-extrabold text-choco">{l.name}</h3>
                      <p className="text-xs font-bold uppercase tracking-wider text-gold-dark">{l.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-stone-600">{l.bio}</p>
                </div>
                <div className="mt-5 flex items-center gap-2 border-t border-stone-100 pt-4 text-xs font-semibold text-choco">
                  <Award size={16} className="text-gold-dark" />
                  <span>AA Design &amp; Construction Pvt. Ltd.</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-cream">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Edge"
            title="Why Brands Choose Us"
            text="Practical advantages that save time, protect budgets, and guarantee opening-day readiness."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.map(({ icon: Icon, t, d }) => (
              <div key={t} className="card-hover p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15 text-gold-dark">
                  <Icon size={26} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-choco">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Execution Blueprint"
            title="How We Work"
            text="A structured 4-stage turnkey workflow built for predictability."
          />
          <ol className="grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t} className="card-hover relative p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-dark font-heading text-base font-extrabold text-choco-dark shadow-md">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-choco">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ClientMarquee />

      {/* Bottom CTA */}
      <section className="bg-choco py-14">
        <div className="container-x flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gold">Pan-India Execution</p>
            <h2 className="mt-1 max-w-xl text-2xl font-extrabold !text-white md:text-3xl">
              Planning a new flagship store or office fit-out?
            </h2>
          </div>
          <Link to="/contact" className="btn-gold">
            Request a Site Visit <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
