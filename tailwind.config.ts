import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#090912',
        surface: '#13131f',
        panel: '#05050e',
        'panel-border': '#1a1a2e',
        'text-primary': '#f0f0f5',
        'text-muted': '#64748b',
        'accent-blue': '#4f8ef7',
        'accent-gold': '#c9a84c',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-syne)', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
