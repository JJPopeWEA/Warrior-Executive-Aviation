import Link from 'next/link';
import { SiteFooter, SiteHeader } from '../components/site-header';

export default function SafetyPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="page-hero small-hero">
          <div className="container">
            <p className="eyebrow">Safety</p>
            <h1>Safety First</h1>
          </div>
        </section>

        <section className="section">
          <div className="container two-column">
            <div>
              <h2>Operational discipline is the foundation of every mission.</h2>
            </div>
            <div>
              <p>
                At Warrior Executive Aviation, safety is embedded in how we plan, operate, and support every flight. We maintain a culture of readiness, accountability, and continuous improvement.
              </p>
              <p>
                Our safety standards emphasize training and compliance, risk-conscious planning, and professional execution at every level.
              </p>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="card-grid three-up">
              <article className="info-card">
                <h3>Training & Compliance</h3>
                <p>Strong operational discipline begins with a well-prepared and continuously trained team.</p>
              </article>
              <article className="info-card">
                <h3>Maintenance Awareness</h3>
                <p>Our process prioritizes aircraft readiness, operational confidence, and consistent oversight.</p>
              </article>
              <article className="info-card">
                <h3>Risk-Conscious Planning</h3>
                <p>Every flight is supported by detailed planning, evaluation, and accountability.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-box compact">
              <div>
                <p className="eyebrow dark">Professional operations</p>
                <h2>Safety and service work together in every movement.</h2>
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
