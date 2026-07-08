import ChatInput from "./ChatInput";
import EmptyState from "./EmptyState";
import { useSelector } from "react-redux";
import MessageList from "./MessageList";
import { RootState } from "@app/app/store";

export default function ChatArea() {
  const messages = useSelector((state: RootState) => state.chat.messages);

  console.log("messages", messages);

  const isEmpty = messages.length === 0;

  return (
    <section className="flex flex-1 flex-col">
      <div className="flex flex-1 overflow-y-auto">
        {isEmpty ? <EmptyState /> : <MessageList messages={messages} />}
      </div>

      <ChatInput />
    </section>
  );
}
