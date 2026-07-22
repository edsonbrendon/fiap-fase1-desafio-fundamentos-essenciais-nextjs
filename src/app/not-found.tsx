import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-slate-50 px-6">
      <div className="flex max-w-xl flex-col items-center text-center">
        <Image
          src="/images/not-found.svg"
          alt="Página não encontrada"
          width={350}
          height={350}
          priority
        />

        <h1 className="mt-8 text-6xl font-bold text-slate-900">
          404
        </h1>

        <h2 className="mt-3 text-2xl font-semibold text-slate-800">
          Página não encontrada
        </h2>

        <p className="mt-4 max-w-md text-slate-600">
          A página que você está procurando não existe ou foi movida.
          Volte para a página inicial e continue explorando o FinControl.
        </p>

        <Link
          href="/"
          className="mt-8 rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--primary-hover)]"
        >
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}