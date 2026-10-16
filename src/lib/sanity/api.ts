import { sanityClient, isSanityConfigured } from './client';
import * as queries from './queries';
import type {
  SanitySiteSettings,
  SanityNavigation,
  SanityFooter,
  SanityHomePage,
  SanityAboutPage,
  SanityServicePage,
  SanityEvent,
  SanityCaseStudy,
  SanityTeamMember,
  SanityAdvisor,
  SanityFAQ,
  SanityTestimonial,
  SanityPost,
  SanityProduct,
  SanityPartner,
} from './types';
import { CASE_STUDIES_DATA, PRODUCTS_DATA } from '../data';
import { DEFAULT_EVENTS } from '../eventsStore';

// ==========================================
// AUDITED STATIC FALLBACK DATA
// ==========================================

const DEFAULT_SITE_SETTINGS: SanitySiteSettings = {
  brandName: 'QShala',
  tagline: "Questions • Quriosity • Quests — India's Quriosity Company",
  contactPhone: '+91 89716 76100',
  contactEmail: 'qshala@walnuts.co.in',
  officeAddress:
    '1st Floor, 680, Fortuna 1, 8th Main Road, 14th Cross Road, Near Delmia Circle, 3rd Phase, J.P. Nagar, Bengaluru, Karnataka - 560078',
  googleMapsUrl:
    'https://maps.google.com/?q=Walnut+Knowledge+Solutions+JP+Nagar+Bengaluru',
  socialLinks: [
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/qshala/' },
    { platform: 'Instagram', url: 'https://www.instagram.com/qshala_curiosity/' },
    { platform: 'YouTube', url: 'https://www.youtube.com/@QShala' },
    { platform: 'Facebook', url: 'https://www.facebook.com/QShala/' },
  ],
  defaultSeo: {
    metaTitle: "QShala | Questions • Quriosity • Quests — India's Quriosity Company",
    metaDescription:
      'Replacing Rote Learning with Quriosity, Socratic Storytelling, and Inquiry. Partnering with 250+ Schools & 80+ Corporates across India. Founded by Quizmasters Sachin Ravi & Raghav Chakravarthy.',
  },
};

