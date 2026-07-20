type IconProps = {
  className?: string;
};

export function IconBook({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 5.5C4 4.67 4.67 4 5.5 4H11v16H5.5C4.67 20 4 19.33 4 18.5V5.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M20 5.5C20 4.67 19.33 4 18.5 4H13v16h5.5c.83 0 1.5-.67 1.5-1.5V5.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function IconClipboard({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="5"
        y="4"
        width="14"
        height="17"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M9 4.5h6V7H9V4.5Z" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 11h8M8 15h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconMic({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="9"
        y="3"
        width="6"
        height="11"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M6 11a6 6 0 0 0 12 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 17v4M9 21h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconBuilding({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 20h16M6 20V7l6-3 6 3v13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M10 10h1.5M12.5 10H14M10 14h1.5M12.5 14H14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconChart({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 19h16M7 16V11M12 16V7M17 16v-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconGlobe({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4.5 12h15M12 4c2.2 2.4 3.3 5 3.3 8s-1.1 5.6-3.3 8c-2.2-2.4-3.3-5-3.3-8s1.1-5.6 3.3-8Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function IconTarget({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function IconPen({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M14.5 4.5 19.5 9.5 9 20H4v-5L14.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconRefresh({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M20 12a8 8 0 1 1-2.2-5.5M20 5v5h-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconNewspaper({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M7 9h4v4H7V9ZM13 9h4M13 12h4M7 16h10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconMail({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconPhone({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M8 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5L17 12l4 1.5V17a2 2 0 0 1-2 2A14 14 0 0 1 5 5a2 2 0 0 1 3-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCalendar({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="4"
        y="5"
        width="16"
        height="15"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8 3v4M16 3v4M4 10h16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconArrow({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconUsers({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.5 19c.8-2.8 2.8-4.2 5.5-4.2S13.7 16.2 14.5 19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="17" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M15.2 19c.5-1.8 1.7-2.8 3.5-2.8 1.2 0 2.2.4 2.8 1.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconBriefcase({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="3"
        y="7"
        width="18"
        height="13"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12h18"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function IconCompass({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m14.8 9.2-1.4 4.2-4.2 1.4 1.4-4.2 4.2-1.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCheck({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m8.5 12.2 2.4 2.4 4.6-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSearch({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m16 16 3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconLayers({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="m4 8 8-4 8 4-8 4-8-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m4 12 8 4 8-4M4 16l8 4 8-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconHelp({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M9.8 9.4a2.4 2.4 0 1 1 3.5 2.1c-.7.4-1.3.9-1.3 1.7V14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}
