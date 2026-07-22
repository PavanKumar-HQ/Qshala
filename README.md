# QShala — India's Curiosity Company Web Platform

> **Mission**: Replacing Rote Learning with Curiosity, Questions, Discovery, and Wonder.

A production-ready, highly interactive web platform built for **QShala** (Curiosita Educational Services). Built using **Next.js 16 (App Router)**, **TypeScript**, **TailwindCSS**, **Framer Motion**, and **Canvas Confetti**, adhering strictly to QShala's official brand guidelines.

---

## 🌟 Key Features & Highlights

- **Dynamic Typewriter Hero Section**: Seamlessly cycles through brand keywords (`Curiosity.`, `Questions.`, `Discovery.`, `Wonder.`) with a blinking cursor and bold brand typography.
- **Interactive Mouse-Tracking Mascot (`QT`)**:
  - Vector SVG mascot (`QTMascot.tsx`) with 12 distinct role variants (`normal`, `curious`, `idea`, `quizzing`, `reading`, `sherlock`, `sleeping`, `happy`, `trophy`, `jumping`, `holding_money`, `professional`).
  - Real-time mouse eye-tracking angle math following the cursor.
  - Interactive click bounce & floating `?` question mark animations.
  - Embedded inside cards across the platform without adding empty whitespace.
- **Interactive Daily Quiz Playground**:
  - Equalized 3D styled quiz cards (`InteractiveQuizCard.tsx`) with confetti celebrations on correct answers (`canvas-confetti`).
  - Lower-right corner mascot placement with category-specific QT variants.
- **Dynamic Tab Title Prompt**:
  - When users switch tabs or minimize the browser, the page title changes dynamically to funny prompt messages (*"QT misses you! Come back!"*, *"Still curious? Click back!"*).
- **Favicon Integration**: Official 64px QT mascot icon set as the site favicon.
- **4-Step Booking Wizard**: Interactive multi-step form (`MultiStepBooking.tsx`) for booking quizzes for Schools, Corporates, Colleges, and Communities.
- **Full Responsive Design & Modern UI**: Built with micro-animations, glassmorphism, high contrast `border-2 border-black` / `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]` neobrutalist cards, and custom fonts.

---

## 🎨 QShala Brand Identity & Guidelines

- **Primary Colors**:
  - Qurious Sky (`#30B2E7`)
  - Joy of Quest (`#FDB913`)
  - Always Questioning (`#75B543`)
  - Warm Off-White Canvas (`#FFFDF5`)
- **Typography**:
  - `Mikado` (`--font-mikado` for Schools & playful headlines)
  - `Causten Round Black` (`--font-causten-black` for headers)
  - `Causten Round` (`--font-causten-round` for body copy)
- **Mascot**: QT the Black Cat with round body, Q-curved tail, curious eyes, white nose/whiskers, and yellow tie accent.

---

## 🗺️ Page Structure & Routes

1. `/` — Home (Hero with Typewriter, Bento Grid, Quiz Cards, Stats Counter, Case Studies, Store)
2. `/about` — Our Story, Philosophy & QT Mascot Spotlight
3. `/services` — Program Formats for Schools, Corporates, Colleges & Communities
4. `/schools` — QShala K-12 Curiosity Curriculum & Clubs
5. `/companies` — Corporate Offsites, Trivia Nights & L&D
6. `/colleges` — Campus Fest Quizzes & Career Aptitude
7. `/communities` — Family Game Nights & Neighborhood Pub Quizzes
8. `/book-a-quiz` — 4-Step Interactive Quiz Booking Wizard
9. `/learn` — Kids Corner & Daily Trivia
10. `/case-studies` — Apple-Style Impact Stories (DPS Bangalore, Flipkart, etc.)
11. `/shop` — Curiosity Store (Games, Flash Decks & Plushies)
12. `/blog` — Magazine Articles & Curiosity Insights
13. `/team` — Meet the Founders & QT Curiosity Crew
14. `/contact` — Contact Form & FAQs
15. `/archive` — Historical Quiz Events Archive

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16.2 (App Router & Turbopack)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4 & Vanilla CSS
- **Animations**: Framer Motion & Lenis Smooth Scroll
- **Interactive FX**: Canvas Confetti
- **Icons**: Lucide React & Official QShala Brand SVGs

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/PavanKumar-HQ/Qshala.git
cd Qshala
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
```

---

## 📄 License & Credits

Designed & Developed for **QShala (Curiosita Educational Services)**. All rights reserved.
