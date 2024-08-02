/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        
        'large':'calc(40vw - 250px)'
      },
    },
  },
  plugins: [],
}

