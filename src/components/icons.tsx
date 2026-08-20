type IconProps = { className?: string }

const base = 'w-7 h-7'

export const IconDerrick = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M20 40 L14 8 L24 4 L34 8 L28 40" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M16 30 L32 30 M15 22 L33 22 M17 14 L31 14" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 40 H38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const IconContract = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="10" y="6" width="28" height="36" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M16 16 H32 M16 24 H32 M16 32 H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const IconSupply = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M6 16 L24 6 L42 16 L24 26 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M6 16 V32 L24 42 L42 32 V16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M24 26 V42" stroke="currentColor" strokeWidth="2" />
  </svg>
)

export const IconTrade = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M8 18 L18 8 M8 18 H20 M8 18 V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M40 30 L30 40 M40 30 H28 M40 30 V42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconEnergy = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M26 4 L12 26 H22 L20 44 L38 20 H26 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
)

export const IconProject = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
    <path d="M24 14 V24 L31 29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const IconShield = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M24 5 L40 12 V22 C40 33 33 40 24 43 C15 40 8 33 8 22 V12 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M17 24 L22 29 L32 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconReliable = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="2" />
    <path d="M16 24 L21 29 L32 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconQuality = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M24 6 L29 18 L42 19 L32 27 L35 40 L24 33 L13 40 L16 27 L6 19 L19 18 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
)

export const IconPartnership = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
    <circle cx="32" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
    <path d="M6 40 C6 32 10 27 16 27 C22 27 26 32 26 40" stroke="currentColor" strokeWidth="2" />
    <path d="M22 40 C22 32 26 27 32 27 C38 27 42 32 42 40" stroke="currentColor" strokeWidth="2" />
  </svg>
)

export const IconApproach = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="6" y="10" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M6 18 H42 M14 26 H22 M14 32 H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const IconIndustry = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M6 42 V22 L18 30 V22 L30 30 V22 L42 30 V42 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M6 42 H42" stroke="currentColor" strokeWidth="2" />
  </svg>
)

export const IconLeaf = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M12 40 C10 24 20 8 40 8 C40 28 26 40 12 40 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M12 40 C18 30 26 22 38 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const IconAlert = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M24 6 L44 40 H4 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M24 20 V30" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="24" cy="35" r="1.6" fill="currentColor" />
  </svg>
)

export const IconPhone = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
)

export const IconMail = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3 7 L12 13 L21 7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
)

export const IconGlobe = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3 12 H21 M12 3 C15 6.5 15 17.5 12 21 C9 17.5 9 6.5 12 3Z" stroke="currentColor" strokeWidth="1.6" />
  </svg>
)

export const IconPin = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 22 C12 22 19 14.6 19 9.5 C19 5.4 15.9 2 12 2 C8.1 2 5 5.4 5 9.5 C5 14.6 12 22 12 22Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="12" cy="9.5" r="2.6" stroke="currentColor" strokeWidth="1.6" />
  </svg>
)

export const IconArrowRight = ({ className = 'w-4 h-4' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M5 12 H19 M13 6 L19 12 L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconMenu = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 7 H20 M4 12 H20 M4 17 H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const IconClose = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 6 L18 18 M18 6 L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)
