import type { Metadata } from "next";
import { caustenRound, caustenRoundBlack, mikadoFont } from "@/lib/fonts";
import LoadingScreen from "@/components/common/LoadingScreen";
import DynamicTabTitle from "@/components/common/DynamicTabTitle";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
      className={cn(caustenRound.variable, caustenRoundBlack.variable, mikadoFont.variable, "font-sans", geist.variable)}
    >
      <body className="antialiased bg-[#FFFDF5] text-black font-causten-body">
        <DynamicTabTitle />
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
