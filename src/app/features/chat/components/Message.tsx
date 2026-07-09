import { Message as MessageType } from "@app/app/types/chat";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code(props) {
                const { children, className } = props;
                const match = /language-(\w+)/.exec(className || "");

                if (match) {
                  return (
                    <SyntaxHighlighter style={oneDark} language={match[1]}>
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  );
                }

                return <code>{children}</code>;
              },
            }}
          >
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
