import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'aboutPage',
  title: 'About Page Content',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'stats', title: 'Impact Stats' },
    { name: 'founders', title: 'Founders Section' },
    { name: 'story', title: 'Our Story' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      initialValue: 'About Us Page',
      readOnly: true,
    }),
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge',
      type: 'string',
      initialValue: 'Our Story',
      group: 'hero',
    }),
    defineField({
      name: 'heroHeading',
      title: 'Hero Main Heading',
      type: 'string',
      initialValue: 'We Believe Curiosity is the Greatest Superpower.',
      group: 'hero',
    }),
    defineField({
      name: 'heroIntro',
      title: 'Hero Intro Paragraph',
      type: 'text',
      rows: 3,
      initialValue: 'Founded in 2014 by national quizmasters Sachin Ravi & Raghav Chakravarthy, QShala is on a mission to spark questioning minds, build lateral thinking, and bring back the joy of discovery for students, teachers, and professionals across India.',
      group: 'hero',
    }),
    defineField({
      name: 'stats',
      title: 'Impact Number Milestones',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', type: 'string', title: 'Value (e.g. 250+, 80+, 1,000+, 2.5L+)' },
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'color', type: 'string', title: 'Accent Color Hex' },
          ],
        },
      ],
      group: 'stats',
      initialValue: [
        { value: '250+', label: 'Partner Schools', color: '#30B2E7' },
        { value: '80+', label: 'Top Corporates', color: '#75B543' },
        { value: '1,000+', label: 'Live Quests Hosted', color: '#FDB913' },
        { value: '2.5L+', label: 'Curious Learners', color: '#9333EA' },
      ],
    }),
    defineField({
      name: 'foundersHeading',
      title: 'Founders Section Heading',
      type: 'string',
      initialValue: 'Meet The Co-Founders',
      group: 'founders',
    }),
    defineField({
      name: 'foundersSubtitle',
      title: 'Founders Section Subtitle',
      type: 'string',
      initialValue: 'National quiz champions turned educational innovators, dedicated to making inquiry an everyday habit.',
      group: 'founders',
    }),
    defineField({
      name: 'storyHeadline',
      title: 'Origin Story Headline',
      type: 'string',
      initialValue: 'From Law School Quizzers to a National Socratic Movement.',
      group: 'story',
    }),
    defineField({
      name: 'storyContent',
      title: 'Origin Story Narrative',
      type: 'blockContent',
      group: 'story',
    }),
    defineField({
      name: 'seo',
      title: 'About Page SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'heroHeading',
    },
  },
});
