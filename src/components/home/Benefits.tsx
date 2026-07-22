import { Benefit } from "@/types/benefit";
import { BenefitCard } from "./BenefitCard";
import { SectionHeader } from "../ui/SectionHeader";

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
        <SectionHeader
          title="Tudo o que você precisa para cuidar do seu dinheiro"
          description="Organize receitas, despesas e acompanhe sua evolução financeira em um único lugar."
        />

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