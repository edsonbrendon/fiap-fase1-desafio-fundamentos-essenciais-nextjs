import { testimonials } from "@/data/testimonials";
import { Testimonial } from "@/types/testimonial";

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials;
}