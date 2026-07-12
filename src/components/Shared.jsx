import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const STATUS_LABELS = {
  active: "en curso",
  completed: "finalizado",
  locked: "investigación",
  available: "disponible",
};

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
          {STATUS_LABELS[project.status] ?? "finalizado"}
        </div>
        <span className="pf-project-year">{project.year}</span>
      </div>

      <h3 className="pf-project-name">{project.name}</h3>
      <p className="pf-project-tagline">{project.tagline}</p>

      {!compact && <p className="pf-project-desc">{project.description}</p>}

      <div className="pf-project-tech">
        {project.tech.map((t) => <span key={t} className="pf-tag">{t}</span>)}
      </div>

      {(project.url || project.repo) && (
        <div className="pf-project-links">
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="pf-project-link">
              Ver demo <ExternalLink size={11} />
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="pf-project-link muted">
              Repositorio <ArrowUpRight size={11} />
            </a>
          )}
        </div>
      )}
    </article>
  );
}
