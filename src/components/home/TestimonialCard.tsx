import { CircleUserRound } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  text: string;
};

export function TestimonialCard({
  name,
  text,
}: TestimonialCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[var(--primary)] hover:shadow-xl">
      <p className="leading-7 italic text-slate-600">
        "{text}"
      </p>

      <div className="mt-8 flex items-center gap-3">
        <CircleUserRound
          size={42}
          className="text-[var(--primary)]"
        />

        <div>
          <p className="font-semibold text-slate-900">
            {name}
          </p>

          <p className="text-sm text-slate-500">
            Cliente FinControl
          </p>
        </div>
      </div>
    </article>
  );
}