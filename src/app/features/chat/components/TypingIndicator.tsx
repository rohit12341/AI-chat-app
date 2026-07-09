export default function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex gap-1 rounded-3xl bg-zinc-100 px-5 py-4">
        <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500" />
        <span
          className="h-2 w-2 animate-bounce rounded-full bg-zinc-500"
          style={{ animationDelay: "150ms" }}
        />
        <span
          className="h-2 w-2 animate-bounce rounded-full bg-zinc-500"
          style={{ animationDelay: "300ms" }}
        />
      </div>
    </div>
  );
}
