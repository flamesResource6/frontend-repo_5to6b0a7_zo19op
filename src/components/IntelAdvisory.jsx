import { Target, KeyRound, ShieldCheck, Satellite } from 'lucide-react'

export default function IntelAdvisory() {
  const streams = [
    { icon: Target, title: 'Executive Intelligence Briefs', desc: 'Weekly sector threat briefs, actor movements, and prioritized actions for leadership.' },
    { icon: ShieldCheck, title: 'Board Readiness', desc: 'Audit-ready narratives, risk scenarios, and program maturity mapping for credible oversight.' },
    { icon: KeyRound, title: 'Offensive Programs', desc: 'Adversary emulation, purple teaming, and attack surface reductions tied to outcomes.' },
    { icon: Satellite, title: 'Trusted Network', desc: 'Discreet access to niche researchers, sources, and global incident context.' },
  ]

  return (
    <section id="intel" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_0%,rgba(77,227,164,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Intelligence & Advisory</h2>
          <p className="mt-3 text-slate-300/90">Strategic guidance, technical depth. Built for leaders who need truth and traction.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {streams.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/30">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
