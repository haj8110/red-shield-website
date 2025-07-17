import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Red Shield Engineering - Fire Safety Solutions",
  description: "Innovative Fire Safety Solutions for a Safer Tomorrow. Your Partner in Fire Safety Solutions with comprehensive fire fighting systems, gas suppression, and safety equipment.",
  keywords: "fire safety, fire fighting systems, gas suppression, fire pumps, safety equipment, Red Shield Engineering",
  authors: [{ name: "Red Shield Engineering" }],
  openGraph: {
    title: "Red Shield Engineering - Fire Safety Solutions",
    description: "Innovative Fire Safety Solutions for a Safer Tomorrow",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Shield Engineering - Fire Safety Solutions",
    description: "Innovative Fire Safety Solutions for a Safer Tomorrow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
