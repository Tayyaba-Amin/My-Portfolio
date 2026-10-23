
/*
 * siteData.js — Centralized portfolio content for Tayyaba Amin.
 */

export const personal = {
  name: "Tayyaba Amin",
  headline: "Software Engineering Student & Full-Stack Developer",
  location: "Gujrat District, Punjab, Pakistan",
  bio: [
    "My journey in software development is driven by curiosity and hands-on learning. Through personal projects and hackathons, I've explored different technologies, collaborated with others, and worked on solutions to practical problems. I enjoy experimenting with new ideas and continuously improving how I design and build applications.",
  ],
  /* Cutout derived from the original photograph; the studio wall was removed. */
  portraitCutout: "/images/profile/profile-cutout.png",
};

export const hero = {
  greeting: "Hi, I'm",
  tagline:
    "Software Engineering Student | Full-Stack Developer & AI Enthusiast",
  intro:
    "I enjoy turning ideas into useful, thoughtfully built digital experiences.",
  info: [
    { label: "Focus", value: "Full-Stack Development" },
    { label: "Learning", value: "Machine Learning" },
  ],
};

export const about = {
  headline: "Curious by nature. Learning by building.",
  focusAreas: [
    "MERN Stack Development",
    "React, JavaScript & TypeScript",
    "Node.js, Express.js & REST APIs",
    "AI Exploration & Machine Learning Interests",
    "Personal Projects & Hackathons",
  ],
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    id: "study-companion",
    title: "Study Companion",
    description:
      "An AI-powered learning platform built for AI Factory Hackathon 2026. It transforms uploaded PDF study materials into interactive learning resources, including AI-generated summaries, quizzes, flashcards, and chat with uploaded documents. It also includes authentication and learning progress tracking.",
    summary:
      "An AI learning platform that turns uploaded study PDFs into summaries, quizzes, flashcards, and document chat.",
    imagePath: "/images/projects/study-companion.png",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Natively AI",
    ],
    category: "AI / EdTech",
    builtFor: "AI Factory Hackathon 2026",
    repoUrl: "https://github.com/Tayyaba-Amin/study-companion",
    demoUrl: "https://1she9e228l1sm80nbubgkk670.nativelyai.app/",
    demoVideoUrl: "https://drive.google.com/file/d/1nQmsD7ZiHvWfnlpbCnFE4uLyzOInUX01/view?usp=sharing",
    note: "Some AI features may be limited because the project used time-limited AI API credits.",
  },

  {
    id: "safepay-ai",
    title: "SafePay AI",
    description:
      "An AI-powered fraud-awareness platform focused on Pakistan's digital payments. It analyzes suspicious payment receipt screenshots, scam messages, and voice recordings to identify potential fraud indicators, assess risk, and provide safety recommendations in English and Urdu.",
    summary:
      "A fraud-awareness platform that analyzes receipts, scam messages, and voice recordings, with safety guidance in English and Urdu.",
    imagePath: "/images/projects/safepay-ai.png",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "Alibaba Cloud Qwen",
      "Qoder",
    ],
    category: "AI / FinTech",
    builtFor:
      "AI Hackathon by Bano Qabil, Alkhidmat Foundation & Alibaba Cloud",
    repoUrl: "https://github.com/Tayyaba-Amin/SafePay-AI",
    demoUrl: "https://safe-pay-ai-rho.vercel.app/",
    demoVideoUrl: "https://drive.google.com/file/d/1q9UvCYCHgRfXHLKzWTU45bqHHoxCjpRf/view?usp=sharing",
    note:
      "AI analysis may be limited because the project used time-limited AI API credits. Results are for fraud awareness, not official transaction verification.",
  },
  {
    id: "privacyguard",
    title: "PrivacyGuard",
    description:
      "A privacy-focused application that scans text and images for sensitive information, highlights potential sharing risks, and helps users protect confidential data. Features include risk scoring, image text extraction using OCR, and rescanning of protected content.",
    summary:
      "A privacy tool that scans text and images for sensitive information, flags sharing risks, and helps protect confidential data.",
    imagePath: "/images/projects/privacyguard.png",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Express.js",
      "Node.js",
      "Tesseract.js",
      "Kilo",
    ],
    category: "Privacy / Security",
    builtFor: "ForgeHacks Online 2026",
    repoUrl: "https://github.com/Tayyaba-Amin/PrivacyGuard",
    demoUrl: "https://privacy-guard-phi.vercel.app/",
    demoVideoUrl: "https://youtu.be/tzYdVVIxBRQ",
    note:
      "Optional AI explanations may be unavailable, but core detection features are designed to work without an AI API key.",
  },
  {
    id: "real-estate-marketplace",
    title: "PropertyHub",
    description:
      "An independently developed full-stack real estate marketplace built to apply my MERN Stack skills. The application supports property browsing, filtering, listing management, and profile management, with JWT-based authentication, Redux state management, and Firebase integration.",
    summary:
      "A full-stack real estate marketplace with property browsing, filtering, listing management, JWT authentication, and Firebase.",
    imagePath: "/images/projects/real-estate-marketplace.png",
    tech: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Firebase",
      "JWT",
    ],
    category: "Full-Stack Development",
    builtFor: "Independent Project",
    repoUrl:
      "https://github.com/Tayyaba-Amin/Real-Estate-Marketplace-Full-Stack-Project",
    demoUrl: "https://real-estate-marketplace-full-stack.onrender.com/",
    demoVideoUrl:
      "",
  },
  {
    id: "quickshow",
    title: "QuickShow",
    description:
      "A full-stack movie ticket booking application with movie browsing, showtime and seat selection, ticket bookings, payment integration, user authentication, booking history, and an admin dashboard. It also supports automated seat release for unpaid bookings and email notifications.",
    summary:
      "A full-stack movie ticket booking app with showtimes, seat selection, payments, booking history, and an admin dashboard.",
    imagePath: "/images/projects/quickshow.png",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Clerk",
      "Inngest",
    ],
    category: "Full-Stack Development",
    builtFor: "Full-Stack Project",
    repoUrl: "https://github.com/Tayyaba-Amin/QuickShow",
    demoUrl: "https://quickshow-fawn-three.vercel.app/",
    demoVideoUrl: "",
  },
  {
    id: "dastarkhwan",
    title: "Dastarkhwan",
    description:
      "A frontend experience celebrating the emotions, memories, and sense of belonging associated with Pakistani comfort food. Created for the DEV Community Frontend Challenge: Comfort Food Edition, the project focuses on storytelling, visual design, and an interactive comfort-food experience.",
    summary:
      "A frontend experience celebrating Pakistani comfort food through storytelling, visual design, and interactive exploration.",
    imagePath: "/images/projects/dastarkhwan.png",
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "Frontend Development",
    builtFor: "DEV Community Frontend Challenge: Comfort Food Edition",
    repoUrl: "https://github.com/Tayyaba-Amin/dastarkhwan",
    demoUrl: "https://dastarkhwan-azure.vercel.app/",
    demoVideoUrl: "",
  },
];

