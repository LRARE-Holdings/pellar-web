import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit-var",
  subsets: ["latin"],
  weight: ["300"],
});

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi-var",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pellar.co.uk"),
  title: {
    default: "Pellar | Software your business can rely on",
    template: "%s | Pellar",
  },
  description:
    "Pellar Technologies delivers web platforms, AI tools, and operational systems for UK businesses. Fixed price, working in weeks.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.pellar.co.uk",
    siteName: "Pellar",
    title: "Pellar | Software your business can rely on",
    description:
      "Pellar Technologies delivers web platforms, AI tools, and operational systems for UK businesses. Fixed price, working in weeks.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pellar | Software your business can rely on",
    description:
      "Pellar Technologies delivers web platforms, AI tools, and operational systems for UK businesses. Fixed price, working in weeks.",
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
      className={`${outfit.variable} ${satoshi.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col grain-overlay">
        <a href="#main-content" className="skip-to-content font-satoshi">
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
