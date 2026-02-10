import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Church, Palette, IceCream, Building } from "lucide-react";
import { Link } from "react-router-dom";

const VieuxNice = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=1920')] bg-cover bg-center opacity-30" />
        <div className="relative text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary uppercase tracking-[0.2em] text-sm mb-3"
          >
            À 2 min à pied
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-foreground"
          >
            Le Vieux Nice
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
              Le <strong>Vieux Nice</strong> est un labyrinthe enchanteur de ruelles étroites et colorées, 
              où l'architecture baroque italienne côtoie les boutiques d'artisans et les trattorias 
              authentiques. C'est l'âme historique de la ville, préservée depuis le Moyen Âge.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 not-prose my-10">
              {[
                { icon: Church, title: "Patrimoine", desc: "Cathédrale Sainte-Réparate et églises baroques" },
                { icon: Building, title: "Architecture", desc: "Façades ocres et volets colorés typiques" },
                { icon: Palette, title: "Artisanat", desc: "Boutiques de savons, huiles d'olive et créateurs locaux" },
                { icon: IceCream, title: "Glaciers", desc: "Les meilleurs glaciers artisanaux de la Côte d'Azur" },
              ].map((item) => (
                <div key={item.title} className="bg-secondary rounded-xl p-6">
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-serif text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <p>
              Perdez-vous dans les ruelles comme la <strong>rue Rossetti</strong> pour découvrir 
              le célèbre glacier Fenocchio et ses 100 parfums, ou la <strong>Place Saint-François</strong> 
              avec son marché aux poissons matinal.
            </p>
            <p>
              Ne manquez pas la montée vers la <strong>Colline du Château</strong> pour une vue 
              panoramique exceptionnelle sur la Baie des Anges, le Port et les toits du Vieux Nice. 
              L'accès se fait à pied ou par ascenseur gratuit depuis le bord de mer.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VieuxNice;
