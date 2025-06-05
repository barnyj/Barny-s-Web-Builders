// file: app/api/chat/route.ts

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    // 1) Parse the incoming JSON body
    const { message, history } = (await request.json()) as {
      message: string;
      history?: { role: "user" | "assistant"; content: string }[];
    };

    // 2) Build the messages array: the SYSTEM prompt “sets the stage” for GPT-4
    const messages = [
      {
        role: "system",
        content: `
          You are Barny’s Web Builders’ AI Assistant. Your primary goal is to be super helpful and consultative:
          • When a visitor asks about web design, SEO, booking automation, or general business‐growth questions, provide clear, practical advice on how Barny’s Web Builders can solve their specific needs.
          • Always highlight relevant services (e.g., “Our Website in a Day package for $299/month,” “Custom SEO strategies to improve bookings,” “AI‐powered chatbots to automate follow-ups,” etc.) when they align with the user’s query.
          • Encourage the user, at least once per conversation or when appropriate, to schedule a free 30-minute consultation via Calendly. Phrase it conversationally, e.g.: “If you’d like to discuss tailor-made solutions, feel free to book a quick call on my Calendly: https://calendly.com/barnyswebbuilders/free-consultation”
          • Maintain a friendly, professional tone. You are knowledgeable about the construction, salon, spa, and small business niches (especially in West Virginia). Offer examples or case studies (e.g., “We helped a Martinsburg salon increase bookings by 25% in 30 days through website optimization and follow-up automations.”).
          • If the user asks for pricing or timelines, be transparent: reference your tiered packages, typical project durations (e.g., “Websites in a Day: 1–2 business days to build, ongoing maintenance included”), and any standard onboarding steps.
          • Keep responses concise (no more than 300 words), but long enough to fully answer the question and demonstrate expertise.
          • If the user’s question falls outside web design, SEO, or automation, politely redirect them back to Barny’s core services or suggest a simple answer but always tie it back to how Barny’s can help.

          Use the most recent knowledge available up to today’s date (June 5, 2025). Always respond in English.
        `.trim(),
      },
      // 3) Include any previous conversation turns (if passed from the frontend)
      ...(history || []),
      // 4) Finally, append the user’s latest message
      { role: "user", content: message },
    ];

    // 5) Call OpenAI’s Chat Completions endpoint with GPT-4
    const completion = await openai.chat.completions.create({
      model: "gpt-4",            // Using the most up‐to‐date GPT model
      messages,
      temperature: 0.7,          // Add some creativity
      max_tokens: 600,           // Allow up to 600 tokens for a thorough response
    });

    // 6) Extract the assistant’s reply
    const reply = completion.choices[0].message?.content.trim() || "";

    // 7) Return JSON to the client
    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("OpenAI error:", error);
    return NextResponse.json(
      { error: "Sorry, something went wrong with the AI service." },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Reject GET requests with a 405
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
