import { AlertTriangle, Flame } from 'lucide-react'

const Problem = () => {
  return (
    <section className="section-py bg-surface border-y border-line">
      <div className="container max-w-4xl">
        <div className="text-center space-y-8">
          {/* Warning Icon */}
          <div className="flex justify-center animate-fade-up">
            <div className="w-16 h-16 rounded-lg bg-error/10 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-error" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-4 animate-fade-up-delay-1">
            <h2 className="text-4xl lg:text-[48px] lg:leading-[1.15] font-display font-bold text-ink tracking-tight">
              You have a vision, but your backlog is a mess
            </h2>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              Your team is stuck in reactive mode. Features are half-baked. Deadlines slip. And your investors are asking when you'll actually ship something.
            </p>
          </div>

          {/* Every week you delay section */}
          <div className="max-w-2xl mx-auto animate-fade-up-delay-2">
            <div className="bg-page border border-line rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <Flame className="w-6 h-6 text-error flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="text-xl font-display font-semibold text-ink mb-2">
                    Every week you delay is cash burned
                  </h3>
                  <p className="text-slate mb-4">
                    Your backlog is probably full of:
                  </p>
                  <ul className="space-y-2 text-slate">
                    <li className="flex items-start gap-2">
                      <span className="text-error mt-1">•</span>
                      <span>Half-written user stories scattered across tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-error mt-1">•</span>
                      <span>Features requested by one customer, not validated by others</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-error mt-1">•</span>
                      <span>No prioritization framework (just whoever screamed loudest)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-error mt-1">•</span>
                      <span>Engineers guessing at requirements mid-sprint</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Solution */}
              <div className="pt-6 border-t border-line">
                <p className="text-slate text-left">
                  <span className="font-semibold" style={{color: '#F8BA1C'}}>I step in as your fractional head of product</span> and turn that chaos into a clear 8-week roadmap your team can actually execute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
