import Link from 'next/link';
import { SiteFooter, SiteHeader } from '../components/site-header';

const services = [
  'Executive charter',
  'Corporate travel support',
  'Crew staffing and operations support',
  'VIP travel coordination',
  'Training readiness support',
  'Mission-focused operational assistance',
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="page-hero small-hero">
          <div className="container">
            <p className="eyebrow">Services</p>
            <h1>Our Services</h1>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading narrow">
              <p className="eyebrow dark">Tailored aviation solutions</p>
              <h2>Support built for travel, operations, and crew readiness.</h2>
            </div>

            <div className="card-grid two-up">
              <article className="info-card">
                <h3>Executive Charter</h3>
                <p>Private, efficient, and flexible travel solutions for executives, teams, and VIP clients.</p>
              </article>
              <article className="info-card">
                <h3>Corporate Travel Support</h3>
                <p>Seamless travel arrangements that align with business schedules, pressure, and discretion.</p>
              </article>
              <article className="info-card">
                <h3>Crew Support & Staffing</h3>
                <p>Highly skilled aviation personnel support for mission continuity and operating efficiency.</p>
              </article>
              <article className="info-card">
                <h3>VIP Travel Coordination</h3>
                <p>Premium support tailored to high-value passengers and high-expectation travel plans.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container two-column">
            <div>
              <h2>Service categories built around excellence.</h2>
            </div>
            <div>
              <ul className="check-list">
                {services.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-box compact">
              <div>
                <p className="eyebrow dark">Start a conversation</p>
                <h2>Tell us what you need and we’ll build the right travel solution.</h2>
              </div>
              <Link href="/contact" className="button button-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
