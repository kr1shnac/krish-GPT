"use client";

import { useState, useEffect, useCallback } from "react";
import { ChatWindow } from "@/components/ChatWindow";
import { FireMascot } from "@/components/FireMascot";
import { Flame, X, Swords } from "lucide-react";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [victimCount, setVictimCount] = useState(0);
  const [hasCountedThisSession, setHasCountedThisSession] = useState(false);

  // Load victim count from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("hellfire-victims");
    if (stored) {
      setVictimCount(parseInt(stored, 10));
    }
  }, []);

  // When the pit opens, count this as a new victim (once per chat session)
  const openPit = useCallback(() => {
    if (!hasCountedThisSession) {
      const newCount = victimCount + 1;
      setVictimCount(newCount);
      localStorage.setItem("hellfire-victims", newCount.toString());
      setHasCountedThisSession(true);
    }
    setChatOpen(true);
  }, [hasCountedThisSession, victimCount]);

  // Reset session tracking when modal closes so re-entering counts again
  const closePit = useCallback(() => {
    setChatOpen(false);
    setHasCountedThisSession(false);
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-coal">
      {/* ═══ LAYERED BACKGROUND ═══ */}
      <div className="fixed inset-0 bg-mesh-fire z-0" />
      <div className="fixed inset-0 z-[1]" style={{
        background: "radial-gradient(ellipse at 50% 0%, transparent 30%, rgba(0,0,0,0.6) 100%)"
      }} />
      <div className="fixed bottom-0 left-0 right-0 h-80 z-[2]" style={{
        background: "linear-gradient(to top, rgba(255,42,0,0.12), rgba(255,123,0,0.06) 40%, transparent)"
      }} />

      {/* Embers */}
      <div className="fixed inset-0 z-[3] pointer-events-none overflow-hidden">
        {[...Array(40)].map((_, i) => {
          const size = 2 + Math.random() * 5;
          const drift = (Math.random() - 0.5) * 80;
          const duration = 5 + Math.random() * 8;
          const delay = Math.random() * 10;
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: "-10px",
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(circle, ${["#ffea00", "#ff7b00", "#ff2a00"][i % 3]
                  }, transparent)`,
                boxShadow: `0 0 ${size * 3}px ${["#ff7b00", "#ffea00", "#ff2a00"][i % 3]}`,
                animation: `ember-rise ${duration}s linear infinite`,
                animationDelay: `${delay}s`,
                "--drift": `${drift}px`,
              } as React.CSSProperties}
            />
          );
        })}
      </div>

      {/* Smoke Wisps */}
      <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={`smoke-${i}`}
            className="absolute rounded-full"
            style={{
              bottom: "-50px",
              left: `${10 + i * 20}%`,
              width: "120px",
              height: "120px",
              background: "radial-gradient(circle, rgba(255,42,0,0.05), transparent)",
              animation: `smoke-rise ${8 + i * 2}s ease-out infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Scanlines */}
      <div className="fixed inset-0 z-[4] pointer-events-none scanlines" />

      {/* ═══ HERO CONTENT ═══ */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen px-4">

        {/* Top Badge */}
        <div className="flex items-center gap-2 bg-fire-red/10 border border-fire-red/20 rounded-full px-5 py-1.5 mb-10 animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <div className="w-2 h-2 rounded-full bg-fire-red animate-pulse" />
          <span className="text-[11px] font-orbitron tracking-[0.25em] text-fire-orange uppercase">
            LIVE • AI DESTRUCTION ARENA
          </span>
        </div>

        {/* Mascot */}
        <div className="mb-8 animate-fade-up animate-subtle-float" style={{ animationDelay: "0.3s", opacity: 0 }}>
          <FireMascot size={5} />
        </div>

        {/* Main Title */}
        <h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bungee text-transparent bg-clip-text bg-gradient-to-b from-fire-yellow via-fire-orange to-fire-red animate-title-slam text-center leading-none px-2"
          style={{
            filter: "drop-shadow(0 0 30px rgba(255,42,0,0.4)) drop-shadow(0 0 60px rgba(255,123,0,0.2))",
          }}
        >
          HELLFIRE
        </h1>

        {/* Decorative Line */}
        <div className="w-48 h-[2px] bg-gradient-to-r from-transparent via-fire-orange to-transparent my-6 animate-fade-up" style={{ animationDelay: "0.6s", opacity: 0 }} />

        {/* Subtitle */}
        <p className="text-gray-400 font-orbitron text-center max-w-lg text-sm md:text-base tracking-wide leading-relaxed mb-10 animate-fade-up px-4" style={{ animationDelay: "0.8s", opacity: 0 }}>
          Think you can outsmart the machine?{" "}
          <span className="text-fire-orange animate-glow-pulse inline-block font-semibold mt-1 sm:mt-0">
            Prepare to get destroyed.
          </span>
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10 sm:mb-12 animate-fade-up" style={{ animationDelay: "1s", opacity: 0 }}>
          {[
            { label: "VICTIMS", value: victimCount.toLocaleString() },
            { label: "WIN RATE", value: victimCount > 0 ? "100%" : "—" },
            { label: "MERCY", value: "0%" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl md:text-2xl font-bungee text-fire-orange text-glow-ember">{stat.value}</div>
              <div className="text-[10px] font-orbitron tracking-[0.2em] text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ═══ CHALLENGE BUTTON (Compact Chat Trigger) ═══ */}
        <div className="animate-fade-up" style={{ animationDelay: "1.2s", opacity: 0 }}>
          <button
            onClick={openPit}
            className="group relative flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-fire-red to-fire-orange text-white font-bungee text-lg tracking-wider shadow-[0_0_30px_rgba(255,42,0,0.4)] hover:shadow-[0_0_50px_rgba(255,42,0,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            {/* Animated glow ring */}
            <div className="absolute inset-0 rounded-xl animate-pulse-fire pointer-events-none" />
            <Swords size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            <span>ENTER THE PIT</span>
            <Flame size={20} className="animate-pulse" />
          </button>
        </div>

        {/* Footer */}
        <div className="mt-16 animate-fade-up" style={{ animationDelay: "1.4s", opacity: 0 }}>
          <p className="text-[10px] font-orbitron tracking-[0.3em] text-gray-700 uppercase">
            NO SURVIVORS • NO REFUNDS • NO MERCY
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          CHAT MODAL POPUP
         ═══════════════════════════════════════════════════ */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${chatOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={closePit}
      />

      {/* Modal Container */}
      <div
        className={`fixed inset-0 z-50 flex justify-center items-end sm:items-center sm:p-4 md:p-8 transition-all duration-500 pointer-events-none ${chatOpen ? "opacity-100" : "opacity-0"
          }`}
      >
        <div
          className={`relative w-full h-[95vh] sm:h-auto sm:max-w-3xl sm:max-h-[90vh] transition-all duration-500 flex flex-col ${chatOpen ? "translate-y-0 pointer-events-auto sm:scale-100" : "translate-y-full sm:translate-y-8 pointer-events-none sm:scale-95"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={closePit}
            className="absolute -top-14 right-4 sm:-top-4 sm:-right-4 z-[60] w-10 h-10 rounded-full bg-dark-ash border border-fire-red/30 flex items-center justify-center text-gray-400 hover:text-fire-red hover:border-fire-red hover:shadow-[0_0_15px_rgba(255,42,0,0.3)] transition-all duration-300 hover:rotate-90"
          >
            <X size={18} />
          </button>

          <ChatWindow />
        </div>
      </div>
    </main>
  );
}
