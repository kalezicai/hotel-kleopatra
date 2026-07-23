import type { Metadata } from "next";
import { Restaurant } from "@/components/Restaurant";
import { Clock, Sun, Coffee, ChefHat } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Dining",
  description:
    "Enjoy traditional Montenegrin cuisine and Mediterranean flavours at the Hotel Kleopatra restaurant in Ulcinj. Breakfast buffet, seafood, grilled specialities and sea-view terrace dining.",
  openGraph: {
    title: "Dining · Hotel Kleopatra",
    description:
      "Traditional Montenegrin dishes, fresh seafood and Mediterranean flavours served with a view of the Adriatic.",
  },
};

const restaurantLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Hotel Kleopatra Restaurant",
  description: "Traditional Montenegrin cuisine and Mediterranean flavours served on a sea-view terrace in Ulcinj, Montenegro.",
  servesCuisine: ["Montenegrin", "Mediterranean", "Seafood", "European"],
  priceRange: "€€",
  telephone: "+382 6990 3844",
  email: "info@hotelkleopatra.me",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "07:30", closes: "10:00", description: "Breakfast" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "12:00", closes: "15:00", description: "Lunch" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "18:00", closes: "22:00", description: "Dinner" },
  ],
  parentOrganization: {
    "@type": "Hotel",
    name: "Hotel Kleopatra",
    url: "https://www.hotelkleopatra.me",
  },
};

const specials = [
  { name: "Fresh Grilled Fish", desc: "Daily catch from Ulcinj fishermen, grilled with olive oil and herbs.", emoji: "🐟" },
  { name: "Njeguški Steak", desc: "Traditional Montenegrin air-dried ham served with local cheese and olives.", emoji: "🥩" },
  { name: "Buzara Mussels", desc: "Mussels simmered in white wine, garlic and fresh parsley.", emoji: "🦪" },
  { name: "Homemade Pasta", desc: "Hand-rolled pasta with seasonal sauce — a taste of the family kitchen.", emoji: "🍝" },
  { name: "Fresh Garden Salad", desc: "Tomatoes, cucumbers and peppers from the local market.", emoji: "🥗" },
  { name: "Baklava & Coffee", desc: "Crispy filo pastry with walnuts and honey — the perfect finish.", emoji: "🍯" },
];

export default function DiningPage() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantLd) }} />
      <div className="pt-28" />
      <Restaurant />

      {/* Menu highlights */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-lux">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">From our kitchen</span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-chocolate md:text-4xl">
              Flavours of the <span className="text-gradient-gold italic">Adriatic coast</span>
            </h2>
            <p className="mt-4 font-manrope text-chocolate/70">
              Our menu changes with the seasons, but these perennial favourites
              keep our guests coming back.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {specials.map((s) => (
              <div key={s.name} className="rounded-2xl border border-chocolate/8 bg-white px-6 py-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="text-3xl">{s.emoji}</div>
                <div className="mt-3 font-display text-lg text-chocolate">{s.name}</div>
                <p className="mt-1 font-manrope text-sm leading-relaxed text-chocolate/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container-lux mx-auto max-w-3xl">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Sun, label: "Breakfast", time: "07:30 – 10:00", desc: "Buffet with fresh pastries, eggs, fruit and local charcuterie." },
              { icon: Coffee, label: "Lunch", time: "12:00 – 15:00", desc: "Light meals, salads and grilled specialities." },
              { icon: ChefHat, label: "Dinner", time: "18:00 – 22:00", desc: "Full menu of Montenegrin and Mediterranean classics." },
            ].map((meal) => (
              <div key={meal.label} className="text-center">
                <meal.icon size={24} className="mx-auto text-gold-deep" />
                <div className="mt-3 font-display text-xl text-chocolate">{meal.label}</div>
                <div className="mt-1 font-manrope font-semibold text-gold-deep">{meal.time}</div>
                <p className="mt-2 font-manrope text-sm leading-relaxed text-chocolate/60">{meal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dietary note */}
      <section className="bg-cream py-16">
        <div className="container-lux text-center">
          <p className="font-cormorant text-xl italic text-chocolate/60">
            Please let us know about any dietary requirements before your arrival — we are
            happy to accommodate vegetarian, vegan and gluten-free preferences.
          </p>
        </div>
      </section>
    </main>
  );
}
