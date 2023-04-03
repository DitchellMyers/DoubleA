/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sectionBG: "url('../public/SectionBG.jpg')",
      },
      dropShadow: {
        glow2: [
          "0 0px 1px rgba(0, 0, 0, 0.5)",
          "0 0px 4px rgba(209, 213, 219, 0.5)",
          "0 0px 8px rgba(209, 213, 219, 0.5)",
        ],
        glow: [
          "0 0px 1px rgba(0, 0, 0, 0.5)",
          "0 0px 3px rgba(209, 213, 219, 0.5)",
          "0 0px 4px rgba(209, 213, 219, 0.5)",
          "0 0px 6px rgba(209, 213, 219, 0.5)",
          "0 0px 8px rgba(209, 213, 219, 0.5)",
        ],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
