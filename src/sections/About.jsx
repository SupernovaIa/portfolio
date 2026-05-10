import { ME, EXPERIENCE } from "../data/content";
import { SectionHeader, Reveal } from "../components/Shared";

export default function About() {
  return (
    <section className="pf-section">
      <SectionHeader
        eyebrow="03 / sobre mí"
        title="Quién hay detrás"
        subtitle="Un poco de contexto sobre cómo llegué aquí y a dónde voy."
      />

      <div className="pf-about-grid">
        <div className="pf-about-bio">
          {ME.longBio.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <div className="pf-about-side">
          <h3 className="pf-side-title">Trayectoria</h3>
          <ol className="pf-timeline">
            {EXPERIENCE.map((e, i) => (
              <Reveal as="li" key={i} delay={i} className="pf-timeline-item">
                <div className="pf-timeline-marker">
                  <span className="pf-timeline-dot" />
                  {i < EXPERIENCE.length - 1 && <span className="pf-timeline-line" />}
                </div>
                <div className="pf-timeline-content">
                  <span className="pf-timeline-period">{e.period}</span>
                  <h4>{e.role}</h4>
                  <span className="pf-timeline-company">{e.company}</span>
                  <p>{e.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
