import React, { useState } from 'react';

type BookingStep = 1 | 2 | 3 | 4;

export default function MultiStepBooking() {
  const [step, setStep] = useState<BookingStep>(1);
  const [formData, setFormData] = useState({
    audienceType: 'School & Students (K-12)',
    name: '',
    email: '',
    phone: '',
    organization: '',
    eventDate: '',
    expectedAudience: '50-100 Participants',
    preferredTopic: 'General Curiosity & Science',
    additionalNotes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep((prev) => (prev < 4 ? ((prev + 1) as BookingStep) : prev));
  const handlePrev = () => setStep((prev) => (prev > 1 ? ((prev - 1) as BookingStep) : prev));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
        <span className="px-4 py-1.5 rounded-full bg-[#75B543] text-white font-black text-xs uppercase border border-black">
          Request Received
        </span>
        <h2 className="text-3xl font-black mt-4 mb-2 font-heading">You&apos;re All Set for Curiosity!</h2>
        <p className="text-slate-700 text-sm font-semibold max-w-md mx-auto">
          Thank you <span className="font-bold">{formData.name}</span>! Our team at QShala will contact you at <span className="font-bold">{formData.email}</span> within 24 hours to finalize your quiz experience.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-black uppercase text-slate-500 mb-2">
          <span>Step {step} of 4</span>
          <span>{step === 1 ? 'Audience' : step === 2 ? 'Contact Details' : step === 3 ? 'Event Specifications' : 'Confirmed!'}</span>
        </div>
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-black">
          <div
            className="h-full bg-[#FDB913] transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-black text-slate-900 font-heading">Who is this quiz experience for?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['School & Students (K-12)', 'Corporate Offsite / Team', 'College Campus Fest', 'Neighborhood Community'].map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => updateField('audienceType', type)}
                  className={`p-4 rounded-2xl border-2 text-left font-bold text-sm transition-all ${
                    formData.audienceType === type
                      ? 'border-black bg-[#30B2E7] text-white shadow-md'
                      : 'border-black bg-[#FFFDF5] text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-xl font-black text-slate-900 font-heading">Your Contact Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black uppercase text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="Sunita Sharma"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-black bg-[#FFFDF5] text-sm font-semibold"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase text-slate-700 mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="sunita@dps.edu.in"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-black bg-[#FFFDF5] text-sm font-semibold"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase text-slate-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-black bg-[#FFFDF5] text-sm font-semibold"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase text-slate-700 mb-1">Organization / School</label>
                <input
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) => updateField('organization', e.target.value)}
                  placeholder="DPS Bangalore East"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-black bg-[#FFFDF5] text-sm font-semibold"
                />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-xl font-black text-slate-900 font-heading">Event Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black uppercase text-slate-700 mb-1">Preferred Date</label>
                <input
                  type="date"
                  required
                  value={formData.eventDate}
                  onChange={(e) => updateField('eventDate', e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-black bg-[#FFFDF5] text-sm font-semibold"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase text-slate-700 mb-1">Expected Audience Size</label>
                <select
                  value={formData.expectedAudience}
                  onChange={(e) => updateField('expectedAudience', e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-black bg-[#FFFDF5] text-sm font-semibold"
                >
                  <option>Under 50 Participants</option>
                  <option>50-100 Participants</option>
                  <option>100-500 Participants</option>
                  <option>500+ Participants</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h3 className="text-xl font-black text-slate-900 font-heading">Confirm Your Quiz Request</h3>
            <div className="p-4 rounded-2xl bg-[#FFFDF5] border-2 border-black text-sm space-y-2">
              <div><span className="font-black">Audience:</span> {formData.audienceType}</div>
              <div><span className="font-black">Name:</span> {formData.name} ({formData.email})</div>
              <div><span className="font-black">Organization:</span> {formData.organization}</div>
              <div><span className="font-black">Date:</span> {formData.eventDate}</div>
            </div>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-black/20 flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="px-6 py-2.5 rounded-full bg-slate-100 text-black font-black text-sm border-2 border-black"
            >
              Back
            </button>
          ) : <div />}

          {step < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2.5 rounded-full bg-[#FDB913] text-black font-black text-sm border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            >
              Next Step →
            </button>
          ) : (
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-[#75B543] text-white font-black text-sm border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            >
              Submit Quiz Booking Request
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
