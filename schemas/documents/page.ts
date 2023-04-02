import { defineArrayMember, defineField, defineType } from "sanity"

export const page = defineType({
  type: "document",
  name: "page",
  title: "Page",
  groups: [
    {
      name: "artist",
      title: "Artist",
    },
    {
      name: "artist",
      title: "Artist",
      default: false,
      hidden: ({ document }) => !document?.list?.includes("artist"),
    },
    {
      name: "workshop",
      title: "Workshop",
      default: false,
      hidden: ({ document }) => !document?.list?.includes("workshop"),
    },
    {
      name: "sponsor",
      title: "Sponsor",
      default: false,
      hidden: ({ document }) => !document?.list?.includes("sponsor"),
    },
    {
      name: "event",
      title: "Event",
      default: false,
      hidden: ({ document }) => !document?.list?.includes("event"),
    },
    {
      name: "gallery",
      title: "Galerie",
      default: false,
      hidden: ({ document }) => !document?.list?.includes("gallery"),
    },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alias",
      title: "Alias",
      type: "string",
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "name",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "list",
      title: "Auswahlmöglichkeiten",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          {
            value: "artist",
            title: "Artist",
          },
          {
            value: "workshop",
            title: "Workshop",
          },
          {
            value: "sponsor",
            title: "Sponsor",
          },
          {
            value: "event",
            title: "Event",
          },
          {
            value: "gallery",
            title: "Gallery",
          },
        ],
        layout: "grid",
      },
    }),
    defineField({
      name: "overview",
      description: "Used both for the <meta> description tag for SEO, and the personal website subheader.",
      title: "Overview",
      type: "array",
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [],
            decorators: [
              {
                title: "Italic",
                value: "em",
              },
              {
                title: "Strong",
                value: "strong",
              },
            ],
          },
          styles: [],
          type: "block",
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "artists",
      title: "Artists",
      group: "artist",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "artist" }],
        }),
      ],
      hidden: ({ document }) => !document?.list?.includes("artist"),
    }),
    defineField({
      name: "workshops",
      title: "Workshops",
      group: "workshop",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "workshop" }],
        }),
      ],
      hidden: ({ document }) => !document?.list?.includes("workshop"),
    }),
    defineField({
      name: "sponsors",
      title: "Sponsoren und Partner",
      group: "sponsor",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "sponsor" }],
        }),
      ],
      hidden: ({ document }) => !document?.list?.includes("sponsor"),
    }),
    defineField({
      name: "events",
      title: "Events",
      group: "event",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "event" }],
        }),
      ],
      hidden: ({ document }) => !document?.list?.includes("event"),
    }),
    defineField({
      name: "galleries",
      title: "Galerien",
      group: "gallery",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "gallery" }],
        }),
      ],
      hidden: ({ document }) => !document?.list?.includes("gallery"),
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
    prepare({ title }) {
      return {
        subtitle: "Page",
        title,
      }
    },
  },
})
