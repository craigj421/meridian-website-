import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "bg": "#05050e",
        "surface-container-lowest": "#0d0d17",
        "surface-container-low": "#1b1b25",
        "surface-container": "#1f1f2a",
        "surface-container-high": "#292934",
        "surface-dim": "#12121d",
        "outline-variant": "#3e4851",
        "outline": "#88929d",
        "on-surface": "#e4e0f0",
        "on-surface-variant": "#bec7d3",
        "primary": "#93ccff",
        "primary-container": "#00aaff",
        "primary-fixed-dim": "#93ccff",
        "on-primary": "#003351",
        "secondary": "#ffecc0",
        "secondary-container": "#fecb00",
        "on-secondary-container": "#6e5700",
        "tertiary": "#00e479",
        "tertiary-container": "#00ba61",
        "surface-variant": "#34343f",
        "surface": "#13131f",
        "panel": "#05050e",
        "panel-border": "#1a1a2e",
        "text-primary": "#e4e0f0",
        "text-muted": "#88929d",
        "accent-blue": "#93ccff",
        "accent-gold": "#fecb00",
      },
      fontFamily: {
        "display": ["Syne", "sans-serif"],
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "mono": ["JetBrains Mono", "SF Mono", "monospace"],
        "sans": ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
