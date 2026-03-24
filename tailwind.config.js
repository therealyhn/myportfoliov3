/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#3B82F6',
        },
        page:    'rgb(var(--color-page) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        line:    'rgb(var(--color-line) / <alpha-value>)',
        ink:     'rgb(var(--color-ink) / <alpha-value>)',
        muted:   'rgb(var(--color-muted) / <alpha-value>)',
        accent:  'rgb(var(--color-accent) / <alpha-value>)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-25%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        },
      })
    },
  ],
}
