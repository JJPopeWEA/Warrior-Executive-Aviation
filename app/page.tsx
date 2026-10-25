import Link from 'next/link';
import { SiteFooter, SiteHeader } from './site-header';

const performanceStats = [
  { value: '24/7', label: 'Operational support' },
  { value: 'Elite', label: 'Crew standards' },
  { value: 'Mission', label: 'Focused execution' },
  { value: 'Premium', label: 'Client experience' },
];

const serviceCards = [
  {
    title: 'Executive Charter',
    text: 'Private, efficient, and flexible travel for executives, teams, and VIP clients.',
  },
  {
    title: 'Crew Support & Staffing',
    text: 'Highly capable aviation personnel support for operations, readiness, and mission continuity.',
  },
  {
    title: 'Training & Readiness',
    text: 'Professional crew development, standards, and qualification support.',
  },
  {
    title: 'Flight Operations Support',
    text: 'Reliable support infrastructure for efficient and organized flight execution.',
  },
  {
    title: 'VIP & Group Travel',
    text: 'Tailored travel experiences for high-value clients and corporate teams.',
  },
  {
    title: 'Mission-Ready Aviation Support',
    text: 'Operational support built around precision, compliance, and professionalism.',
  },
];

const testimonials = [
  {
    quote:
      'Warrior Executive Aviation brings the professionalism and precision you expect from a premium aviation partner. Every detail was handled with care, and the experience exceeded expectations.',
    author: 'Executive Client',
  },
  {
    quote:
      'We needed a dependable aviation partner who understood both service and operational discipline. Warrior Executive Aviation delivered.',
    author: 'Corporate Client',
  },
  {
    quote:
      'We value trust, readiness, and professionalism, and this team consistently delivers.',
    author: 'Private Traveler',
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Executive aviation built for precision</p>
              <h1>Warrior Executive Aviation</h1>
              <p className="lede">
                Premium flight operations, elite crew support, and dependable aviation experiences for executives, teams, and mission-focused travel.
              </p>

              <div className="button-row">
                <Link href="/contact" className="button button-primary">
                  Book a Flight
                </Link>
                <Link href="/services" className="button button-ghost-light">
                  Explore Services
                </Link>
              </div>

              <div className="trust-strip">
                <span>Executive Air Travel</span>
                <span>Crew Readiness</span>
                <span>Safety-First Culture</span>
                <span>Premium Service</span>
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-card">
                <span className="label">Operations Snapshot</span>
                <div className="panel-stats">
                  <div>
                    <strong>24/7</strong>
                    <small>Support</small>
                  </div>
                  <div>
                    <strong>Elite</strong>
                    <small>Standards</small>
                  </div>
                  <div>
                    <strong>Mission</strong>
                    <small>Focused</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="container stats-grid">
            {performanceStats.map((stat) => (
              <div key={stat.label} className="stat-box">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container two-column">
            <div>
              <p className="eyebrow dark">Why choose us</p>
              <h2>Built for performance. Prepared for every mission.</h2>
            </div>
            <div>
              <p>
                At Warrior Executive Aviation, we combine professional aviation expertise with a disciplined mindset built for executive travel, crew readiness, and mission-critical support. Every detail is designed around safety, punctuality, and an elevated passenger experience.
              </p>
              <p>
                We provide a seamless aviation experience for clients who value reliability, professionalism, and excellence.
              </p>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow dark">Services</p>
              <h2>Aviation solutions for modern travel and operational demands</h2>
            </div>

            <div className="card-grid three-up">
              {serviceCards.map((card) => (
                <article key={card.title} className="info-card">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow dark">Fleet</p>
              <h2>Aircraft built for comfort, capability, and confidence</h2>
            </div>

            <div className="fleet-highlight">
              <div className="fleet-copy">
                <h3>Executive-grade aircraft for every mission.</h3>
                <p>
                  Our fleet is selected for comfort, performance, and flexibility, offering a premium travel experience built around your schedule and mission.
                </p>
                <ul>
                  <li>Light and midsize executive aircraft</li>
                  <li>Comfortable cabin layouts</li>
                  <li>Efficient long-range travel</li>
                  <li>Flexible service for scheduled and on-demand travel</li>
                </ul>
                <Link href="/fleet" className="button button-primary">
                  Learn More
                </Link>
              </div>
              <div className="fleet-visual">
                <div className="plane-card">Aircraft profile</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-heading narrow">
              <p className="eyebrow dark">Safety & standards</p>
              <h2>Safety is the foundation of every flight</h2>
            </div>

            <div className="two-column list-column">
              <div>
                <p>
                  At Warrior Executive Aviation, safety is not just a requirement — it is a culture. From crew readiness to operational discipline, every system and process is designed to meet the highest standards of professionalism and reliability.
                </p>
              </div>
              <div>
                <ul className="check-list">
                  <li>Safety-first operational procedures</li>
                  <li>Crew discipline and readiness</li>
                  <li>Maintenance-focused oversight</li>
                  <li>Professional compliance practices</li>
                  <li>Continuous training and improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow dark">Our crew</p>
              <h2>An elite team with a mission-first mindset</h2>
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
            <div className="section-heading">
              <p className="eyebrow dark">Testimonials</p>
              <h2>Trusted by clients who value reliability and discretion</h2>
            </div>

            <div className="card-grid three-up">
              {testimonials.map((item) => (
                <article key={item.author} className="quote-card">
                  <p>“{item.quote}”</p>
                  <strong>{item.author}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-box">
            <div>
              <p className="eyebrow dark">Ready to fly</p>
              <h2>Ready to fly with a partner built for precision?</h2>
            </div>

            <div className="cta-actions">
              <Link href="/contact" className="button button-primary">
                Request a Consultation
              </Link>
              <Link href="/careers" className="button button-ghost">
                Join Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
