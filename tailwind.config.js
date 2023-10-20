/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      fontFamily: {
        josefinSans: "'Josefin Sans', sans-serif",
        orbitron: "'Orbitron', sans-serif",
        poppins: "'Poppins', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}

