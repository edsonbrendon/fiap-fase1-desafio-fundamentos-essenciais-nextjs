import Link from "next/link";
import { Button } from "../ui/Button";

type PlanCardProps = {
  id: string;
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
};

export function PlanCard({
  id,
  title,
  price,
  features,
  highlighted = false,
}: PlanCardProps) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        highlighted
          ? "border-[var(--primary)] bg-slate-900 text-white"
          : "border-slate-200 bg-white"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[var(--primary)] px-4 py-1 text-sm font-semibold text-white shadow-md">
          Mais Popular
        </span>
      )}

      <h3
        className={`text-2xl font-bold ${
          highlighted ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h3>

      <div className="mt-6">
        <span
          className={`text-4xl font-extrabold ${
            highlighted
              ? "text-white"
              : "text-[var(--primary)]"
          }`}
        >
          {price}
        </span>

        {price !== "Sob consulta" && (
          <span
            className={`ml-2 ${
              highlighted
                ? "text-slate-300"
                : "text-slate-500"
            }`}
          >
            /mês
          </span>
        )}
      </div>

      <ul className="mt-8 flex-1 space-y-4">
        {features.map((feature) => (
          <li
            key={feature}
            className={`flex items-center gap-3 ${
              highlighted
                ? "text-slate-300"
                : "text-slate-600"
            }`}
          >
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant={highlighted ? "light" : "primary"}
        className="mt-10 w-full"
      >
        <Link href={`/plans/${id}`}>
          Ver detalhes
        </Link>
      </Button>
    </article>
  );
}