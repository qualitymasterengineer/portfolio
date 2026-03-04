# Portfolio - Quality Master Engineer

**Versión:** 1.0

Portfolio personal de **Quality Master Engineer** (QME): perfil profesional, servicios, experiencia, proyectos y blog. Diseño responsive, sin dependencias de build (HTML, CSS y JavaScript vanilla).

## Contenido

- [Inicio](#home): Presentación, servicios, testimonios y proyectos personales
- [Sobre mí](#about): Experiencia y enfoque en QA y automatización
- [Resume](#resume): Formación, experiencia laboral y habilidades
- [Portfolio](#portfolio): Proyectos destacados
- [Blog](#blog): Entradas de blog
- [Contacto](#contact): Formulario de contacto

## Características

- **Idiomas**: Inglés y español (i18n con `data-i18n` y `data-i18n-placeholder`)
- **Secciones**: About, Resume, Portfolio, Blog, Contact
- **Servicios**: Mobile Testing, QA manual, frameworks de automatización (Playwright, Selenium, Cypress), rendimiento (JMeter, K6), CI/CD, validación de datos y APIs, liderazgo técnico, observabilidad
- **Herramientas**: Appium, Jira, Azure DevOps, ClickUp, Cypress, Docker, Git, GitHub, Jenkins, JMeter, K6, MongoDB, MySQL, Playwright, PostgreSQL, Postman, Selenium

## Estructura del proyecto

```
portfolio/
├── index.html
├── README.md
├── assets/
│   ├── css/style.css
│   ├── js/
│   │   ├── i18n.js      # Traducciones EN/ES
│   │   └── script.js
│   ├── images/
│   └── tools-logo/      # Logos de herramientas
```

## Requisitos

- Navegador moderno (sin dependencias de Node ni build)
- Para publicar: dominio y alojamiento estático (o servidor con soporte para HTML/CSS/JS)

## Uso

1. Clonar o descargar el repositorio.
2. Abrir `index.html` en el navegador o servir la carpeta con un servidor estático.
3. Cambiar idioma desde el selector en la interfaz (si está implementado) o editando `assets/js/i18n.js`.
