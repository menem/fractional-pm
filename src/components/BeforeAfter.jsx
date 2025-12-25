import { ArrowRight, Check } from 'lucide-react'

const BeforeAfter = () => {
  return (
    <section className="section-py bg-page">
      <div className="container">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-display-2 font-display text-ink mb-4">
            From chaos to clarity
          </h2>
          <p className="text-lg text-slate max-w-3xl mx-auto">
            I turn vague ideas into execution-ready roadmaps. Here's what organized looks like.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Before Card */}
          <div className="bg-surface border border-line rounded-lg p-8 animate-fade-up-delay-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-error rounded-full"></div>
              <h3 className="text-xl font-semibold text-ink">Before</h3>
            </div>

            <div className="space-y-4 mb-8">
              {/* Placeholder bars */}
              <div className="h-12 bg-line/50 rounded-lg"></div>
              <div className="h-8 bg-line/50 rounded-lg w-3/4"></div>
              <div className="h-12 bg-line/50 rounded-lg"></div>
              <div className="h-6 bg-line/50 rounded-lg w-1/2"></div>
              <div className="h-12 bg-line/50 rounded-lg"></div>
            </div>

            {/* Status badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-error/10 text-error text-xs font-medium rounded">
                URGENT
              </span>
              <span className="px-3 py-1 bg-warning/10 text-warning text-xs font-medium rounded">
                BLOCKED
              </span>
              <span className="px-3 py-1 bg-slate/10 text-slate text-xs font-medium rounded">
                ???
              </span>
            </div>

            <p className="text-sm text-slate">
              Scattered priorities, unclear specs, devs waiting
            </p>
          </div>

          {/* After Card with Arrow */}
          <div className="relative">
            {/* Arrow on desktop */}
            <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-gold">
                <ArrowRight className="w-6 h-6 text-ink" />
              </div>
            </div>

            <div className="bg-surface border-2 border-gold/30 rounded-lg p-8 animate-fade-up-delay-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-gold rounded-full"></div>
                <h3 className="text-xl font-semibold text-ink">After</h3>
              </div>

              <div className="space-y-4 mb-8">
                {/* Week 1-2 */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider">
                    Week 1-2: Discovery
                  </p>
                  <div className="bg-gold/10 border border-gold/20 rounded-lg p-3 flex items-center gap-2">
                    <Check className="w-4 h-4 flex-shrink-0" style={{color: '#F8BA1C'}} />
                    <span className="text-sm text-ink">User research synthesis</span>
                  </div>
                </div>

                {/* Week 3-6 */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider">
                    Week 3-6: Build
                  </p>
                  <div className="bg-page border border-line rounded-lg p-3">
                    <span className="text-sm text-ink">MVP Feature A — Ready for dev</span>
                  </div>
                  <div className="bg-page border border-line rounded-lg p-3">
                    <span className="text-sm text-ink">MVP Feature B — Spec complete</span>
                  </div>
                </div>

                {/* Week 7-8 */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider">
                    Week 7-8: Launch
                  </p>
                  <div className="bg-page border border-line rounded-lg p-3">
                    <span className="text-sm text-ink">Beta release → User feedback</span>
                  </div>
                </div>
              </div>

              <p className="text-sm font-medium text-ink">
                Clear priorities, ready specs, shipping weekly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter
