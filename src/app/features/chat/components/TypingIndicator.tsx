export default function TypingIndicator() {
  return (
    <div className="flex items-center space-x-2">
      <div className="h-2 w-2 rounded-full bg-gray-500 animate-bounce"></div>
      <div className="h-2 w-2 rounded-full bg-gray-500 animate-bounce delay-200"></div>
      <div className="h-2 w-2 rounded-full bg-gray-500 animate-bounce delay-400"></div>
    </div>
  );
}
