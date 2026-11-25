import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from './ContactForm';
import SectionHeading from './SectionHeading';
import { company } from '../data/siteData';

export default function ContactSection({ showHeading = true, preselectedService = '' }) {
  const items = [
    { icon: MapPin, label: 'Corporate Office', value: company.address },
    { icon: Phone, label: 'Direct Phone', value: company.phone, href: `tel:${company.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: 'Business Email', value: company.email, href: `mailto:${company.email}` },
    { icon: Clock, label: 'Working Hours', value: company.hours },
  ];

  return (
    <section className="section bg-cream">
      <div className="container-x">
        {showHeading && (
          <SectionHeading
            eyebrow="Start Your Project"
            title="Tell Us About Your Project"
            text="Share your site size, city, and timeline—our Delhi NCR project desk will respond within one business day."
          />
        )}

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            <div className="rounded-2xl border-2 border-gold/25 bg-choco p-6 text-white shadow-xl sm:p-7">
              <h3 className="text-xl font-extrabold text-gold">AA Design &amp; Construction Pvt. Ltd.</h3>
              <p className="mt-2 text-sm text-stone-300">
                Single-window execution for retail showrooms, corporate offices, and turnkey commercial projects across India.
              </p>

              <div className="mt-6 space-y-5">
                {items.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-choco-light text-gold">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="font-heading text-sm font-bold text-white">{label}</p>
                      {href ? (
                        <a href={href} className="break-all text-sm text-stone-300 transition hover:text-gold">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-stone-300">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-7 w-full justify-center"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm preselectedService={preselectedService} />
          </div>
        </div>
      </div>
    </section>
  );
}
