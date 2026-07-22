import { Hero } from "@/components/home/Hero";
import { Plans } from "@/components/home/Plans";
import { Benefits } from "@/components/home/Benefits";
import { Testimonials } from "@/components/home/Testimonials";
import { getPlans } from "@/services/plan.service";
import { getBenefits } from "@/services/benefit.service";
import { getTestimonials } from "@/services/testimonial.service";
import { Contact } from "@/components/home/Contact";

export default async function Home() {
  const [benefits, plans, testimonials] = await Promise.all([
    getBenefits(),
    getPlans(),
    getTestimonials(),
  ]);

  return (
    <main>
      <Hero
        title="Tenha controle total da sua vida financeira."
        subtitle="Organize despesas, acompanhe metas e tome decisões inteligentes com uma plataforma simples e intuitiva."
      />
      <Benefits benefits={benefits} />
      <Plans plans={plans} />
      <Testimonials testimonials={testimonials} />
      <Contact />
    </main>
  );
}