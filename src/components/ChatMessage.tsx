"use client";

import React from "react";
import { Skull, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface ChatMessageProps {
  role: "user" | "ai";
  content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"} ${isUser ? "animate-msg-right" : "animate-msg-left"}`}>
      <div className={`flex items-start gap-2.5 max-w-[85%] ${isUser ? "flex-row-reverse" : "flex-row"}`}>

        {/* Avatar */}
        <div className={`mt-0.5 flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center ${isUser
            ? "bg-white/[0.06] border border-white/[0.08]"
            : "bg-gradient-to-br from-fire-red to-fire-orange shadow-[0_0_12px_rgba(255,42,0,0.3)]"
          }`}>
          {isUser ? (
            <User size={14} className="text-gray-500" />
          ) : (
            <Skull size={14} className="text-white" />
          )}
        </div>

        {/* Message Bubble */}
        <div className={`relative group ${isUser ? "mr-1" : "ml-1"}`}>
          {/* Hover glow for AI messages */}
          {!isUser && (
            <div className="absolute -inset-1 bg-gradient-to-br from-fire-red/10 to-fire-orange/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
          )}

          <div
            className={`relative px-4 py-2.5 text-[13px] leading-relaxed font-orbitron tracking-wide ${isUser
                ? "bg-white/[0.06] border border-white/[0.08] text-gray-300 rounded-2xl rounded-tr-sm"
                : "bg-gradient-to-br from-[rgba(255,42,0,0.08)] to-[rgba(40,10,0,0.5)] border border-fire-red/15 text-gray-200 rounded-2xl rounded-tl-sm"
              }`}
          >
            {/* AI message left accent bar */}
            {!isUser && (
              <div className="absolute left-0 top-2 bottom-2 w-[2px] rounded-full bg-gradient-to-b from-fire-red via-fire-orange to-fire-red/30" />
            )}

            {isUser ? (
              <span>{content}</span>
            ) : (
              <div className="prose prose-invert prose-sm max-w-none 
                prose-p:m-0 prose-p:leading-relaxed
                prose-code:text-fire-orange prose-code:bg-fire-red/10 prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-code:text-xs prose-code:font-mono
                prose-pre:bg-black/40 prose-pre:border prose-pre:border-fire-red/10 prose-pre:rounded-lg
                prose-strong:text-fire-orange prose-strong:font-semibold
                prose-em:text-gray-400
              ">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
