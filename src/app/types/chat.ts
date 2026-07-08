export type role = "user" | "assistant";

export type Message = {
  id: string;
  role: role;
  content: string;
  createdAt: number;
};

export type ChatState = {
  messages: Message[];
  loading: boolean;
  isTyping: boolean;
  electedConversationId?: string;
};
