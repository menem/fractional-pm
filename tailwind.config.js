/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: 'hsl(var(--ink))',
        slate: 'hsl(var(--slate))',
        line: 'hsl(var(--line))',
        surface: 'hsl(var(--surface))',
        page: 'hsl(var(--page))',
        gold: 'hsl(var(--gold))',
        'gold-hover': 'hsl(var(--gold-hover))',
        'gold-pressed': 'hsl(var(--gold-pressed))',
        'trust-blue': 'hsl(var(--trust-blue))',
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        error: 'hsl(var(--error))',
        info: 'hsl(var(--info))',
      },
      fontFamily: {
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['44px', { lineHeight: '52px', fontWeight: '700' }],
        'display-2': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'display-3': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'subhead': ['18px', { lineHeight: '28px', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '26px', fontWeight: '400' }],
        'caption': ['13px', { lineHeight: '20px', fontWeight: '400' }],
      },
      borderRadius: {
        'sm': '12px',
        'md': '16px',
        'lg': '24px',
      },
      boxShadow: {
        'card': '0 4px 24px hsl(220 30% 8% / 0.05)',
        'card-hover': '0 8px 32px hsl(220 30% 8% / 0.08)',
        'gold': '0 8px 24px hsl(45 95% 48% / 0.2)',
        'gold-lg': '0 12px 40px hsl(45 95% 48% / 0.3)',
      },
      maxWidth: {
        'content': '680px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-up-delay-1': 'fadeUp 0.6s ease-out 0.1s forwards',
        'fade-up-delay-2': 'fadeUp 0.6s ease-out 0.2s forwards',
        'fade-up-delay-3': 'fadeUp 0.6s ease-out 0.3s forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
