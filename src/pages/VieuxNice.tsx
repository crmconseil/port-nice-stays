import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NeighborhoodCrossLinks from "@/components/NeighborhoodCrossLinks";
import HeroSlideshow from "@/components/HeroSlideshow";
import HreflangTags from "@/components/HreflangTags";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Church, Palette, IceCream, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import img1 from "@/assets/vieuxnice-ruelle.jpg";
import img2 from "@/assets/vieuxnice-colline-chateau.jpg";
import img3 from "@/assets/vieuxnice-cathedrale.jpg";

const icons = [Church, Building, Palette, IceCream];
const highlightKeys = ['heritage', 'architecture', 'crafts', 'icecream'] as const;

const VieuxNice = () => {
  const { t } = useLanguage();

  const heroImages = [
    { src: img1, alt: "Ruelle du Vieux Nice" },
    { src: img2, alt: "Colline du Château" },
    { src: img3, alt: "Cathédrale Sainte-Réparate" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${t('pages.vieuxnice.title')} — Nice Port Duplex`}</title>
        <meta name="description" content={t('pages.vieuxnice.p1')} />
      </Helmet>
      <HreflangTags path="/vieux-nice" />
      <Header />
      <HeroSlideshow images={heroImages} title={t('pages.vieuxnice.title')} subtitle={t('pages.vieuxnice.distance')} />

      <section className="section-padding">
        <div className="container-narrow">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            {t('pages.back')}
          </Link>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>{t('pages.vieuxnice.p1')}</p>
            
            <div className="grid md:grid-cols-2 gap-6 not-prose my-10">
              {highlightKeys.map((key, i) => {
                const Icon = icons[i];
                return (
                  <div key={key} className="bg-secondary rounded-xl p-6">
                    <Icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-serif text-lg text-foreground mb-1">{t(`pages.vieuxnice.highlights.${key}.title`)}</h3>
                    <p className="text-sm text-muted-foreground">{t(`pages.vieuxnice.highlights.${key}.desc`)}</p>
                  </div>
                );
              })}
            </div>

            <p>{t('pages.vieuxnice.p2')}</p>
            <p>{t('pages.vieuxnice.p3')}</p>
          </div>
        </div>
      </section>

      <NeighborhoodCrossLinks currentPage="vieuxnice" />
      <Footer />
    </div>
  );
};

export default VieuxNice;
