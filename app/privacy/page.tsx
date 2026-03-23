import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Pellar Technologies collects, uses, and protects your personal data.",
  openGraph: {
    title: "Privacy Policy | Pellar Technologies",
    description:
      "How Pellar Technologies collects, uses, and protects your personal data.",
    url: "https://pellar.co.uk/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="23 March 2026">

      <h2>Who we are</h2>
      <p>
        Pellar Technologies Ltd (company number 16807366) is a software development
        company registered in England and Wales, operating from Newcastle-upon-Tyne.
        We design, build, and operate software products.
      </p>
      <p>
        If you have questions about this policy or your personal data, contact us
        at <a href="mailto:hello@pellar.co.uk">hello@pellar.co.uk</a>.
      </p>

      <h2>What this policy covers</h2>
      <p>
        This policy explains what personal data we collect when you visit pellar.co.uk,
        how we use it, and what rights you have. Our individual products (Receipt, Vara,
        Forma, Noodle, SQEz, and Untie) may have their own privacy terms that apply
        when you use those services.
      </p>

      <h2>What data we collect</h2>

      <h3>Website visitors</h3>
      <p>
        When you visit pellar.co.uk, we collect minimal data. We do not use analytics
        or tracking tools. We do not place advertising or third-party cookies. The only
        data processed is what is technically necessary to serve the website to you,
        such as your IP address in server logs.
      </p>

      <h3>Contact enquiries</h3>
      <p>
        If you email us at hello@pellar.co.uk, we collect your name, email address,
        and the content of your message. We use this only to respond to your enquiry.
      </p>

      <h3>Product users</h3>
      <p>
        When you sign up for or use one of our products, we may collect account
        information (name, email address), usage data, and any content you upload
        or create within the product. The specifics depend on the product. Each product
        will explain what data it collects at the point of sign-up.
      </p>

      <h2>How we use your data</h2>
      <p>We process personal data on the following lawful bases under the UK GDPR:</p>
      <ul>
        <li>
          <strong>Contract performance</strong> — to deliver the product or service
          you signed up for.
        </li>
        <li>
          <strong>Legitimate interest</strong> — to improve our products, respond to
          enquiries, and maintain security. We balance our interests against your
          rights and only process data where the impact on you is minimal.
        </li>
        <li>
          <strong>Consent</strong> — where we specifically ask for it, such as if we
          ever introduce marketing communications. You can withdraw consent at any time.
        </li>
      </ul>

      <h2>Cookies</h2>
      <p>
        The pellar.co.uk website uses only essential cookies required for the site to
        function. We do not use analytics, advertising, or third-party tracking cookies.
        For full details, see our <Link href="/cookies">Cookie Policy</Link>.
      </p>

      <h2>Third-party services</h2>
      <p>We use a small number of third-party services to operate:</p>
      <ul>
        <li>
          <strong>Vercel</strong> — hosts the pellar.co.uk website. Vercel processes
          server logs including IP addresses as part of delivering the site.
        </li>
        <li>
          <strong>Stripe</strong> — handles payment processing for products that
          accept payments. Stripe processes payment data under its own privacy policy.
        </li>
      </ul>
      <p>
        We do not sell your data to anyone. We do not share your data with third
        parties for their own marketing purposes.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep your personal data only for as long as we need it for the purpose
        it was collected. Contact enquiries are retained for up to 12 months after
        our last communication. Account data for our products is retained for the
        duration of your account and deleted within 90 days of account closure,
        unless we are required by law to keep it longer.
      </p>

      <h2>Your rights</h2>
      <p>Under the UK GDPR, you have the right to:</p>
      <ul>
        <li><strong>Access</strong> your personal data and receive a copy of it.</li>
        <li><strong>Rectify</strong> inaccurate or incomplete data.</li>
        <li><strong>Erase</strong> your data (the right to be forgotten).</li>
        <li><strong>Restrict</strong> how we process your data.</li>
        <li><strong>Port</strong> your data to another service.</li>
        <li><strong>Object</strong> to processing based on legitimate interest.</li>
      </ul>
      <p>
        To exercise any of these rights, email us
        at <a href="mailto:hello@pellar.co.uk">hello@pellar.co.uk</a>. We will
        respond within 30 days.
      </p>
      <p>
        If you are not satisfied with how we handle your data, you have the right
        to complain to the Information Commissioner&apos;s Office (ICO)
        at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
      </p>

      <h2>Data security</h2>
      <p>
        We take reasonable technical and organisational measures to protect your
        personal data against unauthorised access, loss, or misuse. This includes
        encryption in transit, access controls, and regular review of our security
        practices.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &quot;Last updated&quot; date at the
        top of this page reflects the most recent revision. If we make significant
        changes, we will make that clear on our website.
      </p>

      <h2>Contact</h2>
      <p>
        Pellar Technologies Ltd<br />
        Newcastle-upon-Tyne<br />
        <a href="mailto:hello@pellar.co.uk">hello@pellar.co.uk</a>
      </p>

    </LegalLayout>
  );
}
