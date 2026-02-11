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
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Combien de personnes peuvent séjourner dans le duplex ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Le duplex peut accueillir jusqu'à 6 personnes avec 1 lit double, 1 lit simple et 2 canapés-lits (140x190 cm) répartis sur 3 chambres."
              }
            },
            {
              "@type": "Question",
              "name": "Où se situe l'appartement ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "L'appartement est situé au 20 Quai Lunel, sur le Port de Nice, dans un immeuble du XVIIIe siècle. Il se trouve à 5 minutes à pied de la plage et du Vieux Nice."
              }
            },
            {
              "@type": "Question",
              "name": "Y a-t-il un parking disponible ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, le parking Lympia (payant) se trouve juste en face de l'immeuble."
              }
            },
            {
              "@type": "Question",
              "name": "Quels équipements sont disponibles ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "L'appartement dispose de la climatisation, du Wi-Fi fibre haut débit, d'une TV câble, d'un système audio Bluetooth, d'un lave-linge séchant et d'une cuisine intégralement équipée. Un ascenseur dessert l'immeuble."
              }
            },
            {
              "@type": "Question",
              "name": "Comment se passe l'arrivée ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Le check-in est autonome grâce à une boîte à clés connectée. Les instructions sont envoyées avant votre arrivée."
              }
            },
            {
              "@type": "Question",
              "name": "Y a-t-il une caution à verser ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, une caution de 500 € est demandée sous forme de pré-autorisation bancaire, restituée après vérification de l'état de l'appartement."
              }
            }
          ]
        })}</script>
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
