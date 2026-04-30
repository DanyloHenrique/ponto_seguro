# Ponto Seguro — Frontend

Interface web da plataforma Ponto Seguro, desenvolvida para centralizar informações e facilitar a gestão em situações de emergência climática e desastres naturais.

🌐 **Deploy:** [ponto-seguro-zeta.vercel.app](https://ponto-seguro-zeta.vercel.app/)
🔗 **Backend:** [github.com/DanyloHenrique/ponto_seguro_api](https://github.com/DanyloHenrique/ponto_seguro)

## Apresentação da Ideia

A ideia surgiu a partir do desafio sobre enchentes no Brasil. Pensando nesse cenário, percebi que em meio ao caos de um desastre, as pessoas enfrentam dois problemas muito concretos: não sabem onde há abrigos com vagas disponíveis, e famílias inteiras ficam separadas sem nenhuma forma estruturada de se reencontrar.

## Problema Escolhido

Durante enchentes e desastres climáticos, a informação é dispersa e descentralizada. Vítimas não conseguem localizar abrigos próximos com vagas, e familiares de pessoas desaparecidas não têm para onde recorrer além de redes sociais e ligações sem resposta. A ausência de um sistema que cruze essas informações prolonga o sofrimento de quem já está em situação de vulnerabilidade extrema.

## Solução Proposta

O Ponto Seguro é uma plataforma que centraliza a gestão de emergências climáticas em três frentes: permite que vítimas encontrem abrigos próximos com vagas em tempo real, que coordenadores gerenciem a ocupação dos abrigos e façam check-in de chegantes, e que familiares registrem pessoas desaparecidas. O diferencial do sistema é o **Match** — um mecanismo que cruza os dados de desaparecidos com as pessoas registradas nos abrigos, oferecendo um caminho concreto de alívio para famílias preocupadas.

---

- [React 19](https://react.dev/)
- [TypeScript 6](https://www.typescriptlang.org/)
- [Vite 8](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router v7](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Zod](https://zod.dev/)
- [Biome](https://biomejs.dev/) — linting e formatação

## Pré-requisitos

- Node.js 20+
- npm 10+

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Compila o projeto para produção |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Verifica erros de lint com o Biome |
| `npm run format` | Formata o código com o Biome |

## Estrutura de pastas

```
src/
├── assets/                         # Imagens e arquivos estáticos
├── components/                     # Componentes reutilizáveis globais
│   ├── barProgress/
│   ├── header/
│   ├── input/
│   └── primaryButton/
├── contexts/                       # Contextos React (autenticação, etc.)
├── hooks/                          # Hooks globais reutilizáveis
├── layout/                         # Layout base com estrutura comum
├── pages/
│   ├── landingPage/                # Landing page pública
│   │   └── components/
│   ├── auth/
│   │   ├── login/                  # Tela de login
│   │   └── signUp/                 # Tela de cadastro
│   ├── home/                       # Home pós-login
│   │   └── components/
│   ├── nearbyShelters/             # Listagem de abrigos próximos
│   │   ├── components/
│   │   └── hooks/
│   ├── registerShelter/            # Cadastro de abrigo
│   │   └── components/
│   ├── aboutShelter/               # Painel do coordenador
│   │   ├── components/
│   │   └── hooks/
│   └── registerMissingPerson/      # Registro de pessoa desaparecida
│       └── components/
├── routes/                         # Definição e guarda de rotas
├── services/                       # Chamadas à API (Axios)
├── types/                          # Tipagens TypeScript globais
├── utils/                          # Funções utilitárias
└── main.tsx
```

## Rotas

| Rota | Acesso | Descrição |
|---|---|---|
| `/` | Público | Landing page |
| `/login` | Público | Login |
| `/criar-conta` | Público | Cadastro |
| `/abrigos-proximos` | Público | Listagem de abrigos próximos |
| `/home` | Autenticado | Home pós-login |
| `/pessoa-desaparecida` | Autenticado | Registrar pessoa desaparecida |
| `/cadastrar-abrigo` | Autenticado | Cadastrar novo abrigo |
| `/abrigo/:id` | Autenticado | Painel do coordenador do abrigo |
