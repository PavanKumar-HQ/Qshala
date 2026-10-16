import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'serviceOffering',
  title: 'Service Offering / Program Module',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Program Title (e.g. Discover Curriculum)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline / Value Proposition',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'accent',
      title: 'Accent Color Hex (e.g. #30B2E7, #75B543, #FDB913, #9333EA)',
      type: 'string',
      initialValue: '#30B2E7',
    }),
    defineField({
      name: 'bg',
      title: 'Background Class or Hex (e.g. bg-[#E8F6FD])',
      type: 'string',
      initialValue: 'bg-[#E8F6FD]',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
    },
  },
});
