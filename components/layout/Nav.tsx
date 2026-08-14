"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "./navLinks";
import Image from "next/image";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-bar">
        <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
          <Image src="/docs/assets/docwizard-logo-alpha.png" alt="DocWizard Logo" width={85} height={60} />
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
          <Link href="https://app.docwizard.co/sign-in" className="btn btn-ghost">
            Sign In
          </Link>
          <Link href="https://app.docwizard.co/sign-in" className="btn btn-primary">
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

      </div>
    </header>
  );
}
