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

## Ejecución en local

El contenido se carga por JavaScript (`fetch`), por lo que **hay que servir el proyecto por HTTP**; abrir `index.html` con `file://` no funciona correctamente.

Desde la raíz del proyecto (`portfolio-source`), usa uno de estos métodos:

### Con Node.js (recomendado)

```bash
npx serve .
```

Luego abre en el navegador: **http://localhost:3000**

Alternativa con `http-server`:

```bash
npx http-server -p 8080
```

URL: **http://localhost:8080**

### Con Python

```bash
python -m http.server 8000
```

URL: **http://localhost:8000**

### Con Live Server (VS Code / Cursor)

1. Instala la extensión **Live Server**.
2. Clic derecho en `index.html` → **Open with Live Server**.
3. Se abrirá el navegador en la URL que indique la extensión (p. ej. http://127.0.0.1:5500).

## Uso

1. Clonar o descargar el repositorio.
2. Servir la carpeta en local con uno de los comandos anteriores (no abrir `index.html` directamente).
3. Cambiar idioma desde el selector EN/ES en la interfaz o editando `assets/js/i18n.js`.
