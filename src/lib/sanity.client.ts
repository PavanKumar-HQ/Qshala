export interface QuizCardData {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Brain Teaser';
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  targetAudience: string;
  iconName: string;
  description: string;
  benefits: string[];
  keyModules: string[];
  accentColor: string;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  clientName: string;
  clientType: 'School' | 'Corporate' | 'College' | 'Community';
  title: string;
  summary: string;
  impactMetrics: { label: string; value: string }[];
  quote: { text: string; author: string; role: string };
  tags: string[];
}

export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  category: 'Book' | 'Game' | 'Learning Kit' | 'Merchandise';
  price: string;
  rating: number;
  description: string;
  imageColor: string;
  isPopular?: boolean;
}

export interface BlogItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: { name: string; role: string; avatar: string };
  publishedAt: string;
  readTime: string;
}

// Fallback high quality data engine
export const FEATURED_QUIZZES: QuizCardData[] = [
  {
    id: 'q1',
    category: 'Nature & Science',
    question: 'Why do octopus hearts stop beating when they swim?',
    options: [
      'To save energy',
      'Systemic heart pauses during swimming propulsion',
      'They only breathe when resting',
      'Their tentacles restrict blood flow'
    ],
    correctAnswer: 1,
    explanation: 'When an octopus swims, the systemic heart that delivers blood to its body stops beating, which is why they prefer crawling!',
    difficulty: 'Brain Teaser'
  },
  {
    id: 'q2',
    category: 'Everyday Physics',
    question: 'Why do wet clothes look darker than dry clothes?',
    options: [
      'Water absorbs light spectrums',
      'Water changes the fabric chemistry',
      'Water allows more light to pass through instead of reflecting back to your eyes',
      'Optical illusion caused by temperature drop'
    ],
    correctAnswer: 2,
    explanation: 'Water lowers the index of refraction, allowing more light to be transmitted into the fibers rather than reflected to your eyes!',
    difficulty: 'Medium'
  },
  {
    id: 'q3',
    category: 'Money & Life Skills',
    question: 'What is the "Rule of 72" used for in finance?',
    options: [
      'Calculating credit card interest',
      'Estimating years needed to double an investment',
      'Filing tax forms in India',
      'The minimum emergency savings buffer percentage'
    ],
    correctAnswer: 1,
    explanation: 'Divide 72 by your annual return rate to instantly estimate how many years it will take to double your money!',
    difficulty: 'Easy'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 's1',
    slug: 'schools',
    title: 'QShala for Schools',
    subtitle: 'Nurturing 21st-Century Skills & Curiosity in Classrooms',
    targetAudience: 'K-12 Students & Educators',
    iconName: 'GraduationCap',
    accentColor: '#30B2E7',
    description: 'Custom curiosity curriculum, weekend quizzes, teacher empowerment workshops, and inter-school national competitions designed to complement core academics.',
    benefits: ['Enhanced Critical Thinking', 'Current Affairs Mastery', 'Confidence in Public Speaking', 'Holistic Personality Growth'],
    keyModules: ['Weekly Curiosity Club', 'Inter-School Quiz Battles', 'Financial Literacy for Kids', 'Design Thinking Workshops']
  },
  {
    id: 's2',
    slug: 'companies',
    title: 'QShala for Corporates',
    subtitle: 'High-Energy Team Bonding, Trivia Nights & Brand Quizzes',
    targetAudience: 'HR, L&D Teams & Corporate Leaders',
    iconName: 'Building2',
    accentColor: '#FDB913',
    description: 'Transform boring corporate offsites and virtual townhalls into thrilling, highly engaging trivia & storytelling experiences.',
    benefits: ['Boost Employee Engagement', 'Cross-Team Collaboration', 'Fun Continuous Learning', 'Customized Company Trivia'],
    keyModules: ['Annual Corporate Championship', 'Friday Desk Trivia', 'Product Knowledge Gamification', 'Leadership Mindset Offsites']
  },
  {
    id: 's3',
    slug: 'colleges',
    title: 'QShala for Colleges',
    subtitle: 'Campus Fest Quizzes, Employability & General Awareness',
    targetAudience: 'Undergraduate & Postgraduate Campuses',
    iconName: 'School',
    accentColor: '#75B543',
    description: 'High-octane college quiz fests, career aptitude challenges, and current affairs marathons that challenge brightest young minds.',
    benefits: ['Industry Awareness', 'Problem-Solving Agility', 'National Campus Ranking', 'Exciting Rewards'],
    keyModules: ['College Fest Keynote Quizzes', 'Case Study Simulations', 'Global Aptitude League']
  },
  {
    id: 's4',
    slug: 'communities',
    title: 'QShala Communities',
    subtitle: 'Pub Quizzes, Family Game Nights & Neighborhood Festivals',
    targetAudience: 'Families, Apartments & Local Groups',
    iconName: 'Users',
    accentColor: '#30B2E7',
    description: 'Bringing neighbors and families together with inter-generational trivia, pub quizzes, and weekend curiosity pop-ups.',
    benefits: ['Intergenerational Bonding', 'Screen-Free Family Fun', 'Community Cohesion', 'Unforgettable Memories'],
    keyModules: ['Weekend Family Quiz Night', 'Apartment Complex Leagues', 'Festive Theme Quizzes']
  }
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'cs1',
    slug: 'dps-bangalore-curiosity-league',
    clientName: 'Delhi Public School',
    clientType: 'School',
    title: 'How DPS Transformed General Knowledge into an Active Weekly Sport for 4,000+ Students',
    summary: 'Replacing static encyclopedic learning with QShala interactive storytelling and weekly curiosity modules increased student participation by 340%.',
    impactMetrics: [
      { label: 'Students Engaged', value: '4,200+' },
      { label: 'Retention Score', value: '+88%' },
      { label: 'Parent Satisfaction', value: '98.4%' }
    ],
    quote: {
      text: 'QShala turned standard GK into the most anticipated hour of the school week. Children ask "Why?" with real passion now.',
      author: 'Sunita Sharma',
      role: 'Principal, DPS Bangalore East'
    },
    tags: ['K-12', 'Curriculum', 'Interactive Learning']
  },
  {
    id: 'cs2',
    slug: 'flipkart-corporate-trivia-league',
    clientName: 'Flipkart',
    clientType: 'Corporate',
    title: 'Driving Hybrid Team Connection Across 12 Cities with Custom QShala Live Trivia',
    summary: 'A 6-week gamified cross-functional championship that boosted inter-departmental engagement during company-wide hybrid work initiatives.',
    impactMetrics: [
      { label: 'Employees Joined', value: '1,800+' },
      { label: 'Live Engagement Rate', value: '94%' },
      { label: 'NPS Score', value: '92/100' }
    ],
    quote: {
      text: 'The energy QT and the QShala team brought to our townhalls was phenomenal. It bonded engineering and marketing seamlessly.',
      author: 'Rajesh Nair',
      role: 'Head of Employee Experience, Flipkart'
    },
    tags: ['Corporate', 'Employee Engagement', 'Custom Trivia']
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'p1',
    slug: 'curiosity-deck-vol-1',
    title: 'The Great Curiosity Deck (100 Mind-Bending Cards)',
    category: 'Game',
    price: '₹799',
    rating: 4.9,
    description: '100 illustrated flash cards with surprising facts, riddle questions, and QT mascot tips designed for dinner tables and road trips.',
    imageColor: 'bg-gradient-to-br from-sky-400 to-blue-600',
    isPopular: true
  },
  {
    id: 'p2',
    slug: 'why-book-for-curious-kids',
    title: 'Why? The Book of 365 Unanswered Questions',
    category: 'Book',
    price: '₹599',
    rating: 4.8,
    description: 'A beautifully crafted hardcover book exploring science, history, nature, and space through playful visual stories.',
    imageColor: 'bg-gradient-to-br from-amber-400 to-orange-500',
    isPopular: true
  },
  {
    id: 'p3',
    slug: 'junior-financial-literacy-kit',
    title: 'Junior Money Mastermind Activity Kit',
    category: 'Learning Kit',
    price: '₹1,299',
    rating: 5.0,
    description: 'Includes play currency, budgeting board game, savings goal tracker, and interactive storyline for ages 8-15.',
    imageColor: 'bg-gradient-to-br from-emerald-400 to-green-600',
    isPopular: false
  },
  {
    id: 'p4',
    slug: 'qt-mascot-plushie',
    title: 'QT The Curious Cat Plushie & Badge Set',
    category: 'Merchandise',
    price: '₹899',
    rating: 4.9,
    description: 'Super-soft huggable QT plushie toy with interchangeable enamel curiosity badges.',
    imageColor: 'bg-gradient-to-br from-yellow-300 to-amber-500',
    isPopular: false
  }
];

export const BLOG_POSTS: BlogItem[] = [
  {
    id: 'b1',
    slug: 'why-rote-learning-is-failing',
    title: 'Why Rote Learning Kills Creativity (And How Curiosity Replaces It)',
    excerpt: 'Examining why memorizing answers without asking "Why?" hinders critical thinking in modern children, and practical exercises for parents.',
    category: 'Pedagogy & Parenting',
    author: { name: 'Raghavan A.', role: 'Co-Founder & Chief Curious Officer', avatar: 'RA' },
    publishedAt: 'July 18, 2026',
    readTime: '4 min read'
  },
  {
    id: 'b2',
    slug: '5-micro-habits-for-curious-teams',
    title: '5 Micro-Habits That Make Corporate Teams 10x More Creative',
    excerpt: 'How leading tech companies use weekly curiosity sessions and trivia challenges to unlock innovative problem solving.',
    category: 'Corporate Culture',
    author: { name: 'Priya Sundaram', role: 'Head of Content & Design', avatar: 'PS' },
    publishedAt: 'July 12, 2026',
    readTime: '6 min read'
  }
];
