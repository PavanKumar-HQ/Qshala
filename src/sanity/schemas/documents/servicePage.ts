import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'servicePage',
  title: 'Service & Audience Pages',
  type: 'document',
  groups: [
    { name: 'general', title: 'Header & Intro' },
    { name: 'offerings', title: 'Core Programs & Offerings' },
    { name: 'modules', title: 'Special Modules / Tracks' },
    { name: 'flagship', title: 'Flagship Quizzes / Events' },
    { name: 'collabs', title: 'Collaborations & Case Studies' },
    { name: 'contact', title: 'Direct Contact Line' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'slug',
      title: 'Page Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'badge',
      title: 'Audience Badge Label (e.g. Schools, Companies, Colleges, Communities, Custom)',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'intro',
      title: 'Introduction Paragraph',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'mascotVariant',
      title: 'QT Mascot Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Reading (Schools)', value: 'reading' },
          { title: 'Professional (Companies)', value: 'professional' },
          { title: 'Idea (Colleges)', value: 'idea' },
          { title: 'Curious (Communities)', value: 'curious' },
          { title: 'Trophy (Custom)', value: 'trophy' },
          { title: 'Sherlock (Detective)', value: 'sherlock' },
          { title: 'Quizzing (Active)', value: 'quizzing' },
        ],
      },
      initialValue: 'reading',
      group: 'general',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero / Feature Image',
      type: 'image',
      options: { hotspot: true },
      group: 'general',
    }),

    // OFFERINGS
    defineField({
      name: 'offerings',
      title: 'Main Program Modules',
      type: 'array',
      of: [{ type: 'serviceOffering' }],
      group: 'offerings',
    }),

    // SPECIAL MODULES / TRACKS
    defineField({
      name: 'specialModules',
      title: 'Additional Modules / Tracks (e.g. Teacher Modules, Offsites)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Module Title' },
            { name: 'tagline', type: 'string', title: 'Tagline' },
            { name: 'desc', type: 'text', title: 'Description', rows: 3 },
          ],
        },
      ],
      group: 'modules',
    }),

    // FLAGSHIP QUIZZES
    defineField({
      name: 'flagshipQuizzes',
      title: 'Flagship Quizzes / Competitions',
      type: 'array',
      of: [{ type: 'flagshipQuiz' }],
      group: 'flagship',
    }),

    // COLLABORATIONS / CASE STUDIES
    defineField({
      name: 'collaborations',
      title: 'Collaborations & Partnerships',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Collaboration Title' },
            { name: 'desc', type: 'text', title: 'Description', rows: 3 },
          ],
        },
      ],
      group: 'collabs',
    }),

    // DIRECT CONTACT LINE
    defineField({
      name: 'contactDirectLine',
      title: 'Direct Lead Contact',
      type: 'object',
      fields: [
        { name: 'name', type: 'string', title: 'Contact Person Name' },
        { name: 'phone', type: 'string', title: 'Phone Number' },
        { name: 'role', type: 'string', title: 'Role' },
      ],
      group: 'contact',
    }),

    // SEO
    defineField({
      name: 'seo',
      title: 'Page SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'badge',
      media: 'heroImage',
    },
  },
});
