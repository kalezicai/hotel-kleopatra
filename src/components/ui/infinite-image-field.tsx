"use client";

import { cn } from "@/lib/utils";
import { useCallback, useEffect, useRef } from "react";

const img = (name: string) => `/images/rooms/General/${name.replace(/\.jpg$/, ".webp")}`;

export const INFINITE_IMAGE_FIELD_IMAGES: string[] = [
  img("img_475500784.jpg"),
  img("img_376412024.jpg"),
  img("img_376416778.jpg"),
  img("img_376415226.jpg"),
  img("img_376415249.jpg"),
  img("img_376416698.jpg"),
  img("img_376560702.jpg"),
  img("img_376639112.jpg"),
  img("img_376672869.jpg"),
  img("img_376673715.jpg"),
  img("img_376810701.jpg"),
  img("img_376811848.jpg"),
  img("img_376879432.jpg"),
  img("img_376898535.jpg"),
  img("img_376898684.jpg"),
  img("img_376901425.jpg"),
  img("img_377820555.jpg"),
  img("img_377937225.jpg"),
  img("img_377939814.jpg"),
  img("img_379916548.jpg"),
  img("img_379916668.jpg"),
  img("img_379918018.jpg"),
  img("img_379918148.jpg"),
  img("img_379918674.jpg"),
  img("img_379919136.jpg"),
  img("img_584641762.jpg"),
  img("img_584642085.jpg"),
  img("img_584644530.jpg"),
  img("img_584645178.jpg"),
  img("img_584645541.jpg"),
  img("img_584647288.jpg"),
  img("img_584648976.jpg"),
  img("img_584651557.jpg"),
  img("img_586187572.jpg"),
  img("img_586187613.jpg"),
  img("img_586187629.jpg"),
  img("img_586187686.jpg"),
  img("img_586187944.jpg"),
  img("img_586187964.jpg"),
  img("img_586188616.jpg"),
  img("img_586189009.jpg"),
  img("img_586189016.jpg"),
  img("img_586189139.jpg"),
  img("img_586189142.jpg"),
  img("img_586189147.jpg"),
  img("img_586189167.jpg"),
  img("img_723326503.jpg"),
  img("img_723326510.jpg"),
  img("img_723326524.jpg"),
  img("img_723326532.jpg"),
  img("img_723326535.jpg"),
];

export interface InfiniteImageFieldProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  className?: string;
  images?: string[];
  imageWidth?: number;
  imageHeight?: number;
  gap?: number;
  maxSpeed?: number;
  smoothing?: number;
  borderRadius?: number;
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  const clampedR = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + clampedR, y);
  ctx.lineTo(x + w - clampedR, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + clampedR);
  ctx.lineTo(x + w, y + h - clampedR);
  ctx.quadraticCurveTo(x + w, y + h, x + w - clampedR, y + h);
  ctx.lineTo(x + clampedR, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - clampedR);
  ctx.lineTo(x, y + clampedR);
  ctx.quadraticCurveTo(x, y, x + clampedR, y);
  ctx.closePath();
}

export function InfiniteImageField({
  className,
  images = INFINITE_IMAGE_FIELD_IMAGES,
  imageWidth = 280,
  imageHeight = 300,
  gap = 24,
  maxSpeed = 5,
  smoothing = 0.07,
  borderRadius = 0,
  ...rest
}: InfiniteImageFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loadedImagesRef = useRef<HTMLImageElement[]>([]);
  const dimsRef = useRef({ w: 0, h: 0 });
  const camRef = useRef({ x: 0, y: 0 });
  const velRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const isInsideRef = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const imgs = images.map((src) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = src;
      return img;
    });
    loadedImagesRef.current = imgs;
  }, [images]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { w: W, h: H } = dimsRef.current;
    if (W === 0 || H === 0) {
      rafRef.current = requestAnimationFrame(draw);
      return;
    }

    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cellW = imageWidth + gap;
    const cellH = imageHeight + gap;
    const imgs = loadedImagesRef.current;
    const numImages = imgs.length;

    const tx = isInsideRef.current
      ? (mouseRef.current.x - 0.5) * 2 * maxSpeed
      : 0;
    const ty = isInsideRef.current
      ? (mouseRef.current.y - 0.5) * 2 * maxSpeed
      : 0;

    velRef.current.x += (tx - velRef.current.x) * smoothing;
    velRef.current.y += (ty - velRef.current.y) * smoothing;

    camRef.current.x += velRef.current.x;
    camRef.current.y += velRef.current.y;

    const camX = camRef.current.x;
    const camY = camRef.current.y;

    ctx.clearRect(0, 0, W, H);

    const colMin = Math.floor((camX - W / 2) / cellW) - 1;
    const colMax = Math.ceil((camX + W / 2) / cellW) + 1;
    const rowMin = Math.floor((camY - H / 2) / cellH) - 1;
    const rowMax = Math.ceil((camY + H / 2) / cellH) + 1;

    for (let row = rowMin; row <= rowMax; row++) {
      for (let col = colMin; col <= colMax; col++) {
        const sx = col * cellW - camX + W / 2 - imageWidth / 2;
        const sy = row * cellH - camY + H / 2 - imageHeight / 2;

        const imgIdx =
          Math.abs(col * 7 + row * 13 + ((col * row * 3) | 0)) % numImages;
        const img = imgs[imgIdx];

        ctx.save();
        drawRoundedRect(ctx, sx, sy, imageWidth, imageHeight, borderRadius);
        ctx.clip();

        if (img && img.complete && img.naturalWidth > 0) {
          ctx.drawImage(img, sx, sy, imageWidth, imageHeight);
        } else {
          ctx.fillStyle = "rgba(0,0,0,0.15)";
          ctx.fillRect(sx, sy, imageWidth, imageHeight);
        }
        ctx.restore();

        ctx.save();
        drawRoundedRect(ctx, sx, sy, imageWidth, imageHeight, borderRadius);
        ctx.strokeStyle = "rgba(255,255,255,0.06)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }
    }

    rafRef.current = requestAnimationFrame(draw);
  }, [imageWidth, imageHeight, gap, maxSpeed, smoothing, borderRadius]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      dimsRef.current = { w: rect.width, h: rect.height };
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    };

    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };

    const onEnter = () => { isInsideRef.current = true; };
    const onLeave = () => { isInsideRef.current = false; };

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseenter", onEnter);
    canvas.addEventListener("mouseleave", onLeave);

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseenter", onEnter);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [draw]);

  return (
    <div
      {...rest}
      className={cn("relative w-full h-full overflow-hidden", className)}
    >
      <canvas ref={canvasRef} className="block w-full h-full bg-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(250,247,242,0.6)_100%)]" />
    </div>
  );
}
