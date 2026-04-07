import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Pellar Technologies uses cookies. We only use essential cookies required for the site to function.",
  openGraph: {
    title: "Cookie Policy | Pellar",
    description:
      "How Pellar Technologies uses cookies. Essential cookies only, no tracking.",
    url: "https://www.pellar.co.uk/cookies",
  },
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="23 March 2026">

      <h2>What are cookies</h2>
      <p>
        Cookies are small text files stored on your device by websites you visit.
        They serve various purposes, from remembering your preferences to tracking
        your activity across the web. Not all cookies are the same, and not all of
        them require your consent.
      </p>

      <h2>How we use cookies</h2>
      <p>
        The pellar.co.uk website takes a minimal approach to cookies. We do not use
        analytics cookies. We do not use advertising cookies. We do not use third-party
        tracking cookies.
      </p>
      <p>
        The only data we store locally is what is strictly necessary for the site to
        function as expected.
      </p>

      <h2>What we store</h2>
      <ul>
        <li>
          <strong>Cookie consent preference.</strong> We use your browser&apos;s local
          storage (not a cookie) to remember that you have seen and dismissed the cookie
          notice on this site. This is stored under the
          key <code className="text-off-white/80 bg-white/5 px-1.5 py-0.5 rounded text-xs">pellar_cookie_consent</code> and
          persists until you clear your browser data.
        </li>
        <li>
          <strong>Hosting cookies.</strong> Our hosting provider (Vercel) may set
          cookies that are essential for delivering the website securely and
          reliably. These are strictly necessary and do not track you.
        </li>
      </ul>

      <h2>Third-party cookies</h2>
      <p>
        We do not use any third-party cookies on pellar.co.uk. Our individual products
        (Forma and Noodle) are hosted on their own domains and may have separate
        cookie policies.
      </p>

      <h2>Managing cookies</h2>
      <p>
        You can control and delete cookies through your browser settings. Most browsers
        allow you to block or delete cookies, though this may affect site functionality.
        Here are links to cookie management instructions for common browsers:
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
        <li><a href="https://support.microsoft.com/en-us/microsoft-edge/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy if our use of cookies changes. The &quot;Last
        updated&quot; date at the top reflects the most recent revision.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions about our use of cookies, contact us
        at <a href="mailto:hello@pellar.co.uk">hello@pellar.co.uk</a>.
      </p>

    </LegalLayout>
  );
}