const DEFAULT_NAVIGATION: SanityNavigation = {
  title: 'Main Navigation',
  links: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Store', href: '/shop' },
    { name: 'Blog & Events', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  ctaButton: {
    label: 'Book a Quiz',
    url: '/book-a-quiz',
    variant: 'yellow',
  },
};

const DEFAULT_FOOTER: SanityFooter = {
  bannerBadge: 'Joy of Quest',
  bannerHeading: 'Ready to replace rote learning with quriosity?',
  bannerDescription:
    'Partner with our team for consultative school programs, corporate trivia offsites, or custom quests.',
  bannerCtaText: 'Talk to us →',
  bannerCtaUrl: '/contact',
  companyName: 'Walnut Knowledge Solutions',
  companyDescription:
    "QShala is India's premier quriosity learning platform built by Walnut Knowledge Solutions.",
  copyrightText:
    '© 2026 QShala • Curiosita Educational Services Pvt. Ltd. All rights reserved.',
  quickLinks: [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog & Events', href: '/blog' },
    { name: 'Quriosity Store', href: '/shop' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Book a Quiz', href: '/book-a-quiz' },
  ],
  programLinks: [
    { name: 'Schools (K-12 Clubs)', href: '/schools' },
    { name: 'Companies (Team Trivia)', href: '/companies' },
    { name: 'Colleges (Campus Leagues)', href: '/colleges' },
    { name: 'Communities & Families', href: '/communities' },
    { name: 'Custom Curated Quests', href: '/custom' },
  ],
  resourcesLinks: [
    { name: 'Daily Quiz Playground', href: '/#game' },
    { name: 'The QShala Effect', href: '/#effect' },
    { name: 'Past Events Archive', href: '/archive' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
  ],
};

const DEFAULT_HOME_PAGE: SanityHomePage = {
  heroBadge: "India's Quriosity Platform",
  heroTypewriterPrefix: 'Igniting',
  heroTypewriterWords: [
    'Quriosity.',
    'Critical Thinking.',
    'Wonder.',
    'Confidence.',
    'Lifelong Joy.',
  ],
  heroIntro:
    "QShala is India's premier curiosity platform and live quizmaster organization. Partnering with 250+ K-12 schools and 80+ top corporates to replace rote memorization with Socratic questioning, real-world discovery quests, and interactive buzzer championships.",
  heroCta: {
    label: 'Book a Quriosity Experience →',
    url: '/book-a-quiz',
    variant: 'yellow',
  },
  eventsHeading: 'Upcoming Events',
  eventsSubtitle: 'Join us for live quizzes, offline tournaments, and community events.',
  gameBadge: 'Daily Game',
  gameHeading: 'Test Your Quriosity',
  gameSubtitle: 'Pick an answer below to trigger a celebration!',
  storeBadge: 'Quriosity Store',
  storeHeading: 'Books, Games & Thinking Kits.',
  storeSubtitle:
    'Curated conversation decks, financial literacy storybooks, and STEM lab kits designed for homes and classrooms.',
};

const DEFAULT_ABOUT_PAGE: SanityAboutPage = {
  heroBadge: 'Our Story',
  heroHeading: 'We Believe Curiosity is the Greatest Superpower.',
  heroIntro:
    'Founded in 2014 by national quizmasters Sachin Ravi & Raghav Chakravarthy, QShala is on a mission to spark questioning minds, build lateral thinking, and bring back the joy of discovery for students, teachers, and professionals across India.',
  stats: [
    { value: '250+', label: 'Partner Schools', color: '#30B2E7' },
    { value: '80+', label: 'Top Corporates', color: '#75B543' },
    { value: '1,000+', label: 'Live Quests Hosted', color: '#FDB913' },
    { value: '2.5L+', label: 'Curious Learners', color: '#9333EA' },
  ],
  foundersHeading: 'Meet The Co-Founders',
  foundersSubtitle:
    'National quiz champions turned educational innovators, dedicated to making inquiry an everyday habit.',
  storyHeadline: 'From Law School Quizzers to a National Socratic Movement.',
};

const DEFAULT_CO_FOUNDERS: SanityTeamMember[] = [
  {
    id: 'sachin-ravi',
    name: 'Sachin Ravi',
    role: 'Co-Founder & CEO, QShala',
    category: 'Leadership',
    bio: 'NLSIU Bangalore graduate, former national quiz champion, and TEDx speaker. Sachin has authored financial literacy curricula and hosted over 600 live auditoriums nationwide.',
    imageUrl: '/assets/team/sachin-ravi.jpg',
    isCoFounder: true,
    coFounderBadge: 'NLSIU Alum • National Quiz Champion • 600+ Stage Quizzes',
    linkedInUrl: 'https://www.linkedin.com/in/sachin-ravi-qshala/',
  },
  {
    id: 'raghav-chakravarthy',
    name: 'Raghav Chakravarthy',
    role: 'Co-Founder & Chief Quizmaster',
    category: 'Leadership',
    bio: 'NLSIU Bangalore alumnus, quiz architect, and master storyteller. Raghav designs socratic discovery modules that turn complex current affairs and science into unforgettable adventures.',
    imageUrl: '/assets/team/raghav-chakravarthy.jpg',
    isCoFounder: true,
    coFounderBadge: 'NLSIU Alum • Master Storyteller • Socratic Pedagogy Lead',
    linkedInUrl: 'https://www.linkedin.com/in/raghav-chakravarthy-qshala/',
  },
];

const DEFAULT_CURIOSITY_CREW: SanityTeamMember[] = [
  {
    id: 'ananya',
    name: 'Ananya M.',
    role: 'Senior Instructional Designer',
    category: 'Design',
    bio: 'Crafting storyboards, visual discovery prompts, and bringing the QT mascot to life.',
    imageUrl: 'https://ui-avatars.com/api/?name=Ananya+M&background=FDB913&color=fff&size=300',
    mascotVariant: 'holding_money',
    accentColor: '#FDB913',
  },
  {
    id: 'divya',
    name: 'Divya S.',
    role: 'Lead, School Partnerships',
    category: 'Partnerships',
    bio: 'Guiding principals and academic coordinators to integrate weekly Quriosity Clubs.',
    imageUrl: 'https://ui-avatars.com/api/?name=Divya+S&background=EC4899&color=fff&size=300',
    mascotVariant: 'curious',
    accentColor: '#EC4899',
  },
  {
    id: 'karthik',
    name: 'Karthik R.',
    role: 'Head of Gamified Tech',
    category: 'Technology',
    bio: 'Architecting interactive daily quiz engines, digital buzzers, and real-time leaderboards.',
    imageUrl: 'https://ui-avatars.com/api/?name=Karthik+R&background=30B2E7&color=fff&size=300',
    mascotVariant: 'professional',
    accentColor: '#30B2E7',
  },
  {
    id: 'preeti',
    name: 'Preeti K.',
    role: 'Head of Curriculum',
    category: 'Curriculum',
    bio: 'Designing inquiry frameworks and socratic questioning modules for 250+ partner schools.',
    imageUrl: 'https://ui-avatars.com/api/?name=Preeti+K&background=75B543&color=fff&size=300',
    mascotVariant: 'reading',
    accentColor: '#75B543',
  },
  {
    id: 'vikram',
    name: 'Vikram P.',
    role: 'Corporate Engagement Lead',
    category: 'Corporate',
    bio: 'Designing high-octane team trivia nights and culture offsites for corporate partners.',
    imageUrl: 'https://ui-avatars.com/api/?name=Vikram+P&background=75B543&color=fff&size=300',
    mascotVariant: 'trophy',
    accentColor: '#75B543',
  },
];

const DEFAULT_ADVISORS: SanityAdvisor[] = [
  {
    name: 'Nithin Kamath',
    role: 'Co-Founder & CEO, Zerodha',
    company: 'Zerodha',
    color: '#387ED1',
    badge: 'Angel Backer',
    logoUrl: '/assets/logos/zerodha.svg',
  },
  {
    name: 'Kalyan Banerjee',
    role: 'Co-Founder, Mindtree',
    company: 'Mindtree',
    color: '#FDB913',
    badge: 'Advisor & Angel',
    logoUrl: '/assets/logos/mindtree.svg',
  },
  {
    name: 'Preeti Sawhney',
    role: 'Former Director, Lowe Lintas',
    company: 'Lowe Lintas',
    color: '#75B543',
    badge: 'Strategic Advisor',
    logoUrl: '/assets/logos/lowelintas.webp',
  },
  {
    name: 'Sanjay Tambwekar',
    role: 'CTO, Qwikcilver',
    company: 'Qwikcilver',
    color: '#9333EA',
    badge: 'Angel Backer',
    logoUrl: '/assets/logos/qwikcilver.svg',
  },
  {
    name: 'Suresh Kumar Pinglay',
    role: 'Former VP, Oracle India',
    company: 'Oracle India',
    color: '#F80000',
    badge: 'Strategic Advisor',
    logoUrl: '/assets/logos/oracle.svg',
  },
  {
    name: 'Chetan Vinchhi',
    role: 'India Head, Uptycs',
    company: 'Uptycs',
    color: '#30B2E7',
    badge: 'Angel Backer',
    logoUrl: '/assets/logos/uptycs.webp',
  },
];

const DEFAULT_FAQS: SanityFAQ[] = [
  {
    question: 'What makes QShala different from traditional quiz competitions?',
    answer:
      'Traditional quizzes test rote memorization of static facts. QShala focuses on Socratic storytelling, critical thinking, and "Why?" questions to turn learning into an active discovery quest.',
    category: 'General',
    showOnHome: true,
  },
  {
    question: 'Are QShala sessions conducted online or in-person?',
    answer:
      'Both! We host live in-person workshops, auditoriums, and stage championships, as well as hybrid and fully remote sessions with digital buzzers and real-time leaderboards.',
    category: 'General',
    showOnHome: true,
  },
  {
    question: 'How do QShala Quriosity Clubs fit into a school timetable?',
    answer:
      'QShala Quriosity Clubs are 40 to 60-minute weekly modules that easily complement standard General Knowledge, Library, or Life Skills periods for Grades 1 through 12.',
    category: 'Schools',
    showOnHome: true,
  },
  {
    question: 'How do corporate trivia sessions improve team bonding?',
    answer:
      'Shared play creates psychological safety. Our low-pressure, high-fun trivia tournaments bond cross-functional teams and boost workplace connection across hybrid offices.',
    category: 'Corporate',
    showOnHome: true,
  },
  {
    question: 'Can QShala customize trivia around our company history and products?',
    answer:
      'Yes! We frequently design custom brand trivia, company milestone quizzes, and onboarding challenges tailored specifically to your corporate culture.',
    category: 'Corporate',
    showOnHome: true,
  },
  {
    question: 'What formats are offered for college campus fests and hackathons?',
    answer:
      "We bring professional quizmasters, domain researchers, and multimedia buzzer setups for law moot court festivals, B-school strategy leagues, and STEM hackathons across India's top colleges.",
    category: 'Colleges',
    showOnHome: true,
  },
  {
    question: 'Can families or community groups host a private quiz or game night?',
    answer:
      'Absolutely! We conduct screen-free weekend family game nights and apartment society tournaments where kids, parents, and grandparents collaborate on mixed teams.',
    category: 'Families',
    showOnHome: true,
  },
];

const DEFAULT_TESTIMONIALS: SanityTestimonial[] = [
  {
    author: 'Sunita Sharma',
    role: 'Principal',
    organization: 'Delhi Public School, Bangalore East',
    category: 'School',
    quote:
      'QShala turned standard GK into the most anticipated hour of the school week. Children ask "Why?" with real passion now.',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    author: 'Rajesh Nair',
    role: 'Head of Employee Experience',
    organization: 'Flipkart',
    category: 'Corporate',
    quote:
      'The energy QT and the QShala team brought to our hybrid townhall was phenomenal. It bonded engineering and marketing seamlessly.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    author: 'Dr. Revathi Srinivasan',
    role: 'Academic Director',
    organization: 'National Public School',
    category: 'School',
    quote:
      "Our middle schoolers are engaged like never before. They don't just memorize science—they question and investigate it.",
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    author: 'Manish Jain',
    role: 'Global L&D Director',
    organization: 'Wipro',
    category: 'Corporate',
    quote:
      "We've been working with QShala for over two months now and we can't get enough of them! It makes culture and history stick.",
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    author: 'Prof. Sourav Mukherji',
    role: 'Dean of Programs',
    organization: 'IIM Bangalore',
    category: 'College',
    quote:
      'QShala brings an incredible blend of sharp business acumen and high-octane gamification for MBA cohorts.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
];

const DEFAULT_SERVICE_PAGES: Record<string, SanityServicePage> = {
  schools: {
    title: 'Quriosity in Your School',
    slug: 'schools',
    badge: 'Schools',
    headline: 'Quriosity Programs for Forward-Thinking Schools.',
    intro:
      'Some schools want the syllabus to come alive. Others want to train students to be quizzers, keep them up to date with current affairs, or to up-skill teachers. We do it all.',
    mascotVariant: 'reading',
    offerings: [
      {
        title: 'Discover Curriculum',
        tagline: 'Making the syllabus come alive',
        desc: 'Science, social science and general knowledge, taught through quizzes, stories and activities, so students see why it matters.',
        accent: '#30B2E7',
        bg: 'bg-[#E8F6FD]',
      },
      {
        title: 'Discover Skills',
        tagline: 'Marks matter, but so does knowing how to think',
        desc: 'Sessions that build creativity, critical thinking and teamwork.',
        accent: '#75B543',
        bg: 'bg-[#EDF7E5]',
      },
      {
        title: 'Quiz Hobby Program',
        tagline: 'Where curiosity turns into confidence',
        desc: 'An after-school program for students who love quizzing, with formats that build speed, teamwork and stage presence.',
        accent: '#FDB913',
        bg: 'bg-[#FFF8E1]',
      },
      {
        title: 'Financial Literacy',
        tagline: 'Money matters, made simple',
        desc: 'Practical lessons on saving, spending and choosing well.',
        accent: '#9333EA',
        bg: 'bg-[#F3E8FF]',
      },
    ],
    specialModules: [
      {
        title: 'Teacher-Led Modules',
        tagline: 'Empowering teachers, inspiring students',
        desc: 'Ready-to-use modules on life skills and logical reasoning, with lesson plans and workbooks, so your own teachers can lead.',
      },
      {
        title: 'Teacher Training Workshops',
        tagline: 'Delivery smooth from day one',
        desc: 'Teachers trained before the school year begins, so delivery is smooth from day one.',
      },
      {
        title: 'Quiz Platform',
        tagline: 'Curiosity at your fingertips',
        desc: 'A bank of curated questions, plus QShots, short daily quizzes that keep students curious every day.',
      },
    ],
    flagshipQuizzes: [
      {
        title: 'QQL Club',
        badge: 'Daily Habit • All Ages',
        desc: 'A daily quiz habit for your students. Five fresh questions arrive by email every day, with an answer review after each quiz and a Monthly Mega Quiz at the end of every month. ₹499 for six months from the day a student joins, and open to all ages.',
        price: '₹499 / 6 months',
      },
      {
        title: 'QShala Quiz League (QQL)',
        badge: 'Annual National League',
        desc: 'Our annual national online quiz league. Weekly quizzes through the tournament, then a live Grand Finale.',
        price: 'National League',
      },
      {
        title: 'QShala Quriosity Quiz (QQQ)',
        badge: 'In-Person Bangalore Flagship',
        desc: 'An in-person quiz in Bangalore, held every year in junior and senior editions and open to all schools.',
        price: 'Bengaluru Flagship',
      },
    ],
    collaborations: [
      {
        title: 'Neev Literature Festival',
        desc: 'Students read 30 books over three months as part of the NLF Reading Challenge and we run the quiz on them. Online preliminary rounds, semi-finals, and the final takes place on festival day in Bengaluru, with six teams from six schools.',
      },
      {
        title: 'Safety Quest',
        desc: 'An online road-safety quiz, free to join and open nationwide, held every year with the Arundhati Foundation, a Bengaluru non-profit working on road safety.',
      },
    ],
    contactDirectLine: {
      name: 'Sachin Ravi',
      phone: '+91 90080 43525',
      role: 'Co-Founder & Head of School Programs',
    },
  },
  companies: {
    title: 'Quriosity at Work',
    slug: 'companies',
    badge: 'Companies',
    headline: 'Quriosity Programs for Forward-Thinking Companies.',
    intro:
      'We work with leading corporates across India to design team offsites, gamified onboarding quests, and high-octane company trivia championships that build lasting employee connection.',
    mascotVariant: 'professional',
    offerings: [
      {
        title: 'Team Offsites & Retreats',
        tagline: 'Turn awkward icebreakers into pure camaraderie',
        desc: 'High-energy live trivia with digital buzzers, audio-visual mysteries, and cross-functional team quests.',
        accent: '#75B543',
        bg: 'bg-[#EDF7E5]',
      },
      {
        title: 'Gamified Onboarding',
        tagline: 'Make company culture stick from Day 1',
        desc: 'Replace slide decks with interactive brand lore quests, company milestones, and peer trivia.',
        accent: '#30B2E7',
        bg: 'bg-[#E8F6FD]',
      },
      {
        title: 'Townhall & Milestone Buzzers',
        tagline: 'Celebrate wins with full-room participation',
        desc: 'Engage thousands of employees across offices and remote hubs simultaneously with real-time leaderboards.',
        accent: '#FDB913',
        bg: 'bg-[#FFF8E1]',
      },
    ],
    contactDirectLine: {
      name: 'Sachin Ravi',
      phone: '+91 90080 43525',
      role: 'Co-Founder, Corporate Partnerships',
    },
  },
  colleges: {
    title: 'Quriosity on Campus',
    slug: 'colleges',
    badge: 'Colleges',
    headline: 'High-Stakes Quizzing & Strategy Leagues for Campuses.',
    intro:
      'From campus cultural fests and law moot court tournaments to B-school business simulations, we bring seasoned quizmasters and multimedia buzzers to ignite campus auditoriums.',
    mascotVariant: 'idea',
    offerings: [
      {
        title: 'Campus Fest Quizzing',
        tagline: 'Auditorium championships that draw massive crowds',
        desc: 'Custom-themed quizzes across pop culture, tech, general awareness, and science.',
        accent: '#FDB913',
        bg: 'bg-[#FFF8E1]',
      },
      {
        title: 'Business & Strategy Quests',
        tagline: 'Case studies turned into rapid strategy games',
        desc: 'Engage MBA candidates with market analysis, lateral dilemmas, and corporate history.',
        accent: '#30B2E7',
        bg: 'bg-[#E8F6FD]',
      },
    ],
    contactDirectLine: {
      name: 'Sachin Ravi',
      phone: '+91 90080 43525',
      role: 'Co-Founder & Campus Lead',
    },
  },
  communities: {
    title: 'Quriosity for Your Crowd',
    slug: 'communities',
    badge: 'Communities & Families',
    headline: 'Screen-Free Weekend Games & Neighborhood Trivia.',
    intro:
      'Apartment societies, family celebrations, or alumni reunions. Wherever people gather, we create joyous trivia where kids and grandparents compete on the same team.',
    mascotVariant: 'curious',
    offerings: [
      {
        title: 'Family Game Nights',
        tagline: 'Generations laughing and playing together',
        desc: 'Screen-free questions that challenge grandparents, parents, and kids in equal measure.',
        accent: '#30B2E7',
        bg: 'bg-[#E8F6FD]',
      },
      {
        title: 'Apartment Society Quizzes',
        tagline: 'Bonding neighborhoods through friendly rivalry',
        desc: 'Weekend club house tournaments with spot trivia and surprise gifts.',
        accent: '#75B543',
        bg: 'bg-[#EDF7E5]',
      },
    ],
    contactDirectLine: {
      name: 'Sachin Ravi',
      phone: '+91 90080 43525',
      role: 'Co-Founder',
    },
  },
  custom: {
    title: "Let's Build Something New",
    slug: 'custom',
    badge: 'Custom',
    headline: 'Tailor-Made Quriosity Experiences Built for You.',
    intro:
      "Got an event, exhibition, museum walk, or brand anniversary we haven't listed yet? Tell us your vision and let's bring it to life.",
    mascotVariant: 'trophy',
    offerings: [
      {
        title: 'Brand Anniversary Quests',
        tagline: 'Celebrate company heritage with storytelling',
        desc: 'Custom trivia journeys highlighting the founders, inventions, and quirks of your organization.',
        accent: '#FDB913',
        bg: 'bg-[#FFF8E1]',
      },
      {
        title: 'Museum & Heritage Walks',
        tagline: 'Interactive inquiry journeys for history and art',
        desc: 'Clue-based scavenger hunts that turn historical sites and galleries into living puzzles.',
        accent: '#9333EA',
        bg: 'bg-[#F3E8FF]',
      },
    ],
    contactDirectLine: {
      name: 'Sachin Ravi',
      phone: '+91 90080 43525',
      role: 'Co-Founder',
    },
  },
};

// ==========================================
// RESILIENT DATA FETCHING FUNCTIONS
// ==========================================

async function fetchWithFallback<T>(
  query: string,
  fallback: T,
  validator?: (data: any) => boolean,
  params: Record<string, any> = {}
): Promise<T> {
  if (!isSanityConfigured()) return fallback;
  try {
    const data = await sanityClient.fetch<any>(query, params);
    if (!data) return fallback;
    if (validator && !validator(data)) return fallback;
    if (Array.isArray(fallback)) {
      return (Array.isArray(data) && data.length > 0 ? data : fallback) as unknown as T;
    }
    return { ...(fallback as any), ...data };
  } catch (err) {
    console.warn('[Sanity] Query failed, using fallback:', err);
    return fallback;
  }
}

export const getSiteSettings = (): Promise<SanitySiteSettings> =>
  fetchWithFallback(queries.siteSettingsQuery, DEFAULT_SITE_SETTINGS, (d) => Boolean(d?.brandName));

export const getNavigation = (): Promise<SanityNavigation> =>
  fetchWithFallback(queries.navigationQuery, DEFAULT_NAVIGATION, (d) => Array.isArray(d?.links) && d.links.length > 0);

export const getFooter = (): Promise<SanityFooter> =>
  fetchWithFallback(queries.footerQuery, DEFAULT_FOOTER, (d) => Boolean(d?.companyName));

export const getHomePage = (): Promise<SanityHomePage> =>
  fetchWithFallback(queries.homePageQuery, DEFAULT_HOME_PAGE, (d) => Boolean(d?.heroIntro));

export const getAboutPage = (): Promise<SanityAboutPage> =>
  fetchWithFallback(queries.aboutPageQuery, DEFAULT_ABOUT_PAGE, (d) => Boolean(d?.heroTitle));

export const getServicePage = (slug: string): Promise<SanityServicePage> =>
  fetchWithFallback(
    queries.servicePageBySlugQuery,
    DEFAULT_SERVICE_PAGES[slug] || DEFAULT_SERVICE_PAGES.schools,
    (d) => Boolean(d?.title),
    { slug }
  );

export const getAllServicePages = (): Promise<SanityServicePage[]> =>
  fetchWithFallback(queries.allServicePagesQuery, Object.values(DEFAULT_SERVICE_PAGES));

export const getUpcomingEvents = (): Promise<SanityEvent[]> =>
  fetchWithFallback(queries.upcomingEventsQuery, DEFAULT_EVENTS);

export const getAllCaseStudies = (): Promise<SanityCaseStudy[]> =>
  fetchWithFallback(queries.allCaseStudiesQuery, CASE_STUDIES_DATA);

export const getCoFounders = (): Promise<SanityTeamMember[]> =>
  fetchWithFallback(queries.coFoundersQuery, DEFAULT_CO_FOUNDERS);

export const getCuriosityCrew = (): Promise<SanityTeamMember[]> =>
  fetchWithFallback(queries.curiosityCrewQuery, DEFAULT_CURIOSITY_CREW);

export const getAdvisors = (): Promise<SanityAdvisor[]> =>
  fetchWithFallback(queries.allAdvisorsQuery, DEFAULT_ADVISORS);

export const getFAQs = (homepageOnly = false): Promise<SanityFAQ[]> =>
  fetchWithFallback(homepageOnly ? queries.homeFaqsQuery : queries.allFaqsQuery, DEFAULT_FAQS);

export const getTestimonials = (): Promise<SanityTestimonial[]> =>
  fetchWithFallback(queries.allTestimonialsQuery, DEFAULT_TESTIMONIALS);

export const getProducts = (): Promise<SanityProduct[]> =>
  fetchWithFallback(
    queries.allProductsQuery,
    PRODUCTS_DATA.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      category: p.category,
      price: Number(p.price.replace(/[^0-9.]/g, '')) || 299,
      rating: p.rating,
      description: p.description,
      isPopular: p.isPopular,
    }))
  );

export const getPosts = (): Promise<SanityPost[]> =>
  fetchWithFallback(queries.allPostsQuery, []);

export const getPostBySlug = (slug: string): Promise<SanityPost | null> =>
  fetchWithFallback(queries.postBySlugQuery, null as unknown as SanityPost, (d) => Boolean(d?.title), { slug });

export const getPartners = (): Promise<SanityPartner[]> =>
  fetchWithFallback(queries.allPartnersQuery, []);
