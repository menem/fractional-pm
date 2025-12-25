import { useState, useEffect } from 'react'

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero section (about 600px)
      setIsVisible(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 bg-page border-t border-line p-4 shadow-xl z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href="#book-call"
        className="block w-full text-center px-6 py-4 bg-gold hover:bg-gold-hover active:bg-gold-pressed text-ink font-semibold rounded-sm shadow-gold transition-colors duration-200"
      >
        Book a Roadmap Review
      </a>
    </div>
  )
}

export default StickyCTA
