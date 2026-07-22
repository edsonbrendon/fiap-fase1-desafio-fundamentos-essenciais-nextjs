"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { SectionHeader } from "../ui/SectionHeader";
import { TextArea } from "../ui/TextArea";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim()) {
      alert("Informe seu nome.");
      return;
    }

    if (!email.trim()) {
      alert("Informe seu e-mail.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Informe um e-mail válido.");
      return;
    }

    if (!message.trim()) {
      alert("Digite uma mensagem.");
      return;
    }

    alert("Mensagem enviada com sucesso! 🚀");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          title="Vamos conversar"
          description="Tem alguma dúvida sobre o FinControl? Envie uma mensagem e nossa equipe responderá o mais rápido possível."
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="flex flex-col gap-5">
              <Input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextArea
                rows={6}
                placeholder="Mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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