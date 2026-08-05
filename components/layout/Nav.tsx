"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "./navLinks";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container">
        <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
          <span className="nav-brand-mark">
            <span className="brand-doc">Doc</span>
            <span className="brand-wizard">Wizard</span>
          </span>
        </Link>

        <nav>
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <Link href="#" className="btn btn-ghost">
            Sign In
          </Link>
          <Link href="#" className="btn btn-primary">
            Get Started Free
          </Link>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`container mobile-menu${open ? " open" : ""}`} id="mobileMenu">
        <ul className="mobile-nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
          <Link href="#" className="btn btn-outline" onClick={() => setOpen(false)}>
            Sign In
          </Link>
          <Link href="#" className="btn btn-primary" onClick={() => setOpen(false)}>
            Get Started Free
          </Link>
        </div>
      </div>
    </header>
  );
}
