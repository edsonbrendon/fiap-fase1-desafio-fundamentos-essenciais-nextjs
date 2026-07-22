import { Benefit } from "@/types/benefit";
import { BenefitCard } from "./BenefitCard";

type BenefitsProps = {
  benefits: Benefit[];
};

export function Benefits({ benefits }: BenefitsProps) {
  return (
    <section
      id="benefits"
      className="bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Tudo o que você precisa para cuidar do seu dinheiro
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Organize receitas, despesas e acompanhe sua evolução financeira em
            um único lugar.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}