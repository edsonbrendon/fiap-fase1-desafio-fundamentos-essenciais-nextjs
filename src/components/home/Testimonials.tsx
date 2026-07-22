import { Testimonial } from "@/types/testimonial";
import { TestimonialCard } from "./TestimonialCard";

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
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Quem usa recomenda
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Descubra como o FinControl está ajudando pessoas a
            organizarem suas finanças de forma simples e eficiente.
          </p>
        </div>

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