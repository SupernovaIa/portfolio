import { useState } from "react";
import { PROJECTS } from "../data/content";
import { SectionHeader, ProjectCard } from "../components/Shared";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.status === filter);

  const filters = [
    { id: "all",       label: "Todos",       count: PROJECTS.length },
    { id: "active",    label: "En curso",    count: PROJECTS.filter((p) => p.status === "active").length },
    { id: "completed", label: "Finalizados", count: PROJECTS.filter((p) => p.status === "completed").length },
  ];

  return (
    <section className="pf-section">
      <SectionHeader
        eyebrow="01 / proyectos"
        title="Cosas que he construido"
        subtitle="Una selección de lo que tengo público. Desde herramientas internas hasta experimentos."
      />

      <div className="pf-filters">
        {filters.map((f) => (
          <button
            key={f.id}
            className={`pf-filter ${filter === f.id ? "active" : ""}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label} <span className="pf-filter-count">{f.count}</span>
          </button>
        ))}
      </div>

      <div className="pf-projects-grid">
        {filtered.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}
