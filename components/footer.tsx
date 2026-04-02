import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-stone/15">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <span className="font-outfit text-[15px] font-light tracking-[0.35em] text-ink uppercase block mb-3">
              PELLAR
            </span>
            <p className="font-dm text-sm text-stone">
              Software built for your business.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-2">
            <p className="font-dm text-sm text-ink/70">
              Pellar Technologies Ltd
            </p>
            <p className="font-dm text-xs text-stone">
              Company No. 16807366
            </p>
            <p className="font-dm text-sm text-ink/70">
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

        <div className="mt-12 pt-8 border-t border-stone/15 flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="font-dm text-xs text-stone hover:text-ink/70 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-dm text-xs text-stone hover:text-ink/70 transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/cookies" className="font-dm text-xs text-stone hover:text-ink/70 transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
          <p className="font-dm text-xs text-stone">
            &copy; {new Date().getFullYear()} Pellar Technologies Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
