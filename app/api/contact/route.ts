// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: NextRequest) {
  console.log("🔔 /api/contact route hit");

  try {
    const { name, email, message } = await request.json();
    const senderEmail = process.env.SENDER_EMAIL!;

    console.log("📬 Contact payload:", { name, email, message, senderEmail });
    // 1. Build the mail payload
    const msg = {
        to: senderEmail,           // your inbox or a distribution list
        from: senderEmail, // verified sender
        subject: `New Contact from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Message:${message}
        `,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong><br/>${message}</p>`,
      }
  
      // 2. Send it
      await sgMail.send(msg)
      console.log("✅ SendGrid send OK");
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err:any) {
    console.error("❌ SendGrid error:", err);
    if (err.response?.body) {
      console.error("❌ SendGrid response body:", err.response.body);
    }
    return NextResponse.json(
      { error: err.message || "Unknown error" },
      { status: 500 }
    );
  }
}
