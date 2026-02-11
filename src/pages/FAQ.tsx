import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HreflangTags from "@/components/HreflangTags";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-nice-port-v2.jpg";

const faqKeys = ['checkin', 'linen', 'pets', 'smoking', 'parking', 'transport'] as const;

const FAQ = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`FAQ — Nice Port Duplex`}</title>
        <meta name="description" content={t('faq.meta_description')} />
      </Helmet>
      <HreflangTags path="/faq" />
      <Header />

      {/* Hero banner */}
      <section className="relative h-[35vh] md:h-[45vh] min-h-[250px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
          role="img"
          aria-label="Port de Nice"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl font-serif text-primary-foreground"
          >
            {t('faq.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-primary-foreground/80 text-base md:text-lg mt-3 font-light"
          >
            {t('faq.subtitle')}
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            {t('pages.back')}
          </Link>

          <div className="space-y-6 md:space-y-8">
            {faqKeys.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border border-border rounded-xl p-5 md:p-8"
              >
                <h2 className="text-lg md:text-xl font-serif text-foreground mb-3">
                  {t(`faq.questions.${key}.q`)}
                </h2>
                <div className="text-muted-foreground text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {t(`faq.questions.${key}.a`)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
