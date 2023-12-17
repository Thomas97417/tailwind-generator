import { openai } from "@/src/lib/openai";
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
  const { prompt } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "assistant",
        content: `Write only Tailwind code.`,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return NextResponse.json({
    code: response.choices[0].message.content
  });
};