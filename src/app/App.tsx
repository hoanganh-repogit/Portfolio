import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Brain,
  Database,
  Globe,
  Terminal,
  ChevronRight,
  Award,
  BookOpen,
  Briefcase,
  Facebook,
  User,
  Layers,
  Activity,
  X,
  Menu,
  Download,
  Star,
  GitBranch,
  Cpu,
  Server,
  Shield,
} from "lucide-react";
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
  SiTensorflow,
  SiPytorch,
  SiKeras,
} from "react-icons/si";

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "activities", label: "Activities" },
];

const PROJECTS = [
  {
    id: 1,
    title: "AI Chatbot Platform",
    description:
      "Hệ thống chatbot thông minh tích hợp LLM (GPT-4) với RAG pipeline, hỗ trợ đa ngôn ngữ và knowledge base tùy chỉnh cho doanh nghiệp.",
    tags: ["Python", "LangChain", "FastAPI", "React", "PostgreSQL", "Docker"],
    type: "AI / NLP",
    stars: 128,
    status: "Production",
    gradient: "from-blue-600/20 to-cyan-500/10",
    borderColor: "border-blue-500/30",
    accentColor: "#3b82f6",
    year: "2026",
    repoUrl: "https://github.com/hoanganh-repogit",
    liveUrl: "https://ai20k-frontend.onrender.com/login",
  },
  {
    id: 2,
    title: "Meeting_Summarization",
    description:
      "Ứng dụng computer vision phát hiện lỗi sản phẩm trong dây chuyền sản xuất sử dụng YOLOv8, đạt độ chính xác 96.4% trên tập kiểm thử thực tế.",
    tags: ["Python", "Whisper", "PyTorch", "pyannote"],
    type: "Speech Processing",
    stars: 89,
    status: "Completed",
    gradient: "from-cyan-600/20 to-blue-500/10",
    borderColor: "border-cyan-500/30",
    accentColor: "#06b6d4",
    year: "2026",
    repoUrl: "https://github.com/hoanganh-repogit/Meeting_Summarization",
    liveUrl: "",
  },
  // {
  //   id: 3,
  //   title: "Distributed Task Scheduler",
  //   description:
  //     "Hệ thống phân phối và lên lịch tác vụ cho hạ tầng microservices, xử lý 50k+ jobs/phút với fault tolerance và real-time monitoring.",
  //   tags: ["Go", "Kafka", "Redis", "Kubernetes", "Prometheus", "Grafana"],
  //   type: "Backend / Infra",
  //   stars: 204,
  //   status: "Production",
  //   gradient: "from-indigo-600/20 to-blue-500/10",
  //   borderColor: "border-indigo-500/30",
  //   accentColor: "#818cf8",
  //   year: "2023",
  // },
  // {
  //   id: 4,
  //   title: "DevSecOps Pipeline",
  //   description:
  //     "Pipeline CI/CD tích hợp bảo mật tự động: SAST, DAST, dependency scanning và container security scanning, giảm 70% thời gian audit thủ công.",
  //   tags: ["GitLab CI", "Trivy", "SonarQube", "Docker", "Terraform", "AWS"],
  //   type: "DevOps / Security",
  //   stars: 67,
  //   status: "Active",
  //   gradient: "from-blue-700/20 to-slate-600/10",
  //   borderColor: "border-blue-600/30",
  //   accentColor: "#2563eb",
  //   year: "2023",
  // },
  // {
  //   id: 5,
  //   title: "NLP Text Analytics Engine",
  //   description:
  //     "Engine phân tích văn bản tiếng Việt: sentiment analysis, entity recognition, và topic modeling sử dụng PhoBERT và custom fine-tuning.",
  //   tags: ["Python", "PhoBERT", "HuggingFace", "Elasticsearch", "FastAPI"],
  //   type: "AI / NLP",
  //   stars: 156,
  //   status: "Completed",
  //   gradient: "from-sky-600/20 to-blue-500/10",
  //   borderColor: "border-sky-500/30",
  //   accentColor: "#0ea5e9",
  //   year: "2023",
  // },
  // {
  //   id: 6,
  //   title: "Portfolio & Blog System",
  //   description:
  //     "Hệ thống portfolio và blog cá nhân với CMS headless, SSG/SSR hybrid, tối ưu SEO và Lighthouse score 98/100.",
  //   tags: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind", "Vercel"],
  //   type: "Full-Stack",
  //   stars: 43,
  //   status: "Live",
  //   gradient: "from-blue-500/20 to-cyan-600/10",
  //   borderColor: "border-blue-400/30",
  //   accentColor: "#60a5fa",
  //   year: "2024",
  // },
];

