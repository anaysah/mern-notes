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

        'fore-pri': 'var(--foreground-pri-color)',
        'fore-sec': 'var(--foreground-sec-color)',

        pri: 'var(--text-pri-color)',
        sec: 'var(--text-sec-color)',

        divider: 'var(--divider-color)',
        
        'icon-pri': 'var(--icon-pri-color)',
        'icon-sec': 'var(--icon-sec-color)',
      },
    },
  },
  plugins: [],
}