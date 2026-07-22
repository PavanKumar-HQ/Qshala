'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { triggerConfetti } from '@/lib/utils';
import { CheckCircle2, Calendar, MapPin, Users, Building, Mail, Phone, User, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

type BookingStep = 1 | 2 | 3 | 4;

export default function MultiStepBooking() {
  const [step, setStep] = useState<BookingStep>(1);
  const [formData, setFormData] = useState({
    audienceType: 'School',
    name: '',
    email: '',
    phone: '',
    organization: '',
    location: 'Bengaluru',
    expectedParticipants: '50-100',
    budget: '₹25,000 - ₹50,000',
    preferredDate: '',
    goals: ''
  });

  const updateForm = (key: string, val: string) => {
    setFormData(prev => ({ ...prev, [key]: val }));
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep((step + 1) as BookingStep);
    } else if (step === 3) {
      setStep(4);
      triggerConfetti();
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep((step - 1) as BookingStep);
    }
  };

  return (
    <div className="max-w-3xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-sky-100 relative">
      
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-black uppercase text-slate-500 mb-2">
          <span>Step {step} of 4</span>
          <span>{step === 1 ? 'Audience' : step === 2 ? 'Contact Details' : step === 3 ? 'Event Specifications' : 'Confirmed!'}</span>
        </div>
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#30B2E7] via-[#FDB913] to-[#75B543] transition-all duration-500"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        
        {/* STEP 1: Audience Type */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Who is this Quiz Experience for?</h2>
              <p className="text-slate-500 text-sm mt-1">Select your primary institution or event category.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { type: 'School', desc: 'K-12 students, teachers & assemblies', color: 'border-sky-300 bg-sky-50/50' },
                { type: 'Corporate', desc: 'Employee engagement & offsites', color: 'border-amber-300 bg-amber-50/50' },
                { type: 'College', desc: 'Campus fests & student leagues', color: 'border-emerald-300 bg-emerald-50/50' },
                { type: 'Community', desc: 'Neighborhood, pub or family events', color: 'border-purple-300 bg-purple-50/50' }
              ].map(item => (
                <button
                  key={item.type}
                  type="button"
                  onClick={() => updateForm('audienceType', item.type)}
                  className={`p-5 rounded-2xl border-2 text-left transition-all ${
                    formData.audienceType === item.type
                      ? 'border-[#30B2E7] bg-white ring-4 ring-[#30B2E7]/20 shadow-md scale-102'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="font-extrabold text-slate-900 text-lg flex items-center justify-between">
                    {item.type}
                    {formData.audienceType === item.type && <CheckCircle2 className="w-5 h-5 text-[#30B2E7]" />}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                </button>
              ))}
            </div>

            <button
              onClick={handleNextStep}
              className="w-full py-4 rounded-full bg-[#30B2E7] hover:bg-[#1C8CBF] text-white font-extrabold text-lg shadow-lg flex items-center justify-center gap-2 mt-6 transition-all"
            >
              Continue to Details <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* STEP 2: Contact Info */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Your Contact Details</h2>
              <p className="text-slate-500 text-sm mt-1">So QT and the QShala team can reach out with custom proposals.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1">Your Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Ananya Sharma"
                  value={formData.name}
                  onChange={e => updateForm('name', e.target.value)}
                  className="w-full p-3.5 rounded-2xl border-2 border-slate-200 focus:border-[#30B2E7] focus:outline-none font-medium text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1">Organization / School</label>
                <input
                  type="text"
                  placeholder="e.g. DPS Bangalore / Flipkart"
                  value={formData.organization}
                  onChange={e => updateForm('organization', e.target.value)}
                  className="w-full p-3.5 rounded-2xl border-2 border-slate-200 focus:border-[#30B2E7] focus:outline-none font-medium text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="ananya@example.com"
                  value={formData.email}
                  onChange={e => updateForm('email', e.target.value)}
                  className="w-full p-3.5 rounded-2xl border-2 border-slate-200 focus:border-[#30B2E7] focus:outline-none font-medium text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1">Phone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={e => updateForm('phone', e.target.value)}
                  className="w-full p-3.5 rounded-2xl border-2 border-slate-200 focus:border-[#30B2E7] focus:outline-none font-medium text-slate-900 text-sm"
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                onClick={handlePrevStep}
                className="py-4 px-6 rounded-full border-2 border-slate-200 text-slate-700 font-extrabold text-sm hover:bg-slate-50 flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                onClick={handleNextStep}
                className="flex-1 py-4 rounded-full bg-[#30B2E7] hover:bg-[#1C8CBF] text-white font-extrabold text-lg shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                Next Step <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 3: Event Specs */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Event Details & Preferences</h2>
              <p className="text-slate-500 text-sm mt-1">Help us tailor the perfect quiz format and content.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1">Expected Participants</label>
                <select
                  value={formData.expectedParticipants}
                  onChange={e => updateForm('expectedParticipants', e.target.value)}
                  className="w-full p-3.5 rounded-2xl border-2 border-slate-200 focus:border-[#30B2E7] focus:outline-none font-medium text-slate-900 text-sm"
                >
                  <option value="20-50">20 - 50 Participants</option>
                  <option value="50-100">50 - 100 Participants</option>
                  <option value="100-300">100 - 300 Participants</option>
                  <option value="500+">500+ Mega Audience</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1">Preferred Date</label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={e => updateForm('preferredDate', e.target.value)}
                  className="w-full p-3.5 rounded-2xl border-2 border-slate-200 focus:border-[#30B2E7] focus:outline-none font-medium text-slate-900 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1">Special Themes or Goals (Optional)</label>
              <textarea
                rows={3}
                placeholder="e.g. Science Week special, Financial literacy theme, Anniversary quiz..."
                value={formData.goals}
                onChange={e => updateForm('goals', e.target.value)}
                className="w-full p-3.5 rounded-2xl border-2 border-slate-200 focus:border-[#30B2E7] focus:outline-none font-medium text-slate-900 text-sm"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                onClick={handlePrevStep}
                className="py-4 px-6 rounded-full border-2 border-slate-200 text-slate-700 font-extrabold text-sm hover:bg-slate-50 flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                onClick={handleNextStep}
                className="flex-1 py-4 rounded-full bg-[#75B543] hover:bg-emerald-600 text-white font-extrabold text-lg shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                Submit Quiz Request
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 4: Success Confetti State */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8 space-y-6"
          >
            <div className="w-20 h-20 rounded-full bg-[#75B543] text-white flex items-center justify-center mx-auto shadow-xl border-2 border-black">
              ✓
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Quiz Request Received!</h2>
              <p className="text-slate-600 text-base max-w-md mx-auto mt-2 leading-relaxed">
                Thank you <span className="font-extrabold text-[#30B2E7]">{formData.name || 'Curious Friend'}</span>! QT and our quiz masters will connect with you within 24 hours to finalize your customized experience.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 text-left max-w-md mx-auto text-xs space-y-1 font-medium text-slate-600 border border-slate-200">
              <p><span className="font-bold text-slate-800">Category:</span> {formData.audienceType}</p>
              <p><span className="font-bold text-slate-800">Organization:</span> {formData.organization || 'N/A'}</p>
              <p><span className="font-bold text-slate-800">Expected Participants:</span> {formData.expectedParticipants}</p>
            </div>

            <button
              onClick={() => setStep(1)}
              className="px-8 py-3 rounded-full bg-slate-900 text-white font-extrabold text-sm hover:bg-slate-800 transition-colors"
            >
              Book Another Experience
            </button>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
