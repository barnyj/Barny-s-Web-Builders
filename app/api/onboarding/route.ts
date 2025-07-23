// app/api/onboarding/route.ts
import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN! });

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("📝 [onboarding] payload:", data);

    const notionRes = await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID! },
      properties: {
        Name: {
          title: [{ text: { content: data.businessName } }],
        },
        "Target Audience": {
          rich_text: [{ text: { content: data.targetAudience } }],
        },
        // …map each field similarly…
      },
    });

    console.log("✅ [onboarding] Notion response:", notionRes);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("❌ [onboarding] Notion error:", err);
    return NextResponse.json(
      { success: false, error: err.message || String(err) },
      { status: 500 }
    );
  }
}
