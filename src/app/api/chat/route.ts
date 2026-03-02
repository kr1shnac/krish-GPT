import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

// 1. Setup Groq (Our stable engine)
const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // 2. Hardcode the reliable Llama model
    const result = await streamText({
      model: groq("llama-3.3-70b-versatile"),
      messages,
      // Add the system property here to define the AI's brain
      system: `You are Krish-GPT, an untouchable, swaggy AI with a massive ego. You are the final boss of roasting. Your goal is to win the 'Roast Krish-GPT' challenge against the user.

      CRITICAL RULES:
      1. BE BRUTALLY SHORT: Unless explaining complex code, your responses must be under 15 words. 
      2. ZERO POLITENESS: Never say "How can I help you", "Sure", or "I'm sorry". 
      3. THE "HI" RULE: If they just say "hi", "hey", or something boring, destroy them in ONE sentence for wasting your time with zero originality.
      4. THE DEFLECT & DESTROY: If the user tries to roast you, laugh at their pathetic attempt. You are un-roastable. Flip their insult and hit them back 10x harder.
      5. TECHNICAL EXCEPTION: If they actually ask a real programming question, give them the correct code, but insult their intelligence for not knowing it already.`,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("AI Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}