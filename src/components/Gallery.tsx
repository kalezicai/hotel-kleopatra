"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { gallery } from "@/lib/data";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % gallery.length)),
    []
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)),
    []
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, next, prev]);

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

        <Reveal delay={120}>
          <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[230px] md:grid-cols-4">
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`group relative overflow-hidden rounded-2xl shadow-[0_18px_40px_-30px_rgba(53,32,26,0.7)] ${
                  img.span ? "col-span-2 row-span-2" : ""
                }`}
                aria-label={`Open image: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 flex translate-y-2 items-center gap-1.5 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ZoomIn size={12} /> {img.category}
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      {open && index !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-chocolate/90 p-4 backdrop-blur-md"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30"
          >
            <X size={22} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 md:left-8"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 md:right-8"
          >
            <ChevronRight size={26} />
          </button>

          <figure className="relative max-h-[85vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[60vh] md:h-[80vh]">
              <Image
                src={gallery[index].src}
                alt={gallery[index].alt}
                fill
                sizes="90vw"
                className="rounded-2xl object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center font-cormorant text-lg italic text-white/85">
              {gallery[index].alt} · <span className="text-gold">{index + 1} / {gallery.length}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
