const chats = [
  "React Questions",
  "Trip Planner",
  "JavaScript",
];

export default function Sidebar() {
  return (
    <aside className="hidden w-72 border-r border-zinc-800 bg-zinc-900 md:flex md:flex-col">
      <div className="border-b border-zinc-800 p-4">
        <button className="w-full rounded-lg bg-zinc-800 p-3 text-left hover:bg-zinc-700">
          + New Chat
        </button>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto p-3">
        {chats.map((chat) => (
          <button
            key={chat}
            className="w-full rounded-lg px-3 py-2 text-left hover:bg-zinc-800"
          >
            {chat}
          </button>
        ))}
      </div>
    </aside>
  );
}