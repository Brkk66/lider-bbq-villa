'use client';

interface DishBackgroundProps {
  variant: 'lider' | 'steak' | 'beyti' | 'iskender' | 'adana';
}

export function DishBackground({ variant }: DishBackgroundProps) {
  const patterns = {
    lider: (
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <pattern id="lider-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="2" fill="currentColor" />
          <circle cx="10" cy="10" r="1" fill="currentColor" />
          <circle cx="50" cy="50" r="1" fill="currentColor" />
          <path d="M20,30 L40,30" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#lider-pattern)" />
      </svg>
    ),
    steak: (
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <pattern id="steak-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="20" height="20" fill="currentColor" opacity="0.1" />
          <rect x="20" y="20" width="20" height="20" fill="currentColor" opacity="0.1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#steak-pattern)" />
      </svg>
    ),
    beyti: (
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <pattern id="beyti-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="40" cy="40" r="10" fill="none" stroke="currentColor" strokeWidth="0.2" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#beyti-pattern)" />
      </svg>
    ),
    iskender: (
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <pattern id="iskender-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <polygon points="30,10 40,30 30,50 20,30" fill="currentColor" opacity="0.1" />
          <line x1="0" y1="30" x2="60" y2="30" stroke="currentColor" strokeWidth="0.3" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#iskender-pattern)" />
      </svg>
    ),
    adana: (
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <pattern id="adana-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M25,10 Q35,25 25,40 Q15,25 25,10" fill="currentColor" opacity="0.15" />
          <circle cx="25" cy="25" r="2" fill="currentColor" opacity="0.3" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#adana-pattern)" />
      </svg>
    )
  };

  return patterns[variant] || null;
}