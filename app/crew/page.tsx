import Link from 'next/link';
import { SiteFooter, SiteHeader } from '../components/site-header';

export default function CrewPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="page-hero small-hero">
          <div className="container">
            <p className="eyebrow">Crew</p>
            <h1>Our Crew</h1>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading narrow">
              <p className="eyebrow dark">Experience, discipline, and professionalism</p>
              <h2>A team selected for excellence and operational readiness.</h2>
            </div>

            <div className="card-grid three-up">
              <article className="team-card">
                <div className="team-avatar">Pilots</div>
                <h3>Flight Crew</h3>
                <p>Experienced professionals committed to safety, readiness, and premium service.</p>
              </article>
              <article className="team-card">
                <div className="team-avatar">Ops</div>
                <h3>Operations</h3>
                <p>Mission-focused support that keeps every trip organized, timely, and efficient.</p>
              </article>
              <article className="team-card">
                <div className="team-avatar">Team</div>
                <h3>Support Staff</h3>
                <p>Professional, service-minded team members who deliver a refined customer experience.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="cta-box compact">
              <div>
                <p className="eyebrow dark">Join the mission</p>
                <h2>Work with professionals who value excellence and readiness.</h2>
              </div>
              <Link href="/careers" className="button button-primary">
                View Careers
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
