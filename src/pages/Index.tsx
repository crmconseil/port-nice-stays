import HeroSection from "@/components/HeroSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";

import NeighborhoodSection from "@/components/NeighborhoodSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <HeroSection />
        <AmenitiesSection />
        <GallerySection />
        <NeighborhoodSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
