export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
      <h2 className="font-semibold">AI Assistant</h2>

      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
          R
        </div>
      </div>
    </header>
  );
}
