"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { stats } from "@/lib/data";

function useCountUp(target: number, decimals: number, run: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString();
}

function Stat({
  value,
  decimals,
  suffix,
  label,
  run,
}: {
  value: number;
  decimals: number;
  suffix: string;
  label: string;
  run: boolean;
}) {
  const display = useCountUp(value, decimals, run);
  return (
    <div className="text-center">
      <div className="font-display text-4xl text-white md:text-5xl">
        {display}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="mt-2 font-sans text-[0.68rem] uppercase tracking-[0.24em] text-white/70">
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-chocolate py-16 md:py-20"
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(214,167,93,0.5), transparent 40%), radial-gradient(circle at 80% 80%, rgba(58,136,201,0.35), transparent 40%)",
        }}
      />
      <Reveal className="container-lux relative grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s) => (
          <Stat key={s.label} {...s} run={run} />
        ))}
      </Reveal>
    </section>
  );
}
