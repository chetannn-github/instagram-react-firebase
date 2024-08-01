/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'dynamic': 'calc(100vw - 250px)',
        'lg':'calc(40vw - 250px)'
      },
    },
  },
  plugins: [],
}

