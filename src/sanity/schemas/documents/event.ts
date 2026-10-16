import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Events & Quests',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Audience / Category',
      type: 'string',
      options: {
        list: [
          { title: 'School', value: 'School' },
          { title: 'Corporate', value: 'Corporate' },
          { title: 'College', value: 'College' },
          { title: 'Community', value: 'Community' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Event Date (Display String e.g. Oct 15, 2026)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isoDate',
      title: 'ISO Event Date (for sorting & schema)',
      type: 'datetime',
    }),
    defineField({
      name: 'desc',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Venue / Location',
      type: 'string',
      initialValue: 'Bengaluru / Online',
    }),
    defineField({
      name: 'buttonType',
      title: 'Call to Action Button Type',
      type: 'string',
      options: {
        list: [
          { title: 'Register Now', value: 'register' },
          { title: 'Learn More', value: 'learn_more' },
          { title: 'No Button', value: 'none' },
        ],
      },
      initialValue: 'register',
    }),
    defineField({
      name: 'buttonText',
      title: 'Custom Button Label',
      type: 'string',
      initialValue: 'Register Now',
    }),
    defineField({
      name: 'buttonUrl',
      title: 'Button Target URL',
      type: 'string',
      initialValue: '/book-a-quiz',
    }),
    defineField({
      name: 'heroImage',
      title: 'Event Poster / Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'isFeatured',
      title: 'Feature on Homepage Slider',
      type: 'boolean',
      initialValue: true,
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
      title: 'title',
      subtitle: 'date',
      media: 'heroImage',
    },
  },
});
