import type { Metadata } from "next";
import { Camera } from "lucide-react";
import nextDynamic from "next/dynamic";

const InfiniteImageField = nextDynamic(() =>
  import("@/components/ui/infinite-image-field").then((m) => ({ default: m.InfiniteImageField })),
  { ssr: true }
);

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

const highlights = [
  { label: "Pool & Terrace", desc: "Freshwater pool overlooking the Adriatic with sun loungers and panoramic views." },
  { label: "Sea-View Rooms", desc: "Comfortable interiors flooded with natural light and cool sea breezes." },
  { label: "Restaurant", desc: "Al fresco dining on the terrace — string lights, sea air and home cooking." },
  { label: "Surroundings", desc: "Ulcinj Old Town, Velika Plaza beach and the Bojana river delta." },
];

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

      {/* Highlights */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container-lux">
          <span className="eyebrow">What you will see</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-chocolate md:text-4xl">
            A tour of the <span className="text-gradient-gold italic">property</span>
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.label} className="rounded-2xl border border-chocolate/8 bg-white px-6 py-8 shadow-sm">
                <Camera size={22} className="text-gold-deep" />
                <div className="mt-4 font-display text-lg text-chocolate">{h.label}</div>
                <p className="mt-2 font-manrope text-sm leading-relaxed text-chocolate/65">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
