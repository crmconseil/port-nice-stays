import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Sun, Bike, Camera, Waves } from "lucide-react";
import { Link } from "react-router-dom";

const PromenadeDesAnglais = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1920')] bg-cover bg-center opacity-30" />
        <div className="relative text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary uppercase tracking-[0.2em] text-sm mb-3"
          >
            À 10 min à pied
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-foreground"
          >
            Promenade des Anglais
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-narrow">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              La <strong>Promenade des Anglais</strong> est sans doute l'avenue la plus célèbre de la Côte d'Azur. 
              S'étendant sur près de 7 kilomètres le long de la Baie des Anges, elle offre une vue imprenable 
              sur la Méditerranée et les plages de galets emblématiques de Nice.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 not-prose my-10">
              {[
                { icon: Sun, title: "Détente", desc: "Plages publiques et privées pour bronzer et se baigner" },
                { icon: Bike, title: "Sport", desc: "Piste cyclable idéale pour vélo, roller ou jogging" },
                { icon: Camera, title: "Vues", desc: "Couchers de soleil spectaculaires sur la mer" },
                { icon: Waves, title: "Baignade", desc: "Eaux cristallines de la Méditerranée" },
              ].map((item) => (
                <div key={item.title} className="bg-secondary rounded-xl p-6">
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-serif text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <p>
              Construite au XIXe siècle grâce aux fonds de la communauté anglaise hivernant à Nice, 
              la promenade est bordée de palmiers majestueux, d'hôtels de prestige comme le Negresco, 
              et de nombreuses terrasses de restaurants.
            </p>
            <p>
              Depuis notre appartement sur le Port, rejoignez la Promenade en longeant le bord de mer 
              via la Plage du Castel et profitez d'une balade pittoresque avec vue sur la Colline du Château.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PromenadeDesAnglais;
