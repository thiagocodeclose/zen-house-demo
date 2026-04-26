import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        fog: 'var(--bg-fog)',
        dark: 'var(--bg-dark)',
        blue: 'var(--blue)',
        'blue-light': 'var(--blue-light)',
        stone: 'var(--stone)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        border: 'var(--border)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'slow-zoom': 'slowZoom 28s ease-in-out infinite alternate',
      },
      keyframes: {
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
