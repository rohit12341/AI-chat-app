import { Message as MessageType } from "@app/app/types/chat";

export default function Message({ message }: { message: MessageType }) {
  return (
    <div className="flex items-start space-x-4 p-4">
      <div className="h-10 w-10 rounded-full bg-gray-300"></div>
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">{message.role}</span>
          <span className="text-sm text-gray-500">{message.createdAt}</span>
        </div>
        <p className="mt-1 text-gray-700">{message.content}</p>
      </div>
    </div>
  );
}
