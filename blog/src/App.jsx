import './index.css';
import ProgressBar from './components/ProgressBar';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ImgFigure from './components/ImgFigure';
import RefBox from './components/RefBox';
import Steps from './components/Steps';
import useScrollReveal from './hooks/useScrollReveal';
import { actions, restartSteps1, restartSteps2, backupSteps1, backupSteps2 } from './data/post';

/* ── icons ── */
const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const BoltIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const RefreshIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
  </svg>
);
const DbIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);
const BellIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,marginTop:2}}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);

/* ── section wrapper with reveal ── */
function Section({ children, delay = 0 }) {
  const ref = useScrollReveal();
  return (
    <div className="reveal" ref={ref} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <>
      <ProgressBar />
      <Nav />
      <div className="page">
        <Hero />

        <article className="post-body">
          {/* ── INTRO ── */}
          <Section>
            <p>
              Optimizely provides powerful tools that make it easy to build, release, and manage cloud
              infrastructure efficiently.
            </p>
          </Section>

          {/* ── ACCESS ── */}
          <Section delay={50}>
            <h2>
              <span className="h2-icon"><LockIcon /></span>
              Optimizely Mission Control Access
            </h2>
            <p>
              To use this tool, an <strong>Opti ID</strong> is required. Once you have an Opti ID, request
              that your organization grants access to your user account. Alternatively, you can raise a
              ticket with the <strong>Optimizely Support</strong> team along with approval from your project
              organization.
            </p>
          </Section>

          {/* ── KEY ACTIONS ── */}
          <Section delay={80}>
            <h2>
              <span className="h2-icon"><BoltIcon /></span>
              Key Actions
            </h2>
            <p>
              Mission Control provides the following essential actions for managing your cloud environments:
            </p>
            <div className="action-grid">
              {actions.map((a, i) => (
                <div className="action-card" key={i}>
                  <div className="action-card-icon">{a.icon}</div>
                  <div className="action-card-text">
                    <strong>{a.label}</strong>
                    <span>{a.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <ImgFigure src="/images/Mission-Control-Actions.png" alt="Mission Control — available actions overview" />

          <Section>
            <p>Let&apos;s walk through each of these actions step by step.</p>
          </Section>

          <hr className="divider" />

          {/* ── RESTART SITE ── */}
          <Section>
            <h2>
              <span className="h2-icon"><RefreshIcon /></span>
              Restart Site
            </h2>
            <p>
              The <strong>Restart Site</strong> option is handy when a website restart is required due to
              configuration changes. For example, updates to the storage or search provider often require a
              restart. Additionally, if an integration job gets stuck, restarting the site restores normal
              functionality.
            </p>
            <h3>How to restart the website</h3>
            <Steps items={restartSteps1} startAt={1} />
          </Section>

          <ImgFigure src="/images/Mission-Control-Dashbord.png" alt="Mission Control — Customers dashboard" />

          <Steps items={restartSteps2} startAt={4} />

          <ImgFigure src="/images/Mission-Control-Instances.png" alt="Mission Control — Environment instances" />
          <ImgFigure src="/images/Restart-Website-Options-1.png" alt="Mission Control — Action dropdown" />
          <ImgFigure src="/images/Restart-Website-Options.png" alt="Mission Control — Restart site pop-up" />

          <RefBox
            href="https://support.optimizely.com/hc/en-us/articles/29755553302797-Restart-Site"
            label="Restart Site – Optimizely Support"
          />

          <hr className="divider" />

          {/* ── DATABASE BACKUP ── */}
          <Section>
            <h2>
              <span className="h2-icon"><DbIcon /></span>
              Database Backup
            </h2>
            <p>
              Using this option, you can take a backup from a Sandbox or Production instance and import it
              into the local environment to debug issues. The backup file is generated with a{' '}
              <code className="inline-code">.bacpac</code> extension.
            </p>
            <h3>Steps to take a backup</h3>
            <Steps items={backupSteps1} startAt={1} />
          </Section>

          <ImgFigure src="/images/Mission-Control-Instances.png" alt="Mission Control — Instances view" />
          <ImgFigure src="/images/Mission-Control-Database-backup-option.png" alt="Mission Control — Database Backup option" />

          <Steps items={backupSteps2} startAt={4} />

          <ImgFigure src="/images/Database-backup-Options.png" alt="Database backup — configuration options" />
          <ImgFigure src="/images/Mission-Control-Database-backup-complication.png" alt="Mission Control — Backup download link" />

          <RefBox
            href="https://support.optimizely.com/hc/en-us/articles/29756299053965-Database-Backup"
            label="Database Backup – Optimizely Support"
          />

          {/* ── COMING UP ── */}
          <Section>
            <div className="note-box">
              <BellIcon />
              <span>
                Stay tuned for <strong>Part II</strong> — covering Generate Database Credentials, Base Code
                Deploy, Extension Deployment, and Production Sync features.
              </span>
            </div>
          </Section>
        </article>

        {/* ── AUTHOR CARD ── */}
        <Section delay={60}>
          <div className="author-card">
            <img src="/profile.jpg" alt="Prasad Joshi" className="author-avatar-lg" />
            <div className="author-info">
              <strong>Prasad Joshi</strong>
              <span>Cloud, Configered Commerce &amp; CMS Engineer · Optimizely Specialist</span>
            </div>
            <span className="author-series">Series: Part I of II</span>
          </div>
        </Section>
      </div>
    </>
  );
}
