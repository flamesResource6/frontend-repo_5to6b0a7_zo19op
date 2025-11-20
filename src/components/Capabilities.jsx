import { Shield, Radar, Network, Binary, Lock, Globe2 } from 'lucide-react'

const items = [
  {
    icon: Shield,
    title: 'Offensive Readiness',
    desc: 'Red team programs, adversary emulation, and breach simulations aligned to real-world TTPs.'
  },
  {
    icon: Radar,
    title: 'Threat Intelligence',
    desc: 'Targeted intel collection across dark web, actor infrastructure, and sector-specific risks.'
  },
  {
    icon: Network,
    title: 'Attack Surface',
    desc: 'Continuous discovery, asset inventory, and external exposure reduction at executive depth.'
  },
  {
    icon: Binary,
    title: 'Detection Engineering',
    desc: 'Telemetry strategy, signal design, and response playbooks tuned for speed and clarity.'
  },
  {
    icon: Lock,
    title: 'Board & CISO Advisory',
    desc: 'Strategy, governance, and program design for measurable resilience and credible reporting.'
  },
  {
    icon: Globe2,
    title: 'Crisis & Incident',
    desc: 'Breach readiness, executive comms, and trusted guidance during high-pressure events.'
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_0%,rgba(77,227,164,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Capabilities</h2>
          <p className="mt-3 text-slate-300/90">Precision execution across offensive security, threat intelligence, and executive advisory.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 transition hover:border-emerald-400/40">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/30">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
