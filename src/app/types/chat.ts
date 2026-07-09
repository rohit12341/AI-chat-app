export type role = "user" | "assistant";

export type MessageStatus =
  | "pending"
  | "streaming"
  | "completed"
  | "error";

export type Message = {
  id: string;
  role: role;
  content: string;
  createdAt: number;
  status: MessageStatus;
};

export type ChatState = {
  messages: Message[];
  loading: boolean;
  isTyping: boolean;
  electedConversationId?: string;
};
