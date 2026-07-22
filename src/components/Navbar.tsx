"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "Stay", href: "#accommodations" },
  { label: "Rooms", href: "#all-rooms" },
  { label: "Experience", href: "#amenities" },
  { label: "Dining", href: "#restaurant" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Guests", href: "#reviews" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/85 py-1 shadow-[0_12px_40px_-28px_rgba(53,32,26,0.7)] backdrop-blur-xl"
          : "bg-transparent py-1"
      }`}
    >
      <nav className="container-lux flex items-center justify-between">
        <a href="#top" aria-label="Hotel Kleopatra — home" className="shrink-0">
          <Logo variant={scrolled ? "dark" : "light"} markSize={scrolled ? 72 : 80} />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`link-underline font-sans text-[0.82rem] font-medium tracking-wide transition-colors ${
                  scrolled ? "text-chocolate/80 hover:text-chocolate" : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center lg:flex">
          <a href="#booking" className="btn-gold !px-6 !py-3 !text-[0.74rem]">
            Book Your Stay
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className={`flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
            scrolled || open ? "bg-chocolate text-white" : "bg-white/20 text-white backdrop-blur"
          }`}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-lux mt-3 rounded-3xl bg-ivory/95 p-5 shadow-xl backdrop-blur-xl">
          <ul className="flex flex-col divide-y divide-chocolate/10">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 font-display text-lg text-chocolate"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="btn-gold mt-4 w-full"
          >
            Book Your Stay
          </a>
        </div>
      </div>
    </header>
  );
}
