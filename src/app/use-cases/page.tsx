import Link from "next/link";

const useCases = [
  {
    id: "counterparty-prep",
    eyebrow: "Use case 01",
    title: "Counterparty prep brief",
    question: "What changed with this counterparty since our last meeting?",
    before: [
      "Open CRM. Search for the last meeting notes.",
      "Check email threads for follow-ups.",
      "Search Slack for internal context.",
      "Open LinkedIn. Check for role changes.",
      "Google for recent news. Skim three articles.",
      "Synthesize into a prep doc. No source trail.",
    ],
    after: [
      "AgentOS pulls meeting notes, email, and shared docs.",
      "Checks external signals: news, hiring, product changes.",
      "Produces a structured brief with inline citations.",
      "Flags three questions worth asking.",
      "Auditable trail of every source consulted. Replay any claim back to its source.",
      "Review and edit. 5 minutes, not 45.",
    ],
    output: "Prep brief with source trail. Questions to ask next. Citations on every factual claim.",
  },
  {
    id: "market-monitoring",
    eyebrow: "Use case 02",
    title: "Market monitoring",
    question: "What happened in our market this week that changes our position?",
    before: [
      "Analyst reads 12 newsletters every Monday.",
      "Checks competitor websites for product updates.",
      "Scans Twitter and LinkedIn for announcements.",
      "Compiles a summary. Sends it to the team.",
      "Same effort whether or not anything happened.",
      "Coverage gaps when the analyst is out.",
    ],
    after: [
      "AgentOS watches the signals you define: competitors, customers, regulators.",
      "Flags only material changes. Cuts the noise that buries the signal.",
      "Cross-references external signals with internal context.",
      "Drafts a Monday brief with citations.",
      "Human reviews. Approves or edits.",
      "Coverage is continuous. No gaps.",
    ],
    output: "Weekly market brief. Material changes only. Citations on every external claim.",
  },
  {
    id: "research-synthesis",
    eyebrow: "Use case 03",
    title: "Internal research synthesis",
    question: "What do we already know about this topic across the firm?",
    before: [
      "Ask three colleagues if they have relevant work.",
      "Search the shared drive. Get 200 results.",
      "Search Slack. Get 500 messages.",
      "Read what you can. Synthesize from memory.",
      "No structured output. No provenance.",
      "Same research repeated by a different team next quarter.",
    ],
    after: [
      "AgentOS indexes the firm's documents and prior work, with structured context.",
      "Time-aware retrieval. Knows what is current and what is superseded.",
      "Produces a synthesis with layered citations back to source documents.",
      "Flags where the firm has prior decisions on this topic.",
      "The synthesis is itself an artifact the next team can find.",
      "Identity-aware access. Each team sees only what it's permitted to see.",
    ],
    output: "Structured research synthesis. Layered citations. Prior decisions surfaced. Reusable artifact.",
  },
];

export default function UseCasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 radial-fade" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-ink-muted">
              Use cases
            </div>
            <h1 className="mt-6 text-[40px] leading-[1.05] tracking-tight text-ink md:text-[56px]" style={{ fontFamily: "var(--font-source-serif)" }}>
              The work is judgment. AgentOS handles the context, the memory, and the source trail.
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-dim">
              Three enterprise scenarios. Each one shows the work moved, the
              audit trail produced, and the time reclaimed. The agent handles
              the context assembly. The human handles the judgment.
            </p>
          </div>
        </div>
      </section>

      {/* Use cases */}
      {useCases.map((uc, idx) => (
        <section key={uc.id} id={uc.id} className={idx < useCases.length - 1 ? "border-b border-border" : ""}>
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
              {/* Left: description */}
              <div>
                <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-ink-muted">
                  {uc.eyebrow}
                </div>
                <h2 className="mt-4 text-[28px] leading-tight tracking-tight text-ink md:text-[34px]" style={{ fontFamily: "var(--font-source-serif)" }}>
                  {uc.title}
                </h2>
                <div className="mt-6 rounded-lg border border-border bg-surface p-5">
                  <div className="text-[11px] font-medium tracking-wide uppercase text-ink-muted">
                    The question
                  </div>
                  <p className="mt-2 text-[15px] font-medium leading-snug text-ink" style={{ fontFamily: "var(--font-source-serif)" }}>
                    {uc.question}
                  </p>
                </div>
                <div className="mt-6 rounded-lg border border-accent-ring bg-accent-soft p-5">
                  <div className="text-[11px] font-medium tracking-wide uppercase text-accent-bright">
                    Output
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink">{uc.output}</p>
                </div>
              </div>

              {/* Right: before/after */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-surface p-6">
                  <div className="text-[11px] font-medium tracking-wide uppercase text-ink-muted">
                    Before · manual
                  </div>
                  <ul className="mt-4 flex flex-col gap-3">
                    {uc.before.map((item, i) => (
                      <li key={i} className="flex gap-3 text-[13px] leading-relaxed text-ink-dim">
                        <span className="text-ink-muted">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-accent-ring bg-surface p-6">
                  <div className="text-[11px] font-medium tracking-wide uppercase text-accent-bright">
                    After · AgentOS
                  </div>
                  <ul className="mt-4 flex flex-col gap-3">
                    {uc.after.map((item, i) => (
                      <li key={i} className="flex gap-3 text-[13px] leading-relaxed text-ink">
                        <span className="text-accent-bright">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-lg border border-border bg-surface p-10 text-center">
            <h2 className="text-[28px] leading-tight tracking-tight text-ink md:text-[32px]" style={{ fontFamily: "var(--font-source-serif)" }}>
              Start with the daily work.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[14px] leading-relaxed text-ink-dim">
              A high-volume task recovers more hours and produces cleaner ground
              truth. The harness learns faster when it runs often.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link href="/early-access" className="btn-primary arrow-link">
                Request access →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
