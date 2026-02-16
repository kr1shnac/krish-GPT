"use client";

import { useChat } from "ai/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "./ChatMessage";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

export function ChatWindow() {
  const [selectedModel, setSelectedModel] = useState("llama");

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
    body: { model: selectedModel },
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>
            <h1 className="text-4xl font-bold">krish-GPT</h1>
          </CardTitle>
          <div className="flex gap-4 p-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="model"
                value="llama"
                checked={selectedModel === "llama"}
                onChange={(e) => setSelectedModel(e.target.value)}
              />
              <span>Llama 3 (Fast)</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="model"
                value="gemini"
                checked={selectedModel === "gemini"}
                onChange={(e) => setSelectedModel(e.target.value)}
              />
              <span>Gemini 1.5 (Smart)</span>
            </label>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[500px] w-full p-4 pr-4">
            <div className="flex flex-col gap-2">
              {messages.map((m) => (
                <ChatMessage
                  key={m.id}
                  role={m.role === "user" ? "user" : "ai"}
                  content={m.content}
                />
              ))}
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="flex gap-2">
          <form onSubmit={handleSubmit} className="flex w-full gap-2">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask anything..."
            />
            <Button type="submit" size="icon" aria-label="Submit">
              <ArrowUp />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
