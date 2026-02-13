import React from "react";

interface ChatMessageProps {
  role: "user" | "ai";
  content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex w-full ${isUser ? "justify-end" : "justify-start"} mb-4`}
    >
      <div
        className={`px-4 py-2 rounded-lg max-w-[80%] text-sm ${
          isUser
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-gray-100 text-gray-800 rounded-bl-none"
        }`}
      >
        <div className="flex flex-col p-4">
          <ChatMessage role="user" content="Hey!!! i am the user" />
          <ChatMessage role="ai" content="how can i help?" />
        </div>
      </div>
    </div>
  );
}
