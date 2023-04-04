import { DocumentIcon, ImageIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const artist = defineType({
  name: "artist",
  title: "Artist",
  type: "document",
  groups: [
    { name: "social", title: "Social Media" },
    { name: "media", title: "Medien" },
    { name: "content", title: "Inhalt" },
  ],
  fieldsets: [
    { name: "media", title: "Medien", options: { collapsible: true, collapsed: true, columns: 1 } },
    { name: "content", title: "Inhalt", options: { collapsible: true, collapsed: true, columns: 1 } },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Bitte einmal auf Generate drücken.",
      options: {
        source: "name",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Feld zuerst leeren um Bild zu ändern",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        defineField({
          name: "beschreibung",
          type: "string",
          title: "Beschreibung",
        }),
      ],
      group: "media",
      fieldset: "media",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "socials",
      title: "Socials",
      type: "object",
      group: "social",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          title: "Twitter",
          name: "twitter",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https"],
            }),
        }),
        defineField({
          title: "Facebook",
          name: "facebook",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https"],
            }),
        }),
        defineField({
          title: "Instagram",
          name: "instagram",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https"],
            }),
        }),
        defineField({
          title: "TikTok",
          name: "tiktok",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https"],
            }),
        }),
        defineField({
          title: "Spotify",
          name: "spotify",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https"],
            }),
        }),
        defineField({
          title: "Youtube",
          name: "youtube",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https"],
            }),
        }),
        defineField({
          title: "Website",
          name: "website",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https"],
            }),
        }),
      ],
    }),
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      group: "content",
      fieldset: "content",
    },
    defineField({
      name: "iframeYoutube",
      title: "IFrame für Youtube",
      type: "url",
      group: "social",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "iframeSpotify",
      title: "IFrame für Spotify",
      type: "url",
      group: "social",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
})
