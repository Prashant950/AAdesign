import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';
import { services } from '../data/siteData';

export default function ServicesPreview() {
  return (
    <section className="section bg-cream">
      <div className="container-x">
        <SectionHeading
          eyebrow="End-to-End Capabilities"
          title="Our Services"
          text="From your first site survey to opening day handover—click any service to explore deliverables, timelines, and execution specs."
        />
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, idx) => (
            <ServiceCard key={s.slug} s={s} index={idx} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/services" className="btn-gold">
            Explore All {services.length} Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
