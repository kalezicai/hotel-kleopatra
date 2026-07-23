"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

const img = (name: string) => `/images/${name.replace(/\.jpg$/, ".webp")}`;

const galleryImages = [
  img("h_kleopatra_1720179402_3405434106756331954_3594665146.webp"),
  img("h_kleopatra_1690136113_3153412732354361225_3594665146.webp"),
  img("h_kleopatra_1784646699_3946224164977439346_3594665146.webp"),
  img("h_kleopatra_1688587883_3140425240852529702_3594665146.webp"),
  img("h_kleopatra_1753613379_3685898640275418367_3594665146.webp"),
  img("h_kleopatra_1784541454_3945341474472267267_3594665146.webp"),
];

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-cream py-24 md:py-32">
      <div className="container-lux">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Gallery</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-chocolate md:text-5xl">
            Moments by the <span className="text-gradient-gold italic">Adriatic</span>
          </h2>
          <p className="mt-5 font-manrope text-chocolate/70">
            A glimpse of the light, the water and the quiet luxury that awaits.
          </p>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div className="mt-12 flex h-[300px] w-full max-w-6xl gap-2 overflow-x-auto px-4 sm:mx-auto sm:px-6 md:h-[400px]">
          {galleryImages.map((src, idx) => (
            <div
              key={idx}
              className="group relative w-14 flex-shrink-0 overflow-hidden rounded-2xl transition-all duration-700 hover:w-full sm:w-20 md:w-24"
            >
              <Image
                className="object-cover object-center"
                src={src}
                alt={`Hotel Kleopatra gallery image ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 20vw, 15vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
