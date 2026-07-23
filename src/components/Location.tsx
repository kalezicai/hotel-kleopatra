import { Reveal } from "./Reveal";
import { attractions } from "@/lib/data";
import { MapPin, Footprints, Compass } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="relative bg-cream py-24 md:py-32">
      <div className="container-lux">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Location</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-chocolate md:text-5xl">
            Above Ulcinj, <span className="text-gradient-gold italic">at the edge of the sea</span>
          </h2>
          <p className="mt-5 font-manrope text-chocolate/70">
            Perfectly placed between the historic Old Town and the long golden beaches —
            everything you came for is within easy reach.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Map */}
          <Reveal className="lg:col-span-3" delay={100}>
            <div className="relative h-full min-h-[380px] overflow-hidden rounded-[2rem] border border-chocolate/10 shadow-[0_30px_70px_-40px_rgba(53,32,26,0.6)]">
              <iframe
                title="Hotel Kleopatra location in Ulcinj, Montenegro"
                src="https://www.openstreetmap.org/export/embed.html?bbox=19.200%2C41.912%2C19.230%2C41.935&layer=mapnik&marker=41.92487%2C19.21354"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, filter: "saturate(0.9) contrast(1.02)" }}
              />
              <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur">
                <MapPin size={15} className="text-gold-deep" />
                <span className="font-sans text-xs font-semibold text-chocolate">Hotel Kleopatra</span>
              </div>
            </div>
          </Reveal>

          {/* Attractions */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-3">
              {attractions.map((a, i) => (
                <Reveal key={a.name} delay={i * 80}>
                  <div className="card-lux flex items-start gap-4 p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sand-soft to-gold/25 text-gold-deep">
                      <Compass size={18} strokeWidth={1.5} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                        <h3 className="font-display text-base text-chocolate">{a.name}</h3>
                        <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-gold-deep">
                          {a.distance}
                        </span>
                      </div>
                      <p className="mt-1 flex items-center gap-1.5 font-sans text-[0.7rem] uppercase tracking-wide text-muted">
                        <Footprints size={12} /> {a.minutes} · {a.type}
                      </p>
                      <p className="mt-1.5 font-manrope text-sm leading-snug text-chocolate/65">
                        {a.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
