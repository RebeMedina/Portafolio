// Small line-icon set (no external icon library needed).
// Every icon takes a `size` prop and inherits color via currentColor,
// so it always matches the surrounding text color.

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function CodeIcon({ size = 22, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <polyline points="8 6 2 12 8 18" />
      <polyline points="16 6 22 12 16 18" />
    </svg>
  )
}

export function DatabaseIcon({ size = 22, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <ellipse cx="12" cy="5.5" rx="8" ry="3.2" />
      <path d="M4 5.5v6.2c0 1.77 3.58 3.2 8 3.2s8-1.43 8-3.2V5.5" />
      <path d="M4 11.7v6.2c0 1.77 3.58 3.2 8 3.2s8-1.43 8-3.2v-6.2" />
    </svg>
  )
}

export function PaletteIcon({ size = 22, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-.95-.5-1.3-.3-.35-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.3A4.2 4.2 0 0 0 21 10.2C21 6.2 16.97 3 12 3Z" />
      <circle cx="7.2" cy="12.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="9" cy="8.2" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="7.3" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function BotIcon({ size = 22, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <rect x="4" y="9" width="16" height="11" rx="3" />
      <path d="M12 9V5" />
      <circle cx="12" cy="3.5" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="9" cy="14.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14.5" r="1.2" fill="currentColor" stroke="none" />
      <path d="M2 13h2M20 13h2" />
    </svg>
  )
}

export function WrenchIcon({ size = 22, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.8-2.8Z" />
    </svg>
  )
}

export function UsersIcon({ size = 22, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.8 19c.6-3.2 3.1-5.2 6.2-5.2s5.6 2 6.2 5.2" />
      <path d="M16 8.2a3 3 0 1 1 3.2 3" />
      <path d="M21.2 19c-.4-2.1-1.6-3.8-3.4-4.7" />
    </svg>
  )
}

export function GlobeIcon({ size = 22, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.5 4 5.6 4 9s-1.4 6.5-4 9c-2.6-2.5-4-5.6-4-9s1.4-6.5 4-9Z" />
    </svg>
  )
}

export function AwardIcon({ size = 22, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <circle cx="12" cy="8.5" r="5.5" />
      <path d="M8.3 13.2 6.5 21l5.5-3 5.5 3-1.8-7.8" />
    </svg>
  )
}

export function MailIcon({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 6 9 6.5L21 6" />
    </svg>
  )
}

export function PhoneIcon({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M5 4h3.2l1.3 4.4-2.1 1.7a12.5 12.5 0 0 0 6.5 6.5l1.7-2.1 4.4 1.3V19a2 2 0 0 1-2.2 2A16.7 16.7 0 0 1 3 5.2 2 2 0 0 1 5 4Z" />
    </svg>
  )
}

export function LinkedinIcon({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.3 16.5V10" />
      <path d="M11.3 12.8c0-1.5 1.1-2.8 2.6-2.8 1.6 0 2.6 1 2.6 2.9v3.6" />
    </svg>
  )
}

export function GithubIcon({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} fill="currentColor" stroke="none">
      <path d="M12 2.2c-5.5 0-10 4.5-10 10 0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.6-1.4-2.3-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5 3.9-1.3 6.8-5.1 6.8-9.5 0-5.5-4.5-10-10-10Z" />
    </svg>
  )
}
