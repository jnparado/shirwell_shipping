import { redirect } from "next/navigation";

/** Root redirects to the canonical home landing page. */
export default function RootPage() {
  redirect("/home");
}
