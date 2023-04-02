import { CogIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'navImage',
      title: 'Logo',
      type: 'image',
      description: 'Logo der Navigation. Feld zuerst leeren um Bild zu ändern',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'beschreibung',
          type: 'string',
          title: 'Beschreibung',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'navItems',
      title: 'Links für Navigation',
      description: 'Links displayed on the header of your site.',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'category',
            },
            {
              type: 'page',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'sponsors',
      title: 'Sponsoren',
      description: '',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'sponsor',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'footerItems',
      title: 'Links für Footer',
      description: 'Links displayed on the footer of your site.',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'page',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          title: 'Twitter',
          name: 'twitter',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https'],
            }),
        }),
        defineField({
          title: 'Facebook',
          name: 'facebook',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https'],
            }),
        }),
        defineField({
          title: 'Instagram',
          name: 'instagram',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https'],
            }),
        }),
        defineField({
          title: 'TikTok',
          name: 'tiktok',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https'],
            }),
        }),
        defineField({
          title: 'Spotify',
          name: 'spotify',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https'],
            }),
        }),
        defineField({
          title: 'Youtube',
          name: 'youtube',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https'],
            }),
        }),
        defineField({
          title: 'Website',
          name: 'website',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https'],
            }),
        }),
      ],
    }),
    defineField({
      name: 'metaImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Menu Items',
      }
    },
  },
})
