export interface BookingLead {
  id: string;
  type: 'quiz_booking' | 'contact_inquiry' | 'newsletter_subscription';
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  audienceType?: string;
  eventDate?: string;
  message?: string;
  status: 'New' | 'Contacted' | 'Confirmed';
  createdAt: string;
}

export const INITIAL_LEADS: BookingLead[] = [
  {
    id: 'BK-101',
    type: 'quiz_booking',
    name: 'Sunita Sharma',
    email: 'sunita@dpsbangalore.edu.in',
    phone: '+91 98765 43210',
    organization: 'DPS Bangalore East',
    audienceType: 'School & Students (K-12)',
    eventDate: '2026-08-20',
    status: 'New',
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString()
  },
  {
    id: 'BK-102',
    type: 'quiz_booking',
    name: 'Manish Jain',
    email: 'manish.jain@wipro.com',
    phone: '+91 98111 22334',
    organization: 'Wipro Technologies',
    audienceType: 'Corporate Offsite / Team',
    eventDate: '2026-09-05',
    status: 'Contacted',
    createdAt: new Date(Date.now() - 1000 * 60 * 120).toISOString()
  },
  {
    id: 'BK-103',
    type: 'quiz_booking',
    name: 'Ananya Rao',
    email: 'ananya@christuniversity.in',
    phone: '+91 99000 88776',
    organization: 'Christ University Fest',
    audienceType: 'College Campus Fest',
    eventDate: '2026-08-28',
    status: 'Confirmed',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString()
  },
  {
    id: 'BK-104',
    type: 'quiz_booking',
    name: 'Rohan Mehta',
    email: 'rohan@flipkart.com',
    phone: '+91 97777 66554',
    organization: 'Flipkart HR',
    audienceType: 'Corporate Offsite / Team',
    eventDate: '2026-09-12',
    status: 'New',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString()
  }
];

const STORAGE_KEY = 'qshala_booking_leads_v1';
const EVENT_NAME = 'qshala_leads_updated';

export function getStoredLeads(): BookingLead[] {
  if (typeof window === 'undefined') return INITIAL_LEADS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_LEADS));
      return INITIAL_LEADS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (err) {
    console.error('Failed to read leads from localStorage:', err);
  }
  return INITIAL_LEADS;
}

export function saveLead(leadData: Omit<BookingLead, 'id' | 'createdAt' | 'status'> & Partial<Pick<BookingLead, 'id' | 'createdAt' | 'status'>>): BookingLead {
  const newLead: BookingLead = {
    id: leadData.id || `LEAD-${Date.now().toString().slice(-6)}`,
    type: leadData.type,
    name: leadData.name.trim(),
    email: leadData.email.trim(),
    phone: leadData.phone?.trim() || 'N/A',
    organization: leadData.organization?.trim() || 'Direct Inquiry',
    audienceType: leadData.audienceType || 'General Inquiry',
    eventDate: leadData.eventDate || new Date().toISOString().split('T')[0],
    message: leadData.message?.trim(),
    status: leadData.status || 'New',
    createdAt: leadData.createdAt || new Date().toISOString()
  };

  if (typeof window !== 'undefined') {
    try {
      const current = getStoredLeads();
      const updated = [newLead, ...current.filter(l => l.id !== newLead.id)];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: updated }));
    } catch (err) {
      console.error('Failed to save lead to localStorage:', err);
    }
  }

  return newLead;
}

export function updateLeadStatus(id: string, status: 'New' | 'Contacted' | 'Confirmed'): void {
  if (typeof window === 'undefined') return;
  try {
    const current = getStoredLeads();
    const updated = current.map(l => l.id === id ? { ...l, status } : l);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: updated }));
  } catch (err) {
    console.error('Failed to update lead status:', err);
  }
}

export function deleteLead(id: string): void {
  if (typeof window === 'undefined') return;
  try {
    const current = getStoredLeads();
    const updated = current.filter(l => l.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: updated }));
  } catch (err) {
    console.error('Failed to delete lead:', err);
  }
}

export function onLeadsChange(callback: (leads: BookingLead[]) => void): () => void {
  if (typeof window === 'undefined') return () => {};
  const handler = (e: Event) => {
    const custom = e as CustomEvent<BookingLead[]>;
    if (custom.detail) {
      callback(custom.detail);
    } else {
      callback(getStoredLeads());
    }
  };
  window.addEventListener(EVENT_NAME, handler);
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      callback(getStoredLeads());
    }
  });
  return () => {
    window.removeEventListener(EVENT_NAME, handler);
  };
}

export function generateWhatsAppBookingUrl(lead: {
  name: string;
  organization?: string;
  audienceType: string;
  eventDate?: string;
  email?: string;
  phone?: string;
  notes?: string;
}): string {
  const text = `*New QShala Booking Inquiry* 🐾
*Name:* ${lead.name}
*Organization:* ${lead.organization || 'Individual / Family'}
*Audience Segment:* ${lead.audienceType}
*Preferred Date:* ${lead.eventDate || 'Flexible'}
*Email:* ${lead.email || 'N/A'}
*Phone:* ${lead.phone || 'N/A'}
${lead.notes ? `*Notes:* ${lead.notes}` : ''}

_Sent via QShala Web Platform_`;

  return `https://wa.me/918971676100?text=${encodeURIComponent(text)}`;
}
