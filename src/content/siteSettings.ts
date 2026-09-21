export interface SiteSettings {
  phone: string;
  whatsapp: string;
  whatsappGroup: string;
  heroHeadline: string;
  heroSubline: string;
  heroDescription: string;
  bio: string;
  credentials: string[];
  socials: {
    facebook: string;
    tiktok: string;
    instagram: string;
    youtube: string;
  };
}

export const fallbackSiteSettings: SiteSettings = {
  phone: "08035948898",
  whatsapp: "2348035948898",
  whatsappGroup: "https://chat.whatsapp.com/GWqShbYOB6H35MjiR7zlXp",
  heroHeadline: "Healing • Protection • Breakthrough",
  heroSubline: "Faith. Hope. Healing. Transformation.",
  heroDescription:
    "Rooted in authentic faith, prophetic tradition, and prayer-prepared botanical wellness. Alfacairo provides compassionate spiritual counselling, prayers for breakthrough, and traditional herbal support at Alfa Cairo House in Owode Egba, Ogun State, serving individuals and families across Nigeria.",
  bio: "Alfacairo is a spiritual healer and prayer counsellor based in Owode Egba, Ogun State, serving people across Nigeria. Through heartfelt prayer, Quranic recitation (Ruqyah), and traditional botanical formulations, he supports individuals and families seeking relief from life challenges, unexplainable spiritual difficulties, and wellness concerns.",
  credentials: [], // Left empty intentionally; section auto-hides per specification
  socials: {
    facebook: "https://www.facebook.com/share/1DWrxmGh3k/",
    tiktok: "https://www.tiktok.com/@alhismailadewunmi?is_from_webapp=1&sender_device=pc",
    youtube: "https://youtube.com/@ismyl89?si=24r86DWMPoFjynBO",
    instagram: "",
  },
};
