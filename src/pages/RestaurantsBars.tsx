import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NeighborhoodCrossLinks from "@/components/NeighborhoodCrossLinks";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ExternalLink, Utensils, Wine } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

import imgLunel from "@/assets/resto-lunel.jpg";
import imgSoccaDor from "@/assets/resto-socca-dor.jpg";
import imgClubNautique from "@/assets/resto-club-nautique.jpg";
import imgLouPilhaLeva from "@/assets/resto-lou-pilha-leva.jpg";
import imgBoccaNissa from "@/assets/resto-bocca-nissa.jpg";
import imgFranchin from "@/assets/resto-franchin.jpg";
import imgLaReserve from "@/assets/resto-la-reserve.jpg";
import imgShapko from "@/assets/bar-shapko.jpg";
import imgWaka from "@/assets/bar-waka.jpg";
import imgFoliesEdmonde from "@/assets/bar-folies-edmonde.jpg";
import imgPecheVigne from "@/assets/bar-peche-vigne.jpg";
import imgNuances from "@/assets/resto-nuances.jpg";
import imgPapagallo from "@/assets/resto-papagallo.jpg";
import imgLaTreille from "@/assets/bar-la-treille.jpg";
import imgCaveDuCours from "@/assets/bar-cave-du-cours.jpg";

const restaurants = [
  { name: "Le Lunel", img: imgLunel, link: "https://share.google/ArAgq4eACiuaMTA2e" },
  { name: "La Socca d'Or", img: imgSoccaDor, link: "https://share.google/lKVzZ1yw6RIhCi7gK" },
  { name: "Le Club Nautique", img: imgClubNautique, link: "https://share.google/uESGirdyRe3F3zOSs" },
  { name: "Lou Pilha Leva", img: imgLouPilhaLeva, link: "https://share.google/Y4dLe7R9SUlgKOzkK" },
  { name: "Bocca Nissa", img: imgBoccaNissa, link: "https://share.google/BTGJvQl7kLtgGgphf" },
  { name: "Franchin", img: imgFranchin, link: "https://share.google/qb0NtfFw96RLxV9Nm" },
  { name: "La Réserve", img: imgLaReserve, link: "https://share.google/jz1bmAcADyxIpUboO" },
  { name: "Nuances", img: imgNuances, link: "https://share.google/ZymcfBX1SYMdRJnZ0" },
  { name: "Papagallo", img: imgPapagallo, link: "https://share.google/kj8fFcj3Fn6NDoZUe" },
];

const bars = [
  { name: "Le Shapko", img: imgShapko, link: "https://share.google/Y4ODkW7mtPMxw7ff2" },
  { name: "Waka Bar", img: imgWaka, link: "https://share.google/HpkIdFHS9sDmm38Oe" },
  { name: "Les Folies d'Edmonde", img: imgFoliesEdmonde, link: "https://share.google/5Ggd2oCiD36XfjXjQ" },
  { name: "La Pêche à la Vigne", img: imgPecheVigne, link: "https://share.google/bqglvt20ph8JRB5To" },
  { name: "La Treille", img: imgLaTreille, link: "https://share.google/bvJSVGKCFNg2FsWCw" },
  { name: "La Cave Du Cours", img: imgCaveDuCours, link: "https://share.google/dw10wRAbKyLR50ssV" },
];

const PlaceCard = ({ name, img, link }: { name: string; img: string; link: string }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group block rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border bg-card"
  >
    <div className="relative h-40 sm:h-48 overflow-hidden">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="p-3 sm:p-4 flex items-center justify-between">
      <h3 className="font-serif text-base sm:text-lg text-foreground">{name}</h3>
      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
    </div>
  </a>
);

const RestaurantsBars = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${t('pages.restaurants.title')} — Nice Port Duplex`}</title>
        <meta name="description" content={t('pages.restaurants.intro')} />
      </Helmet>
      <Header />

      {/* Hero banner */}
      <div className="relative h-[35vh] md:h-[40vh] min-h-[200px] flex items-center justify-center bg-primary/10">
        <div className="absolute inset-0">
          <img src={imgLunel} alt={t('pages.restaurants.title')} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative text-center text-white z-10 pt-14 md:pt-16 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-2">{t('pages.restaurants.title')}</h1>
          <p className="text-xs md:text-sm uppercase tracking-widest opacity-80">{t('pages.restaurants.subtitle')}</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-narrow">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6 md:mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" />
            {t('pages.back')}
          </Link>

          <p className="text-muted-foreground text-base md:text-lg mb-8 md:mb-12">
            {t('pages.restaurants.intro')}
          </p>

          {/* Restaurants */}
          <div className="mb-10 md:mb-16">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Utensils className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-foreground">{t('pages.restaurants.restaurants_title')}</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {restaurants.map((r) => (
                <PlaceCard key={r.name} {...r} />
              ))}
            </div>
          </div>

          {/* Bars */}
          <div>
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Wine className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-foreground">{t('pages.restaurants.bars_title')}</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {bars.map((b) => (
                <PlaceCard key={b.name} {...b} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <NeighborhoodCrossLinks currentPage="restaurants" />
      <Footer />
    </div>
  );
};

export default RestaurantsBars;
