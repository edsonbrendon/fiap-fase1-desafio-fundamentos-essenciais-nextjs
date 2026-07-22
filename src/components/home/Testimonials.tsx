import { Testimonial } from "@/types/testimonial";
import { TestimonialCard } from "./TestimonialCard";
import { SectionHeader } from "../ui/SectionHeader";

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export function Testimonials({
  testimonials,
}: TestimonialsProps) {
  return (
    <section
      id="testimonials"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          title="Quem usa recomenda"
          description="
            Descubra como o FinControl está ajudando pessoas a
            organizarem suas finanças de forma simples e eficiente."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}