const EDUCATION = [
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
    icon: "🎓",
    color: "blue",
  },
  {
    id: 2,
    degree: "VinUniversity: Advanced Applied AI Talent Program",
    major: "Artificial Intelligence & Data Science",
    school: "VinUniversity",
    period: "2026 – 2026 (6 months)",
    gpa: "A / A+",
    highlight:
      "Focused on Large Language Models (LLMs) and AI Engineering Research",
    courses: [
      "Advanced NLP",
      "Reinforcement Learning",
      "AI Ethics",
      "Cloud Computing",
      "Agents AI",
    ],
    icon: "🌏",
    color: "cyan",
  },
];

const SKILL_CATEGORIES = [
  {
    category: "Programming Languages",
    icon: <Code2 size={18} />,
    color: "#3b82f6",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: <Brain size={18} />,
    color: "#06b6d4",
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
    color: "#818cf8",
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
    color: "#38bdf8",
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
    color: "#7dd3fc",
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

const TOOLS = [
  { name: "VS Code", icon: <VscVscode />, color: "#3b82f6" },
  { name: "PyCharm", icon: <SiPycharm />, color: "#06b6d4" },
  { name: "Jupyter", icon: <SiJupyter />, color: "#f97316" },
  { name: "Git", icon: <SiGit />, color: "#ef4444" },
  { name: "GitHub", icon: <SiGithub />, color: "#e2eaf7" },
  { name: "GitLab", icon: <SiGitlab />, color: "#fb923c" },
  { name: "Docker", icon: <SiDocker />, color: "#38bdf8" },
  { name: "Kubernetes", icon: <SiKubernetes />, color: "#818cf8" },
  { name: "Postman", icon: <SiPostman />, color: "#f97316" },
  { name: "Weights & Biases", icon: <SiWeightsandbiases />, color: "#f472b6" },
  { name: "Hugging Face", icon: <SiHuggingface />, color: "#f59e0b" },
  { name: "Vercel", icon: <SiVercel />, color: "#e2eaf7" },
  { name: "AWS", icon: <FaAws />, color: "#f97316" },
  { name: "Google Cloud", icon: <SiGooglecloud />, color: "#38bdf8" },
  { name: "Terraform", icon: <SiTerraform />, color: "#818cf8" },
  { name: "Prometheus", icon: <SiPrometheus />, color: "#f97316" },
  { name: "Grafana", icon: <SiGrafana />, color: "#fb923c" },
  { name: "Datadog", icon: <SiDatadog />, color: "#a78bfa" },
  { name: "MLflow", icon: <SiMlflow />, color: "#06b6d4" },
  { name: "Linux", icon: <SiLinux />, color: "#e2eaf7" },
  { name: "Figma", icon: <SiFigma />, color: "#f472b6" },
  { name: "Notion", icon: <SiNotion />, color: "#e2eaf7" },
  { name: "Jira", icon: <SiJira />, color: "#3b82f6" },
  { name: "Confluence", icon: <SiConfluence />, color: "#38bdf8" },
];

const ACTIVITIES = [
  {
    id: 1,
    title: "AI Research Intern",
    org: "VinAI Research",
    period: "Jun 2024 – Present",
    type: "Internship",
    description:
      "Nghiên cứu và phát triển các mô hình ngôn ngữ lớn cho tiếng Việt. Tham gia dự án fine-tuning LLaMA-3 với instruction dataset 500k+ samples. Publish 1 paper tại EMNLP 2024 Workshop.",
    tags: ["LLM", "NLP", "Research", "Python"],
    icon: <Brain size={16} />,
    color: "blue",
  },
  {
    id: 2,
    title: "Backend Developer Intern",
    org: "FPT Software",
    period: "Jan 2023 – May 2023",
    type: "Internship",
    description:
      "Phát triển microservices với Go và Kafka cho hệ thống xử lý giao dịch tài chính real-time. Tối ưu hiệu năng API giảm latency từ 200ms xuống 45ms. Code review và mentoring 2 intern.",
    tags: ["Go", "Kafka", "Microservices", "PostgreSQL"],
    icon: <Server size={16} />,
    color: "cyan",
  },
  {
    id: 3,
    title: "Co-founder & Tech Lead",
    org: "AI Club – Đại học Bách Khoa Hà Nội",
    period: "2021 – 2024",
    type: "Leadership",
    description:
      "Đồng sáng lập và dẫn dắt CLB AI với 150+ thành viên. Tổ chức 20+ workshop về ML/DL, hackathon hàng năm thu hút 300+ sinh viên. Kết nối doanh nghiệp và sinh viên qua các dự án thực tế.",
    tags: ["Leadership", "AI/ML", "Community", "Teaching"],
    icon: <Activity size={16} />,
    color: "indigo",
  },
  {
    id: 4,
    title: "Open Source Contributor",
    org: "LangChain, HuggingFace",
    period: "2022 – Present",
    type: "Open Source",
    description:
      "Đóng góp cho các thư viện AI open-source: 15+ merged PRs vào LangChain (Vietnamese document loaders), 8+ PRs vào HuggingFace datasets (Vietnamese NLP benchmarks).",
    tags: ["Open Source", "LangChain", "HuggingFace", "NLP"],
    icon: <GitBranch size={16} />,
    color: "sky",
  },
];

const CERTIFICATES = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner – Foundational",
    issuer: "Amazon Web Services",
    date: "Jan 2026",
    url: "https://www.credly.com/badges/0f921c7e-0980-4bcf-a621-68c11fcf329d/public_url",
    icon: <FaAws />,
    color: "#3b82f6",
  },
  {
    id: 2,
    name: "Deep Learning Specialization",
    issuer: "Coursera – deeplearning.ai",
    date: "May 2025",
    url: "https://www.coursera.org/account/accomplishments/specialization/0DXXF3CLE5S9",
    icon: <SiPytorch />,
    color: "#818cf8",
  },
  {
    id: 3,
    name: "Gemini Certified Educator",
    issuer: "Google – Education",
    date: "Dec 2025",
    url: "https://edu.google.accredible.com/f028a8d8-edff-4432-bab7-0fc351542007#acc.iR1mAK3N",
    icon: <SiGooglecloud />,
    color: "#818cf8",
  },
];

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function TerminalBadge({
  text,
  color = "#3b82f6",
}: {
  text: string;
  color?: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono border"
      style={{
        color: color,
        borderColor: `${color}40`,
        backgroundColor: `${color}10`,
      }}
    >
      <span style={{ color: color }}>_</span>
      {text}
    </span>
  );
}

