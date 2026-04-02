import type { Metadata } from "next";
import { Outfit, Instrument_Serif, DM_Sans } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit-var",
  subsets: ["latin"],
  weight: ["300"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-var",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-var",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pellar.co.uk"),
  title: {
    default: "Pellar | Software built for your business",
    template: "%s | Pellar",
  },
  description:
    "Pellar builds web applications, MVPs, and platforms for businesses. Based in Newcastle-upon-Tyne.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.pellar.co.uk",
    siteName: "Pellar",
    title: "Pellar | Software built for your business",
    description:
      "Pellar builds web applications, MVPs, and platforms for businesses. Based in Newcastle-upon-Tyne.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pellar | Software built for your business",
    description:
      "Pellar builds web applications, MVPs, and platforms for businesses. Based in Newcastle-upon-Tyne.",
  },
  alternates: {
    canonical: "https://www.pellar.co.uk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${instrumentSerif.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-to-content font-dm">
          Skip to content
        </a>
        <Nav />
        <div className="flex-1" id="main-content">{children}</div>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
