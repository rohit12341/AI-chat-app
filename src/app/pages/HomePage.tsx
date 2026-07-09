"use client";
import ChatWindow from "../features/chat/components/ChatWindow";

export default function HomePage() {
  return (
    <main className="flex flex-col overflow-hidden p-6 h-[calc(100vh-70px)]">
      <div className="flex-1 min-h-0">
        <ChatWindow />
      </div>
    </main>
  );
}
