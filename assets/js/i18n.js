'use strict';

/**
 * i18n: English / Spanish
 * Apply with data-i18n="key" (text) or data-i18n-placeholder="key" (placeholder).
 */
const translations = {
  en: {
    sidebar_name: 'Quality Master Engineer',
    sidebar_subtitle: 'Strategic Automation Leader.',
    sidebar_show_contacts: 'Show Contacts',
    sidebar_email: 'Email',
    sidebar_phone: 'Phone',
    sidebar_experience: 'Experience',
    sidebar_location: 'Location',
    sidebar_experience_value: '10+ years',
    nav_about: 'About',
    nav_resume: 'Resume',
    nav_portfolio: 'Portfolio',
    nav_blog: 'Blog',
    nav_contact: 'Contact',
    about_title: 'About Me',
    about_para1: 'As a Quality Master Engineer with over 10 years of experience, I do more than just execute tests: I design trust-based ecosystems that shield software and accelerate its time-to-market. My focus is on transforming QA from a standard verification process into a driver of strategic business efficiency.',
    about_para2: 'Throughout my career, I have led complex projects and teams, establishing robust automation architectures that ensure full coverage and significantly reduce release cycles. My work philosophy integrates agility with technical rigor, ensuring that every line of code contributes to the delivery of a flawless, high-performance product.',
    service_title: 'What I Do',
    service_mobile_title: 'Mobile Testing & QA',
    service_mobile_desc: 'Automated and manual testing strategies for iOS and Android devices using Appium. Exhaustive validation of interface (UI), usability and performance in native and hybrid applications, ensuring a smooth user experience across diverse mobile ecosystems.',
    service_manual_title: 'Manual QA Control',
    service_manual_desc: 'Strategic design and execution of complex test cases, with a human-in-the-loop approach for critical scenario detection. Expert defect lifecycle management and requirements traceability using Jira, Azure DevOps and ClickUp, ensuring rigorous quality where automation falls short.',
    service_automation_title: 'Automation Frameworks',
    service_automation_desc: 'Development of automated scripts with Playwright, Selenium and Cypress. Implementation of custom frameworks for end-to-end coverage, regression testing and release cycle optimization.',
    service_perf_title: 'Performance & Scalability',
    service_perf_desc: 'Expertise in load, stress and scalability analysis using JMeter and K6. Optimization of response times and system capacity to ensure stability of critical architectures under high traffic demand.',
    service_pipeline_title: 'Infrastructure & CI/CD',
    service_pipeline_desc: 'Design and automation of Build, Test and Release pipelines integrating continuous testing into the development lifecycle. Management of stable and reproducible environments using Docker and Kubernetes, ensuring smooth and efficient deployments with tools such as Jenkins and GitHub Actions.',
    service_data_title: 'Data & API Validation',
    service_data_desc: 'Expert use of Postman for advanced validation of contracts, schemas and service responses. Integration of testing with relational and non-relational databases, ensuring data integrity and consistency in end-to-end testing.',
    service_leader_title: 'Technical Leadership',
    service_leader_desc: 'Technical leadership of QA teams under agile methodologies, defining global strategies and quality standards. Technical mentoring and continuous process optimization using Azure DevOps, Jira and ClickUp to ensure traceability and operational excellence in every development cycle.',
    service_observability_title: 'Observability & Quality Engineering',
    service_observability_desc: 'Implementation of monitoring strategies and proactive error analysis in production environments. Advanced interpretation of performance metrics and logs for early detection of bottlenecks and prevention of critical failures, ensuring high availability and software resilience.',
    testimonials_title: 'Testimonials',
    testimonial1_name: 'Giovanna Yanelli',
    testimonial1_text: 'Texto de lo que me digan.',
    testimonial2_name: 'Jessica miller',
    testimonial2_text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
    testimonial3_name: 'Henry william',
    testimonial3_text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
    clients_title: 'Personal Projects',
    tools_title: 'Tools & Applications',
    resume_title: 'Experience',
    resume_education: 'Education',
    resume_work: 'Work Experience',
    resume_skills: 'Skills',
    resume_istqb_title: 'ISTQB v4.0 Certification',
    resume_istqb_desc: 'Official ISTQB Foundational level v4.0 certification',
    resume_qa_title: 'QA Certification',
    resume_qa_desc: 'Official ISTQB Foundational level v4.0 certification',
    resume_ny_title: 'New york academy of art',
    resume_ny_desc: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..',
    resume_high_title: 'High school of art and design',
    resume_high_desc: 'Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.',
    resume_creative_title: 'Creative director',
    resume_creative_desc: 'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.',
    resume_art_title: 'Art director',
    resume_art_desc: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.',
    resume_designer_title: 'Web designer',
    resume_designer_desc: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.',
    resume_creative_period: '2015 — Present',
    skill_cypress: 'Automation with Cypress',
    skill_testcases: 'Test Cases',
    skill_branding: 'Branding',
    skill_wordpress: 'WordPress',
    portfolio_title: 'Portfolio',
    filter_all: 'All',
    filter_manual: 'Manual Testing',
    filter_automation: 'Automation',
    filter_performance: 'Performance',
    filter_select: 'Select category',
    blog_title: 'Blog',
    contact_title: 'Contact',
    contact_form_title: 'Contact Form',
    form_fullname: 'Full name',
    form_email: 'Email address',
    form_message: 'Your Message',
    form_send: 'Send Message'
  },
  es: {
    sidebar_name: 'Quality Master Engineer',
    sidebar_subtitle: 'Líder en automatización estratégica.',
    sidebar_show_contacts: 'Ver contactos',
    sidebar_email: 'Correo',
    sidebar_phone: 'Teléfono',
    sidebar_experience: 'Experiencia',
    sidebar_location: 'Ubicación',
    sidebar_experience_value: 'Más de 10 años',
    nav_about: 'Sobre mí',
    nav_resume: 'Currículum',
    nav_portfolio: 'Portafolio',
    nav_blog: 'Blog',
    nav_contact: 'Contacto',
    about_title: 'Sobre mí',
    about_para1: 'Como Quality Master Engineer con más de 10 años de experiencia, no solo ejecuto pruebas: diseño ecosistemas basados en la confianza que protegen el software y aceleran su llegada al mercado. Mi foco es transformar QA de un proceso estándar de verificación en un impulsor de la eficiencia estratégica del negocio.',
    about_para2: 'A lo largo de mi carrera he liderado proyectos y equipos complejos, estableciendo arquitecturas de automatización robustas que aseguran cobertura completa y reducen significativamente los ciclos de release. Mi filosofía de trabajo integra agilidad con rigor técnico, asegurando que cada línea de código contribuya a la entrega de un producto impecable y de alto rendimiento.',
    service_title: '¿Qué se hacer?',
    service_mobile_title: 'Mobile Testing & QA',
    service_mobile_desc: 'Estrategias de pruebas automatizadas y manuales para dispositivos iOS y Android utilizando Appium. Validación exhaustiva de interfaz (UI), usabilidad y rendimiento en aplicaciones nativas e híbridas, garantizando una experiencia de usuario fluida en diversos ecosistemas móviles.',
    service_manual_title: 'Manual QA Control',
    service_manual_desc: 'Diseño y ejecución estratégica de casos de prueba complejos, con un enfoque human-in-the-loop para la detección de escenarios críticos. Gestión experta del ciclo de vida de defectos y trazabilidad de requerimientos utilizando Jira, Azure DevOps y ClickUp, asegurando una calidad rigurosa donde la automatización no alcanza.',
    service_automation_title: 'Automation Frameworks',
    service_automation_desc: 'Desarrollo de scripts automatizados con Playwright, Selenium y Cypress. Implementación de frameworks custom para cobertura end-to-end, pruebas de regresión y optimización de ciclos de release.',
    service_perf_title: 'Performance & Scalability',
    service_perf_desc: 'Dominio experto en análisis de carga, estrés y escalabilidad mediante JMeter y K6. Optimización de tiempos de respuesta y capacidad del sistema para garantizar la estabilidad de arquitecturas críticas bajo altas demandas de tráfico.',
    service_pipeline_title: 'Infrastructure & CI/CD',
    service_pipeline_desc: 'Diseño y automatización de pipelines de Build, Test y Release integrando pruebas continuas en el ciclo de vida de desarrollo. Gestión de entornos estables y reproducibles mediante Docker y Kubernetes, asegurando despliegues fluidos y eficientes con herramientas como Jenkins y GitHub Actions.',
    service_data_title: 'Data & API Validation',
    service_data_desc: 'Manejo experto de Postman para la validación avanzada de contratos, esquemas y respuestas de servicios. Integración de pruebas con bases de datos relacionales y no relacionales, asegurando la integridad de la data y la consistencia en pruebas end-to-end.',
    service_leader_title: 'Technical Leadership',
    service_leader_desc: 'Liderazgo técnico de equipos de QA bajo metodologías ágiles, definiendo estrategias globales y estándares de calidad. Mentoría técnica y optimización continua de procesos utilizando Azure DevOps, Jira y ClickUp para asegurar la trazabilidad y la excelencia operativa en cada ciclo de desarrollo.',
    service_observability_title: 'Observability & Quality Engineering',
    service_observability_desc: 'Implementación de estrategias de monitoreo y análisis proactivo de errores en entornos productivos. Interpretación avanzada de métricas de rendimiento y logs para la detección temprana de cuellos de botella y la prevención de fallos críticos, garantizando la alta disponibilidad y resiliencia del software.',
    testimonials_title: 'Testimonios',
    testimonial1_name: 'Giovanna Yanelli',
    testimonial1_text: 'Texto de lo que me digan.',
    testimonial2_name: 'Jessica miller',
    testimonial2_text: 'Richard fue contratado para crear una identidad corporativa. Estuvimos muy satisfechos con el trabajo realizado. Tiene mucha experiencia y se preocupa por las necesidades del cliente. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
    testimonial3_name: 'Henry william',
    testimonial3_text: 'Richard fue contratado para crear una identidad corporativa. Estuvimos muy satisfechos con el trabajo realizado. Tiene mucha experiencia y se preocupa por las necesidades del cliente. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
    clients_title: 'Proyectos personales',
    tools_title: 'Herramientas y aplicaciones',
    resume_title: 'Experiencia',
    resume_education: 'Educación',
    resume_work: 'Experiencia laboral',
    resume_skills: 'Habilidades',
    resume_istqb_title: 'Certificación ISTQB v4.0',
    resume_istqb_desc: 'Certificación oficial ISTQB Foundational level v4.0',
    resume_qa_title: 'Certificación de QA',
    resume_qa_desc: 'Certificación oficial ISTQB Foundational level v4.0',
    resume_ny_title: 'Academia de arte de Nueva York',
    resume_ny_desc: 'Formación en disciplinas artísticas y diseño.',
    resume_high_title: 'Instituto de arte y diseño',
    resume_high_desc: 'Estudios secundarios con orientación en diseño y comunicación visual.',
    resume_creative_title: 'Director creativo',
    resume_creative_desc: 'Liderazgo de equipos y estrategia de producto en proyectos de calidad y automatización.',
    resume_art_title: 'Director de arte',
    resume_art_desc: 'Coordinación de diseño y estándares visuales en proyectos digitales.',
    resume_designer_title: 'Diseñador web',
    resume_designer_desc: 'Diseño de interfaces y experiencia de usuario en aplicaciones web.',
    resume_creative_period: '2015 — Presente',
    skill_cypress: 'Automatización con Cypress',
    skill_testcases: 'Casos de prueba',
    skill_branding: 'Identidad de marca',
    skill_wordpress: 'WordPress',
    portfolio_title: 'Portafolio',
    filter_all: 'Todos',
    filter_manual: 'Testing manual',
    filter_automation: 'Automatización',
    filter_performance: 'Rendimiento',
    filter_select: 'Seleccionar categoría',
    blog_title: 'Blog',
    contact_title: 'Contacto',
    contact_form_title: 'Formulario de contacto',
    form_fullname: 'Nombre completo',
    form_email: 'Correo electrónico',
    form_message: 'Tu mensaje',
    form_send: 'Enviar mensaje'
  }
};

const STORAGE_KEY = 'portfolio-lang';
const DEFAULT_LANG = 'en';

function getLang() {
  return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
}

function setLang(lang) {
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;
}

function applyTranslations(lang) {
  const t = translations[lang] || translations[DEFAULT_LANG];
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.dispatchEvent(new CustomEvent('i18n-applied'));
}

function initI18n() {
  const lang = getLang();
  setLang(lang);
  applyTranslations(lang);

  document.querySelectorAll('[data-lang-switch]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const newLang = this.getAttribute('data-lang-switch');
      if (translations[newLang]) {
        setLang(newLang);
        applyTranslations(newLang);
        document.querySelectorAll('[data-lang-switch]').forEach(function (b) {
          b.classList.toggle('active', b.getAttribute('data-lang-switch') === newLang);
        });
      }
    });
  });
  document.querySelectorAll('[data-lang-switch]').forEach(function (b) {
    b.classList.toggle('active', b.getAttribute('data-lang-switch') === lang);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
