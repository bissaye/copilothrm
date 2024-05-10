/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.tsx",
    "./src/main.tsx",
    "./src/views/components/ui/**/.tsx",
    "./src/views/components/common/**/.tsx",
    "./src/views/pages/**/.tsx",
    "./src/views/layouts/**/.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT:'#4F46E5',
          50 : '#A5B4FC',
          100: '#6366F1',
          200: '#4F46E5',
          300: '#312E81'
        }
      },
    },
  },
  plugins: [],
}

