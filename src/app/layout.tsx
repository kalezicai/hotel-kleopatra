import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Cormorant_Garamond, Inter, Manrope } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = "https://www.hotelkleopatra.me";
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Accommodations", item: `${siteUrl}/accommodations` },
    { "@type": "ListItem", position: 3, name: "Rooms", item: `${siteUrl}/rooms` },
    { "@type": "ListItem", position: 4, name: "Experience", item: `${siteUrl}/experience` },
    { "@type": "ListItem", position: 5, name: "Dining", item: `${siteUrl}/dining` },
    { "@type": "ListItem", position: 6, name: "Gallery", item: `${siteUrl}/gallery` },
    { "@type": "ListItem", position: 7, name: "Location", item: `${siteUrl}/location` },
    { "@type": "ListItem", position: 8, name: "Guest Reviews", item: `${siteUrl}/guests` },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hotel Kleopatra · Family-Run Hotel in Ulcinj, Montenegro",
    template: "%s · Hotel Kleopatra",
  },
  description:
    "Hotel Kleopatra is a family-run 3-star hotel overlooking the Adriatic in Ulcinj, Montenegro. Enjoy sea views, an outdoor pool, free parking and genuine Montenegrin hospitality — minutes from the Old Town and beach. Book direct for the best rate.",
  keywords: [
    "Hotel Kleopatra Ulcinj",
    "family hotel Ulcinj",
    "hotel Montenegro",
    "sea view hotel Ulcinj",
    "Adriatic coast hotel",
    "rooms Ulcinj Old Town",
    "budget hotel Ulcinj Montenegro",
    "Kleopatra Apartments Ulcinj",
    "Ulcinj hotel with pool",
    "dog friendly hotel Ulcinj",
    "hotels near Mala Plaza Ulcinj",
    "Ulcinj accommodation sea view",
    "Montenegro family-run hotel",
    "Ulcinj Old Town hotels",
    "Ada Bojana hotels",
    "Velika Plaza accommodation",
    "hotel with parking Ulcinj",
    "bed and breakfast Ulcinj Montenegro",
    "apartments Ulcinj near beach",
    "best hotels in Ulcinj",
    "Ulcinj Riviera hotel",
  ],
  authors: [{ name: "Hotel Kleopatra" }],
  creator: "Hotel Kleopatra",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Hotel Kleopatra",
    title: "Hotel Kleopatra · Your Peaceful Escape Above the Adriatic",
    description:
      "Experience comfort, sea views and genuine Montenegrin hospitality at Hotel Kleopatra in Ulcinj. Book direct for the best rate.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1600,
        height: 900,
        alt: "Hotel Kleopatra pool overlooking the Adriatic at golden hour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Kleopatra · Family-Run Hotel in Ulcinj, Montenegro",
    description:
      "Your peaceful escape above the Adriatic. Sea-view rooms, outdoor pool and traditional dining in Ulcinj.",
    images: ["/images/hero.jpg"],
  },
  robots: { index: true, follow: true },
  category: "travel",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "@id": `${siteUrl}/#hotel`,
  name: "Hotel Kleopatra",
  description:
    "Family-run 3-star hotel above the Adriatic in Ulcinj, Montenegro, offering sea-view rooms, an outdoor pool and warm family hospitality since 2000.",
  url: siteUrl,
  image: `${siteUrl}/images/hero.jpg`,
  priceRange: "€€",
  starRating: { "@type": "Rating", "ratingValue": "3" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "8.0",
    reviewCount: "178",
    bestRating: "10",
    worstRating: "1",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pinjesh BB",
    addressLocality: "Ulcinj",
    postalCode: "85360",
    addressCountry: "ME",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.92487,
    longitude: 19.21354,
  },
  telephone: "+382 6990 3844",
  email: "info@hotelkleopatra.me",
  sameAs: [
    "https://www.instagram.com/hotelkleopatra/",
    "https://www.facebook.com/hotelkleopatra",
    "https://www.booking.com/hotel/me/kleopatra.html",
  ],
  amenityFeature: [
    "Outdoor Pool",
    "Restaurant",
    "Bar",
    "Breakfast Buffet",
    "Sea View",
    "Free WiFi",
    "Free Parking",
    "Air Conditioning",
    "Airport Shuttle",
    "Family Rooms",
  ],
  checkinTime: "13:00",
  checkoutTime: "11:00",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "23:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Room Rates",
    itemListElement: [
      { "@type": "Offer", name: "Comfort Double Room", price: "75", priceCurrency: "EUR" },
      { "@type": "Offer", name: "Comfort Triple Room", price: "95", priceCurrency: "EUR" },
      { "@type": "Offer", name: "Two-Bedroom Apartment", price: "120", priceCurrency: "EUR" },
      { "@type": "Offer", name: "Three-Bedroom Apartment", price: "180", priceCurrency: "EUR" },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable} ${manrope.variable}`}
    >
      <head>
        <link rel="icon" href="/images/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="preconnect" href="https://www.openstreetmap.org" />
        <link rel="dns-prefetch" href="https://www.openstreetmap.org" />
        <link rel="preload" href="/videos/vidoup.mp4" as="video" type="video/mp4" fetchPriority="low" media="(min-width: 768px)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </head>
      <body className="bg-ivory text-chocolate antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
