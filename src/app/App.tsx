import { NeuralNetwork } from "./NeuralNetwork";
import { SocialLinks } from "./SocialLinks";
import { ContactInfo } from "./ContactInfo";
import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  ExternalLink,
  Terminal,
  ChevronRight,
  Award,
  Activity,
  X,
  Menu,
  Download,
  Users,
  Shield,
  ArrowUp,
} from "lucide-react";
import {
  CV_URL,
  NAV_ITEMS,
  PROJECTS,
  EDUCATION,
  SKILL_CATEGORIES,
  TOOLS,
  ACTIVITIES,
  CERTIFICATES,
} from "./data";

function TerminalBadge({
  text,
  color = "#285fba",
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
  return (
    <div
      className="flex items-center justify-between px-3 py-2 rounded-lg border transition-all duration-200 hover:scale-[1.02] cursor-default group"
      style={{
        borderColor: `${color}${tier === "expert" ? "50" : tier === "proficient" ? "30" : "18"}`,
        background: `${color}${tier === "expert" ? "12" : "07"}`,
      }}
    >
      <span
        className="text-sm font-mono text-foreground"
      >
        {name}
      </span>
      <span
        className="text-xs font-mono px-1.5 py-0.5 rounded"
        style={{ color, background: `${color}20` }}
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
        <p className="mt-3 text-muted-foreground text-base max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}


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
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
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
      <a href="#home" className="skip-link">Skip to content</a>
      <NeuralNetwork />
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(247, 249, 252, 0.94)" : "transparent",
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
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-4 py-2 rounded text-sm font-mono transition-all duration-200 relative"
                style={{
                  color:
                    activeSection === item.id
                      ? "#285fba"
                      : "#53647a",
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
            <SocialLinks compact />
            <a
              href={CV_URL}
              download="CV_HOANGVANANH.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded text-sm font-mono font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              style={{
                background: "#285fba",
              }}
            >
              <Download size={14} />
              Download CV
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 rounded border border-border flex items-center justify-center text-muted-foreground"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation" className="md:hidden border-t border-border"
            style={{
              background: "rgba(247, 249, 252, 0.98)",
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
                        ? "#285fba"
                        : "#53647a",
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
                  href={CV_URL}
                  download="CV_HOANGVANANH.pdf"
                  className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono font-semibold text-white"
                  style={{
                    background: "#285fba",
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
          <div className="hero-layout grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                  Available for opportunities
                </span>
              </div>

              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-2 leading-none"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <span className="text-foreground">Hoang</span>
                <br />
                <span className="text-primary">Van Anh</span>
              </h1>

              <div className="flex items-center gap-2 mt-5 mb-6">
                <div className="h-px w-8 bg-primary/40" />
                <p className="font-mono text-sm text-muted-foreground">
                  <span className="text-accent">AI Engineer</span>
                  <span className="text-muted-foreground/40 mx-2">/</span>
                  <span className="text-primary/70">Reinforcement Learning</span>
                  <span className="text-muted-foreground/40 mx-2">/</span>
                  <span className="text-foreground/50">ML Systems</span>
                </p>
              </div>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 max-w-xl">
                I like taking models from experiment to a working system. I
                work hands-on with{" "}
                <span className="text-foreground font-medium">
                  reinforcement learning
                </span>{" "}
                (a LinUCB contextual bandit for in-app personalization, Deep
                Q-Networks),{" "}
                <span className="text-foreground font-medium">
                  computer vision
                </span>{" "}
                and{" "}
                <span className="text-foreground font-medium">
                  speech &amp; LLM pipelines
                </span>
                , and build the services around them with FastAPI, Redis,
                Docker and AWS.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 max-w-xl">
                I measure results against baselines on held-out data, so the
                numbers show whether a model really helps.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Python",
                  "PyTorch",
                  "FastAPI",
                  "Redis",
                  "Docker",
                  "AWS",
                ].map((t) => (
                  <TerminalBadge key={t} text={t} color="#285fba" />
                ))}
              </div>

              <div className="hero-actions">
                <button onClick={() => scrollTo("projects")} className="btn btn--primary">
                  View Projects
                  <ChevronRight size={16} />
                </button>
                <a href={CV_URL} download="CV_HOANGVANANH.pdf" className="btn btn--secondary">
                  <Download size={15} />
                  Download CV
                </a>
              </div>

              <div className="hero-contact">
                <ContactInfo />
                <SocialLinks />
              </div>
            </div>

            {/* Avatar card */}
            <div className="portrait-wrap flex justify-center lg:justify-end">
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
                    alt="Hoang Van Anh" width={320} height={320} fetchPriority="high"
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
                    background: "rgba(255,255,255,0.95)",
                    borderColor: "rgba(59,130,246,0.3)",
                  }}
                >
                  <div className="text-lg font-bold text-primary font-mono">
                    {PROJECTS.length}
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    projects
                  </div>
                </div>
                <div
                  className="absolute -right-14 bottom-12 px-3 py-2 rounded-lg border backdrop-blur-sm text-center"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    borderColor: "rgba(6,182,212,0.3)",
                  }}
                >
                  <div
                    className="text-lg font-bold font-mono"
                    style={{ color: "#087d91" }}
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
                    background: "rgba(255,255,255,0.95)",
                    borderColor: "rgba(129,140,248,0.3)",
                  }}
                >
                  <div className="text-xs font-mono text-foreground/70">
                    <span className="text-indigo-400">AI Engineer</span> · Ho
                    Chi Minh City
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick stats row */}
          <div className="mt-20 lg:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "2", label: "AI & cloud internships", color: "#285fba" },
              { value: String(PROJECTS.length), label: "Featured projects", color: "#087d91" },
              { value: String(CERTIFICATES.length), label: "Certifications", color: "#6454b5" },
              { value: "2026", label: "B.Sc. AI · FPT University", color: "#1679a5" },
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
            subtitle="Selected work, each result measured against a baseline on held-out data."
          />

          <div className="project-grid grid grid-cols-1 md:grid-cols-2 gap-6">
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

                <div className="relative p-5 flex flex-col h-full">
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
                        {proj.team && (
                          <span className="flex items-center gap-1 text-xs font-mono text-muted-foreground">
                            <Users size={11} />
                            {proj.team}
                          </span>
                        )}
                      </div>
                      <h3
                        className="text-base font-semibold text-foreground group-hover:text-primary transition-colors"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {proj.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  {/* Key results */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2">
                    {proj.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="px-2.5 py-2 rounded-lg border"
                        style={{
                          borderColor: proj.accentColor + "30",
                          background: proj.accentColor + "0d",
                        }}
                      >
                        <div
                          className="text-sm font-bold font-mono leading-tight"
                          style={{ color: proj.accentColor }}
                        >
                          {m.value}
                        </div>
                        <div className="text-xs text-muted-foreground leading-snug mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  {proj.note ? (
                    <p className="text-xs font-mono text-muted-foreground mb-4">
                      {proj.note}
                    </p>
                  ) : (
                    <div className="mb-4" />
                  )}

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
                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-border/30">
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
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
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
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-border/50 text-muted-foreground hover:text-foreground transition-colors"
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
              className="btn btn--ghost"
            >
              <Github size={15} />
              Explore more on GitHub
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
            subtitle="Where I studied artificial intelligence."
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-[220px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

            <div className="flex flex-col gap-8">
              {EDUCATION.map((edu) => {
                const colors: Record<string, string> = {
                  blue: "#285fba",
                  cyan: "#087d91",
                  indigo: "#6454b5",
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
                          <span className="edu-icon" style={{ color: c, background: c + "14" }}>{edu.icon}</span>
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
            subtitle="What I use to train models and ship them as services."
          />

          {/* Skills grid: details on the left, category picker on the right */}
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
                  aria-pressed={i === activeSkillCat}
                  className="skill-picker p-4 rounded-xl border text-left transition-all duration-200 hover:-translate-y-0.5"
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
                  <div className="text-sm font-semibold text-foreground mt-2 leading-tight">
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
                            s.level >= 85 ? 1 : s.level >= 70 ? 0.9 : 0.8,
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
              <ToolMarquee tools={TOOLS.slice(0, 10)} direction="left" />
              {/* Row 2 — scrolls right */}
              <ToolMarquee tools={TOOLS.slice(10)} direction="right" />
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
            index="04 // experience"
            title="Experience & Certificates"
            subtitle="Internships, training programs, and professional certifications."
          />

          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">
            {/* Activities */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Activity size={16} className="text-primary" />
                <h3 className="font-mono text-sm text-muted-foreground">
                  <span className="text-primary">//</span> Experience &
                  Programs
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {ACTIVITIES.map((act) => {
                  const colors: Record<string, string> = {
                    blue: "#285fba",
                    cyan: "#087d91",
                    indigo: "#6454b5",
                    sky: "#1679a5",
                  };
                  const c = colors[act.color];
                  const typeColors: Record<string, string> = {
                    Internship: "#285fba",
                    Program: "#6454b5",
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
                      {act.bullets.length > 0 && (
                        <ul className="flex flex-col gap-1.5 mb-3 ml-11">
                          {act.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
                            >
                              <ChevronRight
                                size={14}
                                className="shrink-0 mt-1"
                                style={{ color: c }}
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
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
                        {cert.date && (
                          <>
                            <span
                              className="text-xs font-mono"
                              style={{ color: cert.color }}
                            >
                              {cert.date}
                            </span>
                            <span className="text-muted-foreground/40 text-xs">
                              ·
                            </span>
                          </>
                        )}
                        <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                          Verify credential
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
      <footer id="contact" className="site-footer relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="footer-card">
            <div className="footer-card__text">
              <h2 style={{ fontFamily: "'Outfit', sans-serif" }}>
                Let&apos;s build something together
              </h2>
              <p>
                Open to AI Engineer roles and to working together on ML
                systems, reinforcement learning, and applied AI.
              </p>
              <a href={CV_URL} download="CV_HOANGVANANH.pdf" className="btn btn--primary footer-card__cv">
                <Download size={15} />
                Download CV
              </a>
            </div>
            <div className="footer-card__contact">
              <ContactInfo />
              <SocialLinks />
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Hoang Van Anh</span>
            <nav aria-label="Footer navigation" className="footer-bottom__nav">
              {NAV_ITEMS.map((item) => (
                <button key={item.id} onClick={() => scrollTo(item.id)}>
                  {item.label}
                </button>
              ))}
            </nav>
            <button onClick={() => scrollTo("home")} className="footer-bottom__top">
              Back to top <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
