import { Content } from "next/font/google";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Backend Recieved: ", body);

    return NextResponse.json({
      role: "ai",
      Content: "hii not krish yet",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
