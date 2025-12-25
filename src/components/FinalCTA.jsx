import { Calendar } from 'lucide-react'

const trustBadges = [
  '15-minute call',
  'No commitment',
  'No long-term contracts',
]

const FinalCTA = () => {
  return (
    <section id="book-call" className="section-py-lg bg-page">
      <div className="container max-w-4xl">
        <div className="text-center space-y-8">
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-4xl lg:text-[48px] lg:leading-[1.15] font-display font-bold text-ink tracking-tight">
              Stop the chaos.{' '}
              <span className="text-gradient">Start shipping.</span>
            </h2>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              Book a free 15-minute fit check. We'll audit your current process and identify the #1 bottleneck slowing you down.
            </p>
          </div>

          {/* Calendly Card */}
          <div className="max-w-2xl mx-auto animate-fade-up-delay-1">
            <div className="bg-surface border border-line rounded-lg p-8 lg:p-10">
              <div className="w-16 h-16 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8" style={{color: '#F8BA1C'}} />
              </div>

              <h3 className="text-2xl font-display font-semibold text-ink mb-4">
                Schedule your fit check
              </h3>

              <p className="text-slate mb-8">
                Pick a time that works for you. I'll come prepared with questions about your product and process.
              </p>

              <a
                href="https://calendly.com/menem-/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 bg-gold hover:bg-gold-hover active:bg-gold-pressed text-ink font-semibold rounded-sm shadow-gold hover:shadow-gold-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                Open calendar
              </a>

              <p className="text-sm text-slate mt-6">
                No sales pressure. Just a focused conversation about your product.
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="pt-4 animate-fade-up-delay-2">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2"
                >
                  <div className="w-5 h-5 rounded-full border-2 border-success flex items-center justify-center">
                    <svg className="w-3 h-3 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
