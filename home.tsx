import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroCanvas } from '@/components/HeroCanvas';

export default function Home() {
  const { t } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    t('testimonials.quote1'),
    t('testimonials.quote2'),
    t('testimonials.quote3')
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="novaweb-hero" data-testid="hero-section">
          <HeroCanvas />
          <div className="novaweb-container novaweb-hero-inner">
            <div className="novaweb-hero-copy">
              <h1 data-testid="hero-title">{t('hero.title')}</h1>
              <p className="novaweb-lead" data-testid="hero-subtitle">
                {t('hero.subtitle')}
              </p>
              <div className="novaweb-buttons">
                <Link 
                  href="/contact" 
                  className="novaweb-btn novaweb-btn-primary"
                  data-testid="hero-cta-primary"
                >
                  {t('hero.cta_primary')}
                </Link>
                <Link 
                  href="/projects" 
                  className="novaweb-btn novaweb-btn-ghost"
                  data-testid="hero-cta-secondary"
                >
                  {t('hero.cta_secondary')}
                </Link>
              </div>
            </div>
            <div className="novaweb-hero-card" data-testid="hero-card">
              <h3>{t('hero.featured_title')}</h3>
              <p>{t('hero.featured_desc')}</p>
              <Link href="/projects" className="text-blue-400 hover:text-blue-300 transition-colors">
                {t('hero.featured_link')}
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="novaweb-section novaweb-container" data-testid="services-section">
          <h2 className="novaweb-section-title">{t('services.title')}</h2>
          <p className="novaweb-section-lead">{t('services.subtitle')}</p>
          <div className="novaweb-cards-grid">
            <article className="novaweb-card" data-testid="service-design">
              <div className="icon">💻</div>
              <h3>{t('services.design.title')}</h3>
              <p>{t('services.design.desc')}</p>
            </article>
            <article className="novaweb-card" data-testid="service-development">
              <div className="icon">⚙️</div>
              <h3>{t('services.development.title')}</h3>
              <p>{t('services.development.desc')}</p>
            </article>
            <article className="novaweb-card" data-testid="service-seo">
              <div className="icon">🚀</div>
              <h3>{t('services.seo.title')}</h3>
              <p>{t('services.seo.desc')}</p>
            </article>
          </div>
        </section>

        {/* Projects Section */}
        <section className="novaweb-section novaweb-container" data-testid="projects-section">
          <h2 className="novaweb-section-title">{t('projects.title')}</h2>
          <p className="novaweb-section-lead">{t('projects.subtitle')}</p>
          <div className="novaweb-projects-grid">
            <div className="novaweb-project" data-testid="project-1">
              <div className="w-full h-[220px] bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                <span className="text-white text-6xl">🎨</span>
              </div>
              <div className="novaweb-project-meta">
                <h4>{t('projects.project1.title')}</h4>
                <p>{t('projects.project1.desc')}</p>
              </div>
            </div>
            <div className="novaweb-project" data-testid="project-2">
              <div className="w-full h-[220px] bg-gradient-to-br from-green-600 to-blue-700 flex items-center justify-center">
                <span className="text-white text-6xl">🚀</span>
              </div>
              <div className="novaweb-project-meta">
                <h4>{t('projects.project2.title')}</h4>
                <p>{t('projects.project2.desc')}</p>
              </div>
            </div>
            <div className="novaweb-project" data-testid="project-3">
              <div className="w-full h-[220px] bg-gradient-to-br from-purple-600 to-pink-700 flex items-center justify-center">
                <span className="text-white text-6xl">🛒</span>
              </div>
              <div className="novaweb-project-meta">
                <h4>{t('projects.project3.title')}</h4>
                <p>{t('projects.project3.desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="novaweb-section novaweb-container" data-testid="testimonials-section">
          <h2 className="novaweb-section-title">{t('testimonials.title')}</h2>
          <div className="novaweb-testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="novaweb-testimonial"
                style={{
                  transform: `translateX(${(index - currentTestimonial) * 110}%)`
                }}
                data-testid={`testimonial-${index}`}
              >
                {testimonial}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="novaweb-section novaweb-container" data-testid="cta-section">
          <div className="novaweb-cta">
            <h3>{t('cta.title')}</h3>
            <Link 
              href="/contact" 
              className="novaweb-btn novaweb-btn-primary"
              data-testid="cta-button"
            >
              {t('cta.button')}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
