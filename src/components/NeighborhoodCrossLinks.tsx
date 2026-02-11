import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import promenadeImg from "@/assets/promenade-seafront.jpg";
import saleyaImg from "@/assets/saleya-fleurs.jpg";
import vieuxNiceImg from "@/assets/vieuxnice-ruelle.jpg";
import restaurantsImg from "@/assets/resto-lunel.jpg";

const allPlaces = [
  { key: "promenade", path: "/promenade-des-anglais", img: promenadeImg, titleKey: "pages.promenade.title", distanceKey: "pages.promenade.distance" },
  { key: "saleya", path: "/cours-saleya", img: saleyaImg, titleKey: "pages.saleya.title", distanceKey: "pages.saleya.distance" },
  { key: "vieuxnice", path: "/vieux-nice", img: vieuxNiceImg, titleKey: "pages.vieuxnice.title", distanceKey: "pages.vieuxnice.distance" },
  { key: "restaurants", path: "/restaurants-bars", img: restaurantsImg, titleKey: "neighborhood.restaurants.title", distanceKey: "neighborhood.restaurants.distance" },
];

interface Props {
  currentPage: "promenade" | "saleya" | "vieuxnice" | "restaurants";
}

const NeighborhoodCrossLinks = ({ currentPage }: Props) => {
  const { t } = useLanguage();
  const otherPlaces = allPlaces.filter(p => p.key !== currentPage);

  return (
    <section className="section-padding bg-muted" aria-label={t('pages.also_discover')}>
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6 md:mb-8 text-center">
          {t('pages.also_discover')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {otherPlaces.map((place) => (
            <Link
              key={place.key}
              to={place.path}
              className="group relative h-36 sm:h-40 md:h-48 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img src={place.img} alt={t(place.titleKey)} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="relative h-full flex flex-col justify-end p-4 md:p-6 text-white">
                <p className="text-[10px] md:text-xs uppercase tracking-widest opacity-80 mb-1">{t(place.distanceKey)}</p>
                <div className="flex items-center gap-2">
                  <h3 className="text-base md:text-xl font-serif">{t(place.titleKey)}</h3>
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodCrossLinks;
