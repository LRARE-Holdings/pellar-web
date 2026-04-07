"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface HeroRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function HeroReveal({ children, delay = 0, className = "" }: HeroRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      return;
    }

    const timeout = setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(32px)",
        transition:
          "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}
