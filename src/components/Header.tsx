import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Globe, ChevronDown, Menu, X } from "lucide-react";
import { useLanguage, langLabels, langOrder, type Language } from "@/contexts/LanguageContext";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#booking');
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="container-narrow px-4 flex items-center justify-between">
        <Link to="/" className={`font-serif text-lg md:text-xl transition-colors ${
          scrolled || mobileMenuOpen ? "text-foreground" : "text-primary-foreground"
        }`}>
          Nice Port Duplex
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2 md:gap-3">
          {/* Language Selector Dropdown */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full transition-colors ${
                scrolled
                  ? "text-foreground hover:bg-muted"
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              }`}
              aria-label="Change language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{langLabels[language]}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-background border border-border rounded-lg shadow-lg py-1 min-w-[80px] z-50">
                {langOrder.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { setLanguage(lang); setLangOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted ${
                      lang === language ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {langLabels[lang]}
                  </button>
                ))}
              </div>
            )}
          </div>

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
            className="bg-gradient-gold text-gold-foreground hover:opacity-90 transition-opacity cursor-pointer"
            onClick={handleBookClick}
          >
            {t('nav.book')}
          </Button>
        </div>

        {/* Mobile: book button + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            size="sm"
            className="bg-gradient-gold text-gold-foreground hover:opacity-90 transition-opacity cursor-pointer text-xs px-3 py-1.5"
            onClick={handleBookClick}
          >
            {t('nav.book')}
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${
              scrolled || mobileMenuOpen
                ? "text-foreground hover:bg-muted"
                : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 py-4 space-y-3">
          <a
            href="mailto:niceportduplex@gmail.com"
            className="flex items-center gap-2 text-foreground text-sm py-2"
          >
            <Mail className="w-4 h-4" />
            {t('nav.contact')}
          </a>
          <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-border">
            <Globe className="w-4 h-4 text-muted-foreground" />
            {langOrder.map((lang) => (
              <button
                key={lang}
                onClick={() => { setLanguage(lang); setMobileMenuOpen(false); }}
                className={`px-2.5 py-1 text-xs font-medium rounded-full transition-colors ${
                  lang === language
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {langLabels[lang]}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
