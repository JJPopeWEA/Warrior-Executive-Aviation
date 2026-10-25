import Link from 'next/link';
import { SiteFooter, SiteHeader } from '../components/site-header';

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="page-hero small-hero">
          <div className="container">
            <p className="eyebrow">Careers</p>
            <h1>Join Our Team</h1>
          </div>
        </section>

        <section className="section">
          <div className="container two-column">
            <div>
              <h2>Dedicated professionals welcome.</h2>
            </div>
            <div>
              <p>
                Warrior Executive Aviation is seeking dedicated professionals who value excellence, discipline, and service. If you are committed to aviation operations, safety, and professional standards, we invite you to connect with our team.
              </p>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="card-grid three-up">
              <article className="info-card">
                <h3>Pilots</h3>
                <p>Professionals who prioritize safety, skill, and premium execution.</p>
              </article>
              <article className="info-card">
                <h3>Operations Staff</h3>
                <p>Dedicated team members who support safe and efficient travel operations.</p>
              </article>
              <article className="info-card">
                <h3>Support Roles</h3>
                <p>Service-focused professionals who contribute to streamlined aviation support.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-box compact">
              <div>
                <p className="eyebrow dark">Apply now</p>
                <h2>We are building a team for excellence.</h2>
              </div>
              <Link href="/contact" className="button button-primary">
                Apply Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
