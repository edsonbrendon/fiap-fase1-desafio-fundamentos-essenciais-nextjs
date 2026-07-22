import Image from "next/image";

import { Button } from "../ui/Button";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Vamos conversar
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Tem alguma dúvida sobre o FinControl? Envie uma mensagem e nossa
            equipe responderá o mais rápido possível.
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <form className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Nome"
                className="rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[var(--primary)]"
              />

              <input
                type="email"
                placeholder="E-mail"
                className="rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[var(--primary)]"
              />

              <textarea
                rows={6}
                placeholder="Mensagem"
                className="rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[var(--primary)]"
              />

              <Button type="submit" className="w-full">
                Enviar mensagem
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