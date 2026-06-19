const team = [
  {
    name: "Mat Cybula",
    role: "CEO · Agent OS Inc.",
    bio: "Decade-plus crypto operator. Co-founder and former CEO of Cryptiv (acquired by Coinsquare, 2019). MSc, London School of Economics.",
  },
  {
    name: "Filip Cybula",
    role: "COO · Agent OS Inc.",
    bio: "Crypto entrepreneur since 2015. Co-founder and former COO of Cryptiv. MSc, University of Oxford.",
  },
  {
    name: "Geoff Byers",
    role: "CTO",
    bio: "Decade-plus building secure crypto systems. Former CTO of Tetra Trust, Canada's first qualified crypto custodian. Co-founder/CTO of Cryptiv.",
  },
  {
    name: "Martin Bui",
    role: "CFO",
    bio: "Former corporate finance and reporting lead at Hut 8 Mining. Capital markets and public-company compliance expertise.",
  },
  {
    name: "Julia Becker",
    role: "Head of Communications",
    bio: "Communications leader across financial services, AI, robotics, and crypto. Translates technical and financial concepts for capital markets.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 radial-fade" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-ink-muted">
              About
            </div>
            <h1 className="mt-6 text-[40px] leading-[1.1] tracking-tight text-ink md:text-[52px]" style={{ fontFamily: "var(--font-source-serif)" }}>
              AgentOS is building the harness layer that makes AI agents safe and effective to deploy inside large enterprises.
            </h1>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="eyebrow">Team</div>
          <h2 className="mt-4 text-[28px] leading-tight tracking-tight text-ink md:text-[34px]" style={{ fontFamily: "var(--font-source-serif)" }}>
            Experienced operators across tech, crypto, and finance.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="card-hover rounded-lg border border-border bg-surface p-6">
                <h3 className="text-[16px] font-medium text-ink">{member.name}</h3>
                <div className="mt-1 text-[12px] font-medium tracking-wide text-accent-bright">{member.role}</div>
                <p className="mt-3 text-[13px] leading-relaxed text-ink-dim">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="eyebrow">Company structure</div>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-surface p-7">
              <div className="text-[11px] font-medium tracking-wide uppercase text-ink-muted">Parent</div>
              <h3 className="mt-2 text-[18px] font-medium text-ink">TenX Protocols Inc.</h3>
              <p className="mt-2 text-[13px] text-ink-dim">TSXV: TNX · Toronto</p>
              <p className="mt-4 text-[14px] leading-relaxed text-ink-dim">
                A TSXV-listed digital asset treasury and validator infrastructure
                company.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-7">
              <div className="text-[11px] font-medium tracking-wide uppercase text-ink-muted">Subsidiary</div>
              <h3 className="mt-2 text-[18px] font-medium text-ink">Agent OS Inc.</h3>
              <p className="mt-2 text-[13px] text-ink-dim">Delaware</p>
              <p className="mt-4 text-[14px] leading-relaxed text-ink-dim">
                Wholly-owned subsidiary of TenX Protocols Inc. Builds the
                enterprise AI harness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
