import type { Metadata } from "next";
import { InfiniteImageField } from "@/components/ui/infinite-image-field";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse the Hotel Kleopatra photo gallery — sea views, pool, rooms, restaurant and the beauty of Ulcinj, Montenegro.",
  openGraph: {
    title: "Gallery · Hotel Kleopatra",
    description:
      "A visual journey through Hotel Kleopatra — moments by the Adriatic captured in light and colour.",
  },
};

export default function GalleryPage() {
  return (
    <main id="main-content">
      <div className="pt-28" />
      <section className="bg-cream py-24 md:py-32">
        <div className="container-lux">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Gallery</span>
            <h1 className="mt-4 font-display text-4xl leading-tight text-chocolate md:text-5xl">
              Moments by the <span className="text-gradient-gold italic">Adriatic</span>
            </h1>
            <p className="mt-5 font-manrope text-chocolate/70">
              A glimpse of the light, the water and the quiet luxury that awaits.
            </p>
          </div>
        </div>
        <div className="mt-12 h-[80vh] w-full overflow-hidden">
          <InfiniteImageField className="h-full w-full" borderRadius={16} />
        </div>
      </section>
    </main>
  );
}
