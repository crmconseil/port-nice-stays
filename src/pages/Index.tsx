import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HreflangTags from "@/components/HreflangTags";
import HeroSection from "@/components/HeroSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import NeighborhoodSection from "@/components/NeighborhoodSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CookieConsent from "@/components/CookieConsent";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    if (location.hash === '#booking') {
      setTimeout(() => {
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>{`Nice Port Duplex — ${t('hero.description')}`}</title>
        <meta name="description" content={t('gallery.description.p1')} />
      </Helmet>
      <HreflangTags path="/" />
      <Header />
      <main className="min-h-screen bg-background">
        <HeroSection />
        <AmenitiesSection />
        <GallerySection />
        <NeighborhoodSection />
        <Footer />
        <CookieConsent />
      </main>
    </>
  );
};

export default Index;
