import { motion } from "framer-motion";
import { 
  Wifi, 
  Car, 
  TreePalm, 
  Coffee, 
  AirVent,
  UtensilsCrossed,
  WashingMachine,
  Bath
} from "lucide-react";

const amenities = [
  { icon: Car, label: "Parking Lympia", description: "En face · payant" },
  { icon: TreePalm, label: "Vue cour", description: "Calme" },
  { icon: Coffee, label: "Café / Thé", description: "Inclus" },
  { icon: Wifi, label: "WiFi Fibre", description: "Haut débit" },
  { icon: AirVent, label: "Climatisation", description: "Réversible" },
  { icon: UtensilsCrossed, label: "Cuisine équipée", description: "Premium" },
  { icon: WashingMachine, label: "Lave-linge", description: "Séchant" },
  { icon: Bath, label: "Draps et Serviettes", description: "Fournis" },
];

const AmenitiesSection = () => {
  return (
    <section className="bg-secondary py-12 md:py-16">
      <div className="container-narrow px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center mb-3 shadow-sm group-hover:shadow-md transition-shadow group-hover:bg-primary/5">
                <amenity.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-medium text-sm text-foreground">{amenity.label}</p>
              <p className="text-xs text-muted-foreground">{amenity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
