import { useState } from "react";

interface Props {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({
  onSend,
  disabled = false,
}: Props) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value.trim()) return;

    onSend(value);
    setValue("");
  };

  return (
    <div className="border-t border-zinc-800 p-4">
      <div className="mx-auto flex max-w-3xl gap-3">
        <textarea
          rows={1}
          value={value}
          disabled={disabled}
          placeholder="Ask anything..."
          onChange={(e) => setValue(e.target.value)}
          className="flex-1 resize-none rounded-xl border border-zinc-700 bg-zinc-900 p-3 outline-none focus:border-blue-500"
        />

        <button
          disabled={disabled}
          onClick={handleSend}
          className="rounded-xl bg-blue-600 px-6 hover:bg-blue-500 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}