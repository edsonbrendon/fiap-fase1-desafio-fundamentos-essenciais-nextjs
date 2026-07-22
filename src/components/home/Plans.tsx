import { Plan } from "@/types/plan";
import { PlanCard } from "./PlanCard";
import { SectionHeader } from "../ui/SectionHeader";

type PlansProps = {
  plans: Plan[];
};

export function Plans({ plans }: PlansProps) {
  return (
    <section
      id="plans"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          title="Escolha o plano ideal para você"
          description="
            Comece gratuitamente e evolua conforme suas necessidades.
            Todos os planos oferecem uma experiência simples, segura e
            completa para cuidar das suas finanças."
        />

        <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              id={plan.id}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              highlighted={plan.highlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}