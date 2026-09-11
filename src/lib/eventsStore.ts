export type EventCategory = 'School' | 'College' | 'Corporate' | 'Community';
export type EventButtonType = 'none' | 'register' | 'learn_more';

export interface UpcomingEvent {
  id: string;
  title: string;
  category: EventCategory;
  date: string;
  desc: string;
  buttonType: EventButtonType;
  buttonText?: string;
  buttonUrl?: string;
}

export const CATEGORY_OPTIONS: EventCategory[] = [
  'School',
  'College',
  'Corporate',
  'Community'
];

export const CATEGORY_BADGES: Record<EventCategory, { bg: string; text: string; border: string }> = {
  School: {
    bg: 'bg-emerald-100',
    text: 'text-emerald-800',
    border: 'border-emerald-300'
  },
  College: {
    bg: 'bg-amber-100',
    text: 'text-amber-800',
    border: 'border-amber-300'
  },
  Corporate: {
    bg: 'bg-sky-100',
    text: 'text-sky-800',
    border: 'border-sky-300'
  },
  Community: {
    bg: 'bg-rose-100',
    text: 'text-rose-800',
    border: 'border-rose-300'
  }
};

export const DEFAULT_EVENTS: UpcomingEvent[] = [
  {
    id: 'ev-1',
    title: 'Bengaluru Grand Quiz Fest',
    category: 'Community',
    date: 'Oct 15, 2026',
    desc: 'A massive city-wide trivia showdown for all age groups. Bring your family!',
    buttonType: 'register',
    buttonText: 'Register Now',
    buttonUrl: '/book-a-quiz'
  },
  {
    id: 'ev-2',
    title: 'The Tech History Showdown',
    category: 'College',
    date: 'Oct 22, 2026',
    desc: 'Test your knowledge on the evolution of technology, from the abacus to AI.',
    buttonType: 'register',
    buttonText: 'Join Waitlist',
    buttonUrl: '/book-a-quiz'
  },
  {
    id: 'ev-3',
    title: 'QShala Corporate Clash',
    category: 'Corporate',
    date: 'Nov 05, 2026',
    desc: 'Compete against other top companies in this team-building trivia tournament.',
    buttonType: 'learn_more',
    buttonText: 'Learn More',
    buttonUrl: '/services'
  },
  {
    id: 'ev-4',
    title: 'National Curiosity Cup',
    category: 'School',
    date: 'Dec 10, 2026',
    desc: 'The grand finale of our nation-wide inter-school quiz competition.',
    buttonType: 'none',
    buttonText: '',
    buttonUrl: ''
  }
];

const STORAGE_KEY = 'qshala_upcoming_events';
const EVENT_NAME = 'qshala_events_updated';

export function getUpcomingEvents(): UpcomingEvent[] {
  if (typeof window === 'undefined') {
    return DEFAULT_EVENTS;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_EVENTS));
      return DEFAULT_EVENTS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (err) {
    console.error('Failed to parse upcoming events from localStorage:', err);
  }
  return DEFAULT_EVENTS;
}

export function saveUpcomingEvents(events: UpcomingEvent[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: events }));
  } catch (err) {
    console.error('Failed to save upcoming events to localStorage:', err);
  }
}

export function onUpcomingEventsChange(callback: (events: UpcomingEvent[]) => void): () => void {
  if (typeof window === 'undefined') return () => {};
  const handler = (e: Event) => {
    const custom = e as CustomEvent<UpcomingEvent[]>;
    if (custom.detail) {
      callback(custom.detail);
    } else {
      callback(getUpcomingEvents());
    }
  };
  window.addEventListener(EVENT_NAME, handler);
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      callback(getUpcomingEvents());
    }
  });
  return () => {
    window.removeEventListener(EVENT_NAME, handler);
  };
}
