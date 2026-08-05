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
    tags: ['K-12', 'Curriculum', 'Socratic Pedagogy']
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
  },
  {
    id: 'cs3',
    slug: 'wipro-onboarding-gamification',
    clientName: 'Wipro',
    clientType: 'Corporate',
    title: 'Gamifying Onboarding & Corporate Culture for 5,000+ Global New Hires',
    summary: 'Replaced traditional slide presentations with interactive brand quests and company history trivia tournaments.',
    impactMetrics: [
      { label: 'New Hires Onboarded', value: '5,000+' },
      { label: 'Completion Rate', value: '96%' },
      { label: 'Early Attrition Drop', value: '-12%' }
    ],
    quote: {
      text: 'We\'ve been working with QShala for over two months now and we can\'t get enough of them! It makes culture stick.',
      author: 'Manish Jain',
      role: 'Global L&D Director, Wipro'
    },
    tags: ['Onboarding', 'Gamification', 'L&D']
  },
  {
    id: 'cs4',
    slug: 'nps-socratic-science-storytelling',
    clientName: 'National Public School',
    clientType: 'School',
    title: 'Pioneering Socratic Science & Civics Storytelling for Middle Schoolers',
    summary: 'Integrated weekly real-world discovery modules to connect textbook science with current affairs and everyday phenomena.',
    impactMetrics: [
      { label: 'Students Active', value: '2,100+' },
      { label: 'Science Interest', value: '+92%' },
      { label: 'Teacher Endorsement', value: '99%' }
    ],
    quote: {
      text: 'Our middle schoolers are engaged like never before. They don\'t just memorize science—they question it.',
      author: 'Dr. Revathi Srinivasan',
      role: 'Academic Director, NPS'
    },
    tags: ['K-12', 'Science', 'Critical Thinking']
  },
  {
    id: 'cs5',
    slug: 'inventure-academy-critical-thinking',
    clientName: 'Inventure Academy',
    clientType: 'School',
    title: 'Building 21st-Century Critical Thinking & Public Debate Leagues',
    summary: 'A multi-tier curiosity league where students analyze global news stories, logical fallacies, and ethical dilemmas.',
    impactMetrics: [
      { label: 'Learners Joined', value: '1,500+' },
      { label: 'Participation Boost', value: '3.4x' },
      { label: 'Student Rating', value: '4.9/5' }
    ],
    quote: {
      text: 'QShala fits perfectly into our learner-centric philosophy. It builds confident, curious global citizens.',
      author: 'Nooraine Fazal',
      role: 'Co-Founder & Managing Trustee, Inventure Academy'
    },
    tags: ['Debate', '21st Century Skills', 'Media Literacy']
  },
  {
    id: 'cs6',
    slug: 'tcs-cross-hub-workplace-engagement',
    clientName: 'TCS',
    clientType: 'Corporate',
    title: 'Cross-Functional Workplace Engagement Across 8 Regional Tech Hubs',
    summary: 'Quarterly inter-hub quiz championships with live digital buzzers and real-time leaderboards.',
    impactMetrics: [
      { label: 'Participants Joined', value: '3,500+' },
      { label: 'Engagement Rate', value: '91%' },
      { label: 'NPS Rating', value: '94/100' }
    ],
    quote: {
      text: 'QShala for more than two months now and we can’t get enough of them! The excitement in our hubs is palpable.',
      author: 'Rahul Singh',
      role: 'VP Employee Engagement, TCS'
    },
    tags: ['Corporate', 'Multi-Hub', 'Employee Retention']
  },
  {
    id: 'cs7',
    slug: 'iit-bombay-techfest-championship',
    clientName: 'IIT Bombay',
    clientType: 'College',
    title: 'Hosting India\'s Largest Inter-Collegiate Curiosity Quiz Championship',
    summary: 'Packed auditoriums with 6,000+ delegates competing in high-stakes science, tech, and general awareness rounds.',
    impactMetrics: [
      { label: 'College Delegates', value: '6,000+' },
      { label: 'Colleges Represented', value: '50+' },
      { label: 'Fest Rating', value: '98%' }
    ],
    quote: {
      text: 'The QShala quiz masters held an audience of 6,000 students spellbound for 3 straight hours.',
      author: 'Aakash Verma',
      role: 'Overall Coordinator, IIT Bombay Techfest'
    },
    tags: ['College', 'Fest Championship', 'Tech Quiz']
  },
  {
    id: 'cs8',
    slug: 'iim-bangalore-business-simulations',
    clientName: 'IIM Bangalore',
    clientType: 'College',
    title: 'Real-World Business Case Study Simulations & Strategy Quests for MBAs',
    summary: 'Interactive business trivia and market analysis strategy quests designed for future corporate leaders.',
    impactMetrics: [
      { label: 'MBA Candidates', value: '1,200+' },
      { label: 'Industry Relevance', value: '100%' },
      { label: 'Satisfaction Score', value: '4.9/5' }
    ],
    quote: {
      text: 'QShala brings an incredible blend of sharp business acumen and high-octane gamification.',
      author: 'Prof. Sourav Mukherji',
      role: 'Dean of Programs, IIM Bangalore'
    },
    tags: ['Higher Ed', 'MBA', 'Business Strategy']
  },
  {
    id: 'cs9',
    slug: 'sobha-city-family-game-nights',
    clientName: 'Sobha City Community',
    clientType: 'Community',
    title: 'Screen-Free Weekend Family Game Nights & Neighborhood Pub Quizzes',
    summary: 'Bringing parents, kids, and neighbors together for weekend offline trivia tournaments in residential complexes.',
    impactMetrics: [
      { label: 'Families Joined', value: '450+' },
      { label: 'Screen-Free Fun', value: '100%' },
      { label: 'Community Rating', value: '4.9/5' }
    ],
    quote: {
      text: 'It brought our entire apartment complex together! Kids and grandparents were on the same team laughing and learning.',
      author: 'Priya Sundaram',
      role: 'President, Sobha Resident Association'
    },
    tags: ['Community', 'Family', 'Screen-Free']
  },
  {
    id: 'cs10',
    slug: 'wework-community-networking-nights',
    clientName: 'WeWork India',
    clientType: 'Corporate',
    title: 'Monthly Community Pub Quizzes & Startup Founder Networking Nights',
    summary: 'Gamified pub quizzes hosted across WeWork spaces to spark casual networking among founders and freelancers.',
    impactMetrics: [
      { label: 'Members Engaged', value: '2,400+' },
      { label: 'Networking Boost', value: '+91%' },
      { label: 'Satisfaction', value: '96/100' }
    ],
    quote: {
      text: 'We\'ve been working with QShala for more than two months now and we can’t get enough of them! Essential member experience.',
      author: 'Bhavya Tripathi',
      role: 'Community Lead, WeWork'
    },
    tags: ['Coworking', 'Networking', 'Pub Quiz']
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
