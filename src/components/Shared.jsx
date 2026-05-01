import { ExternalLink, ArrowUpRight } from "lucide-react";

export function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <header className="pf-section-header">
      <span className="pf-eyebrow">
        <span className="pf-eyebrow-dot" /> {eyebrow}
      </span>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

export function ProjectCard({ project, compact }) {
  return (
    <article className={`pf-project ${compact ? "compact" : ""}`}>
      <div className="pf-project-header">
        <div className={`pf-project-status ${project.status}`}>
          {project.status === "active" ? "en curso" : "finalizado"}
        </div>
        <span className="pf-project-year">{project.year}</span>
      </div>

      <h3 className="pf-project-name">{project.name}</h3>
      <p className="pf-project-tagline">{project.tagline}</p>

      {!compact && <p className="pf-project-desc">{project.description}</p>}

      <div className="pf-project-tech">
        {project.tech.map((t) => <span key={t} className="pf-tag">{t}</span>)}
      </div>

      <div className="pf-project-links">
        <a href={project.url} className="pf-project-link">
          Ver demo <ExternalLink size={11} />
        </a>
        <a href={project.repo} className="pf-project-link muted">
          Repositorio <ArrowUpRight size={11} />
        </a>
      </div>
    </article>
  );
}
