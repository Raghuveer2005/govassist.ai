/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9ebff',
          200: '#bcdcff',
          300: '#8ec5ff',
          400: '#59a4ff',
          500: '#3182f6',
          600: '#1f63e0',
          700: '#194fb5',
          800: '#194392',
          900: '#1a3a75',
        },
        accent: {
          50: '#fff8eb',
          100: '#ffecc6',
          400: '#f0a83c',
          500: '#e08e1f',
          600: '#bd7215',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
