import { defineField, defineType } from "sanity";

export const duaType = defineType({
  name: "dua",
  title: "Dua of the Day",
  type: "document",
  fields: [
    defineField({
      name: "arabic",
      title: "Arabic Text",
      type: "text",
      rows: 3,
      description: "Arabic supplication text (displayed large, right-to-left).",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "transliteration",
      title: "Transliteration",
      type: "text",
      rows: 2,
      description: "Phonetic reading guide.",
    }),
    defineField({
      name: "translation",
      title: "English Translation",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "source",
      title: "Source Reference",
      type: "string",
      description: "E.g. Sahih al-Bukhari, Sahih Muslim, or Quran chapter:verse.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Healing & Health", value: "Healing & Health" },
          { title: "Protection & Peace", value: "Protection & Peace" },
          { title: "Breakthrough & Ease", value: "Breakthrough & Ease" },
          { title: "Family & Home", value: "Family & Home" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "active",
      title: "Active in Daily Rotation",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "arabic",
      subtitle: "source",
    },
  },
});
