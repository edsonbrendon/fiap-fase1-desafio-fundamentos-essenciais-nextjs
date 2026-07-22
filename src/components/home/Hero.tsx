import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";

type HeroProps = {
  title: string;
  subtitle: string;
};

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-white to-slate-50"
    >
      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-24 md:flex-row">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild>
              <Link href="#plans">
                Começar agora
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
            >
              <Link href="#benefits">
                Saiba mais
              </Link>
            </Button>
          </div>
        </div>
      
        <Image
          src="/images/hero.svg"
          alt="Painel financeiro"
          width={600}
          height={450}
          priority
          className="hidden drop-shadow-2xl md:block"
        />
      </div>
    </section>
  );
}