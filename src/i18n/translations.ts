// translations.ts
// Acá vive todo el contenido traducible del sitio, organizado por idioma.
// TypeScript va a exigir que "en" tenga EXACTAMENTE la misma forma que "es",
// así que si te olvidás de traducir algo, te va a tirar error en compile-time.

export const translations = {
  es: {
    navbar: {
      experience: 'EXPERIENCIA',
      skills: 'SKILLS',
      about: 'SOBRE MÍ',
      training: 'FORMACIÓN',
      services: 'SERVICIOS',
      contact: 'CONTACTO'
    },
    hero: {
      introPrefix: 'Test Automation Engineer experto en ',
      introMidSeleniumAssertJ: ', ',
      introConnector: ' y',
      introPerformance: 'pruebas de rendimiento.',
      introClosing: ' Conecto la precisión de las pruebas manuales con la velocidad de la automatización para entregar resultados de alta calidad.',
      ctaText: 'Trabajemos juntos',
      downloadCv: 'Descargar CV',
      downloadCvAriaLabel: 'Descargar currículum vitae en PDF',
      greeting: 'Hola! Soy',
      rolesAriaLabel: 'Roles profesionales',
      typewriterRoles: [
        'Test Automation Engineer',
        'Técnico Superior en Programación',
        'Desarrollador de Aplicaciones',
      ],
    },
    experience: {
      title: 'Experiencia',
      subtitle: 'Conocé mi recorrido laboral.',
      items: {
        'exp-1': {
          role: 'Test Automation Engineer',
          tasks: {
            'task-1-1': 'Proporcionó diversas estrategias para automatizar aplicaciones, asegurando que estuvieran alineadas con los requisitos del negocio.',
            'task-1-2': 'Clasificó los casos de prueba para automatización basándose en plazos y criticidad para priorizar de manera efectiva.',
            'task-1-3': 'Utilizó Selenium para automatizar las pruebas de aplicaciones web, reduciendo significativamente el tiempo de pruebas manuales y aumentando la eficiencia.',
            'task-1-4': 'Implementó JBehave para las pruebas de API, verificando la integridad y la fiabilidad de los servicios backend. ',
          },
        },
        'exp-2': {
          role: 'QA Tester',
          tasks: {
            'task-2-1': 'Ejecutó pruebas manuales para servicios de API, identificando y documentando defectos para asegurar su resolución antes del lanzamiento.',
            'task-2-2': 'Desarrolló y mantuvo casos de prueba para asegurar una cobertura integral y alineación con los requisitos del negocio.',
            'task-2-3': 'Validó la integración de datos a través de múltiples bases de datos, asegurando una sincronización y consistencia de datos precisas.',
            'task-2-4': 'Analizó registros de New Relic para detectar y diagnosticar problemas, proporcionando informes detallados al equipo de desarrollo para su resolución.',
            'task-2-5': 'Colaboró con los desarrolladores para entender los cambios en las aplicaciones y aseguró que todas las actualizaciones fueran adecuadamente probadas.',
            'task-2-6': 'Sugirió e implementó mejoras en las metodologías de prueba, mejorando el proceso general de aseguramiento de calidad.',
          }
        },
        'exp-3': {
          role: 'Performance Test Engineer',
          tasks: {
            'task-3-1': 'Diseñó y ejecutó pruebas de carga, spike y soak para evaluar el rendimiento de la aplicación, incluyendo salida, velocidad de procesamiento, velocidad de transferencia de datos, uso de ancho de banda de red, usuarios concurrentes máximos, utilización de memoria, eficiencia de la carga de trabajo y tiempos de respuesta de comandos.',
          },
        },
        'exp-4': {
          role: 'Business Analyst',
          tasks: {
            'task-4-1': 'Identificó a los stakeholders clave y colaboró con ellos para recopilar requisitos y asegurar la alineación del proyecto.',
            'task-4-2': 'Creó y actualizó historias de usuario para reflejar con precisión las necesidades del negocio y facilitar el desarrollo.'
          },
        },
        'exp-5': {
          role: 'Tech Support',
          tasks: {
            'task-5-1': 'Atención al cliente.',
            'task-5-2': 'Manejo de reportes.',
            'task-5-3': 'Manejo de incidentes de Internet.'
          },
        },
      },
    },
    skill: {
      title: 'Habilidades',
      subtitle: 'Tecnologías y herramientas que domino.',
    },
    about: {
      title: 'Sobre Mí',
      subtitle: 'Información sobre mí',
      descriptiveParagraphs: [
        "Test Automation Engineer con experiencia en las metodologías de prueba. Proficiente en pruebas manuales y automatizadas, con un fuerte dominio de herramientas como Selenium WebDriver y AssertJ.",
        "Posee un profundo conocimiento de los marcos y metodologías de automatización de pruebas. Conocido por su adaptabilidad y rápida capacidad de aprendizaje, con un historial comprobado en pruebas de rendimiento.",
        "Comprometido con la entrega de resultados de alta calidad mientras expande continuamente su conocimiento y experiencia en el campo."
      ]
    },
    training: {
      title: 'Formación',
      subtitle: 'Conocé mis logros académicos.',
      coursesHeading: 'Cursos & Certificaciones',
      education: {
        'edu-1': {
          title: 'Tecnicatura Universitaria en Programación',
          institution: 'Universidad Tecnológica Nacional — UTN FRRe',
        },
        'edu-2': {
          title: 'Inglés',
          institution: 'Buen manejo B2',
        },
        'edu-3': {
          title: 'Politécnico en "Economía y Administración Empresarial"',
          institution: 'Instituto Nuestra Señora de la Misericordia — Corrientes, Argentina',
        },
      },
      courses: {
        'course-1': { name: 'Curso Avanzado en Desarrollo de Aplicaciones' },
        'course-2': { name: 'Curso Avanzado en Perl' },
        'course-3': { name: 'Curso Avanzado de Aplicaciones Android' },
        'course-4': { name: 'Curso Avanzado en Automatización de Pruebas' },
      },
    },
    services: {
      title: 'Servicios',
      subtitle: 'Lo que puedo ofrecerte.',
      items: {
        'svc-1': {
          title: 'Automatización de Pruebas',
          description: 'Diseño e implementación de frameworks de pruebas automatizadas con Selenium WebDriver, JBehave y Java. Reducción significativa del tiempo de testing manual y aumento de cobertura.',
        },
        'svc-2': {
          title: 'QA & Testing Manual',
          description: 'Estrategias integrales de control de calidad: diseño de casos de prueba, ejecución de pruebas funcionales y de regresión, validación de APIs con Postman y documentación de defectos.',
        },
        'svc-3': {
          title: 'Testing de Performance',
          description: 'Pruebas de carga, estrés, spike y soak con JMeter. Evaluación de throughput, tiempos de respuesta, concurrencia máxima y uso de recursos para garantizar el rendimiento óptimo.',
        },
        'svc-4': {
          title: 'Consultoría en Calidad de Software',
          description: 'Análisis de procesos QA existentes, definición de estrategias de testing, mejora de metodologías y alineación con requerimientos de negocio para equipos en crecimiento.',
        },
      },
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tenés un proyecto en mente? Escribime.',
      formAriaLabel: 'Formulario de contacto',
      nameLabel: 'Nombre *',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Email *',
      emailPlaceholder: 'tu@email.com',
      subjectLabel: 'Asunto',
      subjectPlaceholder: 'Motivo del contacto',
      messageLabel: 'Mensaje *',
      messagePlaceholder: 'Contame sobre tu proyecto o consulta...',
      submitButton: 'Enviar mensaje',
      submitButtonSent: '¡Mensaje enviado!',
      defaultSubject: 'Contacto desde Portfolio',
      emailBodyGreeting: 'Hola David',
      emailBodyIntro: 'Mi nombre es',
      emailBodySignature: 'Saludos.',
      submitButtonSending: 'Enviando...',
      submitButtonError: 'Error al enviar, intentá de nuevo',
    },
    footer: {
      phrase: '“La mayoría de los buenos programadores programan, no porque esperan que se les pague o por adulación por parte del público, sino porque es divertido programar.”',
      author: 'Linus Torvalds, Creador de Linux',
    }
  },
  en: {
    navbar: {
      experience: 'EXPERIENCE',
      skills: 'SKILLS',
      about: 'ABOUT ME',
      training: 'TRAINING',
      services: 'SERVICES',
      contact: 'CONTACT'
    },
    hero: {
      introPrefix: 'Test Automation Engineer expert in ',
      introMidSeleniumAssertJ: ', ',
      introConnector: ' and ',
      introPerformance: 'performance testing.',
      introClosing: ' I combine the precision of manual testing with the speed of automation to deliver high-quality results.',
      ctaText: "Let's work together",
      downloadCv: 'Download CV',
      downloadCvAriaLabel: 'Download resume in PDF',
      greeting: "Hi! I'm",
      rolesAriaLabel: 'Professional roles',
      typewriterRoles: [
        'Test Automation Engineer',
        'Software Development Technician',
        'Application Developer',
      ],
    },
    experience: {
      title: 'Experiencie',
      subtitle: 'Get to know my work experience.',
      items: {
        'exp-1': {
          role: 'Test Automation Engineer',
          tasks: {
            'task-1-1': 'Provided various strategies to automate applications, ensuring they aligned with business requirements.',
            'task-1-2': 'Classified test cases for automation based on deadlines and criticality to prioritize effectively.',
            'task-1-3': 'Utilized Selenium to automate web application testing, significantly reducing manual testing time and enhancing efficiency.',
            'task-1-4': 'Implemented JBehave for API testing to verify the integrity and reliability of backend services.',
          },
        },
        'exp-2': {
          role: 'QA Tester',
          tasks: {
            'task-2-1': 'Executed manual testing for API services, identifying and documenting defects and ensuring resolution prior to release.',
            'task-2-2': 'Developed and maintained test cases, ensuring comprehensive test coverage and alignment with business requirements.',
            'task-2-3': 'Validated data integration across multiple databases, ensuring accurate data synchronization and consistency.',
            'task-2-4': 'Analyzed New Relic logs to detect and diagnose issues, providing detailed reports to the development team for resolution.',
            'task-2-5': 'Collaborated with developers to understand application changes and ensured that all updates were adequately tested.',
            'task-2-6': 'Suggested and implemented improvements in testing methodologies, enhancing the overall quality assurance process.',
          }
        },
        'exp-3': {
          role: 'Performance Test Engineer',
          tasks: {
            'task-3-1': 'Design Load, Spike and Soak testing evaluating application output, processing speed, data transfer velocity, network bandwidth usage, maximum concurrent users, memory utilization, workload efficiency, and command response times.',
          },
        },
        'exp-4': {
          role: 'Business Analyst',
          tasks: {
            'task-4-1': 'Identified key stakeholders and collaborated with them to gather requirements and ensure project alignment.',
            'task-4-2': 'Created and updated user stories to accurately reflect business needs and facilitate development.'
          },
        },
        'exp-5': {
          role: 'Tech Support',
          tasks: {
            'task-5-1': 'Client Attention.',
            'task-5-2': 'Report Management.',
            'task-5-3': 'Internet Incidents Management.'
          },
        },
      },
    },
    skill: {
      title: 'Skills',
      subtitle: 'Technologies and tools I master.',
    },
    about: {
      title: 'About Me',
      subtitle: 'Information about me',
      descriptiveParagraphs: [
        "Experienced Test Automation Engineer with a hands-on approach to testing methodologies. Proficient in both manual and automated testing, with a strong command of tools such as Selenium WebDriver and Assertj.",
        "Possesses a deep understanding of test automation frameworks and methodologies. Known for adaptability and quick learning, with a proven track record in performance testing.",
        "Committed to delivering high-quality results while continuously expanding knowledge and expertise in the field."
      ]
    },
    training: {
      title: 'Education',
      subtitle: 'Check out my academic background.',
      coursesHeading: 'Courses & Certifications',
      education: {
        'edu-1': {
          title: 'University Degree in Programming',
          institution: 'Universidad Tecnológica Nacional — UTN FRRe',
        },
        'edu-2': {
          title: 'English',
          institution: 'Good B2 level',
        },
        'edu-3': {
          title: 'Diploma in "Economics and Business Administration"',
          institution: 'Instituto Nuestra Señora de la Misericordia — Corrientes, Argentina',
        },
      },
      courses: {
        'course-1': { name: 'Advanced Course in Application Development' },
        'course-2': { name: 'Advanced Course in Perl' },
        'course-3': { name: 'Advanced Course in Android Applications' },
        'course-4': { name: 'Advanced Course in Test Automation' },
      },
    },
    services: {
      title: 'Services',
      subtitle: 'What I can offer you.',
      items: {
        'svc-1': {
          title: 'Test Automation',
          description: 'Design and implementation of automated testing frameworks with Selenium WebDriver, JBehave and Java. Significant reduction of manual testing time and increased coverage.',
        },
        'svc-2': {
          title: 'QA & Manual Testing',
          description: 'Comprehensive quality control strategies: test case design, functional and regression testing execution, API validation with Postman, and defect documentation.',
        },
        'svc-3': {
          title: 'Performance Testing',
          description: 'Load, stress, spike, and soak testing with JMeter. Evaluation of throughput, response times, maximum concurrency, and resource usage to ensure optimal performance.',
        },
        'svc-4': {
          title: 'Software Quality Consulting',
          description: 'Analysis of existing QA processes, testing strategy definition, methodology improvement, and alignment with business requirements for growing teams.',
        },
      },
    },
    contact: {
      title: 'Contact',
      subtitle: 'Got a project in mind? Get in touch.',
      formAriaLabel: 'Contact form',
      nameLabel: 'Name *',
      namePlaceholder: 'Your name',
      emailLabel: 'Email *',
      emailPlaceholder: 'you@email.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Reason for contact',
      messageLabel: 'Message *',
      messagePlaceholder: 'Tell me about your project or inquiry...',
      submitButton: 'Send message',
      submitButtonSent: 'Message sent!',
      defaultSubject: 'Portfolio contact',
      emailBodyGreeting: 'Hi David',
      emailBodyIntro: 'My name is',
      emailBodySignature: 'Best regards.',
      submitButtonSending: 'Sending...',
      submitButtonError: 'Failed to send, try again',
    },
    footer: {
      phrase: '“Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.”',
      author: 'Linus Torvalds, Creator of Linux',
    }
  },
} as const;

// Idiomas soportados, derivado automáticamente de las keys del objeto
export type Lang = keyof typeof translations;

// Forma de las traducciones (la misma para todos los idiomas, gracias a "as const")
export type TranslationShape = (typeof translations)[Lang];

export const AVAILABLE_LANGS: Lang[] = Object.keys(translations) as Lang[];

export const DEFAULT_LANG: Lang = 'es';
