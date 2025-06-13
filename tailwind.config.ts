import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#050C9C',
        },
        secondary: {
          blue: '#3572EF',
        },
      },
      fontSize: {
        'text-xs': ['12px', { lineHeight: '18px' }],
        'text-s': ['14px', { lineHeight: '20px' }],
        'text-m': ['16px', { lineHeight: '24px' }],
        'text-l': ['18px', { lineHeight: '28px' }],
        'heading-s': ['24px', { lineHeight: '32px' }],
        'heading-m': ['32px', { lineHeight: '40px' }],
        'heading-l': ['40px', { lineHeight: '48px' }],
        'heading-xl': ['48px', { lineHeight: '56px' }],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [daisyui],
} satisfies Config;
