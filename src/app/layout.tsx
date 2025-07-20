import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Red Shield Engineering - Fire Protection Engineering Solutions",
  description: "Leading fire protection system engineering, estimation, design, and drafting solutions for System Integrators, MEP Contractors, and Consultants across GCC and international markets.",
  keywords: "fire protection engineering, fire protection system design, estimation, technical drafting, NFPA certified, System Integrators, MEP Contractors, Red Shield Engineering",
  authors: [{ name: "Red Shield Engineering" }],
  openGraph: {
    title: "Red Shield Engineering - Fire Protection Engineering Solutions",
    description: "Leading fire protection system engineering, estimation, design, and drafting solutions for System Integrators, MEP Contractors, and Consultants",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Shield Engineering - Fire Protection Engineering Solutions",
    description: "Leading fire protection system engineering, estimation, design, and drafting solutions for System Integrators, MEP Contractors, and Consultants",
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
        <AOSProvider>
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}
