import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container-narrow px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl mb-4">Le Quai Lunel</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Un appartement d'exception sur le port de Nice, 
              alliant charme méditerranéen et confort moderne.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                <span>20 Quai Lunel, 06300 Nice</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@lequailunel.fr" className="hover:text-primary-foreground transition-colors">
                  contact@lequailunel.fr
                </a>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="w-4 h-4" />
                <a href="tel:+33612345678" className="hover:text-primary-foreground transition-colors">
                  +33 6 12 34 56 78
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Liens rapides</h4>
            <div className="space-y-2 text-sm">
              <a href="#gallery" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Galerie photos
              </a>
              <a href="#calendar" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Disponibilités
              </a>
              <a href="#booking" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Réserver
              </a>
              <a href="#location" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Localisation
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Le Quai Lunel. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
