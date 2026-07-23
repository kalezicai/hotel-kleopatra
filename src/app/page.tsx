import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Stats />

      {/* Bridge section — booking CTA */}
      <section className="relative bg-chocolate py-20 md:py-28">
        <div className="container-lux text-center">
          <span className="eyebrow !text-gold">Start your escape</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl">
            Ready to experience{" "}
            <span className="text-gradient-gold italic">Hotel Kleopatra</span>?
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-manrope text-white/65">
            Browse our rooms, check availability, and book direct for the best rate.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/accommodations" className="btn-gold">
              View Accommodations
            </a>
            <a href="/rooms" className="btn-ghost !text-white !border-white/30 hover:!bg-white hover:!text-chocolate">
              All Room Types
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
