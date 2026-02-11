import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NeighborhoodCrossLinks from "@/components/NeighborhoodCrossLinks";
import HeroSlideshow from "@/components/HeroSlideshow";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Sun, Bike, Camera, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import img1 from "@/assets/promenade-seafront.jpg";
import img2 from "@/assets/promenade-roba-capeu.jpg";
import img3 from "@/assets/promenade-negresco.jpg";

const icons = [Sun, Bike, Camera, Waves];
const highlightKeys = ['relax', 'sport', 'views', 'swim'] as const;

const PromenadeDesAnglais = () => {
  const { t } = useLanguage();

  const heroImages = [
    { src: img1, alt: "Promenade des Anglais - Front de mer" },
    { src: img2, alt: "Rauba Capeu - Vue côtière" },
    { src: img3, alt: "Hôtel Negresco" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${t('pages.promenade.title')} — Nice Port Duplex`}</title>
        <meta name="description" content={t('pages.promenade.p1')} />
      </Helmet>
      <Header />
      <HeroSlideshow images={heroImages} title={t('pages.promenade.title')} subtitle={t('pages.promenade.distance')} />

      <section className="section-padding">
        <div className="container-narrow">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            {t('pages.back')}
          </Link>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>{t('pages.promenade.p1')}</p>
            
            <div className="grid md:grid-cols-2 gap-6 not-prose my-10">
              {highlightKeys.map((key, i) => {
                const Icon = icons[i];
                return (
                  <div key={key} className="bg-secondary rounded-xl p-6">
                    <Icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-serif text-lg text-foreground mb-1">{t(`pages.promenade.highlights.${key}.title`)}</h3>
                    <p className="text-sm text-muted-foreground">{t(`pages.promenade.highlights.${key}.desc`)}</p>
                  </div>
                );
              })}
            </div>

            <p>{t('pages.promenade.p2')}</p>
            <p>{t('pages.promenade.p3')}</p>
          </div>
        </div>
      </section>

      <NeighborhoodCrossLinks currentPage="promenade" />
      <Footer />
    </div>
  );
};

export default PromenadeDesAnglais;
