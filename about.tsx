import { useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      
      <main className="novaweb-container" style={{ paddingTop: '120px' }} data-testid="about-page">
        <section className="novaweb-section">
          <h1 className="novaweb-section-title" data-testid="about-title">
            {t('about.title')}
          </h1>
          <p className="novaweb-section-lead" data-testid="about-subtitle">
            {t('about.subtitle')}
          </p>
          
          <div className="novaweb-team-grid">
            <div className="novaweb-team-member" data-testid="team-member-founder">
              <h4>{t('about.founder_name')}</h4>
              <p>{t('about.founder_title')}</p>
            </div>
            <div className="novaweb-team-member" data-testid="team-member-designer">
              <h4>{t('about.designer_name')}</h4>
              <p>{t('about.designer_title')}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
