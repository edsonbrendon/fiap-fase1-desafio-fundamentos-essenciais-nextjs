interface SectionHeaderProps {
  title: string;
  description: string;
}

export function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}