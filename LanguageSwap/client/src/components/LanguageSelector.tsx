import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { languageConfig, type Language } from '@/lib/translations';

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, changeLanguage } = useLanguage();
  const selectorRef = useRef<HTMLDivElement>(null);
  
  const currentConfig = languageConfig[currentLanguage];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (lang: Language) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div 
      ref={selectorRef}
      className={`language-selector ${isOpen ? 'active' : ''}`}
      data-testid="language-selector"
    >
      <button 
        className="language-toggle"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="language-toggle"
      >
        <span className="language-flag">{currentConfig.flag}</span>
        <span>{currentConfig.name}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      
      <div className="language-dropdown" data-testid="language-dropdown">
        {Object.entries(languageConfig).map(([lang, config]) => (
          <div
            key={lang}
            className={`language-option ${currentLanguage === lang ? 'active' : ''}`}
            onClick={() => handleLanguageChange(lang as Language)}
            data-testid={`language-option-${lang}`}
          >
            <span className="language-flag">{config.flag}</span>
            <span>{config.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
