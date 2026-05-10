import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

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

export function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const { ref, shown } = useReveal();
  const style = delay ? { "--reveal-delay": delay } : undefined;
  return (
    <Tag
      ref={ref}
      className={`pf-reveal ${shown ? "in" : ""} ${className}`.trim()}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function ProjectCard({ project, compact, revealDelay }) {
  const { ref, shown } = useReveal();
  const style = revealDelay ? { "--reveal-delay": revealDelay } : undefined;
  return (
    <article
      ref={ref}
      style={style}
      className={`pf-project pf-reveal ${shown ? "in" : ""} ${compact ? "compact" : ""}`}
    >
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
