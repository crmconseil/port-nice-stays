import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/utils/translations';

export type Language = 'fr' | 'en' | 'it' | 'es' | 'pt';

const langLabels: Record<Language, string> = {
  fr: 'FR',
  en: 'EN',
  it: 'IT',
  es: 'ES',
  pt: 'PT',
};

const langOrder: Language[] = ['fr', 'en', 'it', 'es', 'pt'];

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const detectLanguage = (): Language => {
  const browserLang = navigator.language.split('-')[0].toLowerCase();
  if (langOrder.includes(browserLang as Language)) {
    return browserLang as Language;
  }
  return 'fr';
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => detectLanguage());

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { langLabels, langOrder };

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
