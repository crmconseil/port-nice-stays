import HeroSection from "@/components/HeroSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
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
        <LocationSection />
        <NeighborhoodSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
