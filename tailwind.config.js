/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAFAF8',
          100: '#F5F3EE',
          200: '#EDE9E2',
          300: '#DDD8CF',
        },
        charcoal: {
          900: '#0F0F0F',
          800: '#1A1A1A',
          700: '#2A2A2A',
          600: '#3A3A3A',
          500: '#5A5A5A',
          400: '#7A7A7A',
          300: '#9A9A9A',
        },
        rust: {
          900: '#5C2E0E',
          800: '#7A3A12',
          700: '#9B4A18',
          600: '#B85C22',
          500: '#C8682E',
          400: '#D4825A',
          100: '#F5E8DF',
        },
        sage: {
          700: '#3D5A4A',
          600: '#4E7060',
          500: '#5F8470',
          400: '#7A9E8C',
          100: '#E8F0EC',
        },
        navy: {
          900: '#0D1B2A',
          800: '#162235',
          700: '#1E3045',
          600: '#2A4060',
          500: '#375278',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.4) 100%)',
      },
    },
  },
  plugins: [],
};
