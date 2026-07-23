import type { Metadata } from "next";
import { Reviews } from "@/components/Reviews";
import { Booking } from "@/components/Booking";

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

export default function GuestsPage() {
  return (
    <main id="main-content">
      <div className="pt-28" />
      <Reviews />
      <Booking />
    </main>
  );
}
