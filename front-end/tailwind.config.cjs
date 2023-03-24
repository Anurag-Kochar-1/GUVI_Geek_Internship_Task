/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#AC58F5",
        dark: "#0F172A",
        mid: "#64748B",
        light: "#F8FBFE",
      },
    },
  },
  plugins: [],
};
