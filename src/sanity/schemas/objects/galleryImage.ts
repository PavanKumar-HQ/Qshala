import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image File',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'url',
      title: 'Image Direct URL (Fallback / Unsplash)',
      type: 'url',
      description: 'Used if no direct image file is uploaded.',
    }),
    defineField({
      name: 'caption',
      title: 'Caption / Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'image',
    },
  },
});
