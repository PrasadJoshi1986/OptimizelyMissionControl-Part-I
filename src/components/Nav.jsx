export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#">
          <img src="/profile.jpg" alt="Prasad Joshi" className="nav-avatar" />
          Prasad Joshi
        </a>
        <span className="nav-sep">/</span>
        <span className="nav-crumb">Optimizely</span>
        <div className="nav-spacer" />
        <span className="nav-pill">Part I of III</span>
      </div>
    </nav>
  );
}
