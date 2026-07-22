import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import WorldMapArchive from "@/components/archive/WorldMapArchive";
import ScrollProgressBar from "@/components/common/ScrollProgressBar";
import CursorFollower from "@/components/common/CursorFollower";

export const metadata = {
  title: "Past Events & Archive | QShala Around the World",
  description: "Explore QShala's 10+ year archive of past quizzes, corporate trivia leagues, and international curiosity festivals on an interactive map."
};

export default function ArchivePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF5]">
      <ScrollProgressBar />
      <CursorFollower />
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* World Map Section */}
        <WorldMapArchive />
      </main>

      <Footer />
    </div>
  );
}
