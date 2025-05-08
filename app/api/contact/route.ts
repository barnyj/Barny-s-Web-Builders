// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // 1. Build the mail payload
    const msg = {
        to: SENDER_EMAIL,           // your inbox or a distribution list
        from: process.env.SENDER_EMAIL!, // verified sender
        subject: `New Contact from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Message:
          ${message}
        `,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong><br/>${message}</p>`,
      }
  
      // 2. Send it
      await sgMail.send(msg)

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
