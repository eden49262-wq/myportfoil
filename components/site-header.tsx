"use client";

import { ArrowDownToLine, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["About", "#about"],
  ["Stack", "#stack"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <a
          href="#home"
          className="brand"
          aria-label="Eden Abebaw, home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark">EA</span>
          <span className="brand-name">Eden Abebaw</span>
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primary navigation"
          className={`navigation${menuOpen ? " navigation-open" : ""}`}
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="resume-link" href="/resume.pdf" download>
            <ArrowDownToLine size={14} />
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
