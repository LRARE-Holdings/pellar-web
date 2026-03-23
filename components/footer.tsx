"use client";

import Link from "next/link";
import { WebsiteCarbonBadge } from "react-websitecarbon-badge";

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <span className="font-outfit text-[15px] font-light tracking-[0.35em] text-off-white uppercase block mb-3">
              PELLAR
            </span>
            <p className="font-dm text-sm text-stone">
              Software your business can rely on.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-2">
            <p className="font-dm text-sm text-stone">
              Pellar Technologies Ltd
            </p>
            <p className="font-dm text-xs text-stone/60">
              Company No. 16807366
            </p>
            <p className="font-dm text-sm text-stone">
              Newcastle-upon-Tyne
            </p>
            <a
              href="mailto:hello@pellar.co.uk"
              className="font-dm text-sm text-forest hover:text-sage transition-colors duration-300"
            >
              hello@pellar.co.uk
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="font-dm text-xs text-stone/60 hover:text-stone transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-dm text-xs text-stone/60 hover:text-stone transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/cookies" className="font-dm text-xs text-stone/60 hover:text-stone transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
            <p className="font-dm text-xs text-stone/60">
              &copy; {new Date().getFullYear()} Pellar Technologies Ltd. All rights reserved.
            </p>
            <WebsiteCarbonBadge dark url="pellar.co.uk" />
            <p className="font-dm text-xs text-stone/60">
              pellar.co.uk
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
