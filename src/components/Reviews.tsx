"use client";

import { Reveal } from "./Reveal";
import { reviews } from "@/lib/data";
import { Star, Quote } from "lucide-react";

export function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-chocolate py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(214,167,93,0.45), transparent 38%), radial-gradient(circle at 85% 85%, rgba(58,136,201,0.25), transparent 40%)",
        }}
      />
      <div className="container-lux relative">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Average rating */}
          <Reveal>
            <span className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-gold">
              Guest Love
            </span>
            <div className="mt-4 flex items-end gap-4">
              <span className="font-display text-7xl leading-none text-white">8.0</span>
              <div className="mb-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={20} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-1 font-sans text-xs text-white/60">out of 10 · 178 reviews</p>
              </div>
            </div>
            <h2 className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl">
              Loved by travellers <span className="text-gradient-gold italic">the world over</span>
            </h2>
            <p className="mt-5 max-w-md font-manrope leading-relaxed text-white/70">
              Our greatest pride isn&apos;t the view — it&apos;s the guests who return year
              after year, and the friends they send our way. Here is what they share.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {["Booking.com 8.0", "Google 4.3", "TripAdvisor 4.5"].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/20 bg-white/5 px-4 py-2 font-sans text-xs font-medium text-white/80 backdrop-blur"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Cards */}
          <div className="columns-1 gap-5 sm:columns-2 [&>*]:mb-5">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={(i % 2) * 100}>
                <figure className="break-inside-avoid rounded-2xl bg-white/[0.07] p-6 backdrop-blur-sm ring-1 ring-white/10 transition-all duration-500 hover:bg-white/[0.12] hover:ring-gold/40">
                  <Quote className="text-gold" size={22} />
                  <div className="mt-3 flex">
                    {Array.from({ length: r.rating }).map((_, s) => (
                      <Star key={s} size={13} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <h3 className="mt-3 font-display text-lg text-white">{r.title}</h3>
                  <blockquote className="mt-2 font-manrope text-sm leading-relaxed text-white/75">
                    “{r.body}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-deep font-sans text-xs font-semibold uppercase text-white">
                      {r.initials}
                    </span>
                    <span>
                      <span className="block font-sans text-sm font-semibold text-white">{r.name}</span>
                      <span className="block font-sans text-xs text-white/55">{r.country}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
