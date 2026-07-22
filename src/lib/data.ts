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
    tags: ['Corporate', 'Teambuilding', 'Hybrid Work']
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'p1',
    slug: 'curiosity-deck-100',
    title: 'The Great Curiosity Deck (100 Cards)',
    category: 'Game',
    price: '₹799',
    rating: 4.9,
    description: '100 illustrated flash cards with surprising facts, riddle questions, and QT mascot tips.',
    imageColor: 'bg-[#30B2E7]',
    isPopular: true
  },
  {
    id: 'p2',
    slug: 'why-book-365-questions',
    title: 'Why? The Book of 365 Daily Questions',
    category: 'Book',
    price: '₹599',
    rating: 5.0,
    description: 'Hardcover book exploring science, history, nature, and space for curious young minds.',
    imageColor: 'bg-[#FDB913]',
    isPopular: true
  },
  {
    id: 'p3',
    slug: 'junior-money-mastermind',
    title: 'Junior Money Mastermind Board Game',
    category: 'Learning Kit',
    price: '₹1,299',
    rating: 4.8,
    description: 'Includes play currency, budgeting board game, savings tracker, and interactive challenge cards.',
    imageColor: 'bg-[#75B543]'
  },
  {
    id: 'p4',
    slug: 'qt-mascot-plushie',
    title: 'QT The Curious Cat Plushie Toy',
    category: 'Merchandise',
    price: '₹899',
    rating: 4.9,
    description: 'Super-soft huggable QT plushie toy with interchangeable enamel curiosity badges.',
    imageColor: 'bg-[#FDB913]'
  }
];
