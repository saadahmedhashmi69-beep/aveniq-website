import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex h-11 md:h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-semibold transition-colors duration-150 ease-out motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-canvas hover:bg-accent-hover",
  secondary: "border border-edge-strong text-ink bg-transparent hover:bg-surface",
  ghost: "text-ink-muted hover:text-ink hover:bg-surface",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (props.href) {
    const { href, ...rest } = props as LinkButtonProps;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as NativeButtonProps;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
