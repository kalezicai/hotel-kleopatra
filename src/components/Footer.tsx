"use client";

import { useState } from "react";
import { LogoMark } from "./Logo";
import { Mail, Phone, MapPin, Send, Check, ArrowUp } from "lucide-react";
import Link from "next/link";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 9h3l.5-3H14V4.2c0-.8.3-1.2 1.3-1.2H17V.3C16.6.2 15.4 0 14.3 0 11.8 0 10 1.5 10 4v2H7v3h3v9h4V9z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Rooms", href: "/rooms" },
  { label: "Stay", href: "/accommodations" },
  { label: "Experience", href: "/experience" },
  { label: "Dining", href: "/dining" },
  { label: "Gallery", href: "/gallery" },
  { label: "Location", href: "/location" },
  { label: "Guest Reviews", href: "/guests" },
];

const policies: { label: string; href: string }[] = [];

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-chocolate text-white/75">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 0%, rgba(214,167,93,0.45), transparent 35%), radial-gradient(circle at 90% 100%, rgba(58,136,201,0.25), transparent 40%)",
        }}
      />

      <div className="container-lux relative">
        {/* Newsletter */}
        <div className="grid items-center gap-8 border-b border-white/10 py-12 md:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl text-white md:text-3xl">
              Letters from the coast
            </h3>
            <p className="mt-2 max-w-md font-manrope text-sm text-white/60">
              Seasonal offers, quiet-season escapes and stories from Ulcinj — a few
              times a year, never more.
            </p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
            className="flex w-full max-w-md gap-3 justify-self-end"
          >
            <div className="relative flex-1">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value); setDone(false); }}
                placeholder="Your email"
                className="w-full rounded-full border border-white/15 bg-white/5 py-3.5 pl-11 pr-4 font-sans text-sm text-white placeholder:text-white/35 outline-none transition focus:border-gold/60 focus:bg-white/10"
              />
            </div>
            <button type="submit" aria-label="Subscribe to newsletter" className="btn-gold shrink-0 !px-5">
              {done ? <Check size={18} /> : <Send size={16} />}
            </button>
          </form>
        </div>

        {/* Columns */}
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark size={80} />
              <div>
                <div className="font-display text-lg text-white">Hotel Kleopatra</div>
                <div className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-gold">
                  Ulcinj · Montenegro
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-xs font-cormorant text-lg italic leading-snug text-white/65">
              A family-run hotel above the Adriatic, where every guest
              arrives as a stranger and leaves as a friend.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="https://www.instagram.com/hotelkleopatra/" target="_blank" rel="noreferrer" aria-label="Hotel Kleopatra on Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-500 hover:border-gold hover:bg-gold hover:text-white">
                <InstagramIcon size={16} />
              </a>
              <a href="https://www.facebook.com/hotelkleopatra" target="_blank" rel="noreferrer" aria-label="Hotel Kleopatra on Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-500 hover:border-gold hover:bg-gold hover:text-white">
                <FacebookIcon size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold">Explore</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="link-underline font-manrope text-sm text-white/65 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold">Information</h4>
            <ul className="mt-5 space-y-3">
              {policies.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="link-underline font-manrope text-sm text-white/65 hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold">Contact</h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 font-manrope text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>Pinjesh BB, 85360 Ulcinj, Montenegro</span>
              </li>
              <li>
                <a href="tel:+38269903844" className="flex items-center gap-3 font-manrope text-sm hover:text-white">
                  <Phone size={16} className="shrink-0 text-gold" /> +382 6990 3844
                </a>
              </li>
              <li>
                <a href="mailto:info@hotelkleopatra.me" className="flex items-center gap-3 font-manrope text-sm hover:text-white">
                  <Mail size={16} className="shrink-0 text-gold" /> info@hotelkleopatra.me
                </a>
              </li>
            </ul>
            <a
              href="https://www.openstreetmap.org/?mlat=41.92487&mlon=19.21354#map=16/41.92487/19.21354"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-sans text-xs text-white/75 transition hover:border-gold hover:text-white"
            >
              <MapPin size={13} /> Open in Maps
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="font-sans text-xs text-white/45">
            © {new Date().getFullYear()} Hotel Kleopatra. All rights reserved. · Crafted with care on the Adriatic.
          </p>
          <a
            href="/"
            className="flex items-center gap-2 font-sans text-xs text-white/55 transition hover:text-gold"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
