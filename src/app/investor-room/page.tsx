"use client";

import { useState } from "react";
import "./investor-room.css";

export default function InvestorRoomPage() {
  const [dataroomOpen, setDataroomOpen] = useState(false);

  return (
    <>
{/* GATE: confidentiality acknowledgment (Agent Forge pattern) */}
<div className={`gate ${dataroomOpen ? 'hidden' : ''}`} id="gate">
  <div className="gate-card">
    <div className="stamp">Investor Dataroom · Strictly Confidential</div>
    <h2>AgentOS</h2>
    <p style={{fontSize: '14px', marginBottom: '18px'}}>A subsidiary of TenX Protocols Inc. (TSXV: TNX). Series A materials.</p>
    <div className="confidential">
      By accessing this dataroom you agree to treat its contents as confidential. Activity may be logged and tied to your access for security and audit purposes. This is not an offer or solicitation of securities.
    </div>
    <button onClick={() => setDataroomOpen(true)}>Access dataroom →</button>
  </div>
</div>

{/* HEADER */}
<header className="site">
  <div className="container">
    <div className="brand">AgentOS · Investor Dataroom</div>
    <nav className="nav-links">
      <a href="#sec-02">Deal</a>
      <a href="#sec-04">Market</a>
      <a href="#sec-05">Solution</a>
      <a href="#sec-08">Business</a>
      <a href="#sec-11">Team</a>
      <a href="#sec-13">Use of Funds</a>
      <a href="#sec-14">Terms</a>
      <a href="#sec-15">Cap</a>
    </nav>
    <div className="nav-meta">Series A · Confidential</div>
    <button className="hamburger" id="hamburger" aria-label="Menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
  <nav className="mobile-nav" id="mobileNav">
    <a href="#sec-02">Deal</a>
    <a href="#sec-04">Market</a>
    <a href="#sec-05">Solution</a>
    <a href="#sec-08">Business</a>
    <a href="#sec-11">Team</a>
    <a href="#sec-13">Use of Funds</a>
    <a href="#sec-14">Terms</a>
    <a href="#sec-15">Cap</a>
  </nav>
</header>

{/* 01 · HERO */}
<section className="hero" id="sec-01">
  <div className="grid-bg"></div>
  <div className="container">
    <div className="hero-content">
      <div className="hero-meta">01 / 17 · Series A · June 2026</div>
      <h1>The control layer for the AI workforce, built for regulated firms.</h1>
      <p className="lede">AgentOS lets regulated firms deploy and govern an AI workforce across the organization without surrendering data, compliance, or operational control.</p>
      <div className="hero-stamp">
        <span className="dot"></span>
        <span><strong style={{color: 'var(--ink)'}}>A TenX Protocols company</strong> · TSXV: TNX · Toronto · agent-os.co</span>
      </div>
    </div>
  </div>
  <div className="hero-stats">
    <div className="container">
      <div className="stat">
        <div className="k">Target Raise</div>
        <div className="v placeholder">— insert</div>
      </div>
      <div className="stat">
        <div className="k">Lead</div>
        <div className="v">TenX Protocols</div>
      </div>
      <div className="stat">
        <div className="k">TNX Price</div>
        <div className="v placeholder">— insert</div>
      </div>
      <div className="stat">
        <div className="k">Year-3 SOM</div>
        <div className="v placeholder">— insert</div>
      </div>
      <div className="stat">
        <div className="k">Roadmap</div>
        <div className="v">18 mo to scale</div>
      </div>
    </div>
  </div>
</section>

{/* 02 · DEAL OVERVIEW */}
<section id="sec-02" className="block">
  <div className="container">
    <div className="section-head">
      <div className="section-num">02 / 17 · Deal Overview</div>
      <h2>Series A · An operating business with signed demand and a live product.</h2>
    </div>
    <div className="deal-overview">
      <div className="summary">
        <h3>Summary · AgentOS Series A</h3>
        <p>AgentOS is the AI-workforce control plane subsidiary of TenX Protocols Inc. (TSXV: TNX), a publicly-traded operating company. The subsidiary is raising its Series A to scale a live product deployed with named design partners across two verticals (investment and recruitment) and to consolidate the governed-execution standard for the regulated mid-market before incumbents ship comparable governance.</p>
        <p>Two converging forces drive demand. Regulated firms now have to deploy AI agents that act, not just answer. And they cannot do that without identity-aware access, immutable audit, and sovereign deployment. AgentOS is built around exactly those four primitives. Models commoditize; the control layer above them does not.</p>
        <p style={{marginBottom: '0'}}>TenX Protocols anchors the round as lead investor, demonstrating parent-company conviction. Investors receive direct equity in the AgentOS subsidiary, with optional warrants on parent TSXV: TNX available on request.</p>
      </div>
      <div className="stats">
        <div className="stat">
          <div className="k">Stage</div>
          <div className="v">Series A</div>
        </div>
        <div className="stat">
          <div className="k">Instrument</div>
          <div className="v">Equity + Warrants</div>
        </div>
        <div className="stat">
          <div className="k">Target</div>
          <div className="v placeholder">— insert</div>
        </div>
        <div className="stat">
          <div className="k">Lead</div>
          <div className="v">TenX Protocols</div>
        </div>
        <div className="stat">
          <div className="k">Parent</div>
          <div className="v">TSXV: TNX</div>
        </div>
        <div className="stat">
          <div className="k">Pre-money</div>
          <div className="v placeholder">— insert</div>
        </div>
        <div className="stat">
          <div className="k">Close Target</div>
          <div className="v placeholder">— insert</div>
        </div>
        <div className="stat">
          <div className="k">Contact</div>
          <div className="v" style={{fontSize: '13px'}}><a href="/cdn-cgi/l/email-protection#e08d8194a094858e98ce898e83"><span className="__cf_email__" data-cfemail="b5d8d4c1f5c1d0dbcd9bdcdbd6">[email&#160;protected]</span></a></div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* 03 · PROBLEM (two drivers) */}
<section id="sec-03" className="block">
  <div className="container">
    <div className="section-head">
      <div className="section-num">03 / 17 · The Problem</div>
      <h2>Two converging forces driving enterprise demand.</h2>
    </div>
    <div className="drivers">
      <div className="driver">
        <div className="badge">[ Force 01 ] Pressure to deploy</div>
        <h3>Enterprises have to put agents to work.</h3>
        <ul>
          <li>40% of enterprise software will embed AI agents by end of 2026 (Gartner, 2025).</li>
          <li>Boards expect productivity gains across legal, finance, ops, and research.</li>
          <li>Buyers are cutting vendor count per category. The first governed standard wins the slot.</li>
          <li>Vertical agent leaders (Sierra, Harvey, Decagon, Cognition) have proved the category re-rates fast.</li>
        </ul>
        <div className="takeaway">Demand is real. The question is who delivers it safely.</div>
      </div>
      <div className="driver">
        <div className="badge">[ Force 02 ] Friction to deploy</div>
        <h3>Regulated firms cannot ship ungoverned agents.</h3>
        <ul>
          <li>Frontier models are capable. Action without governance is unacceptable to any regulated buyer.</li>
          <li>Microsoft Copilot defaulted to "leak or lobotomize" because identity-aware access at the boundary is hard.</li>
          <li>SOC 2, FINRA, HIPAA, GDPR all require audit trails on automated decisions.</li>
          <li>Buyers without internal AI teams cannot assemble a horizontal toolkit from scratch.</li>
        </ul>
        <div className="takeaway">The problem is not the model. The problem is the harness.</div>
      </div>
    </div>
  </div>
</section>

{/* 04 · MARKET */}
<section id="sec-04" className="block">
  <div className="container">
    <div className="section-head">
      <div className="section-num">04 / 17 · Market Opportunity</div>
      <h2>The regulated mid-market. The missing middle the giants ignore.</h2>
    </div>
    <p style={{maxWidth: '720px', marginBottom: '32px'}}>Roughly 100 to 5,000 employees. Real compliance obligations and repetitive, labor-heavy workflows. No AI engineering team and no budget for enterprise platforms. AI software reaching businesses is ~$300B, growing ~25% a year.</p>

    <div className="funnel">
      <div className="level">
        <div className="level-label">TAM · AI software reaching enterprise</div>
        <div className="level-size">~$300B</div>
        <div className="level-desc">Growing ~25% a year. Source: directional, third-party trackers, 2025–2026.</div>
      </div>
      <div className="level sam">
        <div className="level-label">SAM · Regulated mid-market</div>
        <div className="level-size">— insert</div>
        <div className="level-desc">100–5,000 employee firms with real compliance obligations across investment, recruitment, insurance, legal, fund admin, RIA, staffing.</div>
      </div>
      <div className="level som">
        <div className="level-label">SOM · Year-3 target</div>
        <div className="level-size">— insert</div>
        <div className="level-desc">Beachhead in executive search + RIAs + fund administrators. Bottom-up firms × ACV.</div>
      </div>
    </div>

    <div className="eyebrow" style={{marginTop: '32px', marginBottom: '14px'}}>Beachhead verticals</div>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
      <span style={{padding: '6px 14px', background: 'var(--surface)', border: '1px solid var(--border-strong)', borderRadius: '999px', fontSize: '12.5px', color: 'var(--ink-dim)'}}>Wealth managers</span>
      <span style={{padding: '6px 14px', background: 'var(--surface)', border: '1px solid var(--border-strong)', borderRadius: '999px', fontSize: '12.5px', color: 'var(--ink-dim)'}}>RIAs</span>
      <span style={{padding: '6px 14px', background: 'var(--surface)', border: '1px solid var(--border-strong)', borderRadius: '999px', fontSize: '12.5px', color: 'var(--ink-dim)'}}>Fund administrators</span>
      <span style={{padding: '6px 14px', background: 'var(--surface)', border: '1px solid var(--border-strong)', borderRadius: '999px', fontSize: '12.5px', color: 'var(--ink-dim)'}}>Insurance</span>
      <span style={{padding: '6px 14px', background: 'var(--surface)', border: '1px solid var(--border-strong)', borderRadius: '999px', fontSize: '12.5px', color: 'var(--ink-dim)'}}>Executive search</span>
      <span style={{padding: '6px 14px', background: 'var(--surface)', border: '1px solid var(--border-strong)', borderRadius: '999px', fontSize: '12.5px', color: 'var(--ink-dim)'}}>Staffing</span>
      <span style={{padding: '6px 14px', background: 'var(--surface)', border: '1px solid var(--border-strong)', borderRadius: '999px', fontSize: '12.5px', color: 'var(--ink-dim)'}}>Legal</span>
    </div>
  </div>
</section>

{/* 05 · SOLUTION */}
<section id="sec-05" className="block">
  <div className="container">
    <div className="section-head">
      <div className="section-num">05 / 17 · The Solution</div>
      <h2>The control layer between your people and the AI agents working on their behalf.</h2>
    </div>
    <p style={{maxWidth: '720px', marginBottom: '32px'}}>AgentOS owns the layer between an LLM and the firm. The four primitives are identity-aware access, policy-and-approval gates, observability and audit, and sovereign deployment. The same control plane runs every workflow, on any approved model.</p>
    <div className="three-col">
      <div className="cell">
        <h3>Deploy</h3>
        <p>Vertical-workflow templates for investment and recruitment. Pre-wired to the firm's data, tools, and identity. No assembly required from the buyer.</p>
      </div>
      <div className="cell">
        <h3>Govern</h3>
        <p>Every agent action runs under the user's permissions. Policy and approval gates on consequential steps. Immutable audit trail by default.</p>
      </div>
      <div className="cell">
        <h3>Compound</h3>
        <p>Policy graphs and audit datasets are earned in production. Switching costs rise once embedded in the workflow of record.</p>
      </div>
    </div>
  </div>
</section>

{/* 06 · PLATFORM (Control plane) */}
<section id="sec-06" className="block">
  <div className="container">
    <div className="section-head">
      <div className="section-num">06 / 17 · The Platform</div>
      <h2>One control plane. Four primitives. Every model.</h2>
    </div>
    <div className="plane">
      <div className="plane-grid">
        <div className="plane-cell">
          <div className="label">01</div>
          <h4>Identity &amp; access</h4>
          <p>Every agent is a privileged identity with scoped, least-privilege permissions.</p>
        </div>
        <div className="plane-cell">
          <div className="label">02</div>
          <h4>Policy &amp; approval</h4>
          <p>Human-in-the-loop gates and policy enforcement on consequential actions.</p>
        </div>
        <div className="plane-cell">
          <div className="label">03</div>
          <h4>Observability &amp; audit</h4>
          <p>Immutable logging. Replay any run, prove any output, export the trail.</p>
        </div>
        <div className="plane-cell">
          <div className="label">04</div>
          <h4>Sovereign deployment</h4>
          <p>Self-hosted and VPC delivery. Regulated data never leaves the perimeter.</p>
        </div>
      </div>
      <div className="plane-footnote">
        Model-neutral by design. The harness routes each task to the right model by policy, on the buyer&rsquo;s two levers: data sovereignty and cost.
      </div>
    </div>
  </div>
</section>

{/* 07 · HOW IT WORKS */}
<section id="sec-07" className="block">
  <div className="container">
    <div className="section-head">
      <div className="section-num">07 / 17 · How It Works</div>
      <h2>Three steps from contract to governed execution.</h2>
    </div>
    <div className="steps">
      <div className="step">
        <div className="num">01</div>
        <h3>Connect</h3>
        <p>Identity, data sources, and tools wired into the control plane. SSO, SCIM, and existing ACLs are preserved.</p>
      </div>
      <div className="step">
        <div className="num">02</div>
        <h3>Configure</h3>
        <p>Pick a vertical workflow template. Set autonomy level, approval gates, and model routing policy. Pilot live in weeks, not quarters.</p>
      </div>
      <div className="step">
        <div className="num">03</div>
        <h3>Govern</h3>
        <p>Agents run. Every action is logged. Outputs replayable. The system learns from approval patterns and routes future work accordingly.</p>
      </div>
    </div>
  </div>
</section>

{/* 08 · BUSINESS MODEL */}
<section id="sec-08" className="block">
  <div className="container">
    <div className="section-head">
      <div className="section-num">08 / 17 · Business Model</div>
      <h2>Outcome-based pricing. Land on one workflow. Expand across teams.</h2>
    </div>
    <p style={{maxWidth: '720px', marginBottom: '32px'}}>Pricing maps to value delivered, not seats consumed. Enter on one regulated workflow. Expand across teams and agent fleets. Net expansion is the growth engine. Audit history and policy raise retention.</p>
    <div className="streams">
      <div className="stream">
        <div className="num">01</div>
        <h4>Platform subscription</h4>
        <p>Annual platform fee per tenant. Tiered by deployment surface, seats, and security level.</p>
      </div>
      <div className="stream">
        <div className="num">02</div>
        <h4>Per-workflow pricing</h4>
        <p>Outcome-priced per governed workflow. Enters on one and expands across the firm.</p>
      </div>
      <div className="stream">
        <div className="num">03</div>
        <h4>Per-action usage</h4>
        <p>Metered on successful agent actions. Aligns vendor success with customer outcomes.</p>
      </div>
      <div className="stream">
        <div className="num">04</div>
        <h4>Enterprise &amp; VPC delivery</h4>
        <p>Premium tier for sovereign deployment. Higher contract value, longer commitments.</p>
      </div>
    </div>
  </div>
</section>

{/* 09 · WHY NOW */}
<section id="sec-09" className="block">
  <div className="container">
    <div className="section-head">
      <div className="section-num">09 / 17 · Why Now</div>
      <h2>The cycle just changed. Action replaces answers. Governance becomes the product.</h2>
    </div>
    <div className="three-col">
      <div className="cell">
        <h3>Read path → write path</h3>
        <p>Last cycle, models summarized. This cycle, agents act. They execute workflows, call tools, and change records in live systems. Value moves from answering to doing.</p>
      </div>
      <div className="cell">
        <h3>Control is the product</h3>
        <p>Frontier models are capable enough. Action without governance is unacceptable to any regulated buyer. The gate becomes the product, and the gate is the business.</p>
      </div>
      <div className="cell">
        <h3>The layer that lasts</h3>
        <p>Models commoditize. The harness above them accumulates context, policy, and audit. Swap the model, keep the layer. The moat lives at the control plane.</p>
      </div>
    </div>
  </div>
</section>

{/* 10 · ROADMAP */}
<section id="sec-10" className="block">
  <div className="container">
    <div className="section-head">
      <div className="section-num">10 / 17 · Roadmap</div>
      <h2>18-month execution plan.</h2>
    </div>
    <div className="timeline">
      <div className="phase current">
        <div className="quarter">Q3 2026</div>
        <div className="label">● Current · Phase 01</div>
        <h4>Consolidate</h4>
        <ul>
          <li>Close Series A</li>
          <li>Scale design partners across investment + recruitment</li>
          <li>Harden VPC deployment path</li>
          <li>SOC 2 Type I readiness</li>
        </ul>
      </div>
      <div className="phase">
        <div className="quarter">Q4 2026</div>
        <div className="label">○ Phase 02</div>
        <h4>Templatize</h4>
        <ul>
          <li>Productize 5 vertical workflows</li>
          <li>Self-serve onboarding for design-partner tier</li>
          <li>Audit + compliance documentation pack</li>
        </ul>
      </div>
      <div className="phase">
        <div className="quarter">Q1–Q2 2027</div>
        <div className="label">○ Phase 03</div>
        <h4>Scale</h4>
        <ul>
          <li>SOC 2 Type II</li>
          <li>Open access in regulated mid-market</li>
          <li>Channel partnerships</li>
          <li>Adjacent verticals: insurance, legal</li>
        </ul>
      </div>
      <div className="phase">
        <div className="quarter">Q3 2027+</div>
        <div className="label">○ Phase 04</div>
        <h4>Standard</h4>
        <ul>
          <li>Governed-execution standard in beachhead verticals</li>
          <li>Public sector + cross-border pilots</li>
          <li>Series B readiness</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* 11 · TEAM & BACKING */}
<section id="sec-11" className="block">
  <div className="container">
    <div className="section-head">
      <div className="section-num">11 / 17 · Team &amp; Backing</div>
      <h2>Operators who have built, exited, and run regulated infrastructure.</h2>
    </div>

    <div className="team-section">
      <div className="team-section-label">AgentOS Leadership</div>
      <div className="team-grid">
        <div className="team-card">
          <div className="name">Mat Cybula</div>
          <div className="role">CEO</div>
          <p className="bio">Ex-CEO Cryptiv (acquired by Coinsquare). MSc, London School of Economics.</p>
        </div>
        <div className="team-card">
          <div className="name">Filip Cybula</div>
          <div className="role">COO</div>
          <p className="bio">Co-founder and ex-COO Cryptiv. MSc, University of Oxford.</p>
        </div>
        <div className="team-card">
          <div className="name">Geoff Byers</div>
          <div className="role">CTO</div>
          <p className="bio">Ex-CTO Tetra Trust, qualified crypto custodian. Co-founder of Cryptiv.</p>
        </div>
      </div>
    </div>

    <div className="team-section">
      <div className="team-section-label">TenX Protocols · Parent Co. Executive Team</div>
      <div className="team-grid">
        <div className="team-card">
          <div className="name">Martin Bui</div>
          <div className="role">CFO</div>
          <p className="bio">Ex-corporate finance lead at Hut 8 Mining. Public-company markets and reporting.</p>
        </div>
        <div className="team-card">
          <div className="name">Julia Becker</div>
          <div className="role">Head of Communications</div>
          <p className="bio">Communications across financial services, AI, and crypto. Capital-markets storytelling.</p>
        </div>
        <div className="team-card">
          <div className="name">Michael Ashby</div>
          <div className="role">Board · Governance</div>
          <p className="bio">18 years institutional investment. Allocation oversight at AlgoQuant and Point72.</p>
        </div>
      </div>
    </div>

    <div className="team-section">
      <div className="team-section-label">Parent · TenX Protocols Inc. (TSXV: TNX)</div>
      <div className="card" style={{marginTop: '0'}}>
        <p style={{fontSize: '14px', marginBottom: '8px'}}>Public since December 2025. $33M+ raised across the platform. Operating company with validator infrastructure on Solana, Sui, Sei, and Tezos. Strategic partners include BONK and Borderless Capital.</p>
        <p style={{fontSize: '14px', margin: '0', color: 'var(--accent-deep)', fontStyle: 'italic'}}>"Where Networks Become Revenue."</p>
      </div>
    </div>
  </div>
</section>

{/* 12 · COMPETITION */}
<section id="sec-12" className="block">
  <div className="container">
    <div className="section-head">
      <div className="section-num">12 / 17 · Competitive Landscape</div>
      <h2>The incumbents are built for the Fortune 1000 stack. We are built for the missing middle.</h2>
    </div>
    <table className="vs-table">
      <thead>
        <tr><th>Competitor</th><th>Position</th></tr>
      </thead>
      <tbody>
        <tr><td>Microsoft / Copilot</td><td>Built for the Fortune 1000 stack. Not the regulated mid-market.</td></tr>
        <tr><td>Salesforce Agentforce</td><td>Requires the Salesforce ecosystem and its data model.</td></tr>
        <tr><td>ServiceNow</td><td>Heavy, costly implementation built for large enterprises.</td></tr>
        <tr><td>Open source</td><td>Powerful but raw. No governance, audit, or deployment controls.</td></tr>
      </tbody>
    </table>

    <div className="eyebrow" style={{marginTop: '42px', marginBottom: '12px'}}>Our durable edge</div>
    <div className="edges">
      <div className="edge">
        <div className="num">01</div>
        <h4>Sovereign deployment</h4>
        <p>Self-hosted and VPC. Regulated data never leaves the client perimeter, where hyperscaler defaults cannot follow.</p>
      </div>
      <div className="edge">
        <div className="num">02</div>
        <h4>Vertical regulated workflows</h4>
        <p>Productized as templates. Not a horizontal toolkit the buyer must assemble.</p>
      </div>
      <div className="edge">
        <div className="num">03</div>
        <h4>Identity-aware execution</h4>
        <p>Immutable audit and identity-aware execution. Compliance is built in, not bolted on after a breach.</p>
      </div>
      <div className="edge">
        <div className="num">04</div>
        <h4>Compounding data moat</h4>
        <p>Policy graphs and audit datasets are earned in production. Switching costs rise once embedded in the workflow of record.</p>
      </div>
    </div>

    <div className="eyebrow" style={{marginTop: '42px', marginBottom: '12px'}}>Outcome scale once a leader emerges</div>
    <div className="three-col">
      <div className="cell"><h3 style={{color: 'var(--accent-deep)'}}>Sierra · $15.0B</h3><p>Customer experience agents.</p></div>
      <div className="cell"><h3 style={{color: 'var(--accent-deep)'}}>Cognition · $10.2B</h3><p>Coding agents.</p></div>
      <div className="cell"><h3 style={{color: 'var(--accent-deep)'}}>Harvey · $8.0B</h3><p>Legal agents.</p></div>
    </div>
  </div>
</section>

{/* 13 · USE OF FUNDS */}
<section id="sec-13" className="block">
  <div className="container">
    <div className="section-head">
      <div className="section-num">13 / 17 · Use of Funds</div>
      <h2>Illustrative allocation of Series A proceeds.</h2>
    </div>
    <p style={{maxWidth: '720px'}}>Capital is deployed against four primary lines. Final allocation will be finalized with the lead investor.</p>
    <div className="uop">
      <div className="seg">
        <div className="pct">40%</div>
        <div className="seg-label">Go-to-market &amp; sales</div>
        <div className="seg-desc">Vertical-specific sales motions, channel partnerships, design-partner expansion.</div>
      </div>
      <div className="seg">
        <div className="pct">35%</div>
        <div className="seg-label">Engineering &amp; product</div>
        <div className="seg-desc">Control-plane hardening, additional vertical templates, multi-tenant scaling.</div>
      </div>
      <div className="seg">
        <div className="pct">15%</div>
        <div className="seg-label">Security &amp; compliance</div>
        <div className="seg-desc">SOC 2 Type I/II, FINRA/HIPAA readiness, third-party security review.</div>
      </div>
      <div className="seg">
        <div className="pct">10%</div>
        <div className="seg-label">G&amp;A</div>
        <div className="seg-desc">Legal, finance, operations, public-company subsidiary governance.</div>
      </div>
      <div className="seg" style={{background: 'var(--accent-soft)'}}>
        <div className="pct" style={{color: 'var(--accent-bright)'}}>+</div>
        <div className="seg-label">Anchor commitment</div>
        <div className="seg-desc">TenX Protocols anchors as lead, demonstrating parent-company conviction.</div>
      </div>
    </div>
  </div>
</section>

{/* 14 · DEAL TERMS */}
<section id="sec-14" className="block">
  <div className="container">
    <div className="section-head">
      <div className="section-num">14 / 17 · Deal Structure</div>
      <h2>Layered upside for Series A investors.</h2>
    </div>
    <p style={{maxWidth: '720px', marginBottom: '32px'}}>Series A investors take direct equity in the AgentOS subsidiary. Optional layered exposure to parent TenX Protocols (TSXV: TNX) is available on request.</p>
    <div className="three-col">
      <div className="cell">
        <h3>01 · Equity</h3>
        <p>Direct equity stake in Agent OS Inc. Participate in the upside of a focused AI-workforce control plane with a live product and signed demand.</p>
      </div>
      <div className="cell">
        <h3>02 · Public parent exposure</h3>
        <p>Optional warrant package on TenX Protocols (TSXV: TNX). Strike and ratio available on request. Material upside if parent appreciates.</p>
      </div>
      <div className="cell">
        <h3>03 · Information rights</h3>
        <p>Standard institutional terms. Quarterly reporting, pro-rata on subsequent rounds for qualifying investors, board observer rights above defined check size.</p>
      </div>
    </div>
    <p style={{marginTop: '24px', fontSize: '13px', color: 'var(--ink-muted)', fontStyle: 'italic'}}>Round size, valuation, and warrant terms shared on qualified investor request. Final deal terms confirmed in definitive subscription documentation.</p>
  </div>
</section>

{/* 15 · CAP STRUCTURE */}
<section id="sec-15" className="block">
  <div className="container">
    <div className="section-head">
      <div className="section-num">15 / 17 · Capital Structure</div>
      <h2>Wholly-owned subsidiary of a public-market parent.</h2>
    </div>
    <div className="cap-diagram">
      <div className="cap-row">
        <div className="row-label">Parent entity</div>
        <h3>TenX Protocols Inc.</h3>
        <p><strong style={{color: 'var(--ink)'}}>TSXV: TNX</strong> · Public since December 2025 · $33M+ raised · Validator infrastructure on Solana, Sui, Sei, Tezos · Strategic partners include BONK and Borderless Capital.</p>
      </div>
      <div className="cap-arrow">↓ 100% owned subsidiary</div>
      <div className="cap-row" style={{background: 'var(--accent-soft)', borderColor: 'rgba(79,70,229,0.35)'}}>
        <div className="row-label" style={{color: 'var(--accent-bright)'}}>Subsidiary · Raising</div>
        <h3>Agent OS Inc.</h3>
        <p>Delaware C-corp. AI workforce control plane. Live product with named design partners across investment and recruitment verticals. Series A live.</p>
      </div>
      <div className="cap-arrow">↓ Series A investors</div>
      <div className="cap-row">
        <div className="row-label">Investor position</div>
        <h3>Direct equity + optional TNX warrant package</h3>
        <p>Equity in Agent OS Inc. with optional layered exposure to parent TSXV: TNX. Standard institutional terms. Round size, valuation, and warrant terms shared on qualified investor request.</p>
      </div>
    </div>
  </div>
</section>

{/* 16 · RISK DISCLOSURE */}
<section id="sec-16" className="block">
  <div className="container">
    <div className="section-head">
      <div className="section-num">16 / 17 · Risk Disclosure</div>
      <h2>Forward-looking statements and standard Series A risk factors.</h2>
    </div>
    <div className="risk-box">
      <strong>[ Template · Pending legal review ]</strong>
      <p style={{marginTop: '14px'}}>This dataroom contains forward-looking information regarding Agent OS Inc. and its parent TenX Protocols Inc. Actual results may differ materially from the projections, plans, and milestones described herein. Risks include but are not limited to: product maturity and security hardening, competitive entry by hyperscalers and incumbents, regulatory change affecting AI deployment in regulated verticals, model-provider availability, customer concentration during the design-partner phase, and public-parent disclosure constraints.</p>
      <p>Nothing in this dataroom constitutes an offer to sell, or the solicitation of an offer to buy, any securities; any offering will be made only through definitive subscription documentation provided directly by Agent OS Inc. / TenX Protocols Inc. Final risk factors, securities-law disclosures, investor suitability requirements, and the binding terms of the offering will be set out in the subscription agreement made available on request.</p>
      <p style={{marginBottom: '0'}}>This template language is to be reviewed and finalized by Agent OS Inc. / TenX Protocols Inc. legal counsel prior to close.</p>
    </div>
  </div>
</section>

{/* 17 · JOIN ROUND */}
<section id="sec-17" className="cta">
  <div className="container">
    <div>
      <div className="nav-meta" style={{color: 'var(--accent)', marginBottom: '14px'}}>17 / 17 · Join the Series A</div>
      <h2>The governed AI workforce, for everyone the giants ignore.</h2>
      <p style={{marginTop: '14px'}}>Full deck, financial model, and detailed diligence materials available on qualified investor request. By introduction.</p>
    </div>
    <div style={{justifySelf: 'end'}}>
      <a className="btn" href="/cdn-cgi/l/email-protection#a5c8c4d1e5d1c0cbdd8bcccbc6">Request access →</a>
    </div>
  </div>
</section>

{/* 18 · DATA ROOM INDEX */}
<section id="data-room" className="block">
  <div className="container">
    <div className="section-head">
      <div className="section-num">Appendix · Data Room Index</div>
      <h2>Diligence materials available on request, gated by NDA.</h2>
    </div>
    <p style={{maxWidth: '680px', marginBottom: '24px'}}>Detailed materials are released to qualified investors on request. Email <a href="/cdn-cgi/l/email-protection#375a5643774352594f195e5954"><span className="__cf_email__" data-cfemail="660b0712261203081e480f0805">[email&#160;protected]</span></a> for NDA and access.</p>
    <div className="data-room-list">
      <div className="dr-item">
        <div>
          <div className="dr-name">Series A Investor Deck</div>
          <div className="dr-desc">12-slide PDF + technical appendix</div>
        </div>
        <span className="gated">Gated</span>
      </div>
      <div className="dr-item">
        <div>
          <div className="dr-name">Tear sheet (2-page summary)</div>
          <div className="dr-desc">High-level on a single share-able PDF</div>
        </div>
        <span className="gated">On request</span>
      </div>
      <div className="dr-item">
        <div>
          <div className="dr-name">Product demo &amp; screenshots</div>
          <div className="dr-desc">Recorded walkthroughs of investment + recruitment workflows</div>
        </div>
        <span className="gated">Gated</span>
      </div>
      <div className="dr-item">
        <div>
          <div className="dr-name">Architecture overview</div>
          <div className="dr-desc">Control plane, retrieval, workflow runtime, data flow diagrams</div>
        </div>
        <span className="gated">Gated</span>
      </div>
      <div className="dr-item">
        <div>
          <div className="dr-name">Security &amp; trust memo</div>
          <div className="dr-desc">Tenant isolation, audit, threat model, SOC 2 plan</div>
        </div>
        <span className="gated">Gated</span>
      </div>
      <div className="dr-item">
        <div>
          <div className="dr-name">Financial plan &amp; budget</div>
          <div className="dr-desc">18-month plan, use of funds, unit economics</div>
        </div>
        <span className="gated">Gated</span>
      </div>
      <div className="dr-item">
        <div>
          <div className="dr-name">Cap table &amp; corporate</div>
          <div className="dr-desc">Cap table, TenX intercompany, financing docs</div>
        </div>
        <span className="gated">Gated</span>
      </div>
      <div className="dr-item">
        <div>
          <div className="dr-name">Design partner case studies</div>
          <div className="dr-desc">Investment &amp; recruitment pilot results</div>
        </div>
        <span className="gated">Gated</span>
      </div>
    </div>
  </div>
</section>

<footer className="site">
  <div className="container">
    <div className="small">
      <strong style={{color: 'var(--ink)'}}>Agent OS Inc.</strong>, a wholly-owned subsidiary of TenX Protocols Inc. (TSXV: TNX). Strictly private and confidential; for the named recipient only. Not an offer or solicitation of securities. Metric fields marked &ldquo;insert&rdquo; to be populated by management before circulation. Market and valuation figures are directional, from third-party agentic-AI funding trackers and press / analyst reports, 2025&ndash;2026. Named counterparties referenced with consent.
    </div>
    <div className="small">Toronto · agent-os.co · <a href="/cdn-cgi/l/email-protection#8be6eaffcbffeee5f3a5e2e5e8"><span className="__cf_email__" data-cfemail="8fe2eefbcffbeae1f7a1e6e1ec">[email&#160;protected]</span></a></div>
  </div>
</footer>

{/* Session bar (Agent Forge pattern, kept subtle) */}
<div className="session-bar">
  <span>SERIES A · CONFIDENTIAL · DO NOT FORWARD</span>
  <span>agent-os.co</span>
</div>

<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
    </>
  );
}
