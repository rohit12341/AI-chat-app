# AI Chat App

A Next.js-based AI assistant chat application inspired by ChatGPT. This app combines a modern React UI with server-side API routing, state management, and Tailwind CSS to simulate a conversational assistant experience.

## What this project does

- Builds an AI-powered chat interface using Next.js App Router.
- Uses Redux Toolkit for centralized chat state management.
- Supports server-side API routing to proxy requests to an AI backend.
- Uses Tailwind CSS for responsive UI styling and dark mode-inspired theme.
- Separates client and server components for performance and maintainability.

## Key features

- Chat interface with message list and input area
- Redux-powered state management for messages, loading, and typing state
- Next.js `app` directory structure with layouts and pages
- Custom API route to forward chat requests to an AI service
- Styling with Tailwind CSS and global CSS imports

## How it works

1. User enters a message in the chat input.
2. The message is stored in Redux and displayed in the chat window.
3. The app sends the message to the AI backend through a Next.js API route.
4. The server route forwards the request to the configured AI service.
5. The response is returned and rendered as an assistant message in the conversation.

## Project structure

- `app/` - Next.js App Router files and layout
- `app/page.tsx` - root page that loads the chat UI
- `src/app/store/` - Redux store setup and typed exports
- `src/app/features/chat/` - chat slice and chat state logic
- `src/app/components/` - chat UI components and layout components
- `src/index.css` - Tailwind directives and global styling
- `tailwind.config.cjs` - Tailwind CSS content and safelist config
- `postcss.config.cjs` - PostCSS plugin config for Tailwind

## Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Environment

Create a `.env` file if you need custom AI backend configuration. Example env variables:

```env
AI_API_URL=https://your-ai-proxy-endpoint.example.com
```

If the app uses a Next.js API route, configure the backend URL in that route or use environment variables as needed.

## Notes

- The AI assistant behavior depends on the backend service you connect to.
- The current implementation is designed as a front-end shell that can be integrated with any compatible AI API.
- Keep server-only logic in Next.js API routes and client logic inside `"use client"` components.

## Deploy

To build for production:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

For deployment, use Vercel, Netlify, or any platform that supports Next.js.
