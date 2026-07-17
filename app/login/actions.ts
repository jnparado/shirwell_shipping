"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export type AuthState = {
  error?: string;
};

export async function loginAction(
  _prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const nextRaw = String(formData.get("next") ?? "/account");
  const next = nextRaw.startsWith("/") ? nextRaw : "/account";

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: error.message };
  }

  // Ensure a profiles row exists for this shirwelldb auth user
  if (data.user) {
    const { error: profileError } = await supabase.from("profiles").upsert(
      {
        id: data.user.id,
        email: data.user.email ?? email,
        role: "customer",
      },
      { onConflict: "id", ignoreDuplicates: true },
    );

    // Ignore profile sync errors (e.g. missing optional columns); auth still succeeded
    if (profileError) {
      console.error("profiles upsert:", profileError.message);
    }
  }

  redirect(next);
}

export async function signOutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/home");
}
