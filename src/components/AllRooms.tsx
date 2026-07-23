"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { allRoomTypes, roomCategories } from "@/lib/data";
import { Waves, DoorOpen, Users, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

export function AllRooms() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = activeCategory
    ? allRoomTypes.filter((r) => r.category === activeCategory)
    : allRoomTypes;

  const toggleExpand = (id: string) => setExpanded((v) => (v === id ? null : id));

  return (
    <section id="all-rooms" className="bg-ivory py-24 md:py-32">
      <div className="container-lux">
        <Reveal className="text-center">
          <span className="eyebrow">All Room Types</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-chocolate md:text-5xl">
            Every room, <span className="text-gradient-gold italic">every detail</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-manrope text-chocolate/70">
            From comfortable doubles to spacious three-bedroom apartments — filter by
            category to find your perfect stay.
          </p>
        </Reveal>

        {/* Filter */}
        <Reveal delay={60} className="mt-10 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`rounded-full px-5 py-2 font-sans text-xs font-semibold uppercase tracking-widest transition-all ${
              activeCategory === null
                ? "bg-chocolate text-white"
                : "bg-white text-chocolate/70 shadow-sm hover:bg-chocolate/5"
            }`}
          >
            All ({allRoomTypes.length})
          </button>
          {roomCategories.map((cat) => {
            const count = allRoomTypes.filter((r) => r.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 font-sans text-xs font-semibold uppercase tracking-widest transition-all ${
                  activeCategory === cat
                    ? "bg-chocolate text-white"
                    : "bg-white text-chocolate/70 shadow-sm hover:bg-chocolate/5"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </Reveal>

        {/* Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((room, i) => {
            const isExpanded = expanded === room.id;
            const previewImages = room.images.slice(0, isExpanded ? room.images.length : 2);

            return (
              <Reveal key={room.id} delay={Math.min(i * 50, 300)} className="h-full">
                <article className="card-lux group flex h-full flex-col overflow-hidden">
                  <div
                    className={`grid gap-1 overflow-hidden transition-all duration-500 ${
                      isExpanded ? "grid-cols-3 sm:grid-cols-4" : "grid-cols-2"
                    }`}
                  >
                    {previewImages.map((src, j) => (
                      <div
                        key={j}
                        className={`relative overflow-hidden ${
                          isExpanded ? "aspect-[4/3]" : "aspect-[3/2]"
                        }`}
                      >
                        <Image
                          src={src}
                          alt={`${room.name} — photo ${j + 1}`}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          quality={70}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl leading-tight text-chocolate">
                        {room.name}
                      </h3>
                      <span className="mt-1 shrink-0 rounded-full bg-gold/15 px-3 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-wider text-gold-deep">
                        {room.category}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-sans text-xs text-chocolate/65">
                      <span className="flex items-center gap-1.5">
                        <Users size={14} className="text-gold-deep" />
                        {room.capacity}
                      </span>
                      {room.seaView && (
                        <span className="flex items-center gap-1.5">
                          <Waves size={14} className="text-gold-deep" />
                          Sea View
                        </span>
                      )}
                      {room.balcony && (
                        <span className="flex items-center gap-1.5">
                          <DoorOpen size={14} className="text-gold-deep" />
                          Balcony
                        </span>
                      )}
                    </div>

                    <p className="mt-3 font-manrope text-xs text-muted">
                      {room.reviewCount} review{room.reviewCount !== 1 ? "s" : ""}
                    </p>

                    {room.images.length > 2 && (
                      <button
                        onClick={() => toggleExpand(room.id)}
                        className="mt-4 flex items-center gap-1.5 self-start font-sans text-xs font-semibold uppercase tracking-wider text-gold-deep transition-colors hover:text-gold"
                      >
                        {isExpanded ? (
                          <>Show less <ChevronUp size={14} /></>
                        ) : (
                          <>View all {room.images.length} photos <ChevronDown size={14} /></>
                        )}
                      </button>
                    )}

                    <div className="mt-auto pt-5">
                      <button
                        onClick={() => {
                          window.dispatchEvent(new CustomEvent("prefill-booking", { detail: { room: room.name } }));
                          document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-chocolate px-5 py-3 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-500 hover:bg-gold-deep"
                      >
                        Book This Room
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="py-20 text-center font-manrope text-muted">
            No rooms found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
