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
    <section className="relative h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
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
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/40" />

      {images.length > 1 && (
        <>
          <Button variant="ghost" size="icon" className="absolute left-4 z-10 text-white hover:bg-white/20 h-10 w-10" onClick={() => go(current - 1)}>
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="absolute right-4 z-10 text-white hover:bg-white/20 h-10 w-10" onClick={() => go(current + 1)}>
            <ChevronRight className="w-6 h-6" />
          </Button>
        </>
      )}

      <div className="relative z-10 text-center px-4">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-white/80 uppercase tracking-[0.2em] text-sm mb-3">
          {subtitle}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-serif text-white">
          {title}
        </motion.h1>
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, idx) => (
            <button key={idx} onClick={() => setCurrent(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === current ? "bg-white" : "bg-white/40"}`} />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSlideshow;
