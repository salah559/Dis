import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';
import { LanguageSelector } from './LanguageSelector';

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { t } = useLanguage();
  const [location] = useLocation();

  return (
    <header className="novaweb-header" data-testid="header">
      <div className="novaweb-container novaweb-header-inner">
        <Link href="/" className="novaweb-logo" data-testid="logo">
          <div className="novaweb-logo-img bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            NW
          </div>
          <span className="logo-text">Novaweb</span>
        </Link>
        
        <nav className={`novaweb-nav ${isNavOpen ? 'active' : ''}`} data-testid="navigation">
          <Link 
            href="/" 
            className={location === '/' ? 'text-blue-400' : ''}
            data-testid="nav-home"
          >
            {t('nav.home')}
          </Link>
          <Link 
            href="/projects" 
            className={location === '/projects' ? 'text-blue-400' : ''}
            data-testid="nav-projects"
          >
            {t('nav.projects')}
          </Link>
          <Link 
            href="/about" 
            className={location === '/about' ? 'text-blue-400' : ''}
            data-testid="nav-about"
          >
            {t('nav.about')}
          </Link>
          <Link 
            href="/contact" 
            className="novaweb-nav-cta"
            data-testid="nav-contact"
          >
            {t('nav.contact')}
          </Link>
          
          <LanguageSelector />
          
          <button 
            className="nav-toggle"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Toggle navigation"
            data-testid="nav-toggle"
          >
            ☰
          </button>
        </nav>
      </div>
    </header>
  );
}
