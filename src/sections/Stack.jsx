import { useState, useMemo } from "react";
import { STACK_ITEMS } from "../data/content";
import { VIEW, CENTER, RING_RADII, ROTATION_SPEEDS, STATUS_COLORS } from "../data/config";
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
        radius: p.ring === 0 ? 42 : 30,
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
        title="Mi sistema solar técnico"
        subtitle="Las herramientas con las que construyo sistemas de IA a diario. Pasa el ratón sobre cada planeta."
      />

      <div className="pf-stack-wrapper">
        <div className="pf-stack-canvas">
          <svg viewBox={`0 0 ${VIEW} ${VIEW}`} className="pf-stack-svg">
            <defs>
              <radialGradient id="sg-bg" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#0a1628" />
                <stop offset="100%" stopColor="#020617" />
              </radialGradient>
              <filter id="sg-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="sg-strong" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="8" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect width={VIEW} height={VIEW} fill="url(#sg-bg)" />

            <g opacity="0.6">
              {Array.from({ length: 80 }).map((_, i) => {
                const cx = (i * 137.5) % VIEW;
                const cy = (i * 73.3) % VIEW;
                return <circle key={i} cx={cx} cy={cy} r={(i % 3) * 0.4 + 0.4} fill="#64748b" opacity={0.4} />;
              })}
            </g>

            {[1, 2, 3].map((ring, i) => (
              <circle
                key={ring}
                cx={CENTER} cy={CENTER}
                r={RING_RADII[ring]}
                fill="none" stroke="#22d3ee"
                strokeWidth={i === 0 ? 1.5 : 0.7}
                strokeOpacity={i === 0 ? 0.55 : 0.25}
                filter="url(#sg-glow)"
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
              <div className={`pf-stack-detail-status ${detail.status}`}>
                {detail.status === "completed" ? "domino" : detail.status === "active" ? "aprendiendo" : "tocado"}
              </div>
              <h4>{detail.name}</h4>
              <p>{detail.description}</p>
            </div>
          )}
        </div>

        <aside className="pf-stack-legend">
          <h4>Leyenda</h4>
          <div className="pf-stack-legend-item">
            <span className="dot" style={{ background: STATUS_COLORS.completed.glow, boxShadow: `0 0 8px ${STATUS_COLORS.completed.glow}` }} />
            <div>
              <strong>Domino</strong>
              <span>Lo uso a diario para construir en producción</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function StackNode({ node, counterSpeed, hovered, selected, onHoverIn, onHoverOut, onClick }) {
  const c = STATUS_COLORS[node.status];
  const isActive = hovered || selected;
  const r = isActive ? node.radius * 1.15 : node.radius;
  const counterRotate = counterSpeed > 0
    ? { animation: `spin-reverse ${counterSpeed}s linear infinite`, transformOrigin: `${node.x}px ${node.y}px` }
    : {};

  return (
    <g onMouseEnter={onHoverIn} onMouseLeave={onHoverOut} onClick={onClick} style={{ cursor: "pointer" }}>
      <g style={counterRotate}>
        {isActive && (
          <circle cx={node.x} cy={node.y} r={r + 10} fill="none"
            stroke={c.glow} strokeWidth="1" opacity="0.5" filter="url(#sg-strong)" />
        )}
        <circle
          cx={node.x} cy={node.y} r={r}
          fill={c.fill} stroke={c.stroke}
          strokeWidth={isActive || node.status === "active" ? 2.5 : 1.5}
          filter={isActive || node.status === "active" ? "url(#sg-strong)" : "url(#sg-glow)"}
          style={{ transition: "r 0.2s ease" }}
        />
        <text x={node.x} y={node.y} textAnchor="middle" dominantBaseline="middle"
          fill={c.text} fontSize={node.ring === 0 ? 14 : 11}
          fontFamily="'JetBrains Mono', monospace"
          fontWeight={node.ring === 0 ? 600 : 500}
          style={{ pointerEvents: "none", userSelect: "none" }}>
          {node.name}
        </text>
      </g>
    </g>
  );
}
