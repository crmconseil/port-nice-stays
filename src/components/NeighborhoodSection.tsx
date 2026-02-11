import { motion } from "framer-motion";
import { Palmtree, Building2, ShoppingBag, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const NeighborhoodSection = () => {
  const { t } = useLanguage();

  const areas = [
    {
      icon: Palmtree,
      title: t('neighborhood.promenade.title'),
      distance: t('neighborhood.promenade.distance'),
      description: t('neighborhood.promenade.desc'),
      link: "/promenade-des-anglais",
    },
    {
      icon: Building2,
      title: t('neighborhood.vieuxnice.title'),
      distance: t('neighborhood.vieuxnice.distance'),
      description: t('neighborhood.vieuxnice.desc'),
      link: "/vieux-nice",
    },
    {
      icon: ShoppingBag,
      title: t('neighborhood.saleya.title'),
      distance: t('neighborhood.saleya.distance'),
      description: t('neighborhood.saleya.desc'),
      link: "/cours-saleya",
    },
    {
      icon: Utensils,
      title: t('neighborhood.restaurants.title'),
      distance: t('neighborhood.restaurants.distance'),
      description: t('neighborhood.restaurants.desc'),
      link: "/restaurants-bars",
    },
  ];

  return (
    <section className="section-padding bg-background" aria-label={t('neighborhood.title')}>
      <div className="container-narrow">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-8 md:mb-12">
          <p className="text-primary uppercase tracking-[0.2em] text-xs md:text-sm mb-2 md:mb-3 font-sans">{t('neighborhood.subtitle')}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-3 md:mb-4">{t('neighborhood.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">{t('neighborhood.description')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {areas.map((area, index) => {
            const Content = (
              <div className="flex gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <area.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-1.5 md:mb-2">
                    <h3 className="font-serif text-lg md:text-xl text-foreground">{area.title}</h3>
                    <span className="text-[10px] md:text-xs text-accent font-medium">{area.distance}</span>
                  </div>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{area.description}</p>
                </div>
              </div>
            );

            return (
              <motion.div key={area.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                {area.link ? (
                  <Link to={area.link} className="block bg-card rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-border">{Content}</Link>
                ) : (
                  <div className="bg-card rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-border">{Content}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodSection;
