import Link from 'next/link';
import { SiteFooter, SiteHeader } from '../components/site-header';

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="page-hero small-hero">
          <div className="container">
            <p className="eyebrow">Contact</p>
            <h1>Contact Warrior Executive Aviation</h1>
          </div>
        </section>

        <section className="section">
          <div className="container contact-grid">
            <div>
              <h2>Let’s plan your next flight or partnership.</h2>
              <p>We’d be glad to discuss your travel, operations, or crew needs.</p>
              <ul className="contact-list">
                <li><a href="mailto:info@warriorexecutiveaviation.com">info@warriorexecutiveaviation.com</a></li>
                <li><a href="tel:+1-800-555-0147">(800) 555-0147</a></li>
                <li>Regional operations support</li>
              </ul>
            </div>

            <form className="contact-form">
              <div className="field-row">
                <label>
                  Full Name
                  <input type="text" placeholder="Your name" />
                </label>
                <label>
                  Company
                  <input type="text" placeholder="Company name" />
                </label>
              </div>

              <div className="field-row">
                <label>
                  Email
                  <input type="email" placeholder="you@example.com" />
                </label>
                <label>
                  Phone
                  <input type="tel" placeholder="(555) 123-4567" />
                </label>
              </div>

              <label>
                Inquiry Type
                <select defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option>Flight Inquiry</option>
                  <option>Operations Support</option>
                  <option>Career Opportunity</option>
                  <option>General Inquiry</option>
                </select>
              </label>

              <label>
                Message
                <textarea rows={6} placeholder="Tell us how we can help"></textarea>
              </label>

              <button type="submit" className="button button-primary">Submit Inquiry</button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
