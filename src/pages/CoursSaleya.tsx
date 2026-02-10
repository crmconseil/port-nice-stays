import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NeighborhoodCrossLinks from "@/components/NeighborhoodCrossLinks";
import HeroSlideshow from "@/components/HeroSlideshow";
import { ArrowLeft, Flower2, Coffee, ShoppingBasket, Music } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import img1 from "@/assets/saleya-fleurs.jpg";
import img2 from "@/assets/saleya-legumes.jpg";
import img3 from "@/assets/saleya-restaurants.jpg";

const icons = [Flower2, ShoppingBasket, Coffee, Music];
const highlightKeys = ['flowers', 'local', 'terraces', 'flea'] as const;

const CoursSaleya = () => {
  const { t } = useLanguage();

  const heroImages = [
    { src: img1, alt: "Marché aux fleurs du Cours Saleya" },
    { src: img2, alt: "Stand de légumes" },
    { src: img3, alt: "Restaurants du Cours Saleya" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSlideshow images={heroImages} title={t('pages.saleya.title')} subtitle={t('pages.saleya.distance')} />

      <section className="section-padding">
        <div className="container-narrow">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            {t('pages.back')}
          </Link>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>{t('pages.saleya.p1')}</p>
            
            <div className="grid md:grid-cols-2 gap-6 not-prose my-10">
              {highlightKeys.map((key, i) => {
                const Icon = icons[i];
                return (
                  <div key={key} className="bg-secondary rounded-xl p-6">
                    <Icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-serif text-lg text-foreground mb-1">{t(`pages.saleya.highlights.${key}.title`)}</h3>
                    <p className="text-sm text-muted-foreground">{t(`pages.saleya.highlights.${key}.desc`)}</p>
                  </div>
                );
              })}
            </div>

            <p>{t('pages.saleya.p2')}</p>
            <p>{t('pages.saleya.p3')}</p>
          </div>
        </div>
      </section>

      <NeighborhoodCrossLinks currentPage="saleya" />
      <Footer />
    </div>
  );
};

export default CoursSaleya;
