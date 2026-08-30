/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#800020',
          dark: '#5c0017',
          light: '#a0003a',
          subtle: 'rgba(128, 0, 32, 0.06)',
          hover: '#950027',
        },
        brand: {
          black: '#161618',
          gray: {
            100: '#EAEAEE',
            200: '#D4D4DA',
            400: '#8E8E93',
            600: '#636366',
            800: '#2C2C2E',
          },
          warm: '#FAF9F7',
          off: '#F4F4F6',
        }
      },
      fontFamily: {
        hero: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(28, 28, 30, 0.04)',
        'card': '0 8px 30px rgba(28, 28, 30, 0.08)',
        'lifted': '0 20px 60px rgba(28, 28, 30, 0.12)',
      },
      borderRadius: {
        'brand': '8px',
        'brand-lg': '16px',
      }
    },
  },
  plugins: [],
}
