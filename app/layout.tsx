import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lider BBQ Villa - Authentieke Turkse BBQ Restaurant Rotterdam",
  description: "Proef de echte smaken van Anatolië in het hart van Rotterdam. Authentieke Turkse BBQ, verse ingrediënten, warme sfeer. Reserveer nu!",
  keywords: "Turkse restaurant Rotterdam, BBQ, Grill, Kebab, Halal restaurant, Lider BBQ Villa, Turkish food",
  openGraph: {
    title: "Lider BBQ Villa - Authentieke Turkse BBQ Restaurant",
    description: "Proef de echte smaken van Anatolië in het hart van Rotterdam",
    type: "website",
    locale: "nl_NL",
    url: "https://liderbbqvilla.nl",
    siteName: "Lider BBQ Villa",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lider BBQ Villa Restaurant"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lider BBQ Villa - Authentieke Turkse BBQ Restaurant",
    description: "Proef de echte smaken van Anatolië in het hart van Rotterdam",
    images: ["/twitter-image.jpg"],
  },
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
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Lider BBQ Villa',
    description: 'Authentieke Turkse BBQ Restaurant in Rotterdam',
    url: 'https://liderbbqvilla.nl',
    telephone: '+31-10-123-4567',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Beijerlandselaan 123',
      addressLocality: 'Rotterdam',
      postalCode: '3074 XX',
      addressCountry: 'NL'
    },
    servesCuisine: 'Turkish',
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '16:00',
        closes: '23:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '16:00',
        closes: '00:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '14:00',
        closes: '23:00'
      }
    ]
  };

  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: "bg-zinc-900 border-zinc-800 text-white",
          }}
        />
      </body>
    </html>
  );
}
