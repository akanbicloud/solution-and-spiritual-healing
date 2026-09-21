import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { siteConfig } from "@/config/site";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(8, "Valid phone number is required"),
  email: z.string().email("Invalid email format").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  preferredTime: z.string().min(1, "Preferred time is required"),
  message: z.string().optional().default(""),
  consent: z.boolean().refine((val) => val === true, "Consent is required"),
  honeypot: z.string().optional().default(""),
});

// Simple in-memory rate limiter: max 5 requests per 10 mins per IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "local-ip";
    const now = Date.now();
    const windowMs = 10 * 60 * 1000;

    const rateInfo = rateLimitMap.get(ip);
    if (rateInfo) {
      if (now < rateInfo.resetTime) {
        if (rateInfo.count >= 5) {
          return NextResponse.json(
            { error: "Too many consultation requests. Please try again shortly or contact us directly on WhatsApp." },
            { status: 429 }
          );
        }
        rateInfo.count += 1;
      } else {
        rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    }

    const body = await req.json();

    // Honeypot check
    if (body.honeypot && body.honeypot.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Booking received." });
    }

    const parseResult = bookingSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parseResult.error.flatten() },
        { status: 400 }
      );
    }

    const data = parseResult.data;
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.BOOKING_TO_EMAIL || "bookings@alfacairo.com";

    if (resendApiKey && resendApiKey.startsWith("re_")) {
      try {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: "Alfacairo Bookings <noreply@alfacairo.com>",
          to: [toEmail],
          subject: `New Consultation Booking: ${data.fullName} (${data.service})`,
          text: `New Consultation Booking Request:
Name: ${data.fullName}
Phone: ${data.phone}
Email: ${data.email || "Not provided"}
Service: ${data.service}
Preferred Date: ${data.preferredDate}
Preferred Time: ${data.preferredTime}
Message: ${data.message || "None"}
Location: Alfa Cairo House, Owode Egba / Phone Consultation
`,
        });
      } catch (emailErr) {
        console.warn("Failed to send email via Resend:", emailErr);
      }
    } else {
      console.log("Mock booking received (RESEND_API_KEY not configured):", data);
    }

    // Return prefilled WhatsApp link data for client confirmation
    const waText = encodeURIComponent(
      `Assalamu alaikum Alfacairo, I have booked a consultation for "${data.service}".\nName: ${data.fullName}\nPhone: ${data.phone}\nDate: ${data.preferredDate}\nTime: ${data.preferredTime}`
    );
    const whatsappConfirmUrl = `https://wa.me/${siteConfig.whatsapp}?text=${waText}`;

    return NextResponse.json({
      success: true,
      message: "Consultation booked successfully.",
      whatsappConfirmUrl,
      booking: data,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
