import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'flagshipQuiz',
  title: 'Flagship Quiz / Competition',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (e.g. QQL Club, QShala Quiz League)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Badge Label (e.g. Daily Habit • All Ages, Annual National League)',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Detailed Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price or Tier Tag (e.g. ₹499 / 6 months, Bengaluru Flagship)',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'price',
    },
  },
});
