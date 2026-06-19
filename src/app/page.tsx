import Link from "next/link";
import { OperatingLoop } from "@/components/OperatingLoop";

const principles = [
  {
    key: "Multi-model by design.",
    val: "Route across frontier and open-weight models per task to control cost, performance, and data sovereignty. No single-vendor lock-in. No paying frontier rates for routine work.",
  },
  {
    key: "Your data, your perimeter.",
    val: "Per-tenant isolation, revocable keys, and deployment paths that match enterprise risk.",
  },
  {
    key: "Identity-aware by default.",
    val: "Every agent action runs under the user's permissions, scoped to the matter, role, and data they are cleared to see.",
  },
  {
    key: "Every action is auditable.",
    val: "Each agent decision, tool call, and output ties back to its source. Replay any run, prove any output. The audit trail your compliance team needs is built in.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 radial-fade" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
            <div>
              <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-ink-muted">
                AgentOS · A TenX company · 2026
              </div>
              <h1 className="mt-6 text-[44px] leading-[1.05] tracking-tight text-ink md:text-[64px] md:leading-[1.02]">
                The intelligence operating system for{" "}
                <span className="text-accent-bright">business.</span>
              </h1>
              <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink-dim md:text-[17px]">
                The layer that connects AI agents to your firm&apos;s knowledge,
                tools, and teams. Your people focus on the work that matters.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link href="/early-access" className="btn-primary arrow-link">
                  Request access →
                </Link>
                <Link href="#specimen" className="text-[14px] text-ink-dim transition-colors hover:text-ink">
                  See the work
                </Link>
              </div>
            </div>
            <div className="lg:pt-4">
              <OperatingLoop />
            </div>
          </div>
        </div>
      </section>

      {/* Specimen */}
      <section id="specimen" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="eyebrow">Specimen · what it feels like</div>
              <h2 className="mt-4 text-[32px] leading-tight tracking-tight text-ink md:text-[40px]" style={{ fontFamily: "var(--font-source-serif)" }}>
                A digital brain for your firm.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-dim">
                Ask the question once. AgentOS pulls the internal record, checks
                what changed outside the company, and gives your team the source
                trail before the next decision.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-7">
              <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-ink-muted">
                Question
              </div>
              <p className="mt-2 text-[15px] font-medium leading-snug text-ink" style={{ fontFamily: "var(--font-source-serif)" }}>
                What changed with this counterparty since our last meeting?
              </p>
              <div className="my-5 h-px bg-border" />
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <span className="w-16 shrink-0 text-[11px] font-medium tracking-wide uppercase text-ink-muted">
                    Inside
                  </span>
                  <p className="text-[13px] leading-relaxed text-ink-dim">
                    Meeting notes, email threads, shared docs, prior decisions.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="w-16 shrink-0 text-[11px] font-medium tracking-wide uppercase text-ink-muted">
                    Outside
                  </span>
                  <p className="text-[13px] leading-relaxed text-ink-dim">
                    News, public updates, product moves, hiring, customer signals.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="w-16 shrink-0 text-[11px] font-medium tracking-wide uppercase text-ink-muted">
                    Output
                  </span>
                  <p className="text-[13px] leading-relaxed text-ink-dim">
                    A concise prep brief with citations and the questions to ask next.
                  </p>
                </div>
              </div>
              <div className="mt-5 pt-5 border-t border-border">
                <p className="specimen-mono text-ink-muted">
                  source trail preserved · exportable audit log
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="eyebrow">How it works</div>
          <div className="mt-8 flex flex-col gap-8">
            {[
              {
                num: "01",
                title: "Inside the firm",
                body: "Docs, meetings, messages, dashboards, and past decisions. The knowledge a teammate needs to become useful becomes the agent's working context.",
              },
              {
                num: "02",
                title: "Outside the firm",
                body: "Customers, competitors, partners, hiring, product changes, and market context. It watches the signals that matter to the work your team already does.",
              },
              {
                num: "03",
                title: "Into action",
                body: "Automates the repeatable: document handling, reconciliations, status updates, routine analysis. Your people get their time back for the work only humans can do. Briefs, prep notes, follow-ups, and project plans follow, with judgment staying with the human and the context, memory, and source trail moving to the system.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-6">
                <div className="text-[15px] font-mono text-accent-bright">{item.num}</div>
                <div className="flex-1 border-l border-border pl-6">
                  <h3 className="text-[18px] font-medium text-ink">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-dim">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="eyebrow">Architecture · the harness</div>
              <h2 className="mt-4 text-[32px] leading-tight tracking-tight text-ink md:text-[40px]" style={{ fontFamily: "var(--font-source-serif)" }}>
                The control layer between your people and the AI agents working on their behalf.
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[15px] leading-relaxed text-ink-dim">
                An agentic harness turns a language model into a functional worker.
                AgentOS owns that layer for the enterprise: orchestration, memory,
                tools, evaluation, permissions, and deployment.
              </p>
              <p className="text-[15px] leading-relaxed text-ink-dim">
                That is the durable part. Models improve. Providers change. The
                control layer keeps the firm's context, governance, and workflows
                intact.
              </p>
              <Link href="/product" className="mt-2 text-[14px] font-medium text-accent-bright arrow-link">
                Explore the architecture →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section id="principles" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="eyebrow">Principles</div>
          <div className="mt-8 grid grid-cols-1 gap-px bg-border md:grid-cols-2">
            {principles.map((p) => (
              <div key={p.key} className="bg-bg p-8">
                <p className="text-[18px] font-medium text-ink" style={{ fontFamily: "var(--font-source-serif)" }}>
                  {p.key}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-dim">{p.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="eyebrow">Built for</div>
          <p className="mt-5 max-w-3xl text-[20px] leading-relaxed text-ink-dim md:text-[24px]" style={{ fontFamily: "var(--font-source-serif)" }}>
            Leadership teams, operators, and research-heavy
            organizations where the cost of missing context is real.
          </p>
        </div>
      </section>

      {/* Access */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="eyebrow">Access · by invitation</div>
              <h2 className="mt-4 text-[32px] leading-tight tracking-tight text-ink md:text-[40px]" style={{ fontFamily: "var(--font-source-serif)" }}>
                Private beta. Small cohorts.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-dim">
                We are onboarding teams with real internal context, real operating
                needs, and work worth automating carefully.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <Link href="/early-access" className="btn-primary arrow-link self-start">
                Request access →
              </Link>
              <p className="text-[13px] text-ink-muted">
                Full intake on the next page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
