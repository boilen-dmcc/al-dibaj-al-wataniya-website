// Original, hand-built SVG illustration of a land-based (onshore) oil & gas field at dusk:
// pumpjacks, a refinery/processing stack cluster, storage tanks and a pipeline run,
// silhouetted against a desert horizon. No offshore/marine elements per brand guidelines.
export default function HeroScene({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      role="img"
      aria-label="Onshore oil field with pumpjacks and refinery towers at dusk, representing ADW's land-based oil and gas operations"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c0b0a" />
          <stop offset="42%" stopColor="#1a1713" />
          <stop offset="72%" stopColor="#3a2c1c" />
          <stop offset="100%" stopColor="#5c4326" />
        </linearGradient>
        <radialGradient id="sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e6d3a3" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#c29d54" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#c29d54" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#241f19" />
          <stop offset="100%" stopColor="#0c0b0a" />
        </linearGradient>
        <linearGradient id="rig-metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2c2620" />
          <stop offset="100%" stopColor="#0c0b0a" />
        </linearGradient>
      </defs>

      <rect width="1600" height="900" fill="url(#sky)" />
      <circle cx="1180" cy="430" r="260" fill="url(#sun)" />
      <circle cx="1180" cy="430" r="70" fill="#f2e7cf" opacity="0.85" />

      {/* distant hills */}
      <path d="M0,560 L120,540 L260,565 L420,530 L600,558 L800,520 L1000,555 L1220,525 L1400,552 L1600,530 L1600,900 L0,900 Z" fill="#14120f" opacity="0.9" />

      {/* ground */}
      <path d="M0,620 L1600,600 L1600,900 L0,900 Z" fill="url(#ground)" />

      {/* pipeline running across the field */}
      <path d="M-20,690 C 300,660 500,700 800,675 S 1300,650 1620,680" stroke="#433a2f" strokeWidth="10" fill="none" opacity="0.8" />
      <path d="M-20,690 C 300,660 500,700 800,675 S 1300,650 1620,680" stroke="#c29d54" strokeWidth="2" fill="none" opacity="0.5" />
      {/* pipe support posts */}
      {[150, 420, 690, 960, 1230, 1480].map((x, i) => (
        <rect key={i} x={x} y={678} width="6" height="22" fill="#201c17" opacity="0.85" />
      ))}

      {/* storage tanks cluster (right side) */}
      <g opacity="0.92">
        <ellipse cx="1330" cy="640" rx="70" ry="14" fill="#0c0b0a" />
        <rect x="1260" y="560" width="140" height="80" fill="url(#rig-metal)" />
        <ellipse cx="1330" cy="560" rx="70" ry="12" fill="#2c2620" />
        <rect x="1325" y="520" width="10" height="40" fill="#201c17" />
        <ellipse cx="1470" cy="650" rx="55" ry="11" fill="#0c0b0a" />
        <rect x="1415" y="590" width="110" height="60" fill="url(#rig-metal)" />
        <ellipse cx="1470" cy="590" rx="55" ry="10" fill="#2c2620" />
      </g>

      {/* refinery / processing towers cluster (mid-left) */}
      <g opacity="0.95">
        <rect x="180" y="470" width="14" height="150" fill="url(#rig-metal)" />
        <rect x="210" y="430" width="14" height="190" fill="url(#rig-metal)" />
        <rect x="240" y="500" width="14" height="120" fill="url(#rig-metal)" />
        <rect x="150" y="560" width="140" height="60" fill="#14120f" />
        <circle cx="224" cy="420" r="5" fill="#c29d54" className="animate-pulse-glow" />
        <line x1="224" y1="425" x2="224" y2="380" stroke="#433a2f" strokeWidth="3" />
        {/* flare stack flame */}
        <path d="M224,378 C 218,368 220,358 224,352 C 228,358 232,366 224,378 Z" fill="#d4b876" className="animate-pulse-glow" />
      </g>

      {/* drilling derrick */}
      <g transform="translate(720,430)" opacity="0.95">
        <path d="M40,190 L0,0 L80,0 L120,190" fill="none" stroke="#2c2620" strokeWidth="6" />
        <path d="M40,190 L80,0" fill="none" stroke="#2c2620" strokeWidth="4" />
        <path d="M120,190 L0,0" fill="none" stroke="#2c2620" strokeWidth="4" />
        {[30, 65, 100, 135, 170].map((y, i) => (
          <line key={i} x1={40 - (190 - y) * 0.21} y1={y} x2={120 + (190 - y) * -0.21} y2={y} stroke="#201c17" strokeWidth="3" />
        ))}
        <rect x="30" y="190" width="60" height="14" fill="#14120f" />
      </g>

      {/* pumpjacks silhouettes at varying scale for depth */}
      {[
        { x: 420, y: 690, s: 1.05 },
        { x: 980, y: 700, s: 0.85 },
        { x: 1120, y: 715, s: 0.62 },
        { x: 60, y: 705, s: 0.7 },
      ].map((p, i) => (
        <g key={i} transform={`translate(${p.x},${p.y}) scale(${p.s})`} opacity="0.96">
          {/* base */}
          <rect x="-6" y="0" width="12" height="4" fill="#0c0b0a" />
          <rect x="-3" y="-46" width="6" height="46" fill="#201c17" />
          {/* sampson post + walking beam pivot */}
          <g className="animate-float-slow" style={{ transformOrigin: '-3px -46px' }}>
            <rect x="-3" y="-46" width="6" height="46" fill="#201c17" />
            <line x1="-46" y1="-46" x2="34" y2="-58" stroke="#2c2620" strokeWidth="6" strokeLinecap="round" />
            <line x1="-46" y1="-46" x2="-58" y2="-30" stroke="#2c2620" strokeWidth="4" />
            <line x1="-46" y1="-46" x2="-70" y2="-46" stroke="#433a2f" strokeWidth="3" />
            <line x1="34" y1="-58" x2="34" y2="-10" stroke="#433a2f" strokeWidth="3" />
          </g>
          <line x1="-3" y1="-46" x2="18" y2="-92" stroke="#2c2620" strokeWidth="6" />
          <line x1="-3" y1="-46" x2="-24" y2="-92" stroke="#2c2620" strokeWidth="6" />
          <line x1="18" y1="-92" x2="-24" y2="-92" stroke="#2c2620" strokeWidth="5" />
          <circle cx="-3" cy="-46" r="6" fill="#c29d54" opacity="0.8" />
        </g>
      ))}

      {/* foreground vignette */}
      <rect x="0" y="0" width="1600" height="900" fill="url(#ground)" opacity="0" />
    </svg>
  )
}
