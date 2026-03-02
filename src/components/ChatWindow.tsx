"use client";

import { useChat } from "ai/react";
import { ChatMessage } from "./ChatMessage";
import { FireMascot } from "./FireMascot";
import { Flame, Zap, Skull, Send, Swords, Trophy, AlertTriangle } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function ChatWindow() {
  const [selectedModel, setSelectedModel] = useState("llama");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    body: { model: selectedModel },
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const roastCount = messages.filter(m => m.role === "assistant").length;

  return (
    <div className="w-full">
      {/* Outer Shell with animated gradient border */}
      <div className="border-gradient-fire rounded-2xl overflow-hidden animate-fire-breathe">
        <div className="rounded-2xl overflow-hidden relative" style={{
          background: "linear-gradient(180deg, rgba(20,5,0,0.97), rgba(10,10,10,0.98) 30%, rgba(8,8,8,0.99))",
        }}>

          {/* Internal ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-gradient-to-b from-fire-red/8 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-20 bg-gradient-to-t from-fire-red/5 to-transparent pointer-events-none" />

          {/* ═══ HEADER ═══ */}
          <div className="relative px-5 py-3.5 border-b border-white/[0.06]">
            <div className="absolute inset-0 bg-gradient-to-r from-fire-red/[0.07] via-transparent to-fire-orange/[0.05]" />

            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative group">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-fire-red to-fire-orange flex items-center justify-center shadow-[0_0_15px_rgba(255,42,0,0.35)] group-hover:shadow-[0_0_25px_rgba(255,42,0,0.5)] transition-shadow">
                    <Flame className="text-white" size={18} />
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-fire-yellow animate-pulse shadow-[0_0_6px_#ffea00]" />
                </div>
                <div>
                  <h1 className="text-sm font-bungee text-white/90 tracking-wider">THE ROASTING PIT</h1>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[9px] font-orbitron tracking-[0.2em] text-gray-500">ARMED & DANGEROUS</span>
                  </div>
                </div>
              </div>

              {/* Roast Counter + Model Selector */}
              <div className="flex items-center gap-3">
                {roastCount > 0 && (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-fire-red/10 border border-fire-red/20">
                    <Trophy size={11} className="text-fire-yellow" />
                    <span className="text-[10px] font-bungee text-fire-orange">{roastCount}</span>
                  </div>
                )}
                <div className="flex bg-black/40 rounded-lg p-0.5 border border-white/[0.06]">
                  <button
                    onClick={() => setSelectedModel("llama")}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[9px] font-orbitron tracking-wider transition-all duration-300 ${selectedModel === "llama"
                        ? "bg-gradient-to-r from-fire-red to-fire-orange text-white shadow-[0_0_10px_rgba(255,42,0,0.25)]"
                        : "text-gray-600 hover:text-gray-400"
                      }`}
                  >
                    <Zap size={10} />
                    LLAMA
                  </button>
                  <button
                    disabled
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[9px] font-orbitron tracking-wider text-gray-700 cursor-not-allowed"
                  >
                    <Skull size={10} />
                    GEMINI
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ═══ MESSAGES AREA ═══ */}
          <div className="h-[450px] overflow-y-auto relative">
            <div className="sticky top-0 h-8 bg-gradient-to-b from-[rgba(10,5,0,0.95)] to-transparent z-10 pointer-events-none" />

            <div className="px-5 pb-4 flex flex-col gap-3" ref={scrollRef}>
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">

                  {/* Mascot in Empty State */}
                  <div className="relative mb-6 animate-subtle-float">
                    <FireMascot size={4} />
                  </div>

                  {/* Warning Banner */}
                  <div className="flex items-center gap-2 bg-fire-red/[0.06] border border-fire-red/15 rounded-lg px-4 py-2 mb-5">
                    <AlertTriangle size={14} className="text-fire-orange flex-shrink-0" />
                    <span className="text-[10px] font-orbitron tracking-wider text-fire-orange/80">
                      WARNING: THIS AI SHOWS NO MERCY
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-bungee text-xl text-white/80 mb-1 tracking-wider text-glow-subtle">
                    READY TO GET ROASTED?
                  </h2>
                  <p className="text-[11px] font-orbitron text-gray-600 tracking-wide mb-6">
                    Choose your opening line. Choose wisely.
                  </p>

                  {/* Suggested Prompts — styled as cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full max-w-md">
                    {[
                      { icon: <Swords size={14} />, text: "Roast me if you can", color: "from-fire-red/10 to-fire-red/5" },
                      { icon: <Skull size={14} />, text: "You're just a bot", color: "from-fire-orange/10 to-fire-orange/5" },
                      { icon: <Flame size={14} />, text: "I'm smarter than you", color: "from-fire-yellow/10 to-fire-yellow/5" },
                    ].map((prompt) => (
                      <button
                        key={prompt.text}
                        onClick={() => {
                          const fakeEvent = { target: { value: prompt.text } } as React.ChangeEvent<HTMLInputElement>;
                          handleInputChange(fakeEvent);
                          inputRef.current?.focus();
                        }}
                        className={`group flex flex-col items-center gap-2 p-3.5 rounded-xl bg-gradient-to-br ${prompt.color} border border-white/[0.04] hover:border-fire-red/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,42,0,0.1)] active:scale-95`}
                      >
                        <div className="text-fire-orange/60 group-hover:text-fire-orange transition-colors">
                          {prompt.icon}
                        </div>
                        <span className="text-[10px] font-orbitron tracking-wider text-gray-500 group-hover:text-gray-300 transition-colors leading-tight">
                          {prompt.text}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((m) => (
                    <ChatMessage
                      key={m.id}
                      role={m.role === "user" ? "user" : "ai"}
                      content={m.content}
                    />
                  ))}
                  {isLoading && (
                    <div className="flex items-center gap-2.5 px-1 animate-msg-left">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-fire-red to-fire-orange flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(255,42,0,0.3)]">
                        <Skull size={13} className="text-white" />
                      </div>
                      <div className="flex gap-1 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                        {[0, 1, 2].map((i) => (
                          <div
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-fire-orange"
                            style={{
                              animation: `typing-bounce 1s ease-in-out infinite`,
                              animationDelay: `${i * 0.15}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* ═══ INPUT AREA ═══ */}
          <div className="relative border-t border-white/[0.06]">
            <div className="absolute -top-px left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-fire-red/20 to-transparent" />

            <form onSubmit={handleSubmit} className="p-4 flex gap-2.5">
              <div className="flex-1 relative group">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your best shot..."
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm font-orbitron text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-fire-red/30 transition-all duration-300 tracking-wide"
                />
                {/* Animated focus underline */}
                <div className="absolute bottom-0 left-2 right-2 h-[1px] bg-gradient-to-r from-transparent via-fire-orange to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
              </div>

              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className={`relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0 ${input.trim()
                    ? "bg-gradient-to-br from-fire-red to-fire-orange text-white shadow-[0_0_15px_rgba(255,42,0,0.3)] hover:shadow-[0_0_25px_rgba(255,42,0,0.5)] hover:scale-105 active:scale-90"
                    : "bg-white/[0.03] text-gray-700 border border-white/[0.06]"
                  }`}
                aria-label="Send roast"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send size={16} className={input.trim() ? "rotate-[-45deg]" : ""} />
                )}
              </button>
            </form>

            {/* Bottom fire strip */}
            <div className="h-[2px] bg-gradient-to-r from-fire-red/0 via-fire-orange/40 to-fire-red/0" />
          </div>
        </div>
      </div>
    </div>
  );
}
