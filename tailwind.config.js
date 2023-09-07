/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '320px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '1920px',
      }
    },
  },
  plugins: [],
}

