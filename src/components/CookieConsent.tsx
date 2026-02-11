import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-500">
      <div className="container-narrow mx-auto">
        <div className="bg-foreground/95 backdrop-blur-sm text-primary-foreground rounded-xl p-4 md:p-5 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <p className="text-xs md:text-sm text-primary-foreground/80 flex-1 leading-relaxed">
            {t('cookies.message')}{" "}
            <Link to="/mentions-legales" className="underline hover:text-primary-foreground transition-colors">
              {t('cookies.learn_more')}
            </Link>
          </p>
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={decline}
              className="px-3 py-1.5 text-xs md:text-sm rounded-lg border border-primary-foreground/30 text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground/50 transition-colors"
            >
              {t('cookies.decline')}
            </button>
            <button
              onClick={accept}
              className="px-4 py-1.5 text-xs md:text-sm rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              {t('cookies.accept')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
