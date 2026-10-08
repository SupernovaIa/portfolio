export default function OrbitalBadge() {
  return (
    <svg viewBox="0 0 400 400" className="pf-orbital" role="img" aria-label="Diagrama orbital">
      <circle cx="200" cy="200" r="80"  fill="none" stroke="var(--teal)" strokeOpacity="0.6" strokeWidth="1.5" />
      <circle cx="200" cy="200" r="130" fill="none" stroke="var(--teal)" strokeOpacity="0.3" strokeWidth="0.8" />
      <circle cx="200" cy="200" r="175" fill="none" stroke="var(--teal)" strokeOpacity="0.18" strokeWidth="0.6" strokeDasharray="4 5" />

      <circle cx="200" cy="200" r="104" fill="var(--teal-soft)" opacity="0.6" />
      <circle cx="200" cy="200" r="42" fill="var(--seam)" />
      <text x="200" y="201" textAnchor="middle" dominantBaseline="middle"
        fill="var(--on-seam)" fontSize="15" fontFamily="var(--f-mono)" fontWeight="500" letterSpacing="1.5">
        AI
      </text>

      <g style={{ transformOrigin: "200px 200px", animation: "spin 32s linear infinite" }}>
        <circle cx="280" cy="200" r="8" fill="var(--surface)" stroke="var(--teal)" strokeWidth="1.5" />
        <circle cx="280" cy="200" r="3" fill="var(--teal)" />
      </g>
      <g style={{ transformOrigin: "200px 200px", animation: "spin 56s linear infinite reverse" }}>
        <circle cx="200" cy="70" r="10" fill="var(--surface)" stroke="var(--indigo)" strokeWidth="1.5" />
        <circle cx="200" cy="70" r="3.5" fill="var(--indigo)" />
      </g>
      <g style={{ transformOrigin: "200px 200px", animation: "spin 80s linear infinite" }}>
        <circle cx="375" cy="200" r="7" fill="var(--surface)" stroke="var(--amber)" strokeWidth="1.5" strokeDasharray="2.5 2" />
      </g>
    </svg>
  );
}
