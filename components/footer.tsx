import Link from "next/link";

const navColumns = [
  {
    heading: "Pellar",
    links: [
      { href: "/services", label: "Services" },
      { href: "/solutions", label: "Solutions" },
      { href: "/work", label: "Work" },
      { href: "/about", label: "About" },
    ],
  },
  {
    heading: "Talk to us",
    links: [
      { href: "/contact", label: "Start a project" },
      { href: "mailto:hello@pellar.co.uk", label: "hello@pellar.co.uk", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-5">
            <span className="font-outfit text-[15px] font-light tracking-[0.35em] text-fg uppercase block mb-4">
              PELLAR
            </span>
            <p className="font-satoshi text-base text-fg-secondary leading-relaxed max-w-sm mb-8">
              We deliver web platforms, AI tools, and operational systems for UK businesses.
            </p>
            <Link
              href="/contact"
              className="font-satoshi text-sm text-forest hover:text-sage transition-colors"
            >
              Start a project →
            </Link>
          </div>

          {navColumns.map((col) => (
            <div key={col.heading} className="md:col-span-3">
              <p className="font-satoshi text-xs uppercase tracking-[0.15em] text-sage mb-5">
                {col.heading}
              </p>
              <div className="flex flex-col gap-3">
                {col.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      className="font-satoshi text-sm text-fg-secondary hover:text-fg transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="font-satoshi text-sm text-fg-secondary hover:text-fg transition-colors"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            </div>
          ))}

          <div className="md:col-span-1" />
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <p className="font-satoshi text-xs text-fg-muted">
              Pellar Technologies Ltd · Registered in England &amp; Wales · Company No. 16807366
            </p>
            <p className="font-satoshi text-xs text-fg-muted">
              &copy; {new Date().getFullYear()} Pellar Technologies Ltd. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="font-satoshi text-xs text-fg-muted hover:text-fg transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="font-satoshi text-xs text-fg-muted hover:text-fg transition-colors duration-300"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="font-satoshi text-xs text-fg-muted hover:text-fg transition-colors duration-300"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
