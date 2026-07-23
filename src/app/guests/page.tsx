import type { Metadata } from "next";
import { Reviews } from "@/components/Reviews";
import { Booking } from "@/components/Booking";
import { Star, ThumbsUp, MessageCircle, Award } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Guest Reviews",
  description:
    "Read genuine guest reviews of Hotel Kleopatra in Ulcinj, Montenegro. See why visitors love the sea views, friendly staff, pool and relaxed atmosphere.",
  openGraph: {
    title: "Guest Reviews · Hotel Kleopatra",
    description:
      "Hear from our guests — rated 8.0 on Booking.com with praise for the location, staff, cleanliness and sea views.",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question", name: "How do I book a room at Hotel Kleopatra?",
      acceptedAnswer: { "@type": "Answer", text: "You can book directly through our website for the best rate, or via Booking.com. Direct bookings include free cancellation up to 48 hours before arrival and a complimentary welcome drink." },
    },
    {
      "@type": "Question", name: "What is the cancellation policy?",
      acceptedAnswer: { "@type": "Answer", text: "Free cancellation is available up to 48 hours before your scheduled arrival. Late cancellations may incur a one-night charge." },
    },
    {
      "@type": "Question", name: "Is free parking available?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, free on-site parking is available for all hotel guests — no reservation needed. The parking area is secure and monitored." },
    },
    {
      "@type": "Question", name: "Do you offer airport transfers?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, we can arrange airport transfers from Tivat, Podgorica or Dubrovnik airports upon request. Please contact us with your arrival details." },
    },
  ],
};

const stats = [
  { icon: Star, label: "Booking.com Score", value: "8.0 / 10" },
  { icon: ThumbsUp, label: "Would recommend", value: "94%" },
  { icon: MessageCircle, label: "Verified Reviews", value: "178+" },
  { icon: Award, label: "Years of Hospitality", value: "25+" },
];

export default function GuestsPage() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="pt-28" />
      <section className="bg-cream py-24 md:py-32">
        <div className="container-lux text-center">
          <span className="eyebrow">Guest Voices</span>
          <h1 className="mt-4 font-display text-4xl leading-tight text-chocolate md:text-5xl">
            What our guests say about{" "}
            <span className="text-gradient-gold italic">Hotel Kleopatra</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-manrope text-chocolate/70">
            We believe the best recommendations come from those who have stayed with us.
            Here is what our guests have to say about their experience.
          </p>
        </div>
      </section>

      {/* Stats row */}
      <section className="bg-ivory py-16">
        <div className="container-lux">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon size={28} className="mx-auto text-gold-deep" />
                <div className="mt-3 font-display text-3xl text-chocolate">{s.value}</div>
                <div className="mt-1 font-manrope text-sm text-chocolate/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />

      {/* Trust badges */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-lux text-center">
          <span className="eyebrow">Book with confidence</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-chocolate md:text-4xl">
            Your comfort is our{" "}
            <span className="text-gradient-gold italic">guarantee</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-manrope text-chocolate/70">
            Every reservation at Hotel Kleopatra comes with our family promise:
            clean, comfortable rooms, a warm welcome and the best rate when you
            book directly through our website.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {["Free Cancellation", "Best Rate Guarantee", "No Booking Fees", "Secure Payment"].map((badge) => (
              <div key={badge} className="rounded-full border border-chocolate/15 bg-white px-6 py-3 font-manrope text-sm font-medium text-chocolate shadow-sm">
                ✓ {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Booking />
    </main>
  );
}
