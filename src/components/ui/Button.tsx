import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "light";
  asChild?: boolean;
};

export function Button({
  children,
  variant = "primary",
  asChild = false,
  className = "",
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  const baseStyles =
    "inline-flex cursor-pointer items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)]",

    secondary:
      "border border-[var(--primary)] bg-transparent text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white",

    light:
      "bg-white text-[var(--primary)] hover:bg-slate-100",
  };

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}