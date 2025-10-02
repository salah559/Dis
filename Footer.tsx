import { useLanguage } from '@/hooks/useLanguage';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="novaweb-footer" data-testid="footer">
      <div className="novaweb-container novaweb-footer-grid">
        <div>
          <strong>Novaweb</strong>
          <p>{t('footer.tagline')}</p>
        </div>
        <div>
          <p>
            <span>{t('footer.email')}</span>{' '}
            <a href="mailto:novawebdv@gmail.com" data-testid="footer-email">
              novawebdv@gmail.com
            </a>
          </p>
          <p>
            <span>{t('footer.phone')}</span> +213663699433
          </p>
        </div>
        <div>
          <p>{t('footer.follow')}</p>
          <p>
            <a href="#" data-testid="footer-twitter">Twitter</a> ·{' '}
            <a href="#" data-testid="footer-linkedin">LinkedIn</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
