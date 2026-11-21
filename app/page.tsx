import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  MoveUpRight,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Portrait } from "@/components/portrait";
import {
  AboutAndStack,
  ExperienceSection,
  ProjectSection,
  SectionHeading,
  StandardsSection,
} from "@/components/portfolio-sections";
import { SiteHeader } from "@/components/site-header";
import { socialLinks } from "@/components/portfolio-data";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero page-shell" id="home">
          <div className="hero-glow" />
          <div className="hero-copy">
            <div className="availability-pill">
              <span className="availability-dot" />
              Available for Software Engineering Roles
            </div>
            <p className="hero-pretitle mono">SOFTWARE ENGINEER &amp; FULL-STACK WEB DEVELOPER</p>
            <h1>
              I build software
              <br />
              that <span>moves you forward.</span>
            </h1>
            <p className="hero-summary">
              I&apos;m a Software Engineer &amp; Full-Stack Web Developer focused
              on turning complex ideas into intuitive, reliable products. I love
              building thoughtful web experiences where solid engineering and
              human-centered design work as one.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Engineering Work <ArrowRight size={15} />
              </a>
              <a className="button button-secondary" href="#contact">
                Get in Touch <MoveUpRight size={14} />
              </a>
            </div>
            <div className="hero-footnote">
              <span className="mono">FULL-STACK DEVELOPMENT</span>
              <span className="hero-footnote-divider" />
              <span className="mono">THOUGHTFUL BY DESIGN</span>
            </div>
          </div>
          <div className="hero-portrait">
            <span className="portrait-coordinate mono">ENGINEERING / FULL-STACK</span>
            <Portrait />
            <span className="portrait-index mono">ENGINEER / BUILDER / LIFELONG LEARNER</span>
          </div>
          <a className="scroll-cue mono" href="#about">
            SCROLL TO EXPLORE <ArrowDown size={13} />
          </a>
        </section>

        <div className="page-shell">
          <div className="principle-strip" aria-label="Engineering principles">
            <span><span className="principle-dot" /> Built for people</span>
            <span><span className="principle-dot" /> Designed to scale</span>
            <span><span className="principle-dot" /> Crafted with care</span>
            <span className="principle-index mono">01 — 04</span>
          </div>

          <AboutAndStack />
          <ProjectSection />
          <ExperienceSection />
          <StandardsSection />

          <section className="section contact-section" id="contact">
            <div className="contact-heading">
              <SectionHeading
                label="Let’s build something"
                title="Have a good problem? I’m listening."
                description="I’m open to software engineering roles, collaborations, and conversations about building useful things."
              />
              <span className="contact-orbit" aria-hidden="true" />
            </div>
            <ContactForm />
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <a href="#home" className="footer-brand">
            <span className="brand-mark">EA</span>
            <span>Designed &amp; built by Eden Abebaw</span>
          </a>
          <div className="footer-socials" aria-label="Social links">
            {socialLinks.map((social) => (
              <a
                href={social.href}
                key={social.label}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                {social.label === "GitHub" ? <Code2 size={16} /> : social.label === "LinkedIn" ? <BriefcaseBusiness size={16} /> : <ArrowUpRight size={16} />}
                <span>{social.label}</span>
              </a>
            ))}
          </div>
          <span className="footer-copyright mono">© 2026 — BUILT WITH INTENTION</span>
        </div>
      </footer>
    </>
  );
}
