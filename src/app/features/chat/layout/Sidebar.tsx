const chats = [
  "React Interview",
  "Next.js App Router",
  "System Design",
  "AI Assistant",
];


export default function Sidebar() {
  return (
    <aside className="hidden w-72 border-r bg-zinc-900 text-white md:flex md:flex-col">
      <div className="p-4">
        <button className="flex w-full items-center gap-2 rounded-lg border border-zinc-700 p-3 hover:bg-zinc-800">
          + New Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-2">
        {chats.map((chat, i) => (
          <button
            key={i}
            className="mb-1 w-full rounded-md p-3 text-left hover:bg-zinc-800"
          >
            {chat}
          </button>
        ))}
      </div>
    </aside>
  );
}
