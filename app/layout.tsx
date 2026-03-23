import type { Metadata } from "next";
import { Outfit, Instrument_Serif, DM_Sans } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit-var",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pellar.co.uk"),
  title: {
    default: "Pellar Technologies | Software your business can rely on",
    template: "%s | Pellar Technologies",
  },
  description:
    "Pellar Technologies designs, builds, and operates focused software products. Built in Newcastle-upon-Tyne.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://pellar.co.uk",
    siteName: "Pellar Technologies",
    title: "Pellar Technologies | Software your business can rely on",
    description:
      "Pellar Technologies designs, builds, and operates focused software products. Built in Newcastle-upon-Tyne.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pellar Technologies",
    description:
      "Software your business can rely on. Built in Newcastle-upon-Tyne.",
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
      <body className="min-h-screen flex flex-col grain-overlay">
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
