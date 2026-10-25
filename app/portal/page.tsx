import Link from 'next/link';
import { SiteFooter, SiteHeader } from '../components/site-header';

const portalCards = [
  { title: 'Dashboard', text: 'View upcoming flights, assignments, and current operational priorities.' },
  { title: 'Schedule', text: 'Track flights, rotations, and crew assignments in one streamlined view.' },
  { title: 'Training', text: 'Monitor certifications, recurring requirements, and compliance deadlines.' },
  { title: 'Documents', text: 'Access SOPs, manuals, flight packets, and operational resources.' },
  { title: 'Briefing Center', text: 'Review flight information, airport notes, and mission-ready briefings.' },
  { title: 'Announcements', text: 'Stay current with updates from operations, leadership, and the team.' },
];

export default function PortalPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="page-hero portal-hero">
          <div className="container portal-hero-inner">
            <div>
              <p className="eyebrow">Crew portal</p>
              <h1>Welcome back.</h1>
              <p className="lede">
                Your operational overview, training progress, and flight readiness resources are all here.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="card-grid three-up">
              {portalCards.map((card) => (
                <article key={card.title} className="info-card">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container two-column">
            <div>
              <h2>Operations at a glance</h2>
            </div>
            <div>
              <ul className="check-list">
                <li>Upcoming flights</li>
                <li>Training reminders</li>
                <li>Required documents</li>
                <li>Operational notices</li>
                <li>Quick access tools</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-box compact">
              <div>
                <p className="eyebrow dark">Secure access</p>
                <h2>Access your crew tools and readiness information.</h2>
              </div>
              <Link href="/contact" className="button button-primary">
                Request Access
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
