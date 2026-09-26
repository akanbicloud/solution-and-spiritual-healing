"use server";

import { z } from "zod";
import { Resend } from "resend";
import { siteConfig } from "@/config/site";

const leadSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().min(8, "A valid phone or WhatsApp number is required"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  challengeType: z.string().min(1, "Please select the primary challenge"),
  consultationMode: z.string().min(1, "Please select preferred consultation mode"),
  message: z.string().optional().default(""),
  honeypot: z.string().optional().default(""),
});

export type LandingBookingResponse = {
  success: boolean;
  message: string;
  whatsappUrl?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitLandingBooking(
  prevState: LandingBookingResponse | null,
  formData: FormData
): Promise<LandingBookingResponse> {
  try {
    const rawData = {
      fullName: (formData.get("fullName") as string)?.trim() || "",
      phone: (formData.get("phone") as string)?.trim() || "",
      email: (formData.get("email") as string)?.trim() || "",
      challengeType: (formData.get("challengeType") as string)?.trim() || "",
      consultationMode: (formData.get("consultationMode") as string)?.trim() || "",
      message: (formData.get("message") as string)?.trim() || "",
      honeypot: (formData.get("honeypot") as string)?.trim() || "",
    };

    // Honeypot check for spam bots
    if (rawData.honeypot && rawData.honeypot.length > 0) {
      return {
        success: true,
        message: "Your consultation request has been received.",
      };
    }

    const validation = leadSchema.safeParse(rawData);
    if (!validation.success) {
      return {
        success: false,
        message: "Please complete all required fields correctly.",
        fieldErrors: validation.error.flatten().fieldErrors,
      };
    }

    const data = validation.data;

    // Delivery: Send via Resend if API key is provided, otherwise log clearly
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.BOOKING_TO_EMAIL || siteConfig.email || "alfacairo01@gmail.com";

    if (resendApiKey && resendApiKey.startsWith("re_")) {
      try {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: "Alfacairo Ad Leads <noreply@spiritualandsolutionhealing.com.ng>",
          to: [toEmail],
          subject: `🔥 New Ad Campaign Lead: ${data.fullName} (${data.challengeType})`,
          text: `NEW CONSULTATION LEAD (Facebook/Instagram Ads):
--------------------------------------------------
Full Name: ${data.fullName}
Phone/WhatsApp: ${data.phone}
Email: ${data.email || "Not provided"}
Primary Challenge: ${data.challengeType}
Preferred Format: ${data.consultationMode}
Details / Message:
${data.message || "No additional notes provided."}

Date Received: ${new Date().toISOString()}
Destination: Spiritual and Solution Healing (Alfa Cairo House)
--------------------------------------------------`,
        });
      } catch (emailErr) {
        console.warn("Resend email delivery failed:", emailErr);
      }
    } else {
      console.log("=================================================");
      console.log("🔥 NEW AD CAMPAIGN CONSULTATION LEAD RECEIVED:");
      console.log(`Name: ${data.fullName}`);
      console.log(`Phone: ${data.phone}`);
      console.log(`Email: ${data.email || "N/A"}`);
      console.log(`Challenge: ${data.challengeType}`);
      console.log(`Format: ${data.consultationMode}`);
      console.log(`Message: ${data.message}`);
      console.log("=================================================");
    }

    // Generate direct WhatsApp prefilled URL for fast-track confirmation
    const waText = encodeURIComponent(
      `Assalamu alaikum Alfacairo, I just requested a consultation on your website.\n\n` +
      `*Name:* ${data.fullName}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Inquiry:* ${data.challengeType}\n` +
      `*Preferred Mode:* ${data.consultationMode}\n\n` +
      `Please let me know your available slots.`
    );
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${waText}`;

    return {
      success: true,
      message: "Consultation request received successfully.",
      whatsappUrl,
    };
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : "An unexpected error occurred.";
    console.error("submitLandingBooking error:", error);
    return {
      success: false,
      message: errorMsg,
    };
  }
}
