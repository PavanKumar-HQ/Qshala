import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import QTMascot from "@/components/mascot/QTMascot";

export const metadata = {
  title: "Meet the Team | QShala",
  description: "Meet the founders, educators, quiz masters, and QT the curious cat who make QShala special."
};

const TEAM_MEMBERS = [
  { name: "Raghavan A.", role: "Co-Founder & Chief Curious Officer", bio: "10+ years designing curiosity experiences and quizzing for 400,000+ kids.", variant: "sherlock" as const, color: "border-black bg-white" },
  { name: "Sachin Ravi", role: "Co-Founder & Master Storyteller", bio: "Passionate about turning complex global affairs into engaging stories for young minds.", variant: "quizzing" as const, color: "border-black bg-[#FDB913]" },
  { name: "Priya Sundaram", role: "Head of Content & Pedagogy", bio: "Curates 365 daily questions that challenge children to ask 'Why?'.", variant: "reading" as const, color: "border-black bg-white" },
  { name: "QT The Cat", role: "Chief Mascot & Curiosity Captain", bio: "Always curious, loves fish snacks, and hides surprise question marks across the website!", variant: "idea" as const, color: "border-black bg-[#30B2E7]" },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF5]">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-[#30B2E7] text-white font-black text-xs uppercase tracking-wider border border-black font-causten-black">
              👥 The Minds Behind QShala
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mt-3 font-causten-black">
              Meet the <span className="text-[#30B2E7]">Curiosity Crew.</span>
            </h1>
            <p className="text-slate-700 text-lg mt-4 font-causten-body font-semibold">
              We are a team of quiz masters, educators, writers, and designers united by a love for wonder.
            </p>
          </div>

          {/* Team Grid with Official QT SVG Variants */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className={`rounded-3xl p-6 border-2 ${member.color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all flex flex-col justify-between text-center group`}>
                <div>
                  <div className="w-28 h-28 rounded-full bg-white border-2 border-black shadow-sm mx-auto mb-4 flex items-center justify-center p-2 group-hover:scale-110 transition-transform overflow-hidden">
                    <QTMascot variant={member.variant} size="lg" />
                  </div>

                  <h2 className="text-xl font-black text-slate-900 mb-1 font-causten-black">{member.name}</h2>
                  <div className="text-xs font-black text-slate-800 uppercase mb-3 font-causten-black">{member.role}</div>
                  <p className="text-slate-700 text-xs leading-relaxed font-causten-body font-semibold">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
