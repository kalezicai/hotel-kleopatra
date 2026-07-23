import Image from "next/image";
import { Reveal } from "./Reveal";
const img = (name: string) => `/images/${name.replace(/\.jpg$/, ".webp")}`;


export function About() {
  return (
    <section id="intro" className="relative bg-ivory py-24 md:py-32">
      <div className="container-lux grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Imagery */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(53,32,26,0.6)]">
            <Image
              src={img("h_kleopatra_1688387618_3138745297865615286_3594665146.jpg")}
              alt="Hotel Kleopatra pool and sun loungers overlooking the Adriatic"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="scale-[1.3] object-cover transition-transform duration-[1.4s] hover:scale-[1.45]"
            />
          </div>
          {/* Floating secondary image */}
          <div className="absolute -bottom-10 -right-4 hidden aspect-[4/3] w-56 overflow-hidden rounded-3xl border-4 border-ivory shadow-2xl md:block lg:w-64">
            <div className="relative h-full w-full">
              <Image
                src={img("h_kleopatra_1751216657_3665793471936295476_3594665146.jpg")}
                alt="Sunset dining terrace at Hotel Kleopatra"
                fill
                sizes="260px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-chocolate md:text-5xl">
              Mediterranean warmth, <span className="text-gradient-gold italic">crafted by hand</span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-6 space-y-5 font-manrope text-[1.02rem] leading-relaxed text-chocolate/75">
              <p>
                Hotel Kleopatra has welcomed guests to the hills of Ulcinj since the year
                2000. Run by the Molla family, this intimate 25-room hotel blends
                Mediterranean charm with the warmth of Montenegrin hospitality — where
                every returning guest is greeted like an old friend.
              </p>
              <p>
                Mornings begin with the shimmer of light on the Adriatic and the scent
                of the sea drifting through your balcony doors. Days unfold slowly — a
                swim in the pool, a stroll through the cobbled lanes of the Old Town,
                an evening that lingers over traditional cuisine and good company.
              </p>
              <p>
                Just a 7-minute walk from Mala Plaza beach and minutes from Ulcinj&apos;s
                historic fortress, Kleopatra is a peaceful refuge perched above the
                coast — comfortable, unpretentious and unmistakably personal.
              </p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              {[
                { k: "7 min", v: "to Mala Plaza beach" },
                { k: "14 min", v: "to Old Town" },
                { k: "100%", v: "sea-view rooms" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-2xl text-gold-deep">{s.k}</div>
                  <div className="font-sans text-xs uppercase tracking-[0.18em] text-muted">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <a href="#accommodations" className="btn-ghost mt-9">
              Discover our rooms
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
