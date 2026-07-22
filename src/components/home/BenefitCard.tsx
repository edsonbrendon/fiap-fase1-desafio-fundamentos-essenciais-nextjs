type BenefitCardProps = {
  title: string;
  description: string;
};

export function BenefitCard({
  title,
  description,
}: BenefitCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[var(--primary)] hover:shadow-xl">
      <h3 className="text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>
    </article>
  );
}