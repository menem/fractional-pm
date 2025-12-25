import { DollarSign, Clock, TrendingUp } from 'lucide-react'

const stats = [
  {
    icon: DollarSign,
    number: '$2M+',
    label: 'Revenue generated from products I\'ve launched',
  },
  {
    icon: Clock,
    number: '30%',
    label: 'Average reduction in dev cycle time',
  },
  {
    icon: TrendingUp,
    number: '15+',
    label: 'Products shipped from 0 to launch',
  },
]

const SocialProof = () => {
  return (
    <section className="section-py bg-surface">
      <div className="container max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-display-2 font-display text-ink mb-4">
            Results that matter
          </h2>
          <p className="text-lg text-slate max-w-3xl mx-auto">
            From early-stage startups to scale-ups, I've helped teams ship faster and smarter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`text-center p-8 bg-page border border-line rounded-lg animate-fade-up-delay-${index + 1}`}
              >
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6" style={{color: '#F8BA1C'}} strokeWidth={2} />
                </div>
                <div className="text-5xl lg:text-[52px] font-bold font-display mb-3 leading-none" style={{color: '#F8BA1C'}}>
                  {stat.number}
                </div>
                <p className="text-base text-slate">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto animate-fade-up-delay-3">
          <div className="bg-page border border-line rounded-lg p-8 lg:p-10">
            <div className="mb-6">
              <svg className="w-8 h-8" style={{color: '#F8BA1C', opacity: 0.3}} fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>
            <p className="text-lg text-ink mb-6 leading-relaxed">
              Menem came in when our backlog was chaos. Within 2 weeks, our devs knew exactly what to build. We shipped our MVP a month ahead of schedule.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-ink font-semibold text-lg">
                S
              </div>
              <div>
                <div className="font-semibold text-ink">Startup Founder</div>
                <div className="text-sm text-slate">Series A SaaS Company</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
