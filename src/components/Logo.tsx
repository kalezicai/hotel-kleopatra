import Image from "next/image";

export function LogoMark({
  className,
  size = 80,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src="/images/logo.png"
      alt="Hotel Kleopatra"
      width={size}
      height={size}
      className={className}
      quality={95}
    />
  );
}

export function Logo({
  className,
  markSize = 80,
  variant = "dark",
}: {
  className?: string;
  markSize?: number;
  variant?: "dark" | "light";
}) {
  const main = variant === "light" ? "#ffffff" : "#35201a";
  const sub = variant === "light" ? "rgba(255,255,255,0.78)" : "#b9873d";
  return (
    <span className={`inline-flex items-center gap-5 ${className ?? ""}`}>
      <LogoMark size={markSize} />
      <span className="flex flex-col leading-none gap-0.5">
        <span
          className="font-display text-[1.18rem] font-semibold tracking-wide"
          style={{ color: main }}
        >
          Hotel Kleopatra
        </span>
        <span
          className="font-sans text-[0.6rem] font-medium uppercase tracking-[0.34em]"
          style={{ color: sub }}
        >
          Ulcinj · Montenegro
        </span>
      </span>
    </span>
  );
}
