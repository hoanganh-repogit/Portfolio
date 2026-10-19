import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { ArrowUpRight, Mail } from "lucide-react";

const links = [
  { label: "GitHub", href: "https://github.com/hoanganh-repogit", icon: FaGithub, brand: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ho%C3%A0ng-v%C4%83n-anh-831421266/", icon: FaLinkedinIn, brand: "linkedin" },
  { label: "Facebook", href: "https://www.facebook.com/hoang.van.anh.271908", icon: FaFacebookF, brand: "facebook" },
  { label: "Email", href: "mailto:hoangvananhgithub@gmail.com", icon: Mail, brand: "email" },
];

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return <div className={`social-links ${compact ? "social-links--compact" : ""}`}>
    {links.map(({ label, href, icon: Icon, brand }) => <a
      key={label} href={href} className={`social-link social-link--${brand}`}
      aria-label={label === "Email" ? "Email Hoang Van Anh" : `${label} — Hoang Van Anh`}
      title={label} target={brand === "email" ? undefined : "_blank"}
      rel={brand === "email" ? undefined : "noopener noreferrer"}
    >
      <span className="social-icon"><Icon size={18} /></span>
      {!compact && <><span>{label}</span><ArrowUpRight size={13} className="social-arrow" /></>}
    </a>)}
  </div>;
}
