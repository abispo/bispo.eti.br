import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadataBase = new URL("https://bispo.eti.br");

export const metadata: Metadata = {
  title: {
    default: "Alessandro Bispo • Gestor de Automação",
    template: "%s • Alessandro Bispo",
  },
  description:
    "Especialista em automação de processos, integração de sistemas, desenvolvimento de APIs e N8N. Transforme seu negócio com soluções inteligentes.",
  metadataBase,
  keywords: [
    "Automação",
    "N8N",
    "APIs",
    "Integração de sistemas",
    "Automação de processos",
    "Gestor de Automação",
    "Alessandro Bispo",
  ],
  authors: [{ name: "Alessandro Bispo", url: "https://bispo.eti.br" }],
  creator: "Alessandro Bispo",
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  openGraph: {
    title: "Alessandro Bispo • Gestor de Automação",
    description:
      "Especialista em automação de processos, integração de sistemas, desenvolvimento de APIs e N8N. Transforme seu negócio com soluções inteligentes.",
    url: "/",
    siteName: "bispo.eti.br",
    images: [
      {
        url: "/portfolio-image.svg",
        width: 1200,
        height: 630,
        alt: "Alessandro Bispo — Gestor de Automação",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alessandro Bispo • Gestor de Automação",
    description:
      "Especialista em automação de processos, integração de sistemas, desenvolvimento de APIs e N8N.",
    images: ["/portfolio-image.svg"],
    creator: "@your_twitter_handle",
  },
  icons: {
    icon: "/portfolio-image.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
