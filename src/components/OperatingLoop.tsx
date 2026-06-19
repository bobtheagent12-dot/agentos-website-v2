"use client";

import { useEffect, useState } from "react";

const steps = [
  { num: "01", label: "Read internal context", desc: "Docs, meetings, messages, dashboards, past decisions." },
  { num: "02", label: "Watch external change", desc: "News, competitors, customers, partners, market signals." },
  { num: "03", label: "Draft and automate", desc: "Briefs, prep notes, follow-ups, recurring workflows." },
  { num: "04", label: "Log every action", desc: "Retrieval, model call, action. Logged and exportable." },
];

export function OperatingLoop() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-lg border border-border bg-surface p-6">
      <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-ink-muted">
        Operating loop
      </div>
      <div className="mt-5 flex flex-col gap-1">
        {steps.map((step, i) => (
          <div key={step.num} className={`loop-step ${active === i ? "active" : ""}`}>
            <div className="flex items-center gap-4 py-2.5">
              <span className="loop-num w-8 text-[13px] font-mono text-ink-muted transition-colors">
                {step.num}
              </span>
              <div>
                <p className="text-[14px] font-medium text-ink">{step.label}</p>
                <p className="text-[12px] text-ink-dim">{step.desc}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="ml-4 h-3 w-px bg-border-strong" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
