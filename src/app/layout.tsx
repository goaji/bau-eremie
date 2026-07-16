import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Big_Shoulders } from "next/font/google";
import "./globals.css";

const displayFont = Big_Shoulders({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Adrian Eremie · Bauunternehmen, Planung & Energieberatung",
    template: "%s · Adrian Eremie",
  },
  description:
    "Bauunternehmen, Planung und zertifizierte Energieberatung aus einer Hand – Adrian Eremie, tätig in Garching an der Alz und Umgebung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
