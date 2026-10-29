// All content shown on the page. Edit this file to update the portfolio.
import { Code2, Brain, Database, Eye, Cpu, Layers, Server, GraduationCap, Sparkles } from "lucide-react";
import { VscVscode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa6";
import {
  SiPython,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiJupyter,
  SiHuggingface,
  SiGooglegemini,
  SiStreamlit,
  SiFastapi,
  SiRedis,
  SiDocker,
  SiRender,
  SiNginx,
  SiCloudflare,
  SiGit,
  SiGithub,
  SiGooglecloud,
} from "react-icons/si";
export const CV_URL = `${import.meta.env.BASE_URL}CV_HOANGVANANH.pdf`;


export const EMAIL = "hoangvananhgithub@gmail.com";
export const PHONE = "0375956650";

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "activities", label: "Experience" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Snake RL: Zero-Shot Transfer with Dueling Double DQN",
    description:
      "Trained a Dueling Double DQN agent in PyTorch on a single 30×30 Snake level, then tested the frozen policy on five unseen levels with different board sizes and obstacles. A 27-feature state that does not depend on board size lets one network play every level without retraining.",
    metrics: [
      { value: "14.3M", label: "training steps" },
      { value: "93–100%", label: "target reached, 3 smaller boards" },
      { value: "74% / 54%", label: "target reached, 2 larger boards" },
    ],
    note: "100 greedy episodes per level. A random policy never reached the target.",
    tags: ["Python", "PyTorch", "Dueling DQN", "Double DQN", "Zero-shot transfer"],
    type: "Reinforcement Learning",
    team: "Team of 2",
    status: "Completed",
    gradient: "from-blue-600/20 to-cyan-500/10",
    borderColor: "border-blue-500/30",
    accentColor: "#285fba",
    repoUrl: "https://github.com/hoanganh-repogit/REL301c-Group3",
    liveUrl: "",
  },
  {
    id: 2,
    title: "Coin Counting with Classical Image Processing",
    description:
      "A training-free pipeline that counts and sizes coins. Otsu thresholding, morphology and connected-component labeling are written from scratch in NumPy and checked against OpenCV. The final pipeline swaps Otsu for Lab background subtraction, Triangle thresholding and watershed splitting.",
    metrics: [
      { value: "0.45 → 0.94", label: "F1 vs. Otsu baseline" },
      { value: "12.9 → 65.4%", label: "exact-count accuracy" },
      { value: "~65 ms", label: "per image" },
    ],
    note: "Held-out test set of 480 real images with 3,386 coins.",
    tags: ["Python", "NumPy", "OpenCV", "Morphology", "Watershed"],
    type: "Computer Vision",
    team: "Team of 3",
    status: "Completed",
    gradient: "from-cyan-600/20 to-blue-500/10",
    borderColor: "border-cyan-500/30",
    accentColor: "#087d91",
    repoUrl: "https://github.com/hoanganh-repogit/IMP302",
    liveUrl: "",
  },
  {
    id: 3,
    title: "Automated Meeting Summarizer",
    description:
      "A Streamlit app that turns a meeting recording of any length into a speaker-labeled transcript and a structured summary. Whisper transcribes overlapping windows and drops repeated words at the seams, pyannote labels who is speaking, and Gemini writes topics, decisions and action items, with a rule-based fallback.",
    metrics: [
      { value: "Whisper-small", label: "30 s windows, 5 s overlap" },
      { value: "pyannote 3.1", label: "speaker diarization" },
      { value: "Gemini 2.0 Flash", label: "summary, rule-based fallback" },
    ],
    note: "Output: topics, decisions and action items.",
    tags: ["Python", "Whisper", "pyannote", "Gemini API", "Streamlit"],
    type: "Speech & LLM",
    team: "",
    status: "Completed",
    gradient: "from-cyan-600/20 to-blue-500/10",
    borderColor: "border-cyan-500/30",
    accentColor: "#087d91",
    repoUrl: "https://github.com/hoanganh-repogit/Meeting_Summarization",
    liveUrl: "",
  },
  {
    id: 4,
    title: "AI Knowledge Hub",
    description:
      "An AI chatbot that answers questions from an institution's course materials and internal documents. Every answer is grounded in the document repository and cites its sources. It also summarizes and groups learning resources so students can find them faster, with role-based access for administrators, lecturers, and students.",
    metrics: [
      { value: "RAG", label: "answers cite their sources" },
      { value: "3 roles", label: "admin, lecturer, student" },
      { value: "Live", label: "deployed on Render" },
    ],
    note: "",
    tags: [
      "Python",
      "LangGraph",
      "FastAPI",
      "Qdrant",
      "Docling",
      "PostgreSQL",
      "React/Vite",
      "Docker",
      "JWT/RBAC",
    ],
    type: "LLM / RAG",
    team: "",
    status: "Deployed",
    gradient: "from-blue-600/20 to-cyan-500/10",
    borderColor: "border-blue-500/30",
    accentColor: "#285fba",
    repoUrl: "https://github.com/hoanganh-repogit",
    liveUrl: "https://ai20k-frontend.onrender.com/login",
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Artificial Intelligence",
    major: "FPT University",
    school: "Ho Chi Minh City, Vietnam",
    period: "2022 – 2026",
    gpa: "3.2 / 4.0",
    highlight: "Relevant coursework",
    courses: [
      "Machine Learning",
      "Deep Learning",
      "Data Structures & Algorithms",
      "Database Systems",
      "Computer Vision",
      "Natural Language Processing",
      "Artificial Intelligence",
      "Probability & Statistics",
    ],
    icon: <GraduationCap size={20} />,
    color: "blue",
  },
];

