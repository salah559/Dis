import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { translations, languageConfig, type Language } from '@/lib/translations';

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('selectedLanguage') as Language;
    return saved && saved in languageConfig ? saved : 'en';
  });

  useEffect(() => {
    const config = languageConfig[currentLanguage];
    document.documentElement.setAttribute('dir', config.dir);
    document.documentElement.setAttribute('lang', currentLanguage);
    document.body.setAttribute('dir', config.dir);
    
    localStorage.setItem('selectedLanguage', currentLanguage);
  }, [currentLanguage]);

  const changeLanguage = (lang: Language) => {
    if (lang in languageConfig) {
      setCurrentLanguage(lang);
    }
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key;
    }
    
    return value;
  };

  const dir = languageConfig[currentLanguage].dir;

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
