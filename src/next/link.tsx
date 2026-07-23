import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children?: ReactNode;
  className?: string;
  prefetch?: boolean;
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, className, prefetch, ...rest }, ref) => {
    return (
      <a ref={ref} href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";

export default Link;
