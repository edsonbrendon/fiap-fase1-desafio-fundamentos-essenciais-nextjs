import { Button } from "@/components/ui/Button";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { getPlanById } from "@/services/plan.service";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PlanPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: PlanPageProps): Promise<Metadata> {
  const { id } = await params;

  const plan = await getPlanById(id);

  if (!plan) {
    return {
      title: "Plano não encontrado",
    };
  }

  return {
    title: `${plan.title} | FinControl`,
    description: plan.description,
  };
}

export default async function PlanPage({
  params,
}: PlanPageProps) {
  const { id } = await params;

  const plan = await getPlanById(id);

  if (!plan) {
    notFound();
  }

  return (
    <main className="bg-slate-50">
      <ScrollToTop />
      <div className="mx-auto max-w-7xl px-6 py-12">
        <Link
          href="/#plans"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] transition hover:underline"
        >
          <ArrowLeft size={18} />
          Voltar para os planos
        </Link>

        <div className="mt-8 grid gap-16 lg:grid-cols-[2fr_1fr]">
          <div>
            <span className="rounded-full bg-[var(--primary)]/10 px-4 py-2 text-sm font-semibold text-[var(--primary)]">
              Plano
            </span>

            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900">
              {plan.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {plan.description}
            </p>

            <h2 className="mt-12 text-2xl font-bold text-slate-900">
              O que está incluso:
            </h2>

            <ul className="mt-6 space-y-2">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 rounded-x p-2"
                >
                  <span className="text-slate-700">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Investimento
            </p>

            <div className="mt-4">
              <span className="text-5xl font-extrabold text-[var(--primary)]">
                {plan.price}
              </span>

              {plan.price !== "Sob consulta" && (
                <span className="ml-2 text-slate-500">
                  /mês
                </span>
              )}
            </div>

            <Button
              asChild
              className="mt-8 w-full"
            >
              <Link href="/#contact">
                Assinar agora
              </Link>
            </Button>

            <div className="mt-6 space-y-2 border-t border-slate-200 pt-6">
              <div className="flex items-center gap-3 text-slate-600">
                <span>Pagamento seguro</span>
              </div>

              <div className="flex items-center gap-3 text-slate-600">
                <span>Cancele quando quiser</span>
              </div>

              <div className="flex items-center gap-3 text-slate-600">
                <span>Sem taxas ocultas</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}