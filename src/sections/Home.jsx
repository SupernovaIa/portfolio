import { ArrowUpRight, MapPin, Calendar, Code2 } from "lucide-react";
import { ME, PROJECTS } from "../data/content";
import { ProjectCard } from "../components/Shared";
import OrbitalBadge from "../components/OrbitalBadge";

export default function Home({ onNavigate }) {
  return (
    <section className="pf-section pf-home">
      <div className="pf-home-grid">
        <div className="pf-home-content">
          <div className="pf-eyebrow pf-fade-up pf-stagger-1">
            <span className="pf-eyebrow-dot" /> portfolio · {new Date().getFullYear()}
          </div>

          <h1 className="pf-hero-title pf-fade-up pf-stagger-2">
            Construyo<br />
            <span className="pf-accent">agentes de IA</span><br />
            y sistemas que razonan.
          </h1>

          <p className="pf-hero-bio pf-fade-up pf-stagger-3">{ME.bio}</p>

          <div className="pf-hero-meta pf-fade-up pf-stagger-4">
            <div className="pf-meta-item">
              <MapPin size={13} strokeWidth={1.5} />
              <span>{ME.location}</span>
            </div>
            <div className="pf-meta-item">
              <Calendar size={13} strokeWidth={1.5} />
              <span>{ME.yearsOfExperience} años de experiencia</span>
            </div>
            <div className="pf-meta-item">
              <Code2 size={13} strokeWidth={1.5} />
              <span>{PROJECTS.length} proyectos públicos</span>
            </div>
          </div>

          <div className="pf-hero-cta pf-fade-up pf-stagger-5">
            <button className="pf-btn primary" onClick={() => onNavigate("projects")}>
              Ver proyectos <ArrowUpRight size={14} />
            </button>
            <button className="pf-btn ghost" onClick={() => onNavigate("contact")}>
              Hablemos
            </button>
          </div>
        </div>

        <div className="pf-home-visual pf-fade-up pf-stagger-3">
          <OrbitalBadge />
        </div>
      </div>

      <div className="pf-home-featured">
        <h2 className="pf-section-label">Proyectos destacados</h2>
        <div className="pf-featured-grid">
          {PROJECTS.filter((p) => p.featured).map((p, i) => (
            <ProjectCard key={p.id} project={p} compact revealDelay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
