import type { Metadata } from "next";
import { Cinzel, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PetalLayer from "@/components/PetalLayer";
import TempleAudio from "@/components/TempleAudio";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const notoSerif = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vedic Priest in Mumbai - Puja, Homam & Temple Rituals",
  description: "Experienced Vedic priest in Mumbai offering traditional puja, homam, samskara ceremonies, and temple rituals. On-site and remote services available.",
  keywords: ["vedic priest", "mumbai", "puja", "homam", "temple rituals", "samskara"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Vedic Priest Mumbai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${notoSerif.variable}`}>
      <body>
        <PetalLayer />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <TempleAudio />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Vedic Priest Mumbai",
              description: "Traditional Vedic rituals and ceremonies",
              url: "https://gadheyan-dev.github.io/hindu-priest",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "City",
                name: "Mumbai",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
