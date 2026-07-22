import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import QTMascot from "@/components/mascot/QTMascot";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us | QShala",
  description: "Get in touch with QShala quiz masters, schedule an inquiry, or visit our Bengaluru headquarters."
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFF]">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-[#30B2E7]/15 text-[#1C8CBF] font-black text-xs uppercase tracking-wider">
              📞 Get in Touch
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mt-3">
              We Love Curious Questions.
            </h1>
            <p className="text-slate-600 text-lg mt-4">
              Have a question about our school curriculum, corporate trivia offsites, or store orders? Drop us a line!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Form */}
            <div className="glass-panel rounded-3xl p-8 border-2 border-sky-100 shadow-playful space-y-6">
              <h2 className="text-2xl font-black text-slate-900">Send an Inquiry</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1">Your Name</label>
                  <input type="text" placeholder="e.g. Vikram Mehta" className="w-full p-3.5 rounded-2xl border border-slate-200 focus:border-[#30B2E7] focus:outline-none text-sm font-medium" />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1">Email Address</label>
                  <input type="email" placeholder="vikram@example.com" className="w-full p-3.5 rounded-2xl border border-slate-200 focus:border-[#30B2E7] focus:outline-none text-sm font-medium" />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1">Subject / Category</label>
                  <select className="w-full p-3.5 rounded-2xl border border-slate-200 focus:border-[#30B2E7] focus:outline-none text-sm font-medium text-slate-700">
                    <option>School Program Inquiry</option>
                    <option>Corporate Trivia / Offsite</option>
                    <option>Store / Merch Inquiry</option>
                    <option>General Question for QT</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1">Message</label>
                  <textarea rows={4} placeholder="Tell us how we can help..." className="w-full p-3.5 rounded-2xl border border-slate-200 focus:border-[#30B2E7] focus:outline-none text-sm font-medium" />
                </div>

                <button className="w-full py-4 rounded-full bg-[#30B2E7] hover:bg-[#1C8CBF] text-white font-extrabold text-lg shadow-lg flex items-center justify-center gap-2 transition-all">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Direct Info & QT Callout */}
            <div className="space-y-8">
              <div className="glass-panel-yellow rounded-3xl p-8 border border-amber-300 shadow-sm space-y-4">
                <h3 className="text-2xl font-black text-slate-900">Direct Contacts</h3>
                <div className="space-y-3 text-slate-700 font-bold text-sm">
                  <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-[#30B2E7]" /> Indiranagar, Bengaluru, Karnataka 560038</div>
                  <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#75B543]" /> +91 98765 43210</div>
                  <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-[#FDB913]" /> hello@qshala.com</div>
                </div>
              </div>

              <div className="glass-panel rounded-3xl p-8 border border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-black text-slate-900">Need Instant Help?</h4>
                  <p className="text-slate-500 text-xs mt-1">WhatsApp QT and our team directly.</p>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 px-5 py-2.5 rounded-full bg-[#75B543] text-white font-extrabold text-xs shadow hover:bg-emerald-600 transition-colors">
                    Chat on WhatsApp →
                  </a>
                </div>
                <QTMascot size="md" badgeText="Hi!" />
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
