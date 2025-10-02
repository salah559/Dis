import { useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    { 
      id: 1, 
      title: t('projects.project1.title'), 
      desc: t('projects.project1.desc'),
      gradient: 'from-blue-600 to-purple-700',
      icon: '🎨'
    },
    { 
      id: 2, 
      title: t('projects.project2.title'), 
      desc: t('projects.project2.desc'),
      gradient: 'from-green-600 to-blue-700',
      icon: '🚀'
    },
    { 
      id: 3, 
      title: t('projects.project3.title'), 
      desc: t('projects.project3.desc'),
      gradient: 'from-purple-600 to-pink-700',
      icon: '🛒'
    },
    { 
      id: 4, 
      title: 'Project Four', 
      desc: 'Landing page',
      gradient: 'from-orange-600 to-red-700',
      icon: '📱'
    }
  ];

  return (
    <>
      <Header />
      
      <main className="novaweb-container" style={{ paddingTop: '120px' }} data-testid="projects-page">
        <section className="novaweb-section">
          <h1 className="novaweb-section-title" data-testid="projects-title">
            {t('projects.title')}
          </h1>
          <p className="novaweb-section-lead" data-testid="projects-subtitle">
            Click any project to preview.
          </p>
          
          <div className="novaweb-projects-grid">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="novaweb-project cursor-pointer"
                data-testid={`project-${project.id}`}
              >
                <div className={`w-full h-[220px] bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <span className="text-white text-6xl">{project.icon}</span>
                </div>
                <div className="novaweb-project-meta">
                  <h4>{project.title}</h4>
                  <p>{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
