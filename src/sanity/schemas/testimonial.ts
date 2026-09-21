import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location (State / City)",
      type: "string",
      description: "E.g., Abeokuta, Lagos, Ibadan, Abuja, London",
    }),
    defineField({
      name: "text",
      title: "Testimonial Text",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "approved",
      title: "Approved for Live Display",
      type: "boolean",
      description: "Only approved testimonials will ever appear on the website.",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "location",
      approved: "approved",
    },
    prepare({ title, subtitle, approved }) {
      return {
        title,
        subtitle: `${subtitle || "Nigeria"} • ${approved ? "Approved" : "Pending Approval"}`,
      };
    },
  },
});
