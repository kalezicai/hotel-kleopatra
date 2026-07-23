import type { Metadata } from "next";
import { Accommodations } from "@/components/Accommodations";
import { Booking } from "@/components/Booking";

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

export default function AccommodationsPage() {
  return (
    <main id="main-content">
      <div className="pt-28" />
      <Accommodations />
      <Booking />
    </main>
  );
}
