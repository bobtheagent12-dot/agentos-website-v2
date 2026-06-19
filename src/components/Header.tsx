import Link from "next/link";

const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/security", label: "Security" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-[15px] font-semibold tracking-tight text-ink">
          AgentOS
        </Link>
        <div className="flex items-center gap-7">
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-ink-dim transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <span className="hidden text-[11px] font-medium tracking-wide text-ink-muted md:inline">
            Private beta
          </span>
          <Link
            href="/early-access"
            className="text-[13px] font-medium text-accent-bright transition-colors hover:text-ink"
          >
            Request access →
          </Link>
        </div>
      </nav>
    </header>
  );
}
