import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, BedDouble, Bath, Users, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";

import apartmentLiving from "@/assets/apartment-living.jpg";
import apartmentKitchen from "@/assets/apartment-kitchen.jpg";
import kitchen2 from "@/assets/kitchen-2.jpg";
import kitchen3 from "@/assets/kitchen-3.jpg";
import kitchen4 from "@/assets/kitchen-4.jpg";
import kitchen5 from "@/assets/kitchen-5.jpg";
import living2 from "@/assets/living-2.jpg";
import dining1 from "@/assets/dining-1.jpg";
import dining2 from "@/assets/dining-2.jpg";
import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";

const KeyBoxIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <circle cx="12" cy="16" r="1"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const stats = [
  { icon: Ruler, label: "54 m²", description: "Surface" },
  { icon: BedDouble, label: "3 chambres", description: "Couchages" },
  { icon: Bath, label: "2 salles de bain", description: "Équipées" },
  { icon: Users, label: "6 couchages", description: "Maximum" },
  { icon: KeyBoxIcon, label: "Check-in autonome", description: "Boîte à clés" },
];

const rooms = [
  {
    title: "Salon / Cuisine",
    images: [
      { src: apartmentLiving, alt: "Salon" },
      { src: living2, alt: "Salon vue 2" },
      { src: apartmentKitchen, alt: "Cuisine" },
      { src: kitchen2, alt: "Cuisine équipée" },
      { src: kitchen3, alt: "Lave-linge" },
      { src: kitchen4, alt: "Vue d'ensemble" },
      { src: kitchen5, alt: "Plan de travail" },
      { src: dining1, alt: "Coin repas" },
      { src: dining2, alt: "Salle à manger" },
    ],
  },
  {
    title: "Chambre 1",
    images: [
      { src: apartment1, alt: "Chambre 1" },
      { src: apartment2, alt: "Chambre 1 vue 2" },
    ],
  },
  {
    title: "Chambre 2",
    images: [
      { src: apartment3, alt: "Chambre 2" },
    ],
  },
  {
    title: "Chambre 3",
    images: [
      { src: apartment1, alt: "Chambre 3" },
    ],
  },
];

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
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
              onClick={() => goTo(currentIndex - 1)}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
              onClick={() => goTo(currentIndex + 1)}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? "bg-primary-foreground" : "bg-primary-foreground/40"}`}
                />
              ))}
            </div>
          </>
        )}
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
            <motion.img
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? "bg-primary-foreground" : "bg-primary-foreground/40"}`}
                    onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                  />
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

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {rooms.map((room) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-serif text-foreground mb-4 text-center">{room.title}</h3>
              <MiniSlideshow images={room.images} title={room.title} />
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="bg-secondary rounded-xl py-6 px-4 mb-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
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
    </section>
  );
};

export default GallerySection;
