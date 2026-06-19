import Link from "next/link";

const layers = [
  {
    name: "Orchestration",
    desc: "Route tasks across models, providers, and subagents. Classify-and-act, fan-out-and-synthesize, adversarial verification. Static or dynamic. Your control plane decides.",
    points: ["Model routing as policy", "Subagent spawning", "Token budgets", "Resumability"],
  },
  {
    name: "Memory",
    desc: "Time-aware, structured retrieval. Not a flat vector store. Layered summaries, entity indexing, version tracking. The firm's record becomes an agent's working context.",
    points: ["Graph-based memory", "Time-aware versioning", "Layered summarization", "Entity indexing"],
  },
  {
    name: "Tools",
    desc: "Real actions in real tools. Observable. Reversible. Promote a successful agent execution into a deterministic workflow. Skills are portable artifacts, not locked-in prompts.",
    points: ["Tool catalog", "Deterministic workflow promotion", "Skill-as-folder", "Reversible actions"],
  },
  {
    name: "Evaluation",
    desc: "Agents fail in production. The harness measures it. Per-task evals, adversarial review, citation verification. The system knows when to trust an output and when to escalate.",
    points: ["Per-task evals", "Citation verification", "Hallucination detection", "Statistical review gates"],
  },
  {
    name: "Permissions",
    desc: "Identity-aware, scoped access. Agents see what the role permits, not what file permissions drifted into. Segregation by design. A prompt instruction is not a security boundary.",
    points: ["Identity-aware scoping", "Team and function segregation", "Tiered autonomy (L1\u2013L4)", "Human review queue"],
  },
  {
    name: "Deployment",
    desc: "Cloud, VPC, or on-prem. The harness runs where the data lives. Per-tenant isolation. Revocable keys. Multi-model by design. No single-vendor lock-in.",
    points: ["Cloud, VPC, on-prem", "Per-tenant isolation", "Revocable keys", "Provider-agnostic"],
  },
];

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 radial-fade" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-ink-muted">
              Product · the harness
            </div>
            <h1 className="mt-6 text-[40px] leading-[1.05] tracking-tight text-ink md:text-[56px]" style={{ fontFamily: "var(--font-source-serif)" }}>
              The harness is the control layer between your people and the AI agents working on their behalf.
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-dim">
              Models improve. Providers change. The harness keeps your
              firm&apos;s context, controls, and workflows intact.
            </p>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="eyebrow">The problem</div>
              <h2 className="mt-4 text-[28px] leading-tight tracking-tight text-ink md:text-[34px]" style={{ fontFamily: "var(--font-source-serif)" }}>
                Every company wants to deploy AI agents.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-dim">
                Most are stuck with chatbots that cannot see internal context,
                cannot watch external change, cannot produce auditable outputs,
                and cannot be trusted with anything material.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-dim">
                The problem is not the model. The model is fine. The problem is
                the layer that sits between the model and the firm: orchestration,
                memory, tools, evaluation, permissions, and deployment. That layer
                is the harness. The few teams building it are building it for
                their own model. We build it for any model.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-7">
              <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-ink-muted">
                The structural claim
              </div>
              <p className="mt-3 text-[16px] leading-relaxed text-ink" style={{ fontFamily: "var(--font-source-serif)" }}>
                Models commoditize. The orchestration, memory, tools, and
                evaluation layer around the model does not. That is where durable
                enterprise value lives.
              </p>
              <div className="mt-5 pt-5 border-t border-border">
                <p className="specimen-mono text-ink-muted">
                  The harness is to AI what the OS was to silicon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture diagram */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="eyebrow">Architecture · six layers</div>
          <h2 className="mt-4 text-[28px] leading-tight tracking-tight text-ink md:text-[34px]" style={{ fontFamily: "var(--font-source-serif)" }}>
            The harness, decomposed.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-dim">
            The harness owns two jobs at once. Governed access decides what the
            agent is allowed to see. Organized context decides what that view is
            worth once permitted. The six layers below decompose how it does that.
          </p>

          {/* Diagram */}
          <div className="mt-12 flex flex-col items-center gap-4">
            {/* Agents row */}
            <div className="flex items-center gap-3">
              {["research", "triage", "drafting", "monitor"].map((role) => (
                <div key={role} className="rounded border border-border-strong bg-surface-2 px-4 py-2.5">
                  <span className="text-[12px] font-mono text-ink-dim">{role}</span>
                </div>
              ))}
            </div>
            <div className="h-6 w-px bg-border-strong" />
            <div className="text-[11px] font-mono text-ink-muted">scoped request</div>
            <div className="h-6 w-px bg-border-strong" />

            {/* Harness box */}
            <div className="w-full max-w-4xl rounded-lg border border-accent-ring bg-surface p-8">
              <div className="mb-6 text-center text-[12px] font-medium tracking-wide uppercase text-accent-bright">
                The Harness
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {layers.map((layer) => (
                  <div key={layer.name} className="arch-node">
                    <div className="text-[14px] font-medium text-ink">{layer.name}</div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {layer.points.map((pt) => (
                        <span key={pt} className="rounded bg-elevated px-2 py-0.5 text-[11px] text-ink-dim">
                          {pt}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-border pt-4 text-center">
                <div className="text-[11px] font-mono text-ink-muted">governance &amp; human oversight</div>
              </div>
            </div>

            <div className="h-6 w-px bg-border-strong" />
            <div className="text-[11px] font-mono text-ink-muted">permitted answer</div>
            <div className="h-6 w-px bg-border-strong" />

            {/* Data row */}
            <div className="flex items-center gap-3">
              {["documents", "records", "communications", "history"].map((item) => (
                <div key={item} className="rounded border border-border-strong bg-surface-2 px-4 py-2.5">
                  <span className="text-[12px] font-mono text-ink-dim">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Layer details */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="eyebrow">Layer by layer</div>
          <div className="mt-8 flex flex-col gap-px bg-border">
            {layers.map((layer, i) => (
              <div key={layer.name} className="grid grid-cols-1 gap-6 bg-bg p-8 md:grid-cols-[200px_1fr_1fr]">
                <div>
                  <div className="text-[12px] font-mono text-ink-muted">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-1 text-[18px] font-medium text-ink" style={{ fontFamily: "var(--font-source-serif)" }}>
                    {layer.name}
                  </h3>
                </div>
                <p className="text-[14px] leading-relaxed text-ink-dim">{layer.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {layer.points.map((pt) => (
                    <span key={pt} className="rounded border border-border bg-surface px-3 py-1 text-[12px] text-ink-dim">
                      {pt}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-lg border border-border bg-surface p-10 text-center">
            <h2 className="text-[28px] leading-tight tracking-tight text-ink md:text-[32px]" style={{ fontFamily: "var(--font-source-serif)" }}>
              Models change. The operating layer endures.
            </h2>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link href="/security" className="btn-secondary arrow-link">
                Security &amp; trust →
              </Link>
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
