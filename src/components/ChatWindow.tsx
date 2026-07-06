import Message from "./Message";
import TypingIndicator from "./TypingIndicator";
import type { Message as MessageType } from "@/types/chat";

interface Props {
  messages: MessageType[];
  loading: boolean;
}

export default function ChatWindow({
  messages,
  loading,
}: Props) {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-5">
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
          />
        ))}

        {loading && <TypingIndicator />}
      </div>
    </div>
  );
}