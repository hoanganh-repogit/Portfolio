import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";

// Email and phone are shown as copyable text in ContactInfo, not as links here.
const links = [
  { label: "GitHub", href: "https://github.com/hoanganh-repogit", icon: FaGithub, brand: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ho%C3%A0ng-v%C4%83n-anh-831421266/", icon: FaLinkedinIn, brand: "linkedin" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61593055485654", icon: FaFacebookF, brand: "facebook" },
];

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return <div className={`social-links ${compact ? "social-links--compact" : ""}`}>
    {links.map(({ label, href, icon: Icon, brand }) => <a
      key={label} href={href} className={`social-link social-link--${brand}`}
      aria-label={`${label} — Hoang Van Anh`} title={label}
      target="_blank" rel="noopener noreferrer"
    >
      <span className="social-icon"><Icon size={18} /></span>
      {!compact && <><span>{label}</span><ArrowUpRight size={13} className="social-arrow" /></>}
    </a>)}
  </div>;
}
