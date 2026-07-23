import type { ImgHTMLAttributes, ReactNode } from "react";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  placeholder?: "blur" | "empty";
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  sizes?: string;
};

export default function Image({
  src,
  alt,
  width,
  height,
  fill,
  className,
  style,
  priority,
  quality,
  ...rest
}: ImageProps) {
  const resolvedStyle: React.CSSProperties = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", ...style }
    : { width: width ? undefined : "auto", height: height ? undefined : "auto", ...style };

  return (
    <img
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      style={resolvedStyle}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "async" : "auto"}
      fetchPriority={priority ? "high" : undefined}
      {...rest}
    />
  );
}
