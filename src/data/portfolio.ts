import {
  Brain,
  Code,
  Cpu,
  Puzzle,
  Rocket,
  Server,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import {
  ChessIcon,
  CalculatorIcon,
  FlappyIcon,
} from "@/components/portfolio/icons/ProjectIcons";

/* ------------------------------------------------------------------ */
/*  PERSONAL PROFILE — edit everything here                            */
/* ------------------------------------------------------------------ */
export const profile = {
  name: "Satwik Biswal",
  firstName: "Satwik",
  lastName: "Biswal",
  // Animated typing roles (hero)
  roles: [
    "AI Developer",
    "ML Enthusiast",
    "Full Stack Developer",
    "Problem Solver",
  ],
  tagline:
    "Engineering intelligent systems and immersive experiences where machine learning meets the cosmos of the web.",
  intro:
    "I'm a Computer Science undergrad specialized in Artificial Intelligence & Machine Learning, building products that feel as good as they work — from neural networks to glassy, animated interfaces.",
  // Placeholder photo — replace /public/avatar-placeholder.svg with your photo
  avatar: "/avatar-placeholder.svg",
  location: "Shirpur, Maharashtra, India",
  email: "hello@satwikbiswal.dev",
  resumeUrl: "/resume.pdf",
  github: "https://github.com/satwikbiswal",
  linkedin: "https://www.linkedin.com/in/satwikbiswal",
  twitter: "https://x.com/satwikbiswal",
  instagram: "https://www.instagram.com/satwikbiswal",
  availability: "Open to internships & collaborations",
};

export const degree = {
  title: "Bachelor of Technology (B.Tech)",
  branch: "Computer Science Engineering",
  specialization: "Artificial Intelligence & Machine Learning",
  college: "SVKM's NMIMS, Shirpur Campus",
  years: "2023 — 2027",
  status: "Pursuing",
};

/* ------------------------------------------------------------------ */
/*  ABOUT                                                              */
/* ------------------------------------------------------------------ */
export const aboutParagraphs = [
  "I'm Satwik — a developer obsessed with the intersection of artificial intelligence and the web. My journey started with curiosity about how machines learn, and it grew into a passion for building intelligent, beautiful products end to end.",
  "From training models that understand text and images to crafting immersive interfaces with React, Three.js and GSAP, I love turning complex problems into elegant, delightful experiences.",
];

export const aboutHighlights: {
  icon: LucideIcon;
  title: string;
  text: string;
}[] = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    text: "Training models for NLP, vision and prediction with Python, TensorFlow & PyTorch.",
  },
  {
    icon: Code,
    title: "Full Stack Development",
    text: "Shipping complete products — React frontends, Node.js APIs and databases.",
  },
  {
    icon: Sparkles,
    title: "Immersive UI Engineering",
    text: "Cinematic interfaces with Framer Motion, GSAP and WebGL.",
  },
  {
    icon: Puzzle,
    title: "Problem Solving",
    text: "Sharp algorithmic thinking, DSA practice and clean system design.",
  },
];

export const stats = [
  { label: "Featured Projects", value: 3, suffix: "" },
  { label: "Technologies", value: 16, suffix: "+" },
  { label: "DSA Problems Solved", value: 400, suffix: "+" },
];

/* ------------------------------------------------------------------ */
/*  SKILLS                                                             */
/* ------------------------------------------------------------------ */
export const skillGroups: {
  icon: LucideIcon;
  title: string;
  accent: string;
  skills: { name: string; level: number }[];
}[] = [
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    accent: "from-indigo-500 to-violet-500",
    skills: [
      { name: "Python", level: 92 },
      { name: "TensorFlow / Keras", level: 84 },
      { name: "PyTorch", level: 78 },
      { name: "NLP & LLMs", level: 80 },
      { name: "Computer Vision", level: 74 },
    ],
  },
  {
    icon: Code,
    title: "Frontend Development",
    accent: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React / TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion / GSAP", level: 86 },
      { name: "Three.js / WebGL", level: 76 },
      { name: "Next.js", level: 72 },
    ],
  },
  {
    icon: Server,
    title: "Backend & Databases",
    accent: "from-violet-500 to-fuchsia-500",
    skills: [
      { name: "Node.js / Express", level: 82 },
      { name: "FastAPI / Flask", level: 78 },
      { name: "REST APIs", level: 85 },
      { name: "SQL / NoSQL", level: 76 },
      { name: "MongoDB / PostgreSQL", level: 72 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Practices",
    accent: "from-sky-500 to-indigo-500",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "Docker", level: 68 },
      { name: "Linux", level: 72 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
    ],
  },
];

export const techMarquee = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Three.js",
  "OpenCV",
  "NLP",
  "FastAPI",
  "Docker",
  "Git",
  "PostgreSQL",
];

/* ------------------------------------------------------------------ */
/*  EDUCATION                                                          */
/* ------------------------------------------------------------------ */
export const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "DBMS",
  "Machine Learning",
  "Deep Learning",
  "Computer Networks",
];

export const focusAreas = [
  "Building and fine-tuning ML models for real-world use cases",
  "Engineering performant, animated interfaces with React & WebGL",
  "Competitive programming and algorithmic problem solving",
  "Contributing to open-source and learning in public",
];

/* ------------------------------------------------------------------ */
/*  PROJECTS — custom original SVG icons, edit links here              */
/* ------------------------------------------------------------------ */
export const projects = [
  {
    id: "chess",
    name: "Chess Game",
    icon: ChessIcon,
    accent: "from-indigo-500 to-violet-500",
    description:
      "A full-featured chess experience with legal move highlighting, drag-and-drop pieces, an AI opponent powered by minimax with alpha-beta pruning, and rich sound cues.",
    tags: ["React", "TypeScript", "Minimax AI"],
    github: "https://github.com/satwikbiswal",
    demo: "#",
  },
  {
    id: "calculator",
    name: "Calculator",
    icon: CalculatorIcon,
    accent: "from-cyan-500 to-blue-500",
    description:
      "A sleek glassmorphic calculator with a proper expression parser, keyboard support, percentage & memory functions, and live result preview.",
    tags: ["React", "JavaScript", "Expression Parsing"],
    github: "https://github.com/satwikbiswal",
    demo: "#",
  },
  {
    id: "flappy",
    name: "Flappy Bird Clone",
    icon: FlappyIcon,
    accent: "from-violet-500 to-fuchsia-500",
    description:
      "A physics-based flappy bird clone with procedural pipes, score persistence, particle effects on collision, and buttery 60fps canvas rendering.",
    tags: ["HTML5 Canvas", "JavaScript", "Game Loop"],
    github: "https://github.com/satwikbiswal",
    demo: "#",
  },
];
