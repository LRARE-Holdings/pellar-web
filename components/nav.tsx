"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/forma", label: "Forma" },
  { href: "/receipt", label: "Receipt" },
  { href: "/noodle", label: "Noodle" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-xl py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="group">
          <span className="font-outfit text-[15px] font-light tracking-[0.35em] text-off-white uppercase">
            PELLAR
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`font-dm text-sm transition-colors duration-300 ${
                pathname === link.href
                  ? "text-off-white"
                  : "text-stone hover:text-off-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:hello@pellar.co.uk"
            className="font-dm text-sm text-forest hover:text-sage transition-colors duration-300"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-off-white p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-px bg-off-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`block h-px bg-off-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="px-6 pt-6 pb-8 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`font-dm text-base transition-colors min-h-[44px] flex items-center ${
                pathname === link.href
                  ? "text-off-white"
                  : "text-stone hover:text-off-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:hello@pellar.co.uk"
            className="font-dm text-base text-forest hover:text-sage transition-colors min-h-[44px] flex items-center"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
