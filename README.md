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

El formulario está conectado a [Web3Forms](https://web3forms.com). Para activarlo:

1. Ve a web3forms.com y pon tu email → te mandan un access key al instante.
2. Crea un fichero `.env` en la raíz del proyecto:
   ```
   VITE_WEB3FORMS_KEY=tu_access_key_aqui
   ```
3. Al desplegar, añade la misma variable de entorno en el panel de Vercel/Netlify.

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

## Pendiente antes de publicar

- [x] **Contenido** — bio, proyectos reales y experiencia en `src/data/content.js`
- [x] **Favicon** — `public/favicon.svg` ya tiene el estilo orbital propio del sitio
- [x] **og-image** — `public/og-image.png` (1200×630 px) generada con el mismo estilo visual
- [ ] **Formulario** — conseguir access key en web3forms.com, copiar `.env.example` a `.env` y rellenar `VITE_WEB3FORMS_KEY` (y añadir la misma variable en el panel del hosting)
- [x] **SEO** — apuntando a la URL de producción en Vercel (`index.html`: `canonical`, `og:url`, `og:image`, `twitter:image`); actualizar si conectas un dominio propio

## Licencia

Úsalo como quieras.
