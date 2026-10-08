export const VIEW = 900;
export const CENTER = VIEW / 2;
export const RING_RADII = [0, 130, 230, 340];
export const ROTATION_SPEEDS = [0, 90, 140, 200];

// One colour per ring, from the theme tokens in index.css.
export const RING_COLORS = [
  { fill: "var(--seam)",        stroke: "var(--seam)",   text: "var(--on-seam)" },
  { fill: "var(--surface)",     stroke: "var(--teal)",   text: "var(--ink)" },
  { fill: "var(--surface)",     stroke: "var(--indigo)", text: "var(--ink)" },
  { fill: "var(--surface)",     stroke: "var(--amber)",  text: "var(--ink)" },
];

export const RING_LABELS = [
  { title: "Núcleo",                  hint: "El lenguaje con el que lo hago todo" },
  { title: "Agentes y APIs",          hint: "Con lo que construyo cada día" },
  { title: "Datos y modelos",         hint: "Dónde viven los datos y los modelos" },
  { title: "Producción",              hint: "Patrones y plataforma para desplegar" },
];

export const NAV = [
  { id: "home",     label: "Inicio",    path: "/" },
  { id: "projects", label: "Proyectos", path: "/projects" },
  { id: "stack",    label: "Stack",     path: "/stack" },
  { id: "about",    label: "Sobre mí",  path: "/about" },
  { id: "contact",  label: "Contacto",  path: "/contact" },
];

// Project areas: colour = kind of work, as in the stack rings.
export const AREAS = {
  ia:           { label: "IA y agentes",    color: "teal" },
  datos:        { label: "Datos y ciencia", color: "green" },
  web:          { label: "Web y producto",  color: "indigo" },
  herramientas: { label: "Herramientas",    color: "amber" },
};
