import Link from 'next/link';
import { SiteFooter, SiteHeader } from './site-header';

const performanceStats = [
  { value: '24/7', label: 'Operational support' },
  { value: 'Elite', label: 'Crew standards' },
  { value: 'Mission', label: 'Focused execution' },
  { value: 'Private', label: 'Client experience' },
];

const serviceCards = [
  {
    title: 'Executive Charter',
    text: 'Private, efficient, and discreet travel for executives, teams, and VIP clients.',
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
    text: 'Reliable support infrastructure built for precise and organized execution.',
  },
  {
    title: 'VIP & Group Travel',
    text: 'Tailored travel experiences for high-value clients and corporate teams.',
  },
  {
    title: 'Mission-Ready Aviation Support',
    text: 'Operational support crafted around precision, compliance, and professionalism.',
  },
];

const testimonials = [
  {
    quote:
      'Warrior Executive Aviation delivers the kind of polished, professional experience you expect from a true private aviation partner. Every detail was handled with precision and discretion.',
    author: 'Executive Client',
  },
  {
    quote:
      'We needed a dependable aviation partner who understood both service and operational discipline. Warrior Executive Aviation delivered without compromise.',
    author: 'Corporate Client',
  },
  {
    quote:
      'From scheduling to arrival, the experience felt refined, secure, and expertly managed. It set the standard for executive travel.',
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
              <p className="eyebrow">Private aviation, tailored to your mission</p>
              <h1>Luxury Executive Travel, Elevated.</h1>
              <p className="lede">
                Warrior Executive Aviation delivers discreet, premium air travel and mission-ready support for business leaders, families, and high-value operations.
              </p>

              <div className="button-row">
                <Link href="/contact" className="button button-primary">
                  Request a Quote
                </Link>
                <Link href="/services" className="button button-ghost-light">
                  Explore Services
                </Link>
              </div>

              <div className="trust-strip">
                <span>Executive Air Travel</span>
                <span>Crew Readiness</span>
                <span>Safety-First Culture</span>
                <span>Tailored Service</span>
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-card">
                <span className="label">Private Flight Portfolio</span>
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
                    <small>Ready</small>
                  </div>
                </div>
                <div className="mini-metrics">
                  <div>
                    <span>Availability</span>
                    <strong>On Demand</strong>
                  </div>
                  <div>
                    <span>Experience</span>
                    <strong>Executive Grade</strong>
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
              <p className="eyebrow dark">Why Warrior</p>
              <h2>Precision-crafted travel for those who expect more.</h2>
            </div>
            <div>
              <p>
                At Warrior Executive Aviation, we combine professional aviation expertise with a disciplined mindset built for executive travel, crew readiness, and mission-critical support. Every detail is designed around comfort, punctuality, and a refined passenger experience.
              </p>
              <p>
                We provide a seamless aviation experience for clients who value privacy, professionalism, and excellence.
              </p>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow dark">Services</p>
              <h2>Tailored aviation solutions for modern travel.</h2>
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
              <h2>Aircraft selected for comfort, capability, and confidence.</h2>
            </div>

            <div className="fleet-highlight">
              <div className="fleet-copy">
                <h3>Executive-grade aircraft for every mission.</h3>
                <p>
                  Our fleet is selected for comfort, performance, and flexibility, delivering a premium travel experience built around your schedule, preferences, and expectations.
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
              <h2>Safety is the foundation of every flight.</h2>
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
              <h2>An elite team with a mission-first mindset.</h2>
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
              <p className="eyebrow dark">Client experience</p>
              <h2>Trusted by clients who value discretion and reliability.</h2>
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
              <h2>Private travel, refined for your time and standards.</h2>
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
