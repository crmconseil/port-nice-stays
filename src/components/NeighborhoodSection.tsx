import { motion } from "framer-motion";
import { Palmtree, Building2, ShoppingBag, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const areas = [
  {
    icon: Palmtree,
    title: "Promenade des Anglais",
    distance: "10 min à pied",
    description: "La célèbre promenade longeant la baie des Anges, idéale pour les balades en bord de mer.",
    link: "/promenade-des-anglais",
  },
  {
    icon: Building2,
    title: "Vieux Nice",
    distance: "2 min à pied",
    description: "Ruelles pittoresques, marchés provençaux et architecture baroque du XVIIe siècle.",
    link: "/vieux-nice",
  },
  {
    icon: ShoppingBag,
    title: "Cours Saleya",
    distance: "3 min à pied",
    description: "Le marché aux fleurs emblématique de Nice, terrasses de cafés et ambiance animée.",
    link: "/cours-saleya",
  },
  {
    icon: Utensils,
    title: "Restaurants & Bars",
    distance: "Sur place",
    description: "Les meilleurs restaurants de fruits de mer et bars à cocktails directement sur le quai.",
  },
];

const NeighborhoodSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3 font-sans">
            Le Quartier
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            À découvrir autour
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un emplacement exceptionnel au cœur de la Côte d'Azur, entre mer et montagnes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {areas.map((area, index) => {
            const Content = (
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="font-serif text-xl text-foreground">{area.title}</h3>
                    <span className="text-xs text-accent font-medium">{area.distance}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            );

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {area.link ? (
                  <Link
                    to={area.link}
                    className="block bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
                  >
                    {Content}
                  </Link>
                ) : (
                  <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border">
                    {Content}
                  </div>
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
