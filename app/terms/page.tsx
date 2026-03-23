import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing your use of the Pellar Technologies website and products.",
  openGraph: {
    title: "Terms of Service | Pellar Technologies",
    description:
      "Terms governing your use of the Pellar Technologies website and products.",
    url: "https://pellar.co.uk/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="23 March 2026">

      <h2>About these terms</h2>
      <p>
        These terms govern your use of the pellar.co.uk website and any products
        operated by Pellar Technologies Ltd. By using our website or products, you
        agree to these terms. If you do not agree, please do not use our services.
      </p>
      <p>
        Individual products may have their own additional terms. Where product-specific
        terms conflict with these general terms, the product-specific terms take
        precedence for that product.
      </p>

      <h2>Who we are</h2>
      <p>
        Pellar Technologies Ltd is a company registered in England and Wales (company
        number 16807366), operating from Newcastle-upon-Tyne. Our contact email
        is <a href="mailto:hello@pellar.co.uk">hello@pellar.co.uk</a>.
      </p>

      <h2>Using our website</h2>
      <p>
        The pellar.co.uk website is provided for general information about Pellar
        Technologies and its products. You may browse the site freely. You agree not
        to misuse it, including but not limited to:
      </p>
      <ul>
        <li>Attempting to gain unauthorised access to any part of the site or its infrastructure.</li>
        <li>Using automated tools to scrape or copy content without permission.</li>
        <li>Interfering with the site&apos;s operation or other users&apos; access.</li>
      </ul>

      <h2>Using our products</h2>
      <p>
        Our products (Receipt, Vara, Forma, Noodle, SQEz, and Untie) are provided
        under their own terms of use. General provisions that apply across all products:
      </p>
      <ul>
        <li>
          <strong>Account responsibility.</strong> You are responsible for keeping your
          account credentials secure. Notify us immediately if you believe your account
          has been compromised.
        </li>
        <li>
          <strong>Acceptable use.</strong> You agree to use our products lawfully and
          not for any purpose that is illegal, harmful, or violates the rights of others.
        </li>
        <li>
          <strong>Your content.</strong> You retain ownership of any content you upload
          or create within our products. You grant us the rights necessary to host,
          display, and process that content in order to deliver the service to you.
        </li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        All content on pellar.co.uk, including text, design, logos, and software, is
        owned by Pellar Technologies Ltd or its licensors. You may not copy, modify,
        distribute, or use any of our intellectual property without written permission,
        except as necessary to use our products as intended.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Pellar Technologies Ltd is not liable
        for any indirect, incidental, or consequential damages arising from your use
        of our website or products. Our total liability for any claim is limited to the
        amount you paid us in the 12 months preceding the claim, or £100, whichever
        is greater.
      </p>
      <p>
        Nothing in these terms excludes or limits our liability for death or personal
        injury caused by negligence, fraud or fraudulent misrepresentation, or any
        other liability that cannot be excluded by law.
      </p>

      <h2>Availability and changes</h2>
      <p>
        We aim to keep our website and products available and up to date, but we do
        not guarantee uninterrupted access. We may update, modify, or discontinue
        any product or feature at any time. Where practical, we will give reasonable
        notice of significant changes.
      </p>

      <h2>Termination</h2>
      <p>
        We may suspend or terminate your access to any product if you breach these
        terms or any product-specific terms. You may stop using our products at any
        time. On termination, provisions that by their nature should survive (such as
        intellectual property, limitation of liability, and governing law) will continue
        to apply.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of England and Wales. Any disputes will
        be subject to the exclusive jurisdiction of the courts of England and Wales.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The &quot;Last updated&quot; date at
        the top of this page reflects the most recent revision. Continued use of our
        website or products after changes are published constitutes acceptance of the
        updated terms.
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
