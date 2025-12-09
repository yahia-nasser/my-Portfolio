import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `New Message From ${name}`,
      text: message,
    });

    return Response.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (err) {
    console.log(err);
    return Response.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
