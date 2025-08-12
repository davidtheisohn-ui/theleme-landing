/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: {
        brand: { DEFAULT: '#91A6FF', 50:'#EEF3FF' },
        accent: '#C7F2E3',
        ink: '#111111',
        paper: '#F7F7F5'
      },
      borderRadius: { '2xl': '1.25rem' }
    },
  },
  plugins: [],
}
