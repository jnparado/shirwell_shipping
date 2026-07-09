"use client";

import { submitContactAction, type ContactState } from "@/app/actions/contact";
import { useActionState } from "react";

const initialState: ContactState = {};

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactAction, initialState);

  if (state.success) {
    return (
      <div className="rounded-xl border border-gold/40 bg-white p-6 text-center">
        <p className="font-serif text-lg font-bold text-gold">Message sent!</p>
        <p className="mt-2 text-muted">Thank you — our team will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {state.error && (
        <p className="rounded-lg border border-brand-red/30 bg-brand-red/5 px-4 py-3 text-sm text-brand-red">
          {state.error}
        </p>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1.5 w-full border border-border bg-white px-4 py-3 text-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1.5 w-full border border-border bg-white px-4 py-3 text-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1.5 w-full border border-border bg-white px-4 py-3 text-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full bg-brand-red py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-red/90 disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
