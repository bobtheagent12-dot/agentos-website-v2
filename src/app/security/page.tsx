import Link from "next/link";

const trustPillars = [
  {
    title: "Per-tenant isolation",
    desc: "Team-scoped, function-scoped, and engagement-scoped contexts stay isolated. One team's agent cannot reach another's confidential material. Segregation is designed in, not bolted on.",
    mechanism: "Identity-aware access enforced at the harness boundary. A prompt instruction is not a security boundary.",
  },
  {
    title: "Revocable keys",
    desc: "Every integration, every tool connection, every data source is keyed and revocable. Access is granted explicitly and removed cleanly. No standing privileges that drift.",
    mechanism: "Per-tenant key registry with audit-grade revocation logging.",
  },
  {
    title: "Audit log",
    desc: "Every retrieval, model call, and action is logged, queryable, and exportable. Any run can be reconstructed. Outputs link back to the retrieval and tool calls that produced them.",
    mechanism: "Append-only audit trail with provenance chain per agent output.",
  },
  {
    title: "Multi-model by design",
    desc: "Route across frontier and open-weight models per task. No single-vendor lock-in. Customers control which models touch which data, with sovereignty filters as declarative policy.",
    mechanism: "Provider-agnostic routing layer with per-model policy gates.",
  },
];

const deploymentPaths = [
  {
    name: "Cloud",
    desc: "Hosted by TenX. Fastest path to value. Per-tenant isolation enforced at the application layer.",
    best: "Teams evaluating the harness, pilots, initial deployments.",
  },
  {
    name: "VPC",
    desc: "Deployed inside your virtual private cloud. Data never leaves your network perimeter. AgentOS runs as a managed service inside your boundary.",
    best: "Regulated industries, firms with existing cloud infrastructure.",
  },
  {
    name: "On-prem",
    desc: "Deployed on your hardware. Full air-gap option. The harness runs where the data lives, inside your physical security boundary.",
    best: "Highly regulated environments, sovereign data requirements.",
  },
];

const autonomyLevels = [
  { level: "L1", label: "Human only", desc: "Strategic calls, final approvals, signatures." },
  { level: "L2", label: "AI prepared, human approved", desc: "Drafts, redlines, memos, pricing recommendations." },
  { level: "L3", label: "AI executes, human supervises", desc: "Triage, routing, enrichment, first-pass analysis." },
  { level: "L4", label: "Autonomous within clear limits", desc: "Monitoring, nightly reports, structured extraction." },
];

const threatModels = [
  {
    threat: "Prompt injection",
    mitigation: "Tool calls are sandboxed. Untrusted content is quarantined before reaching the model. Input sanitization at the tool boundary, not in the prompt.",
  },
  {
    threat: "Tool poisoning",
    mitigation: "Every tool is versioned and signed. Tool definitions are policy artifacts authored and signed by the deployment owner. The harness validates tool behavior against its declared contract.",
  },
  {
    threat: "Memory persistence",
    mitigation: "Memory is scoped per tenant and per role. Cross-tenant memory access is blocked at the access layer. No prompt instruction can override it. Memory artifacts carry the same access policy as source documents.",
  },
];

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 radial-fade" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-ink-muted">
              Security &amp; trust
            </div>
            <h1 className="mt-6 text-[40px] leading-[1.05] tracking-tight text-ink md:text-[56px]" style={{ fontFamily: "var(--font-source-serif)" }}>
              Built to satisfy the people who say no for a living.
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-dim">
              Security officers, compliance leads, procurement teams. The people
              whose job is to find the gap. The harness is designed to close
              the gaps they look for.
            </p>
          </div>
        </div>
      </section>

      {/* Trust pillars */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="eyebrow">Four guarantees</div>
          <div className="mt-8 grid grid-cols-1 gap-px bg-border md:grid-cols-2">
            {trustPillars.map((pillar) => (
              <div key={pillar.title} className="bg-bg p-8">
                <h3 className="text-[20px] font-medium text-ink" style={{ fontFamily: "var(--font-source-serif)" }}>
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-dim">{pillar.desc}</p>
                <div className="mt-4 border-t border-border pt-3">
                  <div className="text-[11px] font-medium tracking-wide uppercase text-ink-muted">Mechanism</div>
                  <p className="mt-1 specimen-mono text-ink-dim">{pillar.mechanism}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment paths */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="eyebrow">Deployment paths</div>
          <h2 className="mt-4 text-[28px] leading-tight tracking-tight text-ink md:text-[34px]" style={{ fontFamily: "var(--font-source-serif)" }}>
            Run it where your data lives.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {deploymentPaths.map((path) => (
              <div key={path.name} className="card-hover rounded-lg border border-border bg-surface p-7">
                <h3 className="text-[18px] font-medium text-ink">{path.name}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-ink-dim">{path.desc}</p>
                <div className="mt-5 border-t border-border pt-4">
                  <div className="text-[11px] font-medium tracking-wide uppercase text-ink-muted">Best for</div>
                  <p className="mt-1 text-[13px] text-ink-dim">{path.best}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governed autonomy */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <div className="eyebrow">Governed autonomy</div>
              <h2 className="mt-4 text-[28px] leading-tight tracking-tight text-ink md:text-[34px]" style={{ fontFamily: "var(--font-source-serif)" }}>
                The autonomy ladder is a control decision.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-dim">
                The autonomy level is a control decision the harness enforces.
                Set by the materiality of the work, not by who the agent is.
                High-stakes steps require approval. Routine
                steps run supervised. Only well-bounded, reversible tasks run
                unattended.
              </p>
              <p className="mt-4 text-[14px] text-ink-muted">
                Set by materiality, not by department.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {autonomyLevels.map((item) => (
                <div key={item.level} className="flex items-start gap-5 rounded-lg border border-border bg-surface p-5">
                  <span className="text-[18px] font-mono font-medium text-accent-bright">{item.level}</span>
                  <div>
                    <div className="text-[14px] font-medium text-ink">{item.label}</div>
                    <div className="mt-1 text-[13px] text-ink-dim">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Threat models */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="eyebrow">Threat models</div>
          <h2 className="mt-4 text-[28px] leading-tight tracking-tight text-ink md:text-[34px]" style={{ fontFamily: "var(--font-source-serif)" }}>
            Three attack surfaces. Three mitigations.
          </h2>
          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-ink-dim">
            Named by Anthropic in their Zero Trust playbook for AI agents. We
            treat them as the baseline. Our threat model extends from there.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            {threatModels.map((tm) => (
              <div key={tm.threat} className="grid grid-cols-1 gap-4 rounded-lg border border-border bg-surface p-7 md:grid-cols-[1fr_1.5fr]">
                <div>
                  <div className="text-[11px] font-medium tracking-wide uppercase text-ink-muted">Threat</div>
                  <h3 className="mt-1 text-[17px] font-medium text-ink">{tm.threat}</h3>
                </div>
                <div>
                  <div className="text-[11px] font-medium tracking-wide uppercase text-ink-muted">Mitigation</div>
                  <p className="mt-1 text-[14px] leading-relaxed text-ink-dim">{tm.mitigation}</p>
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
              A prompt instruction is not a security boundary.
            </h2>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link href="/product" className="btn-secondary arrow-link">
                The architecture →
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
