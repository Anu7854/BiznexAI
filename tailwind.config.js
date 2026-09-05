/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070907",
        panel: "#0d110e",
        line: "#202820",
        lime: "#b7f34a",
        mint: "#d8ff9a"
      },
      boxShadow: {
        glow: "0 0 60px rgba(183,243,74,.12)"
      }
    }
  },
  plugins: []
}