function SkillTag({
  name,
  level,
  color,
}: {
  name: string;
  level: number;
  color: string;
}) {
  const tier = level >= 85 ? "expert" : level >= 70 ? "proficient" : "familiar";
  const tierLabel =
    tier === "expert"
      ? "Expert"
      : tier === "proficient"
        ? "Proficient"
        : "Familiar";
  const opacity = tier === "expert" ? 1 : tier === "proficient" ? 0.75 : 0.5;
  return (
    <div
      className="flex items-center justify-between px-3 py-2 rounded-lg border transition-all duration-200 hover:scale-[1.02] cursor-default group"
      style={{
        borderColor: `${color}${tier === "expert" ? "50" : tier === "proficient" ? "30" : "18"}`,
        background: `${color}${tier === "expert" ? "12" : "07"}`,
        opacity,
      }}
    >
      <span
        className="text-sm font-mono text-foreground group-hover:opacity-100"
        style={{ opacity: 1 / opacity }}
      >
        {name}
      </span>
      <span
        className="text-xs font-mono px-1.5 py-0.5 rounded"
        style={{ color, background: `${color}20`, opacity: 1 / opacity }}
      >
        {tierLabel}
      </span>
    </div>
  );
}

function ToolMarquee({
  tools,
  direction = "left",
}: {
  tools: typeof TOOLS;
  direction?: "left" | "right";
}) {
  const [paused, setPaused] = useState(false);
  return (
    <div
      className="overflow-hidden relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex w-max"
        style={{
          animation: `marquee-${direction} ${tools.length * 2.8}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex gap-3 pr-3 shrink-0"
            aria-hidden={copy === 1 ? "true" : undefined}
          >
            {tools.map((tool, i) => (
              <div
                key={`${tool.name}-${i}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border whitespace-nowrap shrink-0 transition-all duration-200 hover:scale-105 cursor-default"
                style={{
                  borderColor: `${tool.color}30`,
                  background: `${tool.color}0d`,
                }}
              >
                <span className="text-lg leading-none">{tool.icon}</span>
                <span
                  className="text-sm font-mono"
                  style={{ color: tool.color }}
                >
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-xs text-primary/60 tracking-widest uppercase">
          {index}
        </span>
        <div className="h-px flex-1 max-w-12 bg-primary/30" />
      </div>
      <h2
        className="text-3xl md:text-4xl font-bold text-foreground tracking-tight"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-muted-foreground font-mono text-sm">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSkillCat, setActiveSkillCat] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((n) => document.getElementById(n.id));
      const current = sections.reduce((acc, el) => {
        if (el && el.getBoundingClientRect().top <= 120) return el.id;
        return acc;
      }, "home");
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .overflow-hidden:hover > [style*="marquee"] {
          animation-play-state: paused;
        }
      `}</style>
      {/* Grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="fixed top-0 left-1/4 w-[600px] h-[600px] pointer-events-none z-0 opacity-10 rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, #3b82f6, transparent 70%)",
        }}
      />
      <div
        className="fixed bottom-1/4 right-1/4 w-[400px] h-[400px] pointer-events-none z-0 opacity-8 rounded-full blur-[100px]"
        style={{
          background: "radial-gradient(circle, #06b6d4, transparent 70%)",
        }}
      />

      {/* ── NAV ── */}
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(5, 13, 26, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(59,130,246,0.12)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded border border-primary/40 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Terminal size={14} className="text-primary" />
            </div>
            <span className="font-mono text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
              <span className="text-primary">~/</span>Portfolio
            </span>
          </button>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-4 py-2 rounded text-sm font-mono transition-all duration-200 relative"
                style={{
                  color:
                    activeSection === item.id
                      ? "#3b82f6"
                      : "rgba(226,234,247,0.6)",
                }}
              >
                {activeSection === item.id && (
                  <span className="absolute inset-0 rounded bg-primary/10 border border-primary/20" />
                )}
                <span className="relative">
                  {activeSection === item.id && (
                    <span className="text-primary/60">./</span>
                  )}
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/hoanganh-repogit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/ho%C3%A0ng-v%C4%83n-anh-831421266/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BeKb%2FJcIDQKmfpYBBlcP1mQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 rounded text-sm font-mono font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              }}
            >
              <Download size={14} />
              Download CV
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 rounded border border-border flex items-center justify-center text-muted-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden border-t border-border"
            style={{
              background: "rgba(5, 13, 26, 0.98)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left px-4 py-3 rounded font-mono text-sm transition-all"
                  style={{
                    color:
                      activeSection === item.id
                        ? "#3b82f6"
                        : "rgba(226,234,247,0.7)",
                    background:
                      activeSection === item.id
                        ? "rgba(59,130,246,0.1)"
                        : "transparent",
                  }}
                >
                  <span className="text-primary/40 mr-1">&gt;</span>{" "}
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-3 px-4 pt-3 mt-2 border-t border-border">
                <a
                  href="https://github.com/hoanganh-repogit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ho%C3%A0ng-v%C4%83n-anh-831421266/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGivUqIolQ4exHJq%2B5LW2sw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="/cv.pdf"
                  download
                  className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono font-semibold text-white"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  }}
                >
                  <Download size={12} /> Download CV
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative z-10 min-h-screen flex items-center pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                  Available for opportunities
                </span>
              </div>

              <div className="mb-4 font-mono text-sm text-primary/70">
                <span className="text-muted-foreground">$ whoami</span>
              </div>

              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-2 leading-none"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <span className="text-foreground">Hoang</span>
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #3b82f6, #06b6d4, #818cf8)",
                  }}
                >
                  Van Anh
                </span>
              </h1>

              <div className="flex items-center gap-2 mt-5 mb-6">
                <div className="h-px w-8 bg-primary/40" />
                <p className="font-mono text-sm text-muted-foreground">
                  <span className="text-accent">AI Engineer</span>
                  <span className="text-muted-foreground/40 mx-2">/</span>
                  <span className="text-primary/70">ML-DL Researcher</span>
                  <span className="text-muted-foreground/40 mx-2">/</span>
                  <span className="text-foreground/50">Full-Stack Dev</span>
                </p>
              </div>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Software Engineer passionate about building practical AI
                systems. Specializing in{" "}
                <span className="text-foreground font-medium">
                  Large Language Models (LLMs)
                </span>
                ,{" "}
                <span className="text-foreground font-medium">
                  Computer Vision
                </span>{" "}
                and{" "}
                <span className="text-foreground font-medium">
                  distributed systems
                </span>
                , with strong research interests in artificial intelligence.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Python",
                  "JavaScript",
                  "PyTorch",
                  "LangChain",
                  "Docker",
                  "AWS",
                ].map((t) => (
                  <TerminalBadge key={t} text={t} color="#3b82f6" />
                ))}
              </div>

              {/* Contact info strip */}
              <div
                className="flex flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3 rounded-xl border mb-8"
                style={{
                  borderColor: "rgba(59,130,246,0.2)",
                  background: "rgba(59,130,246,0.05)",
                }}
              >
                <a
                  href="mailto:hoangvananhgithub@gmail.com"
                  className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail
                    size={14}
                    className="text-primary group-hover:scale-110 transition-transform"
                  />
                  hoangvananhgithub@gmail.com
                </a>
                <span className="hidden sm:block w-px h-4 bg-border" />
                <a
                  href="https://www.linkedin.com/in/ho%C3%A0ng-v%C4%83n-anh-831421266/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bi97vZTDaRc6dwdWurWTQdw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-blue-400 transition-colors group"
                >
                  <Linkedin
                    size={14}
                    className="text-blue-400 group-hover:scale-110 transition-transform"
                  />
                  linkedin.com/in/hoangvananh
                </a>
                <span className="hidden sm:block w-px h-4 bg-border" />
                <a
                  href="https://www.facebook.com/hoang.van.anh.271908?mibextid=wwXIfr&rdid=ynn6UHSVSBOvSMBI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BzQqbcLuw%2F%3Fmibextid%3DwwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-blue-500 transition-colors group"
                >
                  <Facebook
                    size={14}
                    className="text-blue-500 group-hover:scale-110 transition-transform"
                  />
                  fb.com/hoangvananh
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("projects")}
                  className="flex items-center gap-2 px-6 py-3 rounded font-mono text-sm font-medium text-white transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  }}
                >
                  View Projects
                  <ChevronRight size={16} />
                </button>
                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center gap-2 px-6 py-3 rounded font-mono text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #0284c7, #06b6d4)",
                  }}
                >
                  <Download size={15} />
                  Download CV
                </a>
                <button
                  onClick={() => scrollTo("activities")}
                  className="flex items-center gap-2 px-6 py-3 rounded font-mono text-sm font-medium border border-border text-foreground/70 hover:text-foreground hover:border-primary/40 transition-all duration-200"
                >
                  <Briefcase size={15} />
                  Experience
                </button>
              </div>
            </div>

            {/* Avatar card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Outer ring */}
                <div
                  className="absolute inset-0 rounded-2xl -m-3 border"
                  style={{
                    borderColor: "rgba(59,130,246,0.2)",
                    borderStyle: "dashed",
                  }}
                />

                {/* Avatar */}
                <div
                  className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border"
                  style={{ borderColor: "rgba(59,130,246,0.3)" }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}avatar.jpg`}
                    alt="Profile photo"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, transparent 60%)",
                    }}
                  />
                </div>

                {/* Stats floating cards */}
                <div
                  className="absolute -left-14 top-8 px-3 py-2 rounded-lg border backdrop-blur-sm text-center"
                  style={{
                    background: "rgba(11,22,40,0.9)",
                    borderColor: "rgba(59,130,246,0.3)",
                  }}
                >
                  <div className="text-lg font-bold text-primary font-mono">
                    6+
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    projects
                  </div>
                </div>
                <div
                  className="absolute -right-14 bottom-12 px-3 py-2 rounded-lg border backdrop-blur-sm text-center"
                  style={{
                    background: "rgba(11,22,40,0.9)",
                    borderColor: "rgba(6,182,212,0.3)",
                  }}
                >
                  <div
                    className="text-lg font-bold font-mono"
                    style={{ color: "#06b6d4" }}
                  >
                    3.2
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    GPA / 4.0
                  </div>
                </div>
                <div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg border backdrop-blur-sm whitespace-nowrap"
                  style={{
                    background: "rgba(11,22,40,0.9)",
                    borderColor: "rgba(129,140,248,0.3)",
                  }}
                >
                  <div className="text-xs font-mono text-foreground/70">
                    <span className="text-indigo-400">AI Engineer</span> @
                    Researcher
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick stats row */}
          <div className="mt-20 lg:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "6+", label: "Projects shipped", color: "#3b82f6" },
              { value: "15+", label: "Open source PRs", color: "#06b6d4" },
              { value: "6", label: "Certifications", color: "#818cf8" },
              { value: "3yr", label: "Experience", color: "#38bdf8" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-lg border"
                style={{
                  borderColor: `${stat.color}25`,
                  background: `${stat.color}08`,
                }}
              >
                <div
                  className="text-2xl font-bold font-mono mb-1"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="relative z-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            index="01 // projects"
            title="Featured Projects"
            subtitle="// Highlighted Projects — From Research to Production"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className={`group relative rounded-xl border overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 bg-gradient-to-br ${proj.gradient} ${proj.borderColor}`}
                style={{ background: undefined }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} opacity-100`}
                />
                <div
                  className="absolute inset-0 border rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    borderColor: proj.accentColor + "50",
                    boxShadow: `0 0 24px ${proj.accentColor}20 inset`,
                  }}
                />

                <div className="relative p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs font-mono px-2 py-0.5 rounded-full border"
                          style={{
                            color: proj.accentColor,
                            borderColor: proj.accentColor + "40",
                            background: proj.accentColor + "15",
                          }}
                        >
                          {proj.type}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground">
                          {proj.year}
                        </span>
                      </div>
                      <h3
                        className="text-base font-semibold text-foreground group-hover:text-primary transition-colors"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {proj.title}
                      </h3>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-mono text-muted-foreground ml-2 shrink-0">
                      <Star size={11} style={{ color: proj.accentColor }} />
                      {proj.stars}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {proj.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-muted/50 text-muted-foreground border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-border/30">
                    <span
                      className="flex items-center gap-1.5 text-xs font-mono"
                      style={{ color: proj.accentColor }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {proj.status}
                    </span>
                    <div className="flex items-center gap-2">
                      {proj.repoUrl && (
                        <a
                          href={proj.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${proj.title} source code`}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all duration-200 hover:scale-105"
                          style={{
                            color: proj.accentColor,
                            borderColor: proj.accentColor + "50",
                            background: proj.accentColor + "15",
                          }}
                        >
                          <Github size={14} />
                          View Project
                        </a>
                      )}
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${proj.title} live demo`}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-border/50 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink size={14} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://github.com/hoanganh-repogit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded font-mono text-sm border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
            >
              <Github size={15} />
              Xem thêm trên GitHub
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="relative z-10 py-24 md:py-32">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(59,130,246,0.03), transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeader
            index="02 // education"
            title="Education"
            subtitle="// Learning and Growth Journey"
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-[220px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

            <div className="flex flex-col gap-8">
              {EDUCATION.map((edu, i) => {
                const colors: Record<string, string> = {
                  blue: "#3b82f6",
                  cyan: "#06b6d4",
                  indigo: "#818cf8",
                };
                const c = colors[edu.color];
                return (
                  <div
                    key={edu.id}
                    className="md:grid md:grid-cols-[220px_1fr] gap-8 group"
                  >
                    {/* Left: period */}
                    <div className="flex md:flex-col md:items-end md:text-right gap-4 md:gap-0 mb-4 md:mb-0">
                      <div className="font-mono text-sm font-medium text-muted-foreground">
                        {edu.period}
                      </div>
                      <div
                        className="hidden md:block mt-2 text-xs font-mono px-2 py-1 rounded border self-end"
                        style={{
                          color: c,
                          borderColor: c + "40",
                          background: c + "10",
                        }}
                      >
                        GPA: {edu.gpa}
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="relative">
                      <div
                        className="hidden md:block absolute -left-[29px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-background transition-all group-hover:scale-125"
                        style={{ background: c, boxShadow: `0 0 12px ${c}` }}
                      />

                      <div
                        className="p-5 rounded-xl border transition-all duration-300 group-hover:border-opacity-100"
                        style={{
                          borderColor: c + "25",
                          background: c + "08",
                        }}
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <span className="text-2xl">{edu.icon}</span>
                          <div>
                            <h3
                              className="font-semibold text-foreground text-base"
                              style={{ fontFamily: "'Outfit', sans-serif" }}
                            >
                              {edu.degree}
                            </h3>
                            <p
                              className="text-sm font-mono"
                              style={{ color: c }}
                            >
                              {edu.major}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 font-medium">
                          {edu.school}
                        </p>

                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span
                            className="text-xs font-mono px-2 py-1 rounded border flex items-center gap-1"
                            style={{
                              color: c,
                              borderColor: c + "40",
                              background: c + "10",
                            }}
                          >
                            {edu.highlight}
                          </span>
                          <span className="md:hidden text-xs font-mono text-muted-foreground">
                            GPA: {edu.gpa}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {edu.courses.map((course) => (
                            <span
                              key={course}
                              className="text-xs font-mono px-2 py-0.5 rounded bg-muted/40 text-muted-foreground border border-border/40"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="relative z-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            index="03 // skills"
            title="Skills & Tools"
            subtitle="// Technologies & Tools I Use Daily"
          />

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {SKILL_CATEGORIES.map((cat, i) => (
              <button
                key={cat.category}
                onClick={() => setActiveSkillCat(i)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono border transition-all duration-200"
                style={{
                  borderColor:
                    activeSkillCat === i
                      ? cat.color + "60"
                      : "rgba(59,130,246,0.15)",
                  background:
                    activeSkillCat === i ? cat.color + "15" : "transparent",
                  color:
                    activeSkillCat === i ? cat.color : "rgba(226,234,247,0.5)",
                }}
              >
                <span
                  style={{
                    color: activeSkillCat === i ? cat.color : "inherit",
                  }}
                >
                  {cat.icon}
                </span>
                {cat.category}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* Active category tags */}
            <div
              className="p-6 rounded-xl border"
              style={{
                borderColor: SKILL_CATEGORIES[activeSkillCat].color + "30",
                background: SKILL_CATEGORIES[activeSkillCat].color + "06",
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span style={{ color: SKILL_CATEGORIES[activeSkillCat].color }}>
                  {SKILL_CATEGORIES[activeSkillCat].icon}
                </span>
                <h3
                  className="font-semibold text-foreground"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {SKILL_CATEGORIES[activeSkillCat].category}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {SKILL_CATEGORIES[activeSkillCat].skills.map((skill) => (
                  <SkillTag
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={SKILL_CATEGORIES[activeSkillCat].color}
                  />
                ))}
              </div>
              {/* Legend */}
              <div className="flex items-center gap-4 mt-5 pt-4 border-t border-border/30">
                {[
                  { label: "Expert", opacity: 1 },
                  { label: "Proficient", opacity: 0.75 },
                  { label: "Familiar", opacity: 0.5 },
                ].map(({ label, opacity }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground"
                    style={{ opacity }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: SKILL_CATEGORIES[activeSkillCat].color,
                      }}
                    />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Category selector */}
            <div className="grid grid-cols-2 gap-3 content-start">
              {SKILL_CATEGORIES.map((cat, i) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveSkillCat(i)}
                  className="p-4 rounded-xl border text-left transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    borderColor:
                      i === activeSkillCat
                        ? cat.color + "55"
                        : cat.color + "20",
                    background:
                      i === activeSkillCat
                        ? cat.color + "12"
                        : cat.color + "07",
                  }}
                >
                  <span style={{ color: cat.color }}>{cat.icon}</span>
                  <div className="text-xs font-mono text-muted-foreground mt-2 leading-tight">
                    {cat.category}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {cat.skills.slice(0, 3).map((s) => (
                      <span
                        key={s.name}
                        className="text-xs font-mono px-1.5 py-0.5 rounded"
                        style={{
                          color: cat.color,
                          background: cat.color + "18",
                          opacity:
                            s.level >= 85 ? 1 : s.level >= 70 ? 0.7 : 0.45,
                        }}
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Tools marquee */}
          <div>
            <h3 className="font-mono text-sm text-muted-foreground mb-5">
              <span className="text-primary">$</span> tools --carousel
            </h3>
            <div className="flex flex-col gap-3 overflow-hidden rounded-xl">
              {/* Row 1 — scrolls left */}
              <ToolMarquee tools={TOOLS.slice(0, 12)} direction="left" />
              {/* Row 2 — scrolls right */}
              <ToolMarquee tools={TOOLS.slice(12)} direction="right" />
            </div>
          </div>
        </div>
      </section>

      {/* ── ACTIVITIES + CERTS ── */}
      <section id="activities" className="relative z-10 py-24 md:py-32">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(6,182,212,0.025), transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeader
            index="04 // activities"
            title="Activities & Certificates"
            subtitle="// Experience, Activities, and Professional Certifications"
          />

          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">
            {/* Activities */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Activity size={16} className="text-primary" />
                <h3 className="font-mono text-sm text-muted-foreground">
                  <span className="text-primary">//</span> Experience &
                  Activities
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {ACTIVITIES.map((act) => {
                  const colors: Record<string, string> = {
                    blue: "#3b82f6",
                    cyan: "#06b6d4",
                    indigo: "#818cf8",
                    sky: "#38bdf8",
                  };
                  const c = colors[act.color];
                  const typeColors: Record<string, string> = {
                    Internship: "#3b82f6",
                    Leadership: "#06b6d4",
                    "Open Source": "#818cf8",
                  };
                  return (
                    <div
                      key={act.id}
                      className="group p-5 rounded-xl border transition-all duration-300 hover:border-opacity-100 hover:-translate-y-0.5"
                      style={{ borderColor: c + "25", background: c + "06" }}
                    >
                      <div className="flex items-start justify-between mb-2 gap-3">
                        <div className="flex items-start gap-3">
                          <div
                            className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border"
                            style={{
                              color: c,
                              borderColor: c + "40",
                              background: c + "15",
                            }}
                          >
                            {act.icon}
                          </div>
                          <div>
                            <h4
                              className="font-semibold text-foreground text-sm"
                              style={{ fontFamily: "'Outfit', sans-serif" }}
                            >
                              {act.title}
                            </h4>
                            <p className="text-xs text-muted-foreground font-mono">
                              {act.org}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1 shrink-0">
                          <span
                            className="text-xs font-mono px-2 py-0.5 rounded border"
                            style={{
                              color: typeColors[act.type] || c,
                              borderColor: (typeColors[act.type] || c) + "40",
                              background: (typeColors[act.type] || c) + "10",
                            }}
                          >
                            {act.type}
                          </span>
                          <span className="text-xs font-mono text-muted-foreground">
                            {act.period}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3 ml-11">
                        {act.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 ml-11">
                        {act.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono px-2 py-0.5 rounded bg-muted/40 text-muted-foreground border border-border/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Certificates */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award size={16} className="text-accent" />
                <h3 className="font-mono text-sm text-muted-foreground">
                  <span className="text-accent">//</span> Certificates
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {CERTIFICATES.map((cert) => (
                  <a
                    key={cert.id}
                    href={cert.url ?? undefined}
                    target={cert.url ? "_blank" : undefined}
                    rel={cert.url ? "noopener noreferrer" : undefined}
                    className={`group flex items-start gap-3 p-4 rounded-xl border transition-all duration-200 hover:border-opacity-100 hover:-translate-x-0.5 ${
                      cert.url ? "cursor-pointer" : "pointer-events-none"
                    }`}
                    style={{
                      borderColor: cert.color + "25",
                      background: cert.color + "06",
                    }}
                  >
                    <span className="text-xl shrink-0 mt-0.5">{cert.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-sm font-medium text-foreground leading-tight mb-0.5"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {cert.name}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span
                          className="text-xs font-mono"
                          style={{ color: cert.color }}
                        >
                          {cert.date}
                        </span>
                        <span className="text-muted-foreground/40 text-xs">
                          ·
                        </span>
                        <span className="text-xs font-mono text-muted-foreground/60 truncate">
                          {cert.credentialId}
                        </span>
                      </div>
                    </div>
                    <Shield
                      size={13}
                      className="shrink-0 mt-0.5 opacity-40 group-hover:opacity-100 transition-opacity"
                      style={{ color: cert.color }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FOOTER ── */}
      <footer className="relative z-10 py-20 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-mono text-xs text-muted-foreground mb-4">
            <span className="text-primary">$</span> echo &quot;Let&apos;s build
            something together&quot;
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Get in Touch
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm leading-relaxed">
            Open to collaborating on exciting AI/ML projects, research
            collaborations, and job opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <a
              href="mailto:hoangvananhgithub@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded font-mono text-sm font-medium text-white transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              }}
            >
              <Mail size={16} />
              hoangvananhgithub@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/ho%C3%A0ng-v%C4%83n-anh-831421266/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfCDLn4hDQJCEqrgnYBr9jQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded font-mono text-sm border border-border text-muted-foreground hover:text-blue-400 hover:border-blue-400/40 transition-all"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/hoang.van.anh.271908?mibextid=wwXIfr&rdid=ynn6UHSVSBOvSMBI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BzQqbcLuw%2F%3Fmibextid%3DwwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded font-mono text-sm border border-border text-muted-foreground hover:text-blue-500 hover:border-blue-500/40 transition-all"
            >
              <Facebook size={15} />
              Facebook
            </a>
            <a
              href="https://github.com/hoanganh-repogit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded font-mono text-sm border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
            >
              <Github size={15} />
              GitHub
            </a>
          </div>
          <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-muted-foreground">
            <span>© 2026 Hoang Van Anh.</span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
