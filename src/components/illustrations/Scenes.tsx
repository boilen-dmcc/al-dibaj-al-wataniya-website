// Supporting original illustrations for About / Industries / Capabilities / HSE sections.
// All imagery is onshore/land-based by design — pumpjacks, refineries, tanks, pipelines,
// desert rigs and PPE-equipped workers. No offshore or marine elements are used anywhere.

export function PumpjackFieldScene({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 600" className={className} preserveAspectRatio="xMidYMax slice" role="img" aria-label="Onshore pumpjack field at sunset">
      <defs>
        <linearGradient id="pf-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1713" />
          <stop offset="100%" stopColor="#5c4326" />
        </linearGradient>
        <linearGradient id="pf-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#241f19" />
          <stop offset="100%" stopColor="#0c0b0a" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#pf-sky)" />
      <circle cx="620" cy="260" r="150" fill="#c29d54" opacity="0.25" />
      <circle cx="620" cy="260" r="55" fill="#e6d3a3" opacity="0.7" />
      <path d="M0,430 L800,410 L800,600 L0,600 Z" fill="url(#pf-ground)" />
      {[
        { x: 160, y: 470, s: 1.1 },
        { x: 420, y: 500, s: 0.8 },
        { x: 600, y: 480, s: 0.65 },
        { x: 280, y: 520, s: 0.5 },
      ].map((p, i) => (
        <g key={i} transform={`translate(${p.x},${p.y}) scale(${p.s})`} opacity="0.95">
          <rect x="-3" y="-46" width="6" height="46" fill="#201c17" />
          <line x1="-46" y1="-46" x2="34" y2="-58" stroke="#2c2620" strokeWidth="6" strokeLinecap="round" />
          <line x1="34" y1="-58" x2="34" y2="-10" stroke="#433a2f" strokeWidth="3" />
          <line x1="-3" y1="-46" x2="18" y2="-92" stroke="#2c2620" strokeWidth="6" />
          <line x1="-3" y1="-46" x2="-24" y2="-92" stroke="#2c2620" strokeWidth="6" />
          <line x1="18" y1="-92" x2="-24" y2="-92" stroke="#2c2620" strokeWidth="5" />
          <circle cx="-3" cy="-46" r="6" fill="#c29d54" />
        </g>
      ))}
    </svg>
  )
}

export function RefineryScene({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 600" className={className} preserveAspectRatio="xMidYMax slice" role="img" aria-label="Onshore gas processing and refinery facility">
      <defs>
        <linearGradient id="rf-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c0b0a" />
          <stop offset="100%" stopColor="#3a2c1c" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#rf-sky)" />
      <path d="M0,470 L800,460 L800,600 L0,600 Z" fill="#14120f" />
      {[90, 150, 210, 270, 330, 400, 470, 540, 610].map((x, i) => (
        <rect key={i} x={x} y={470 - (i % 3) * 40 - 60} width="16" height={(i % 3) * 40 + 130} fill="#201c17" opacity="0.95" />
      ))}
      <circle cx="270" cy="330" r="4" fill="#c29d54" className="animate-pulse-glow" />
      <path d="M270,325 C264,315 266,305 270,299 C274,305 278,313 270,325 Z" fill="#d4b876" className="animate-pulse-glow" />
      <rect x="600" y="430" width="120" height="40" fill="#0c0b0a" />
      <ellipse cx="660" cy="430" rx="60" ry="10" fill="#2c2620" />
    </svg>
  )
}

export function DesertRigScene({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 600" className={className} preserveAspectRatio="xMidYMax slice" role="img" aria-label="Land drilling rig in the desert">
      <defs>
        <linearGradient id="dr-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#231d16" />
          <stop offset="100%" stopColor="#6b5127" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#dr-sky)" />
      <path d="M0,420 Q200,390 400,415 T800,400 L800,600 L0,600 Z" fill="#14120f" />
      <g transform="translate(360,220)">
        <path d="M40,220 L0,0 L80,0 L120,220" fill="none" stroke="#201c17" strokeWidth="7" />
        <path d="M40,220 L80,0" fill="none" stroke="#201c17" strokeWidth="5" />
        <path d="M120,220 L0,0" fill="none" stroke="#201c17" strokeWidth="5" />
        {[30, 70, 110, 150, 190].map((y, i) => (
          <line key={i} x1={40 - (220 - y) * 0.2} y1={y} x2={120 + (220 - y) * -0.2} y2={y} stroke="#14120f" strokeWidth="3" />
        ))}
        <rect x="25" y="220" width="70" height="16" fill="#0c0b0a" />
      </g>
      <rect x="120" y="470" width="60" height="34" fill="#201c17" />
      <rect x="600" y="480" width="70" height="26" fill="#201c17" />
    </svg>
  )
}

export function PipelineScene({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 600" className={className} preserveAspectRatio="xMidYMax slice" role="img" aria-label="Onshore industrial pipeline infrastructure">
      <defs>
        <linearGradient id="pl-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1713" />
          <stop offset="100%" stopColor="#433a2f" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#pl-sky)" />
      <path d="M0,440 L800,430 L800,600 L0,600 Z" fill="#14120f" />
      <path d="M-20,360 C 200,320 350,380 550,340 S 820,300 900,330" stroke="#2c2620" strokeWidth="26" fill="none" />
      <path d="M-20,360 C 200,320 350,380 550,340 S 820,300 900,330" stroke="#c29d54" strokeWidth="3" fill="none" opacity="0.6" />
      {[80, 260, 440, 620].map((x, i) => (
        <rect key={i} x={x} y={370} width="10" height="70" fill="#0c0b0a" />
      ))}
    </svg>
  )
}

export function PPEWorkersScene({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 600" className={className} preserveAspectRatio="xMidYMax slice" role="img" aria-label="Workers wearing protective equipment at an onshore industrial site">
      <defs>
        <linearGradient id="ppe-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#14120f" />
          <stop offset="100%" stopColor="#3a2c1c" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#ppe-sky)" />
      <path d="M0,430 L800,420 L800,600 L0,600 Z" fill="#14120f" />
      <rect x="560" y="300" width="16" height="130" fill="#201c17" />
      <rect x="620" y="330" width="16" height="100" fill="#201c17" />
      {[
        { x: 200, s: 1 },
        { x: 300, s: 0.92 },
        { x: 400, s: 1.05 },
      ].map((p, i) => (
        <g key={i} transform={`translate(${p.x},400) scale(${p.s})`}>
          <rect x="-14" y="-90" width="28" height="60" rx="6" fill="#2c2620" />
          <circle cx="0" cy="-104" r="16" fill="#d4b876" />
          <path d="M-16,-114 Q0,-130 16,-114 L16,-108 Q0,-118 -16,-108 Z" fill="#c29d54" />
          <rect x="-12" y="-30" width="10" height="30" fill="#201c17" />
          <rect x="2" y="-30" width="10" height="30" fill="#201c17" />
        </g>
      ))}
    </svg>
  )
}
