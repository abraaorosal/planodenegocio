# Desenvolve AI · Portfolio Interativo

Aplicação front-end criada com React, TypeScript, Vite e Tailwind CSS para apresentar o plano de negócio da Desenvolve AI de forma digital, moderna e interativa.

## ✨ Destaques

- Navegação fixa com seções âncora (Contexto, Trilhas, Operação, Finanças, Impacto, Investidores).
- Hero imersivo com cards de valor e chamada para ação.
- Trilhas formativas gamificadas com seleção dinâmica.
- Simulador financeiro com controle de alunos e churn, métricas automáticas e cenários financeiros.
- Seções de impacto social e proposta ao investidor com calls to action.
- Visual neon futurista, efeitos glassmorphism e animações via Framer Motion.

## 🚀 Como executar

```bash
npm install
npm run dev
```

O projeto utiliza Vite; ele abrirá em `http://localhost:5173` por padrão.

## 📦 Scripts adicionais

- `npm run build`: gera a versão de produção.
- `npm run preview`: executa a versão compilada.
- `npm run lint`: analisa o código com ESLint (requer dependências instaladas).

## 🛠️ Estrutura

- `src/App.tsx`: orquestração das seções.
- `src/components`: componentes reutilizáveis por seção.
- `src/data/content.ts`: dados dinâmicos usados em cards e simulações.
- `src/styles.css`: Tailwind + ajustes globais para look & feel neon.

## 📋 Próximos passos sugeridos

- Conectar dados reais via CMS ou backend para atualizar métricas automaticamente.
- Inserir gráficos avançados (ex.: Recharts) e vídeos no data room.
- Publicar em plataforma de hosting (Vercel/Netlify) e criar formulário de contato integrado ao CRM.

## 🌐 Publicação no GitHub Pages

O repositório já inclui:

- `vite.config.ts` com `base: "/planodenegocio/"` para funcionar no subcaminho do GitHub Pages.
- Workflow `.github/workflows/deploy.yml` que executa build (`npm run build`) e publica o conteúdo de `dist/` sempre que houver push na branch `main`.

Para finalizar:

1. No GitHub, abra *Settings → Pages*.
2. Em *Build and deployment*, escolha *GitHub Actions* (se ainda não estiver).
3. Faça um push para `main` (ou use *Re-run workflow* em *Actions*). O deploy aparecerá em *Actions → Deploy to GitHub Pages*.
4. Assim que o job `Deploy` finalizar, seu site estará disponível em `https://abraaorosal.github.io/planodenegocio/`.
