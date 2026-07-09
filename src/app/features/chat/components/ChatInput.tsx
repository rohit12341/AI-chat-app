import { useRef, useState } from "react";
import { useChat } from "../hooks/useChat";
import { useSelector } from "react-redux";
import { RootState } from "@app/app/store";

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { sendMessage } = useChat();
  const isTyping = useSelector((state: RootState) => state.chat.isTyping);

  const handleSendMessage = async () => {
    if (message.trim() === "") return;

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
    setMessage("");
    await sendMessage(message);
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      setMessage("");
      await sendMessage(message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    }
  };

  return (
    <div className="p-6 shrink-0">
      <div className="mx-auto flex max-w-4xl rounded-2xl border p-3 items-end">
        <textarea
          ref={textareaRef}
          rows={2}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={message}
          placeholder="Message ChatGPT..."
          className="flex-1 resize-none bg-transparent outline-none"
          disabled={isTyping}
        />

        <button
          className="rounded-lg p-2 bg-zinc-900 text-white disabled:opacity-40"
          onClick={handleSendMessage}
          disabled={!message.trim() || isTyping}
        >
          Send
        </button>
      </div>
    </div>
  );
}
