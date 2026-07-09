import LoginForm from "@/app/components/LoginForm";

export const metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <main className="bg-surface px-4 py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-md sm:px-2">
        <h1 className="font-serif text-2xl font-bold text-gold sm:text-3xl">Customer Login</h1>
        <p className="mt-2 text-muted">Sign in with your Supabase account to manage shipments.</p>
        <LoginForm />
      </div>
    </main>
  );
}
