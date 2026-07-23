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

export default function RoomsPage() {
  return (
    <main id="main-content">
      <div className="pt-28" />
      <AllRooms />
    </main>
  );
}
