import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import sgMail from "@sendgrid/mail";

export async function POST(request: NextRequest) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? "");
  const to = process.env.EMAIL_ADDRESS ?? "";

  const data = await request.json();

  const msg = {
    to,
    from: "no-reply@dallinskinner.com",
    subject: "Make Anything Request",
    text: `Make Anything

    ${data.emailContent}
    `,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ sent: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ sent: false, error }, { status: 500 });
  }
}
