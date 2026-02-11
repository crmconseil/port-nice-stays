import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, BedDouble, Bath, Users, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

import living2 from "@/assets/living-2.jpg";
import dining1 from "@/assets/dining-1.jpg";
import dining2 from "@/assets/dining-2.jpg";
import kitchen2 from "@/assets/kitchen-2.jpg";
import kitchen3 from "@/assets/kitchen-3.jpg";
import kitchen4 from "@/assets/kitchen-4.jpg";
import kitchen5 from "@/assets/kitchen-5.jpg";
import bedroom1_1 from "@/assets/bedroom1-1.jpg";
import bedroom1_2 from "@/assets/bedroom1-2.jpg";
import bedroom1_3 from "@/assets/bedroom1-3.jpg";
import bedroom1_4 from "@/assets/bedroom1-4.jpg";
import bedroom1_5 from "@/assets/bedroom1-5.jpg";
import bedroom1_6 from "@/assets/bedroom1-6.jpg";
import bedroom1_7 from "@/assets/bedroom1-7.jpg";
import bedroom1_8 from "@/assets/bedroom1-8.jpg";
import bedroom2_1 from "@/assets/bedroom2-1.jpg";
import bedroom2_2 from "@/assets/bedroom2-2.jpg";
import bedroom2_3 from "@/assets/bedroom2-3.jpg";
import bedroom2_4 from "@/assets/bedroom2-4.jpg";
import bedroom3_1 from "@/assets/bedroom3-1.jpg";
import bedroom3_2 from "@/assets/bedroom3-2.jpg";
import bedroom3_3 from "@/assets/bedroom3-3.jpg";
import bedroom3_4 from "@/assets/bedroom3-4.jpg";
import bedroom3_5 from "@/assets/bedroom3-5.jpg";

const KeyBoxIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <circle cx="12" cy="16" r="1"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const roomImages = {
  living: [
    { src: living2, alt: "Coin salon avec canapé" },
    { src: dining1, alt: "Table à manger" },
    { src: dining2, alt: "Espace repas" },
    { src: kitchen2, alt: "Cuisine équipée vue d'ensemble" },
    { src: kitchen4, alt: "Cuisine moderne" },
    { src: kitchen5, alt: "Plan de travail et équipements" },
    { src: kitchen3, alt: "Lave-linge intégré" },
  ],
  master: [
    { src: bedroom1_1, alt: "Mezzanine et vue d'ensemble" },
    { src: bedroom1_2, alt: "Chambre avec lit double" },
    { src: bedroom1_3, alt: "Chambre vue de face" },
    { src: bedroom1_4, alt: "Salle de bain avec douche" },
    { src: bedroom1_5, alt: "Toilettes" },
    { src: bedroom1_6, alt: "Salle de bain vue 2" },
    { src: bedroom1_7, alt: "Chambre vue panoramique" },
    { src: bedroom1_8, alt: "Chambre détail" },
  ],
  simple: [
    { src: bedroom2_2, alt: "Chambre simple - Vue lit 1" },
    { src: bedroom2_3, alt: "Chambre simple - Vue lit 2" },
    { src: bedroom2_1, alt: "Salle de bain" },
    { src: bedroom2_4, alt: "Mezzanine" },
  ],
  office: [
    { src: bedroom3_1, alt: "Chambre Bureau - Vue d'ensemble" },
    { src: bedroom3_2, alt: "Chambre Bureau - Vue lit" },
    { src: bedroom3_4, alt: "Espace bureau" },
    { src: bedroom3_3, alt: "Mezzanine et escaliers" },
    { src: bedroom3_5, alt: "Radio vintage" },
  ],
};

