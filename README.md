# Portfolio

Portfolio personal con estilo orbital cyan/neón. Construido con Vite + React.

## Empezar

```bash
npm install
npm run dev
```

Abre http://localhost:5173 en tu navegador.

## Personalizar

Todo el contenido del portfolio vive en `src/data/content.js`. Edita ese fichero y el resto se actualiza solo:

- `ME` — tus datos personales (nombre, rol, bio, email, redes)
- `PROJECTS` — los proyectos que quieres mostrar
- `EXPERIENCE` — tu trayectoria profesional
- `STACK_ITEMS` — las tecnologías del holy graph

Otras cosas que puedes querer cambiar:

- **Favicon y metadatos**: edita `index.html` y `public/favicon.svg`
- **Colores y tipografía**: están en `src/Portfolio.css`
- **Configuración visual del holy graph** (radios, velocidades, colores por estado): en `src/data/config.js`

## Estructura

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/      # Sidebar, OrbitalBadge, componentes compartidos
│   ├── data/            # content.js (lo que vas a editar) y config.js
│   ├── sections/        # Una sección por fichero (Home, Projects, Stack…)
│   ├── Portfolio.jsx    # Componente raíz
│   ├── Portfolio.css    # Estilos
│   ├── index.css        # Reset y estilos globales
│   └── main.jsx         # Punto de entrada
├── index.html
├── package.json
└── vite.config.js
```

## Formulario de contacto

El formulario de la sección de contacto es funcional en el frontend pero no envía nada todavía. En `src/sections/Contact.jsx`, dentro de `handleSubmit`, conéctalo a tu servicio preferido. Algunas opciones sin backend propio:

- **Formspree** (`https://formspree.io`) — el más rápido de configurar
- **Web3Forms** (`https://web3forms.com`) — gratis con API key
- **Resend** (`https://resend.com`) — si quieres una función serverless propia

## Desplegar

### Vercel (recomendado)

1. Sube el repositorio a GitHub.
2. Entra en `https://vercel.com/new` y elige el repo.
3. Vercel detecta Vite automáticamente. Pulsa "Deploy".

### Netlify

1. Sube el repositorio a GitHub.
2. Entra en `https://app.netlify.com/start` y elige el repo.
3. La configuración (build command, publish dir) ya está en `netlify.toml`.

### GitHub Pages

Requiere unos pequeños cambios. Añade en `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: "/nombre-del-repo/",
});
```

Luego usa el workflow de GitHub Actions oficial de Vite (`https://vitejs.dev/guide/static-deploy.html#github-pages`).

### Cloudflare Pages

1. Conecta tu repo en `https://dash.cloudflare.com/?to=/:account/pages`.
2. Build command: `npm run build`. Output directory: `dist`.

## Build local

```bash
npm run build       # genera dist/
npm run preview     # sirve dist/ para verificar antes de desplegar
```

## Licencia

Úsalo como quieras.
