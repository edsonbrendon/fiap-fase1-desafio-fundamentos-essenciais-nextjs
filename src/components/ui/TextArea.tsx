import { TextareaHTMLAttributes } from "react";

interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea({ className = "", ...props }: TextAreaProps) {
  return (
    <textarea
      className={`rounded-lg border border-slate-300 px-4 py-3 outline-none transition-colors placeholder:text-slate-400 focus:border-[var(--primary)] ${className}`}
      {...props}
    />
  );
}