import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { format, differenceInDays } from "date-fns";
import { fr } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Users, CreditCard, Sparkles, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BookingSectionProps {
  checkIn: Date | null;
  checkOut: Date | null;
  pricePerNight?: number;
  cleaningFee?: number;
}

const BookingSection = ({ 
  checkIn, 
  checkOut, 
  pricePerNight = 150, 
  cleaningFee = 80 
}: BookingSectionProps) => {
  const [guests, setGuests] = useState(2);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const nights = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0;
  const accommodationTotal = nights * pricePerNight;
  const total = accommodationTotal + cleaningFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkIn || !checkOut) {
      toast({
        title: "Dates manquantes",
        description: "Veuillez sélectionner vos dates d'arrivée et de départ.",
        variant: "destructive",
      });
      return;
    }

    if (!firstName || !lastName || !email || !phone) {
      toast({
        title: "Informations incomplètes",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // TODO: Intégrer Stripe Checkout
    toast({
      title: "Réservation en cours de traitement",
      description: "Vous allez être redirigé vers le paiement sécurisé.",
    });
    
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Paiement requis",
        description: "L'intégration Stripe sera activée prochainement.",
      });
    }, 2000);
  };

  return (
    <section id="booking" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3 font-sans">
            Réservation
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Réservez votre séjour
          </h2>
          <p className="text-muted-foreground">
            Paiement sécurisé par carte bancaire
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Booking Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom *</Label>
                <Input
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Jean"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom *</Label>
                <Input
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Dupont"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jean.dupont@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone *</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+33 6 12 34 56 78"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests">Nombre de voyageurs</Label>
              <div className="flex items-center gap-4">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  disabled={guests <= 1}
                >
                  -
                </Button>
                <span className="w-12 text-center font-medium">{guests}</span>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => setGuests(Math.min(4, guests + 1))}
                  disabled={guests >= 4}
                >
                  +
                </Button>
                <span className="text-sm text-muted-foreground">max 4 personnes</span>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-gold text-gold-foreground hover:opacity-90"
              disabled={isLoading || !checkIn || !checkOut}
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
              ) : (
                <CreditCard className="w-5 h-5 mr-2" />
              )}
              {isLoading ? "Traitement..." : `Payer ${total}€`}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Paiement sécurisé par Stripe. Annulation gratuite jusqu'à 48h avant l'arrivée.
            </p>
          </motion.form>

          {/* Price Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl border border-border p-6 h-fit sticky top-24"
          >
            <h3 className="font-serif text-2xl text-foreground mb-6">Récapitulatif</h3>
            
            {checkIn && checkOut ? (
              <>
                <div className="flex items-center gap-3 mb-4 p-3 bg-muted rounded-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Dates</p>
                    <p className="font-medium">
                      {format(checkIn, "d MMM", { locale: fr })} → {format(checkOut, "d MMM yyyy", { locale: fr })}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-6 p-3 bg-muted rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Voyageurs</p>
                    <p className="font-medium">{guests} {guests > 1 ? "personnes" : "personne"}</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-border pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {pricePerNight}€ x {nights} nuit{nights > 1 ? "s" : ""}
                    </span>
                    <span>{accommodationTotal}€</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Frais de ménage</span>
                    <span>{cleaningFee}€</span>
                  </div>
                  <div className="flex justify-between text-lg font-medium pt-3 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary">{total}€</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <Sparkles className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Sélectionnez vos dates dans le calendrier ci-dessus
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