const MiniSlideshow = ({ images, title }: { images: { src: string; alt: string }[]; title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goTo = (index: number) => setCurrentIndex((index + images.length) % images.length);

  return (
    <>
      <div className="relative overflow-hidden rounded-xl aspect-[4/3] group">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => setLightboxOpen(true)}
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <Button variant="ghost" size="icon" className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8" onClick={() => goTo(currentIndex - 1)}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8" onClick={() => goTo(currentIndex + 1)}>
              <ChevronRight className="w-4 h-4" />
            </Button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, idx) => (
                <button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? "bg-primary-foreground" : "bg-primary-foreground/40"}`} />
              ))}
            </div>
          </>
        )}
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
            <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-primary-foreground hover:bg-primary-foreground/10" onClick={() => setLightboxOpen(false)}>
              <X className="w-6 h-6" />
            </Button>
            {images.length > 1 && (
              <>
                <Button variant="ghost" size="icon" className="absolute left-4 text-primary-foreground hover:bg-primary-foreground/10" onClick={(e) => { e.stopPropagation(); goTo(currentIndex - 1); }}>
                  <ChevronLeft className="w-8 h-8" />
                </Button>
                <Button variant="ghost" size="icon" className="absolute right-4 text-primary-foreground hover:bg-primary-foreground/10" onClick={(e) => { e.stopPropagation(); goTo(currentIndex + 1); }}>
                  <ChevronRight className="w-8 h-8" />
                </Button>
              </>
            )}
            <motion.img key={currentIndex} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src={images[currentIndex].src} alt={images[currentIndex].alt} className="max-w-full max-h-[80vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button key={idx} className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? "bg-primary-foreground" : "bg-primary-foreground/40"}`} onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }} />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const GallerySection = () => {
  const { language, t } = useLanguage();
  const iframeLang = language === 'pt' ? 'pt' : language === 'es' ? 'es' : language === 'it' ? 'it' : language === 'en' ? 'en' : 'fr';
  const stats = [
    { icon: Ruler, label: "54 m²", description: t('gallery.stats.surface') },
    { icon: BedDouble, label: t('gallery.stats.bedrooms_label'), description: t('gallery.stats.bedrooms') },
    { icon: Bath, label: t('gallery.stats.bathrooms_label'), description: t('gallery.stats.bathrooms') },
    { icon: Users, label: t('gallery.stats.guests_label'), description: t('gallery.stats.guests') },
    { icon: KeyBoxIcon, label: t('gallery.stats.checkin_label'), description: t('gallery.stats.checkin') },
  ];

  const rooms = [
    { key: 'living', images: roomImages.living },
    { key: 'master', images: roomImages.master },
    { key: 'simple', images: roomImages.simple },
    { key: 'office', images: roomImages.office },
  ];

  return (
    <section id="gallery" className="section-padding bg-background px-0">
      <div className="container-narrow">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-8">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3 font-sans">{t('gallery.subtitle')}</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">{t('gallery.title')}</h2>
        </motion.div>

        {/* Stats bar */}
        <div className="bg-secondary rounded-xl py-6 px-4 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((stat) => (
              <div key={stat.description} className="flex flex-col items-center text-center">
                <stat.icon className="w-7 h-7 text-primary mb-2" />
                <p className="font-serif text-lg font-semibold text-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Welcome description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed"
        >
          <p>{t('gallery.description.p1')}</p>
          <p>{t('gallery.description.p2')}</p>
          <p>{t('gallery.description.p3')}</p>
          <p>{t('gallery.description.p4')}</p>
          <p className="font-bold text-foreground">{t('gallery.description.p5')}</p>
        </motion.div>

        {/* Detailed description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed"
        >
          <p>{t('gallery.detailed.intro')}</p>
          <p className="whitespace-pre-line"><span className="font-bold text-foreground">{t('gallery.detailed.upstairs_bold')}</span> {t('gallery.detailed.upstairs_rest')}</p>
          <p className="whitespace-pre-line"><span className="font-bold text-foreground">{t('gallery.detailed.downstairs_bold')}</span> {t('gallery.detailed.downstairs_rest')}</p>
          
          <div>
            <p className="font-semibold text-foreground mb-2">{t('gallery.detailed.beds_title')}</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>{t('gallery.detailed.bed1')}</li>
              <li>{t('gallery.detailed.bed2')}</li>
              <li>{t('gallery.detailed.bed3')}</li>
            </ul>
          </div>

          <p>{t('gallery.detailed.kitchen')}</p>
          <p>{t('gallery.detailed.dining')}</p>
          <p>{t('gallery.detailed.courtyard')}</p>
          <p>{t('gallery.detailed.amenities')}</p>
          <p>{t('gallery.detailed.parking')}</p>
          <p>{t('gallery.detailed.linen')}</p>
          <p className="whitespace-pre-line"><span className="font-bold text-foreground">{t('gallery.detailed.checkin_bold')}</span> {t('gallery.detailed.checkin_rest')}</p>
          <p><span className="font-bold text-foreground">{t('gallery.detailed.deposit_bold')}</span> {t('gallery.detailed.deposit_rest')}</p>
        </motion.div>

      </div>

      {/* Booking iframe - full width */}
      <div id="booking" className="w-full mt-10">
        <iframe
          key={iframeLang}
          src={`https://app.superhote.com/#/rental/propertyKeyCKNhN3wsLfZ8GxC3w8tGqDk2U?startDate=&endDate=&adultsNumber=1&childrenNumber=0&lang=${iframeLang}`}
          className="w-full border-0"
          style={{ height: '4300px', overflow: 'hidden' }}
          scrolling="no"
          title={t('nav.book')}
          allow="payment"
        />
      </div>
    </section>
  );
};

export default GallerySection;
