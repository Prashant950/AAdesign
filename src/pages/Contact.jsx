import { useLocation } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import ContactSection from '../components/ContactSection';
import { banners } from '../data/siteData';

export default function Contact() {
  const { state } = useLocation();
  const preselectedService = state?.service || '';

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Planning a retail showroom, corporate office, or turnkey project? Share your brief with AA Design & Construction Pvt. Ltd."
        img={banners.contact}
      />
      <ContactSection showHeading={false} preselectedService={preselectedService} />
      <section className="h-96 w-full border-t-2 border-gold/25">
        <iframe
          title="AA Design & Construction Pvt. Ltd. location in Sector 62, Noida"
          src="https://www.google.com/maps?q=Sector+62,+Noida,+Uttar+Pradesh&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
