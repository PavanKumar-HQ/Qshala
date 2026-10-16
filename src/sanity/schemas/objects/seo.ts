import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'seo',
  title: 'SEO & Social Sharing',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Optimal length: 50-60 characters. Displayed on search engine results and browser tabs.',
      validation: (Rule) => Rule.max(70).warning('Titles longer than 70 characters may get truncated by Google.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Optimal length: 140-160 characters. Compelling summary for search engine snippets.',
      validation: (Rule) => Rule.max(170).warning('Descriptions over 160 characters may be truncated.'),
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Share Image (OpenGraph)',
      type: 'image',
      description: 'Recommended dimension: 1200 x 630 pixels.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Accessibility description of the image.',
        }),
      ],
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL Override',
      type: 'url',
      description: 'Leave blank to use the default URL calculated by Astro.',
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from Search Engines (noindex)',
      type: 'boolean',
      description: 'Check this to prevent search engines from indexing this page.',
      initialValue: false,
    }),
  ],
});
