export default function Approach() {
  const items = [
    { k: '01', t: 'Intelligence-Led', d: 'Decisions anchored in threat reality, not dashboards. Collection, attribution, and intent guide every recommendation.' },
    { k: '02', t: 'Offense-Informed', d: 'Operations shaped by adversary TTPs. We test your posture as it will be targeted.' },
    { k: '03', t: 'Executive-Ready', d: 'Clear, defensible storytelling for boards and regulators. No noise—only signal.' },
    { k: '04', t: 'Outcome-Driven', d: 'We measure what matters: time-to-detect, time-to-contain, and business risk reduction.' }
  ]

  return (
    <section id="approach" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(77,227,164,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Approach</h2>
          <p className="mt-3 text-slate-300/90">A discreet, senior-only team working directly with CISOs and boards.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((i) => (
            <div key={i.k} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-emerald-300 font-mono text-sm">{i.k}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{i.t}</h3>
              <p className="mt-2 text-slate-300/90">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
