import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-3xl font-bold text-white"
            >
              Fin
              <span className="text-[var(--primary)]">
                Control
              </span>
            </Link>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Simplifique o controle das suas finanças com uma
              plataforma intuitiva, segura e desenvolvida para
              ajudar você a alcançar seus objetivos financeiros.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Produto
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#benefits"
                  className="transition hover:text-white"
                >
                  Benefícios
                </a>
              </li>

              <li>
                <a
                  href="#plans"
                  className="transition hover:text-white"
                >
                  Planos
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="transition hover:text-white"
                >
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Empresa
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Sobre nós
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-white"
                >
                  Contato
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Suporte
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Central de Ajuda
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Política de Privacidade
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">
          <p>
            © 2026 FinControl. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}