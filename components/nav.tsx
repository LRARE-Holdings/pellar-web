"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      aria-label="Main"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-bg/90 backdrop-blur-xl py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="group">
          <span className="font-outfit text-[15px] font-light tracking-[0.35em] text-fg uppercase">
            PELLAR
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-satoshi text-sm transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-fg"
                  : "text-fg-muted hover:text-fg"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-satoshi text-sm text-forest hover:text-sage transition-colors duration-300"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-fg p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-px bg-fg transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`block h-px bg-fg transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="px-6 pt-6 pb-8 flex flex-col gap-5 bg-bg/95 backdrop-blur-xl">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`font-satoshi text-base transition-colors min-h-[44px] flex items-center ${
                isActive(link.href)
                  ? "text-fg"
                  : "text-fg-muted hover:text-fg"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="font-satoshi text-base text-forest hover:text-sage transition-colors min-h-[44px] flex items-center"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
