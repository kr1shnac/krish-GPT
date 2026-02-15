import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: groq("llama3-8b-8192"),
      messages,
    });

    return result.toAIStreamResponse(); // Note: version 3.2 uses toAIStreamResponse
  } catch (error) {
    console.error("AI Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
