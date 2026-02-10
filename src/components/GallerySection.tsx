import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Maximize2, BedDouble, Bath, Users, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";

import livingRoom from "@/assets/apartment-living.jpg";
import bedroom from "@/assets/apartment-bedroom.jpg";
import kitchen from "@/assets/apartment-kitchen.jpg";

const images = [
  { src: livingRoom, alt: "Salon lumineux", title: "Salon" },
  { src: bedroom, alt: "Chambre élégante", title: "Chambre" },
  { src: kitchen, alt: "Cuisine équipée", title: "Cuisine" },
];

const stats = [
  { icon: Ruler, label: "54 m²", description: "Surface" },
  { icon: BedDouble, label: "3 chambres", description: "Couchages" },
  { icon: Bath, label: "2 salles de bain", description: "Équipées" },
  { icon: Users, label: "6 couchages", description: "Maximum" },
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goTo = useCallback((index: number) => {
    setCurrentIndex((index + images.length) % images.length);
  }, []);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3 font-sans">Galerie</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">Découvrez l'appartement</h2>
        </motion.div>

        {/* Slideshow */}
        <div className="relative overflow-hidden rounded-2xl aspect-[16/9] mb-6 group">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setLightboxOpen(true)}
            />
          </AnimatePresence>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => goTo(currentIndex - 1)}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => goTo(currentIndex + 1)}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <button
            onClick={() => setLightboxOpen(true)}
            className="absolute top-3 right-3 bg-background/60 hover:bg-background/80 text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-16 h-10 rounded-md overflow-hidden border-2 transition-all ${
                  idx === currentIndex ? "border-primary-foreground scale-110" : "border-transparent opacity-70"
                }`}
              >
                <img src={img.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="bg-secondary rounded-xl py-6 px-4 mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <stat.icon className="w-7 h-7 text-primary mb-2" />
                <p className="font-serif text-lg font-semibold text-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4"
        >
          <p>
            Bienvenue dans ce duplex élégant sur deux niveaux, idéalement situé sur le port de Nice, au cœur d'un immeuble résidentiel du XVIII<sup>e</sup> siècle. Un lieu qui marie charme historique et confort moderne, parfait pour un séjour raffiné sur la Côte d'Azur.
          </p>
          <p>
            Grâce à un accès aisé depuis l'aéroport via le tram ligne 2 direct, depuis la gare centrale, et à la proximité des bateaux et bus vers les villes limitrophes, vous pourrez profiter très facilement de Nice, Cannes, Monaco, Menton et de tous les villages typiques alentours en transports en commun.
          </p>
          <p>
            L'appartement est situé directement sur le Port de plaisance de Nice, face aux embarcadères pour la Corse, Cannes, Saint-Tropez et les Îles de Lérins.
          </p>
          <p>
            À seulement 5 minutes à pied de la plage, des transports, des restaurants et du centre historique.
          </p>
          <p>
            Idéal pour 2 couples ou un couple avec 3 enfants, il peut accueillir jusqu'à 6 personnes.
          </p>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-primary-foreground hover:bg-primary-foreground/10" onClick={() => setLightboxOpen(false)}>
              <X className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="absolute left-4 text-primary-foreground hover:bg-primary-foreground/10" onClick={(e) => { e.stopPropagation(); goTo(currentIndex - 1); }}>
              <ChevronLeft className="w-8 h-8" />
            </Button>
            <motion.img
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <Button variant="ghost" size="icon" className="absolute right-4 text-primary-foreground hover:bg-primary-foreground/10" onClick={(e) => { e.stopPropagation(); goTo(currentIndex + 1); }}>
              <ChevronRight className="w-8 h-8" />
            </Button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? "bg-primary-foreground" : "bg-primary-foreground/40"}`}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
