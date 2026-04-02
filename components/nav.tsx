"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToSection(id: string) {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav
      aria-label="Main"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-xl py-4 shadow-[0_1px_0_rgba(0,0,0,0.05)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="group">
          <span className="font-outfit text-[15px] font-light tracking-[0.35em] text-ink uppercase">
            PELLAR
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          <button
            onClick={() => scrollToSection("services")}
            className="font-dm text-sm text-stone hover:text-ink transition-colors duration-300 cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="font-dm text-sm text-stone hover:text-ink transition-colors duration-300 cursor-pointer"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="font-dm text-sm text-stone hover:text-ink transition-colors duration-300 cursor-pointer"
          >
            About
          </button>
          <a
            href="mailto:hello@pellar.co.uk"
            className="font-dm text-sm text-forest hover:text-sage transition-colors duration-300"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-ink p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-px bg-ink transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`block h-px bg-ink transition-all duration-300 ${
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
        <div className="px-6 pt-6 pb-8 flex flex-col gap-5 bg-cream/95 backdrop-blur-xl">
          <button
            onClick={() => scrollToSection("services")}
            className="font-dm text-base text-stone hover:text-ink transition-colors min-h-[44px] flex items-center cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="font-dm text-base text-stone hover:text-ink transition-colors min-h-[44px] flex items-center cursor-pointer"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="font-dm text-base text-stone hover:text-ink transition-colors min-h-[44px] flex items-center cursor-pointer"
          >
            About
          </button>
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
