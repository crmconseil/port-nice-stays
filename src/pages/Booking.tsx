import { motion } from "framer-motion";
import heroImage from "@/assets/hero-nice-port-v2.jpg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

const Booking = () => {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero banner */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="relative z-10 text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-serif text-primary-foreground mb-4"
            >
              {t('booking.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-primary-foreground/80 font-light font-serif italic"
            >
              Nice Port Duplex • Côte d'Azur
            </motion.p>
          </div>
        </section>

        {/* Iframe placeholder */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="bg-muted rounded-2xl p-8 min-h-[600px] flex items-center justify-center text-center">
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg">
                  {t('booking.loading')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Booking;
