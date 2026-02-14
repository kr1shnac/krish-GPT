"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUp } from "lucide-react";
import {
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Card,
} from "@/components/ui/card";
import { ChatMessage } from "./ChatMessage";
import { ScrollArea } from "@/components/ui/scroll-area";

type Message = {
  id: string;
  role: "user" | "ai";
  content: string;
};

export function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "ai", content: "Heyy krish here, how can I help you?" },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>
            <h1 className="text-4xl font-bold">krish-GPT</h1>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[500px] w-full p-4 pr-4">
            <div className="flex flex-col gap-2">
              {messages.map((m) => (
                <ChatMessage key={m.id} role={m.role} content={m.content} />
              ))}
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Input
            type="search"
            placeholder="Search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={handleSend} size="icon" aria-label="Submit">
            <ArrowUp />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
