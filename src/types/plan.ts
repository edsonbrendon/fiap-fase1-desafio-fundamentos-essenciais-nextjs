export type Plan = {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};