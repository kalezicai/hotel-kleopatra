"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
const img = (name: string) => `/images/${name.replace(/\.jpg$/, ".webp")}`;
import { CalendarDays, Users, BedDouble, User, Mail, Phone, MessageSquare, Check, Loader2, ArrowRight } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

function todayISO(offset = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().split("T")[0];
}

export function Booking() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: todayISO(1),
    checkOut: todayISO(4),
    guests: "2 Adults",
    room: "Comfort Double Room",
    message: "",
  });

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail || {};
      setForm((f) => ({
        ...f,
        checkIn: detail.checkIn ?? f.checkIn,
        checkOut: detail.checkOut ?? f.checkOut,
        guests: detail.guests ?? f.guests,
        room: detail.room ?? f.room,
      }));
    };
    window.addEventListener("prefill-booking", handler);
    return () => window.removeEventListener("prefill-booking", handler);
  }, []);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1200);
  };

  return (
    <section id="booking" className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
          <Image
            src={img("h_kleopatra_1720179402_3405434106655607439_3594665146.jpg")}
            alt="Sea view from Hotel Kleopatra"
            fill
            sizes="100vw"
            className="object-cover"
          />
        <div className="absolute inset-0 bg-chocolate/72" />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate via-chocolate/40 to-chocolate/80" />
      </div>

      <div className="container-lux grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left copy */}
        <Reveal>
          <span className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-gold">
            Reserve Direct
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] text-white md:text-5xl">
            Your Adriatic escape <span className="text-gradient-gold italic">begins here</span>
          </h2>
          <p className="mt-6 max-w-md font-cormorant text-xl leading-relaxed text-white/85">
            Book directly with us for the best available rate, flexible terms and a
            personal welcome from the Kleopatra family.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Best rate — guaranteed",
              "No booking fees",
              "Priority room selection",
              "Complimentary welcome drink",
              "Free cancellation flexibility",
              "Direct concierge support",
            ].map((b) => (
              <li key={b} className="flex items-center gap-2 font-sans text-sm text-white/85">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/25 text-gold">
                  <Check size={12} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Form */}
        <Reveal delay={120}>
          <div className="glass rounded-[2rem] p-6 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.7)] md:p-8">
            {status === "success" ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-olive to-sea text-white">
                  <Check size={30} />
                </span>
                <h3 className="mt-5 font-display text-2xl text-chocolate">Request received</h3>
                <p className="mt-3 max-w-xs font-manrope text-sm text-chocolate/70">
                  Thank you, {form.name || "guest"}. Our team will confirm your stay at
                  Hotel Kleopatra within 24 hours. We can&apos;t wait to welcome you.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-ghost mt-6"
                >
                  Make another request
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <h3 className="font-display text-2xl text-chocolate">Request your stay</h3>
                <p className="-mt-2 font-sans text-xs text-muted">
                  Tell us your dates — we&apos;ll confirm availability personally.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Input icon={<User size={15} />} label="Full Name">
                    <input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" className="b-input" />
                  </Input>
                  <Input icon={<Mail size={15} />} label="Email">
                    <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" className="b-input" />
                  </Input>
                  <Input icon={<Phone size={15} />} label="Phone (optional)">
                    <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+382 ..." className="b-input" />
                  </Input>
                  <Input icon={<Users size={15} />} label="Guests">
                    <select value={form.guests} onChange={(e) => update("guests", e.target.value)} className="b-input">
                      {["1 Adult","2 Adults","2 Adults · 1 Child","2 Adults · 2 Children","3 Adults","4 Adults"].map((g) => <option key={g}>{g}</option>)}
                    </select>
                  </Input>
                  <Input icon={<CalendarDays size={15} />} label="Arrival">
                    <input required type="date" min={todayISO()} value={form.checkIn} onChange={(e) => update("checkIn", e.target.value)} className="b-input" />
                  </Input>
                  <Input icon={<CalendarDays size={15} />} label="Departure">
                    <input required type="date" min={form.checkIn} value={form.checkOut} onChange={(e) => update("checkOut", e.target.value)} className="b-input" />
                  </Input>
                </div>

                <Input icon={<BedDouble size={15} />} label="Room Type">
                  <select value={form.room} onChange={(e) => update("room", e.target.value)} className="b-input">
                    {["Comfort Double Room","Comfort Triple Room","Two-Bedroom Apartment","Three-Bedroom Apartment"].map((r) => <option key={r}>{r}</option>)}
                  </select>
                </Input>

                <Input icon={<MessageSquare size={15} />} label="Special Requests (optional)">
                  <textarea rows={3} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Airport transfer, anniversary, dietary needs…" className="b-input resize-none" />
                </Input>

                <button type="submit" disabled={status === "loading"} className="btn-gold w-full disabled:opacity-70">
                  {status === "loading" ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending…</>
                  ) : (
                    <>Book Now <ArrowRight size={16} /></>
                  )}
                </button>

                {status === "error" && (
                  <p className="text-center font-sans text-xs text-red-600">
                    Something went wrong. Please call us on +382 6990 3844.
                  </p>
                )}
              </form>
            )}
          </div>
        </Reveal>
      </div>

      <style>{`
        .b-input {
          width: 100%;
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(214,167,93,0.3);
          border-radius: 0.75rem;
          padding: 0.7rem 0.85rem 0.7rem 2.2rem;
          font-family: var(--font-sans);
          font-size: 0.85rem;
          color: #35201a;
          outline: none;
          transition: border-color .3s, box-shadow .3s, background .3s;
        }
        .b-input:focus { border-color: #d6a75d; background: #fff; box-shadow: 0 0 0 3px rgba(214,167,93,0.18); }
        .b-input::placeholder { color: rgba(53,32,26,0.4); }
      `}</style>
    </section>
  );
}

function Input({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-sans text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
      <span className="relative block">
        <span className="pointer-events-none absolute bottom-[0.7rem] left-3 text-gold-deep">{icon}</span>
        {children}
      </span>
    </label>
  );
}
