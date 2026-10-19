// All content shown on the page. Edit this file to update the portfolio.
import { Code2, Brain, Database, Globe, Cpu, Server, GraduationCap, Sparkles } from "lucide-react";
import { VscVscode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa6";
import {
  SiPycharm,
  SiJupyter,
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiKubernetes,
  SiPostman,
  SiFigma,
  SiNotion,
  SiJira,
  SiConfluence,
  SiDatadog,
  SiGrafana,
  SiMlflow,
  SiHuggingface,
  SiVercel,
  SiGooglecloud,
  SiTerraform,
  SiPrometheus,
  SiLinux,
  SiWeightsandbiases,
  SiPytorch,
} from "react-icons/si";
export const CV_URL = `${import.meta.env.BASE_URL}CV_HOANGVANANH.pdf`;


export const EMAIL = "hoangvananhgithub@gmail.com";
export const PHONE = "0375956650";

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "activities", label: "Activities" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "AI Knowledge Hub",
    description:
      "An AI chatbot that answers questions from an institution's course materials and internal documents. Every answer is grounded in the document repository and cites its sources, so it does not make up information beyond the provided materials. It also summarizes and groups learning resources so students can find them faster, with role-based access for administrators, lecturers, and students.",
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
    type: "AI / NLP",
    stars: 128,
    status: "Production",
    gradient: "from-blue-600/20 to-cyan-500/10",
    borderColor: "border-blue-500/30",
    accentColor: "#285fba",
    year: "2026",
    repoUrl: "https://github.com/hoanganh-repogit",
    liveUrl: "https://ai20k-frontend.onrender.com/login",
  },
  {
    id: 2,
    title: "Meeting Summarization",
    // TODO: check this description against the real project and add measured results.
    description:
      "Turns a meeting recording into a transcript that shows who spoke when, then condenses it into a short summary. Whisper handles speech-to-text and pyannote handles speaker diarization.",
    tags: ["Python", "Whisper", "PyTorch", "pyannote"],
    type: "Speech Processing",
    stars: 89,
    status: "Completed",
    gradient: "from-cyan-600/20 to-blue-500/10",
    borderColor: "border-cyan-500/30",
    accentColor: "#087d91",
    year: "2026",
    repoUrl: "https://github.com/hoanganh-repogit/Meeting_Summarization",
    liveUrl: "",
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Information Technology Engineer",
    major: "Major in Artificial Intelligence & Machine Learning",
    school: "FPT University",
    period: "2022 – 2026",
    gpa: "3.2 / 4.0",
    highlight: "Bachelor’s Degree in Artificial Intelligence",
    courses: [
      "Machine Learning",
      "Deep Learning",
      "Algorithm Design",
      "Distributed Systems",
      "Computer Vision",
      "Natural Language Processing",
    ],
    icon: <GraduationCap size={20} />,
    color: "blue",
  },
  {
    id: 2,
    degree: "VinUniversity: Advanced Applied AI Talent Program",
    major: "Artificial Intelligence & Data Science",
    school: "VinUniversity",
    period: "2026 (6 months)",
    gpa: "A / A+",
    highlight:
      "Focused on Large Language Models (LLMs) and AI Engineering Research",
    courses: [
      "Advanced NLP",
      "Reinforcement Learning",
      "AI Ethics",
      "Cloud Computing",
      "AI Agents",
    ],
    icon: <Sparkles size={20} />,
    color: "cyan",
  },
];

