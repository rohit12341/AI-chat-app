const responses = [
  "Hello 👋",
  "How can I help you today?",
  "That's an interesting question.",
  "Let's work through it together.",
];

export function getMockResponse() {
  return responses[Math.floor(Math.random() * responses.length)];
}
