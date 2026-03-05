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
│   ├── html/
│   │   ├── partials/              # Archivos activos: al editarlos, los cambios se reflejan al desplegar
│   │   │   ├── svg-sprites.html   # Iconos SVG
│   │   │   ├── sidebar.html      # Barra lateral
│   │   │   ├── navbar.html       # Navegación (pestañas)
│   │   │   ├── about.html        # Pestaña About (Sobre mí)
│   │   │   ├── about-us.html     # Pestaña About Us (Sobre nosotros)
│   │   │   ├── resume.html       # Pestaña Resume
│   │   │   ├── expertise.html    # Pestaña Expertise
│   │   │   ├── portfolio.html    # Pestaña Portfolio
│   │   │   ├── blog.html         # Pestaña Blog
│   │   │   └── contact.html      # Pestaña Contact
│   │   └── content.html          # Respaldo solo si falla la carga de partials
│   ├── js/
│   │   ├── inject.js            # Carga parciales y monta la página
│   │   ├── constants.js         # Contacto, mapa, redes, pestañas visibles (PORTFOLIO_PAGES)
│   │   ├── translations-data.js # Traducciones EN/ES (editar aquí los textos)
│   │   ├── i18n.js              # Aplica traducciones
│   │   └── script.js
│   ├── images/
│   └── tools-logo/     # Logos de herramientas
├── scripts/
│   └── split-content.js   # Regenera partials desde content.html (node scripts/split-content.js)
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

## Cómo cambiar las traducciones

### Por qué no se ven bien las traducciones en `i18n.js`

No puedes visualizar los textos de forma clara en **`assets/js/i18n.js`** por dos razones:

1. **Ofuscación:** los textos no están escritos como `'sidebar_subtitle': 'Strategic Automation Leader.'`. Están guardados en un array y se accede por índice (por ejemplo `a0_0x5b95f4(0xed)`), así que en el archivo no se ve la relación clave → texto.
2. **Minificación:** todo el código está en una sola línea, lo que hace el archivo muy difícil de leer y de editar.

Por eso las traducciones no se ven “de manera correcta” en ese archivo: fue procesado con una herramienta de ofuscación/minificación.

### Opción 1: Editar el archivo ofuscado (buscar y reemplazar)

Puedes cambiar un texto concreto así:

1. Abre **`assets/js/i18n.js`** en el editor.
2. Usa **Buscar** (Ctrl+F) con el texto que quieres cambiar.  
   - Ejemplo subtítulo del sidebar en **inglés**: busca `Strategic\x20Automation\x20Leader.`  
     (en el código el espacio a veces aparece como `\x20`).
   - Ejemplo en **español**: busca `Líder\x20en\x20automatización\x20estratégica.`
3. Sustituye por tu nuevo texto. Puedes escribir espacios normales en el reemplazo.
4. Guarda el archivo y recarga la página (Ctrl+Shift+R para evitar caché).

**Importante:** si en el HTML un elemento tiene el atributo **`data-i18n="clave"`**, su texto lo define el sistema de traducciones. Si quitas `data-i18n` de ese elemento, se mostrará lo que pongas en el HTML y ya no se traducirá al cambiar de idioma.

### Opción 2: Archivo de traducciones legible (recomendado)

El proyecto usa ahora **`assets/js/translations-data.js`**: ahí están todas las cadenas EN/ES en formato claro (clave → valor). Para cambiar un texto:

1. Abre **`assets/js/translations-data.js`**.
2. Localiza la clave (por ejemplo `sidebar_subtitle` en `en` y en `es`).
3. Modifica el valor entre comillas y guarda.
4. Recarga la página (Ctrl+Shift+R).

`i18n.js` lee las traducciones de ese archivo, así que no necesitas tocar código ofuscado.

## Mostrar u ocultar pestañas

Puedes decidir qué pestañas (About, About Us, Resume, Expertise, Portfolio, Blog, Contact) se muestran en el menú y en el contenido.

1. Abre **`assets/js/constants.js`**.
2. Localiza el objeto **`PORTFOLIO_PAGES`**.
3. Pon en **`false`** la pestaña que quieras ocultar. Ejemplo para ocultar Blog y Sobre nosotros:

```javascript
window.PORTFOLIO_PAGES = {
  about: true,
  aboutUs: false,     // oculta la pestaña Sobre nosotros
  resume: true,
  expertise: true,
  portfolio: true,
  blog: false,        // oculta la pestaña Blog
  contact: true
};
```

4. Guarda y recarga la página. Las pestañas en `false` desaparecerán del menú y su contenido no se mostrará. La primera pestaña visible quedará activa por defecto.

## Uso

1. Clonar o descargar el repositorio.
2. Servir la carpeta en local con uno de los comandos anteriores (no abrir `index.html` directamente).
3. Cambiar idioma desde el selector EN/ES en la interfaz o editando las cadenas en `assets/js/i18n.js` (ver sección anterior).
