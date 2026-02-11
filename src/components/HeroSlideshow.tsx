import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSlideshowProps {
  images: { src: string; alt: string }[];
  title: string;
  subtitle: string;
}

const HeroSlideshow = ({ images, title, subtitle }: HeroSlideshowProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const go = (i: number) => setCurrent((i + images.length) % images.length);

  return (
    <section className="relative h-[40vh] md:h-[50vh] min-h-[250px] md:min-h-[300px] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current].src}
          alt={images[current].alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/40" />

      {images.length > 1 && (
        <>
          <Button variant="ghost" size="icon" className="absolute left-2 md:left-4 z-10 text-white hover:bg-white/20 h-8 w-8 md:h-10 md:w-10" onClick={() => go(current - 1)} aria-label="Image précédente">
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="absolute right-2 md:right-4 z-10 text-white hover:bg-white/20 h-8 w-8 md:h-10 md:w-10" onClick={() => go(current + 1)} aria-label="Image suivante">
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </Button>
        </>
      )}

      <div className="relative z-10 text-center px-4">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-white/80 uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm mb-2 md:mb-3">
          {subtitle}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-white">
          {title}
        </motion.h1>
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 md:gap-2">
          {images.map((_, idx) => (
            <button key={idx} onClick={() => setCurrent(idx)} aria-label={`Image ${idx + 1}`}
              className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors ${idx === current ? "bg-white" : "bg-white/40"}`} />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSlideshow;
