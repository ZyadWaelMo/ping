import AnimatedBackground from "@/components/AnimatedBackground";
import HeroSection from "@/components/HeroSection";
import PhotoCarousel from "@/components/PhotoCarousel";
import SpecsSection from "@/components/SpecsSection";
import GamesSection from "@/components/GamesSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";

const Index = () => {
  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
  const galleryImages2 = [gallery7, gallery8, gallery9, gallery10, gallery11, gallery12];

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <HeroSection />
      <PhotoCarousel images={galleryImages} />
      <SpecsSection />
      <PhotoCarousel images={galleryImages2} />
      <GamesSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
