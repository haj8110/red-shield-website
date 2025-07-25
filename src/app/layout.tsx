import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Red Shield Engineering - Fire Protection Engineering Solutions",
  description: "Leading fire protection system engineering, estimation, design, and drafting solutions for System Integrators, MEP Contractors, and Consultants across GCC and international markets.",
  keywords: "fire protection engineering, fire protection system design, estimation, technical drafting, NFPA certified, System Integrators, MEP Contractors, Red Shield Engineering, fire safety, fire suppression, fire alarm systems",
  authors: [{ name: "Red Shield Engineering" }],
  creator: "Red Shield Engineering",
  publisher: "Red Shield Engineering",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
      openGraph: {
      title: "Red Shield Engineering - Fire Protection Engineering Solutions",
      description: "Leading fire protection system engineering, estimation, design, and drafting solutions for System Integrators, MEP Contractors, and Consultants",
      type: "website",
      locale: "en_US",
      url: "https://redshieldengineering.com",
      siteName: "Red Shield Engineering",
      images: [
        {
          url: "/red_shield_logo.svg",
          width: 1200,
          height: 630,
          alt: "Red Shield Engineering - Fire Protection Solutions",
        },
      ],
    },
      twitter: {
      card: "summary_large_image",
      title: "Red Shield Engineering - Fire Protection Engineering Solutions",
      description: "Leading fire protection system engineering, estimation, design, and drafting solutions for System Integrators, MEP Contractors, and Consultants",
      images: ["/red_shield_logo.svg"],
    },
  alternates: {
    canonical: "https://redshieldengineering.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/red_shield_logo.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#CE2029" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Red Shield Engineering" />
        <link rel="apple-touch-icon" href="/red_shield_logo.svg" />
      </head>
      <body className={inter.className}>
        <AOSProvider>
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}
