const ribbons = Array.from({ length: 9 }, (_, i) => {
  const y = 155 + i * 11;
  return `M-80 ${y + 20} C160 ${y - 95} 290 ${y + 100} 565 ${y + 5} S960 ${y - 90} 1180 ${y - 5} S1400 ${y + 50} 1520 ${y - 30}`;
});

export function Signature() {
  return (
    <div className="footer-landscape" aria-label="Hoang Van Anh">
      <div className="signature-lockup" aria-hidden="true">
        <span className="signature-given">Hoang Van</span>
        <div className="signature-main">
          <span className="signature-anh">Anh</span>
          <svg className="signature-flourish" viewBox="0 0 800 260" preserveAspectRatio="none">
            <defs><linearGradient id="signature-gold"><stop stopColor="#b88c50" /><stop offset=".55" stopColor="#dfbd86" /><stop offset="1" stopColor="#b88c50" /></linearGradient></defs>
            <path d="M170 166 C100 129 32 177 70 213 C133 273 284 76 470 90 C509 93 537 108 550 128 C515 93 466 91 415 108 C274 155 143 264 81 230 C36 203 75 157 117 158 C135 158 151 160 170 166Z" fill="url(#signature-gold)" />
          </svg>
        </div>
        <span className="signature-caption">AI ENGINEER &amp; SOFTWARE DEVELOPER</span>
      </div>
      <svg className="footer-waves" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="ribbon-color"><stop stopColor="#75a5bf" /><stop offset=".5" stopColor="#d7b47b" /><stop offset="1" stopColor="#8ba9bd" /></linearGradient>
          <linearGradient id="ribbon-fill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#dce7ed" stopOpacity=".38" /><stop offset="1" stopColor="#f2ede4" stopOpacity=".8" /></linearGradient>
        </defs>
        <g className="wave-back">
          <path d={`${ribbons[0]} L1520 400 L-80 400Z`} fill="url(#ribbon-fill)" />
          {ribbons.map((d, i) => <path key={i} d={d} fill="none" stroke="url(#ribbon-color)" strokeWidth={i === 0 ? 1.5 : .7} opacity={i === 0 ? .65 : .18} />)}
        </g>
      </svg>
    </div>
  );
}
