# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
# AI Chat App (React + TypeScript + Vite)

A frontend scaffold for experimenting with generative AI chat experiences (ChatGPT-style). This project provides a React + TypeScript + Vite app where you'll implement an AI chatbot UI and connect it to a backend or third‑party AI API.

**Goals**
- **Explore**: prototype chat UX, message streaming, and system prompts.
- **Integrate**: connect to an AI provider (OpenAI, Anthropic, etc.) or your own server.
- **Iterate**: add features like message history, attachments, and fine‑tuned prompts.

**Quickstart**
- **Install deps**: `npm install`
- **Run dev server**: `npm run dev` (opens at http://localhost:5173)
- **Build**: `npm run build`
- **Preview**: `npm run preview`

**Environment**
- The frontend does not include a production AI backend. For local testing you can either:
  - Provide a backend proxy that holds your API key and exposes a chat endpoint, or
  - Use a provider client directly from the frontend (not recommended for public keys).
- Recommended Vite env var for a backend URL: `VITE_AI_API_URL`

**Project structure (high level)**
- `src/`: main application source
- `src/pages/`: page views like `ChatPage` and `HomePage`
- `src/components/`: reusable UI components
- `src/services/`: API and AI integration code
- `postcss.config.ts`, `tailwind.config.*`: styling setup

**Developer notes**
- `postcss.config.ts` uses `@tailwindcss/postcss` (PostCSS plugin). Vite should not load `tailwindcss` directly as a plugin.
- Use `VITE_` prefixed env vars for values exposed to the client.

**Next steps / suggestions**
- Implement `src/services/chat.ts` to call your AI backend.
- Add authentication and rate limiting on the server if you expose an API.
- Add tests for critical components and end-to-end flows.

**License**
- MIT — feel free to adapt for experiments and learning.

--
This README is at [README.md](README.md).
      reactX.configs['recommended-typescript'],
