import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import MultiStepBooking from "@/components/booking/MultiStepBooking";
import QTMascot from "@/components/mascot/QTMascot";
import { Sparkles, Calendar, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Book a Quiz Experience | QShala",
  description: "Book customized curiosity quizzes, workshops, and high-energy trivia events for schools, corporates, colleges, and communities."
};

export default function BookAQuizPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFF]">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-4 py-1.5 rounded-full bg-[#30B2E7] text-white font-black text-xs uppercase tracking-wider border border-black">
              Instant Booking Request
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mt-3">
              Book a World-Class <br />
              <span className="text-[#30B2E7]">Quiz Experience.</span>
            </h1>
            <p className="text-slate-600 text-lg mt-4">
              Select your institution or community category below to design a memorable curiosity event with QT and team QShala.
            </p>
          </div>

          {/* Booking Engine Container */}
          <MultiStepBooking />

        </div>
      </main>

      <Footer />
    </div>
  );
}
