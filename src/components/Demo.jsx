const Demo = () => {
  return (
    <section className="section-py bg-ink">
      <div className="container">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Left - Visual */}
          <div className="order-2 lg:order-1 animate-fade-up">
            <svg viewBox="0 0 600 400" className="w-full h-auto rounded-md">
              <rect width="600" height="400" rx="16" fill="#0B1220"/>

              {/* Left Panel */}
              <rect x="20" y="20" width="200" height="360" rx="12" fill="#1E293B"/>
              <rect x="40" y="40" width="160" height="24" rx="6" fill="hsl(var(--gold))"/>

              {/* Cards */}
              <rect x="40" y="80" width="160" height="60" rx="8" fill="#334155"/>
              <rect x="50" y="90" width="80" height="8" rx="4" fill="#E2E8F0"/>
              <rect x="50" y="105" width="120" height="6" rx="3" fill="#64748B"/>
              <rect x="50" y="118" width="100" height="6" rx="3" fill="#64748B"/>

              <rect x="40" y="155" width="160" height="60" rx="8" fill="#334155"/>
              <rect x="50" y="165" width="100" height="8" rx="4" fill="#E2E8F0"/>
              <rect x="50" y="180" width="120" height="6" rx="3" fill="#64748B"/>
              <rect x="50" y="193" width="80" height="6" rx="3" fill="#64748B"/>

              {/* Right Panel */}
              <rect x="240" y="20" width="340" height="360" rx="12" fill="#1E293B"/>

              {/* Task Items */}
              <rect x="260" y="40" width="300" height="40" rx="8" fill="#334155"/>
              <rect x="280" y="55" width="120" height="10" rx="5" fill="hsl(var(--success))"/>

              <rect x="260" y="95" width="300" height="40" rx="8" fill="#334155"/>
              <rect x="280" y="110" width="160" height="10" rx="5" fill="hsl(var(--trust-blue))"/>

              <rect x="260" y="150" width="300" height="40" rx="8" fill="#334155"/>
              <rect x="280" y="165" width="100" height="10" rx="5" fill="#64748B"/>

              {/* Footer Text */}
              <text x="300" y="380" fill="hsl(var(--gold))" fontSize="14" fontFamily="Inter" fontWeight="600">
                Organized. Ready to Code.
              </text>
            </svg>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-6 animate-fade-up-delay-1">
            <h2 className="text-display-2 font-display text-surface">
              I turn vague ideas into execution-ready specs like this
            </h2>

            <p className="text-body text-line">
              Within 48 hours of starting, you'll have a clean backlog, prioritized features, and user stories your developers can actually build from.
            </p>

            <a
              href="#book-call"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-surface/50 hover:border-surface hover:bg-surface/5 text-surface font-semibold rounded-sm transition-all duration-200"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demo
