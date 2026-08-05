# QShala — India's Curiosity Company Web Platform

> **Mission**: Replacing Rote Learning with Curiosity, Questions, Discovery, and Wonder.

A production-ready, highly interactive web platform built for **QShala** (Curiosita Educational Services / Walnuts). Built using **Astro v5**, **React 19**, **TypeScript**, **TailwindCSS v4**, **Framer Motion**, and **Canvas Confetti**, adhering strictly to QShala's official brand guidelines.

---

## 🌟 Key Features & Highlights

- **Dynamic Typewriter Hero Section**: Seamlessly cycles through brand queries (*"make learning fun for students?"*, *"build team spirit at your place of work?"*, *"develop problem solving skills in your child?"*) with a blinking cursor and bold brand typography.
- **QT Mascot Component (`QTMascot.tsx`)**:
  - Vector SVG mascot with multiple role variants (`normal`, `curious`, `idea`, `quizzing`, `reading`, `sherlock`, `sleeping`, `happy`, `trophy`, `jumping`, `holding_money`, `professional`).
  - Styled with badge callouts and embedded across cards and sections.
- **5-Stage Curiosity Loading Screen (`LoadingScreen.tsx`)**:
  - Sequential animated loader featuring popping dots, SVG question mark strokes, waking QT mascot, and orbiting Lucide vector icons.
- **12 Verified Corporate & Institutional Partner Marquee (`ClientMarquee.astro`)**:
  - Dual-row smooth infinite marquee with locally hosted SVG logos for Google, HDFC Bank, Wipro, Microsoft, Tata Group, Amazon, Infosys, Netflix, Apple, BYJU'S, Facebook, and Intel.
- **Interactive Daily Quiz Playground**:
  - Neobrutalist quiz cards (`InteractiveQuizCard.tsx`) with instant feedback, explanations, and confetti celebrations (`canvas-confetti`).
- **Dynamic Tab Title Switcher**:
  - When users switch tabs, the browser title changes dynamically to funny prompt messages (*"QT misses you! Come back!"*, *"Still curious? Click back!"*).
- **Interactive 4-Step Booking Wizard (`MultiStepBooking.tsx`)**:
  - Multi-step booking form for scheduling quiz experiences for Schools, Corporates, Colleges, and Communities.
- **SEO Blog Engine (`/blog/[slug]`)**:
  - Dynamic file-based blog routing with full-length articles on socratic pedagogy, parenting, and workplace gamification.

---

## 🎨 QShala Brand Identity & Guidelines

- **Primary Brand Colors**:
  - Qurious Sky (`#30B2E7`)
  - Joy of Quest (`#FDB913`)
  - Always Questioning (`#75B543`)
  - Warm Off-White Canvas (`#FFFDF5`)
- **Typography**:
  - `Mikado` (`--font-mikado` for Schools & playful headlines)
  - `Causten Round Black` (`--font-causten-black` for headers)
  - `Causten Round` (`--font-causten-round` for body copy)
- **Mascot**: QT the Black Cat with a round body, Q-curved tail, curious eyes, white nose/whiskers, and yellow tie accent.

---

## 🗺️ Page Structure & Routes

1. `/` — Home (Hero with Typewriter, Bento Grid, Quiz Cards, Client Marquee, Impact Stats)
2. `/about` — Our Story, Philosophy & QT Mascot Spotlight
3. `/services` — Program Formats for Schools, Corporates, Colleges & Communities
4. `/schools` — QShala K-12 Curiosity Curriculum & Clubs
5. `/companies` — Corporate Offsites, Trivia Nights & Workplace Culture
6. `/book-a-quiz` — 4-Step Interactive Quiz Booking Wizard
7. `/learn` — Kids Corner & Daily Trivia
8. `/case-studies` — Real Impact Stories (DPS Bangalore, Wipro, Flipkart)
9. `/shop` — Curiosity Store (Games & Learning Kits)
10. `/blog` — QShala Magazine Index & Dynamic Article Views (`/blog/[slug]`)
11. `/team` — Meet the Founders & QT Curiosity Crew
12. `/contact` — Contact Form & Real Campus Address Details

---

## 🛠️ Technology Stack

- **Framework**: Astro 5 (Static Site Architecture & Islands with React)
- **UI Components**: React 19
- **Language**: TypeScript
- **Styling**: TailwindCSS v4 & Custom Brand Tokens
- **Animations**: Framer Motion
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
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 4. Build for production
```bash
npm run build
```

---

## 📄 Contact & Location

- **Phone**: +91 89716 76100
- **Email**: qshala@walnuts.co.in
- **Address**: 1st Floor, Fortuna 1, 8th Main Road, 14th Cross Road, JP Nagar 3rd Phase, Bengaluru, Karnataka - 560078

Designed & Developed for **QShala (Curiosita Educational Services / Walnuts)**. All rights reserved.
