import { Message as MessageType } from "@app/app/types/chat";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Message({ message }: { message: MessageType }) {
  const isUser = message.role === "user";

  if (!message.content) {
    return null;
  }

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-full flex flex-col justify-end `}>
        <div
          className={`rounded-3xl px-5 py-3 whitespace-pre-wrap
          ${isUser ? "bg-black text-white" : "bg-zinc-100 text-black"}`}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {message.content}
          </ReactMarkdown>
        </div>
        <span className="px-2 text-xs text-zinc-400 text-right">
          {new Date(message.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
}
