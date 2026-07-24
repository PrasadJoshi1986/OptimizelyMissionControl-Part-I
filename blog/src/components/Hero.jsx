const CalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

export default function Hero() {
  return (
    <div className="post-hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <div className="hero-tag">
          <div className="hero-tag-dot" />
          Optimizely · Cloud Infrastructure
        </div>
        <h1 className="post-title">Optimizely Mission Control</h1>
        <p className="post-subtitle">
          A practical guide to managing cloud environments — restart sites, back up databases, and more.
        </p>
        <div className="hero-meta">
          <div className="meta-item">
            <img src="/profile.jpg" alt="Prasad Joshi" className="hero-avatar" />
            <span>Prasad Joshi</span>
          </div>
          <div className="meta-item"><CalIcon /> August 4, 2025</div>
          <div className="meta-item"><ClockIcon /> 5 min read</div>
        </div>
      </div>
    </div>
  );
}
