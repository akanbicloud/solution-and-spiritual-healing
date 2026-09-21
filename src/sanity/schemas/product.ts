import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product (Traditional Wellness)",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Herbal Tonics", value: "Herbal Tonics" },
          { title: "Capsules & Drops", value: "Capsules & Drops" },
          { title: "Spiritual & Cleansing", value: "Spiritual & Cleansing" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt Text",
        }),
      ],
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description (Card Summary)",
      type: "text",
      rows: 3,
      description: "Strict rule: use 'supports', 'traditional', 'comfort', 'wellness'. Do not make curing or 100% guarantee claims.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "longDescription",
      title: "Long Description / Directions",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "active",
      title: "Active (Visible on Store)",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
      media: "image",
    },
  },
});
