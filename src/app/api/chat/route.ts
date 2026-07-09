import { streamText } from "ai";
// import { openai } from "@ai-sdk/openai";
import { google } from "@ai-sdk/google";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      //   model: openai("gpt-4.1-mini"),
      model: google("gemini-2.5-flash"),
      messages,
    });

    return new Response(result.textStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (err) {
    console.error(err);
    return Response.json(err, { status: 500 });
  }
}
