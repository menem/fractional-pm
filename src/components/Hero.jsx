import { Calendar } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-svh flex items-center justify-center bg-page">
      <div className="container max-w-4xl text-center">
        <div className="space-y-8 animate-fade-up">
          {/* Availability Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-line/50 rounded-full shadow-sm" style={{backgroundColor: '#F8FAFC'}}>
              <div className="w-2 h-2 bg-success rounded-full animate-pulse-dot"></div>
              <span className="text-sm text-slate/80">3 spots available this month</span>
            </div>
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.1] font-display font-bold text-ink tracking-tight">
            Launch your MVP in{' '}
            <span className="text-gradient">8 weeks</span>{' '}
            without hiring a full-time PM
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate max-w-3xl mx-auto">
            Fractional product management for startups. Stop wasting dev hours on features that don't ship.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="#book-call"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-hover active:bg-gold-pressed text-ink font-semibold rounded-sm shadow-gold hover:shadow-gold-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              Book a 15-min fit check
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-slate">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{border: '2px solid #16A34A'}}>
                <svg className="w-3 h-3" style={{color: '#16A34A'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Free intro call</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{border: '2px solid #16A34A'}}>
                <svg className="w-3 h-3" style={{color: '#16A34A'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{border: '2px solid #16A34A'}}>
                <svg className="w-3 h-3" style={{color: '#16A34A'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>No long-term contracts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
