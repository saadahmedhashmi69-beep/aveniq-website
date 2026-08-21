"use client";

import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function ConfirmButton({
  confirmMessage,
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { confirmMessage: string }) {
  return (
    <button
      type="submit"
      className={cn(
        "text-sm font-medium text-error hover:underline",
        className,
      )}
      onClick={(event) => {
        if (!window.confirm(confirmMessage)) {
          event.preventDefault();
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}
