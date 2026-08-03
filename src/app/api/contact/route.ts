import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Helper function to escape HTML entities to prevent XSS
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, service } = body;

    // Escape user input to prevent XSS
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : "";
    const safeMessage = escapeHtml(message);
    const safeService = service ? escapeHtml(service) : "";

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER, // Where to receive contact form submissions
      replyTo: email,
      subject: `New Contact Form Submission${
        safeService ? ` - ${safeService}` : ""
      }`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5; line-height: 1.6;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5; padding: 20px 0;">
            <tr>
              <td align="center" style="padding: 20px 0;">
                <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #232061 0%, #1a1a4a 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                        New Contact Form Submission
                      </h1>
                      <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 400;">
                        Veritas Accounting
                      </p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">

                      <!-- Contact Information Card -->
                      <div style="background-color: #f8f9fa; border-left: 4px solid #232061; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
                        <h2 style="margin: 0 0 20px 0; color: #232061; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                          Contact Information
                        </h2>
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="padding: 8px 0; color: #333333; font-size: 15px;">
                              <strong style="color: #232061; display: inline-block; min-width: 80px;">Name:</strong>
                              <span style="color: #555555;">${safeName}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; color: #333333; font-size: 15px;">
                              <strong style="color: #232061; display: inline-block; min-width: 80px;">Email:</strong>
                              <a href="mailto:${email}" style="color: #232061; text-decoration: none; font-weight: 500;">${safeEmail}</a>
                            </td>
                          </tr>
                          ${
                            safePhone
                              ? `
                          <tr>
                            <td style="padding: 8px 0; color: #333333; font-size: 15px;">
                              <strong style="color: #232061; display: inline-block; min-width: 80px;">Phone:</strong>
                              <a href="tel:${phone}" style="color: #232061; text-decoration: none; font-weight: 500;">${safePhone}</a>
                            </td>
                          </tr>
                          `
                              : ""
                          }
                          ${
                            safeService
                              ? `
                          <tr>
                            <td style="padding: 8px 0; color: #333333; font-size: 15px;">
                              <strong style="color: #232061; display: inline-block; min-width: 80px;">Service:</strong>
                              <span style="background-color: #232061; color: #ffffff; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 500; display: inline-block;">${safeService}</span>
                            </td>
                          </tr>
                          `
                              : ""
                          }
                        </table>
                      </div>

                      <!-- Message Card -->
                      <div style="background-color: #ffffff; border: 2px solid #e0e0e0; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
                        <h2 style="margin: 0 0 15px 0; color: #232061; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                          Message
                        </h2>
                        <div style="background-color: #f8f9fa; border-radius: 6px; padding: 20px; margin-top: 15px;">
                          <p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.8; white-space: pre-wrap; word-wrap: break-word;">${safeMessage}</p>
                        </div>
                      </div>

                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}
${service ? `Service: ${service}` : ""}

Message:
${message}

---
This email was sent from the Veritas Accounting contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
