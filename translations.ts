export interface Translation {
  nav: {
    home: string;
    projects: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
    featured_title: string;
    featured_desc: string;
    featured_link: string;
  };
  services: {
    title: string;
    subtitle: string;
    design: {
      title: string;
      desc: string;
    };
    development: {
      title: string;
      desc: string;
    };
    seo: {
      title: string;
      desc: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    project1: {
      title: string;
      desc: string;
    };
    project2: {
      title: string;
      desc: string;
    };
    project3: {
      title: string;
      desc: string;
    };
  };
  testimonials: {
    title: string;
    quote1: string;
    quote2: string;
    quote3: string;
  };
  cta: {
    title: string;
    button: string;
  };
  footer: {
    tagline: string;
    email: string;
    phone: string;
    follow: string;
  };
  about: {
    title: string;
    subtitle: string;
    founder_name: string;
    founder_title: string;
    designer_name: string;
    designer_title: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name_label: string;
      name_placeholder: string;
      email_label: string;
      email_placeholder: string;
      message_label: string;
      message_placeholder: string;
      submit: string;
      success: string;
      error: string;
    };
    info: {
      title: string;
      location: string;
      email: string;
      phone: string;
    };
  };
}

export const translations: Record<string, Translation> = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact"
    },
    hero: {
      title: "Your success deserves to be measured digitally.",
      subtitle: "Design systems, performance-first development, and attention to detail — Novaweb crafts digital experiences for growth.",
      cta_primary: "Get a Quote",
      cta_secondary: "View Projects",
      featured_title: "Featured",
      featured_desc: "Design + Dev for a fintech launch — 3 week MVP.",
      featured_link: "See case study →"
    },
    services: {
      title: "What we do",
      subtitle: "Design and development services tailored to your business goals.",
      design: {
        title: "Web Design",
        desc: "Pixel-perfect UI, component libraries, and accessible interfaces."
      },
      development: {
        title: "Web Development",
        desc: "Scalable, maintainable code, optimized for performance."
      },
      seo: {
        title: "SEO & Performance",
        desc: "Speed, structure, and basics to improve discoverability."
      }
    },
    projects: {
      title: "Selected projects",
      subtitle: "A few recent launches — small teams, big results.",
      project1: {
        title: "Project One",
        desc: "Brand site • 2025"
      },
      project2: {
        title: "Project Two",
        desc: "Platform • 2025"
      },
      project3: {
        title: "Project Three",
        desc: "eCommerce • 2024"
      }
    },
    testimonials: {
      title: "What clients say",
      quote1: '"Novaweb turned our messy site into a conversion machine. Fast and professional."',
      quote2: '"Designers and developers who actually listen. Great communication."',
      quote3: '"Delivered on time and improved our organic traffic within weeks."'
    },
    cta: {
      title: "Ready to start your project?",
      button: "Let's talk"
    },
    footer: {
      tagline: "Modern web development studio",
      email: "Email:",
      phone: "Phone:",
      follow: "Follow"
    },
    about: {
      title: "About Novaweb",
      subtitle: "We are a small team of designers and developers focused on building quality websites for startups and growing businesses.",
      founder_name: "Bouazza salahEddine",
      founder_title: "Founder & Lead Developer",
      designer_name: "madi Mohamed elhadi",
      designer_title: "Product Designer"
    },
    contact: {
      title: "Contact Us",
      subtitle: "Tell us about your project — we usually reply within 24 hours.",
      form: {
        name_label: "Your Name",
        name_placeholder: "Enter your name",
        email_label: "Your Email",
        email_placeholder: "Enter your email",
        message_label: "Message",
        message_placeholder: "Tell us about your project",
        submit: "Send Message",
        success: "Message sent! Thank you.",
        error: "Oops! Something went wrong."
      },
      info: {
        title: "our contacts",
        location: "Algiers, Algeria",
        email: "novawebdv@gmail.com",
        phone: "+213 663 699 433"
      }
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      projects: "المشاريع",
      about: "من نحن",
      contact: "اتصل بنا"
    },
    hero: {
      title: "نجاحك يستحق أن يُقاس رقمياً.",
      subtitle: "أنظمة التصميم، التطوير الذي يركز على الأداء، والاهتمام بالتفاصيل — نوفاويب تصنع تجارب رقمية للنمو.",
      cta_primary: "احصل على عرض سعر",
      cta_secondary: "عرض المشاريع",
      featured_title: "مميز",
      featured_desc: "التصميم والتطوير لإطلاق منصة مالية — 3 أسابيع MVP.",
      featured_link: "اطلع على دراسة الحالة ←"
    },
    services: {
      title: "ما نقدمه",
      subtitle: "خدمات التصميم والتطوير المصممة خصيصاً لأهداف عملك.",
      design: {
        title: "تصميم الويب",
        desc: "واجهات مستخدم دقيقة، مكتبات المكونات، وواجهات سهلة الوصول."
      },
      development: {
        title: "تطوير الويب",
        desc: "كود قابل للتطوير وسهل الصيانة، محسّن للأداء."
      },
      seo: {
        title: "تحسين محركات البحث والأداء",
        desc: "السرعة، البنية، والأساسيات لتحسين القابلية للاكتشاف."
      }
    },
    projects: {
      title: "مشاريع مختارة",
      subtitle: "بعض الإطلاقات الأخيرة — فرق صغيرة، نتائج كبيرة.",
      project1: {
        title: "المشروع الأول",
        desc: "موقع علامة تجارية • 2025"
      },
      project2: {
        title: "المشروع الثاني",
        desc: "منصة • 2025"
      },
      project3: {
        title: "المشروع الثالث",
        desc: "التجارة الإلكترونية • 2024"
      }
    },
    testimonials: {
      title: "آراء العملاء",
      quote1: '"نوفاويب حولت موقعنا الفوضوي إلى آلة تحويل. سريع ومحترف."',
      quote2: '"مصممون ومطورون يستمعون فعلاً. تواصل رائع."',
      quote3: '"تم التسليم في الوقت المحدد وتحسين حركة المرور العضوية في غضون أسابيع."'
    },
    cta: {
      title: "هل أنت مستعد لبدء مشروعك؟",
      button: "لنتحدث"
    },
    footer: {
      tagline: "استوديو تطوير ويب حديث",
      email: "البريد الإلكتروني:",
      phone: "الهاتف:",
      follow: "تابعنا"
    },
    about: {
      title: "حول نوفاويب",
      subtitle: "نحن فريق صغير من المصممين والمطورين نركز على بناء مواقع ويب عالية الجودة للشركات الناشئة والمتنامية.",
      founder_name: "بوعزة صلاح الدين",
      founder_title: "المؤسس والمطور الرئيسي",
      designer_name: "مدي محمد الهادي",
      designer_title: "مصمم المنتج"
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "أخبرنا عن مشروعك — نحن عادة ما نرد خلال 24 ساعة.",
      form: {
        name_label: "اسمك",
        name_placeholder: "أدخل اسمك",
        email_label: "بريدك الإلكتروني",
        email_placeholder: "أدخل بريدك الإلكتروني",
        message_label: "الرسالة",
        message_placeholder: "أخبرنا عن مشروعك",
        submit: "إرسال الرسالة",
        success: "تم إرسال الرسالة! شكراً لك.",
        error: "عذراً! حدث خطأ ما."
      },
      info: {
        title: "معلومات الاتصال",
        location: "الجزائر، الجزائر",
        email: "novawebdv@gmail.com",
        phone: "+213 663 699 433"
      }
    }
  },
  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      about: "Acerca de",
      contact: "Contacto"
    },
    hero: {
      title: "Tu éxito merece ser medido digitalmente.",
      subtitle: "Sistemas de diseño, desarrollo centrado en el rendimiento y atención al detalle: Novaweb crea experiencias digitales para el crecimiento.",
      cta_primary: "Obtener Cotización",
      cta_secondary: "Ver Proyectos",
      featured_title: "Destacado",
      featured_desc: "Diseño + Desarrollo para lanzamiento fintech — MVP en 3 semanas.",
      featured_link: "Ver caso de estudio →"
    },
    services: {
      title: "Lo que hacemos",
      subtitle: "Servicios de diseño y desarrollo adaptados a los objetivos de tu negocio.",
      design: {
        title: "Diseño Web",
        desc: "UI pixel-perfect, bibliotecas de componentes e interfaces accesibles."
      },
      development: {
        title: "Desarrollo Web",
        desc: "Código escalable y mantenible, optimizado para el rendimiento."
      },
      seo: {
        title: "SEO y Rendimiento",
        desc: "Velocidad, estructura y fundamentos para mejorar la capacidad de descubrimiento."
      }
    },
    projects: {
      title: "Proyectos seleccionados",
      subtitle: "Algunos lanzamientos recientes: equipos pequeños, grandes resultados.",
      project1: {
        title: "Proyecto Uno",
        desc: "Sitio de marca • 2025"
      },
      project2: {
        title: "Proyecto Dos",
        desc: "Plataforma • 2025"
      },
      project3: {
        title: "Proyecto Tres",
        desc: "eCommerce • 2024"
      }
    },
    testimonials: {
      title: "Lo que dicen los clientes",
      quote1: '"Novaweb convirtió nuestro sitio desordenado en una máquina de conversión. Rápido y profesional."',
      quote2: '"Diseñadores y desarrolladores que realmente escuchan. Gran comunicación."',
      quote3: '"Entregado a tiempo y mejoramos nuestro tráfico orgánico en semanas."'
    },
    cta: {
      title: "¿Listo para comenzar tu proyecto?",
      button: "Hablemos"
    },
    footer: {
      tagline: "Estudio de desarrollo web moderno",
      email: "Correo:",
      phone: "Teléfono:",
      follow: "Seguir"
    },
    about: {
      title: "Acerca de Novaweb",
      subtitle: "Somos un pequeño equipo de diseñadores y desarrolladores enfocados en crear sitios web de calidad para startups y empresas en crecimiento.",
      founder_name: "Bouazza salahEddine",
      founder_title: "Fundador y Desarrollador Principal",
      designer_name: "madi Mohamed elhadi",
      designer_title: "Diseñador de Producto"
    },
    contact: {
      title: "Contáctanos",
      subtitle: "Cuéntanos sobre tu proyecto — generalmente respondemos dentro de 24 horas.",
      form: {
        name_label: "Tu Nombre",
        name_placeholder: "Ingresa tu nombre",
        email_label: "Tu Correo",
        email_placeholder: "Ingresa tu correo",
        message_label: "Mensaje",
        message_placeholder: "Cuéntanos sobre tu proyecto",
        submit: "Enviar Mensaje",
        success: "¡Mensaje enviado! Gracias.",
        error: "¡Ups! Algo salió mal."
      },
      info: {
        title: "nuestros contactos",
        location: "Argel, Argelia",
        email: "novawebdv@gmail.com",
        phone: "+213 663 699 433"
      }
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      projects: "Projets",
      about: "À propos",
      contact: "Contact"
    },
    hero: {
      title: "Votre succès mérite d'être mesuré numériquement.",
      subtitle: "Systèmes de conception, développement axé sur les performances et attention aux détails — Novaweb crée des expériences numériques pour la croissance.",
      cta_primary: "Obtenir un Devis",
      cta_secondary: "Voir les Projets",
      featured_title: "En vedette",
      featured_desc: "Design + Dév pour lancement fintech — MVP en 3 semaines.",
      featured_link: "Voir l'étude de cas →"
    },
    services: {
      title: "Ce que nous faisons",
      subtitle: "Services de conception et de développement adaptés à vos objectifs commerciaux.",
      design: {
        title: "Design Web",
        desc: "UI au pixel près, bibliothèques de composants et interfaces accessibles."
      },
      development: {
        title: "Développement Web",
        desc: "Code évolutif et maintenable, optimisé pour les performances."
      },
      seo: {
        title: "SEO et Performance",
        desc: "Vitesse, structure et bases pour améliorer la découvrabilité."
      }
    },
    projects: {
      title: "Projets sélectionnés",
      subtitle: "Quelques lancements récents — petites équipes, grands résultats.",
      project1: {
        title: "Projet Un",
        desc: "Site de marque • 2025"
      },
      project2: {
        title: "Projet Deux",
        desc: "Plateforme • 2025"
      },
      project3: {
        title: "Projet Trois",
        desc: "eCommerce • 2024"
      }
    },
    testimonials: {
      title: "Ce que disent les clients",
      quote1: '"Novaweb a transformé notre site en désordre en machine à conversion. Rapide et professionnel."',
      quote2: '"Des designers et développeurs qui écoutent vraiment. Excellente communication."',
      quote3: '"Livré à temps et amélioration du trafic organique en quelques semaines."'
    },
    cta: {
      title: "Prêt à démarrer votre projet ?",
      button: "Parlons-en"
    },
    footer: {
      tagline: "Studio de développement web moderne",
      email: "Email :",
      phone: "Téléphone :",
      follow: "Suivre"
    },
    about: {
      title: "À propos de Novaweb",
      subtitle: "Nous sommes une petite équipe de concepteurs et développeurs concentrée sur la création de sites web de qualité pour les startups et entreprises en croissance.",
      founder_name: "Bouazza salahEddine",
      founder_title: "Fondateur et Développeur Principal",
      designer_name: "madi Mohamed elhadi",
      designer_title: "Designer Produit"
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Parlez-nous de votre projet — nous répondons généralement sous 24 heures.",
      form: {
        name_label: "Votre Nom",
        name_placeholder: "Entrez votre nom",
        email_label: "Votre Email",
        email_placeholder: "Entrez votre email",
        message_label: "Message",
        message_placeholder: "Parlez-nous de votre projet",
        submit: "Envoyer le Message",
        success: "Message envoyé ! Merci.",
        error: "Oups ! Quelque chose s'est mal passé."
      },
      info: {
        title: "nos contacts",
        location: "Alger, Algérie",
        email: "novawebdv@gmail.com",
        phone: "+213 663 699 433"
      }
    }
  }
};

export const languageConfig = {
  en: { name: 'English', flag: '🇬🇧', dir: 'ltr' },
  ar: { name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  es: { name: 'Español', flag: '🇪🇸', dir: 'ltr' },
  fr: { name: 'Français', flag: '🇫🇷', dir: 'ltr' }
} as const;

export type Language = keyof typeof languageConfig;
