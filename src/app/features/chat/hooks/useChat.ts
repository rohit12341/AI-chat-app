import { useDispatch, useSelector } from "react-redux";
import {
  addMessage,
  completeMessage,
  setIsTyping,
  updateMessage,
} from "../slice/chatSlice";
import { nanoid } from "nanoid";
import { RootState } from "@app/app/store";
import { Message } from "@app/app/types/chat";

export function useChat() {
  const dispatch = useDispatch();
  const history = useSelector((state: RootState) => state.chat.messages);

  async function sendMessage(message: string) {
    dispatch(
      addMessage({
        id: nanoid(),
        content: message,
        role: "user",
        createdAt: Date.now(),
        status: "pending",
      }),
    );
    dispatch(setIsTyping(true));
    const assistantId = nanoid();

    dispatch(
      addMessage({
        id: assistantId,
        role: "assistant",
        content: "",
        createdAt: Date.now(),
        status: "streaming",
      }),
    );

    const apiMessages = history
      .filter(
        (msg: Message) =>
          !(msg.role === "assistant" && msg.content.trim() === ""),
      )
      .map((msg: Message) => ({
        role: msg.role,
        content: msg.content,
      }));
    apiMessages.push({
      role: "user",
      content: message,
    });

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: apiMessages,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error:", errorText);
      updateMessage({
        id: assistantId,
        content: "Error: Unable to fetch response from the server.",
      });
      dispatch(completeMessage(assistantId));
      dispatch(setIsTyping(false));
      return;
    }

    const reader = response?.body?.getReader();

    if (!reader) {
      console.error("No response body");
      dispatch(setIsTyping(false));
      return;
    }

    const decoder = new TextDecoder();
    let assistantText = "";

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        assistantText += chunk;
        console.log(chunk);
        dispatch(updateMessage({ id: assistantId, content: assistantText }));
      }
      dispatch(completeMessage(assistantId));
    } catch (err) {
      console.error("Stream Error:", err);
    } finally {
      dispatch(setIsTyping(false));
    }
  }

  return {
    sendMessage,
  };
}
