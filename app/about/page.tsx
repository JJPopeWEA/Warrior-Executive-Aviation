import Link from 'next/link';
import { SiteFooter, SiteHeader } from './components/site-header';

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="page-hero small-hero">
          <div className="container">
            <p className="eyebrow">About</p>
            <h1>About Warrior Executive Aviation</h1>
          </div>
        </section>

        <section className="section">
          <div className="container two-column">
            <div>
              <h2>Mission-driven aviation with premium standards.</h2>
            </div>
            <div>
              <p>
                Warrior Executive Aviation is dedicated to delivering premium aviation experiences built around trust, operational excellence, and a disciplined mindset. Our mission is to provide executive travel, crew support, and mission-focused aviation services with the professionalism clients expect from a distinguished aviation partner.
              </p>
              <p>
                We understand that reliable service is not just about transportation — it is about consistency, safety, preparation, and a high level of attention to detail. Every flight and every interaction reflects the standards we hold for our clients and our team.
              </p>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-heading narrow">
              <p className="eyebrow dark">Our values</p>
              <h2>Precision. Integrity. Safety. Reliability.</h2>
            </div>

            <div className="card-grid four-up">
              <article className="info-card">
                <h3>Precision</h3>
                <p>Every operation is planned and executed with care, attention, and purpose.</p>
              </article>
              <article className="info-card">
                <h3>Integrity</h3>
                <p>We deliver on promises and uphold a standard of professionalism in every engagement.</p>
              </article>
              <article className="info-card">
                <h3>Safety</h3>
                <p>Safety remains at the center of every decision, process, and operational detail.</p>
              </article>
              <article className="info-card">
                <h3>Reliability</h3>
                <p>Our clients rely on us for consistent, dependable service built around readiness.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-box compact">
              <div>
                <p className="eyebrow dark">Let’s talk</p>
                <h2>Discuss your travel or partnership needs.</h2>
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
