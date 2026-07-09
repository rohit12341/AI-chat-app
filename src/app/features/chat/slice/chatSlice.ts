import { ChatState, Message } from "@app/app/types/chat";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  loading: false,
  isTyping: false,
  electedConversationId: undefined,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state: ChatState, action: PayloadAction<Message>) => {
      state.messages = [...state.messages, action.payload];
    },
    updateMessage: (
      state: ChatState,
      action: PayloadAction<{ id: string; content: string }>,
    ) => {
      const message = state.messages.find((m) => m.id === action.payload.id);
      if (message) {
        message.content = action.payload.content;
      }
    },
    completeMessage: (state: ChatState, action: PayloadAction<string>) => {
      const message = state.messages.find((m) => m.id === action.payload);
      if (message) {
        message.status = "completed";
      }
    },
    setLoading: (state: ChatState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setIsTyping: (state: ChatState, action: PayloadAction<boolean>) => {
      state.isTyping = action.payload;
    },
    clearChat: (state: ChatState) => {
      state.messages = [];
      state.loading = false;
      state.isTyping = false;
    },
  },
});

export const {
  addMessage,
  setLoading,
  setIsTyping,
  clearChat,
  updateMessage,
  completeMessage,
} = chatSlice.actions;
export default chatSlice.reducer;
