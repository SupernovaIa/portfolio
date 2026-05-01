// ============================================================
// EDITA AQUÍ TUS DATOS PERSONALES
// ============================================================
import { Github, Linkedin, Twitter } from "lucide-react";

export const ME = {
  name: "Tu Nombre",
  alias: "@tu_usuario",
  role: "Full Stack Developer",
  location: "Motril, Andalucía",
  yearsOfExperience: 4,
  bio: "Desarrollador full stack con foco en interfaces que se sienten vivas y backends que aguantan. Me obsesionan los detalles de UX, las bases de datos bien indexadas y el código que otra persona pueda leer sin maldecirte.",
  longBio: [
    "Empecé tocando HTML en el instituto, pasé por una etapa larga de PHP en agencia, y desde 2022 vivo principalmente en el ecosistema TypeScript/React/Node.",
    "Me gusta especialmente la zona donde el frontend y el backend se tocan: diseño de APIs, validación, autenticación, sincronización de estado. Ahí es donde se juega la calidad de un producto.",
    "Fuera del código: senderismo por Sierra Nevada, fotografía analógica y demasiado café.",
  ],
  email: "tu.email@ejemplo.com",
  social: [
    { id: "github",   label: "GitHub",   handle: "github.com/tuusuario",   url: "https://github.com",   Icon: Github },
    { id: "linkedin", label: "LinkedIn", handle: "linkedin.com/in/tu",     url: "https://linkedin.com", Icon: Linkedin },
    { id: "twitter",  label: "Twitter",  handle: "@tu_usuario",            url: "https://twitter.com",  Icon: Twitter },
  ],
};

export const PROJECTS = [
  {
    id: "p1",
    name: "Holy Graph",
    tagline: "Visualización orbital de aprendizaje",
    description: "Interfaz interactiva inspirada en sistemas planetarios para mapear progreso de aprendizaje. Múltiples stacks, búsqueda en vivo, panel de ajustes.",
    tech: ["React", "SVG", "TypeScript"],
    year: "2026",
    status: "active",
    featured: true,
    url: "#",
    repo: "#",
  },
  {
    id: "p2",
    name: "Pulse",
    tagline: "Dashboard de métricas en tiempo real",
    description: "Panel para equipos pequeños con WebSockets, agregaciones server-side y exportación a CSV. Pensado para no ser otro Grafana más.",
    tech: ["Node.js", "Postgres", "WebSockets"],
    year: "2025",
    status: "completed",
    featured: true,
    url: "#",
    repo: "#",
  },
  {
    id: "p3",
    name: "Nimbus",
    tagline: "CLI para gestión de despliegues",
    description: "Herramienta de línea de comandos que abstrae despliegues en Vercel, Railway y Fly.io detrás de una sola interfaz coherente.",
    tech: ["Go", "Cobra", "Docker"],
    year: "2025",
    status: "completed",
    featured: false,
    url: "#",
    repo: "#",
  },
  {
    id: "p4",
    name: "Tinta",
    tagline: "Editor markdown minimalista",
    description: "Editor centrado en escribir, no en configurar. Atajos de teclado vim-style, exportación a PDF y sincronización opcional con Git.",
    tech: ["Tauri", "Rust", "React"],
    year: "2024",
    status: "completed",
    featured: false,
    url: "#",
    repo: "#",
  },
];

export const EXPERIENCE = [
  {
    role: "Senior Full Stack Developer",
    company: "Empresa Actual",
    period: "2024 — actualidad",
    description: "Diseño y construcción de la plataforma interna. Liderazgo técnico de un equipo de 4.",
  },
  {
    role: "Full Stack Developer",
    company: "Startup Anterior",
    period: "2022 — 2024",
    description: "De los primeros ingenieros. Frontend en React, backend en Node, despliegue en AWS.",
  },
  {
    role: "Web Developer",
    company: "Agencia Digital",
    period: "2020 — 2022",
    description: "Sitios a medida en WordPress y Laravel para clientes del sector turístico.",
  },
];

export const STACK_ITEMS = [
  { id: "core", name: "TypeScript", ring: 0, angle: 0, status: "completed",
    description: "Mi lenguaje principal. Tipado estricto en todo lo que toco." },

  { id: "react",    name: "React",    ring: 1, angle: 30,  status: "completed",
    description: "Componentes, hooks, suspense. La base de mis frontends." },
  { id: "next",     name: "Next.js",  ring: 1, angle: 110, status: "completed",
    description: "App router, server components, server actions." },
  { id: "tailwind", name: "Tailwind", ring: 1, angle: 200, status: "completed",
    description: "Utility-first. Lo uso en el 90% de mis proyectos." },
  { id: "node",     name: "Node.js",  ring: 1, angle: 290, status: "completed",
    description: "Backend en Fastify y Hono principalmente." },

  { id: "pg",     name: "PostgreSQL", ring: 2, angle: 60,  status: "completed",
    description: "Mi base de datos por defecto. Drizzle como ORM." },
  { id: "redis",  name: "Redis",      ring: 2, angle: 150, status: "completed",
    description: "Caché, colas y rate limiting." },
  { id: "docker", name: "Docker",     ring: 2, angle: 240, status: "active",
    description: "Profundizando en multi-stage builds y orquestación." },
  { id: "aws",    name: "AWS",        ring: 2, angle: 330, status: "available",
    description: "Lambda, RDS, S3. Con margen para crecer." },

  { id: "rust", name: "Rust",       ring: 3, angle: 90,  status: "active",
    description: "Aprendiéndolo para herramientas CLI y procesos críticos." },
  { id: "k8s",  name: "Kubernetes", ring: 3, angle: 270, status: "available",
    description: "Lo justo para no sentirme perdido en charlas de DevOps." },
];
