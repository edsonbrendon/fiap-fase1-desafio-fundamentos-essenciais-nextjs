"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navigation = [
    { hash: "#home", label: "Início" },
    { hash: "#benefits", label: "Benefícios" },
    { hash: "#plans", label: "Planos" },
    { hash: "#testimonials", label: "Depoimentos" },
    { hash: "#contact", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-15 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight"
        >
          Fin<span className="text-[var(--primary)]">Control</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.hash}
              href={isHome ? item.hash : `/${item.hash}`}
              className="font-medium text-gray-600 transition-colors hover:text-[var(--primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="#"
            className="flex items-center gap-3 font-medium text-gray-600 transition-colors hover:text-[var(--primary)]"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
              <User size={18} className="text-[var(--primary)]" />
            </div>

            <span>Entrar</span>
          </Link>
        </div>
      </div>
    </header>
  );
}