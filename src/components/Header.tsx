import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-narrow px-4 flex items-center justify-between">
        <Link to="/" className={`font-serif text-xl transition-colors ${
          scrolled ? "text-foreground" : "text-primary-foreground"
        }`}>
          Nice Port Duplex
        </Link>
        <div className="flex items-center gap-2 md:gap-3">
          {/* Language Selector */}
          <button
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full transition-colors ${
              scrolled
                ? "text-foreground hover:bg-muted"
                : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{language === 'fr' ? 'EN' : 'FR'}</span>
          </button>

          <Button
            variant="ghost"
            size="sm"
            asChild
            className={`transition-colors ${
              scrolled
                ? "text-foreground hover:bg-muted"
                : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
          >
            <a href="mailto:niceportduplex@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              {t('nav.contact')}
            </a>
          </Button>
          <Button
            size="sm"
            asChild
            className="bg-gradient-gold text-gold-foreground hover:opacity-90 transition-opacity"
          >
            <Link to="/reserver">{t('nav.book')}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
