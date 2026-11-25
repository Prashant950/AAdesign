import HeroSlider from '../components/HeroSlider';
import WhoWeAre from '../components/WhoWeAre';
import ServicesPreview from '../components/ServicesPreview';
import ClientMarquee from '../components/ClientMarquee';
import Reviews from '../components/Reviews';
import VideoPortfolio from '../components/VideoPortfolio';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <WhoWeAre />
      <ServicesPreview />
      <ClientMarquee />
      <Reviews />
      <VideoPortfolio />
      <ContactSection />
    </>
  );
}
