import ChatInput from "@/components/ChatInput";
import ChatWindow from "@/components/ChatWindow";
import Sidebar from "@/components/Sidebar";
import type { Message } from "@/types/chat";
import { useState } from "react";

const mockMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "Hello! How can I assist you today?",
    createdAt: Date.now(),
  },
];

export default function HomePage() {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: (messages.length + 1).toString(),
      role: "user",
      content,
      createdAt: Date.now(),
    };
    setLoading(true);
    setTimeout(() => {
      setMessages([...messages, newMessage]);
      setLoading(false);
    }, 1000); // Simulate a delay for the assistant's response
  };

  return (
    <div className="flex h-screen bg-zinc-950 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b border-zinc-800 px-6">
          <header className="border-b border-zinc-800 p-4 text-lg font-semibold">
            AI Chat
          </header>
        </header>

        {/* Messages */}
        <ChatWindow messages={messages} loading={loading} />

        {/* Input */}
        <ChatInput onSend={handleSendMessage} disabled={loading} />
      </main>
    </div>
  );
}