export const SKILL_CATEGORIES = [
  {
    category: "Programming",
    icon: <Code2 size={18} />,
    color: "#285fba",
    skills: [
      { name: "Python", level: 90 },
      { name: "TypeScript", level: 70 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: <Brain size={18} />,
    color: "#087d91",
    skills: [
      { name: "PyTorch", level: 85 },
      { name: "Scikit-learn", level: 80 },
      { name: "Reinforcement Learning", level: 85 },
      { name: "Contextual Bandits", level: 80 },
      { name: "Machine Learning", level: 85 },
      { name: "Deep Learning", level: 80 },
    ],
  },
  {
    category: "Vision, NLP & Speech",
    icon: <Eye size={18} />,
    color: "#285fba",
    skills: [
      { name: "Computer Vision", level: 80 },
      { name: "OpenCV", level: 80 },
      { name: "NLP", level: 75 },
      { name: "Speech Processing", level: 70 },
      { name: "Whisper / pyannote", level: 70 },
      { name: "LLM APIs (Gemini)", level: 70 },
    ],
  },
  {
    category: "Data & Visualization",
    icon: <Layers size={18} />,
    color: "#1679a5",
    skills: [
      { name: "NumPy", level: 90 },
      { name: "Pandas", level: 85 },
      { name: "Matplotlib", level: 80 },
      { name: "Streamlit", level: 75 },
    ],
  },
  {
    category: "Backend & Databases",
    icon: <Database size={18} />,
    color: "#2563eb",
    skills: [
      { name: "FastAPI", level: 80 },
      { name: "REST APIs", level: 80 },
      { name: "Redis", level: 75 },
      { name: "Relational Databases", level: 70 },
      { name: "Vector Databases", level: 65 },
    ],
  },
  {
    category: "Cloud & Deployment",
    icon: <Cpu size={18} />,
    color: "#216f99",
    skills: [
      { name: "AWS", level: 75 },
      { name: "Docker", level: 75 },
      { name: "Git / GitHub", level: 85 },
      { name: "Render", level: 70 },
      { name: "NGINX", level: 60 },
      { name: "Cloudflare R2", level: 60 },
    ],
  },
];

export const TOOLS = [
  { name: "Python", icon: <SiPython />, color: "#3b5b85" },
  { name: "PyTorch", icon: <SiPytorch />, color: "#3b5b85" },
  { name: "Scikit-learn", icon: <SiScikitlearn />, color: "#3b5b85" },
  { name: "OpenCV", icon: <SiOpencv />, color: "#3b5b85" },
  { name: "NumPy", icon: <SiNumpy />, color: "#3b5b85" },
  { name: "Pandas", icon: <SiPandas />, color: "#3b5b85" },
  { name: "Jupyter", icon: <SiJupyter />, color: "#3b5b85" },
  { name: "Hugging Face", icon: <SiHuggingface />, color: "#3b5b85" },
  { name: "Gemini", icon: <SiGooglegemini />, color: "#3b5b85" },
  { name: "Streamlit", icon: <SiStreamlit />, color: "#3b5b85" },
  { name: "FastAPI", icon: <SiFastapi />, color: "#3b5b85" },
  { name: "Redis", icon: <SiRedis />, color: "#3b5b85" },
  { name: "Docker", icon: <SiDocker />, color: "#3b5b85" },
  { name: "AWS", icon: <FaAws />, color: "#3b5b85" },
  { name: "Render", icon: <SiRender />, color: "#3b5b85" },
  { name: "NGINX", icon: <SiNginx />, color: "#3b5b85" },
  { name: "Cloudflare R2", icon: <SiCloudflare />, color: "#3b5b85" },
  { name: "Git", icon: <SiGit />, color: "#3b5b85" },
  { name: "GitHub", icon: <SiGithub />, color: "#3b5b85" },
  { name: "VS Code", icon: <VscVscode />, color: "#3b5b85" },
];

export const ACTIVITIES = [
  {
    id: 1,
    title: "AI Intern",
    org: "VinSmartFuture · KD&VH – GSM",
    period: "May 2026 – Aug 2026",
    type: "Internship",
    description:
      "Designed and implemented an AI Decision Engine that chooses which in-app popup to show on the Green SM HOME screen, or returns NO_SHOW when no campaign is relevant enough.",
    bullets: [
      "Combined rule-based eligibility and frequency controls with a Disjoint LinUCB contextual bandit that selects the most relevant campaign.",
      "Built a 16-dimensional contextual feature pipeline from user behavior, interaction history, time and campaign attributes, with click / dismiss feedback for learning.",
      "Contributed to the decision service with FastAPI and Redis-based atomic frequency control.",
      "Evaluated in shadow mode with a rule-based fallback and UX / latency guardrails.",
    ],
    tags: ["LinUCB", "Contextual Bandit", "FastAPI", "Redis", "Shadow mode", "Python"],
    icon: <Brain size={16} />,
    color: "blue",
  },
  {
    id: 2,
    title: "AI Talent Practical Training Program (20K AI)",
    org: "VinUniversity · Vingroup",
    period: "2026",
    type: "Program",
    description:
      "Selected for Vingroup's intensive AI talent development program, with training in AI Applications, AI & Data Infrastructure, and AI Business & Product. Completed the hands-on technical training and moved on to the industry-based practical phase at VinSmartFuture.",
    bullets: [],
    tags: ["AI Applications", "AI & Data Infrastructure", "AI Business & Product"],
    icon: <Sparkles size={16} />,
    color: "indigo",
  },
  {
    id: 3,
    title: "AWS Student Intern",
    org: "Amazon Web Services (AWS)",
    period: "Sep 2025 – Dec 2025",
    type: "Internship",
    description:
      "Worked with core AWS services to deploy, manage, secure and monitor cloud applications and infrastructure for AI/ML workloads.",
    bullets: [
      "Configured compute, storage and databases with EC2, S3 and RDS.",
      "Set up access control and networking with IAM and VPC.",
      "Monitored applications and infrastructure with CloudWatch.",
    ],
    tags: ["EC2", "S3", "RDS", "IAM", "VPC", "CloudWatch"],
    icon: <Server size={16} />,
    color: "cyan",
  },
];

export const CERTIFICATES = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jan 2026",
    url: "https://www.credly.com/badges/0f921c7e-0980-4bcf-a621-68c11fcf329d/public_url",
    icon: <FaAws />,
    color: "#285fba",
  },
  {
    id: 2,
    name: "Deep Learning Specialization",
    issuer: "Coursera – DeepLearning.AI",
    date: "May 2025",
    url: "https://coursera.org/share/c730e0ecdccfa0b12cc5a84ce0aadff1",
    icon: <SiPytorch />,
    color: "#285fba",
  },
  {
    id: 3,
    name: "Natural Language Processing",
    issuer: "Coursera",
    date: "",
    url: "https://coursera.org/share/68d8bb7310edb0e62616866dfe31d490",
    icon: <Brain />,
    color: "#285fba",
  },
  {
    id: 4,
    name: "Gemini Certified Educator",
    issuer: "Google – Education",
    date: "Dec 2025",
    url: "https://edu.google.accredible.com/f028a8d8-edff-4432-bab7-0fc351542007#acc.Jo3I4i7K",
    icon: <SiGooglecloud />,
    color: "#285fba",
  },
];
