import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages, model } = await req.json();

    const selectedModel = model === "gemini" ? google("gemini-1.5-flash")
      : groq("llama-3.3-70b-versatile");

    const result = await streamText({
      model: selectedModel,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("CRITICAL AI ERROR:", error);
    return new Response(JSON.stringify({ error: "Check terminal for logs" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
    //   console.error("AI Error:", error);
    //   return new Response("Internal Server Error", { status: 500 });
    // }
  }
}