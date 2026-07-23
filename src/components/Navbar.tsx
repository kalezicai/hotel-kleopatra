"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { label: "Stay", href: "/accommodations" },
  { label: "Rooms", href: "/rooms" },
  { label: "Experience", href: "/experience" },
  { label: "Dining", href: "/dining" },
  { label: "Gallery", href: "/gallery" },
  { label: "Location", href: "/location" },
  { label: "Guests", href: "/guests" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative z-50 bg-ivory shadow-[0_12px_40px_-28px_rgba(53,32,26,0.7)]">
      <nav className="container-lux flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <Logo variant="dark" markSize={72} />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`link-underline font-sans text-[0.82rem] font-medium tracking-wide transition-colors ${
                    isActive
                      ? "text-gold-deep"
                      : "text-chocolate/80 hover:text-chocolate"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center lg:flex">
          <Link href="/#booking" className="btn-gold !px-6 !py-3 !text-[0.74rem]">
            Book Your Stay
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-chocolate text-white lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-lux mt-3 rounded-3xl bg-ivory/95 p-5 shadow-xl backdrop-blur-xl">
          <ul className="flex flex-col divide-y divide-chocolate/10">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 font-display text-lg text-chocolate"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#booking"
            onClick={() => setOpen(false)}
            className="btn-gold mt-4 w-full"
          >
            Book Your Stay
          </Link>
        </div>
      </div>
    </header>
  );
}
