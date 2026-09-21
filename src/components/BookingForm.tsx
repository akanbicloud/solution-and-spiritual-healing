"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { siteConfig } from "@/config/site";
import {
  CalendarBlank,
  Clock,
  Phone,
  WhatsappLogo,
  CheckCircle,
  MapPin,
  ShieldCheck,
} from "@phosphor-icons/react";
import confetti from "canvas-confetti";

const formSchema = z.object({
  fullName: z.string().min(2, "Please provide your full name"),
  phone: z.string().min(8, "A valid phone number is required"),
  email: z.string().email("Invalid email format").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a spiritual service"),
  preferredDate: z.string().min(1, "Please select your preferred date"),
  preferredTime: z.string().min(1, "Please select your preferred time of day"),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, "You must agree to consultation terms"),
  honeypot: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const servicesOptions = [
  "Spiritual Neutralization & Cleansing",
  "Prayer & Spiritual Guidance",
  "Protection from Evil Eye & Envy",
  "Life Breakthrough Prayer (Career / Business / Delays)",
  "Family & Marital Support",
  "Peace of Mind (Fear, Anxiety & Nightmares)",
  "Success & Life Improvement",
  "General Consultation & In-Person Pickup",
];

const timeSlots = [
  "Morning (8:00 AM – 12:00 PM)",
  "Afternoon (12:00 PM – 4:00 PM)",
  "Evening (4:00 PM – 8:00 PM)",
  "Night / Anytime (Urgent Prayer)",
];

export function BookingForm({ initialService = "" }: { initialService?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<{
    whatsappConfirmUrl: string;
    booking: FormData;
  } | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      service: initialService || servicesOptions[0],
      preferredDate: "",
      preferredTime: timeSlots[0],
      message: "",
      consent: false,
      honeypot: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setApiError(null);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "Failed to submit booking");
      }

      setSuccessData({
        whatsappConfirmUrl: json.whatsappConfirmUrl,
        booking: data,
      });

      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // ignore
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Submission error occurred";
      setApiError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success Screen
  if (successData) {
    return (
      <div className="rounded-3xl bg-white border border-gold-hairline p-8 sm:p-12 shadow-soft-lg text-center max-w-2xl mx-auto animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-light text-emerald-deep flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={36} weight="fill" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold font-serif text-charcoal">
          Consultation Request Received
        </h3>

        <p className="mt-3 text-sm text-muted leading-relaxed max-w-lg mx-auto">
          Jazakallahu khairan, <strong>{successData.booking.fullName}</strong>. Your appointment request for <strong>{successData.booking.service}</strong> on <strong>{successData.booking.preferredDate} ({successData.booking.preferredTime})</strong> has been registered.
        </p>

        <div className="my-6 p-4 rounded-2xl bg-cream-light border border-gold-hairline/60 text-xs sm:text-sm text-charcoal text-left space-y-1">
          <div className="font-bold text-emerald-deep">Location / Mode:</div>
          <div>In-Person: Alfa Cairo House, Owode Egba, Ogun State</div>
          <div>Or direct phone consultation via your provided number: {successData.booking.phone}</div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={successData.whatsappConfirmUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="confirm-booking-whatsapp-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-soft transition-all"
          >
            <WhatsappLogo size={20} weight="fill" />
            <span>Confirm on WhatsApp</span>
          </a>

          <a
            href={`tel:${siteConfig.phoneIntl}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-cream border border-gold-hairline text-charcoal font-bold text-sm shadow-soft-sm transition-all"
          >
            <Phone size={18} weight="fill" className="text-emerald-deep" />
            <span>Call Now: {siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl bg-white border border-gold-hairline/80 p-6 sm:p-10 shadow-soft-lg space-y-6 max-w-2xl mx-auto"
    >
      {/* Honeypot hidden input */}
      <input
        type="text"
        {...register("honeypot")}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {apiError && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
          {apiError}
        </div>
      )}

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
          Full Name <span className="text-crimson">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          placeholder="e.g. Alhaji Ibrahim Adebayo"
          {...register("fullName")}
          className="w-full px-4 py-3 rounded-xl bg-cream-light border border-gold-hairline text-sm text-charcoal placeholder-muted focus:outline-none focus:ring-2 focus:ring-emerald-deep/40 focus:bg-white"
        />
        {errors.fullName && (
          <p className="mt-1 text-xs text-crimson">{errors.fullName.message}</p>
        )}
      </div>

      {/* Phone Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Phone Number (WhatsApp) <span className="text-crimson">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="08012345678"
            {...register("phone")}
            className="w-full px-4 py-3 rounded-xl bg-cream-light border border-gold-hairline text-sm text-charcoal placeholder-muted focus:outline-none focus:ring-2 focus:ring-emerald-deep/40 focus:bg-white"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-crimson">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Email Address <span className="text-muted font-normal">(Optional)</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="name@example.com"
            {...register("email")}
            className="w-full px-4 py-3 rounded-xl bg-cream-light border border-gold-hairline text-sm text-charcoal placeholder-muted focus:outline-none focus:ring-2 focus:ring-emerald-deep/40 focus:bg-white"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-crimson">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Service Selection */}
      <div>
        <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
          Select Spiritual Service / Guidance <span className="text-crimson">*</span>
        </label>
        <select
          id="service"
          {...register("service")}
          className="w-full px-4 py-3 rounded-xl bg-cream-light border border-gold-hairline text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-emerald-deep/40 focus:bg-white"
        >
          {servicesOptions.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1 text-xs text-crimson">{errors.service.message}</p>
        )}
      </div>

      {/* Preferred Date & Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Preferred Date <span className="text-crimson">*</span>
          </label>
          <input
            id="preferredDate"
            type="date"
            {...register("preferredDate")}
            className="w-full px-4 py-3 rounded-xl bg-cream-light border border-gold-hairline text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-emerald-deep/40 focus:bg-white"
          />
          {errors.preferredDate && (
            <p className="mt-1 text-xs text-crimson">{errors.preferredDate.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Time of Day <span className="text-crimson">*</span>
          </label>
          <select
            id="preferredTime"
            {...register("preferredTime")}
            className="w-full px-4 py-3 rounded-xl bg-cream-light border border-gold-hairline text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-emerald-deep/40 focus:bg-white"
          >
            {timeSlots.map((t, i) => (
              <option key={i} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.preferredTime && (
            <p className="mt-1 text-xs text-crimson">{errors.preferredTime.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
          Brief Message or Prayer Request <span className="text-muted font-normal">(Confidential)</span>
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="Describe your situation in brief so Alfacairo can prepare..."
          {...register("message")}
          className="w-full px-4 py-3 rounded-xl bg-cream-light border border-gold-hairline text-sm text-charcoal placeholder-muted focus:outline-none focus:ring-2 focus:ring-emerald-deep/40 focus:bg-white"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            id="consent"
            {...register("consent")}
            className="mt-1 rounded border-gold text-emerald-deep focus:ring-emerald-deep"
          />
          <span className="text-xs text-muted leading-relaxed">
            I understand that spiritual counselling and prayers are faith-based wellness support. I consent to be contacted directly by Alfacairo on phone or WhatsApp.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-xs text-crimson">{errors.consent.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        id="submit-booking-form-btn"
        disabled={isSubmitting}
        className="w-full py-4 px-6 rounded-2xl bg-emerald-deep hover:bg-emerald-forest text-white font-bold text-sm sm:text-base shadow-soft hover:shadow-soft-lg transition-all disabled:opacity-60 flex items-center justify-center gap-2"
      >
        <CalendarBlank size={18} weight="bold" className="text-gold-light" />
        <span>{isSubmitting ? "Registering Your Booking..." : "Submit Consultation Request"}</span>
      </button>

      {/* Sanctuary Details */}
      <div className="p-4 rounded-2xl bg-cream-light border border-gold-hairline/60 flex items-center justify-between gap-2 text-xs text-muted">
        <span className="flex items-center gap-1.5">
          <MapPin size={14} weight="fill" className="text-emerald-deep" />
          Alfa Cairo House, Owode Egba
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={14} weight="fill" className="text-emerald-deep" />
          Open All Days
        </span>
      </div>
    </form>
  );
}
