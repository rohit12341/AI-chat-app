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

export const { addMessage, setLoading, setIsTyping, clearChat } =
  chatSlice.actions;
export default chatSlice.reducer;
