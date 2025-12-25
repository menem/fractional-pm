import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'Why not just hire a full-time PM?',
    answer: 'A full-time PM costs $150K+ plus equity and benefits. Most early-stage startups don\'t need (or can\'t afford) that yet. Fractional gives you senior PM expertise exactly when you need it, without the overhead.'
  },
  {
    question: 'How fast can you start?',
    answer: 'Typically within 1-2 weeks. After our fit check call, I\'ll send a light contract and we can kick off discovery immediately.'
  },
  {
    question: 'What if we need to pause?',
    answer: 'No problem. Engagements are flexible. If you need to pause between sprints or after a launch, we can pick back up when you\'re ready. No penalties, no long-term lock-in.'
  },
  {
    question: 'Do you write code?',
    answer: 'No. I focus on product strategy, roadmapping, and sprint management. I write specs and work closely with your engineers, but I don\'t write production code.'
  },
  {
    question: 'What size companies do you work with?',
    answer: 'Primarily seed to Series B startups with 2-20 person dev teams. I\'m most valuable when you need product leadership but aren\'t ready for a full-time VP of Product.'
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(4)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-py bg-page">
      <div className="container max-w-3xl">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl lg:text-[48px] lg:leading-[1.15] font-display font-bold text-ink tracking-tight mb-4">
            Questions? Answers.
          </h2>
          <p className="text-lg text-slate">
            Everything you need to know before we talk.
          </p>
        </div>

        <div className="space-y-4 animate-fade-up-delay-1">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="border border-line rounded-lg overflow-hidden bg-page"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group transition-colors"
                >
                  <span className="font-semibold text-ink pr-8 group-hover:transition-colors group-hover:duration-200" style={{'--hover-color': '#F8BA1C'}} onMouseEnter={(e) => e.currentTarget.style.color = '#F8BA1C'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={'w-5 h-5 text-slate flex-shrink-0 transition-transform duration-200 ' + (isOpen ? 'rotate-180' : '')}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-slate leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
