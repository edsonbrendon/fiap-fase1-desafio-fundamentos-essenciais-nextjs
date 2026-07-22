# FinControl

O **FinControl** é uma landing page desenvolvida com **Next.js 15**, criada para apresentar uma plataforma fictícia de controle financeiro. O projeto demonstra boas práticas de organização, componentização e recursos modernos do App Router.

---

## Objetivo

Este projeto foi desenvolvido para praticar conceitos modernos do **Next.js**, como App Router, rotas dinâmicas, Server Components, Metadata API e organização de projetos escaláveis.

---

## Tecnologias

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Lucide React

---

## Estrutura do projeto

```text
src/
├── app/
│   ├── plans/
│   │   └── [id]/
│   ├── layout.tsx
│   ├── page.tsx
│   └── not-found.tsx
│
├── components/
│   ├── home/
│   ├── layout/
│   └── ui/
│
├── data/
├── services/
├── types/
```

---

## Arquitetura

O projeto segue uma arquitetura simples e escalável:

```text
Page
   ↓
Service
   ↓
Data
```

Atualmente os dados são carregados através de arquivos locais (`data`), permitindo uma futura substituição por uma API sem alterar a camada de apresentação.

---

## Funcionalidades

- Landing page responsiva
- Hero section
- Seção de benefícios
- Planos de assinatura
- Depoimentos
- Formulário de contato
- Footer
- Página dinâmica de detalhes dos planos
- SEO com Metadata API
- Página 404 personalizada

---

## Telas

### Home

- Hero
- Benefícios
- Planos
- Depoimentos
- Contato

### Detalhes do Plano

Cada plano possui uma página própria:

```text
/plans/starter
/plans/pro
/plans/enterprise
```

---

## Recursos do Next.js utilizados

- ✅ App Router
- ✅ Server Components
- ✅ Dynamic Routes
- ✅ generateMetadata
- ✅ not-found.tsx
- ✅ Loading UI
- ✅ Componentização
- ✅ Layouts Compartilhados

---

## Executando o projeto

Clone o repositório:

```bash
git clone https://github.com/edsonbrendon/fiap-fase1-desafio-fundamentos-essenciais-nextjs
```

Entre na pasta:

```bash
cd fiap-fase1-desafio-fundamentos-essenciais-nextjs
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Abra no navegador:

```text
http://localhost:3000
```

---

## Scripts

```bash
npm run dev
```

Executa o projeto em modo de desenvolvimento.

```bash
npm run build
```

Gera a versão de produção.

```bash
npm start
```

Inicia a aplicação em produção.

```bash
npm run lint
```

Executa o ESLint.