import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL identifier)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Dua and adhkar", value: "Dua and adhkar" },
          { title: "Ruqyah and protection", value: "Ruqyah and protection" },
          { title: "Patience and hope", value: "Patience and hope" },
          { title: "Family and home", value: "Family and home" },
          { title: "Product guides", value: "Product guides" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "Short summary for post cards (maximum 200 characters).",
      validation: (rule) => rule.max(200).required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Important for accessibility and SEO.",
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Post Body (Rich Content)",
      type: "array",
      of: [
        { type: "block" },
        { type: "arabicPassage" },
        {
          type: "image",
          fields: [{ name: "alt", type: "string", title: "Alt text" }],
        },
      ],
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL (YouTube)",
      type: "url",
      description: "Optional YouTube video embed URL.",
    }),
    defineField({
      name: "audioUrl",
      title: "Audio URL (Optional)",
      type: "url",
      description: "Optional SoundCloud or audio stream URL.",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      description: "Future dates will be treated as scheduled posts and hidden until their date arrives.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage / Top of Blog",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Meta Title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Meta Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "translations",
      title: "Language Translations",
      type: "object",
      fields: [
        defineField({
          name: "ar",
          title: "العربية (Arabic)",
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Arabic Title" },
            { name: "excerpt", type: "text", title: "Arabic Excerpt", rows: 2 },
          ],
        }),
        defineField({
          name: "yo",
          title: "Yorùbá",
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Yoruba Title" },
            { name: "excerpt", type: "text", title: "Yoruba Excerpt", rows: 2 },
          ],
        }),
        defineField({
          name: "ha",
          title: "Hausa",
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Hausa Title" },
            { name: "excerpt", type: "text", title: "Hausa Excerpt", rows: 2 },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "coverImage",
      publishedAt: "publishedAt",
    },
    prepare({ title, category, media, publishedAt }) {
      return {
        title,
        subtitle: `${category} • ${publishedAt ? new Date(publishedAt).toLocaleDateString() : "Draft"}`,
        media,
      };
    },
  },
});
