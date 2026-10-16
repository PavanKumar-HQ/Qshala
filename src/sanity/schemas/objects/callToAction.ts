import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'callToAction',
  title: 'Call to Action Button',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Button Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Target URL / Path',
      type: 'string',
      description: 'Internal route (e.g. /contact, /book-a-quiz) or external URL.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'variant',
      title: 'Button Style',
      type: 'string',
      options: {
        list: [
          { title: 'Primary Brand Yellow (#FDB913)', value: 'yellow' },
          { title: 'Curiosity Blue (#30B2E7)', value: 'blue' },
          { title: 'Growth Green (#75B543)', value: 'green' },
          { title: 'Dark Slate / Solid Black', value: 'dark' },
          { title: 'Outline / Ghost', value: 'outline' },
        ],
      },
      initialValue: 'yellow',
    }),
  ],
});
