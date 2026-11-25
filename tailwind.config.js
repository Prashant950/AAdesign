/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        choco: {
          DEFAULT: '#2B1810',
          dark: '#1C0E08',
          light: '#3E2419',
          muted: '#5C3A2B',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E6C667',
          dark: '#B38D1F',
        },
        cream: '#FAF6F0',
      },
      fontFamily: {
        heading: ['"Montserrat"', '"Bricolage Grotesque"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        marqueeSlow: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        zoom: { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(1.08)' } },
        rise: { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'none' } },
        toastIn: { '0%': { opacity: 0, transform: 'translateY(16px) scale(0.96)' }, '100%': { opacity: 1, transform: 'translateY(0) scale(1)' } },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        marqueeSlow: 'marqueeSlow 40s linear infinite',
        zoom: 'zoom 6s ease-out forwards',
        rise: 'rise 0.7s ease-out both',
        toastIn: 'toastIn 0.3s ease-out both',
      },
    },
  },
  plugins: [],
};
