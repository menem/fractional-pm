import { Search, Wrench, Rocket } from 'lucide-react'

const benefits = [
  {
    icon: Search,
    title: 'Discovery & strategy',
    description: 'I synthesize user research, competitive analysis, and market data into a clear product strategy.',
    highlight: 'When I run Discovery,',
    result: 'you stop guessing,',
    outcome: 'so you build only what sells',
  },
  {
    icon: Wrench,
    title: 'Sprint management',
    description: 'I write specs, prioritize backlogs, and run ceremonies so your team knows exactly what to build.',
    highlight: 'When I manage Sprints,',
    result: 'your devs get unblocked,',
    outcome: 'so you ship 2x faster',
  },
  {
    icon: Rocket,
    title: 'Launch execution',
    description: 'I coordinate go-to-market, manage stakeholders, and ensure your launch hits the mark.',
    highlight: 'When I handle Launch,',
    result: 'you focus on marketing,',
    outcome: 'so you get revenue sooner',
  },
]

const Benefits = () => {
  return (
    <section className="section-py bg-page">
      <div className="container">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-display-2 font-display text-ink mb-4">
            What I actually do
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            End-to-end product management, delivered fractionally
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className={`bg-surface border border-line rounded-lg p-6 lg:p-8 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 animate-fade-up-delay-${index + 1}`}
              >
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" style={{color: '#F8BA1C'}} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-4">
                  {benefit.title}
                </h3>
                <p className="text-body text-slate mb-6">
                  {benefit.description}
                </p>
                <p className="text-sm text-slate">
                  {benefit.highlight}{' '}
                  <span className="font-semibold text-ink">{benefit.result}</span>{' '}
                  <span className="text-gradient font-semibold">{benefit.outcome}</span>.
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits
