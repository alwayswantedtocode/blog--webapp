/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Condensed", "sans-serif"],
        serif: ["Merriweather", "serif"],
        slab: ["Roboto Slab", "serif"],
        mono: ["Chivo Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
