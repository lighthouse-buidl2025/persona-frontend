# Welcome to PersonaChain AI

PersonaChain AI analyzes wallet activity using on-chain data and classifies wallets into behavioral personas. Based on these personas, the system suggests and automates personalized yield strategies with the help of AI agents.

✅
On-chain transaction analysis & wallet persona classification

4 persona types: Explorer, Diamond Hands, Whale, Degen

AI-based personalized strategy generation and automation

Dynamic agent interaction for strategy execution via chat interface

## ⚙️ Tech Stack

### Framework & Runtime

Next.js 15 (App Router) – Modular routing with layouts, server components, and API routes

React 18 – Component-driven UI architecture

Bun – Super-fast JavaScript runtime (used instead of Node.js)

### Styling & UI

Tailwind CSS – Utility-first CSS framework

shadcn/ui – Accessible UI components built with Tailwind

recharts – Data visualization (RadarChart, LineChart)

### State & Logic

Zustand – Lightweight global state management

React Query (TanStack) – Server state caching and data fetching

useMutation/useQuery hooks – For syncing and updating wallet persona data

### AI Integration

Eliza Agent API – LLM-based response agent

Dynamic SDK – Wallet login, authentication, and account linking

### Language

TypeScript – Strong static typing

### Project Structure

```
├── README.md
├── app
│ ├── (features)
│ │ ├── automation
│ │ ├── dashboard
│ │ ├── layout.tsx
│ │ ├── persona
│ │ └── recommendations
│ ├── (hero)
│ │ ├── layout.tsx
│ │ └── page.tsx
│ ├── api
│ │ ├── auth
│ │ ├── eliza-agent
│ │ ├── persona-engine
│ │ └── user
│ ├── favicon.ico
│ ├── globals.css
│ └── layout.tsx
├── bun.lock
├── components
│ ├── ai-assistant.tsx
│ ├── automation
│ │ ├── automation-activity-log.tsx
│ │ └── automation-rule-card.tsx
│ ├── automation.tsx
│ ├── common
│ │ ├── explore-btn.tsx
│ │ ├── protocols.tsx
│ │ └── tag.tsx
│ ├── email-modal.tsx
│ ├── header.tsx
│ ├── persona
│ │ ├── persona-recommendations.tsx
│ │ └── similar-persona-community.tsx
│ ├── persona-history.tsx
│ ├── persona-scores.tsx
│ ├── provider.tsx
│ ├── recommendation-history.tsx
│ ├── type-badge.tsx
│ └── ui
│ ├── button.tsx
│ ├── card.tsx
│ ├── chart.tsx
│ ├── dialog.tsx
│ ├── input.tsx
│ ├── label.tsx
│ ├── progress.tsx
│ ├── skeleton.tsx
│ ├── sonner.tsx
│ ├── table.tsx
│ └── tooltip.tsx
├── components.json
├── eslint.config.mjs
├── hooks
│ ├── use-agents.ts
│ ├── use-persona-group.ts
│ └── usePersonaData.ts
├── lib
│ └── utils.ts
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public # assets
├── stores
│ └── use-agent-store.ts
├── tsconfig.json
├── types
│ └── index.ts
├── utils
└── yarn.lock
```
