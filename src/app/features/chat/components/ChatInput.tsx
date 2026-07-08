import { useState } from "react";

export default function ChatInput() {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim() === "") return;
    console.log("Sending message:", message);
    setMessage("");
  }
  return (
    <div className="p-6">
      <div className="mx-auto flex max-w-4xl rounded-2xl border p-3">
        <textarea
          rows={1}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message ChatGPT..."
          className="flex-1 resize-none bg-transparent outline-none"
        />

        <button className="rounded-lg p-2 hover:bg-gray-100" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
