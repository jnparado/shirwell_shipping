"use client";

import { loginAction, type AuthState } from "@/app/login/actions";
import Link from "next/link";
import { useActionState } from "react";

const initialState: AuthState = {};

export default function LoginForm({ next = "/account" }: { next?: string }) {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <form
      action={formAction}
      className="mt-6 space-y-5 rounded-2xl border border-border bg-surface-elevated p-5 sm:mt-8 sm:p-8"
    >
      <input type="hidden" name="next" value={next} />

      {state.error && (
        <p className="rounded-lg border border-brand-red/30 bg-brand-red/10 px-4 py-3 text-sm text-brand-red">
          {state.error}
        </p>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-muted">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-muted">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-gold py-3.5 text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-gold-bright disabled:opacity-60"
      >
        {pending ? "Signing in…" : "Sign In"}
      </button>

      <p className="text-center text-sm text-muted">
        <Link href="/home" className="font-semibold text-gold hover:underline">
          ← Back to homepage
        </Link>
      </p>
    </form>
  );
}
