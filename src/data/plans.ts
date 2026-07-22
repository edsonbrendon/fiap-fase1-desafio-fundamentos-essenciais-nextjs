import { Plan } from "@/types/plan";

export const plans: Plan[] = [
  {
    id: "starter",
    title: "Starter",
    price: "R$ 19,90",
    description:
      "Ideal para quem deseja organizar as finanças pessoais de forma simples e eficiente. Tenha controle das suas receitas e despesas, acompanhe seus gastos e visualize relatórios essenciais para começar a construir uma vida financeira mais saudável.",
    features: [
      "Controle de receitas e despesas",
      "Relatórios básicos",
      "Suporte por e-mail",
    ],
  },
  {
    id: "pro",
    title: "Pro",
    price: "R$ 49,90",
    description:
      "Perfeito para quem busca um controle financeiro mais completo. Além dos recursos do plano Starter, você conta com relatórios avançados, definição de metas financeiras, backup em nuvem e suporte prioritário para acompanhar sua evolução com mais segurança e praticidade.",
    highlighted: true,
    features: [
      "Tudo do plano Starter",
      "Relatórios avançados",
      "Metas financeiras",
      "Backup em nuvem",
      "Suporte prioritário",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise",
    price: "R$ 69,90",
    description:
      "Desenvolvido para empresas que precisam de uma solução robusta para gestão financeira. Gerencie múltiplos usuários, acompanhe indicadores em dashboards corporativos, integre seus sistemas por API e conte com um gerente de conta dedicado para atender às necessidades do seu negócio.",
    features: [
      "Tudo do plano Pro",
      "Múltiplos usuários",
      "Dashboard corporativo",
      "Integração via API",
      "Gerente de conta dedicado",
    ],
  },
];