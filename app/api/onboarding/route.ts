import { NextRequest, NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function POST(request: NextRequest) {
  const data = await request.json();

  await notion.pages.create({
    parent: { database_id: process.env.NOTION_DATABASE_ID! },
    properties: {
      "Name": {
        title: [{ text: { content: data.businessName } }],
      },
      "Target Audience": {
        rich_text: [{ text: { content: data.targetAudience } }],
      },
      "Brand Colors": {
        rich_text: [{ text: { content: data.brandColors } }],
      },
      // …repeat for each field (use title, rich_text, email, phone_number, select, etc.)
    },
  });

  return NextResponse.json({ ok: true });
}
