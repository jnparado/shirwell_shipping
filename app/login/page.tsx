import Link from "next/link";

export const metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <main className="bg-surface px-4 py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-md sm:px-2">
        <h1 className="font-serif text-2xl font-bold text-gold sm:text-3xl">Customer Login</h1>
        <p className="mt-2 text-muted">Sign in to manage your shipments and account.</p>

        <form className="mt-6 space-y-5 border border-border bg-white p-5 sm:mt-8 sm:p-8">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1.5 w-full border border-border px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-foreground">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="mt-1.5 w-full border border-border px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
            />
          </div>
          <button
            type="submit"
            className="w-full border border-gold bg-gold py-3.5 font-serif text-sm font-bold uppercase tracking-wide text-black hover:bg-gold-bright"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          <Link href="/" className="font-semibold text-gold hover:underline">
            ← Back to homepage
          </Link>
        </p>
      </div>
    </main>
  );
}
