const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{marginTop:1,flexShrink:0}}>
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

export default function RefBox({ href, label }) {
  return (
    <div className="ref-box">
      <InfoIcon />
      <span>
        <strong>Reference: </strong>
        <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
      </span>
    </div>
  );
}
