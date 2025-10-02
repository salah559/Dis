import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xldpnrap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage(t('contact.form.success'));
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMessage(t('contact.form.error'));
      }
    } catch (error) {
      setResponseMessage(t('contact.form.error'));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Header />
      
      <main className="novaweb-container" style={{ paddingTop: '120px' }} data-testid="contact-page">
        <section className="novaweb-section novaweb-contact-section">
          <h1 className="novaweb-section-title" data-testid="contact-title">
            {t('contact.title')}
          </h1>
          <p className="novaweb-section-lead" data-testid="contact-subtitle">
            {t('contact.subtitle')}
          </p>

          <div className="novaweb-contact-grid">
            {/* Contact Form */}
            <form 
              className="novaweb-contact-form" 
              onSubmit={handleSubmit}
              data-testid="contact-form"
            >
              <input type="hidden" name="_subject" value="New message from your website" />
              
              <label>
                <span>{t('contact.form.name_label')}</span>
                <input
                  type="text"
                  name="name"
                  placeholder={t('contact.form.name_placeholder')}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  data-testid="input-name"
                />
              </label>

              <label>
                <span>{t('contact.form.email_label')}</span>
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.form.email_placeholder')}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  data-testid="input-email"
                />
              </label>

              <label>
                <span>{t('contact.form.message_label')}</span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder={t('contact.form.message_placeholder')}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  data-testid="textarea-message"
                />
              </label>

              <button 
                className="novaweb-btn novaweb-btn-primary" 
                type="submit"
                data-testid="submit-button"
              >
                {t('contact.form.submit')}
              </button>

              {/* Response message */}
              {responseMessage && (
                <div 
                  style={{ color: '#00a3ff', marginTop: '10px' }}
                  data-testid="form-response"
                >
                  {responseMessage}
                </div>
              )}
            </form>

            {/* Contact Info */}
            <div className="novaweb-contact-info" data-testid="contact-info">
              <h3>{t('contact.info.title')}</h3>
              <p>{t('contact.info.location')}</p>
              <p>
                {t('footer.email')}{' '}
                <a href="mailto:novawebdv@gmail.com" data-testid="contact-email">
                  {t('contact.info.email')}
                </a>
              </p>
              <p>
                {t('footer.phone')} {t('contact.info.phone')}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
