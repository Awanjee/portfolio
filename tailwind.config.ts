import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#0D0F12',
        surface: {
          1: '#14171B',
          2: '#1A1E23',
          3: '#20252B',
        },
        line: {
          subtle: '#23282F',
          DEFAULT: '#2C323A',
          strong: '#3A424C',
        },
        ink: {
          1: '#EEF1F4',
          2: '#A8B0B9',
          3: '#717982',
        },
        accent: {
          DEFAULT: '#7DD3FC',
          hover: '#A5E0FD',
          press: '#5CC2F5',
          contrast: '#04222E',
        },
        success: '#34D399',
        warning: '#FBBF24',
        danger: '#F87171',
      },
      backgroundColor: {
        'accent-soft': 'rgba(125,211,252,0.10)',
        'accent-soft-2': 'rgba(125,211,252,0.16)',
        'success-soft': 'rgba(52,211,153,0.12)',
        'warning-soft': 'rgba(251,191,36,0.12)',
        'danger-soft': 'rgba(248,113,113,0.12)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: ['40px', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '700' }],
        h1: ['30px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        h2: ['24px', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
        h3: ['19px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['16px', { lineHeight: '1.6' }],
        body: ['15px', { lineHeight: '1.55' }],
        small: ['13px', { lineHeight: '1.45' }],
        mono: ['12px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },
      borderRadius: {
        xs: '4px',
        sm: '6px',
        DEFAULT: '8px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        pill: '999px',
      },
      boxShadow: {
        1: '0 1px 2px rgba(0,0,0,0.40)',
        2: '0 6px 20px rgba(0,0,0,0.42)',
        3: '0 16px 40px rgba(0,0,0,0.52)',
        ring: '0 0 0 3px rgba(125,211,252,0.16)',
      },
    },
  },
  plugins: [],
}

export default config
