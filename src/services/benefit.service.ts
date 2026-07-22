import { benefits } from "@/data/benefits";
import { Benefit } from "@/types/benefit";

export async function getBenefits(): Promise<Benefit[]> {
  return benefits;
}