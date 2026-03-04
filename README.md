# portfolio-source

Repositorio privado que contiene el código fuente del portfolio. Cada push a `main` se sincroniza automáticamente al repositorio público mediante GitHub Actions.

## Flujo de despliegue automático (GitHub Actions)

### Qué hace el workflow

- **Archivo:** `.github/workflows/deploy.yml`
- **Disparador:** cada vez que haces `push` a la rama `main`.
- **Acción:** toma todo el contenido de este repositorio y lo envía al repositorio público `qualitymasterengineer/portfolio` en la rama `main`.

### Requisitos previos

1. **Token de acceso personal (PAT)**  
   En GitHub: **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)** → **Generate new token**.  
   Permisos necesarios: **repo** y **workflow**.

2. **Secreto en este repositorio**  
   En el repo privado (portfolio-source): **Settings** → **Secrets and variables** → **Actions** → **New repository secret**.  
   - **Nombre:** `API_TOKEN_GITHUB`  
   - **Valor:** el PAT generado en el paso anterior.

3. **Repositorio público**  
   Debe existir el repositorio `qualitymasterengineer/portfolio` en GitHub (puede estar vacío).

### Configuración del workflow

En `.github/workflows/deploy.yml` puedes revisar o ajustar:

- `destination-github-username` y `destination-repository-name`: repositorio de destino.
- `user-email`: correo asociado a la cuenta de GitHub (para los commits que hace el workflow en el repo público).
- `target-branch`: rama del repositorio público donde se hace push (por defecto `main`).

### Si aparece error 403 (Forbidden)

- Comprueba que el secreto `API_TOKEN_GITHUB` esté creado y escrito correctamente.
- Verifica que el PAT tenga los permisos **repo** y **workflow**.
- Asegúrate de que `user-email` en el workflow coincida con el correo de la cuenta que posee el token y el repositorio público.

### Ver ejecuciones

En este repositorio: pestaña **Actions**. Ahí ves el historial de ejecuciones del workflow y los logs de cada paso.
