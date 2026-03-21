import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kanzlei Musterberater | Steuerberatung in München",
  description:
    "Ihre Steuerberatungskanzlei in München. Einkommensteuererklärung, Finanzbuchhaltung, Lohnabrechnung und Jahresabschluss — persönlich, kompetent, digital.",
  openGraph: {
    title: "Kanzlei Musterberater | Steuerberatung in München",
    description:
      "Persönliche Steuerberatung mit digitalem Anspruch. Seit 2008 in München.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-[100dvh] bg-cream text-navy">{children}</body>
    </html>
  );
}
