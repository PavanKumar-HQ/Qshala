import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Homepage Content',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'events', title: 'Upcoming Events' },
    { name: 'effect', title: 'QShala Effect' },
    { name: 'game', title: 'Daily Game' },
    { name: 'store', title: 'Curated Store' },
    { name: 'faqs', title: 'FAQ Section' },
    { name: 'newsletter', title: 'Newsletter' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      initialValue: 'Home Page',
      readOnly: true,
    }),
    // HERO
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge Text',
      type: 'string',
      initialValue: 'India\'s Quriosity Platform',
      group: 'hero',
    }),
    defineField({
      name: 'heroTypewriterPrefix',
      title: 'Typewriter Static Prefix',
      type: 'string',
      initialValue: 'Igniting',
      group: 'hero',
    }),
    defineField({
      name: 'heroTypewriterWords',
      title: 'Typewriter Animated Words',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: ['Quriosity.', 'Critical Thinking.', 'Wonder.', 'Confidence.', 'Lifelong Joy.'],
      group: 'hero',
    }),
    defineField({
      name: 'heroIntro',
      title: 'Hero Intro Paragraph',
      type: 'text',
      rows: 3,
      initialValue: 'QShala is India\'s premier curiosity platform and live quizmaster organization. Partnering with 250+ K-12 schools and 80+ top corporates to replace rote memorization with Socratic questioning, real-world discovery quests, and interactive buzzer championships.',
      group: 'hero',
    }),
    defineField({
      name: 'heroCta',
      title: 'Hero Primary CTA Button',
      type: 'callToAction',
      initialValue: {
        label: 'Book a Quriosity Experience →',
        url: '/book-a-quiz',
        variant: 'yellow',
      },
      group: 'hero',
    }),

    // UPCOMING EVENTS SECTION
    defineField({
      name: 'eventsHeading',
      title: 'Upcoming Events Heading',
      type: 'string',
      initialValue: 'Upcoming Events',
      group: 'events',
    }),
    defineField({
      name: 'eventsSubtitle',
      title: 'Upcoming Events Subtitle',
      type: 'string',
      initialValue: 'Join us for live quizzes, offline tournaments, and community events.',
      group: 'events',
    }),

    // DAILY GAME
    defineField({
      name: 'gameBadge',
      title: 'Daily Game Badge',
      type: 'string',
      initialValue: 'Daily Game',
      group: 'game',
    }),
    defineField({
      name: 'gameHeading',
      title: 'Daily Game Heading',
      type: 'string',
      initialValue: 'Test Your Quriosity',
      group: 'game',
    }),
    defineField({
      name: 'gameSubtitle',
      title: 'Daily Game Subtitle',
      type: 'string',
      initialValue: 'Pick an answer below to trigger a celebration!',
      group: 'game',
    }),

    // CURATED STORE PREVIEW
    defineField({
      name: 'storeBadge',
      title: 'Store Badge Label',
      type: 'string',
      initialValue: 'Quriosity Store',
      group: 'store',
    }),
    defineField({
      name: 'storeHeading',
      title: 'Store Section Heading',
      type: 'string',
      initialValue: 'Books, Games & Thinking Kits.',
      group: 'store',
    }),
    defineField({
      name: 'storeSubtitle',
      title: 'Store Section Subtitle',
      type: 'text',
      rows: 2,
      initialValue: 'Curated conversation decks, financial literacy storybooks, and STEM lab kits designed for homes and classrooms.',
      group: 'store',
    }),

    // SEO
    defineField({
      name: 'seo',
      title: 'Homepage SEO Overrides',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'heroIntro',
    },
  },
});
