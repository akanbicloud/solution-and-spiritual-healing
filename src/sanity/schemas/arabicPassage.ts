import { defineField, defineType } from "sanity";

export const arabicPassageType = defineType({
  name: "arabicPassage",
  title: "Arabic Passage / Dua / Ayah",
  type: "object",
  fields: [
    defineField({
      name: "arabicText",
      title: "Arabic Text",
      type: "text",
      rows: 3,
      description: "Arabic script (displayed in large font, right-to-left).",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "transliteration",
      title: "Transliteration (Pronunciation Guide)",
      type: "text",
      rows: 2,
      description: "English phonetic transliteration for reading aloud.",
    }),
    defineField({
      name: "translation",
      title: "English Translation / Meaning",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "source",
      title: "Source Reference",
      type: "string",
      description: "E.g., Surah Al-Baqarah 2:255, Sahih al-Bukhari 5743, or Hadith reference.",
    }),
  ],
  preview: {
    select: {
      title: "arabicText",
      subtitle: "translation",
    },
  },
});
