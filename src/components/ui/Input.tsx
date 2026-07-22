import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`rounded-lg border border-slate-300 px-4 py-3 outline-none transition-colors placeholder:text-slate-400 focus:border-[var(--primary)] ${className}`}
      {...props}
    />
  );
}