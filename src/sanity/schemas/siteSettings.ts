import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings & Bio",
  type: "document",
  fields: [
    defineField({
      name: "phone",
      title: "Phone Number (Display)",
      type: "string",
      initialValue: "08035948898",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp Number (International format without +)",
      type: "string",
      initialValue: "2348035948898",
    }),
    defineField({
      name: "whatsappGroup",
      title: "WhatsApp Community Group Link",
      type: "url",
      initialValue: "https://chat.whatsapp.com/GWqShbYOB6H35MjiR7zlXp",
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
      initialValue: "Healing • Protection • Breakthrough",
    }),
    defineField({
      name: "heroSubline",
      title: "Hero Subline",
      type: "string",
      initialValue: "Faith. Hope. Healing. Transformation.",
    }),
    defineField({
      name: "bio",
      title: "Alfacairo Biography",
      type: "text",
      rows: 5,
      description: "Do not invent education or experience. Describe his role as spiritual healer and prayer counsellor in Owode Egba.",
    }),
    defineField({
      name: "credentials",
      title: "Credentials & Certifications",
      type: "array",
      of: [{ type: "string" }],
      description: "Leave empty until verified credentials exist. Auto-hides on the public site while empty.",
    }),
    defineField({
      name: "socials",
      title: "Social Media Links",
      type: "object",
      fields: [
        { name: "facebook", type: "url", title: "Facebook URL" },
        { name: "tiktok", type: "url", title: "TikTok URL" },
        { name: "instagram", type: "url", title: "Instagram URL" },
        { name: "youtube", type: "url", title: "YouTube URL" },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings & Owner Bio",
      };
    },
  },
});
