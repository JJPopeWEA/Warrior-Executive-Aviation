import Link from 'next/link';
import { SiteFooter, SiteHeader } from '../components/site-header';

export default function FleetPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="page-hero small-hero">
          <div className="container">
            <p className="eyebrow">Fleet</p>
            <h1>Our Fleet</h1>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading narrow">
              <p className="eyebrow dark">Comfort, capability, and confidence</p>
              <h2>Executive air travel designed around your mission.</h2>
            </div>

            <div className="card-grid three-up">
              <article className="info-card large-card">
                <h3>Light Executive Aircraft</h3>
                <p>Efficient and agile aircraft ideal for business travel, rapid departures, and flexible scheduling.</p>
              </article>
              <article className="info-card large-card">
                <h3>Midsize Jet</h3>
                <p>Balanced cabin comfort and performance for longer trips, team travel, and premium client movement.</p>
              </article>
              <article className="info-card large-card">
                <h3>VIP & Special Mission Support</h3>
                <p>Aircraft positioning and operations built around discretion, comfort, and mission readiness.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container two-column">
            <div>
              <h2>Aircraft selected for performance and passenger experience.</h2>
            </div>
            <div>
              <ul className="check-list">
                <li>Executive cabin comfort</li>
                <li>Efficient travel planning</li>
                <li>Flexible scheduling</li>
                <li>Premium passenger experience</li>
                <li>Dependable performance</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-box compact">
              <div>
                <p className="eyebrow dark">Request a quote</p>
                <h2>Let’s build the right aircraft plan for your needs.</h2>
              </div>
              <Link href="/contact" className="button button-primary">
                Contact Operations
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
