// ============================================================
// EDITA AQUÍ TUS DATOS PERSONALES
// ============================================================
import { Github, Linkedin } from "lucide-react";

export const ME = {
  name: "Javier Carreira",
  alias: "@SupernovaIa",
  role: "AI Engineer",
  location: "España",
  yearsOfExperience: 3,
  bio: "Placeholder bio — actualizar pronto.",
  longBio: [
    "Placeholder párrafo 1.",
    "Placeholder párrafo 2.",
    "Placeholder párrafo 3.",
  ],
  email: "jav.racec@gmail.com",
  social: [
    { id: "github",   label: "GitHub",   handle: "github.com/SupernovaIa",          url: "https://github.com/SupernovaIa",                Icon: Github },
    { id: "linkedin", label: "LinkedIn", handle: "linkedin.com/in/javier-carreira-c", url: "https://www.linkedin.com/in/javier-carreira-c/", Icon: Linkedin },
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
  { id: "core", name: "Python", ring: 0, angle: 0, status: "completed",
    description: "Mi lenguaje principal. Desde scripts rápidos hasta sistemas de producción." },

  { id: "langchain",  name: "LangChain",  ring: 1, angle: 30,  status: "completed",
    description: "Cadenas, agentes y herramientas para construir sobre LLMs." },
  { id: "langgraph",  name: "LangGraph",  ring: 1, angle: 120, status: "completed",
    description: "Agentes con estado y flujos multi-step complejos." },
  { id: "fastapi",    name: "FastAPI",    ring: 1, angle: 210, status: "completed",
    description: "APIs asíncronas, tipado con Pydantic, docs automáticas." },
  { id: "openai",     name: "OpenAI API", ring: 1, angle: 300, status: "completed",
    description: "GPT-4, embeddings, function calling y fine-tuning." },

  { id: "pg",       name: "PostgreSQL", ring: 2, angle: 60,  status: "completed",
    description: "Base de datos relacional con pgvector para búsqueda semántica." },
  { id: "chroma",   name: "ChromaDB",   ring: 2, angle: 150, status: "completed",
    description: "Vector store para RAG y retrieval semántico." },
  { id: "docker",   name: "Docker",     ring: 2, angle: 240, status: "active",
    description: "Contenedores para aislar y desplegar servicios de IA." },
  { id: "hugging",  name: "HuggingFace",ring: 2, angle: 330, status: "completed",
    description: "Modelos open-source, transformers y datasets." },

  { id: "mlflow",  name: "MLflow",     ring: 3, angle: 90,  status: "active",
    description: "Tracking de experimentos y registro de modelos." },
  { id: "aws",     name: "AWS",        ring: 3, angle: 210, status: "available",
    description: "Bedrock, Lambda y S3 para despliegues en la nube." },
  { id: "rag",     name: "RAG",        ring: 3, angle: 330, status: "completed",
    description: "Retrieval-Augmented Generation: chunking, embedding, retrieval." },
];
