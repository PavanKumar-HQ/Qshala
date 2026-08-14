import React, { useState } from 'react';
import { 
  Users, 
  School, 
  Building2, 
  HelpCircle, 
  ShoppingBag, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Search, 
  Plus, 
  Filter, 
  TrendingUp, 
  Sparkles,
  Lock,
  LogOut,
  Mail,
  Phone,
  Calendar
} from 'lucide-react';

type AdminTab = 'overview' | 'bookings' | 'quizzes' | 'store' | 'blogs';

interface BookingLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  organization: string;
  audienceType: string;
  eventDate: string;
  status: 'New' | 'Contacted' | 'Confirmed';
  createdAt: string;
}

const MOCK_BOOKINGS: BookingLead[] = [
  {
    id: 'BK-101',
    name: 'Sunita Sharma',
    email: 'sunita@dpsbangalore.edu.in',
    phone: '+91 98765 43210',
    organization: 'DPS Bangalore East',
    audienceType: 'School & Students (K-12)',
    eventDate: '2026-08-20',
    status: 'New',
    createdAt: '10 mins ago'
  },
  {
    id: 'BK-102',
    name: 'Manish Jain',
    email: 'manish.jain@wipro.com',
    phone: '+91 98111 22334',
    organization: 'Wipro Technologies',
    audienceType: 'Corporate Offsite / Team',
    eventDate: '2026-09-05',
    status: 'Contacted',
    createdAt: '2 hours ago'
  },
  {
    id: 'BK-103',
    name: 'Ananya Rao',
    email: 'ananya@christuniversity.in',
    phone: '+91 99000 88776',
    organization: 'Christ University Fest',
    audienceType: 'College Campus Fest',
    eventDate: '2026-08-28',
    status: 'Confirmed',
    createdAt: '1 day ago'
  },
  {
    id: 'BK-104',
    name: 'Rohan Mehta',
    email: 'rohan@flipkart.com',
    phone: '+91 97777 66554',
    organization: 'Flipkart HR',
    audienceType: 'Corporate Offsite / Team',
    eventDate: '2026-09-12',
    status: 'New',
    createdAt: '2 days ago'
  }
];

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [bookings, setBookings] = useState<BookingLead[]>(MOCK_BOOKINGS);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === '1234' || passcode.toLowerCase() === 'admin' || passcode === '') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid Passcode! Try 1234 or click Demo Login.');
    }
  };

  const updateBookingStatus = (id: string, newStatus: 'New' | 'Contacted' | 'Confirmed') => {
    setBookings(prev =>
      prev.map(b => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  const filteredBookings = bookings.filter(b => {
    const matchesSearch =
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-12 bg-white rounded-3xl p-8 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#FDB913] border-2 border-black mx-auto flex items-center justify-center text-black font-black text-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <Lock className="w-8 h-8" />
        </div>

        <div>
          <span className="px-3 py-1 rounded-full bg-[#30B2E7] text-white font-black text-[10px] uppercase border border-black font-heading">
            Restricted Control Center
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-2 font-heading">QShala Admin Portal</h2>
          <p className="text-slate-600 text-xs font-semibold mt-1">Enter your admin passcode to access real-time leads, quiz questions, and store metrics.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-black uppercase text-slate-700 mb-1 font-heading">Admin Passcode</label>
            <input
              type="password"
              placeholder="Enter 1234 or leave blank"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border-2 border-black bg-[#FFFDF5] text-sm font-bold focus:outline-none"
            />
          </div>

          {loginError && (
            <p className="text-xs font-bold text-red-600 bg-red-50 p-2.5 rounded-xl border border-red-200">{loginError}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#FDB913] hover:bg-amber-400 text-black font-black text-sm border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-heading transition-all"
          >
            Access Dashboard →
          </button>
        </form>

        <div className="pt-2 border-t border-slate-100">
          <button
            onClick={() => setIsAuthenticated(true)}
            className="text-xs font-bold text-[#30B2E7] hover:underline"
          >
            ⚡ Quick Demo Access (Bypass Lock)
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Top Header Bar */}
      <div className="bg-white rounded-3xl p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FDB913] border-2 border-black flex items-center justify-center font-black text-black text-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-heading">
            Q
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900 font-heading">QShala Mission Control</h1>
            <p className="text-xs font-semibold text-slate-500">Managing quriosity leads, quiz questions, and school partners.</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#75B543]/20 border border-[#75B543] text-[#75B543] text-xs font-black">
            <span className="w-2 h-2 rounded-full bg-[#75B543] animate-ping" />
            System Live
          </span>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 border-2 border-black transition-all"
            title="Log Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Admin Navigation Tabs */}
      <div className="flex flex-wrap gap-3 border-b-2 border-black/10 pb-4">
        {[
          { id: 'overview', label: 'Overview', icon: TrendingUp },
          { id: 'bookings', label: 'Quiz Bookings', icon: Calendar, badge: bookings.filter(b => b.status === 'New').length },
          { id: 'quizzes', label: 'Quiz Bank', icon: HelpCircle },
          { id: 'store', label: 'Quriosity Store', icon: ShoppingBag },
          { id: 'blogs', label: 'Magazine & Content', icon: FileText }
        ].map((tab) => {
          const IconComp = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as AdminTab)}
              className={`px-5 py-2.5 rounded-full font-black text-xs flex items-center gap-2 border-2 border-black transition-all font-heading ${
                isActive
                  ? 'bg-[#30B2E7] text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5'
                  : 'bg-white text-slate-800 hover:bg-slate-50'
              }`}
            >
              <IconComp className="w-4 h-4" />
              {tab.label}
              {tab.badge !== undefined && tab.badge > 0 && (
                <span className="px-1.5 py-0.5 rounded-full bg-[#FDB913] text-black text-[10px] font-black border border-black">
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Key Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
              <div className="flex justify-between items-center text-slate-500">
                <span className="text-xs font-black uppercase font-heading">Total Bookings</span>
                <Calendar className="w-5 h-5 text-[#30B2E7]" />
              </div>
              <div className="text-4xl font-black font-heading text-slate-900">148</div>
              <p className="text-[11px] font-bold text-[#75B543]">+24% this month</p>
            </div>

            <div className="bg-white rounded-3xl p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
              <div className="flex justify-between items-center text-slate-500">
                <span className="text-xs font-black uppercase font-heading">Active Schools</span>
                <School className="w-5 h-5 text-[#75B543]" />
              </div>
              <div className="text-4xl font-black font-heading text-slate-900">254</div>
              <p className="text-[11px] font-bold text-slate-500">Across 18 cities</p>
            </div>

            <div className="bg-white rounded-3xl p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
              <div className="flex justify-between items-center text-slate-500">
                <span className="text-xs font-black uppercase font-heading">Corporate Clients</span>
                <Building2 className="w-5 h-5 text-[#FDB913]" />
              </div>
              <div className="text-4xl font-black font-heading text-slate-900">102</div>
              <p className="text-[11px] font-bold text-slate-500">Wipro, TCS, Flipkart &amp; more</p>
            </div>

            <div className="bg-white rounded-3xl p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
              <div className="flex justify-between items-center text-slate-500">
                <span className="text-xs font-black uppercase font-heading">Learners Reached</span>
                <Users className="w-5 h-5 text-purple-500" />
              </div>
              <div className="text-4xl font-black font-heading text-slate-900">400k+</div>
              <p className="text-[11px] font-bold text-purple-600">Students &amp; Professionals</p>
            </div>
          </div>

          {/* Quick Action Activity Banner */}
          <div className="bg-[#FFFDF5] rounded-3xl p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#75B543] text-white font-black text-xs uppercase border border-black font-heading">
                Action Required
              </span>
              <h3 className="text-2xl font-black text-slate-900 font-heading">You have {bookings.filter(b => b.status === 'New').length} new booking inquiries pending response</h3>
              <p className="text-slate-700 text-sm font-semibold">Review school and corporate event specifications to confirm quiz masters.</p>
            </div>

            <button
              onClick={() => setActiveTab('bookings')}
              className="px-6 py-3 rounded-full bg-[#FDB913] hover:bg-amber-400 text-black font-black text-xs border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-heading whitespace-nowrap"
            >
              Manage Bookings →
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: BOOKINGS MANAGEMENT TABLE */}
      {activeTab === 'bookings' && (
        <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-6">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search name, school, email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl border-2 border-black bg-[#FFFDF5] text-xs font-bold focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-black uppercase text-slate-700 font-heading">Filter:</span>
              {['All', 'New', 'Contacted', 'Confirmed'].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-full text-xs font-black border-2 border-black font-heading transition-all ${
                    statusFilter === st
                      ? 'bg-[#30B2E7] text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Bookings Table */}
          <div className="overflow-x-auto border-2 border-black rounded-2xl">
            <table className="w-full text-left text-xs font-semibold">
              <thead className="bg-[#FFFDF5] border-b-2 border-black font-black uppercase font-heading text-slate-900">
                <tr>
                  <th className="p-4">ID</th>
                  <th className="p-4">Contact Person</th>
                  <th className="p-4">Organization</th>
                  <th className="p-4">Audience</th>
                  <th className="p-4">Event Date</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y border-slate-200">
                {filteredBookings.map((b) => (
                  <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-black font-heading">{b.id}</td>
                    <td className="p-4">
                      <div className="font-black text-slate-900">{b.name}</div>
                      <div className="text-[10px] text-slate-500">{b.email}</div>
                    </td>
                    <td className="p-4 font-bold text-slate-800">{b.organization}</td>
                    <td className="p-4 text-slate-600">{b.audienceType}</td>
                    <td className="p-4 font-bold">{b.eventDate}</td>
                    <td className="p-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-black border border-black uppercase font-heading ${
                          b.status === 'New'
                            ? 'bg-[#FDB913] text-black'
                            : b.status === 'Contacted'
                            ? 'bg-[#30B2E7] text-white'
                            : 'bg-[#75B543] text-white'
                        }`}
                      >
                        {b.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-1.5">
                        <button
                          onClick={() => updateBookingStatus(b.id, 'Contacted')}
                          className="px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-black font-black text-[10px]"
                        >
                          Mark Contacted
                        </button>
                        <button
                          onClick={() => updateBookingStatus(b.id, 'Confirmed')}
                          className="px-2.5 py-1 rounded-xl bg-[#75B543] text-white border border-black font-black text-[10px]"
                        >
                          Confirm
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: QUIZ BANK */}
      {activeTab === 'quizzes' && (
        <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-black text-slate-900 font-heading">Quriosity Question Bank</h3>
              <p className="text-xs font-semibold text-slate-500">Manage daily featured quriosity questions for the homepage playground.</p>
            </div>
            <button className="px-4 py-2.5 rounded-full bg-[#75B543] text-white font-black text-xs border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 font-heading">
              <Plus className="w-4 h-4" /> Add New Question
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { q: 'Why do octopus hearts stop beating when they swim?', cat: 'Nature & Science', status: 'Active Homepage' },
              { q: 'Why do wet clothes look darker than dry clothes?', cat: 'Everyday Physics', status: 'Active Homepage' },
              { q: 'What is the "Rule of 72" used for in finance?', cat: 'Money & Life Skills', status: 'Active Homepage' },
              { q: 'Why does honey never spoil over thousands of years?', cat: 'Chemistry & Food', status: 'Draft Bank' }
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#FFFDF5] border-2 border-black space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase text-[#30B2E7]">{item.cat}</span>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-slate-900 text-white">{item.status}</span>
                </div>
                <h4 className="font-black text-slate-900 text-sm font-heading">{item.q}</h4>
                <div className="text-xs text-slate-500 font-bold pt-2 flex justify-between">
                  <span>Created by: QShala Editorial</span>
                  <button className="text-[#30B2E7] hover:underline">Edit Question →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: STORE */}
      {activeTab === 'store' && (
        <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-black text-slate-900 font-heading">Quriosity Store Inventory</h3>
              <p className="text-xs font-semibold text-slate-500">Manage physical products, flashcards, and books.</p>
            </div>
            <button className="px-4 py-2.5 rounded-full bg-[#FDB913] text-black font-black text-xs border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 font-heading">
              <Plus className="w-4 h-4" /> Add Product
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: 'The Quriosity Deck: 100 Mind-Benders', price: '₹499', stock: '142 units', status: 'Bestseller' },
              { name: 'QShala Quest Journal for Kids', price: '₹349', stock: '89 units', status: 'In Stock' },
              { name: 'Socratic Dinner Table Flash Cards', price: '₹299', stock: '210 units', status: 'In Stock' },
              { name: 'QT Mascot Plushie & Sticker Pack', price: '₹599', stock: '35 units', status: 'Low Stock' }
            ].map((p, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#FFFDF5] border-2 border-black flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase text-[#75B543]">{p.status}</span>
                  <h4 className="font-black text-slate-900 text-sm font-heading">{p.name}</h4>
                  <div className="text-xs text-slate-600 font-bold mt-1">{p.price} • Stock: {p.stock}</div>
                </div>
                <button className="px-3 py-1.5 rounded-xl bg-slate-900 text-white font-black text-xs border border-black font-heading">
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: BLOGS */}
      {activeTab === 'blogs' && (
        <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-black text-slate-900 font-heading">Magazine Content & Articles</h3>
              <p className="text-xs font-semibold text-slate-500">Manage published articles and SEO blog posts.</p>
            </div>
            <button className="px-4 py-2.5 rounded-full bg-[#30B2E7] text-white font-black text-xs border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 font-heading">
              <Plus className="w-4 h-4" /> New Article
            </button>
          </div>

          <div className="space-y-3">
            {[
              { title: 'Why Rote Learning Kills Quriosity (And How to Fix It)', cat: 'Pedagogy', date: 'Aug 1, 2026', views: '2.4k views' },
              { title: 'How to Build a "Curious Dinner Table" for Your Kids', cat: 'Parenting', date: 'July 28, 2026', views: '1.8k views' },
              { title: 'Gamification: The Secret Weapon of Modern Corporate L&D', cat: 'Workplace Culture', date: 'July 15, 2026', views: '3.1k views' }
            ].map((art, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#FFFDF5] border-2 border-black flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase text-[#30B2E7]">{art.cat} • {art.date}</span>
                  <h4 className="font-black text-slate-900 text-sm font-heading">{art.title}</h4>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-slate-500">{art.views}</span>
                  <button className="px-3 py-1.5 rounded-xl bg-slate-900 text-white font-black text-xs border border-black font-heading">
                    Edit Post
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
