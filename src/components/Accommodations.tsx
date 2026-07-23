"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { rooms } from "@/lib/data";
import { Users, Maximize2, Waves, DoorOpen, ArrowRight, Check } from "lucide-react";

function dispatchRoom(roomName: string) {
  window.dispatchEvent(new CustomEvent("prefill-booking", { detail: { room: roomName } }));
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
}

export function Accommodations({ roomsLinkHref }: { roomsLinkHref?: string }) {
  return (
    <section id="accommodations" className="relative bg-cream py-24 md:py-32">
      <div className="container-lux">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Accommodation</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-chocolate md:text-5xl">
            Rooms designed for <span className="text-gradient-gold italic">restful days</span>
          </h2>
          <p className="mt-5 font-manrope text-chocolate/70">
            Every room at Hotel Kleopatra opens to the sea. Soft linens, natural light
            and a private balcony — your sanctuary above the Adriatic.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((room, i) => (
            <Reveal key={room.id} delay={i * 90} className="h-full">
              <article className="card-lux group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={room.image}
                    alt={`${room.name} at Hotel Kleopatra`}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 23vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate/55 via-transparent to-transparent" />
                  {room.seaView && (
                    <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/85 px-3 py-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-sea-deep backdrop-blur">
                      <Waves size={12} /> Sea View
                    </span>
                  )}
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white">
                    <h3 className="font-display text-xl drop-shadow">{room.name}</h3>
                    <div className="text-right">
                      <span className="font-sans text-[0.6rem] uppercase tracking-widest text-white/80">from</span>
                      <div className="font-display text-lg leading-none">€{room.priceFrom}<span className="text-xs text-white/70">/n</span></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="font-cormorant text-lg italic text-gold-deep">{room.tagline}</p>
                  <p className="mt-2 flex-1 font-manrope text-sm leading-relaxed text-chocolate/70">
                    {room.description}
                  </p>

                  <div className="mt-4 flex items-center gap-4 font-sans text-xs text-chocolate/65">
                    <span className="flex items-center gap-1.5"><Users size={14} className="text-gold-deep" />{room.capacity}</span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-4 font-sans text-xs text-chocolate/65">
                    <span className="flex items-center gap-1.5"><Maximize2 size={14} className="text-gold-deep" />{room.size}</span>
                    {room.balcony && (
                      <span className="flex items-center gap-1.5"><DoorOpen size={14} className="text-gold-deep" />Balcony</span>
                    )}
                  </div>

                  <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
                    {room.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-1 font-sans text-[0.68rem] text-chocolate/55"
                      >
                        <Check size={11} className="text-olive" /> {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => dispatchRoom(room.name)}
                    className="group/btn mt-5 flex items-center justify-center gap-2 rounded-full bg-chocolate px-5 py-3 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-500 hover:bg-gold-deep"
                  >
                    Book {room.name}
                    <ArrowRight size={14} className="transition-transform duration-500 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={120}>
          <p className="font-cormorant text-lg italic text-chocolate/60">
            Best rate guaranteed when you book directly — no platform fees, our full attention.
          </p>
          {roomsLinkHref ? (
            <Link
              href={roomsLinkHref}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-chocolate/20 px-7 py-3.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-chocolate transition-all duration-500 hover:border-gold-deep hover:bg-gold-deep hover:text-white"
            >
              Explore all 23 room types
              <ArrowRight size={14} />
            </Link>
          ) : (
            <button
              onClick={() => document.getElementById("all-rooms")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-chocolate/20 px-7 py-3.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-chocolate transition-all duration-500 hover:border-gold-deep hover:bg-gold-deep hover:text-white"
            >
              Explore all 23 room types
              <ArrowRight size={14} />
            </button>
          )}
        </Reveal>
      </div>
    </section>
  );
}
