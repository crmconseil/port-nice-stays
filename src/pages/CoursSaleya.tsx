import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NeighborhoodCrossLinks from "@/components/NeighborhoodCrossLinks";
import { motion } from "framer-motion";
import { ArrowLeft, Flower2, Coffee, ShoppingBasket, Music } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImg from "@/assets/cours-saleya.jpg";

const icons = [Flower2, ShoppingBasket, Coffee, Music];
const highlightKeys = ['flowers', 'local', 'terraces', 'flea'] as const;

const CoursSaleya = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Cours Saleya" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center px-4">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-white/80 uppercase tracking-[0.2em] text-sm mb-3">
            {t('pages.saleya.distance')}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-white">
            {t('pages.saleya.title')}
          </motion.h1>
        </div>
      </section>

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
