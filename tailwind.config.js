/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#050812',
        royal: '#0a1d3f',
        sapphire: '#123f75',
        gold: '#f8c75a',
        amberfire: '#d88925',
        ivory: '#fff8e6',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        halo: '0 0 60px rgba(248, 199, 90, 0.28)',
        gold: '0 18px 60px rgba(216, 137, 37, 0.24)',
      },
      backgroundImage: {
        'gold-line': 'linear-gradient(90deg, transparent, rgba(248,199,90,.9), transparent)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '.45', transform: 'scale(1)' },
          '50%': { opacity: '.85', transform: 'scale(1.05)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        pulseGlow: 'pulseGlow 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
