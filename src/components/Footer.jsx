export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(77,227,164,0.05),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-white font-semibold tracking-tight">Pingshell</p>
            <p className="text-xs text-emerald-300/80">Executive-Grade Cybersecurity. Offensive Readiness. Intelligence Advisory.</p>
          </div>
          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} Pingshell. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
