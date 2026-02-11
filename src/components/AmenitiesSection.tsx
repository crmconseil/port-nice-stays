import { motion } from "framer-motion";
import { 
  Wifi, Car, TreePalm, Coffee, AirVent, UtensilsCrossed, WashingMachine, Bath
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const amenityIcons = [Car, TreePalm, Coffee, Wifi, AirVent, UtensilsCrossed, WashingMachine, Bath];
const amenityKeys = ['parking', 'view', 'coffee', 'wifi', 'ac', 'kitchen', 'laundry', 'towels'] as const;

const AmenitiesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-secondary py-8 md:py-12 lg:py-16" aria-label={t('nav.amenities')}>
      <div className="container-narrow px-4">
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {amenityKeys.map((key, index) => {
            const Icon = amenityIcons[index];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-card flex items-center justify-center mb-2 md:mb-3 shadow-sm group-hover:shadow-md transition-shadow group-hover:bg-primary/5">
                  <Icon className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                </div>
                <p className="font-medium text-[10px] md:text-sm text-foreground leading-tight">{t(`amenities.${key}.label`)}</p>
                <p className="text-[9px] md:text-xs text-muted-foreground hidden sm:block">{t(`amenities.${key}.desc`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
