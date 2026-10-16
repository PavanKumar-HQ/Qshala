import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'quote',
  title: 'Client / Stakeholder Quote',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Quotation Text',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Author Role / Organization',
      type: 'string',
    }),
  ],
});
