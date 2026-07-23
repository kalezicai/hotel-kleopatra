"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { CalendarDays, Users, BedDouble, ArrowRight, ChevronDown, Star } from "lucide-react";

const roomOptions = [
  "Comfort Double Room",
  "Comfort Triple Room",
  "Two-Bedroom Apartment",
  "Three-Bedroom Apartment",
];

function todayISO(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().split("T")[0];
}

export function Hero() {
  const [checkIn, setCheckIn] = useState(todayISO(1));
  const [checkOut, setCheckOut] = useState(todayISO(4));
  const [guests, setGuests] = useState("2 Adults");
  const [room, setRoom] = useState("Comfort Double Room");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(async () => {
      try {
        await videoRef.current?.play();
        setVideoReady(true);
      } catch {
        /* autoplay blocked — keep poster visible */
      }
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent("prefill-booking", {
        detail: { checkIn, checkOut, guests, room },
      })
    );
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background: static image always visible, video fades in */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          className={`object-cover transition-opacity duration-1000 ${videoReady ? "opacity-0" : "opacity-100"}`}
          style={{ animation: "ken-burns 25s linear infinite alternate", willChange: "transform" }}
        />
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${videoReady ? "opacity-100" : "opacity-0"}`}
          style={{ animation: "ken-burns 25s linear infinite alternate", willChange: "transform", backfaceVisibility: "hidden", transform: "translateZ(0)" }}
        >
          <source src="/videos/vidoup.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate/55 via-chocolate/25 to-chocolate/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-chocolate/45 via-transparent to-transparent" />
      </div>

      {/* Floating soft orbs */}
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-gold/20 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute right-10 top-24 h-40 w-40 rounded-full bg-sea/20 blur-3xl animate-float" />

      <div className="container-lux relative z-10 pt-28 pb-16">
        <div className="max-w-3xl">
          <div
            className="reveal is-visible flex items-center gap-2 text-white/85"
            style={{ animationDelay: "120ms" }}
          >
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="fill-gold text-gold" />
              ))}
            </span>
            <span className="font-sans text-xs uppercase tracking-[0.28em]">
              Boutique Luxury · Ulcinj, Montenegro
            </span>
          </div>

          <h1
            className="mt-6 font-display text-[clamp(2.6rem,7vw,5.4rem)] font-medium leading-[1.02] text-white"
            style={{ textShadow: "0 2px 30px rgba(0,0,0,0.35)" }}
          >
            Your Peaceful Escape
            <br />
            <span className="text-gradient-gold italic">Above the Adriatic</span>
          </h1>

          <p className="mt-7 max-w-xl font-cormorant text-xl leading-relaxed text-white/90 md:text-2xl">
            Comfortable sea-view rooms, an outdoor pool and genuine
            Montenegrin hospitality — just minutes from Ulcinj&apos;s historic Old Town and beach.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#booking" className="btn-gold">
              Book Your Stay <ArrowRight size={16} />
            </a>
            <a href="#accommodations" className="btn-ghost !bg-white/12 !text-white !border-white/35 hover:!bg-white hover:!text-chocolate">
              Explore Rooms
            </a>
          </div>
        </div>

        {/* Booking widget */}
        <form
          onSubmit={handleCheck}
          className="glass mt-12 grid max-w-5xl grid-cols-1 gap-2 rounded-3xl p-3 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] sm:grid-cols-2 lg:grid-cols-5 lg:items-end"
        >
          <Field icon={<CalendarDays size={16} />} label="Arrival">
            <input
              type="date"
              value={checkIn}
              min={todayISO()}
              onChange={(e) => setCheckIn(e.target.value)}
              className="lux-input"
            />
          </Field>
          <Field icon={<CalendarDays size={16} />} label="Departure">
            <input
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
              className="lux-input"
            />
          </Field>
          <Field icon={<Users size={16} />} label="Guests">
            <select value={guests} onChange={(e) => setGuests(e.target.value)} className="lux-input">
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>2 Adults · 1 Child</option>
              <option>2 Adults · 2 Children</option>
              <option>3 Adults</option>
              <option>4 Adults</option>
            </select>
          </Field>
          <Field icon={<BedDouble size={16} />} label="Room Type">
            <select value={room} onChange={(e) => setRoom(e.target.value)} className="lux-input">
              {roomOptions.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </Field>
          <button type="submit" className="btn-gold h-[3.25rem] w-full">
            Check Availability
          </button>
        </form>
      </div>

      {/* Scroll cue */}
      <a
        href="#intro"
        aria-label="Discover"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-white/80 transition hover:text-white"
      >
        <span className="flex flex-col items-center gap-2">
          <span className="font-sans text-[0.62rem] uppercase tracking-[0.3em]">Discover</span>
          <ChevronDown className="animate-bounce" size={20} />
        </span>
      </a>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          video { animation: none !important; }
        }
        .lux-input {
          width: 100%;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(214,167,93,0.35);
          border-radius: 0.85rem;
          padding: 0.7rem 0.85rem 0.7rem 2.1rem;
          font-family: var(--font-sans);
          font-size: 0.86rem;
          color: #35201a;
          outline: none;
          transition: border-color .3s, box-shadow .3s, background .3s;
        }
        .lux-input:focus {
          border-color: #d6a75d;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(214,167,93,0.18);
        }
      `}</style>
    </section>
  );
}

function Field({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="relative block px-3 pt-1">
      <span className="mb-1.5 block font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-muted">
        {label}
      </span>
      <span className="pointer-events-none absolute bottom-3 left-5 text-gold-deep">{icon}</span>
      {children}
    </label>
  );
}
