import type { Metadata } from "next";
import { Accommodations } from "@/components/Accommodations";
import { Booking } from "@/components/Booking";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Accommodations",
  description:
    "Explore our comfort rooms, family apartments and sea-view suites at Hotel Kleopatra in Ulcinj. Each room is designed for a relaxing stay above the Adriatic.",
  openGraph: {
    title: "Accommodations · Hotel Kleopatra",
    description:
      "Comfort rooms, family apartments and sea-view suites overlooking the Adriatic in Ulcinj, Montenegro.",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What room types are available at Hotel Kleopatra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hotel Kleopatra offers comfort double rooms, triple rooms, two-bedroom and three-bedroom apartments — all with sea views and private balconies. In total there are 23 room types across six categories.",
      },
    },
    {
      "@type": "Question",
      name: "Do rooms have air conditioning and WiFi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all rooms include air conditioning, free WiFi, satellite TV, a fridge and an en-suite bathroom.",
      },
    },
    {
      "@type": "Question",
      name: "Is breakfast included in the room rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A fresh breakfast buffet is included with every stay at Hotel Kleopatra, served on the sea-view terrace.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best rate guarantee when booking direct?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When you book directly through our website, you get the best available rate with no booking fees, priority room selection, a complimentary welcome drink and direct concierge support.",
      },
    },
  ],
};

const perks = [
  "Best rate guaranteed when booking direct",
  "Free cancellation up to 48 hours before arrival",
  "Complimentary WiFi in all rooms and common areas",
  "Fresh breakfast buffet included with every stay",
  "Free on-site parking — no reservation needed",
  "Early check-in and late checkout on request",
];

export default function AccommodationsPage() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="pt-28" />
      <Accommodations roomsLinkHref="/rooms" />

      {/* Why book direct */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container-lux mx-auto max-w-4xl text-center">
          <span className="eyebrow">Book with confidence</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-chocolate md:text-4xl">
            Why book <span className="text-gradient-gold italic">directly</span> with us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-manrope text-chocolate/70">
            When you reserve through our website, you skip the third-party fees and
            speak directly with our family. We know every room and every view — let us
            help you choose the one that fits.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p) => (
              <div key={p} className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm">
                <Check size={18} className="mt-0.5 shrink-0 text-olive" />
                <span className="font-manrope text-sm text-chocolate/75">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room size guide */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-lux">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Room guide</span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-chocolate md:text-4xl">
              Which room is right <span className="text-gradient-gold italic">for you</span>?
            </h2>
          </div>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left font-manrope text-sm">
              <thead>
                <tr className="border-b border-chocolate/10">
                  <th className="pb-4 font-semibold text-chocolate">Room</th>
                  <th className="pb-4 font-semibold text-chocolate">Guests</th>
                  <th className="pb-4 font-semibold text-chocolate">Size</th>
                  <th className="pb-4 font-semibold text-chocolate">Sea View</th>
                  <th className="pb-4 font-semibold text-chocolate">Balcony</th>
                  <th className="pb-4 font-semibold text-chocolate">From/night</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Comfort Double Room", guests: "2", size: "15 m²", sea: "✓", balcony: "✓", price: "€75" },
                  { name: "Comfort Triple Room", guests: "3", size: "19 m²", sea: "✓", balcony: "✓", price: "€95" },
                  { name: "Two-Bedroom Apartment", guests: "4", size: "25 m²", sea: "✓", balcony: "✓", price: "€120" },
                  { name: "Three-Bedroom Apartment", guests: "6", size: "35 m²", sea: "✓", balcony: "✓", price: "€180" },
                ].map((r, i) => (
                  <tr key={r.name} className={`border-b border-chocolate/8 ${i % 2 === 0 ? "bg-white/50" : ""}`}>
                    <td className="py-4 font-medium text-chocolate">{r.name}</td>
                    <td className="py-4 text-chocolate/70">{r.guests}</td>
                    <td className="py-4 text-chocolate/70">{r.size}</td>
                    <td className="py-4 text-olive">{r.sea}</td>
                    <td className="py-4 text-olive">{r.balcony}</td>
                    <td className="py-4 font-semibold text-gold-deep">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Booking />
    </main>
  );
}
