import { plans } from "@/data/plans";

export async function getPlans() {
  return plans;
}

export async function getPlanById(id: string) {
  return plans.find((plan) => plan.id === id);
}