export const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind CSS",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
  ],
  database: [
    "MongoDB",
    "Supabase",
  ],
  tools: [
    "Git",
    "GitHub",
    "Vite",
    "Firebase",
  ],
  ai: [
    "AI Integration",
    "LLM APIs",
    "Alibaba Cloud Qwen",
  ],
  foundations: [
    "Data Structures and Algorithms",
    "Problem-Solving",
    "Full-Stack Development",
  ],
  learned: [
    "JWT Authentication",
    "Redux Toolkit",
    "Firebase Integration",
    "Working with LLM APIs",
  ],
  learning: [
    "Machine Learning",
    "Advanced AI Application Development",
  ],
  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Hackathons",
    "Coding Competitions",
    "Problem-Solving",
  ],
};

export const interests = [
  {
    title: "Full-Stack Development",
    description:
      "Building complete web applications by connecting responsive interfaces, backend services, databases, and authentication.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Exploring practical applications of AI through projects focused on learning, digital safety, and useful everyday tools.",
  },
  {
    title: "Hackathons & Coding Competitions",
    description:
      "Taking on challenges, experimenting with unfamiliar technologies, and turning ideas into working applications, independently and with teams.",
  },
  {
    title: "Practical Problem-Solving",
    description:
      "Finding thoughtful ways to address real needs and make digital experiences more useful, accessible, and reliable.",
  },
];

export const contact = {
  email: "tayyabaamin780@gmail.com",
  github: "https://github.com/Tayyaba-Amin",
  linkedin: "https://www.linkedin.com/in/tayyaba-amin-716537350/",
  invitation:
    "Have a project idea or an opportunity to collaborate? Feel free to reach out. I'd love to connect and explore what we can build together.",
};

export const siteMeta = {
  title: "Tayyaba Amin — Full-Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Tayyaba Amin, a Software Engineering student and full-stack developer creating practical web applications and exploring AI-powered solutions.",
};

