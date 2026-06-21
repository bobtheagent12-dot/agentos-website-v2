"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Routes that ship their own header/footer (and therefore should suppress the
// global marketing-site chrome). Keep this list short and explicit.
const STANDALONE_ROUTES = ["/investor-room"];

export function ChromeShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "/";
  const isStandalone = STANDALONE_ROUTES.some(
    (r) => pathname === r || pathname.startsWith(`${r}/`),
  );

  if (isStandalone) {
    return <main className="flex-1">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
