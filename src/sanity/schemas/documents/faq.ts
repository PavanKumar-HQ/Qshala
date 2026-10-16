import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'faq',
  title: 'Frequently Asked Questions (FAQ)',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer Text',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General & Pedagogy', value: 'General' },
          { title: 'Schools & Curriculum', value: 'Schools' },
          { title: 'Corporate Trivia', value: 'Corporate' },
          { title: 'Colleges & Fests', value: 'Colleges' },
          { title: 'Families & Communities', value: 'Families' },
        ],
      },
      initialValue: 'General',
    }),
    defineField({
      name: 'showOnHome',
      title: 'Show on Homepage Accordion',
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
      title: 'question',
      subtitle: 'category',
    },
  },
});
