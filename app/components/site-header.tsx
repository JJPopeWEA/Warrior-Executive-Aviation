import './globals.css';
import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/fleet', label: 'Fleet' },
  { href: '/services', label: 'Services' },
  { href: '/safety', label: 'Safety' },
  { href: '/crew', label: 'Crew' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="Warrior Executive Aviation home">
          <span className="brand-mark">WEA</span>
          <span>
            <strong>Warrior Executive</strong>
            <small>Aviation</small>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link href="/portal" className="button button-ghost">
            Crew Portal
          </Link>
          <Link href="/contact" className="button button-primary">
            Book a Flight
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand brand-footer">
            <span className="brand-mark">WEA</span>
            <span>
              <strong>Warrior Executive</strong>
              <small>Aviation</small>
            </span>
          </div>
          <p>
            Executive aviation built for precision, safety, and service that exceeds expectations.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/fleet">Fleet</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/safety">Safety</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:info@warriorexecutiveaviation.com">info@warriorexecutiveaviation.com</a></li>
            <li><a href="tel:+1-800-555-0147">(800) 555-0147</a></li>
            <li>Regional operations support</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Warrior Executive Aviation</span>
        <span>Executive Aviation Built for Precision</span>
      </div>
    </footer>
  );
}
