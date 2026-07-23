import type { Metadata } from "next";
import { Restaurant } from "@/components/Restaurant";

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

export default function DiningPage() {
  return (
    <main id="main-content">
      <div className="pt-28" />
      <Restaurant />
    </main>
  );
}
