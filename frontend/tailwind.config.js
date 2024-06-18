/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        back: 'var(--background-color)',
        pri: 'var(--text-color)',
        fore: 'var(--foreground-color)',
      },
    },
  },
  plugins: [],
}