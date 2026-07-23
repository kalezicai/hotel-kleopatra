import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Accommodations } from "@/components/Accommodations";
import { Amenities } from "@/components/Amenities";
import { Restaurant } from "@/components/Restaurant";
import { Location } from "@/components/Location";
import { Reviews } from "@/components/Reviews";
import { Booking } from "@/components/Booking";
import dynamic from "next/dynamic";

const InfiniteImageField = dynamic(() =>
  import("@/components/ui/infinite-image-field").then((m) => ({ default: m.InfiniteImageField })),
  { ssr: true }
);

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Stats />
      <Accommodations />
      <Amenities />
      <section id="gallery" className="relative bg-cream py-24 md:py-32">
        <div className="container-lux">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Gallery</span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-chocolate md:text-5xl">
              Moments by the <span className="text-gradient-gold italic">Adriatic</span>
            </h2>
            <p className="mt-5 font-manrope text-chocolate/70">
              A glimpse of the light, the water and the quiet luxury that awaits.
            </p>
          </div>
        </div>
        <div className="mt-12 h-[70vh] w-full overflow-hidden">
          <InfiniteImageField className="h-full w-full" borderRadius={16} />
        </div>
      </section>
      <Restaurant />
      <Location />
      <Reviews />
      <Booking />
    </main>
  );
}