export const SKILL_CATEGORIES = [
  {
    category: "Programming Languages",
    icon: <Code2 size={18} />,
    color: "#285fba",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: <Brain size={18} />,
    color: "#087d91",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "HuggingFace", level: 87 },
      { name: "LangChain", level: 85 },
      { name: "Scikit-learn", level: 92 },
      { name: "OpenCV", level: 80 },
    ],
  },
  {
    category: "Backend & Infrastructure",
    icon: <Server size={18} />,
    color: "#285fba",
    skills: [
      { name: "FastAPI", level: 90 },
      { name: "Node.js", level: 82 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 72 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 80 },
    ],
  },
  {
    category: "Frontend",
    icon: <Globe size={18} />,
    color: "#1679a5",
    skills: [
      { name: "React", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vue.js", level: 65 },
      { name: "GraphQL", level: 70 },
      { name: "WebSocket", level: 75 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cpu size={18} />,
    color: "#216f99",
    skills: [
      { name: "AWS", level: 80 },
      { name: "GCP", level: 72 },
      { name: "Terraform", level: 68 },
      { name: "CI/CD GitLab", level: 85 },
      { name: "Prometheus", level: 70 },
      { name: "Linux", level: 88 },
    ],
  },
  {
    category: "Data & Analytics",
    icon: <Database size={18} />,
    color: "#2563eb",
    skills: [
      { name: "Pandas / NumPy", level: 93 },
      { name: "Apache Spark", level: 65 },
      { name: "Elasticsearch", level: 75 },
      { name: "MongoDB", level: 78 },
      { name: "Kafka", level: 68 },
      { name: "Airflow", level: 60 },
    ],
  },
];

export const TOOLS = [
  { name: "VS Code", icon: <VscVscode />, color: "#3b5b85" },
  { name: "PyCharm", icon: <SiPycharm />, color: "#3b5b85" },
  { name: "Jupyter", icon: <SiJupyter />, color: "#3b5b85" },
  { name: "Git", icon: <SiGit />, color: "#3b5b85" },
  { name: "GitHub", icon: <SiGithub />, color: "#3b5b85" },
  { name: "GitLab", icon: <SiGitlab />, color: "#3b5b85" },
  { name: "Docker", icon: <SiDocker />, color: "#3b5b85" },
  { name: "Kubernetes", icon: <SiKubernetes />, color: "#3b5b85" },
  { name: "Postman", icon: <SiPostman />, color: "#3b5b85" },
  { name: "Weights & Biases", icon: <SiWeightsandbiases />, color: "#3b5b85" },
  { name: "Hugging Face", icon: <SiHuggingface />, color: "#3b5b85" },
  { name: "Vercel", icon: <SiVercel />, color: "#3b5b85" },
  { name: "AWS", icon: <FaAws />, color: "#3b5b85" },
  { name: "Google Cloud", icon: <SiGooglecloud />, color: "#3b5b85" },
  { name: "Terraform", icon: <SiTerraform />, color: "#3b5b85" },
  { name: "Prometheus", icon: <SiPrometheus />, color: "#3b5b85" },
  { name: "Grafana", icon: <SiGrafana />, color: "#3b5b85" },
  { name: "Datadog", icon: <SiDatadog />, color: "#3b5b85" },
  { name: "MLflow", icon: <SiMlflow />, color: "#3b5b85" },
  { name: "Linux", icon: <SiLinux />, color: "#3b5b85" },
  { name: "Figma", icon: <SiFigma />, color: "#3b5b85" },
  { name: "Notion", icon: <SiNotion />, color: "#3b5b85" },
  { name: "Jira", icon: <SiJira />, color: "#3b5b85" },
  { name: "Confluence", icon: <SiConfluence />, color: "#3b5b85" },
];

export const ACTIVITIES = [
  {
    id: 1,
    title: "VinUniversity: AI in Action",
    org: "VinUni AI in Action: AI Talent Development Program",
    period: "Jun 2026 – Aug 2026",
    type: "Internship",
    description:
      "Participated in the AI in Action Program at VinUniversity, a hands-on AI talent development program focused on practical training and real-world applications. Studied at the university while applying AI to product development, then gained industry experience through internships within Vingroup companies, working directly with professional teams on real business problems.",
    tags: ["LLM", "NLP", "RAG", "AI Agents", "Research", "Python"],
    icon: <Brain size={16} />,
    color: "blue",
  },
  {
    id: 2,
    title: "AWS Cloud Services Intern",
    org: "Amazon Web Services",
    period: "Jun 2025 – Aug 2025",
    type: "Internship",
    description:
      "Conducted research and hands-on work with AWS services, designing cloud architectures and evaluating new service offerings. Engaged in cloud events and technical workshops to deepen expertise in cloud computing. Collaborated with enterprises to understand system operations, product development lifecycles, and strengthen deployment and DevOps knowledge.",
    tags: ["EC2", "IAM", "S3", "EBS", "CloudFront", "API Gateway"],
    icon: <Server size={16} />,
    color: "cyan",
  },
];

export const CERTIFICATES = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner – Foundational",
    issuer: "Amazon Web Services",
    date: "Jan 2026",
    url: "https://www.credly.com/badges/0f921c7e-0980-4bcf-a621-68c11fcf329d/public_url",
    icon: <FaAws />,
    color: "#285fba",
  },
  {
    id: 2,
    name: "Deep Learning Specialization",
    issuer: "Coursera – deeplearning.ai",
    date: "May 2025",
    url: "https://www.coursera.org/account/accomplishments/specialization/0DXXF3CLE5S9",
    icon: <SiPytorch />,
    color: "#285fba",
  },
  {
    id: 3,
    name: "Gemini Certified Educator",
    issuer: "Google – Education",
    date: "Dec 2025",
    url: "https://edu.google.accredible.com/f028a8d8-edff-4432-bab7-0fc351542007#acc.iR1mAK3N",
    icon: <SiGooglecloud />,
    color: "#285fba",
  },
];
