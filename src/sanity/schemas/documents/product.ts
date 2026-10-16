import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Store Products',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
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
      title: 'Product Category',
      type: 'string',
      options: {
        list: [
          { title: 'Card Game', value: 'Game' },
          { title: 'Book', value: 'Book' },
          { title: 'Learning Kit', value: 'Learning Kit' },
          { title: 'Merchandise / Plushie', value: 'Merchandise' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price Display String (e.g. ₹799, ₹599)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating (e.g. 4.9, 5.0)',
      type: 'number',
      initialValue: 5.0,
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'imageUrl',
      title: 'External / Static Image URL',
      type: 'url',
    }),
    defineField({
      name: 'isPopular',
      title: 'Highlight as Popular / Best Seller',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'buyUrl',
      title: 'Checkout or Store Link',
      type: 'string',
      initialValue: '/contact',
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
      subtitle: 'price',
      media: 'image',
    },
  },
});
