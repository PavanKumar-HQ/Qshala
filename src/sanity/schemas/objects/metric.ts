import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'metric',
  title: 'Impact Metric',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Metric Value (e.g. 4,200+, +88%, 98.4%)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Metric Label (e.g. Students Engaged, Retention Score)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'value',
      subtitle: 'label',
    },
  },
});
