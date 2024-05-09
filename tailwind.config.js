/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT:'#4F46E5',
          50 : '#A5B4FC',
          100: '#6366F1',
          200: '#4F46E5'
        }
      },
    },
  },
  plugins: [],
}

