import Image from "next/image";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { TextArea } from "../ui/TextArea";
import Link from "next/link";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          title="Vamos conversar"
          description="Tem alguma dúvida sobre o FinControl? Envie uma mensagem e nossa equipe responderá o mais rápido possível."
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <form className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-5">
              <Input
                type="text"
                placeholder="Nome"
              />

              <Input
                type="email"
                placeholder="E-mail"
              />

              <TextArea
                rows={6}
                placeholder="Mensagem"
              />

              <Button asChild>
                <Link href="/">
                  Enviar mensagem
                </Link>
              </Button>
            </div>
          </form>

          <div className="hidden justify-center lg:flex">
            <Image
              src="/images/contact.svg"
              alt="Contato FinControl"
              width={520}
              height={520}
              className="h-auto w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}