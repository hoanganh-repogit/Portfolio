import { useState } from "react";
import { Check, Copy, Mail, Phone } from "lucide-react";
import { EMAIL, PHONE } from "./data";

// Readable form of a 10-digit Vietnamese number: 0375 956 650.
const formatPhone = (raw: string) => raw.replace(/^(\d{4})(\d{3})(\d{3})$/, "$1 $2 $3");

function CopyRow({ icon, label, value, display }: { icon: React.ReactNode; label: string; value: string; display: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Clipboard API needs a secure context; fall back to selecting the text.
      const range = document.createRange();
      const node = document.getElementById(`contact-${label}`);
      if (!node) return;
      range.selectNodeContents(node);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand("copy");
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="contact-row">
      <span className="contact-row__icon" aria-hidden="true">{icon}</span>
      <span className="contact-row__text">
        <span className="contact-row__label">{label}</span>
        <span id={`contact-${label}`} className="contact-row__value">{display}</span>
      </span>
      <button type="button" onClick={copy} className="contact-row__copy" aria-label={`Copy ${label.toLowerCase()}`}>
        {copied ? <Check size={14} /> : <Copy size={14} />}
        <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
      </button>
    </div>
  );
}

export function ContactInfo() {
  return (
    <div className="contact-info">
      <CopyRow icon={<Mail size={16} />} label="Email" value={EMAIL} display={EMAIL} />
      <CopyRow icon={<Phone size={16} />} label="Phone" value={PHONE} display={formatPhone(PHONE)} />
    </div>
  );
}
