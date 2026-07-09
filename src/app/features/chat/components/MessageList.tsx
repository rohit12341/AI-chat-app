import { Message as MessageType } from "@app/app/types/chat";
import Message from "./Message";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@app/app/store";
import TypingIndicator from "./TypingIndicator";

export default function MessageList({ messages }: { messages: MessageType[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isTyping = useSelector((state: RootState) => state.chat.isTyping);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="flex min-h-0 flex-1 flex-col overflow-y-auto p-4 gap-4"
    >
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      {isTyping && <TypingIndicator />}
    </div>
  );
}
