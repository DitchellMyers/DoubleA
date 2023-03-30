import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Feld zuerst leeren um Bild zu ändern',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        defineField({
          name: 'beschreibung',
          type: 'string',
          title: 'Beschreibung',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'vorwort',
      description: 'Vorwort des Vorstands oder Herr Brütting.',
      title: 'Vorwort',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'pages',
      title: 'Content',
      description:
        'Unterseiten, die in einem Grid unterm Countdown angezeigt werden',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'page' }],
        }),
      ],
    }),
    defineField({
      name: 'eventDate',
      title: 'Datum der Veranstaltung',
      description: 'Wird für den Countdown verwendet',
      type: 'datetime',
    }),
    defineField({
      name: 'description',
      description: 'Used both for the <meta> description tag for SEO.',
      title: 'Description',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})
