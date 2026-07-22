import { Outfit, Fredoka, Quicksand } from 'next/font/google';

// Font 1: Causten Round (Body copy & general text - PDF Page 20)
export const caustenRound = Quicksand({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-causten-round',
  display: 'swap',
});

// Font 2: Causten Round Black (Headings & Titles - PDF Page 19)
export const caustenRoundBlack = Outfit({
  subsets: ['latin'],
  weight: ['800', '900'],
  variable: '--font-causten-black',
  display: 'swap',
});

// Font 3: Mikado (Primary font for Schools section - PDF Page 18)
export const mikadoFont = Fredoka({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-mikado',
  display: 'swap',
});
