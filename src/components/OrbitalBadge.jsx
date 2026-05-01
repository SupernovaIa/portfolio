export default function OrbitalBadge() {
  return (
    <svg viewBox="0 0 400 400" className="pf-orbital">
      <defs>
        <radialGradient id="badgeBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0a1628" />
          <stop offset="100%" stopColor="#020617" stopOpacity="0" />
        </radialGradient>
        <filter id="badgeGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="200" cy="200" r="200" fill="url(#badgeBg)" />

      <circle cx="200" cy="200" r="80" fill="none" stroke="#22d3ee" strokeOpacity="0.6" strokeWidth="1.5" filter="url(#badgeGlow)" />
      <circle cx="200" cy="200" r="130" fill="none" stroke="#22d3ee" strokeOpacity="0.3" strokeWidth="0.8" filter="url(#badgeGlow)" />
      <circle cx="200" cy="200" r="175" fill="none" stroke="#22d3ee" strokeOpacity="0.18" strokeWidth="0.5" />

      <circle cx="200" cy="200" r="42" fill="#0891b2" stroke="#67e8f9" strokeWidth="2" filter="url(#badgeGlow)" />
      <text x="200" y="200" textAnchor="middle" dominantBaseline="middle"
        fill="#ffffff" fontSize="13" fontFamily="JetBrains Mono, monospace" fontWeight="600">
        DEV
      </text>

      <g style={{ transformOrigin: "200px 200px", animation: "spin 32s linear infinite" }}>
        <circle cx="280" cy="200" r="8" fill="#0a3a4a" stroke="#22d3ee" strokeWidth="1.5" filter="url(#badgeGlow)" />
      </g>
      <g style={{ transformOrigin: "200px 200px", animation: "spin 56s linear infinite reverse" }}>
        <circle cx="200" cy="70" r="10" fill="#0a3a4a" stroke="#22d3ee" strokeWidth="1.5" filter="url(#badgeGlow)" />
      </g>
      <g style={{ transformOrigin: "200px 200px", animation: "spin 80s linear infinite" }}>
        <circle cx="375" cy="200" r="6" fill="#0a3a4a" stroke="#22d3ee" strokeWidth="1.2" filter="url(#badgeGlow)" />
      </g>

      {Array.from({ length: 30 }).map((_, i) => {
        const cx = (i * 137.5) % 400;
        const cy = (i * 73.3) % 400;
        return <circle key={i} cx={cx} cy={cy} r={(i % 3) * 0.4 + 0.4} fill="#64748b" opacity="0.5" />;
      })}
    </svg>
  );
}
