import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="text-[15px] font-semibold tracking-tight text-ink">
              AgentOS
            </Link>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-ink-dim">
              The enterprise agent harness for firms that run on judgment.
            </p>
            <p className="mt-4 text-[12px] text-ink-muted">
              A TenX Protocols company · TSXV: TNX
            </p>
          </div>
          <div>
            <div className="text-[11px] font-medium tracking-wide text-ink-muted">Product</div>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/product" className="text-[13px] text-ink-dim transition-colors hover:text-ink">Product</Link>
              <Link href="/use-cases" className="text-[13px] text-ink-dim transition-colors hover:text-ink">Use Cases</Link>
              <Link href="/security" className="text-[13px] text-ink-dim transition-colors hover:text-ink">Security</Link>
              <Link href="/early-access" className="text-[13px] text-ink-dim transition-colors hover:text-ink">Request access</Link>
            </div>
          </div>
          <div>
            <div className="text-[11px] font-medium tracking-wide text-ink-muted">Company</div>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/about" className="text-[13px] text-ink-dim transition-colors hover:text-ink">About</Link>
              <a href="mailto:hello@agent-os.co" className="text-[13px] text-ink-dim transition-colors hover:text-ink">hello@agent-os.co</a>
              <span className="text-[13px] text-ink-muted">Toronto · 2026</span>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6">
          <p className="text-[12px] text-ink-muted">
            © 2026 TenX Protocols Inc. AgentOS is a wholly-owned subsidiary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
