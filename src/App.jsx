import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Approach from './components/Approach'
import IntelAdvisory from './components/IntelAdvisory'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      {/* subtle grid */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px]" />

      <Navbar />
      <Hero />
      <Capabilities />
      <Approach />
      <IntelAdvisory />

      {/* Contact CTA */}
      <section id="contact" className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_0%,rgba(77,227,164,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-2xl border border-emerald-400/30 bg-gradient-to-b from-emerald-400/10 to-transparent p-8">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-white">Engage Pingshell</h3>
                <p className="mt-2 text-slate-300/90">Discreet engagement, senior-only team. We respond within one business day.</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300/80">
                  <li>• Email: contact@pingshell.io</li>
                  <li>• Signal: +1 (555) 000-0000</li>
                  <li>• PGP: 3A1B 8C2D 9E7F 1122</li>
                </ul>
              </div>
              <div>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                  <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="Name" />
                  <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="Work Email" />
                  <textarea rows={4} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="What do you want to achieve?" />
                  <button className="w-full rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-slate-900 shadow-[0_10px_40px_-12px_rgba(77,227,164,0.6)] hover:shadow-[0_12px_50px_-12px_rgba(77,227,164,0.75)]">
                    Request Confidential Brief
                  </button>
                  <p className="text-xs text-slate-400">By submitting, you agree to discreet follow-up and no marketing emails.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
