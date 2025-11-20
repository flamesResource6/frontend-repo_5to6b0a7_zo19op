import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Approach', href: '#approach' },
  { label: 'Intelligence', href: '#intel' },
  { label: 'Advisory', href: '#advisory' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur-xl">
          <a href="#" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-emerald-300 to-teal-500 ring-1 ring-emerald-300/50 shadow-[0_0_25px_rgba(77,227,164,0.55)]" />
            <div>
              <p className="text-white font-semibold tracking-tight">Pingshell</p>
              <p className="text-xs text-emerald-300/80">pingshell.io</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-emerald-400/10 px-4 py-2 text-emerald-300 ring-1 ring-inset ring-emerald-400/30 hover:bg-emerald-400/15">
              Engage
            </a>
          </nav>

          <button className="md:hidden text-slate-200" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur-xl md:hidden">
            <div className="space-y-1 p-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/5">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-lg bg-emerald-400/10 px-3 py-2 text-emerald-300 ring-1 ring-inset ring-emerald-400/30 hover:bg-emerald-400/15">
                Engage
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
