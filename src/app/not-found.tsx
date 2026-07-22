import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import QTMascot from "@/components/mascot/QTMascot";
import Link from "next/link";
import { Sparkles, Home } from "lucide-react";

export const metadata = {
  title: "404 - Curious Page Not Found | QShala",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFF]">
      <Navbar />

      <main className="flex-grow flex items-center justify-center pt-32 pb-24 px-6 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <QTMascot size="xl" badgeText="Lost Curiosity?" />

          <h1 className="text-6xl font-black text-slate-900 tracking-tight">404</h1>
          <h2 className="text-2xl font-bold text-slate-700">Oops! QT couldn&apos;t find this question.</h2>
          <p className="text-slate-500 text-sm">
            The page you are looking for might have moved, or QT hid it behind a brain teaser!
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#30B2E7] text-white font-extrabold text-sm shadow-lg hover:bg-[#1C8CBF] transition-all"
          >
            <Home className="w-4 h-4" /> Return to Home Page
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
