export type Role = "user" | "assistant";

export interface Message {
  id: string;
  role: Role;
  content: string;
  createdAt: number;
}

export interface ChatState {
  messages: Message[];
  loading: boolean;
}