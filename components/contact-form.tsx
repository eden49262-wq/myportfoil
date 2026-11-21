"use client";

import { Check, Copy, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { contactEmail } from "./portfolio-data";

export function ContactForm() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const [formState, setFormState] = useState<"idle" | "ready">("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 2200);
    } catch {
      setCopyState("error");
      window.setTimeout(() => setCopyState("idle"), 3200);
    }
  }

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);

    setFormState("ready");
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="contact-content">
      <div className="contact-details">
        <p className="contact-intro">
          Have an interesting problem to solve? I&apos;d love to hear what you&apos;re
          building and explore how I can help.
        </p>
        <div className="email-card">
          <div>
            <span className="field-label">EMAIL</span>
            <a className="email-address" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </div>
          <button className="copy-button" type="button" onClick={copyEmail}>
            {copyState === "copied" ? <Check size={15} /> : <Copy size={15} />}
            {copyState === "copied" ? "Copied!" : "Copy email"}
          </button>
        </div>
        <p className="contact-note" aria-live="polite">
          {copyState === "error"
            ? "Clipboard access was unavailable. Select the email address to copy it."
            : copyState === "copied"
              ? "Email address copied to clipboard."
              : "Typically replies within a couple of days."}
        </p>
      </div>

      <form className="contact-form" onSubmit={prepareEmail}>
        <label className="form-label" htmlFor="contact-name">Your name</label>
        <input
          className="contact-field"
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Ada Lovelace"
          minLength={2}
          required
        />
        <label className="form-label" htmlFor="contact-email">Email address</label>
        <input
          className="contact-field"
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="ada@example.com"
          required
        />
        <label className="form-label" htmlFor="contact-message">How can I help?</label>
        <textarea
          className="contact-field contact-message"
          id="contact-message"
          name="message"
          placeholder="A little about your project or opportunity..."
          minLength={10}
          required
        />
        <button className="button button-primary submit-button" type="submit">
          <Send size={14} />
          Open email draft
        </button>
        <p className="form-feedback" aria-live="polite">
          {formState === "ready"
            ? "Your message is ready in your email app. Review and send it there."
            : "This form opens your email app; it does not send anything automatically."}
        </p>
      </form>
    </div>
  );
}
