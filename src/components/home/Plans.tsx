import { Plan } from "@/types/plan";
import { PlanCard } from "./PlanCard";

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
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Escolha o plano ideal para você
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Comece gratuitamente e evolua conforme suas necessidades.
            Todos os planos oferecem uma experiência simples, segura e
            completa para cuidar das suas finanças.
          </p>
        </div>

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