const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      lineHeight: {
        tighter: '1.2',
        tight: '1.3',
        snug: '1.4',
        normal: '1.5',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'brand-green': {
          100: 'hsl(var(--brand-green-100))',
          200: 'hsl(var(--brand-green-200))',
          300: 'hsl(var(--brand-green-300))',
          400: 'hsl(var(--brand-green-400))',
          500: 'hsl(var(--brand-green-500))',
        },
        'detailing-gray': {
          100: 'hsl(var(--detailing-gray-100))',
          200: 'hsl(var(--detailing-gray-200))',
          300: 'hsl(var(--detailing-gray-300))',
          400: 'hsl(var(--detailing-gray-400))',
          500: 'hsl(var(--detailing-gray-500))',
          600: 'hsl(var(--detailing-gray-600))',
          700: 'hsl(var(--detailing-gray-700))',
        },
        'pastel-yellow': {
          100: 'hsl(var(--pastel-yellow-100))',
          200: 'hsl(var(--pastel-yellow-200))',
        },
        'pastel-red': {
          100: 'hsl(var(--pastel-red-100))',
          200: 'hsl(var(--pastel-red-200))',
        },
        'pastel-green': {
          100: 'hsl(var(--pastel-green-100))',
          200: 'hsl(var(--pastel-green-200))',
        },
        'action-red': 'hsl(var(--action-red))',
        'action-yellow': 'hsl(var(--action-yellow))',
        'action-green': 'hsl(var(--action-green))',
        'action-purple': 'hsl(var(--action-purple))',
        'action-blue': 'hsl(var(--action-blue))',
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
