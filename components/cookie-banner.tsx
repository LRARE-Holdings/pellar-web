"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "pellar_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "dismissed");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-[9998] p-4 md:p-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-bg/95 backdrop-blur-xl border border-border shadow-sm p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <p className="font-dm text-sm text-fg-muted flex-1">
            This site uses only essential cookies required for it to function. No tracking, no analytics.{" "}
            <Link
              href="/cookies"
              className="text-forest hover:text-sage transition-colors duration-300 underline underline-offset-2"
            >
              Learn more
            </Link>
          </p>
          <button
            onClick={dismiss}
            className="font-dm text-sm text-fg bg-surface hover:bg-border border border-border px-6 py-2.5 transition-colors duration-300 shrink-0 cursor-pointer"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
