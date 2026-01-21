/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#b882ff',
        dark: {
          900: '#1a1a1a', // Example custom dark
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Will add Google Font link later
      },
    },
  },
  plugins: [],
}
