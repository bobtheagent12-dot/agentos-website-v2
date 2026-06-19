import Link from "next/link";

export default function EarlyAccessPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 radial-fade" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-ink-muted">
            Access · by invitation
          </div>
          <h1 className="mt-6 text-[40px] leading-[1.05] tracking-tight text-ink md:text-[52px]" style={{ fontFamily: "var(--font-source-serif)" }}>
            Private beta. Small cohorts.
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink-dim">
            We are onboarding teams with real internal context, real operating
            needs, and work worth automating carefully. Tell us about your firm
            and the work. We will follow up directly.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <form className="flex flex-col gap-6" action="#" method="POST">
            {/* Name */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-[12px] font-medium tracking-wide text-ink-dim">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  autoComplete="given-name"
                  className="mt-2 w-full rounded-md border border-border bg-surface px-4 py-2.5 text-[14px] text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-[12px] font-medium tracking-wide text-ink-dim">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  autoComplete="family-name"
                  className="mt-2 w-full rounded-md border border-border bg-surface px-4 py-2.5 text-[14px] text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Chen"
                />
              </div>
            </div>

            {/* Work email */}
            <div>
              <label htmlFor="email" className="block text-[12px] font-medium tracking-wide text-ink-dim">
                Work email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                className="mt-2 w-full rounded-md border border-border bg-surface px-4 py-2.5 text-[14px] text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="jane@firm.com"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-[12px] font-medium tracking-wide text-ink-dim">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                autoComplete="organization"
                className="mt-2 w-full rounded-md border border-border bg-surface px-4 py-2.5 text-[14px] text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Firm name"
              />
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-[12px] font-medium tracking-wide text-ink-dim">
                Role
              </label>
              <select
                id="role"
                name="role"
                required
                className="mt-2 w-full rounded-md border border-border bg-surface px-4 py-2.5 text-[14px] text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                defaultValue=""
              >
                <option value="" disabled>Select your role</option>
                <option value="c-suite">C-suite / Executive</option>
                <option value="ops">Operations lead</option>
                <option value="tech">Technology / Engineering</option>
                <option value="research">Research / Analysis</option>
                <option value="founder">Founder</option>
                <option value="investor">Investor / LP</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Team size */}
            <div>
              <label htmlFor="teamSize" className="block text-[12px] font-medium tracking-wide text-ink-dim">
                Team size
              </label>
              <select
                id="teamSize"
                name="teamSize"
                required
                className="mt-2 w-full rounded-md border border-border bg-surface px-4 py-2.5 text-[14px] text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                defaultValue=""
              >
                <option value="" disabled>Select team size</option>
                <option value="1-10">1 to 10</option>
                <option value="11-50">11 to 50</option>
                <option value="51-200">51 to 200</option>
                <option value="201-1000">201 to 1000</option>
                <option value="1000+">1000+</option>
              </select>
            </div>

            {/* Use case */}
            <div>
              <label htmlFor="useCase" className="block text-[12px] font-medium tracking-wide text-ink-dim">
                What work are you trying to automate?
              </label>
              <p className="mt-1 text-[12px] text-ink-muted">
                Goals are easier to articulate than workflows. Tell us what you are trying to accomplish.
              </p>
              <textarea
                id="useCase"
                name="useCase"
                rows={4}
                className="mt-2 w-full rounded-md border border-border bg-surface px-4 py-2.5 text-[14px] text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="We spend 15 hours a week on counterparty prep across 4 analysts..."
              />
            </div>

            {/* Context sources */}
            <div>
              <div className="block text-[12px] font-medium tracking-wide text-ink-dim">
                Where does your team's context live?
              </div>
              <p className="mt-1 text-[12px] text-ink-muted">
                Select all that apply.
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  "Google Workspace",
                  "Microsoft 365",
                  "Slack",
                  "Salesforce",
                  "Notion",
                  "SharePoint",
                  "Internal wikis",
                  "Email archives",
                  "Other",
                ].map((source) => (
                  <label key={source} className="flex items-center gap-2.5 rounded-md border border-border bg-surface px-3 py-2.5 cursor-pointer hover:border-border-strong">
                    <input
                      type="checkbox"
                      name="contextSources"
                      value={source}
                      className="h-4 w-4 rounded border-border-strong accent-accent"
                    />
                    <span className="text-[13px] text-ink-dim">{source}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Deployment preference */}
            <div>
              <label htmlFor="deployment" className="block text-[12px] font-medium tracking-wide text-ink-dim">
                Deployment preference
              </label>
              <select
                id="deployment"
                name="deployment"
                className="mt-2 w-full rounded-md border border-border bg-surface px-4 py-2.5 text-[14px] text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                defaultValue=""
              >
                <option value="" disabled>Select preference</option>
                <option value="cloud">Cloud (hosted by TenX)</option>
                <option value="vpc">VPC (inside our network)</option>
                <option value="onprem">On-prem (our hardware)</option>
                <option value="unsure">Not sure yet</option>
              </select>
            </div>

            {/* Submit */}
            <div className="mt-4 flex flex-col gap-4 border-t border-border pt-6">
              <button type="submit" className="btn-primary arrow-link self-start">
                Submit request →
              </button>
              <p className="text-[12px] text-ink-muted">
                We review every request personally. Expect a response within two
                business days. No automated sequences. No drip campaigns.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Closing */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="eyebrow">What we look for</div>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-dim">
                Teams with real internal context. Work worth automating
                carefully. A sponsor with authority and budget.
              </p>
            </div>
            <div>
              <div className="eyebrow">What we do not want</div>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-dim">
                Tire-kickers. Teams looking for a demo. Firms without a real
                problem to solve.
              </p>
            </div>
            <div>
              <div className="eyebrow">Questions</div>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-dim">
                Email us directly at{" "}
                <a href="mailto:hello@agent-os.co" className="text-accent-bright hover:text-ink">
                  hello@agent-os.co
                </a>{" "}
                or{" "}
                <Link href="/product" className="text-accent-bright hover:text-ink">
                  read the architecture
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
