import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'partner',
  title: 'Client & School Partners',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Partner / Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Partner Type',
      type: 'string',
      options: {
        list: [
          { title: 'School', value: 'School' },
          { title: 'Corporate', value: 'Corporate' },
          { title: 'College', value: 'College' },
          { title: 'Foundation / NGO', value: 'Foundation' },
        ],
      },
      initialValue: 'Corporate',
    }),
    defineField({
      name: 'logo',
      title: 'Logo Image File',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'logoUrl',
      title: 'Static / Public Logo Path',
      type: 'string',
      description: 'e.g. /assets/logos/google.svg',
    }),
    defineField({
      name: 'website',
      title: 'Partner Website URL',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'logo',
    },
  },
});
