"use client";

import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

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

  const bg = isHome && !scrolled && !open
    ? "bg-transparent"
    : "bg-ivory/85 shadow-[0_12px_40px_-28px_rgba(53,32,26,0.7)] backdrop-blur-xl";

  const logoVariant = isHome && !scrolled && !open ? "light" : "dark";
  const logoSize = isHome && !scrolled && !open ? 80 : 72;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${bg}`}>
      <nav className="container-lux flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <Logo variant={logoVariant} markSize={logoSize} />
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
                      : isHome && !scrolled
                        ? "text-white/90 hover:text-white"
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
          className={`flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
            isHome && !scrolled && !open
              ? "bg-white/20 text-white backdrop-blur"
              : "bg-chocolate text-white"
          }`}
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
