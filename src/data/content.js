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
  // BORRADOR — reescrito hacia "AI Engineer" a partir de tu GitHub. Revísalo y ajústalo.
  bio: "AI Engineer. Construyo agentes con LLMs, chatbots RAG y modelos de ML — de la idea al despliegue.",
  longBio: [
    "Soy Javier, AI Engineer. Me dedico a construir sistemas que usan LLMs para hacer cosas útiles: agentes con tool use, chatbots RAG sobre documentación y pipelines de datos con modelos de ML.",
    "Cuido la ingeniería tanto como la IA: arquitectura limpia (hexagonal), APIs con FastAPI y despliegues reproducibles. No me vale un notebook que solo corre en mi máquina.",
    "Mantengo abierto un roadmap open-source de AI engineering donde documento todo el camino, desde los fundamentos hasta sistemas listos para producción.",
  ],
  email: "jav.racec@gmail.com",
  social: [
    { id: "github",   label: "GitHub",   handle: "github.com/SupernovaIa",          url: "https://github.com/SupernovaIa",                Icon: Github },
    { id: "linkedin", label: "LinkedIn", handle: "linkedin.com/in/javier-carreira-c", url: "https://www.linkedin.com/in/javier-carreira-c/", Icon: Linkedin },
  ],
};

// Proyectos reales extraídos de github.com/SupernovaIa.
export const PROJECTS = [
  {
    id: "periodic-table",
    name: "Tabla periódica interactiva",
    tagline: "Cada elemento, con su ficha completa",
    description: "Tabla periódica interactiva: haz clic en cualquier elemento para ver su perfil completo. Bilingüe ES/EN, sin build, HTML/CSS/JS puro.",
    tech: ["JavaScript", "HTML", "CSS"],
    year: "2026",
    status: "completed",
    featured: true,
    url: "https://supernovaia.github.io/periodic-table/",
    repo: "https://github.com/SupernovaIa/periodic-table",
  },
  {
    id: "pharma-cards",
    name: "Pharma Cards",
    tagline: "Fichas rápidas de fármacos para farmacéuticos",
    description: "Fichas de consulta rápida por principio activo: indicación, posología, interacciones y efectos adversos.",
    tech: ["JavaScript", "HTML", "CSS"],
    year: "2026",
    status: "completed",
    featured: true,
    url: "https://supernovaia.github.io/pharma-cards/",
    repo: "https://github.com/SupernovaIa/pharma-cards",
  },
  {
    id: "leaf",
    name: "Leaf",
    tagline: "Editor de notas en bloques sobre Markdown + git",
    description: "App de notas personal: un editor de bloques Lexical que guarda cada página como Markdown plano en un repo git privado que tú controlas. En construcción.",
    tech: ["TypeScript", "Lexical", "Markdown"],
    year: "2026",
    status: "active",
    featured: true,
    url: "",
    repo: "",
  },
  {
    id: "funko-mons",
    name: "Funko-mons",
    tagline: "Generación y visor 3D de Funko Pops",
    description: "Pipeline generativo (imágenes → modelo 3D con Tripo) y visor interactivo en Next.js con react-three-fiber. En fase de investigación.",
    tech: ["Next.js", "react-three-fiber", "TypeScript"],
    year: "2026",
    status: "locked",
    featured: false,
    url: "https://funko-mons.vercel.app",
    repo: "https://github.com/SupernovaIa/funko-mons",
  },
  {
    id: "portfolio",
    name: "Este portfolio",
    tagline: "El sitio que estás viendo ahora mismo",
    description: "Mi portfolio personal como AI Engineer: React + Vite, con interfaz orbital, tokens de diseño y animaciones de entrada.",
    tech: ["React", "Vite", "JavaScript"],
    year: "2026",
    status: "active",
    featured: false,
    url: "https://supernovaia.vercel.app",
    repo: "https://github.com/SupernovaIa/portfolio",
  },
  {
    id: "stellar-interior-model",
    name: "Stellar Interior Model",
    tagline: "Modelo numérico del interior de una estrella masiva",
    description: "Modelo numérico del interior de una estrella masiva de secuencia principal, con núcleo convectivo y envoltura radiativa.",
    tech: ["Python", "NumPy"],
    year: "2026",
    status: "completed",
    featured: false,
    url: "",
    repo: "https://github.com/SupernovaIa/Stellar-interior-model",
  },
];

// Formato: { role, company, period, description }
export const EXPERIENCE = [
  {
    role: "Arquitecto IA",
    company: "Verymuch.Ai",
    period: "may. 2026 — actualidad",
    description: "Comunidad de arquitectos de IA enfocada en construir agentes con Claude.",
  },
  {
    role: "AI Engineer",
    company: "thePower",
    period: "abr. 2026 — actualidad",
    description: "Desarrollo la parte de IA de la LMS de thePower, creo formación técnica para empresas tecnológicas y hago consultoría de inteligencia artificial.",
  },
  {
    role: "AI Engineer",
    company: "Nfq Advisory",
    period: "sept. 2025 — abr. 2026",
    description: "Diseñé y desplegué sistemas LLM agénticos (RAG, agentes y arquitecturas multiagente con LangChain y LangGraph) para clientes de varios sectores, con observabilidad (Langfuse) y evaluación (DeepEval, RAGAS). Monté pipelines de entrenamiento, versionado y despliegue con MLflow, Databricks y Docker sobre Azure con CI/CD.",
  },
  {
    role: "AI Engineer",
    company: "EY",
    period: "may. 2025 — sept. 2025",
    description: "Desarrollé sistemas de IA generativa en consultoría de gran escala: un chatbot conversacional con RAG, un buscador semántico sobre documentación interna y un pipeline de generación automática de documentos comerciales.",
  },
  {
    role: "AI Engineer & Educator",
    company: "thePower",
    period: "oct. 2023 — abr. 2025",
    description: "Identifiqué y desarrollé casos de uso de IA generativa para el negocio (RAG y chatbots sobre base de conocimiento interna). Creé e impartí formación en IA y datos para más de 2000 estudiantes, incluyendo materiales para certificaciones de Microsoft Azure.",
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
