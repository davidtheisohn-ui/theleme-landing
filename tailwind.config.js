/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: {
        brand: { DEFAULT: '#0D6EFD', 50:'#E8F0FF' },
        accent: '#C7F2E3',
        ink: '#0F172A',
        paper: '#FFFFFF'
      },
      borderRadius: { '2xl': '1.25rem' }
    },
  },
  plugins: [],
}
