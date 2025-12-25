'use client';

import { useEffect, useState } from 'react';
import Lenis from 'lenis';

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Disable Lenis on mobile/touch devices - it breaks native scrolling
    const isMobile = window.matchMedia('(max-width: 768px)').matches ||
                     'ontouchstart' in window ||
                     navigator.maxTouchPoints > 0;

    if (isMobile) {
      return; // Don't initialize Lenis on mobile
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}