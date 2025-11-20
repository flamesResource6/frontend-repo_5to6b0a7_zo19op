import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] lg:min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(0,255,200,0.15),transparent_60%),radial-gradient(40%_30%_at_100%_0%,rgba(0,255,200,0.2),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-emerald-300/90">Executive-Grade • Offensive • Intelligence</p>
          <h1 className="text-4xl sm:text-6xl/tight font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(77,227,164,0.25)]">
            Executive-Grade Cybersecurity. Offensive Readiness. Intelligence Advisory.
          </h1>
          <p className="mt-6 text-lg text-slate-300/90">
            Pingshell equips boards and CXOs with decisive security posture, breach readiness, and intelligence-led action. Elite, discreet, and relentlessly technical.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 text-slate-900 font-semibold shadow-[0_10px_40px_-12px_rgba(77,227,164,0.6)] hover:shadow-[0_12px_50px_-12px_rgba(77,227,164,0.75)]">
              Engage Advisory
            </a>
            <a href="#capabilities" className="pointer-events-auto inline-flex items-center gap-2 rounded-lg border border-emerald-400/40 bg-white/5 px-5 py-3 text-emerald-300 hover:bg-white/10">
              Explore Capabilities
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}
