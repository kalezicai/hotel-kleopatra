import type { Metadata } from "next";
import { AllRooms } from "@/components/AllRooms";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "All Room Types",
  description:
    "Browse all 23 room types at Hotel Kleopatra in Ulcinj — from standard doubles to three-bedroom apartments with sea views and balconies.",
  openGraph: {
    title: "All Room Types · Hotel Kleopatra",
    description:
      "Choose from 23 room types including sea-view doubles, family apartments and premium suites at Hotel Kleopatra.",
  },
};

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Room Types at Hotel Kleopatra",
  description: "All 23 room types available at Hotel Kleopatra in Ulcinj, Montenegro.",
  numberOfItems: 23,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Comfort Double Room with Sea View" },
    { "@type": "ListItem", position: 2, name: "Comfort Triple Room with Sea View" },
    { "@type": "ListItem", position: 3, name: "Comfort Quadruple Room with Sea View" },
    { "@type": "ListItem", position: 4, name: "Comfort Two-Bedroom Apartment with Balcony" },
    { "@type": "ListItem", position: 5, name: "Standard Double Room with Balcony, Sea and Pool View" },
    { "@type": "ListItem", position: 6, name: "Comfort Three-Bedroom Apartment with Balcony and Sea View" },
    { "@type": "ListItem", position: 7, name: "Standard Triple Room with Balcony, Sea and Pool View" },
    { "@type": "ListItem", position: 8, name: "Luxury Apartment" },
  ],
};

const categories = [
  { name: "Double Rooms", desc: "Intimate and comfortable — ideal for couples seeking a sea-view escape.", count: "7 types" },
  { name: "Triple Rooms", desc: "Perfect for small families or three friends travelling together.", count: "3 types" },
  { name: "Quadruple Rooms", desc: "Extra space and flexibility for groups of four.", count: "4 types" },
  { name: "Apartments", desc: "Self-contained living with kitchenettes and separate bedrooms.", count: "9 types" },
];

export default function RoomsPage() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <div className="pt-28" />

      {/* Hero banner */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-lux text-center">
          <span className="eyebrow">Our rooms</span>
          <h1 className="mt-4 font-display text-4xl leading-tight text-chocolate md:text-5xl">
            23 ways to wake up to the{" "}
            <span className="text-gradient-gold italic">Adriatic</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-manrope text-chocolate/70">
            From comfortable doubles to spacious three-bedroom apartments — every room at
            Hotel Kleopatra is designed for rest, with sea views, cool sea breezes and
            the gentle sound of the waves.
          </p>
        </div>
      </section>

      {/* Category overview */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container-lux">
          <span className="eyebrow">Categories</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-chocolate md:text-4xl">
            Find your <span className="text-gradient-gold italic">perfect fit</span>
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <div key={c.name} className="rounded-2xl border border-chocolate/8 bg-white px-6 py-8 shadow-sm">
                <div className="font-display text-xl text-chocolate">{c.name}</div>
                <div className="mt-1 font-sans text-xs uppercase tracking-widest text-gold-deep">{c.count}</div>
                <p className="mt-3 font-manrope text-sm leading-relaxed text-chocolate/65">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All rooms */}
      <AllRooms />

      {/* Info note */}
      <section className="bg-cream py-16">
        <div className="container-lux text-center">
          <p className="font-cormorant text-xl italic text-chocolate/60">
            All rooms include air conditioning, free WiFi, satellite TV, a fridge and
            an en-suite bathroom. Sea-view rooms and balconies are subject to availability.
          </p>
        </div>
      </section>
    </main>
  );
}
