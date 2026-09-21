import { defineField, defineType } from "sanity";

export const mediaItemType = defineType({
  name: "mediaItem",
  title: "Media Video (YouTube / TikTok)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title / Caption",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      title: "Media Platform",
      type: "string",
      options: {
        list: [
          { title: "YouTube", value: "YouTube" },
          { title: "TikTok", value: "TikTok" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "Video / Embed URL",
      type: "url",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "type",
    },
  },
});
