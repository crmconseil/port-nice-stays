import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  const address = "20 Quai Lunel, 06300 Nice, France";
  const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.123456789!2d7.2845!3d43.6945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd0085c83c7f1%3A0x1234567890abcdef!2s20%20Quai%20Lunel%2C%2006300%20Nice!5e0!3m2!1sfr!2sfr!4v1234567890`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="section-padding bg-muted">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3 font-sans">
              Localisation
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Au cœur du vieux port
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Situé sur le mythique Quai Lunel, l'appartement offre un accès privilégié 
              au port de Nice et à la vieille ville. À quelques pas des meilleurs restaurants, 
              du cours Saleya et des plages de la Promenade des Anglais.
            </p>
            
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Adresse</p>
                <p className="text-muted-foreground">{address}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground">
                  🏖️ Plage à 5 min
                </span>
                <span className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground">
                  🍽️ Restaurants à 1 min
                </span>
                <span className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground">
                  🚋 Tram à 3 min
                </span>
                <span className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground">
                  ✈️ Aéroport 15 min
                </span>
              </div>
              
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => window.open(directionsUrl, "_blank")}
              >
                <Navigation className="w-4 h-4" />
                Itinéraire
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src={googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation de l'appartement"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
