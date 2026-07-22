import type { Metadata } from "next";
import { caustenRound, caustenRoundBlack, mikadoFont } from "@/lib/fonts";
import LoadingScreen from "@/components/common/LoadingScreen";
import "./globals.css";

export const metadata: Metadata = {
  title: "QShala | Questions • Quriosity • Quests",
  description: "QShala is India's curiosity learning platform that encourages creativity, curiosity, and compassion for school children, parents, and corporates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${caustenRound.variable} ${caustenRoundBlack.variable} ${mikadoFont.variable}`}
    >
      <body className="antialiased bg-[#FFFDF5] text-black font-causten-body">
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
