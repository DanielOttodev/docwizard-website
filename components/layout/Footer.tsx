import Link from "next/link";
import { NAV_LINKS } from "./navLinks";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <span className="nav-brand-mark">
                <span className="brand-doc">Doc</span>
                <span className="brand-wizard">Wizard</span>
              </span>
            </div>
            <p className="tagline">Generate Word documents automatically — without the copy-paste.</p>
          </div>

          <div>
            <h4>Product</h4>
            <ul className="footer-links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul className="footer-links">
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DocWizard. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
