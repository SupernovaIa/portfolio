import { useState, useMemo } from "react";
import { STACK_ITEMS } from "../data/content";
import { VIEW, CENTER, RING_RADII, ROTATION_SPEEDS, RING_COLORS, RING_LABELS } from "../data/config";
import { SectionHeader } from "../components/Shared";

export default function Stack() {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  const nodes = useMemo(() => {
    return STACK_ITEMS.map((p) => {
      const r = RING_RADII[p.ring];
      const rad = (p.angle * Math.PI) / 180;
      return {
        ...p,
        x: CENTER + r * Math.cos(rad),
        y: CENTER + r * Math.sin(rad),
        radius: p.ring === 0 ? 46 : 34,
      };
    });
  }, []);

  const detail = selected
    ? nodes.find((n) => n.id === selected)
    : hovered
    ? nodes.find((n) => n.id === hovered)
    : null;

  return (
    <section className="pf-section">
      <SectionHeader
        eyebrow="02 / stack"
        title={<>Mi sistema solar <em>técnico</em></>}
        subtitle="Las herramientas con las que construyo sistemas de IA a diario. Pasa el ratón sobre cada planeta."
      />

      <div className="pf-stack-wrapper">
        <div className="pf-stack-canvas">
          <svg viewBox={`0 0 ${VIEW} ${VIEW}`} className="pf-stack-svg">
            {[1, 2, 3].map((ring) => (
              <circle
                key={ring}
                cx={CENTER} cy={CENTER}
                r={RING_RADII[ring]}
                fill="none" stroke="var(--line-2)"
                strokeWidth="1.2"
                strokeDasharray={ring === 3 ? "5 6" : undefined}
              />
            ))}

            {[1, 2, 3].map((ring) => {
              const ringNodes = nodes.filter((n) => n.ring === ring);
              return (
                <g
                  key={ring}
                  className="pf-stack-ring"
                  style={{
                    transformOrigin: `${CENTER}px ${CENTER}px`,
                    animation: `spin ${ROTATION_SPEEDS[ring]}s linear infinite`,
                  }}
                >
                  {ringNodes.map((n) => (
                    <StackNode
                      key={n.id} node={n}
                      counterSpeed={ROTATION_SPEEDS[ring]}
                      hovered={hovered === n.id}
                      selected={selected === n.id}
                      onHoverIn={() => setHovered(n.id)}
                      onHoverOut={() => setHovered(null)}
                      onClick={() => setSelected((s) => (s === n.id ? null : n.id))}
                    />
                  ))}
                </g>
              );
            })}

            {nodes.filter((n) => n.ring === 0).map((n) => (
              <StackNode
                key={n.id} node={n} counterSpeed={0}
                hovered={hovered === n.id}
                selected={selected === n.id}
                onHoverIn={() => setHovered(n.id)}
                onHoverOut={() => setHovered(null)}
                onClick={() => setSelected((s) => (s === n.id ? null : n.id))}
              />
            ))}
          </svg>

          {detail && (
            <div className="pf-stack-detail">
              <div className="pf-stack-detail-status">{RING_LABELS[detail.ring].title}</div>
              <h4>{detail.name}</h4>
              <p>{detail.description}</p>
            </div>
          )}
        </div>

        <aside className="pf-stack-legend">
          <h4>Leyenda</h4>
          {RING_LABELS.map((l, ring) => (
            <div key={l.title} className="pf-stack-legend-item">
              <span
                className={`dot ring-${ring}`}
                style={ring === 0 ? { background: "var(--seam)", borderColor: "var(--seam)" } : undefined}
              />
              <div>
                <strong>{l.title}</strong>
                <span>{l.hint}</span>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}

function StackNode({ node, counterSpeed, hovered, selected, onHoverIn, onHoverOut, onClick }) {
  const c = RING_COLORS[node.ring];
  const isActive = hovered || selected;
  const r = isActive ? node.radius * 1.12 : node.radius;
  const counterRotate = counterSpeed > 0
    ? { animation: `spin-reverse ${counterSpeed}s linear infinite`, transformOrigin: `${node.x}px ${node.y}px` }
    : {};

  return (
    <g onMouseEnter={onHoverIn} onMouseLeave={onHoverOut} onClick={onClick} style={{ cursor: "pointer" }}>
      <g style={counterRotate}>
        {isActive && (
          <circle cx={node.x} cy={node.y} r={r + 8} fill="none"
            stroke={c.stroke} strokeWidth="6" strokeOpacity="0.18" />
        )}
        <circle
          cx={node.x} cy={node.y} r={r}
          fill={isActive && node.ring > 0 ? "var(--surface-2)" : c.fill}
          stroke={c.stroke}
          strokeWidth={isActive ? 2.5 : 1.5}
          style={{ transition: "r 0.3s var(--spring)" }}
        />
        <text x={node.x} y={node.y} textAnchor="middle" dominantBaseline="middle"
          fill={c.text} fontSize={node.ring === 0 ? 15 : node.name.length > 9 ? 10.5 : 12}
          fontFamily="var(--f-mono)"
          fontWeight={500}
          style={{ pointerEvents: "none", userSelect: "none" }}>
          {node.name}
        </text>
      </g>
    </g>
  );
}
