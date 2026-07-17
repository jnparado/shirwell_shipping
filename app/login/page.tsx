import LoginForm from "@/app/components/LoginForm";
import { getCurrentAccount } from "@/lib/supabase/account";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Login",
  description: "Sign in to your Shirwell Shipping account to manage shipments and profile.",
  alternates: { canonical: "/login" },
  robots: { index: false, follow: true },
};

type LoginPageProps = {
  searchParams: Promise<{ next?: string; error?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { next, error } = await searchParams;
  const account = await getCurrentAccount();

  if (account) {
    redirect(next?.startsWith("/") ? next : "/account");
  }

  return (
    <main className="bg-background px-4 py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-md sm:px-2">
        <h1 className="text-2xl font-bold text-gold sm:text-3xl">Customer Login</h1>
        <p className="mt-2 text-muted">
          Sign in with your Shirwell account (Supabase Auth — shirwelldb).
        </p>
        {error === "auth" && (
          <p className="mt-4 rounded-lg border border-brand-red/30 bg-brand-red/10 px-4 py-3 text-sm text-brand-red">
            Authentication failed. Please try signing in again.
          </p>
        )}
        <LoginForm next={next?.startsWith("/") ? next : "/account"} />
      </div>
    </main>
  );
}
