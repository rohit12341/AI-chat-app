import ChatInput from "./ChatInput";
import EmptyState from "./EmptyState";
import { useSelector } from "react-redux";
import MessageList from "./MessageList";
import { RootState } from "@app/app/store";

export default function ChatArea() {
  const messages = useSelector((state: RootState) => state.chat.messages);

  const isEmpty = messages.length === 0;

  return (
    <section className="flex flex-1 min-h-0 flex-col overflow-hidden h-[calc(100vh-90px)]">
      {isEmpty ? <EmptyState /> : <MessageList messages={messages} />}
      <ChatInput />
    </section>
  );
}
