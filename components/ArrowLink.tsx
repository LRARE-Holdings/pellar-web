import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

interface ArrowLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function ArrowLink({ href, children, external, className = "" }: ArrowLinkProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`cta-link ${className}`}
      >
        <span>{children}</span>
        <Arrow />
      </a>
    );
  }

  const props: ComponentProps<typeof Link> = {
    href,
    className: `cta-link ${className}`,
  };

  return (
    <Link {...props}>
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}
