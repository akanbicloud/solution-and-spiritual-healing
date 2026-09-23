export const siteConfig = {
  url:
    process.env.NEXT_PUBLIC_SITE_URL && !process.env.NEXT_PUBLIC_SITE_URL.includes("vercel.app")
      ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
      : "https://spirituallandsolution.com.ng",
  name: "Alfacairo",
  brand: "Solution Spiritual Healing & Prayer",
  brandArabic: "حلول الشفاء والدعاء",
  tagline: "Healing • Protection • Breakthrough",
  subline: "Faith. Hope. Healing. Transformation.",
  phoneDisplay: "08035948898",
  phoneIntl: "+2348035948898",
  whatsapp: "2348035948898",
  whatsappGroup: "https://chat.whatsapp.com/GWqShbYOB6H35MjiR7zlXp",
  email: "contact@alfacairoprayer.com",
  address: "Alfa Cairo House, Owode Egba, Ogun State, Nigeria",
  addressShort: "Owode Egba, Ogun State",
  city: "Owode Egba",
  region: "Ogun State",
  country: "Nigeria",
  countryCode: "NG",
  geo: {
    latitude: 6.9467,
    longitude: 3.5042,
  },
  areaServed: [
    "Owode Egba",
    "Abeokuta",
    "Ogun State",
    "Lagos",
    "Ibadan",
    "Oyo State",
    "Nigeria",
    "Worldwide Virtual Consultations",
  ],
  googleMapsUrl: "https://maps.google.com/?q=Alfa+Cairo+house+Owode+Egba+Ogun+State",
  googleMapsEmbed: "https://www.google.com/maps?q=Alfa+Cairo+house+Owode+Egba+Ogun+State&output=embed",
  delivery: "Nationwide Delivery Across Nigeria",
  hours: "Open every day (08:00 AM – 08:00 PM)",
  hoursIso: "Mo-Su 08:00-20:00",
  indexNowKey: "a69cf4f83b274640bc52df71891b94c8",
  socials: {
    facebook: "https://www.facebook.com/share/1DWrxmGh3k/",
    tiktok: "https://www.tiktok.com/@alhismailadewunmi?is_from_webapp=1&sender_device=pc",
    youtube: "https://youtube.com/@ismyl89?si=24r86DWMPoFjynBO",
    instagram: "",
  },
  weeklyPrayer: {
    title: "An-Najaat Wa Tahseenaat",
    titleArabic: "النجاة والتحصينات",
    subtitle: "Weekly Success & Divine Protection Prayer",
    scheduleDay: "Wednesday",
    scheduleTime: "10:00 PM",
    timezone: "West Africa Time (GMT+1)",
    streamUrl: "https://www.facebook.com/share/v/1DUYuZCsFv/",
    quranVerseArabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
    quranVerseTranslation:
      "And whoever fears Allah with reverence, He will make for him a way out and grant him ease.",
    quranVerseSurah: "Surah At-Talaq 65:2",
    flyerImage: "/images/weekly-prayer-flyer.jpg",
  },
  disclaimer:
    "Herbal products are traditional wellness supplements and are not intended to diagnose, treat, cure or prevent any disease.",
  spiritualNotice:
    "All spiritual guidance, prayers, and counselling are faith-inspired and dedicated to supporting peace, strength, and life improvement.",
} as const;

export type SiteConfig = typeof siteConfig;
