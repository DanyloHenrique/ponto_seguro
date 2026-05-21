# Ponto Seguro — Frontend

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

Interface web da plataforma Ponto Seguro, desenvolvida para centralizar informações e facilitar a gestão em situações de emergência climática e desastres naturais.

🌐 **Deploy:** [ponto-seguro-zeta.vercel.app](https://ponto-seguro-zeta.vercel.app/)
🔗 **Backend:** [github.com/DanyloHenrique/ponto_seguro_api](https://github.com/DanyloHenrique/ponto_seguro_api)

## 📄 Descrição do Projeto

A ideia surgiu a partir do desafio sobre enchentes e desastres climáticos no Brasil. Pensando nesse cenário, percebi que em meio ao caos de um desastre, as pessoas enfrentam dois problemas muito concretos: não sabem onde há abrigos com vagas disponíveis, e famílias inteiras ficam separadas sem nenhuma forma estruturada de se reencontrar. Além disso, comumente nessas situações, as informações ficam em plataformas diferentes, ocasionando em uma dificuldade pela difusam das informações, vítimas não conseguem localizar abrigos próximos com vagas, e familiares de pessoas desaparecidas não têm para onde recorrer além de redes sociais e ligações sem resposta. A ausência de um sistema que cruze essas informações prolonga o sofrimento de quem já está em situação de vulnerabilidade extrema.

O Ponto Seguro é uma plataforma que centraliza a gestão de emergências climáticas em três frentes: permite que vítimas encontrem abrigos próximos com vagas em tempo real, que coordenadores gerenciem a ocupação dos abrigos e façam check-in de chegantes, e que familiares registrem pessoas desaparecidas. O diferencial do sistema é o **Match** — um mecanismo que cruza os dados de desaparecidos com as pessoas registradas nos abrigos, oferecendo um caminho concreto de alívio para famílias preocupadas.

## 💻 Tecnologias utilizadas

- **React** - Construção de interfaces de usuário.
- **TypeScript** - Tipagem estática e segurança para o código.
- **Vite** - Ambiente de desenvolvimento e build.
- **Tailwind CSS** - Estilização ágil.
- **React Router** - Gerenciamento de rotas.
- **Axios** - Requisições e consumo de APIs.
- **Zod** - Validação de dados.
- **Biome** - Linter e formatador.

## Capturas de Tela

### Home
<img width="1366" height="728" alt="image" src="https://github.com/user-attachments/assets/1bbbd88f-0f23-4fa0-8cd2-855f8336858a" />

### Gerenciar Abrigo
<img width="1366" height="728" alt="image" src="https://github.com/user-attachments/assets/61cf880e-29cd-4009-852c-41a97055cc85" />

Veja todas as capturas de telas: [capturas de tela](./SCREENSHOTS.md)

## Scripts

| Comando | Descrição |
|---|---|
| `pnpm run dev` | Inicia o servidor de desenvolvimento |
| `pnpm run build` | Compila o projeto para produção |
| `pnpm run preview` | Visualiza o build de produção localmente |
| `pnpm run lint` | Verifica erros de lint com o Biome |
| `pnpm run format` | Formata o código com o Biome |

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

## 🛠 Instalação e Execução
Siga os passos abaixo para rodar o frontend localmente na sua máquina:

### Pré-requisitos

- **Node.js** - v20.x ou superior — *projeto desenvolvido na v25.5.0*
- **PNPM** - v9.x ou superior — *projeto desenvolvido na v10.33.2*

- Caso ainda não tenha o pnpm instalado:
```bash
npm install -g pnpm
```

### Passo a Passo para execução

1. **Clone o repositório**
```bash
git clone https://github.com/DanyloHenrique/ponto_seguro.git
cd ponto_seguro
```

2. **Instalar dependências**
```bash
pnpm install
```

3. **Configurar a URL da API do backend**
⚠️ **Atenção:** crie um arquivo `.env` na raiz antes de executar.
```env
VITE_URL_PONTO_SEGURO_API=https://ponto-seguro-api.onrender.com
```

4. **Executar o projeto**
```bash
pnpm run dev
```
O aplicativo estará disponível em: **http://localhost:5173/**

## Outros comandos
 
| Comando        | Descrição                        |
| -------------- | -------------------------------- |
| `pnpm build`   | Gera o build de produção         |
| `pnpm preview` | Visualiza o build localmente     |
