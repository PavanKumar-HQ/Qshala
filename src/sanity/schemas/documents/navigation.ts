import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'navigation',
  title: 'Header Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Navigation Title',
      type: 'string',
      initialValue: 'Main Header Navigation',
      readOnly: true,
    }),
    defineField({
      name: 'links',
      title: 'Navigation Menu Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Link Label' },
            { name: 'href', type: 'string', title: 'Target Route (e.g. /about, /services)' },
            { name: 'isExternal', type: 'boolean', title: 'Open in new tab', initialValue: false },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'href',
            },
          },
        },
      ],
      initialValue: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Store', href: '/shop' },
        { name: 'Blog & Events', href: '/blog' },
        { name: 'Contact', href: '/contact' },
      ],
    }),
    defineField({
      name: 'ctaButton',
      title: 'Action CTA Button (Header Right)',
      type: 'callToAction',
      initialValue: {
        label: 'Book a Quiz',
        url: '/book-a-quiz',
        variant: 'yellow',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
