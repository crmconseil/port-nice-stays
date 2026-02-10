import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Flower2, Coffee, ShoppingBasket, Music } from "lucide-react";
import { Link } from "react-router-dom";

const CoursSaleya = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-accent/20 to-primary/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568625365131-079e026a927d?w=1920')] bg-cover bg-center opacity-30" />
        <div className="relative text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary uppercase tracking-[0.2em] text-sm mb-3"
          >
            À 3 min à pied
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-foreground"
          >
            Cours Saleya
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
              Le <strong>Cours Saleya</strong> est le cœur battant du Vieux Nice. Cette place allongée, 
              bordée de façades colorées aux volets pastel, accueille le célèbre marché aux fleurs 
              qui fait la renommée de Nice depuis des générations.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 not-prose my-10">
              {[
                { icon: Flower2, title: "Marché aux fleurs", desc: "Mardi au dimanche, explosion de couleurs et parfums" },
                { icon: ShoppingBasket, title: "Produits locaux", desc: "Fruits, légumes, olives, socca et spécialités niçoises" },
                { icon: Coffee, title: "Terrasses", desc: "Cafés et restaurants pour savourer l'ambiance provençale" },
                { icon: Music, title: "Brocante", desc: "Chaque lundi, le marché aux puces anime la place" },
              ].map((item) => (
                <div key={item.title} className="bg-secondary rounded-xl p-6">
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-serif text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <p>
              Ne manquez pas de goûter à la <strong>socca</strong>, cette galette de pois chiches 
              croustillante cuite au feu de bois, spécialité incontournable de Nice. 
              Les vendeurs du marché vous feront également découvrir les pissaladières, 
              les farcis niçois et les olives de pays.
            </p>
            <p>
              Le soir, le Cours Saleya se transforme en lieu de vie nocturne avec ses nombreux 
              restaurants et bars animés. Depuis notre appartement, vous y êtes en seulement 3 minutes à pied.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoursSaleya;
